"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5225],{14150:function(e,t,n){n.d(t,{M7:function(){return m},d5:function(){return j},ez:function(){return g}});var i=n(42893),d=n(12204),a=n(68040),o=n(13712),s=n(87253),l=n(39839),r=n(47371),c=n(40508);const p=s.default.span.withConfig({displayName:"shared__NoInfoAvailable",componentId:"sc-b2e1214d-0"})`
  color: ${({theme:e})=>e.neutral3};
  font-weight: 485;
  font-size: 16px;
`,x=s.default.div.withConfig({displayName:"shared__TruncateDescriptionButton",componentId:"sc-b2e1214d-1"})`
  color: ${({theme:e})=>e.neutral2};
  font-weight: 485;
  font-size: 0.85em;
  padding-top: 0.5em;

  &:hover,
  &:focus {
    color: ${({theme:e})=>(0,c._j)(.1,e.neutral2)};
    cursor: pointer;
  }
`,u=(e,t=h)=>{let n=e.slice(0,t);return n=`${n.slice(0,Math.min(n.length,n.lastIndexOf(" ")))}...`,n},h=400,f=s.default.div.withConfig({displayName:"About__TokenDescriptionContainer",componentId:"sc-987e58c0-0"})`
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  max-height: fit-content;
  padding-top: 16px;
  line-height: 24px;
  white-space: pre-wrap;
`,m=s.default.div.withConfig({displayName:"About__AboutContainer",componentId:"sc-987e58c0-1"})`
  gap: 16px;
  padding: 24px 0px;
  ${r.Sj}
`,j=(0,s.default)(l.Tv.MediumHeader).withConfig({displayName:"About__AboutHeader",componentId:"sc-987e58c0-2"})`
  font-size: 28px !important;
`;s.default.div.withConfig({displayName:"About__ResourcesContainer",componentId:"sc-987e58c0-3"})`
  display: flex;
  padding-top: 12px;
  gap: 14px;
`;function g({address:e,chainId:t,description:n,homepageUrl:s,twitterName:l}){const[r,c]=(0,o.useState)(!0),g=!!n&&n.length>h,w=g&&r?u(n):n,{explorer:C,infoLink:_}=(0,a.bt)(t);return(0,i.jsxs)(m,{"data-testid":"token-details-about-section",children:[(0,i.jsx)(j,{children:(0,i.jsx)(d.cC,{id:"XQrbLJ"})}),(0,i.jsxs)(f,{children:[!n&&(0,i.jsx)(p,{children:(0,i.jsx)(d.cC,{id:"JiUO5e"})}),w,g&&(0,i.jsx)(x,{onClick:()=>c(!r),children:r?(0,i.jsx)(d.cC,{id:"fMPkxb"}):(0,i.jsx)(d.cC,{id:"vLyv1R"})})]}),(0,i.jsx)("br",{})]})}},63148:function(e,t,n){n.d(t,{Q:function(){return a},y:function(){return o}});var i=n(41440),d=n(87253);const a=d.default.div.withConfig({displayName:"BreadcrumbNavLink__BreadcrumbNav",componentId:"sc-e4355be-0"})`
  display: flex;
  color: ${({theme:e})=>e.neutral1};
  ${({isInfoTDPEnabled:e})=>e?d.css`
          font-size: 16px;
          line-height: 24px;
        `:d.css`
          font-size: 14px;
          line-height: 20px;
        `}
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;
  width: fit-content;
`,o=(0,d.default)(i.rU).withConfig({displayName:"BreadcrumbNavLink",componentId:"sc-e4355be-1"})`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.neutral2};
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  text-decoration: none;

  &:hover {
    color: ${({theme:e})=>e.neutral3};
  }
