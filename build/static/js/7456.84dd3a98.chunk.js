"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[7456],{64850:function(e,t,n){n.d(t,{m:function(){return r}});var i=n(42893);const r=e=>(0,i.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M13 4.99092C13 4.09592 14.094 3.66096 14.709 4.31196L20.637 10.582C21.121 11.094 21.121 11.894 20.637 12.406L14.709 18.676C14.094 19.326 13 18.891 13 17.997V14.4919C5.437 14.4919 4.93602 16.962 4.96802 19.529C4.97402 20.019 4.32501 20.1811 4.08301 19.7561C3.46701 18.6751 3 17.1999 3 15.4909C3 8.99592 10 8.49702 13 8.49702V4.99092Z",fill:"#9B9B9B"})})},57456:function(e,t,n){n.r(t),n.d(t,{default:function(){return jt},pageTimePeriodAtom:function(){return Ct}});var i=n(42893),r=n(12204),o=n(19903),a=n(80815),s=n(66196),c=n(90315),d=n(14150),l=n(63148),h=n(4271),u=n(35225),p=n(17487),m=n(67621),x=n(13712),f=n(56584),g=n(54236),C=n(45921),j=n(64521),y=n(47244),w=n(14045),k=n(11275),v=n(55831),T=n.n(v),b=n(68830),I=n(87253);const _={duration:T()("0.8s"),easing:k.p4T};function P({data:e,getX:t,getY:n,marginTop:r,curve:o,color:a,strokeWidth:s}){const c=(0,x.useRef)(null),[d,l]=(0,x.useState)(0),[h,u]=(0,x.useState)(!1),[p,m]=(0,x.useState)(!1),f=(0,b.useSpring)({frame:h?0:1,config:_,onRest:()=>{u(!1),m(!0)}});(0,x.useEffect)((()=>{if(c.current){const e=c.current.getTotalLength();e!==d&&l(e),e>0&&!h&&!p&&u(!0)}}));const g=(0,I.useTheme)(),C=a??g.accent1;return(0,i.jsx)(y.Z,{top:r,children:(0,i.jsx)(w.Z,{curve:o,x:t,y:n,children:({path:t})=>{const n=t(e)||"";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b.animated.path,{d:n,ref:c,strokeWidth:s,strokeOpacity:p?1:0,fill:"none",stroke:C}),h&&0!==d&&(0,i.jsx)(b.animated.path,{d:n,strokeWidth:s,fill:"none",stroke:C,strokeDashoffset:f.frame.to((e=>e*d)),strokeDasharray:d})]})}})})}var S=x.memo(P);const A={duration:3e3,easing:k.cCj};function N({data:e,getX:t,getY:n,marginTop:r,curve:o,color:a,strokeWidth:s,dashed:c}){const d=(0,x.useRef)(null),[l,h]=(0,x.useState)(0),[u,p]=(0,x.useState)(!1),[m,f]=(0,x.useState)(!1),g=(0,b.useSpring)({frame:u?0:1,config:A,onRest:()=>{p(!1),f(!0)}});(0,x.useEffect)((()=>{if(d.current){const e=d.current.getTotalLength();e!==l&&h(e),e>0&&!u&&!m&&p(!0)}}));const C=(0,I.useTheme)(),j=a??C.accent1;return(0,i.jsx)(y.Z,{top:r,children:(0,i.jsx)(w.Z,{curve:o,x:t,y:n,children:({path:t})=>{const n=t(e)||"";return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(b.animated.path,{d:n,ref:d,strokeWidth:s,strokeOpacity:m?1:g.frame.to((e=>1-e)),fill:"none",stroke:j,strokeDasharray:c?"4,4":void 0})})}})})}var $,E=x.memo(N),O=n(91443);!function(e){e[e.NO_DATA_AVAILABLE=0]="NO_DATA_AVAILABLE",e[e.NO_RECENT_VOLUME=1]="NO_RECENT_VOLUME",e[e.INVALID_CHART=2]="INVALID_CHART"}($||($={}));const R={hour:"numeric",minute:"numeric",hour12:!0},L={month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0};var B;!function(e){e.TICK="tick",e.CROSSHAIR="crosshair"}(B||(B={}));const D={[p.XH.HOUR]:{[B.TICK]:R,[B.CROSSHAIR]:L},[p.XH.DAY]:{[B.TICK]:R,[B.CROSSHAIR]:L},[p.XH.WEEK]:{[B.TICK]:{weekday:"long"},[B.CROSSHAIR]:L},[p.XH.MONTH]:{[B.TICK]:{month:"long",day:"numeric"},[B.CROSSHAIR]:L},[p.XH.YEAR]:{[B.TICK]:{month:"long"},[B.CROSSHAIR]:{month:"short",year:"numeric",day:"numeric"}}};function M(e,t,n){const i=D[e][n],r=new Intl.DateTimeFormat(t,i);return e=>{const t=1e3*e.valueOf();return r.format(t)}}var H=n(65647),F=n(44455),Z=n(7178),W=n(39839),z=n(47371),U=n(57482),V=n(86682);const Q={top:100,bottom:48,crosshair:72},K=I.default.div.withConfig({displayName:"PriceChart__ChartHeaderWrapper",componentId:"sc-dab2ea9a-0"})`
  position: absolute;
  ${z.Sj};
  animation-duration: ${({theme:e})=>e.transition.duration.medium};
  ${({theme:e,stale:t})=>t&&`color: ${e.neutral2}`};
`,Y=I.default.div.withConfig({displayName:"PriceChart__PriceContainer",componentId:"sc-dab2ea9a-1"})`
  display: flex;
  gap: 6px;
  font-size: 24px;
  line-height: 44px;
`,X=I.default.div.withConfig({displayName:"PriceChart__DeltaContainer",componentId:"sc-dab2ea9a-2"})`
  height: 16px;
  display: flex;
  align-items: center;
  margin-top: 4px;
  color: ${({theme:e})=>e.neutral2};
`;function G({startingPrice:e,endingPrice:t,noColor:n}){const r=(0,V.YD)(e.value,t.value),{formatDelta:o}=(0,U.Gb)();return(0,i.jsxs)(X,{children:[o(r),(0,i.jsx)(V.Kx,{delta:r,noColor:n})]})}function J({crosshairPrice:e,chart:t}){const{formatFiatPrice:n}=(0,U.Gb)(),{startingPrice:o,endingPrice:a,lastValidPrice:s}=t,c=s!==a,d=e??(c?s:a),l=c&&!e;return(0,i.jsxs)(K,{"data-cy":"chart-header",stale:l,children:[(0,i.jsxs)(Y,{children:[(0,i.jsx)(W.Tv.HeadlineLarge,{color:"inherit",children:n({price:d.value})}),l&&(0,i.jsx)(H.ud,{text:(0,i.jsx)(r.cC,{id:"y9L4V6"}),children:(0,i.jsx)(Z.Z,{size:16,"data-testid":"chart-stale-icon"})})]}),(0,i.jsx)(G,{startingPrice:o,endingPrice:d,noColor:c})]})}function q({chart:e,timePeriod:t}){const n=(0,F.eQ)(),{prices:r,blanks:o,timeScale:a,priceScale:s,dimensions:c}=e,{ticks:d,tickTimestampFormatter:l,crosshairTimestampFormatter:h}=(0,x.useMemo)((()=>{const i=Math.floor(c.width/100);return{ticks:(0,O.fj)(e.startingPrice.timestamp,e.endingPrice.timestamp,t,i),tickTimestampFormatter:M(t,n,B.TICK),crosshairTimestampFormatter:M(t,n,B.CROSSHAIR)}}),[c.width,e.startingPrice.timestamp,e.endingPrice.timestamp,t,n]),u=(0,I.useTheme)(),[m,y]=(0,x.useState)(),w=(0,x.useCallback)((()=>y(void 0)),[y]),v=(0,x.useCallback)((e=>{const{x:t}=(0,g.Z)(e)||{x:0},n=(0,O.HM)(t,r,a);if(n){const e=a(n.timestamp),t=s(n.value);y({x:e,y:t,price:n})}}),[s,a,r]);(0,x.useEffect)((()=>w()),[w,t]);const T=.85*c.width,b=!!m&&m.x>T,_=t===p.XH.HOUR?1:.9,P=(0,x.useCallback)((e=>a(e.timestamp)),[a]),A=(0,x.useCallback)((e=>s(e.value)),[s]),N=(0,x.useMemo)((()=>k.YY7.tension(_)),[_]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(J,{chart:e,crosshairPrice:m?.price}),(0,i.jsxs)("svg",{"data-cy":"price-chart",width:c.width,height:c.height,style:{minWidth:"100%"},children:[(0,i.jsx)(S,{data:r,getX:P,getY:A,marginTop:c.marginTop,curve:N,strokeWidth:2}),o.map(((e,t)=>(0,i.jsx)(E,{data:e,getX:P,getY:A,marginTop:c.marginTop,curve:N,strokeWidth:2,color:u.neutral3,dashed:!0},t))),void 0!==m?(0,i.jsxs)("g",{children:[(0,i.jsx)(f.Z,{top:c.height-1,scale:a,stroke:u.surface3,hideTicks:!0,tickValues:d,tickFormat:l,tickLabelProps:()=>({fill:u.neutral2,fontSize:12,textAnchor:"middle",transform:"translate(0 -29)"})}),(0,i.jsx)("text",{x:m.x+(b?-4:4),y:Q.crosshair+10,textAnchor:b?"end":"start",fontSize:12,fill:u.neutral2,children:h(m.price.timestamp)}),(0,i.jsx)(j.Z,{from:{x:m.x,y:Q.crosshair},to:{x:m.x,y:c.height},stroke:u.surface3,strokeWidth:1,pointerEvents:"none",strokeDasharray:"4,4"}),(0,i.jsx)(C.Z,{left:m.x,top:m.y+c.marginTop,size:50,fill:u.accent1,stroke:u.surface3,strokeWidth:.5})]}):(0,i.jsx)(f.Z,{hideAxisLine:!0,scale:a,stroke:u.surface3,top:c.height-1,hideTicks:!0}),!c.width&&(0,i.jsx)("line",{x1:0,y1:c.height-1,x2:"100%",y2:c.height-1,fill:"transparent",shapeRendering:"crispEdges",stroke:u.surface3,strokeWidth:1}),(0,i.jsx)("rect",{x:0,y:0,width:c.width,height:c.height,fill:"transparent",onTouchStart:v,onTouchMove:v,onMouseMove:v,onMouseLeave:w})]})]})}const ee={[$.NO_DATA_AVAILABLE]:(0,i.jsx)(r.cC,{id:"g0qrI3"}),[$.NO_RECENT_VOLUME]:(0,i.jsx)(r.cC,{id:"7OwMjb"}),[$.INVALID_CHART]:(0,i.jsx)(r.cC,{id:"0WBcSC"})};function te({chart:e}){const t=(0,I.useTheme)(),n=e.dimensions.height/2+45;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(K,{"data-cy":"chart-header",children:[(0,i.jsx)(W.Tv.HeadlineLarge,{fontSize:24,color:"neutral3",children:"Price unavailable"}),(0,i.jsx)(W.Tv.BodySmall,{color:"neutral3",children:ee[e.error]})]}),(0,i.jsx)("svg",{"data-cy":"missing-chart",width:e.dimensions.width,height:e.dimensions.height,style:{minWidth:"100%"},children:(0,i.jsx)("path",{d:`M 0 ${n} Q 104 ${n-70}, 208 ${n} T 416 ${n}\n          M 416 ${n} Q 520 ${n-70}, 624 ${n} T 832 ${n}`,stroke:t.surface3,fill:"transparent",strokeWidth:"2"})})]})}function ne({width:e,height:t,prices:n,timePeriod:r}){const o=(0,x.useMemo)((()=>function({dimensions:e,prices:t}){if(!t)return{error:$.NO_DATA_AVAILABLE,dimensions:e};const n=e.height-e.marginTop-e.marginBottom;if(n<0)return{error:$.INVALID_CHART,dimensions:e};const{prices:i,blanks:r,lastValidPrice:o}=(0,O.Bz)(t);if(i.length<2||!o)return{error:$.NO_RECENT_VOLUME,dimensions:e};const a=t[0],s=t[t.length-1],{min:c,max:d}=(0,O.VC)(t);return{prices:i,startingPrice:a,endingPrice:s,lastValidPrice:o,blanks:r,timeScale:(0,k.BYU)().domain([a.timestamp,s.timestamp]).range([0,e.width]),priceScale:(0,k.BYU)().domain([c,d]).range([n,0]),dimensions:e,error:void 0}}({dimensions:{width:e,height:t,marginBottom:Q.bottom,marginTop:Q.top},prices:n})),[e,t,n]);return void 0!==o.error?(0,i.jsx)(te,{chart:o}):(0,i.jsx)(q,{chart:o,timePeriod:r})}var ie=n(35458),re=n(1670);const oe=I.default.div.withConfig({displayName:"TimeSelector__TimeOptionsWrapper",componentId:"sc-305d298a-0"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,ae=I.default.div.withConfig({displayName:"TimeSelector__TimeOptionsContainer",componentId:"sc-305d298a-1"})`
  display: flex;
  justify-content: flex-end;
  margin-top: 4px;
  gap: 4px;
  border-radius: 16px;
  height: 40px;
  padding: 4px;
  width: fit-content;

  @media only screen and (max-width: ${ie.Uw}) {
    width: 100%;
    justify-content: space-between;
    border: none;
  }
`,se=I.default.button.withConfig({displayName:"TimeSelector__TimeButton",componentId:"sc-305d298a-2"})`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e,active:t})=>t?e.surface3:"transparent"};
  font-weight: 535;
  font-size: 16px;
  padding: 6px 12px;
  border-radius: 12px;
  line-height: 20px;
  border: none;
  cursor: pointer;
  color: ${({theme:e,active:t})=>t?e.neutral1:e.neutral2};
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  :hover {
    ${({active:e,theme:t})=>!e&&`opacity: ${t.opacity.hover};`}
  }
`;function ce({currentTimePeriod:e,onTimeChange:t}){const[n,r]=(0,x.useState)(e);return(0,i.jsx)(oe,{children:(0,i.jsx)(ae,{children:re.W9.map((e=>(0,i.jsx)(se,{active:n===e,onClick:()=>{(0,x.startTransition)((()=>t(e))),r(e)},children:re.rD[e]},re.rD[e])))})})}function de({tokenPriceQuery:e,onChangeTimePeriod:t}){return e?(0,i.jsx)(x.Suspense,{fallback:(0,i.jsx)(u.sT,{}),children:(0,i.jsx)(u.BO,{children:(0,i.jsx)(le,{tokenPriceQuery:e,onChangeTimePeriod:t})})}):(0,i.jsx)(u.sT,{})}function le({tokenPriceQuery:e,onChangeTimePeriod:t}){const n=(r=e,(0,x.useMemo)((()=>{const e=r.token?.market,t=e?.priceHistory?.filter(p.yL),n=e?.price?.value;if(Array.isArray(t)&&void 0!==n){const e=Date.now()/1e3;return[...t,{timestamp:e,value:n}]}return t}),[r]));var r;const o=(0,m.Dv)(Ct);return(0,i.jsxs)(u.BO,{"data-testid":"chart-container",children:[(0,i.jsx)(h.Z,{children:({width:e})=>(0,i.jsx)(ne,{prices:n,width:e,height:392,timePeriod:o})}),(0,i.jsx)(ce,{currentTimePeriod:o,onTimeChange:e=>{(0,x.startTransition)((()=>t(e)))}})]})}var he=n(58025),ue=n(95202),pe=n(79847);const me=I.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__Wrapper",componentId:"sc-619f2185-0"})`
  align-content: center;
  align-items: center;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-bottom: none;
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 20px 20px 0px 0px;
  bottom: 52px;
  color: ${({theme:e})=>e.neutral2};
  display: flex;
  flex-direction: row;
  font-weight: 535;
  font-size: 14px;
  height: fit-content;
  justify-content: space-between;
  left: 0;
  line-height: 20px;
  padding: 12px 16px;
  position: fixed;
  width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    bottom: 0px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    display: none;
  }
`,xe=I.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__BalanceValue",componentId:"sc-619f2185-1"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 20px;
  line-height: 28px;
  display: flex;
  gap: 8px;
`,fe=I.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__Balance",componentId:"sc-619f2185-2"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`,ge=I.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__BalanceInfo",componentId:"sc-619f2185-3"})`
  display: flex;
  flex: 10 1 auto;
  flex-direction: column;
  justify-content: flex-start;
`,Ce=I.default.span.withConfig({displayName:"MobileBalanceSummaryFooter__FiatValue",componentId:"sc-619f2185-4"})`
  font-size: 12px;
  line-height: 16px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    line-height: 24px;
  }
`,je=(0,I.default)(W.m_).withConfig({displayName:"MobileBalanceSummaryFooter__SwapButton",componentId:"sc-619f2185-5"})`
  background-color: ${({theme:e})=>e.accent1};
  border: none;
  border-radius: 12px;
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  display: flex;
  flex: 1 1 auto;
  padding: 12px 16px;
  font-size: 1em;
  font-weight: 535;
  height: 44px;
  justify-content: center;
  margin: auto;
  max-width: 100vw;
`;function ye({token:e}){const{account:t}=(0,a.useWeb3React)(),n=(0,pe.ZP)(t,e),{formatCurrencyAmount:o}=(0,U.Gb)(),s=o({amount:n,type:U.sw.TokenNonTx}),c=o({amount:(0,ue.sq)(n),type:U.sw.FiatTokenStats}),d=p.yC[e.chainId].toLowerCase();return(0,i.jsxs)(me,{children:[Boolean(t&&n)&&(0,i.jsxs)(ge,{children:[(0,i.jsx)(r.cC,{id:"xn9ewN",values:{0:e.symbol}}),(0,i.jsxs)(fe,{children:[(0,i.jsxs)(xe,{children:[s," ",e.symbol]}),(0,i.jsx)(Ce,{children:c})]})]}),(0,i.jsx)(je,{to:`/swap?chainName=${d}&outputCurrency=${e.isNative?he.dt:e.address}`,children:(0,i.jsx)(r.cC,{id:"vH2C/2"})})]})}var we=n(64850),ke=n(28156),ve=n(55338),Te=n(13678),be=n(77300),Ie=n(56564),_e=n(13120),Pe=n(62878),Se=n(18030),Ae=n(437);const Ne=560,$e=480,Ee=I.default.div.withConfig({displayName:"ShareButton__ShareButtonDisplay",componentId:"sc-32f6e930-0"})`
  display: flex;
  position: relative;
`,Oe=(0,I.default)(we.m).withConfig({displayName:"ShareButton__Share",componentId:"sc-32f6e930-1"})`
  height: 24px;
  width: 24px;
  ${W.iV}
  ${({open:e,theme:t})=>e&&`opacity: ${t.opacity.click} !important`};
`,Re=I.default.div.withConfig({displayName:"ShareButton__ShareActions",componentId:"sc-32f6e930-2"})`
  position: absolute;
  z-index: ${Ae.k.dropdown};
  width: 240px;
  top: 36px;
  right: 0px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 8px;
  background-color: ${({theme:e})=>e.surface1};
  border: 0.5px solid ${({theme:e})=>e.surface3};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border-radius: 12px;
`,Le=I.default.div.withConfig({displayName:"ShareButton__ShareAction",componentId:"sc-32f6e930-3"})`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 485;
  gap: 12px;
  height: 40px;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  :hover {
    background-color: ${({theme:e})=>(0,Se.j)(10,e.darkMode?Pe.O9.gray200:Pe.O9.gray300)};
  }
`;function Be({currency:e}){const t=(0,I.useTheme)(),n=(0,x.useRef)(null),o=(0,Ie.Wt)(_e.Lk.SHARE),a=(0,Ie.xk)(_e.Lk.SHARE);(0,ve.t)(n,o?a:void 0);const s=(window.screen.width-Ne)/2,c=(window.screen.height-$e)/2,d=e.isNative?he.dt:e.wrapped.address;(0,ke.Z)(o);const l=(0,x.useRef)(null);return(0,i.jsxs)(Ee,{ref:n,children:[(0,i.jsx)(Oe,{onClick:a,"aria-label":"ShareOptions",open:o}),o&&(0,i.jsxs)(Re,{children:[(0,i.jsx)(Le,{onClick:()=>l.current?.forceCopy(),children:(0,i.jsx)(W.WD,{InitialIcon:Te.Z,color:t.neutral1,iconPosition:"left",gap:12,toCopy:window.location.href,ref:l,children:(0,i.jsx)(r.cC,{id:"ENCIQz"})})}),(0,i.jsxs)(Le,{onClick:()=>{a(),window.open(`https://twitter.com/intent/tweet?text=Check%20out%20${e.name}%20(${e.symbol})%20https://app.uniswap.org/%23/tokens/${(0,p.Ld)(e.chainId).toLowerCase()}/${d}%20via%20@uniswap`,"newwindow",`left=${s}, top=${c}, width=${Ne}, height=${$e}`)},children:[(0,i.jsx)(be.Z,{color:t.neutral1,size:20,strokeWidth:1.5}),(0,i.jsx)(r.cC,{id:"uvt91Z"})]})]})]})}var De=n(94556),Me=n(8356),He=n(94220),Fe=n(11569),Ze=n(73633);const We=e=>{const{chainId:t}=(0,a.useWeb3React)(),n=(0,p.Ld)(t),i=(0,x.useRef)(n);(0,x.useEffect)((()=>{i.current!==n&&e(n),i.current=n}),[n])};var ze,Ue=n(97337),Ve=n(41162),Qe=n(46591),Ke=n(80657),Ye=n(92883),Xe=n(83777),Ge=n(80608),Je=n(97220),qe=n(60198),et=n(68040),tt=n(89882);function nt(){return nt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},nt.apply(this,arguments)}function it(e,t){let{title:n,titleId:i,...r}=e;return x.createElement("svg",nt({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:t,"aria-labelledby":i},r),n?x.createElement("title",{id:i},n):null,ze||(ze=x.createElement("path",{d:"M14.75 12C14.75 13.517 13.517 14.75 12 14.75C10.483 14.75 9.25004 13.517 9.25004 12C9.25004 11.651 9.32196 11.32 9.44096 11.012C9.63496 11.166 9.86903 11.272 10.136 11.272C10.763 11.272 11.272 10.763 11.272 10.136C11.272 9.86899 11.166 9.63492 11.012 9.44092C11.32 9.32192 11.651 9.25 12 9.25C13.517 9.25 14.75 10.483 14.75 12ZM20.5921 13.4771C19.3651 15.5311 16.609 19 12 19C7.39104 19 4.635 15.5311 3.408 13.4771C2.864 12.5671 2.864 11.4329 3.408 10.5229C4.635 8.46895 7.39104 5 12 5C16.609 5 19.3651 8.46895 20.5921 10.5229C21.1361 11.4329 21.1361 12.5671 20.5921 13.4771ZM16.25 12C16.25 9.657 14.344 7.75 12 7.75C9.65604 7.75 7.75004 9.657 7.75004 12C7.75004 14.343 9.65604 16.25 12 16.25C14.344 16.25 16.25 14.343 16.25 12Z",fill:"currentColor"})))}const rt=x.forwardRef(it);n.p;const ot=I.default.div.withConfig({displayName:"InvalidTokenDetails__InvalidDetailsContainer",componentId:"sc-6489a4a1-0"})`
  padding-top: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,at=I.default.span.withConfig({displayName:"InvalidTokenDetails__InvalidDetailsText",componentId:"sc-6489a4a1-1"})`
  margin-top: 28px;
  margin-bottom: 20px;

  text-align: center;

  color: ${({theme:e})=>e.neutral2};
  font-size: 20px;
  font-weight: 535;
  line-height: 28px;
