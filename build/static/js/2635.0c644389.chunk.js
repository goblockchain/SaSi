"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[2635],{4987:function(e,n,t){t.d(n,{q:function(){return T},w:function(){return _}});var i=t(42893),r=t(12204),o=t(80815),s=t(24364),d=t(46591),c=t(41440),a=t(80657),l=t(47096),x=t(63498),u=t(40740),p=t(4292),h=t(87253),g=t(39839),m=t(47371),f=t(2304);const j=h.default.div.withConfig({displayName:"NavigationTabs__Tabs",componentId:"sc-1056be7d-0"})`
  ${m.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,b=(0,h.default)(c.rU).withConfig({displayName:"NavigationTabs__StyledLink",componentId:"sc-1056be7d-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,v=(0,h.default)(g.Tv.SubHeaderLarge).withConfig({displayName:"NavigationTabs__FindPoolTabsText",componentId:"sc-1056be7d-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,y=(0,h.default)(d.Z).withConfig({displayName:"NavigationTabs__StyledArrowLeft",componentId:"sc-1056be7d-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function T({origin:e}){return(0,i.jsx)(j,{children:(0,i.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,i.jsx)(c.rU,{to:e,children:(0,i.jsx)(y,{})}),(0,i.jsx)(v,{children:(0,i.jsx)(r.cC,{id:"LCFvJr"})})]})})}const C=(0,h.default)(g.Tv.SubHeaderLarge).withConfig({displayName:"NavigationTabs__AddRemoveTitleText",componentId:"sc-1056be7d-4"})`
  flex: 1;
  margin: auto;
`;function _({adding:e,creating:n,autoSlippage:t,positionID:d,children:c}){const{chainId:g}=(0,o.useWeb3React)(),m=(0,h.useTheme)(),v=(0,x.T)(),T=(0,a.TH)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(d?`/${d.toString()}`:"");return(0,i.jsx)(j,{children:(0,i.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,i.jsx)(b,{to:T,onClick:()=>{e&&(v((0,u.dA)()),v((0,p.dA)()))},flex:c?"1":void 0,children:(0,i.jsx)(y,{stroke:m.neutral2})}),(0,i.jsx)(C,{textAlign:c?"start":"center",children:n?(0,i.jsx)(r.cC,{id:"ma87bD"}):e?(0,i.jsx)(r.cC,{id:"E6MqGy"}):(0,i.jsx)(r.cC,{id:"cJtosk"})}),c&&(0,i.jsx)(l.xu,{style:{marginRight:".5rem"},children:c}),(0,i.jsx)(s.Z,{autoSlippage:t,chainId:g,hideRoutingSettings:!0})]})})}},72714:function(e,n,t){t.d(n,{Z:function(){return d},e:function(){return s}});var i=t(42893),r=t(87253),o=t(437);const s=r.default.main.withConfig({displayName:"AppBody__BodyWrapper",componentId:"sc-e9d30a3e-0"})`
  position: relative;
  margin-top: ${({$margin:e})=>e??"0px"};
  max-width: ${({$maxWidth:e})=>e??"420px"};
  width: 100%;
  background: ${({theme:e})=>e.surface1};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${o.k.default};
`;function d(e){return(0,i.jsx)(s,{...e})}},55494:function(e,n,t){t.d(n,{DC:function(){return d},ER:function(){return c},bb:function(){return a},im:function(){return s},pr:function(){return l}});var i=t(13119),r=t(47096),o=t(87253);const s=o.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-bfb6c8b8-0"})`
  position: relative;
  padding: 20px;
`,d=(0,o.default)(r.xv).withConfig({displayName:"styled__ClickableText",componentId:"sc-bfb6c8b8-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,c=o.default.button.withConfig({displayName:"styled__MaxButton",componentId:"sc-bfb6c8b8-2"})`
  padding: 0.5rem 1rem;
  background-color: ${({theme:e})=>e.accent2};
  border: 1px solid ${({theme:e})=>e.accent2};
  border-radius: 0.5rem;
  font-size: 1rem;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0.25rem 0.5rem;
  `};
  font-weight: 535;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${({theme:e})=>e.accent1};
  :hover {
    border: 1px solid ${({theme:e})=>e.accent1};
  }
  :focus {
    border: 1px solid ${({theme:e})=>e.accent1};
    outline: none;
  }
`,a=o.default.span.withConfig({displayName:"styled__Dots",componentId:"sc-bfb6c8b8-3"})`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`,l=(0,o.default)(i.pr).withConfig({displayName:"styled__LoadingRows",componentId:"sc-bfb6c8b8-4"})`
  padding-top: 36px;
  min-width: 75%;
  max-width: 960px;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.8em;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px;

  & > div:nth-child(4n + 1) {
    grid-column: 1 / 3;
  }
  & > div:nth-child(4n) {
    grid-column: 3 / 4;
    margin-bottom: 2em;
  }
`},90958:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var i,r=t(42893),o=t(12204),s=t(19903),d=t(80815),c=t(66196),a=t(22875),l=t(6053),x=t(44998),u=t.n(x),p=t(13712),h=t(49287),g=t(80657),m=t(47096),f=t(39839),j=t(60198),b=t(42246),v=t(60476),y=t(56823),T=t(4987),C=t(16403),_=t(2304),w=t(50163),I=t(85729),N=t(58025),O=t(97761),S=t(42881),k=t(64614),E=t(21103),$=t(72714),A=t(55494);function L(){const e=new URLSearchParams((0,g.TH)().search),{account:n,chainId:t}=(0,d.useWeb3React)(),[x,L]=(0,p.useState)(!1),[z,W]=(0,p.useState)(i.TOKEN1),[B,K]=(0,p.useState)((()=>t?(0,N.gX)(t):null)),[G,P]=(0,p.useState)(null),[q,D]=(0,O.Oo)(B??void 0,G??void 0),R=(0,k.uB)();(0,p.useEffect)((()=>{D&&R(D)}),[D,R]);const Z=q===O._G.NOT_EXISTS||Boolean(q===O._G.EXISTS&&D&&u().equal(D.reserve0.quotient,u().BigInt(0))&&u().equal(D.reserve1.quotient,u().BigInt(0))),H=(0,S.mM)(n??void 0,D?.liquidityToken),F=Boolean(H&&u().greaterThan(H.quotient,u().BigInt(0))),M=(0,p.useCallback)((e=>{z===i.TOKEN0?K(e):P(e)}),[z]),X=(0,p.useCallback)((()=>{L(!1)}),[L]),Y=(0,r.jsx)(b.hl,{padding:"45px 10px",children:(0,r.jsx)(m.xv,{textAlign:"center",children:n?(0,r.jsx)(o.cC,{id:"pKO91W"}):(0,r.jsx)(o.cC,{id:"4YB3Bt"})})});return(0,l.G)()?(0,r.jsx)(c.fM,{page:s.yJ.POOL_PAGE,shouldLogImpression:!0,children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)($.Z,{children:[(0,r.jsx)(T.q,{origin:e.get("origin")??"/pools/v2"}),(0,r.jsxs)(v.Tz,{style:{padding:"1rem"},gap:"md",children:[(0,r.jsx)(b.Pj,{children:(0,r.jsx)(v.Tz,{gap:"10px",children:(0,r.jsx)(f.Tv.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,r.jsx)(o.cC,{id:"qtO+b3",components:{0:(0,r.jsx)("b",{})}})})})}),(0,r.jsx)(j.KA,{onClick:()=>{L(!0),W(i.TOKEN0)},children:B?(0,r.jsxs)(_.ZP,{children:[(0,r.jsx)(y.Z,{currency:B}),(0,r.jsx)(m.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:B.symbol})]}):(0,r.jsx)(m.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,r.jsx)(o.cC,{id:"T0Y2+3"})})}),(0,r.jsx)(v.lg,{children:(0,r.jsx)(h.Z,{size:"16",color:"#888D9B"})}),(0,r.jsx)(j.KA,{onClick:()=>{L(!0),W(i.TOKEN1)},children:G?(0,r.jsxs)(_.ZP,{children:[(0,r.jsx)(y.Z,{currency:G}),(0,r.jsx)(m.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:G.symbol})]}):(0,r.jsx)(m.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,r.jsx)(o.cC,{id:"T0Y2+3"})})}),F&&(0,r.jsxs)(v.lg,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[(0,r.jsx)(m.xv,{textAlign:"center",fontWeight:535,children:(0,r.jsx)(o.cC,{id:"lYF0uv"})}),(0,r.jsx)(f.m_,{to:"pools/v2",children:(0,r.jsx)(m.xv,{textAlign:"center",children:(0,r.jsx)(o.cC,{id:"/4YRTg"})})})]}),B&&G?q===O._G.EXISTS?F&&D?(0,r.jsx)(C.WP,{pair:D,border:"1px solid #CED0D9"}):(0,r.jsx)(b.hl,{padding:"45px 10px",children:(0,r.jsxs)(v.Tz,{gap:"sm",justify:"center",children:[(0,r.jsx)(m.xv,{textAlign:"center",children:(0,r.jsx)(o.cC,{id:"Lu0Uod"})}),(0,r.jsx)(f.m_,{to:`/add/${(0,E.H)(B)}/${(0,E.H)(G)}`,children:(0,r.jsx)(m.xv,{textAlign:"center",children:(0,r.jsx)(o.cC,{id:"xJEVlK"})})})]})}):Z?(0,r.jsx)(b.hl,{padding:"45px 10px",children:(0,r.jsxs)(v.Tz,{gap:"sm",justify:"center",children:[(0,r.jsx)(m.xv,{textAlign:"center",children:(0,r.jsx)(o.cC,{id:"+8rnEI"})}),(0,r.jsx)(f.m_,{to:`/add/${(0,E.H)(B)}/${(0,E.H)(G)}`,children:(0,r.jsx)(o.cC,{id:"I1gztT"})})]})}):q===O._G.INVALID?(0,r.jsx)(b.hl,{padding:"45px 10px",children:(0,r.jsx)(v.Tz,{gap:"sm",justify:"center",children:(0,r.jsx)(m.xv,{textAlign:"center",fontWeight:535,children:(0,r.jsx)(o.cC,{id:"ovVGFw"})})})}):q===O._G.LOADING?(0,r.jsx)(b.hl,{padding:"45px 10px",children:(0,r.jsx)(v.Tz,{gap:"sm",justify:"center",children:(0,r.jsxs)(m.xv,{textAlign:"center",children:[(0,r.jsx)(o.cC,{id:"yQE2r9"}),(0,r.jsx)(A.bb,{})]})})}):null:Y]}),(0,r.jsx)(w.Z,{isOpen:x,onCurrencySelect:M,onDismiss:X,showCommonBases:!0,selectedCurrency:(z===i.TOKEN0?G:B)??void 0})]}),(0,r.jsx)(I.c,{})]})}):(0,r.jsx)(a.A,{})}!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(i||(i={}))},49111:function(e,n,t){t.d(n,{B:function(){return o}});var i=t(48141),r=t(58025);function o(e){if(e.isNative)return e;const n=(0,i.oG)(e.chainId);return n&&r.Fl[n]?.equals(e)?(0,r.gX)(e.chainId):e}},49287:function(e,n,t){var i=t(13712),r=t(41432),o=t.n(r);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},s.apply(this,arguments)}function d(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=(0,i.forwardRef)((function(e,n){var t=e.color,r=void 0===t?"currentColor":t,o=e.size,c=void 0===o?24:o,a=d(e,["color","size"]);return i.createElement("svg",s({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),i.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));c.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},c.displayName="Plus",n.Z=c}}]);
//# sourceMappingURL=2635.0c644389.chunk.js.map