"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5633],{63548:function(e,n,t){t.d(n,{Z:function(){return R}});var i=t(42893),r=t(12204),o=t(19903),a=t(80815),d=t(66196),s=t(13119),c=t(92483),l=t(48141),u=t(40508),p=t(13712),h=t(87253),m=t(39839),x=t(47371),b=t(57482),g=t(44326),f=t(42881),y=t(60198),j=t(45533),C=t(56823),_=t(48972),w=t(2304),I=t(50163),v=t(925);const $=h.default.div.withConfig({displayName:"CurrencyInputPanel__InputPanel",componentId:"sc-3db49bc3-0"})`
  ${x.lt};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:n})=>n?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,T=h.default.div.withConfig({displayName:"CurrencyInputPanel__Container",componentId:"sc-3db49bc3-1"})`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:n,disabled:t})=>!t&&`\n    :focus,\n    :hover {\n      border: 1px solid ${n?" transparent":e.surface2};\n    }\n  `}
`,N=(0,h.default)(y.Ux).withConfig({displayName:"CurrencyInputPanel__CurrencySelect",componentId:"sc-3db49bc3-2"})`
  align-items: center;
  background-color: ${({selected:e,theme:n})=>e?n.surface1:n.accent1};
  opacity: ${({disabled:e})=>e?.4:1};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  color: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
  cursor: pointer;
  border-radius: 16px;
  outline: none;
  user-select: none;
  border: none;
  font-size: 24px;
  font-weight: 535;
  height: ${({hideInput:e})=>e?"2.8rem":"2.4rem"};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  padding: 0 8px;
  justify-content: space-between;
  margin-left: ${({hideInput:e})=>e?"0":"12px"};
  :focus,
  :hover {
    background-color: ${({selected:e,theme:n})=>e?n.surface2:(0,u._j)(.05,n.accent1)};
  }
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  ${({pointerEvents:e})=>e&&"pointer-events: none"}
`,k=h.default.div.withConfig({displayName:"CurrencyInputPanel__InputRow",componentId:"sc-3db49bc3-3"})`
  ${x.MG};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,S=h.default.div.withConfig({displayName:"CurrencyInputPanel__LabelRow",componentId:"sc-3db49bc3-4"})`
  ${x.MG};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,u._j)(.2,e.neutral2)};
  }
