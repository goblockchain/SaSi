"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[7284],{91443:function(e,n,t){t.d(n,{Bz:function(){return r},HM:function(){return l},VC:function(){return o},fj:function(){return c}});var i=t(11275),a=t(17487);function o(e){if(!e.length)return{min:0,max:0};let n=e[0].value,t=e[0].value;for(const i of e)i.value<n&&(n=i.value),i.value>t&&(t=i.value);return{min:n,max:t}}function r(e){const n=[],t=[];let i;if(e.forEach(((a,o)=>{if(0!==a.value){if(0===n.length&&0!==o){const n={timestamp:e[0].timestamp,value:a.value};t.push([n,a])}i=a,n.push(a)}})),i){if(i!==e[e.length-1]){const n={timestamp:e[e.length-1].timestamp,value:i.value};t.push([i,n])}}return{prices:n,blanks:t,lastValidPrice:i}}function l(e,n,t){const a=t.invert(e),o=(0,(0,i.YFb)((e=>e.timestamp)).left)(n,a,1),r=n[o-1],l=n[o];if(!l)return r;return Math.abs(a.valueOf()-r.timestamp.valueOf())<Math.abs(l.timestamp.valueOf()-a.valueOf())?r:l}const s=i.Z_i.every(5),d={[a.XH.HOUR]:s?{interval:s,step:2}:{interval:i.Z_i,step:10},[a.XH.DAY]:{interval:i.WQD,step:4},[a.XH.WEEK]:{interval:i.rr1,step:1},[a.XH.MONTH]:{interval:i.rr1,step:7},[a.XH.YEAR]:{interval:i.F0B,step:2}};function c(e,n,t,i){if(0===i||n<=e)return[];const a=(n-e)/24,o=new Date(1e3*(e+a)),r=new Date(1e3*(n-a)),{interval:l,step:s}=d[t],c=l.range(o,r,s).map((e=>e.valueOf()/1e3));if(c.length<=i)return c;const f=[],p=Math.floor(c.length/i);for(let d=1;d<c.length;d+=p)f.push(c[d]);return f}},57284:function(e,n,t){t.d(n,{h8:function(){return de},VJ:function(){return pe},pS:function(){return me},PI:function(){return he},_j:function(){return le}});var i=t(42893),a=t(12204),o=t(19903),r=t(4271),l=t(66196),s=t(90315),d=t(11275),c=t(13712),f=t(87253),p=t(47244),h=t(14045);function m({data:e,getX:n,getY:t,marginTop:a,curve:o,color:r,strokeWidth:l,width:s,height:d,children:c}){const m=(0,f.useTheme)();return(0,i.jsxs)("svg",{width:s,height:d,children:[(0,i.jsx)(p.Z,{top:a,children:(0,i.jsx)(h.Z,{curve:o,stroke:r??m.accent1,strokeWidth:l,data:e,x:n,y:t})}),c]})}var u=c.memo(m),x=t(91443);const g=f.default.div.withConfig({displayName:"SparklineChart__LoadingContainer",componentId:"sc-c1c8d779-0"})`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;function w({width:e,height:n,tokenData:t,pricePercentChange:a,sparklineMap:o}){const r=(0,f.useTheme)(),l=t?.address?o[t.address]:null;if(!l||l.length<=1)return(0,i.jsx)(g,{children:(0,i.jsx)(le,{})});const s=l[0],c=l[l.length-1],p=(0,d.BYU)().domain([s.timestamp,c.timestamp]).range([0,110]),{min:h,max:m}=(0,x.VC)(l),w=(0,d.BYU)().domain([h,m]).range([30,0]);return(0,i.jsx)(u,{data:l,getX:e=>p(e.timestamp),getY:e=>w(e.value),curve:d.YY7.tension(.9),marginTop:5,color:a&&a<0?r.critical:r.success,strokeWidth:1.5,width:e,height:n})}var C=(0,c.memo)(w),_=t(83246),k=t(37636);const y=e=>(0,i.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12.75 16.5C12.75 16.914 12.414 17.25 12 17.25C11.586 17.25 11.25 16.914 11.25 16.5V11.929C11.25 11.515 11.586 11.179 12 11.179C12.414 11.179 12.75 11.515 12.75 11.929V16.5ZM12.02 9.5C11.468 9.5 11.0149 9.052 11.0149 8.5C11.0149 7.948 11.458 7.5 12.01 7.5H12.02C12.573 7.5 13.02 7.948 13.02 8.5C13.02 9.052 12.572 9.5 12.02 9.5Z",fill:"#9B9B9B"})});var j=t(65647),v=t(11569),T=t(17487),b=t(67621),$=t(41440),I=t(80657),N=t(1990),L=t(39839),R=t(57482),E=t(35458),U=t(80343),P=t(86403),O=t(86682);const D=f.default.div.withConfig({displayName:"TokenRow__Cell",componentId:"sc-f2eaef74-0"})`
  display: flex;
  align-items: center;
  justify-content: center;
`,V=f.default.div.withConfig({displayName:"TokenRow__StyledTokenRow",componentId:"sc-f2eaef74-1"})`
  background-color: transparent;
  display: grid;
  font-size: 16px;
  grid-template-columns: 1fr 7fr 4fr 4fr 4fr 4fr 5fr;
  line-height: 24px;
  max-width: ${E.y5};
  min-width: 390px;
  ${({first:e,last:n})=>f.css`
    height: ${e||n?"72px":"64px"};
    padding-top: ${e?"8px":"0px"};
    padding-bottom: ${n?"8px":"0px"};
  `}
  padding-left: 12px;
  padding-right: 12px;
  transition: ${({theme:{transition:{duration:e,timing:n}}})=>f.css`background-color ${e.medium} ${n.ease}`};
  width: 100%;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};

  &:hover {
    ${({$loading:e,theme:n})=>!e&&f.css`
        background-color: ${n.deprecated_hoverDefault};
      `}
    ${({last:e})=>e&&f.css`
        border-radius: 0px 0px 8px 8px;
      `}
  }

  @media only screen and (max-width: ${E.y5}) {
    grid-template-columns: 1fr 6.5fr 4.5fr 4.5fr 4.5fr 4.5fr 1.7fr;
  }

  @media only screen and (max-width: ${E.$l}) {
    grid-template-columns: 1fr 7.5fr 4.5fr 4.5fr 4.5fr 1.7fr;
  }

  @media only screen and (max-width: ${E.Uw}) {
    grid-template-columns: 1fr 10fr 5fr 5fr 1.2fr;
  }

  @media only screen and (max-width: ${E.T1}) {
    grid-template-columns: 2fr 3fr;
    min-width: unset;
    border-bottom: 0.5px solid ${({theme:e})=>e.surface2};

    :last-of-type {
      border-bottom: none;
    }
  }
`,X=f.default.div.withConfig({displayName:"TokenRow__ClickableContent",componentId:"sc-f2eaef74-2"})`
  display: flex;
  ${({gap:e})=>e&&`gap: ${e}px`};
  text-decoration: none;
  color: ${({theme:e})=>e.neutral1};
  align-items: center;
  cursor: pointer;
`,A=(0,f.default)(X).withConfig({displayName:"TokenRow__ClickableName",componentId:"sc-f2eaef74-3"})`
  gap: 12px;
  max-width: 100%;
`,M=(0,f.default)(V).withConfig({displayName:"TokenRow__StyledHeaderRow",componentId:"sc-f2eaef74-4"})`
  border-bottom: 1px solid;
  border-color: ${({theme:e})=>e.surface3};
  border-radius: 8px 8px 0px 0px;
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  height: 48px;
  line-height: 16px;
  padding: 0px 12px;
  width: 100%;
  justify-content: center;

  &:hover {
    background-color: transparent;
  }

  @media only screen and (max-width: ${E.T1}) {
    justify-content: space-between;
  }
`,H=(0,f.default)(D).withConfig({displayName:"TokenRow__ListNumberCell",componentId:"sc-f2eaef74-5"})`
  color: ${({theme:e})=>e.neutral2};
  min-width: 32px;
  font-size: 14px;

  @media only screen and (max-width: ${E.T1}) {
    display: none;
  }
`,Y=(0,f.default)(D).withConfig({displayName:"TokenRow__DataCell",componentId:"sc-f2eaef74-6"})`
  justify-content: flex-end;
  min-width: 80px;
  user-select: ${({sortable:e})=>e?"none":"unset"};
  transition: ${({theme:{transition:{duration:e,timing:n}}})=>f.css`background-color ${e.medium} ${n.ease}`};
`,B=(0,f.default)(Y).withConfig({displayName:"TokenRow__TvlCell",componentId:"sc-f2eaef74-7"})`
  padding-right: 8px;
  @media only screen and (max-width: ${E.Uw}) {
    display: none;
  }
`,S=(0,f.default)(D).withConfig({displayName:"TokenRow__NameCell",componentId:"sc-f2eaef74-8"})`
  justify-content: flex-start;
  padding: 0px 8px;
  min-width: 240px;
  gap: 8px;

  @media only screen and (max-width: ${N.j$.xs}px) {
    min-width: 200px;
  }
`,z=(0,f.default)(Y).withConfig({displayName:"TokenRow__PriceCell",componentId:"sc-f2eaef74-9"})`
  padding-right: 8px;
`,F=(0,f.default)(Y).withConfig({displayName:"TokenRow__PercentChangeCell",componentId:"sc-f2eaef74-10"})`
  padding-right: 8px;
  @media only screen and (max-width: ${E.T1}) {
    display: none;
  }
`,K=(0,f.default)(D).withConfig({displayName:"TokenRow__PercentChangeInfoCell",componentId:"sc-f2eaef74-11"})`
  display: none;

  @media only screen and (max-width: ${E.T1}) {
    display: flex;
    gap: 3px;
    justify-content: flex-end;
    color: ${({theme:e})=>e.neutral2};
    font-size: 12px;
    line-height: 16px;
  }
`,Z=(0,f.default)(D).withConfig({displayName:"TokenRow__PriceInfoCell",componentId:"sc-f2eaef74-12"})`
  justify-content: flex-end;
  flex: 1;

  @media only screen and (max-width: ${E.T1}) {
    flex-direction: column;
    align-items: flex-end;
  }
`,W=f.default.span.withConfig({displayName:"TokenRow__HeaderCellWrapper",componentId:"sc-f2eaef74-13"})`
  align-items: center;
  cursor: ${({onClick:e})=>e?"pointer":"unset"};
  display: flex;
  gap: 4px;
  justify-content: flex-end;
  width: 100%;

  &:hover {
    ${L.iV}
  }
`,G=(0,f.default)(D).withConfig({displayName:"TokenRow__SparkLineCell",componentId:"sc-f2eaef74-14"})`
  padding: 0px 24px;
  min-width: 120px;

  @media only screen and (max-width: ${E.y5}) {
    display: none;
  }
`,J=(0,f.default)(D).withConfig({displayName:"TokenRow__SparkLine",componentId:"sc-f2eaef74-15"})`
  width: 124px;
  height: 42px;
`,Q=(0,f.default)($.rU).withConfig({displayName:"TokenRow__StyledLink",componentId:"sc-f2eaef74-16"})`
  text-decoration: none;
`,q=(0,f.default)(D).withConfig({displayName:"TokenRow__TokenInfoCell",componentId:"sc-f2eaef74-17"})`
  gap: 8px;
  line-height: 24px;
  font-size: 16px;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media only screen and (max-width: ${E.T1}) {
    justify-content: flex-start;
    flex-direction: column;
    gap: 0px;
    width: max-content;
    font-weight: 535;
  }
`,ee=f.default.div.withConfig({displayName:"TokenRow__TokenName",componentId:"sc-f2eaef74-18"})`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`,ne=(0,f.default)(D).withConfig({displayName:"TokenRow__TokenSymbol",componentId:"sc-f2eaef74-19"})`
  color: ${({theme:e})=>e.neutral2};
  text-transform: uppercase;

  @media only screen and (max-width: ${E.T1}) {
    font-size: 12px;
    height: 16px;
    justify-content: flex-start;
    width: 100%;
  }
`,te=(0,f.default)(Y).withConfig({displayName:"TokenRow__VolumeCell",componentId:"sc-f2eaef74-20"})`
  padding-right: 8px;
  @media only screen and (max-width: ${E.$l}) {
    display: none;
  }
`,ie=(0,f.default)(U.X).withConfig({displayName:"TokenRow__SmallLoadingBubble",componentId:"sc-f2eaef74-21"})`
  width: 25%;
`,ae=(0,f.default)(U.X).withConfig({displayName:"TokenRow__MediumLoadingBubble",componentId:"sc-f2eaef74-22"})`
  width: 65%;
`,oe=(0,f.default)(U.X).withConfig({displayName:"TokenRow__LongLoadingBubble",componentId:"sc-f2eaef74-23"})`
  width: 90%;
`,re=(0,f.default)(U.X).withConfig({displayName:"TokenRow__IconLoadingBubble",componentId:"sc-f2eaef74-24"})`
  border-radius: 50%;
  width: 24px;
`,le=(0,f.default)(oe).withConfig({displayName:"TokenRow__SparkLineLoadingBubble",componentId:"sc-f2eaef74-25"})`
  height: 4px;
`,se=f.default.div.withConfig({displayName:"TokenRow__InfoIconContainer",componentId:"sc-f2eaef74-26"})`
  width: 16px;
  margin-left: 2px;
  display: flex;
  align-items: center;
  cursor: help;
`,de={[P.PU.PRICE]:void 0,[P.PU.PERCENT_CHANGE]:void 0,[P.PU.TOTAL_VALUE_LOCKED]:(0,i.jsx)(a.cC,{id:"mHl+0T"}),[P.PU.FULLY_DILUTED_VALUATION]:(0,i.jsx)(a.cC,{id:"XnQwo3"}),[P.PU.VOLUME]:(0,i.jsx)(a.cC,{id:"yXnGvf"})};function ce({category:e}){const n=(0,f.useTheme)(),t=(0,b.Dv)(P.$E),a=(0,P.OX)(e),o=(0,b.Dv)(P.AY),r=de[e];return(0,i.jsxs)(W,{onClick:a,children:[o===e&&(0,i.jsx)(i.Fragment,{children:t?(0,i.jsx)(k.V,{width:16,height:16,color:n.neutral2}):(0,i.jsx)(_.c,{width:16,height:16,color:n.neutral2})}),e,r&&(0,i.jsx)(j.ud,{text:r,placement:"right",children:(0,i.jsx)(se,{children:(0,i.jsx)(y,{width:"16px",height:"16px"})})})]})}function fe({header:e,listNumber:n,tokenInfo:t,price:a,percentChange:o,tvl:r,volume:l,sparkLine:s,...d}){const c=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(H,{header:e,children:n}),(0,i.jsx)(S,{"data-testid":"name-cell",children:t}),(0,i.jsx)(z,{"data-testid":"price-cell",sortable:e,children:a}),(0,i.jsx)(F,{"data-testid":"percent-change-cell",sortable:e,children:o}),(0,i.jsx)(B,{"data-testid":"tvl-cell",sortable:e,children:r}),(0,i.jsx)(te,{"data-testid":"volume-cell",sortable:e,children:l}),(0,i.jsx)(G,{children:s})]});return e?(0,i.jsx)(M,{"data-testid":"header-row",children:c}):(0,i.jsx)(V,{...d,children:c})}function pe(){return(0,i.jsx)(fe,{header:!0,listNumber:"#",tokenInfo:(0,i.jsx)(a.cC,{id:"SKZhW9"}),price:(0,i.jsx)(ce,{category:P.PU.PRICE}),percentChange:(0,i.jsx)(ce,{category:P.PU.PERCENT_CHANGE}),tvl:(0,i.jsx)(ce,{category:P.PU.TOTAL_VALUE_LOCKED}),volume:(0,i.jsx)(ce,{category:P.PU.VOLUME}),sparkLine:null})}function he(e){return(0,i.jsx)(fe,{header:!1,listNumber:(0,i.jsx)(ie,{}),$loading:!0,tokenInfo:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(re,{}),(0,i.jsx)(ae,{})]}),price:(0,i.jsx)(ae,{}),percentChange:(0,i.jsx)(U.X,{}),tvl:(0,i.jsx)(U.X,{}),volume:(0,i.jsx)(U.X,{}),sparkLine:(0,i.jsx)(le,{}),...e})}const me=(0,c.forwardRef)(((e,n)=>{const{formatFiatPrice:t,formatNumber:a,formatDelta:d}=(0,R.Gb)(),{tokenListIndex:c,tokenListLength:f,token:p,sortRank:h}=e,m=(0,b.Dv)(P.fO),u=(0,T.Qj)((0,I.UO)().chainName?.toUpperCase()),x=(0,T.Tz)(u),g=(0,b.Dv)(P.X3),w=p.market?.pricePercentChange?.value,_=d(w),k={chain_id:x,token_address:p.address,token_symbol:p.symbol,token_list_index:c,token_list_rank:h,token_list_length:f,time_frame:g,search_token_address_input:m},y=0===p.market?.price?.value?"-":t({price:p.market?.price?.value}),j=(0,v.C)();return(0,i.jsx)("div",{ref:n,"data-testid":`token-table-row-${p.address}`,children:(0,i.jsx)(Q,{to:(0,T.dG)({...p,isInfoExplorePageEnabled:j}),onClick:()=>(0,l._P)(o.Je.EXPLORE_TOKEN_ROW_CLICKED,k),children:(0,i.jsx)(fe,{header:!1,listNumber:h,tokenInfo:(0,i.jsxs)(A,{children:[(0,i.jsx)(s.z,{size:"36px",src:p.project.logoUrl}),(0,i.jsxs)(q,{children:[(0,i.jsx)(ee,{"data-cy":"token-name",children:p.name}),(0,i.jsx)(ne,{children:p.symbol})]})]}),price:(0,i.jsx)(X,{children:(0,i.jsxs)(Z,{children:[y,(0,i.jsxs)(K,{children:[(0,i.jsx)(O.Kx,{delta:w,size:14}),(0,i.jsx)(O.Jp,{delta:w,children:_})]})]})}),percentChange:(0,i.jsxs)(X,{gap:3,children:[(0,i.jsx)(O.Kx,{delta:w}),(0,i.jsx)(O.Jp,{delta:w,children:_})]}),tvl:(0,i.jsx)(X,{children:a({input:p.market?.totalValueLocked?.value,type:R.sw.FiatTokenStats})}),volume:(0,i.jsx)(X,{children:a({input:p.market?.volume?.value,type:R.sw.FiatTokenStats})}),sparkLine:(0,i.jsx)(J,{children:(0,i.jsx)(r.Z,{children:({width:n,height:t})=>e.sparklineMap&&(0,i.jsx)(C,{width:n,height:t,tokenData:p,pricePercentChange:p.market?.pricePercentChange?.value,sparklineMap:e.sparklineMap})})}),first:0===c,last:c===f-1})})})}));me.displayName="LoadedRow"},86403:function(e,n,t){t.d(n,{$E:function(){return f},AY:function(){return c},OX:function(){return p},PU:function(){return i},X3:function(){return d},fO:function(){return s}});var i,a=t(17487),o=t(30719),r=t(67621),l=t(13712);!function(e){e.FULLY_DILUTED_VALUATION="FDV",e.PRICE="Price",e.PERCENT_CHANGE="Change",e.TOTAL_VALUE_LOCKED="TVL",e.VOLUME="Volume"}(i||(i={}));const s=(0,r.rw)(""),d=(0,o.cn)(a.XH.DAY),c=(0,o.cn)(i.VOLUME),f=(0,o.cn)(!1);function p(e){const[n,t]=(0,o.KO)(c),[i,a]=(0,o.KO)(f);return(0,l.useCallback)((()=>{n===e?a(!i):(t(e),a(!1))}),[n,t,a,i,e])}}}]);
//# sourceMappingURL=7284.0ccd41e1.chunk.js.map