`},35225:function(e,t,n){n.d(t,{BO:function(){return A},Hr:function(){return B},WQ:function(){return D},sT:function(){return ie},Gy:function(){return z},lJ:function(){return oe},Pn:function(){return H},yn:function(){return U},ZP:function(){return ae}});var i=n(42893),d=n(12204),a=n(57098),o=n(20837),s=n(87253),l=n(39839),r=n(20095);const c=(0,s.default)(r.nR).withConfig({displayName:"SwapSkeleton__StyledArrowWrapper",componentId:"sc-a3b9f734-0"})`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
`,p=s.default.div.withConfig({displayName:"SwapSkeleton__LoadingWrapper",componentId:"sc-a3b9f734-1"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: space-between;

  padding: 8px;
  border: ${({theme:e})=>`1px solid ${e.surface3}`};
  border-radius: 16px;
  background-color: ${({theme:e})=>e.surface1};
`,x=s.default.div.withConfig({displayName:"SwapSkeleton__Blob",componentId:"sc-a3b9f734-2"})`
  background-color: ${({theme:e})=>e.surface2};
  border-radius: ${({radius:e})=>(e??4)+"px"};
  height: 56px;
  width: ${({width:e})=>e?e+"px":"100%"};
`,u=(0,s.default)(x).withConfig({displayName:"SwapSkeleton__ModuleBlob",componentId:"sc-a3b9f734-3"})`
  background-color: ${({theme:e})=>e.surface3};
  height: 36px;
`,h=s.default.div.withConfig({displayName:"SwapSkeleton__TitleColumn",componentId:"sc-a3b9f734-4"})`
  padding: 8px;
`,f=s.default.div.withConfig({displayName:"SwapSkeleton__Row",componentId:"sc-a3b9f734-5"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,m=s.default.div.withConfig({displayName:"SwapSkeleton__InputColumn",componentId:"sc-a3b9f734-6"})`
  display: flex;
  flex-flow: column;
  background-color: ${({theme:e})=>e.surface2};
  border-radius: 16px;
  display: flex;
  gap: 30px;
  padding: 48px 12px;
`,j=s.default.div.withConfig({displayName:"SwapSkeleton__OutputWrapper",componentId:"sc-a3b9f734-7"})`
  position: relative;
`;function g(){return(0,i.jsx)(h,{children:(0,i.jsx)(l.Tv.SubHeader,{children:(0,i.jsx)(d.cC,{id:"vH2C/2"})})})}function w(){return(0,i.jsxs)(f,{children:[(0,i.jsx)(u,{width:60}),(0,i.jsx)(u,{width:100,radius:16})]})}function C(){return(0,i.jsx)(x,{radius:16})}function _(){const e=(0,s.useTheme)();return(0,i.jsxs)(p,{children:[(0,i.jsx)(g,{}),(0,i.jsx)(m,{children:(0,i.jsx)(w,{})}),(0,i.jsxs)(j,{children:[(0,i.jsx)(c,{clickable:!1,children:(0,i.jsx)(a.Gz,{children:(0,i.jsx)(o.Z,{size:"16",color:e.neutral3})})}),(0,i.jsx)(m,{children:(0,i.jsx)(w,{})})]}),(0,i.jsx)(C,{})]})}var y=n(11569),b=n(73633),v=n(41162),k=n(46591),S=n(80657),N=n(47371),I=n(80343),$=n(14150),T=n(63148),L=n(94556);const B=s.default.hr.withConfig({displayName:"Skeleton__Hr",componentId:"sc-d6341579-0"})`
  background-color: ${({theme:e})=>e.surface3};
  border: none;
  height: 0.5px;
`,z=s.default.div.withConfig({displayName:"Skeleton__TokenDetailsLayout",componentId:"sc-d6341579-1"})`
  display: flex;
  padding: 0 8px 52px;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    gap: 16px;
    padding: 0 16px 52px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    gap: 40px;
    padding: 48px 20px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.xl}px) {
    gap: 60px;
  }
`,D=s.default.div.withConfig({displayName:"Skeleton__LeftPanel",componentId:"sc-d6341579-2"})`
  flex: 1;
  max-width: 780px;
  overflow: hidden;
`,P=s.default.div.withConfig({displayName:"Skeleton__RightPanel",componentId:"sc-d6341579-3"})`
  display: none;
  flex-direction: column;
  gap: ${({isInfoTDPEnabled:e})=>e?40:20}px;
  width: ${360}px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    display: flex;
  }
`,A=s.default.div.withConfig({displayName:"Skeleton__ChartContainer",componentId:"sc-d6341579-4"})`
  display: flex;
  flex-direction: column;
  height: 436px;
  margin-bottom: 24px;
  align-items: flex-start;
  width: 100%;
`,F=s.default.div.withConfig({displayName:"Skeleton__LoadingChartContainer",componentId:"sc-d6341579-5"})`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  height: 100%;
  margin-bottom: 44px;
  padding-bottom: 66px;
  overflow: hidden;
`,H=s.default.div.withConfig({displayName:"Skeleton__TokenInfoContainer",componentId:"sc-d6341579-6"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  ${N.Sj};
  animation-duration: ${({theme:e})=>e.transition.duration.medium};
`,U=s.default.div.withConfig({displayName:"Skeleton__TokenNameCell",componentId:"sc-d6341579-7"})`
  display: flex;
  gap: 8px;
  font-size: 20px;
  line-height: 28px;
  align-items: center;
`,W=(0,s.default)(I.X).withConfig({displayName:"Skeleton__DetailBubble",componentId:"sc-d6341579-8"})`
  height: 16px;
  width: 180px;
`,E=(0,s.default)(W).withConfig({displayName:"Skeleton__SquaredBubble",componentId:"sc-d6341579-9"})`
  height: 32px;
  border-radius: 8px;
`,O=(0,s.default)(W).withConfig({displayName:"Skeleton__NavBubble",componentId:"sc-d6341579-10"})`
  width: 169px;
`,Z=(0,s.default)(W).withConfig({displayName:"Skeleton__TokenLogoBubble",componentId:"sc-d6341579-11"})`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`,M=(0,s.default)(W).withConfig({displayName:"Skeleton__TitleBubble",componentId:"sc-d6341579-12"})`
  width: 136px;
`,Q=(0,s.default)(E).withConfig({displayName:"Skeleton__PriceBubble",componentId:"sc-d6341579-13"})`
  margin-top: 4px;
  height: 40px;
`,R=(0,s.default)(E).withConfig({displayName:"Skeleton__SectionBubble",componentId:"sc-d6341579-14"})`
  width: 120px;
`,V=(0,s.default)(W).withConfig({displayName:"Skeleton__StatTitleBubble",componentId:"sc-d6341579-15"})`
  width: 80px;
  margin-bottom: 4px;
`,J=(0,s.default)(E).withConfig({displayName:"Skeleton__StatBubble",componentId:"sc-d6341579-16"})`
  width: 116px;
`,K=(0,s.default)(W).withConfig({displayName:"Skeleton__WideBubble",componentId:"sc-d6341579-17"})`
  margin-bottom: 6px;
  width: 100%;
`,G=(0,s.default)(K).withConfig({displayName:"Skeleton__ThinTitleBubble",componentId:"sc-d6341579-18"})`
  width: 120px;
`,X=(0,s.default)(K).withConfig({displayName:"Skeleton__HalfWideBubble",componentId:"sc-d6341579-19"})`
  width: 50%;
`,Y=s.default.div.withConfig({displayName:"Skeleton__StatsLoadingContainer",componentId:"sc-d6341579-20"})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`,q=s.default.div.withConfig({displayName:"Skeleton__ExtraDetailsContainer",componentId:"sc-d6341579-21"})`
  padding-top: 24px;
`,ee=s.default.div.withConfig({displayName:"Skeleton__ChartAnimation",componentId:"sc-d6341579-22"})`
  animation: wave 8s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  display: flex;
  overflow: hidden;
  margin-top: 90px;

  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -800px;
    }
  }
`,te=s.default.div.withConfig({displayName:"Skeleton__Space",componentId:"sc-d6341579-23"})`
  height: ${({heightSize:e})=>`${e}px`};
`;function ne(){const e=(0,s.useTheme)();return(0,i.jsx)("svg",{width:"416",height:"160",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M 0 80 Q 104 10, 208 80 T 416 80",stroke:e.surface3,fill:"transparent",strokeWidth:"2"})})}function ie(){return(0,i.jsxs)(A,{children:[(0,i.jsx)(l.Tv.HeadlineLarge,{children:(0,i.jsx)(Q,{})}),(0,i.jsx)(te,{heightSize:6}),(0,i.jsx)(F,{children:(0,i.jsx)("div",{children:(0,i.jsxs)(ee,{children:[(0,i.jsx)(ne,{}),(0,i.jsx)(ne,{}),(0,i.jsx)(ne,{}),(0,i.jsx)(ne,{}),(0,i.jsx)(ne,{})]})})})]})}function de(){return(0,i.jsxs)(L.h6,{children:[(0,i.jsx)(R,{}),(0,i.jsxs)(Y,{children:[(0,i.jsxs)(L.sy,{children:[(0,i.jsxs)(L.Fy,{children:[(0,i.jsx)(V,{}),(0,i.jsx)(J,{})]}),(0,i.jsxs)(L.Fy,{children:[(0,i.jsx)(V,{}),(0,i.jsx)(J,{})]})]}),(0,i.jsxs)(L.sy,{children:[(0,i.jsxs)(L.Fy,{children:[(0,i.jsx)(V,{}),(0,i.jsx)(J,{})]}),(0,i.jsxs)(L.Fy,{children:[(0,i.jsx)(V,{}),(0,i.jsx)(J,{})]})]})]})]})}function ae(){const{chainName:e}=(0,S.UO)(),t=(0,y.C)(),n=(0,b.e)();return(0,i.jsxs)(D,{children:[n?(0,i.jsxs)(T.Q,{isInfoTDPEnabled:!0,children:[(0,i.jsxs)(T.y,{to:`${t?"/explore":""}/tokens/${e}`,children:[(0,i.jsx)(d.cC,{id:"8tjQCz"})," ",(0,i.jsx)(v.Z,{size:14})," ",(0,i.jsx)(d.cC,{id:"6RDwJM"})," ",(0,i.jsx)(v.Z,{size:14})]})," ",(0,i.jsx)(O,{})]}):(0,i.jsx)(T.Q,{children:(0,i.jsxs)(T.y,{to:(t?"/explore":"")+(e?`/tokens/${e}`:"/tokens"),children:[(0,i.jsx)(k.Z,{size:14})," Tokens"]})}),(0,i.jsx)(H,{children:(0,i.jsxs)(U,{children:[(0,i.jsx)(Z,{}),(0,i.jsx)(M,{})]})}),(0,i.jsx)(ie,{}),(0,i.jsx)(te,{heightSize:4}),(0,i.jsx)(de,{}),(0,i.jsx)(B,{}),(0,i.jsx)($.M7,{children:(0,i.jsx)($.d5,{children:(0,i.jsx)(R,{})})}),(0,i.jsx)(K,{}),(0,i.jsx)(K,{}),(0,i.jsx)(X,{style:{marginBottom:"24px"}}),(0,i.jsxs)(q,{children:[(0,i.jsx)(G,{}),(0,i.jsx)(X,{})]}),(0,i.jsxs)(q,{children:[(0,i.jsx)(G,{}),(0,i.jsx)(X,{})]})]})}function oe(){return(0,i.jsxs)(z,{children:[(0,i.jsx)(ae,{}),(0,i.jsx)(P,{children:(0,i.jsx)(_,{})})]})}},94556:function(e,t,n){n.d(t,{Fy:function(){return f},ZP:function(){return b},h6:function(){return _},sy:function(){return j}});var i=n(42893),d=n(12204),a=n(65647),o=n(68040),s=n(73633),l=n(87253),r=n(39839),c=n(47371),p=n(57482),x=n(35458),u=n(86403),h=n(57284);const f=l.default.div.withConfig({displayName:"StatsSection__StatWrapper",componentId:"sc-d9d5a146-0"})`
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  min-width: 121px;
  flex: 1;
  padding: 24px 0px;

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    min-width: 168px;
  }
`,m=l.default.div.withConfig({displayName:"StatsSection__TokenStatsSection",componentId:"sc-d9d5a146-1"})`
  display: flex;
  flex-wrap: wrap;
`,j=l.default.div.withConfig({displayName:"StatsSection__StatPair",componentId:"sc-d9d5a146-2"})`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`,g=(0,l.default)(r.Tv.MediumHeader).withConfig({displayName:"StatsSection__Header",componentId:"sc-d9d5a146-3"})`
  font-size: 28px !important;
`,w=l.default.div.withConfig({displayName:"StatsSection__StatPrice",componentId:"sc-d9d5a146-4"})`
  margin-top: 4px;
  font-size: 28px;
  color: ${({theme:e})=>e.neutral1};
`,C=l.default.div.withConfig({displayName:"StatsSection__NoData",componentId:"sc-d9d5a146-5"})`
  color: ${({theme:e})=>e.neutral3};
`,_=l.default.div.withConfig({displayName:"StatsSection__StatsWrapper",componentId:"sc-d9d5a146-6"})`
  gap: 16px;
  ${c.Sj}
`;function y({dataCy:e,value:t,title:n,description:d}){const{formatNumber:o}=(0,p.Gb)();return(0,i.jsxs)(f,{"data-cy":`${e}`,children:[(0,i.jsx)(a.ud,{text:d,children:n}),(0,i.jsx)(w,{children:o({input:t,type:p.sw.FiatTokenStats})})]})}function b(e){const{chainId:t,address:n,tokenQueryData:a}=e,{label:l,infoLink:c}=(0,o.bt)(t),p=(0,s.e)(),f=a?.market,w=a?.project?.markets?.[0],b=w?.fullyDilutedValuation?.value,v=w?.marketCap?.value,k=f?.totalValueLocked?.value,S=f?.volume24H?.value,N=f?.priceHigh52W?.value,I=f?.priceLow52W?.value;return(p?k||b||v||S:k||S||I||N)?(0,i.jsxs)(_,{"data-testid":"token-details-stats",children:[(0,i.jsx)(g,{children:(0,i.jsx)(d.cC,{id:"DY7jb0"})}),(0,i.jsx)(m,{children:p?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(j,{children:[(0,i.jsx)(y,{dataCy:"tvl",value:k,description:h.h8[u.PU.TOTAL_VALUE_LOCKED],title:(0,i.jsx)(d.cC,{id:"FHKsZF"})}),(0,i.jsx)(y,{dataCy:"market-cap",value:v,description:(0,i.jsx)(d.cC,{id:"eae2XY"}),title:(0,i.jsx)(d.cC,{id:"6dfcZB"})})]}),(0,i.jsxs)(j,{children:[(0,i.jsx)(y,{dataCy:"fdv",value:b,description:h.h8[u.PU.FULLY_DILUTED_VALUATION],title:(0,i.jsx)(d.cC,{id:"1ZpWKE"})}),(0,i.jsx)(y,{dataCy:"volume-24h",value:S,description:(0,i.jsx)(d.cC,{id:"2JmWZ7"}),title:(0,i.jsx)(d.cC,{id:"x0PCTL"})})]})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(j,{children:[(0,i.jsx)(y,{dataCy:"tvl",value:k,description:h.h8[u.PU.TOTAL_VALUE_LOCKED],title:(0,i.jsx)(d.cC,{id:"FHKsZF"})}),(0,i.jsx)(y,{dataCy:"volume-24h",value:S,description:(0,i.jsx)(d.cC,{id:"+FMbBO"}),title:(0,i.jsx)(d.cC,{id:"0RweTm"})})]}),(0,i.jsxs)(j,{children:[(0,i.jsx)(y,{dataCy:"52w-low",value:I,title:(0,i.jsx)(d.cC,{id:"Dw2kwD"})}),(0,i.jsx)(y,{dataCy:"52w-high",value:N,title:(0,i.jsx)(d.cC,{id:"eh5V57"})})]})]})})]}):x.N0.includes(t)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g,{children:(0,i.jsx)(d.cC,{id:"29Hx9U"})}),(0,i.jsx)(r.Tv.BodySecondary,{paddingTop:"12px",children:(0,i.jsx)(d.cC,{id:"9BeptC",values:{label:l},components:{0:(0,i.jsx)(r.dL,{color:"currentColor",href:`${c}tokens/${n}`})}})})]}):(0,i.jsx)(C,{children:"No stats available"})}},73633:function(e,t,n){n.d(t,{e:function(){return d}});var i=n(46839);function d(){return(0,i.U2)(i.TT.infoTDP)===i.Wn.Enabled}}}]);
//# sourceMappingURL=5225.b5c29b55.chunk.js.map