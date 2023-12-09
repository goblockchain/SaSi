// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import {SaSiFactory} from "../src/core/SaSiFactory.sol";
import {INative} from "../src/interfaces/INative.sol";
import {NATIVE} from "../src/core/Native.sol";
import {IERC1155Receiver} from "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
import {SaSiRouter} from "../src/periphery/SaSiRouter.sol";
import {mockERC1155Token, mockERC20Token} from "../src/MockToken.sol";
import "@openzeppelin/contracts/utils/introspection/ERC165Checker.sol";
import {SaSiLibrary} from "../src/libraries/SaSiLibrary.sol";
import {SaSiPair} from "../src/core/SaSiPair.sol";

contract CounterTest is Test, IERC1155Receiver {
    SaSiPair pair;
    SaSiRouter router;
    SaSiFactory public factory;
    NATIVE public native;
    address randomUser;
    mockERC1155Token token1;
    mockERC20Token token0;
    uint constant ID = 1;
    address govBr;
    address entity;

    function setUp() public {
        govBr = makeAddr("govBr");
        randomUser = makeAddr("randomUser");
        entity = makeAddr("entity");
        vm.startPrank(govBr);
        factory = new SaSiFactory(govBr, govBr);
        token1 = new mockERC1155Token();
        token0 = new mockERC20Token();
        native = new NATIVE();
        router = new SaSiRouter(address(factory), govBr, address(native));
        router.addEntity(entity);
        vm.stopPrank();

        vm.startPrank(randomUser);
        token1.mint(randomUser, 1, 1 ether);
        token1.mint(entity, 1, 1 ether);
        token0.mint(randomUser, 5 ether);
        token0.mint(entity, 2 ether);
        vm.stopPrank();
        vm.expectRevert();
        // below reverts because erc20 does not support ERC165.
        assertEq(ERC165Checker.supportsERC165(address(token0)), false);

        // below does not revert because erc1155 supports ERC165.
        assertEq(ERC165Checker.supportsERC165(address(token1)), true);
        assertEq(token1.supportsInterface(bytes4(0xd9b67a26)), true); // is IERC1155
        assertEq(token1.supportsInterface(bytes4(0x36372b07)), false); // is IERC20

        /*╔═════════════════════════════╗
          ║   MOCK PAIR USED IN TESTS   ║
          ╚═════════════════════════════╝*/
        vm.startPrank(govBr);
        pair = SaSiPair(
            factory.createPair(
                address(token0),
                address(token1),
                token0.balanceOf(govBr),
                token1.balanceOf(govBr, ID),
                ID
            )
        );
        vm.stopPrank();
        assertEq(factory.allPairsLength(), 1);

        vm.startPrank(entity);
        token0.approve(address(router), 10 ether);
        token1.setApprovalForAll(address(router), true);
        router.addLiquidity(
            address(token0),
            address(token1),
            1,
            2 ether,
            1 ether,
            0,
            0,
            entity,
            block.timestamp + 1 days
        );
        vm.stopPrank();
    }

    function test_swap() public {
        /**
         * NOTE: So far, for the swap to work, the following has been done:
         * 1. The factory has been deployed.
         * 2. The tokens have been deployed.
         * 3. The router has been deployed.
         * 4. The pair has been created in the factory by the government.
         * 5. Liquidity has been added to the pair through the router by an authorized entity -- function `addEntity` can be called by the government on router.
         */

        /// @dev the government will try to `swap` the tokens.
        vm.startPrank(govBr);

        // 0. approve router.
        token1.setApprovalForAll(address(router), true);
        token0.approve(address(router), 20 ether);
        // 1. build path.
        address[] memory path = new address[](2);
        path[0] = address(token1); // erc1155
        path[1] = address(token0); // erc20
        uint amountIn = token1.balanceOf(govBr, 1) / 5; //  2 ether

        // FRONT-END simulation of swap:
        // 0. Front-end may call the function `getPair` on factory.
        address pairFromFactory = factory.getPair(
            address(token0),
            address(token1),
            1
        );

        // 1. Front-end may call the function `getAmountsOut` on router.
        uint[] memory amounts = new uint[](2);
        amounts = router.getAmountsOut(amountIn, 1, path);

        emit log_named_uint("amounts[0]", amounts[0]);
        emit log_named_uint("amounts[1]", amounts[1]);
        assert(amounts[1] == 1331997327989311957);

        /// @dev swap
        // below swapped 2 ether for 1331997327989311957
        router.swapERC1155TokensForERC20Tokens(
            amountIn,
            0,
            path,
            1,
            govBr,
            block.timestamp + 1 days
        );

        // 2. Front-end may call the function.

        /// @dev a non-government will try to swap the tokens.
        vm.stopPrank();
        vm.startPrank(randomUser);

        // 0. approve router.
        token1.setApprovalForAll(address(router), true);
        token0.approve(address(router), 20 ether);
        // 1. build path.
        path[0] = address(token0); // erc20
        path[1] = address(token1); // erc1155

        amountIn = token0.balanceOf(randomUser) / 10;

        // FRONT-END simulation of swap:
        // 0. Front-end may call the function `getPair` on factory.
        pairFromFactory = factory.getPair(address(token0), address(token1), 1);

        // 1. Front-end may call the function `getAmountsOut` on router.
        amounts = router.getAmountsOut(amountIn, 1, path);

        emit log_named_uint("amounts[0]", amounts[0]);
        emit log_named_uint("amounts[1]", amounts[1]);
        assert(amounts[1] == 1282037354807102859);

        router.swapERC20TokensForERC1155Tokens(
            amountIn,
            0,
            path,
            1,
            randomUser,
            block.timestamp + 1 days
        );

        address pairFromLib = SaSiLibrary.pairFor(
            address(factory),
            address(token0),
            address(token1),
            1
        );
        assert(address(pairFromLib) == address(pair));
    }

    function test_Factory() public {}

    function test_Library() public {
        // NOTE: Library reverts if pair doesn't exist, as government will be the only one able to create a pair.

        // `pairFor` and `getPair` should return the same address.
        assertEq(
            SaSiLibrary.pairFor(
                address(factory),
                address(token1),
                address(token0),
                ID
            ),
            factory.getPair(address(token0), address(token1), ID)
        );

        // sort works despite order given.
        (address tokenA, address tokenB) = SaSiLibrary.sortTokens(
            address(token1),
            address(token0)
        );
        (address reverseTokenA, address reverseTokenB) = SaSiLibrary.sortTokens(
            address(token0),
            address(token1)
        );
        assert(tokenA == reverseTokenA);
        assert(tokenB == reverseTokenB);

        /**
         * amountA == 1 ether, reserveA = 10 ether, reserveB = 10 ether, so:
         * amountB = amountA * reserveB / reserveB
         * amountB = 1 ether * 10 ether / 10 ether = 1 ether.
         */
        assertEq(
            SaSiLibrary.quote(
                1 ether,
                token0.totalSupply(),
                token1.balanceOf(address(this), ID)
            ),
            833333333333333333
        );

        /**
         * getAmountOut
         * amountIn, reserveIn, reserveOut
         * MATH BELOW:
         * amountOut = amountIn * 0,97% * reserveOut / (reserveIn + amountIn * 0,97%)
         * 0.3% fee for protocol.
         */
        uint amountOut = SaSiLibrary.getAmountOut(
            1 ether, // amountIn
            token0.totalSupply(), // reserveIn, 10 ether
            token1.balanceOf(address(this), ID) // reserveOut, 10 ether
        );
        assertEq(amountOut, 767100100023082249); // 0.906... ether

        /**
         * getAmountIn
         */
        uint amountIn = SaSiLibrary.getAmountIn(
            906610893880149131, // amountOut- erc1155
            token1.balanceOf(address(this), ID), // reserveIn
            token0.totalSupply() // reserveOut
        );
        assertEq(amountIn, 819712444874338082);

        // getReserves returns reserves
        (uint reserveA, uint reserveB) = SaSiLibrary.getReserves(
            address(factory),
            address(token1),
            address(token0),
            ID
        );

        (uint reverseReserveA, uint reverseReserveB) = SaSiLibrary.getReserves(
            address(factory),
            address(token1),
            address(token0),
            ID
        );

        // getReserves returns reserves
        assert(reserveA == 0);
        // getReserves sorts tokens
        assert(reserveA == reverseReserveA);
        // getReserves returns reserves
        assert(reserveA == reserveB);
    }

    /// @dev it works great!
    function test_RouterNormally() public {
        // gov makes itself an entity.
        router.addEntity(address(this));
        // it approves the router to transfer its tokens.
        token0.approve(address(router), type(uint).max);
        token1.setApprovalForAll(address(router), true);
        // liquidity is added for both tokens at once.
        router.addLiquidity(
            address(token0),
            address(token1),
            ID,
            token0.balanceOf(address(this)),
            token1.balanceOf(address(this), ID),
            0,
            0,
            address(this),
            block.timestamp + 1 days
        );

        // liquidity provide (address(this)) receives 9999999999999999000 LP tokens.
        assertEq(pair.balanceOf(address(this)), 9999999999999999000);

        pair.approve(address(router), type(uint).max);
        router.removeLiquidity(
            address(token0),
            address(token1),
            ID,
            9999999999999999000,
            0,
            0,
            address(this),
            block.timestamp + 1 days
        );

        // address(this) receives: 9999999999999999000 ERC1155 tokens of ID 1 && 9999999999999999000 of tokens ERC20.
        // pair still has 1000 of each token.
        assertEq(token0.balanceOf(address(pair)), 1000);
        assertEq(token1.balanceOf(address(pair), ID), 1000);

        assertEq(token1.balanceOf(randomUser, ID), 0.1 ether);
        assertEq(token0.balanceOf(randomUser), 2 ether);

        //NOTE: test swap

        // approve router to get tokens.
        vm.startPrank(randomUser);
        token0.approve(address(router), type(uint).max);
        token1.setApprovalForAll(address(router), true);

        // setup path
        address[] memory path = new address[](2);
        path[0] = address(token0);
        path[1] = address(token1);

        // swap ERC20 -> ERC1155
        router.swapERC20TokensForERC1155Tokens(
            token0.balanceOf(randomUser),
            0,
            path,
            ID,
            randomUser,
            block.timestamp + 1 days
        );

        // check `randomUser` got ERC1155 tokens
        assertEq(token1.balanceOf(randomUser, ID), 0.1 ether + 999);

        // setup path
        path[0] = address(token1);
        path[1] = address(token0);

        // swap ERC1155 -> ERC20
        router.swapERC1155TokensForERC20Tokens(
            token1.balanceOf(randomUser, ID),
            0,
            path,
            ID,
            randomUser,
            block.timestamp + 1 days
        );
        assertEq(token0.balanceOf(randomUser), 2000000000000000979);
    }

    /// @dev it reverts on SaSiPair-L:208 in the `sub` function.
    function test_RouterSaSi() public {
        // gov makes itself an entity.
        router.addEntity(address(this));
        // it approves the router to transfer its tokens.
        token0.approve(address(router), type(uint).max);
        token1.setApprovalForAll(address(router), true);
        uint balance1 = token1.balanceOf(address(this), ID);

        // it adds liquidity of only one token.
        vm.expectRevert();
        router.addLiquidity(
            address(token0),
            address(token1),
            ID,
            0,
            balance1,
            0,
            0,
            address(this),
            block.timestamp + 1 days
        );
    }

    function test_supportsInterface() public {
        assertEq(token1.supportsInterface(bytes4(0xd9b67a26)), true);
    }

    // IERC155Receiver functions

    function onERC1155Received(
        address operator,
        address from,
        uint256 id,
        uint256 value,
        bytes calldata data
    ) external returns (bytes4) {
        emit log_named_uint("id received", id);
        emit log_named_uint("value received", value);
        return
            bytes4(
                keccak256(
                    "onERC1155Received(address,address,uint256,uint256,bytes)"
                )
            );
    }

    function supportsInterface(
        bytes4 interfaceId
    ) external pure returns (bool) {
        if (interfaceId == bytes4(bytes("0xd9b67a26"))) return true;
        return false;
    }

    function onERC1155BatchReceived(
        address operator,
        address from,
        uint256[] calldata ids,
        uint256[] calldata values,
        bytes calldata data
    ) external returns (bytes4) {
        emit log_address(from);
        return
            bytes4(
                keccak256(
                    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"
                )
            );
    }
}