`,st=(0,I.default)(qe.DF).withConfig({displayName:"InvalidTokenDetails__TokenExploreButton",componentId:"sc-6489a4a1-2"})`
  width: fit-content;
  padding: 12px 16px;
  border-radius: 12px;

  color: ${({theme:e})=>e.neutral1};
  font-size: 16px;
  font-weight: 535;
`;function ct({pageChainId:e,isInvalidAddress:t}){const{chainId:n}=(0,a.useWeb3React)(),o=(0,Ke.s0)(),s=(0,tt.Z)(),c=!t&&e===n,d=n?(0,et.bt)(n)?.label:void 0;return(0,i.jsxs)(ot,{children:[(0,i.jsx)(rt,{}),t||c?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(at,{children:(0,i.jsx)(r.cC,{id:"5pThdE"})}),(0,i.jsx)(st,{onClick:()=>o("/tokens"),children:(0,i.jsx)(W.Tv.SubHeader,{children:(0,i.jsx)(r.cC,{id:"1ru2CS"})})})]}):(0,i.jsxs)(i.Fragment,{children:[d&&(0,i.jsx)(at,{children:(0,i.jsx)(r.cC,{id:"xNuZYG",values:{connectedChainLabel:d}})}),(0,i.jsx)(st,{onClick:()=>s(e),children:(0,i.jsx)(W.Tv.SubHeader,{children:(0,i.jsx)(r.cC,{id:"1+P9RR",values:{0:(0,et.bt)(e).label}})})})]})]})}const dt=I.default.span.withConfig({displayName:"TokenDetails__TokenSymbol",componentId:"sc-d1e6652d-0"})`
  text-transform: uppercase;
  color: ${({theme:e})=>e.neutral2};
  margin-left: 8px;
