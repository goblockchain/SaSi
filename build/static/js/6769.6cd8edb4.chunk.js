"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6769],{13352:function(e,t,n){const a=n(87253).default.button.withConfig({displayName:"FilterOption",componentId:"sc-f01a2a07-0"})`
  height: 100%;
  color: ${({theme:e,active:t})=>e.neutral1};
  background-color: ${({theme:e,active:t})=>e.surface1};
  margin: 0;
  padding: 6px 6px 6px 14px;
  border-radius: 12px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 535;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  border: 1px solid ${({theme:e})=>e.surface3};
  outline: ${({theme:e,active:t,highlight:n})=>t&&n?`1px solid ${e.accent1}`:"none"};

  :hover {
    cursor: pointer;
    background-color: ${({theme:e,active:t})=>t?e.accent2:e.surface2};
    opacity: ${({theme:e,active:t})=>t?e.opacity.hover:1};
  }
  :focus {
    background-color: ${({theme:e,active:t})=>t?e.surface2:e.surface3};
  }
`;t.Z=a},1670:function(e,t,n){n.d(t,{W9:function(){return h},ZP:function(){return O},rD:function(){return j}});var a=n(42893),i=n(12204),r=n(11569),o=n(17487),c=n(55338),m=n(30719),d=n(13712),l=n(96315),u=n(83931),s=n(29304),M=n(56564),N=n(13120),p=n(87253),y=n(35458),T=n(86403),V=n(13352);const j={[o.XH.HOUR]:"1H",[o.XH.DAY]:"1D",[o.XH.WEEK]:"1W",[o.XH.MONTH]:"1M",[o.XH.YEAR]:"1Y"},h=[o.XH.HOUR,o.XH.DAY,o.XH.WEEK,o.XH.MONTH,o.XH.YEAR],R=p.default.div.withConfig({displayName:"TimeSelector__InternalMenuItem",componentId:"sc-5b10af64-0"})`
  flex: 1;
  padding: 8px;
  color: ${({theme:e})=>e.neutral1};
  border-radius: 8px;

  :hover {
    cursor: pointer;
    text-decoration: none;
  }
`,g=(0,p.default)(R).withConfig({displayName:"TimeSelector__InternalLinkMenuItem",componentId:"sc-5b10af64-1"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 8px;
  justify-content: space-between;
  text-decoration: none;
  cursor: pointer;

  :hover {
    background-color: ${({theme:e})=>e.surface3};
    text-decoration: none;
  }
`,k=p.default.span.withConfig({displayName:"TimeSelector__MenuTimeFlyout",componentId:"sc-5b10af64-2"})`
  min-width: ${({isInfoExplorePageEnabled:e})=>e?"150px":"240px"};
  max-height: 300px;
  overflow: auto;
  background-color: ${({theme:e})=>e.surface1};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 0.5px solid ${({theme:e})=>e.surface3};
  border-radius: 12px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: absolute;
  top: 48px;
  z-index: 100;
  left: 0px;

  ${({isInfoExplorePageEnabled:e})=>!e&&p.css`
      @media only screen and (max-width: ${y.T1}) {
        left: unset;
        right: 0px;
      }
    `}
`,E=p.default.div.withConfig({displayName:"TimeSelector__StyledMenu",componentId:"sc-5b10af64-3"})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;

  ${({isInfoExplorePageEnabled:e})=>!e&&p.css`
      @media only screen and (max-width: ${y.QD}) {
        width: 72px;
      }
    `}
`,U=p.default.div.withConfig({displayName:"TimeSelector__StyledMenuContent",componentId:"sc-5b10af64-4"})`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  border: none;
  width: 100%;
  vertical-align: middle;
  ${({isInfoExplorePageEnabled:e})=>e&&"white-space: nowrap;"}
`,D=p.default.span.withConfig({displayName:"TimeSelector__Chevron",componentId:"sc-5b10af64-5"})`
  padding-top: 1px;
  color: ${({open:e,theme:t})=>e?t.neutral1:t.neutral2};