`,A=(0,h.default)(S).withConfig({displayName:"CurrencyInputPanel__FiatRow",componentId:"sc-3db49bc3-5"})`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,B=h.default.span.withConfig({displayName:"CurrencyInputPanel__Aligner",componentId:"sc-3db49bc3-6"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,D=(0,h.default)(g.r).withConfig({displayName:"CurrencyInputPanel__StyledDropDown",componentId:"sc-3db49bc3-7"})`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
    stroke-width: 1.5px;
  }
`,z=h.default.span.withConfig({displayName:"CurrencyInputPanel__StyledTokenName",componentId:"sc-3db49bc3-8"})`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
`,P=h.default.button.withConfig({displayName:"CurrencyInputPanel__StyledBalanceMax",componentId:"sc-3db49bc3-9"})`
  background-color: transparent;
  background-color: ${({theme:e})=>e.accent2};
  border: none;
  border-radius: 12px;
  color: ${({theme:e})=>e.accent1};
  cursor: pointer;
  font-size: 11px;
  font-weight: 535;
  margin-left: 0.25rem;
  opacity: ${({disabled:e})=>e?.4:1};
  padding: 4px 6px;
  pointer-events: ${({disabled:e})=>e?"none":"initial"};

  :hover {
    opacity: ${({disabled:e})=>e?.4:.8};
  }

  :focus {
    outline: none;
  }
`,M=(0,h.default)(_.I).withConfig({displayName:"CurrencyInputPanel__StyledNumericalInput",componentId:"sc-3db49bc3-10"})`
  ${s._Q};
  text-align: left;
`,E=(0,h.default)(c.Z).withConfig({displayName:"CurrencyInputPanel__StyledPrefetchBalancesWrapper",componentId:"sc-3db49bc3-11"})`
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
`;function R({value:e,onUserInput:n,onMax:t,showMaxButton:c,onCurrencySelect:u,currency:x,otherCurrency:g,id:y,showCommonBases:_,showCurrencyAmount:S,disableNonToken:R,renderBalance:U,fiatValue:W,hideBalance:Z=!1,pair:F=null,hideInput:O=!1,locked:L=!1,loading:G=!1,...H}){const[Y,q]=(0,p.useState)(!1),{account:X,chainId:V}=(0,a.useWeb3React)(),J=(0,f._h)(X??void 0,x??void 0),K=(0,h.useTheme)(),{formatCurrencyAmount:Q}=(0,b.Gb)(),ee=(0,p.useCallback)((()=>{q(!1)}),[q]),ne=(0,l.EC)(V);return(0,i.jsxs)($,{id:y,hideInput:O,...H,children:[!L&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(T,{hideInput:O,disabled:!ne,children:[(0,i.jsxs)(k,{style:O?{padding:"0",borderRadius:"8px"}:{},selected:!u,children:[!O&&(0,i.jsx)(M,{className:"token-amount-input",value:e,onUserInput:n,disabled:!ne,$loading:G}),(0,i.jsx)(E,{shouldFetchOnAccountUpdate:Y,$fullWidth:O,children:(0,i.jsx)(N,{disabled:!ne,visible:void 0!==x,selected:!!x,hideInput:O,className:"open-currency-select-button",onClick:()=>{u&&q(!0)},pointerEvents:u?void 0:"none",children:(0,i.jsxs)(B,{children:[(0,i.jsxs)(w.DA,{children:[F?(0,i.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,i.jsx)(j.Z,{currency0:F.token0,currency1:F.token1,size:24,margin:!0})}):x&&(0,i.jsx)(C.Z,{style:{marginRight:"0.5rem"},currency:x,size:"24px"}),F?(0,i.jsxs)(z,{className:"pair-name-container",children:[F?.token0.symbol,":",F?.token1.symbol]}):(0,i.jsx)(z,{className:"token-symbol-container",active:Boolean(x&&x.symbol),children:(x&&x.symbol&&x.symbol.length>20?x.symbol.slice(0,4)+"..."+x.symbol.slice(x.symbol.length-5,x.symbol.length):x?.symbol)||(0,i.jsx)(r.cC,{id:"T0Y2+3"})})]}),u&&(0,i.jsx)(D,{selected:!!x})]})})})]}),Boolean(!O&&!Z&&x)&&(0,i.jsx)(A,{children:(0,i.jsxs)(w.m0,{children:[(0,i.jsx)(s.EG,{$loading:G,children:W&&(0,i.jsx)(v.x,{fiatValue:W})}),X&&(0,i.jsxs)(w.DA,{style:{height:"17px"},children:[(0,i.jsx)(m.Tv.DeprecatedBody,{onClick:t,color:K.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!Z&&x&&J)&&(U?.(J)||(0,i.jsx)(r.cC,{id:"VuFd5C",values:{0:Q({amount:J,type:b.sw.TokenNonTx})}}))}),Boolean(c&&J)&&(0,i.jsx)(d.M8,{events:[o.TM.onClick],name:o.Q0.SWAP_MAX_TOKEN_AMOUNT_SELECTED,element:o.xo.MAX_TOKEN_AMOUNT_BUTTON,children:(0,i.jsx)(P,{onClick:t,children:(0,i.jsx)(r.cC,{id:"4HtGBb"})})})]})]})})]})}),u&&(0,i.jsx)(I.Z,{isOpen:Y,onDismiss:ee,onCurrencySelect:u,selectedCurrency:x,otherSelectedCurrency:g,showCommonBases:_,showCurrencyAmount:S,disableNonToken:R})]})}},4987:function(e,n,t){t.d(n,{q:function(){return _},w:function(){return I}});var i=t(42893),r=t(12204),o=t(80815),a=t(24364),d=t(46591),s=t(41440),c=t(80657),l=t(47096),u=t(63498),p=t(40740),h=t(4292),m=t(87253),x=t(39839),b=t(47371),g=t(2304);const f=m.default.div.withConfig({displayName:"NavigationTabs__Tabs",componentId:"sc-1056be7d-0"})`
  ${b.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,y=(0,m.default)(s.rU).withConfig({displayName:"NavigationTabs__StyledLink",componentId:"sc-1056be7d-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,j=(0,m.default)(x.Tv.SubHeaderLarge).withConfig({displayName:"NavigationTabs__FindPoolTabsText",componentId:"sc-1056be7d-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,C=(0,m.default)(d.Z).withConfig({displayName:"NavigationTabs__StyledArrowLeft",componentId:"sc-1056be7d-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function _({origin:e}){return(0,i.jsx)(f,{children:(0,i.jsxs)(g.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,i.jsx)(s.rU,{to:e,children:(0,i.jsx)(C,{})}),(0,i.jsx)(j,{children:(0,i.jsx)(r.cC,{id:"LCFvJr"})})]})})}const w=(0,m.default)(x.Tv.SubHeaderLarge).withConfig({displayName:"NavigationTabs__AddRemoveTitleText",componentId:"sc-1056be7d-4"})`
  flex: 1;
  margin: auto;
`;function I({adding:e,creating:n,autoSlippage:t,positionID:d,children:s}){const{chainId:x}=(0,o.useWeb3React)(),b=(0,m.useTheme)(),j=(0,u.T)(),_=(0,c.TH)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(d?`/${d.toString()}`:"");return(0,i.jsx)(f,{children:(0,i.jsxs)(g.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,i.jsx)(y,{to:_,onClick:()=>{e&&(j((0,p.dA)()),j((0,h.dA)()))},flex:s?"1":void 0,children:(0,i.jsx)(C,{stroke:b.neutral2})}),(0,i.jsx)(w,{textAlign:s?"start":"center",children:n?(0,i.jsx)(r.cC,{id:"ma87bD"}):e?(0,i.jsx)(r.cC,{id:"E6MqGy"}):(0,i.jsx)(r.cC,{id:"cJtosk"})}),s&&(0,i.jsx)(l.xu,{style:{marginRight:".5rem"},children:s}),(0,i.jsx)(a.Z,{autoSlippage:t,chainId:x,hideRoutingSettings:!0})]})})}},71607:function(e,n,t){t.d(n,{Z:function(){return C}});var i=t(42893),r=t(12204),o=t(80815),a=t(60198),d=t(42246),s=t(60476),c=t(56823),l=t(79371),u=t(2304),p=t(13712),h=t(87253),m=t(39839),x=t(437),b=t(15627),g=t(34120);const f=h.default.div.withConfig({displayName:"UnsupportedCurrencyFooter__DetailsFooter",componentId:"sc-b083a83b-0"})`
  padding-top: calc(16px + 2rem);
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -2rem;
  width: 100%;
  max-width: 400px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: ${({theme:e})=>e.neutral2};
  background-color: ${({theme:e})=>e.surface2};
  z-index: ${x.k.deprecated_zero};

  transform: ${({show:e})=>e?"translateY(0%)":"translateY(-100%)"};
  transition: transform 300ms ease-in-out;
  text-align: center;
`,y=(0,h.default)(a.qL).withConfig({displayName:"UnsupportedCurrencyFooter__StyledButtonEmpty",componentId:"sc-b083a83b-1"})`
  text-decoration: none;
`,j=(0,h.default)(m.Tv.DeprecatedBlue).withConfig({displayName:"UnsupportedCurrencyFooter__AddressText",componentId:"sc-b083a83b-2"})`
  font-size: 12px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 10px;
`}
`;function C({show:e,currencies:n}){const{chainId:t}=(0,o.useWeb3React)(),[a,h]=(0,p.useState)(!1),x=t&&n?n.map((e=>e?.wrapped)):[],C=(0,b.l6)();return(0,i.jsxs)(f,{show:e,children:[(0,i.jsx)(l.Z,{isOpen:a,onDismiss:()=>h(!1),children:(0,i.jsx)(d.ZP,{padding:"2rem",children:(0,i.jsxs)(s.Tz,{gap:"lg",children:[(0,i.jsxs)(u.m0,{children:[(0,i.jsx)(m.Tv.DeprecatedMediumHeader,{children:(0,i.jsx)(r.cC,{id:"7Osz32"})}),(0,i.jsx)(m.Tw,{onClick:()=>h(!1),"data-testid":"close-icon"})]}),x.map((e=>e&&C&&Object.keys(C).includes(e.address)&&(0,i.jsx)(d.nq,{"data-testid":"unsupported-token-card",children:(0,i.jsxs)(s.Tz,{gap:"10px",children:[(0,i.jsxs)(u.BA,{gap:"5px",align:"center",children:[(0,i.jsx)(c.Z,{currency:e,size:"24px"}),(0,i.jsx)(m.Tv.DeprecatedBody,{fontWeight:535,children:e.symbol})]}),t&&(0,i.jsx)(m.dL,{href:(0,g.E)(t,e.address,g.r.ADDRESS),children:(0,i.jsx)(j,{children:e.address})})]})},e.address?.concat("not-supported")))),(0,i.jsx)(s.Tz,{gap:"lg",children:(0,i.jsx)(m.Tv.DeprecatedBody,{fontWeight:535,children:(0,i.jsx)(r.cC,{id:"l7X7DE"})})})]})})}),(0,i.jsx)(y,{padding:"0",onClick:()=>h(!0),"data-testid":"read-more-button",children:(0,i.jsx)(m.Tv.DeprecatedBlue,{children:(0,i.jsx)(r.cC,{id:"bIjYSY"})})})]})}}}]);
//# sourceMappingURL=5633.e7866024.chunk.js.map