`,lt=I.default.div.withConfig({displayName:"TokenDetails__TokenActions",componentId:"sc-d1e6652d-1"})`
  display: flex;
  gap: 16px;
  color: ${({theme:e})=>e.neutral2};
`,ht=I.default.div.withConfig({displayName:"TokenDetails__TokenTitle",componentId:"sc-d1e6652d-2"})`
  display: flex;
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.md}px) {
    display: inline;
  }
`;function ut(e,t,n){const{chainId:i}=(0,a.useWeb3React)(),r=(0,x.useMemo)((()=>{if(e)return e===he.dt?(0,he.gX)(t):n?(0,p.Pc)(n):void 0}),[t,e,n]),o=Boolean(r)||t!==i,s=function(e,t){const n=(0,Ue.zA)(t||!e?void 0:e);return t||!e||n&&n?.symbol===Ue.eu?void 0:n}(e,o);return(0,x.useMemo)((()=>({token:r??s,didFetchFromChain:!r})),[s,r])}function pt({urlAddress:e,inputTokenAddress:t,chain:n,tokenQuery:h,tokenPriceQuery:m,onChangeTimePeriod:f}){if(!e)throw new Error("Invalid token details route: tokenAddress param is undefined");const g=(0,x.useMemo)((()=>e===he.dt?e:(0,Xe.UJ)(e)||void 0),[e]),{chainId:C}=(0,a.useWeb3React)(),j=(0,p.Tz)(n),y=h.token,w=(0,x.useMemo)((()=>y?.project?.tokens.reduce(((e,t)=>(t&&(e[t.chain]=t.address),e)),{})??{}),[y]),{token:k,didFetchFromChain:v}=ut(g,j,y),T=Je.u.find((e=>e.address.toUpperCase()===g?.toUpperCase())),b=(g&&(0,He.y8)(g),(0,Ke.s0)()),I=(0,Fe.C)(),_=(0,Ze.e)(),[P,S]=(0,x.useTransition)(),A=(0,x.useCallback)((e=>{if(!g)return;const t=w[e];t?S((()=>b((0,p.dG)({address:t,chain:e,isInfoExplorePageEnabled:I})))):(v||k?.isNative)&&S((()=>b((0,p.dG)({address:g,chain:e,isInfoExplorePageEnabled:I}))))}),[g,w,v,k?.isNative,b,I]);We(A);(0,x.useCallback)((e=>{if((0,Ge.K)(e[Ye.gN.INPUT]?.currencyId,g)||(0,Ge.K)(e[Ye.gN.OUTPUT]?.currencyId,g))return;const t=e[Ye.gN.OUTPUT]?.currencyId??e[Ye.gN.INPUT]?.currencyId;S((()=>b((0,p.dG)({address:"ETH"===t?null:t,chain:n,inputAddress:e[Ye.gN.INPUT]&&e[Ye.gN.INPUT]?.currencyId!==t?e[Ye.gN.INPUT]?.currencyId:null,isInfoExplorePageEnabled:I}))))}),[g,n,I,b]);const[N,$]=(0,x.useState)(),[E,O]=(0,x.useState)(!1),R=(0,x.useCallback)((e=>{N?.resolve(e),$(void 0)}),[N,$]);if(void 0===k||!g)return(0,i.jsx)(ct,{pageChainId:j,isInvalidAddress:!g});const L=k&&(T?.symbol??(0,i.jsx)(r.cC,{id:"F2FJu3"}));return(0,i.jsx)(s.fM,{page:o.yJ.TOKEN_DETAILS_PAGE,properties:{tokenAddress:g,tokenName:k?.name},shouldLogImpression:!0,children:(0,i.jsxs)(u.Gy,{children:[k&&!P?(0,i.jsxs)(u.WQ,{children:[_?(0,i.jsxs)(l.Q,{isInfoTDPEnabled:!0,children:[(0,i.jsxs)(l.y,{to:`${I?"/explore":""}/tokens/${n.toLowerCase()}`,children:[(0,i.jsx)(r.cC,{id:"8tjQCz"})," ",(0,i.jsx)(Ve.Z,{size:14})," ",(0,i.jsx)(r.cC,{id:"6RDwJM"})," ",(0,i.jsx)(Ve.Z,{size:14})]})," ",L," ",!k.isNative&&(0,i.jsxs)(i.Fragment,{children:["(",(0,i.jsx)(W.Qv,{address:g,showTruncatedOnly:!0,truncatedAddress:(0,Xe.Xn)(g)}),")"]})]}):(0,i.jsx)(l.Q,{children:(0,i.jsxs)(l.y,{to:`${I?"/explore":""}/tokens/${n.toLowerCase()}`,children:[(0,i.jsx)(Qe.Z,{"data-testid":"token-details-return-button",size:14})," Tokens"]})}),(0,i.jsxs)(u.Pn,{"data-testid":"token-info-container",children:[(0,i.jsxs)(u.yn,{children:[(0,i.jsx)(c.V,{currencies:[k],avatarUrl:T?.project.logoUrl,chainId:k.chainId,size:"32px"}),(0,i.jsxs)(ht,{children:[T?.name??(0,i.jsx)(r.cC,{id:"zKpHYG"}),(0,i.jsx)(dt,{children:L})]})]}),(0,i.jsx)(lt,{children:(0,i.jsx)(Be,{currency:k})})]}),(0,i.jsx)(de,{tokenPriceQuery:m,onChangeTimePeriod:f}),(0,i.jsx)(De.ZP,{chainId:j,address:g,tokenQueryData:y}),(0,i.jsx)(u.Hr,{}),(0,i.jsx)(d.ez,{address:g,chainId:j,description:T?.project?.description})]}):(0,i.jsx)(u.ZP,{}),!_&&k&&(0,i.jsx)(ye,{token:k}),(0,i.jsx)(Me.Z,{isOpen:E||!!N,tokenAddress:g,onContinue:()=>R(!0),onBlocked:()=>{O(!1)},onCancel:()=>R(!1),showCancel:!0})]})})}var mt=n(79954),xt=n(42713),ft=n(30719),gt=n(41054);const Ct=(0,m.O4)("tokenDetailsTimePeriod",p.XH.DAY);function jt(){const{tokenAddress:e,chainName:t}=(0,Ke.UO)(),n=(0,p.Qj)(t),r=e===he.dt,[o,a]=(0,ft.KO)(Ct),[s,c]=(0,x.useMemo)((()=>[r?(0,gt.P)(n):e??"",(0,p.uw)(o)]),[n,r,o,e]),d=(0,xt.Z)(),l=(0,x.useMemo)((()=>"string"===typeof d.inputCurrency?d.inputCurrency:void 0),[d]),{data:h}=(0,mt.rS)({variables:{address:s,chain:n},errorPolicy:"all"}),{data:m}=(0,mt.m)({variables:{address:s,chain:n,duration:c},errorPolicy:"all"}),[f,g]=(0,x.useState)(m);return(0,x.useEffect)((()=>{m&&g(m)}),[g,m]),h?(0,i.jsx)(pt,{urlAddress:e,chain:n,tokenQuery:h,tokenPriceQuery:f,onChangeTimePeriod:a,inputTokenAddress:l}):(0,i.jsx)(u.lJ,{})}},80608:function(e,t,n){function i(e,t){return!(!e||!t)&&(e===t||e.toLowerCase()===t.toLowerCase())}n.d(t,{K:function(){return i}})}}]);
//# sourceMappingURL=7456.84dd3a98.chunk.js.map