`;function O(){const e=(0,p.useTheme)(),t=(0,d.useRef)(null),n=(0,M.Wt)(N.Lk.TIME_SELECTOR),o=(0,M.xk)(N.Lk.TIME_SELECTOR);(0,c.t)(t,n?o:void 0);const[y,R]=(0,m.KO)(T.X3),O=(0,r.C)();return(0,a.jsxs)(E,{ref:t,isInfoExplorePageEnabled:O,children:[(0,a.jsx)(V.Z,{onClick:o,"aria-label":"timeSelector",active:n,"data-testid":"time-selector",children:(0,a.jsxs)(U,{isInfoExplorePageEnabled:O,children:[O?(0,a.jsxs)(a.Fragment,{children:[j[y]," ",(0,a.jsx)(i.cC,{id:"94M5XH"})]}):j[y],(0,a.jsx)(D,{open:n,children:n?(0,a.jsx)(l.Z,{width:20,height:15,viewBox:"0 0 24 20"}):(0,a.jsx)(u.Z,{width:20,height:15,viewBox:"0 0 24 20"})})]})}),n&&(0,a.jsx)(k,{isInfoExplorePageEnabled:O,children:h.map((t=>(0,a.jsxs)(g,{"data-testid":j[t],onClick:()=>{R(t),o()},children:[O?(0,a.jsxs)("div",{children:[j[t]," ",(0,a.jsx)(i.cC,{id:"94M5XH"})]}):(0,a.jsx)("div",{children:j[t]}),t===y&&(0,a.jsx)(s.Z,{color:e.accent1,size:16})]},j[t])))})]})}},97220:function(e,t,n){n.d(t,{u:function(){return a}});const a=[{id:"VG9rZW46RVRIRVJFVU1fMHgxYmJmMjVlNzFlYzQ4Yjg0ZDc3MzgwOWI0YmE1NWI2ZjRiZTk0NmZi",name:"Real Digital",chain:"ETHEREUM",address:"0x1BBf25e71EC48B84d773809B4bA55B6F4bE946Fb",symbol:"RD",standard:"ERC20",market:{id:"VG9rZW5NYXJrZXQ6RVRIRVJFVU1fMHgxQkJmMjVlNzFFQzQ4Qjg0ZDc3MzgwOUI0YkE1NUI2RjRiRTk0NkZiX1VTRA==",totalValueLocked:{id:"QW1vdW50OjIxMzI0OTYyLjA4NzkwNjY4X1VTRA==",value:21324962.08790668,currency:"USD",__typename:"Amount"},price:{id:"QW1vdW50OjAuMzgyNzY1MDM0Mjg3OTA4MTVfVVNE",value:5.2,currency:"USD",__typename:"Amount"},pricePercentChange:{id:"QW1vdW50Oi03LjQyNjcxNTE0NTI5OTEwN19VU0Q=",currency:"USD",value:-7.426715145299107,__typename:"Amount"},volume:{id:"QW1vdW50OjIxNjc1My4yNjMwNzk2NzMwNV9VU0Q=",value:216753.26307967305,currency:"USD",__typename:"Amount"},__typename:"TokenMarket"},project:{id:"VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4MWJiZjI1ZTcxZWM0OGI4NGQ3NzM4MDliNGJhNTViNmY0YmU5NDZmYl9Wb3c=",logoUrl:"https://i.im.ge/2023/12/04/C4zQBT.image-76.png",__typename:"TokenProject"},__typename:"Token"},{__typename:"Token",id:"VG9rZW46RVRIRVJFVU1fMHg4MzkwYTFkYTA3ZTM3NmVmN2FkZDRiZTg1OWJhNzRmYjgzYWEwMmQ1",name:"Tesouro Prefixado 2026",standard:"ERC20",symbol:"TP26",chain:"ETHEREUM",address:"0x8390a1da07e376ef7add4be859ba74fb83aa02d5",market:{id:"VG9rZW5NYXJrZXQ6RVRIRVJFVU1fMHg4MzkwYTFEQTA3RTM3NmVmN2FEZDRCZTg1OUJBNzRGYjgzYUEwMkQ1X1VTRA==",price:{__typename:"Amount",id:"QW1vdW50OjAuMDE3Mzk4MjkwODU3OTY4MzM2X1VTRA==",value:166.1,currency:"USD"},pricePercentChange:{__typename:"Amount",id:"QW1vdW50OjQxLjE0OTY0MjkxOTUzMDg3Nl9VU0Q=",currency:"USD",value:41.149642919530876},totalValueLocked:{__typename:"Amount",id:"QW1vdW50OjQwMzg3MDIuNjkxNDM1NTM4X1VTRA==",value:4038702.691435538,currency:"USD"},volume:{__typename:"Amount",id:"QW1vdW50OjE5NDQ3OTA3LjE1ODg0NjJfVVNE",value:19447907.1588462,currency:"USD"},__typename:"TokenMarket"},project:{id:"VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4ODM5MGExZGEwN2UzNzZlZjdhZGQ0YmU4NTliYTc0ZmI4M2FhMDJkNV9Hcm9r",logoUrl:"https://i.im.ge/2023/11/27/CQmBj4.Group-11.png",__typename:"TokenProject",description:'The "Prefixed Treasury 2026" is an investment with maturity on 01/01/2026, yielding R$1,000 per security at maturity. It is ideal for medium-term investments without semi-annual interest, and can be redeemed in advance at market value.'}},{id:"VG9rZW46RVRIRVJFVU1fMHgyMjYwZmFjNWU1NTQyYTc3M2FhNDRmYmNmZWRmN2MxOTNiYzJjNTk5",name:"Tesouro Selic 2026",chain:"ETHEREUM",address:"0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",symbol:"TS26",standard:"ERC20",market:{id:"VG9rZW5NYXJrZXQ6RVRIRVJFVU1fMHgyMjYwRkFDNUU1NTQyYTc3M0FhNDRmQkNmZURmN0MxOTNiYzJDNTk5X1VTRA==",totalValueLocked:{id:"QW1vdW50OjE3NDY2Mjg2MC41MjI3NjUzN19VU0Q=",value:174662860.52276537,currency:"USD",__typename:"Amount"},price:{id:"QW1vdW50OjM3MjgwLjgxNjgzNDI1ODg0X1VTRA==",value:2877.98,currency:"USD",__typename:"Amount"},pricePercentChange:{id:"QW1vdW50Oi0xLjE1NDE4MzAxMTkyODgyN19VU0Q=",currency:"USD",value:-1.154183011928827,__typename:"Amount"},volume:{id:"QW1vdW50OjE5NzQ4NjY3LjI1Mjg5OTE3X1VTRA==",value:19748667.25289917,currency:"USD",__typename:"Amount"},__typename:"TokenMarket"},project:{id:"VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4MjI2MGZhYzVlNTU0MmE3NzNhYTQ0ZmJjZmVkZjdjMTkzYmMyYzU5OV9XcmFwcGVkIEJpdGNvaW4=",logoUrl:"https://i.im.ge/2023/11/27/CQmGWC.Group-12.png",__typename:"TokenProject",description:"This title expires on 03/01/2029. Recommended for those who want to make medium-term investments Title with daily profitability linked to the economy's interest rate (Selic rate). This means that if the Selic rate increases, your profitability increases and if the Selic rate decreases, your profitability decreases. As it does not pay half-yearly interest, it is more interesting for those who can let their money earn until the investment matures."},__typename:"Token"},{__typename:"Token",id:"VG9rZW46RVRIRVJFVU1fMHg1MTQ5MTA3NzFhZjljYTY1NmFmODQwZGZmODNlODI2NGVjZjk4NmNh",standard:"ERC20",symbol:"TP29",name:"Tesouro Prefixado 2029",slug:"tesouro-prefixado-2029",address:"0x514910771af9ca656af840dff83e8264ecf986ca",chain:"ETHEREUM",market:{id:"VG9rZW5NYXJrZXQ6RVRIRVJFVU1fMHg1MTQ5MTA3NzFBRjlDYTY1NmFmODQwZGZmODNFODI2NEVjRjk4NkNBX1VTRA==",price:{__typename:"Amount",id:"QW1vdW50OjE0LjY2NzE3Njg1Njk2OTI5Ml9VU0Q=",value:120.78,currency:"USD"},pricePercentChange:{__typename:"Amount",id:"QW1vdW50Oi0wLjgyOTgwMjYzMzU5Mjg5NjdfVVNE",currency:"USD",value:-.8298026335928967},totalValueLocked:{__typename:"Amount",id:"QW1vdW50OjI5NjU5MjI1Ljc0MTIyOTcxN19VU0Q=",value:29659225.741229717,currency:"USD"},volume:{__typename:"Amount",id:"QW1vdW50OjE2MzUzMzE3LjA0MzEwMTMxX1VTRA==",value:16353317.04310131,currency:"USD"},__typename:"TokenMarket"},project:{id:"VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NTE0OTEwNzcxYWY5Y2E2NTZhZjg0MGRmZjgzZTgyNjRlY2Y5ODZjYV9DaGFpbmxpbms",logoUrl:"https://i.im.ge/2023/11/27/CQm4OD.Group-14.png",__typename:"TokenProject",standard:"ERC20",symbol:"ETH",description:"This title expires on 01/01/2029. Recommended for those who want to make medium-term investments. Prefixed title, that is, at the time of purchase, you already know exactly how much you will receive in the future (always R$1,000 per unit of title). It is more interesting for those who can let their money earn until the investment matures, as it does not pay half-yearly interest. In case of early redemption, the National Treasury guarantees its repurchase at market values."}},{id:"VG9rZW46RVRIRVJFVU1fMHg5NmFkZDQxNzI5M2E0OWU4MGYwMjQ3MzRlOTZjZmQ4YjM1NWJjYzE0",name:"Tesouro Selic 2029",chain:"ETHEREUM",address:"0x96aDD417293a49E80f024734e96CFd8b355bCc14",symbol:"TS29",standard:"ERC20",market:{id:"VG9rZW5NYXJrZXQ6RVRIRVJFVU1fMHg5NmFERDQxNzI5M2E0OUU4MGYwMjQ3MzRlOTZDRmQ4YjM1NWJDYzE0X1VTRA==",totalValueLocked:{id:"QW1vdW50OjQ0NTY1NS4wNDQyMDI1MTk5M19VU0Q=",value:445655.04420251993,currency:"USD",__typename:"Amount"},price:{id:"QW1vdW50OjEuNjEwMDA2ODEwODEwOTUyNF9VU0Q=",value:2855.13,currency:"USD",__typename:"Amount"},pricePercentChange:{id:"QW1vdW50OjM2Ljk3NDczMzEwNzA2ODY5NF9VU0Q=",currency:"USD",value:36.974733107068694,__typename:"Amount"},volume:{id:"QW1vdW50OjY1NjE4NTguODM2ODE1NjE4X1VTRA==",value:6561858.836815618,currency:"USD",__typename:"Amount"},__typename:"TokenMarket"},project:{id:"VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4OTZhZGQ0MTcyOTNhNDllODBmMDI0NzM0ZTk2Y2ZkOGIzNTViY2MxNF9MaXF1aWRMYXllcg==",logoUrl:"https://i.im.ge/2023/11/27/CQmJzY.Tesouro-Prefixado-2026.png",__typename:"TokenProject",description:"This title expires on 03/01/2029. Recommended for those who want to make medium-term investments Title with daily profitability linked to the economy's interest rate (Selic rate). This means that if the Selic rate increases, your profitability increases and if the Selic rate decreases, your profitability decreases. As it does not pay half-yearly interest, it is more interesting for those who can let their money earn until the investment matures."},__typename:"Token"},{id:"VG9rZW46RVRIRVJFVU1fMHhkMWQyZWIxYjFlOTBiNjM4NTg4NzI4YjQxMzAxMzdkMjYyYzg3Y2Fl",name:"Col\xf4mbia",chain:"ETHEREUM",address:"0xd1d2Eb1B1e90B638588728b4130137D262C87cae",symbol:"COL",standard:"ERC20",market:{id:"VG9rZW5NYXJrZXQ6RVRIRVJFVU1fMHhkMWQyRWIxQjFlOTBCNjM4NTg4NzI4YjQxMzAxMzdEMjYyQzg3Y2FlX1VTRA==",totalValueLocked:{id:"QW1vdW50OjI3MjM4OTEuODIzODcxOTA5X1VTRA==",value:2723891.823871909,currency:"USD",__typename:"Amount"},price:{id:"QW1vdW50OjAuMDI2NjU1NzA3OTM1NDY0MTVfVVNE",value:.02665570793546415,currency:"USD",__typename:"Amount"},pricePercentChange:{id:"QW1vdW50Oi0wLjAwMjU4Nzk1OTA4NDg0MTMxNDRfVVNE",currency:"USD",value:-.0025879590848413144,__typename:"Amount"},volume:{id:"QW1vdW50Ojk4MTQxMy45ODY0NDI1NjU5X1VTRA==",value:981413.9864425659,currency:"USD",__typename:"Amount"},__typename:"TokenMarket"},project:{id:"VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4ZDFkMmViMWIxZTkwYjYzODU4ODcyOGI0MTMwMTM3ZDI2MmM4N2NhZV9HQUxB",logoUrl:"https://i.im.ge/2023/12/04/C4zXyL.image-83.png",__typename:"TokenProject"},__typename:"Token"},{id:"VG9rZW46RVRIRVJFVU1fMHhmNTdlN2U3YzIzOTc4YzNjYWVjM2MzNTQ4ZTNkNjE1YzM0NmU3OWZm",name:"Uruguay",chain:"ETHEREUM",address:"0xF57e7e7C23978C3cAEC3C3548E3D615c346e79fF",symbol:"URY",standard:"ERC20",market:{id:"VG9rZW5NYXJrZXQ6RVRIRVJFVU1fMHhGNTdlN2U3QzIzOTc4QzNjQUVDM0MzNTQ4RTNENjE1YzM0NmU3OWZGX1VTRA==",totalValueLocked:{id:"QW1vdW50OjM4NjUyODMuMTM2OTAxNTc0N19VU0Q=",value:3865283.1369015747,currency:"USD",__typename:"Amount"},price:{id:"QW1vdW50OjEuNDM2NTA4OTkxMDAwOTk2NV9VU0Q=",value:1.4365089910009965,currency:"USD",__typename:"Amount"},pricePercentChange:{id:"QW1vdW50OjEuODIwNDk0MTI0MzE1MjE5NV9VU0Q=",currency:"USD",value:1.8204941243152195,__typename:"Amount"},volume:{id:"QW1vdW50OjkxNDk1Ny4yNzQ1MDg5MjMzX1VTRA==",value:914957.2745089233,currency:"USD",__typename:"Amount"},__typename:"TokenMarket"},project:{id:"VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4ZjU3ZTdlN2MyMzk3OGMzY2FlYzNjMzU0OGUzZDYxNWMzNDZlNzlmZl9JbW11dGFibGU=",logoUrl:"https://i.im.ge/2023/12/04/C4zMY0.image-79-1.png",__typename:"TokenProject"},__typename:"Token"},{id:"VG9rZW46RVRIRVJFVU1fMHgzYmE5MjVmZGVhZTZiNDZkMGJiNGQ0MjRkODI5OTgyY2IyZjczMDll",name:"Hong Kong",chain:"ETHEREUM",address:"0x3Ba925fdeAe6B46d0BB4d424D829982Cb2F7309e",symbol:"HOK",standard:"ERC20",market:{id:"VG9rZW5NYXJrZXQ6RVRIRVJFVU1fMHgzQmE5MjVmZGVBZTZCNDZkMEJCNGQ0MjREODI5OTgyQ2IyRjczMDllX1VTRA==",totalValueLocked:{id:"QW1vdW50OjM2OTkyNjcuMjA2ODQ5MzUzNF9VU0Q=",value:3699267.2068493534,currency:"USD",__typename:"Amount"},price:{id:"QW1vdW50OjAuMTE2ODg2MDc3MTgyNzYxNTdfVVNE",value:.11688607718276157,currency:"USD",__typename:"Amount"},pricePercentChange:{id:"QW1vdW50Oi0xNS4wNTczNzg1OTkzNDkzN19VU0Q=",currency:"USD",value:-15.05737859934937,__typename:"Amount"},volume:{id:"QW1vdW50OjkzMjgxNS40MjM3NDg3OTEyX1VTRA==",value:932815.4237487912,currency:"USD",__typename:"Amount"},__typename:"TokenMarket"},project:{id:"VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4M2JhOTI1ZmRlYWU2YjQ2ZDBiYjRkNDI0ZDgyOTk4MmNiMmY3MzA5ZV9SYWJiaXRY",logoUrl:"https://i.im.ge/2023/12/04/C4zosc.image-69.png",__typename:"TokenProject"},__typename:"Token"},{id:"VG9rZW46RVRIRVJFVU1fMHgzN2RhOWRlMzhjNDA5NGUwOTBjMDE0MzI1ZjZlZjRiYWViMzAyNjI2",name:"Jap\xe3o",chain:"ETHEREUM",address:"0x37DA9DE38c4094e090c014325f6eF4baEB302626",symbol:"JAP",standard:"ERC20",market:{id:"VG9rZW5NYXJrZXQ6RVRIRVJFVU1fMHgzN0RBOURFMzhjNDA5NGUwOTBjMDE0MzI1ZjZlRjRiYUVCMzAyNjI2X1VTRA==",totalValueLocked:{id:"QW1vdW50OjUyMDc0Ni4yNDQ5OTkxMzI0X1VTRA==",value:520746.2449991324,currency:"USD",__typename:"Amount"},price:{id:"QW1vdW50OjAuMjQ5MjUxNjA5MDE5OTI0Ml9VU0Q=",value:.2492516090199242,currency:"USD",__typename:"Amount"},pricePercentChange:{id:"QW1vdW50OjM0LjQ0NTUzMjQwNzQ3NDk1X1VTRA==",currency:"USD",value:34.44553240747495,__typename:"Amount"},volume:{id:"QW1vdW50OjkyMjczOC45NTQzOTMzMjU0X1VTRA==",value:922738.9543933254,currency:"USD",__typename:"Amount"},__typename:"TokenMarket"},project:{id:"VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4MzdkYTlkZTM4YzQwOTRlMDkwYzAxNDMyNWY2ZWY0YmFlYjMwMjYyNl9PVFNlYQ==",logoUrl:"https://i.im.ge/2023/12/04/C4zlzG.image-74.png",__typename:"TokenProject"},__typename:"Token"}]}}]);
//# sourceMappingURL=6769.6cd8edb4.chunk.js.map