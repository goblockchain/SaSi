## SaSi

**SaSi is a protocol that enables the exchange of CDBCs (ERC20s) that already run on the Ripple EVM Sidechain for Bonds (ERC1155s).**

## Contracts
|Contract | Address | Network|
--- | --- | ---|
|SaSiFactory|0xC6FCCF8Aaa53Ec976483a23388aea068BD7eBcAb|XRPL EVM Sidechain|
|SaSiRouter|0xB2F3994FD5B2CCf1Dc63FC05E01B06d376170F3f|XRPL EVM Sidechain|
|SaSiPair (CDBC/Bond)|0x9bfaadc96d3f0ac268716fc9fe5489a5348e47e4|XRPL EVM Sidechain|
|CDBC|0x8fF97eCEaf1d5e455e7C3C2dB16e5eF90FfE265c|XRPL EVM Sidechain|
|Bond|0x2136F6805Ec91231eb0527884adE475cb9C50c37|XRPL EVM Sidechain|
|SaSiRouter|0xB2F3994FD5B2CCf1Dc63FC05E01B06d376170F3f|XRPL EVM Sidechain|

### Swap using our pools
In order to make a swap using the SaSi protocol of our team, do the following:
0. Connect your metamask wallet to the sidechain and get some faucets as described here [Ripple Sidechain EVM](https://opensource.ripple.com/docs/evm-sidechain/get-started-evm-sidechain/)
1. Mint an amount of a CDBC for yourself using the function `mint` in the contract [CDBC](https://evm-sidechain.xrpl.org/address/0x8fF97eCEaf1d5e455e7C3C2dB16e5eF90FfE265c).
2. Mint an amount of a bond for yourself using the function `mint` in the contract [Bond](https://evm-sidechain.xrpl.org/address/0x2136F6805Ec91231eb0527884adE475cb9C50c37).
3. Use the function `swapERC1155TokensForERC20Tokens` or the function `swapERC20TokensForERC1155Tokens` in the contract [SaSiRouter](https://evm-sidechain.xrpl.org/address/0xB2F3994FD5B2CCf1Dc63FC05E01B06d376170F3f), according to your wish. 

### Implement Your SaSi Protocol In a Nutshell
0. Connect to the Ripple EVM Sidechain on Metamask 
1. Deploy the smart contracts of the SaSi protocol.
2. Deploy the tokens that will be exchanged in the pool.
3. The pool is created in the SaSiFactory.sol
4. The deployer of the contracts gives authorization to an account to add liquidity of the tokens in a pool. 
5. The authorized entity adds liquidity to the pool.
6. An account with some tokens of either token in a certain pool can swap its tokens, in an exchange from CDBCs per bonds or vice-versa.

### Detailed Implementation Steps For Your SaSi Protocol
0. Follow the steps here [Get Started EVM Sidechain](https://opensource.ripple.com/docs/evm-sidechain/get-started-evm-sidechain/) to load your Metamask wallet with XRP.
1. Clone this repository.
2. Navigate to the the `smartcontracts` repository by
```shell
$ cd/sasi/smartcontracts
``` 
3. Install the `remixd` package inside the current directory
```shell
$ npm install -g @remix-project/remixd
```
4. Once installed, run the following in the current directory
```shell
remixd
```
6. Go to [Remix IDE](https://remix.ethereum.org/)
7. Follow the steps here [Remix - Connect to Localhost](https://remix-ide.readthedocs.io/en/latest/remixd.html) to connect the Remix IDE to your current environment (localhost).
8. In the Remix IDE:
    - select `SaSiFactory` at `src/core/SasiFactory.sol`
    - select the compiler version `0.8.23`
    -  under `Solidity compiler` tab and under `Advanced Configurations`, enable the optimization with 200 runs.  
9. In the deploy tab, deploy the `SaSiFactory` contract with the following params:
    - `_feeToSetter`: the address to which the fees on the swaps go to.
    - `_govBr`: the government wallet address that will have control over the protocol by being the only one allowed to create pools and deciding the entities who are able to addLiquidity to the different pools created.
10. Deploy the CDBCs (ERC20) and bonds (ERC1155) to the Ripple sidechain.
    - We used the `MockToken.sol` contract to represent both the CDBCs and the bonds.
    - Deploy the `mockERC20Token` contract to represent the CDBC.
    - Deploy the `mockERC1155Token` contract to represent the bonds.
11. Once the deployed tokens have been deployed, make sure the `entity` allowed to `addLiquidity` to the pool has received these tokens as well, by either direct transfer of the tokens to the `entity` or by the `entity` itself minting for itself the tokens.
12. By using the function `createPair`, the `_govBr` account must create a pair for two tokens: one that is a CDBC and another that is the bond. The other parameters are explained as follows:
    - `tokenA` token in the pool.
    - `tokenB` token in the pool.
    - `amount0` initialPrice of token. It's not deterministic for the pair address creation.
    - `amount1` initialPrice of token. It's not deterministic for the pair address creation.
    - `id` id of the bond (ERC1155) in the pool.
The order of the tokens is not important when determining which one is `tokenA` and `tokenB`. The contract has the `sortTokens` function that will always regard the `token0` as the ERC20 and `token1` as the ERC1155. Also, the `amount0` and `amount1` variables were created thinking on SaSi version 2, where these amounts will determine the initial price between the bond and the CDBC in the pool, making it so that the `entity` that adds liquidity to the pool can only add liquidity in the proportion determined by the `_govBr`, solving therefore the problem of determining initial prices for a pair of CDBC and a particular bond. 
13. Deploy the `SaSiRouter` contract with the following params:
    - `_factory`: address of the factory that has been deployed on step 9.
    - `_govBr`: the address of the entity that will be able to create the pools and that will be able to give power to accounts to addLiquidity to the pools. Usually, this one should be equal to the second parameter os the `SaSiFactory`.
    - `wNative`: the address of the wrapped token that represents the XRP token in the Ripple EVM-compatible sidechain.
14. Once the `SaSiRouter` has been deployed, the `_govBr` must use the function `addEntity` to add power to the account which has the tokens and will `addLiquidity` to the pool.
15. Once the the right entities have been granted permission to be `entities` in the `SaSiRouter` contract, the `entity` can call the `addLiquidity` function, wherein each of the params mean:
    -    `address tokenA` one of the tokens 
    -    `address tokenB` one of the tokens
    -    `uint id` id of the bond token
    -    `uint amountADesired` amount of liquidity desired to be added for tokenA
    -    `uint amountBDesired` amount of liquidity desired to be added for tokenB
    -    `uint amountAMin` minimum of liquidity to be added for tokenA
    -    `uint amountBMin` minimum of liquidity to be added for tokenB
    -    `address to` address for which the LP tokens of the pool will be given for
    -    `uint deadline` the deadline till which the tx may happen
16. Once liquidity has been added to a pair pool of a particular CDBC and bond, anyone willing to exchange their CDBC or bonds by the other token in the pool can call one of the two functions below in the pool:
    - `swapERC20TokensForERC1155Tokens`: swap CDBC per bond.
    - `swapERC1155TokensForERC20Tokens`: swap bond per CDBC.
The params for these functions are defined as below:
    - `uint amountIn` the amount of tokens you want to exchange in the pair pool.
    - `uint amountOutMin` the minimum amount of tokens you want to get back, determining therefore the allowed slippage amount.
    - `address[] calldata path` the tokens to be exchanged. The first element must be the token you are giving in and the second must be the token you are getting out of the pool.
    - `uint id` the id of the bond token.
    - `address to` the address to which the swap will happen to.
    - `uint deadline` the timestamp till which your tx might be executed.
