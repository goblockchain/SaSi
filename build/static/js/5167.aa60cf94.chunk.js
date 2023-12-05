"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5167],{6053:function(e,t,i){i.d(t,{G:function(){return a}});var n=i(80815),o=i(48141);function a(){const{chainId:e}=(0,n.useWeb3React)();return e&&o.Ep.includes(e)}},3752:function(e,t,i){i.r(t),i.d(t,{default:function(){return we}});var n,o,a,r=i(42893),d=i(12204),s=i(19903),l=i(80815),c=i(66196),p=i(93622),m=i(60198),u=i(60476),f=i(13712),g=i(41440),h=i(87253),x=i(39839);function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},b.apply(this,arguments)}function w(e,t){let{title:i,titleId:r,...d}=e;return f.createElement("svg",b({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},d),i?f.createElement("title",{id:r},i):null,n||(n=f.createElement("path",{d:"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),o||(o=f.createElement("path",{d:"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),a||(a=f.createElement("path",{d:"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const y=f.forwardRef(w);i.p;var j,C=i(55338),v=i(56564),_=i(13120);!function(e){e.LEFT="LEFT",e.RIGHT="RIGHT"}(j||(j={}));const I=(0,h.default)(y).withConfig({displayName:"Menu__StyledMenuIcon",componentId:"sc-ac391358-0"})`
  path {
    stroke: ${({theme:e})=>e.neutral1};
  }
`,P=h.default.div.withConfig({displayName:"Menu__StyledMenu",componentId:"sc-ac391358-1"})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`,k=h.default.span.withConfig({displayName:"Menu__MenuFlyout",componentId:"sc-ac391358-2"})`
  min-width: 196px;
  max-height: 350px;
  overflow: auto;
  background-color: ${({theme:e})=>e.surface1};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border: 1px solid ${({theme:e})=>e.surface1};
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: absolute;
  top: 3rem;
  z-index: 100;

  ${({flyoutAlignment:e=j.RIGHT})=>e===j.RIGHT?h.css`
          right: 0rem;
        `:h.css`
          left: 0rem;
        `};
`,A=(0,h.default)(x.dL).withConfig({displayName:"Menu__MenuItem",componentId:"sc-ac391358-3"})`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0.5rem;
  justify-content: space-between;
  color: ${({theme:e})=>e.neutral2};
  :hover {
    color: ${({theme:e})=>e.neutral1};
    cursor: pointer;
    text-decoration: none;
  }
`,T=(0,h.default)(g.rU).withConfig({displayName:"Menu__InternalMenuItem",componentId:"sc-ac391358-4"})`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({theme:e})=>e.neutral2};
  width: max-content;
  text-decoration: none;
  :hover {
    color: ${({theme:e})=>e.neutral1};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`,N=(0,h.default)(A).withConfig({displayName:"Menu__ExternalMenuItem",componentId:"sc-ac391358-5"})`
  width: max-content;
  text-decoration: none;
`;i(22230);var O=i(1990);h.default.div.withConfig({displayName:"PositionList__DesktopHeader",componentId:"sc-dcaf7249-0"})`
  display: none;
  font-size: 14px;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${O.e.deprecated_upToSmall}px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    & > div:last-child {
      text-align: right;
      margin-right: 12px;
    }
  }
`,h.default.div.withConfig({displayName:"PositionList__MobileHeader",componentId:"sc-dcaf7249-1"})`
  font-weight: medium;
  padding: 8px;
  font-weight: 535;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${O.e.deprecated_upToSmall}px) {
    display: none;
  }

  @media screen and (max-width: ${O.e.deprecated_upToExtraSmall}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`,h.default.div.withConfig({displayName:"PositionList__ToggleWrap",componentId:"sc-dcaf7249-2"})`
  display: flex;
  flex-direction: row;
  align-items: center;
`,h.default.button.withConfig({displayName:"PositionList__ToggleLabel",componentId:"sc-dcaf7249-3"})`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({theme:e})=>e.accent1};
  font-size: 14px;
  font-weight: 485;
`;var W=i(2304),E=i(85729),M=i(48141),R=i(25243),L=i(6053),z=i(59991),$=i(34578),S=i(49855),B=i(47212),G=i(52034),q=i(45957),H=(i(83931),i(64614));i(68040);h.default.section.withConfig({displayName:"CTACards__CTASection",componentId:"sc-d54cea6f-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  opacity: 0.8;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    grid-template-columns: auto;
    grid-template-rows: auto;
  `};
`,(0,h.default)(x.dL).withConfig({displayName:"CTACards__CTA",componentId:"sc-d54cea6f-1"})`
  padding: 16px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.surface3};

  * {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none !important;
  }

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};

    text-decoration: none;
    * {
      text-decoration: none !important;
    }
  }
`,(0,h.default)(x.Tv.DeprecatedLabel).withConfig({displayName:"CTACards__HeaderText",componentId:"sc-d54cea6f-2"})`
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: 535 !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    font-size: 16px;
  `};
`,(0,h.default)(u.Tz).withConfig({displayName:"CTACards__ResponsiveColumn",componentId:"sc-d54cea6f-3"})`
  grid-template-columns: 1fr;
  width: 100%;
  gap: 8px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    gap: 8px;
  `};
  justify-content: space-between;
`;var U=i(61940),Z=i.n(U),F=i(41432),Q=i.n(F),X=i(91514);const D=(0,f.forwardRef)(((e,t)=>{const{img:i,size:n,icon:o,color:a,status:d,badgeUp:s,content:l,tag:c,initials:p,imgWidth:m,className:u,badgeText:f,imgHeight:g,badgeColor:h,imgClassName:x,contentStyles:b,...w}=e;return(0,r.jsxs)(c,{className:Z()("avatar",{[u]:u,[`bg-${a}`]:a,[`avatar-${n}`]:n}),ref:t,...w,children:[!1===i||void 0===i?(0,r.jsxs)("span",{className:Z()("avatar-content",{"position-relative":s}),style:b,children:[p?(e=>{const t=[];return e.split(" ").forEach((e=>{t.push(e[0])})),t.join("")})(l):l,o||null,s?(0,r.jsx)(X.Z,{color:h||"primary",className:"badge-sm badge-up",pill:!0,children:f||"0"}):null]}):(0,r.jsx)("img",{className:Z()({[x]:x}),src:i,alt:"avatarImg",height:g&&!n?g:32,width:m&&!n?m:32}),d?(0,r.jsx)("span",{className:Z()({[`avatar-status-${d}`]:d,[`avatar-status-${n}`]:n})}):null]})}));var K=D;D.propTypes={icon:Q().node,src:Q().string,badgeUp:Q().bool,content:Q().string,badgeText:Q().string,className:Q().string,imgClassName:Q().string,contentStyles:Q().object,size:Q().oneOf(["sm","lg","xl"]),tag:Q().oneOfType([Q().func,Q().string]),status:Q().oneOf(["online","offline","away","busy"]),imgHeight:Q().oneOfType([Q().string,Q().number]),imgWidth:Q().oneOfType([Q().string,Q().number]),badgeColor:Q().oneOf(["primary","secondary","success","danger","info","warning","dark","light-primary","light-secondary","light-success","light-danger","light-info","light-warning","light-dark"]),color:Q().oneOf(["primary","secondary","success","danger","info","warning","dark","light-primary","light-secondary","light-success","light-danger","light-info","light-warning","light-dark"]),initials(e){return e.initials&&void 0===e.content?new Error("content prop is required with initials prop."):e.initials&&"string"!==typeof e.content?new Error("content prop must be a string."):"boolean"!==typeof e.initials&&void 0!==e.initials?new Error("initials must be a boolean!"):void 0}},D.defaultProps={tag:"div"};var V=i(79250);const Y=e=>{const{data:t,tag:i,className:n}=e,o=i||"div";return(0,r.jsx)(o,{className:Z()("avatar-group",{[n]:n}),children:t.map(((e,t)=>{const i=e.tag?e.tag:"div";return(0,r.jsxs)(f.Fragment,{children:[e.title?(0,r.jsx)(V.Z,{placement:e.placement,target:e.title.split(" ").join("-"),children:e.title}):null,e.meta?null:(0,r.jsx)(K,{tag:i,className:Z()("pull-up",{[e.className]:e.className}),...e.title?{id:e.title.split(" ").join("-")}:{},...e,title:void 0,meta:void 0}),e.meta?(0,r.jsx)(i,{className:"d-flex align-items-center ps-1",children:e.meta}):null]},t)}))})};var J=Y;Y.propTypes={data:Q().array.isRequired,tag:Q().oneOfType([Q().func,Q().string])};var ee=i.p+"static/media/progress.5c9810a834d2a8074887.png";const te=[{id:1,public_title_infos:{id:1,name:"TESOURO PREFIXADO 2026",type:"ltn",icon:"https://i.im.ge/2023/11/27/CQmBj4.Group-11.png",description:'O "Tesouro Prefixado 2026"\xe9 um investimento com vencimento em 01/01/2026, rendendo R$ 1.000 por t\xedtulo no vencimento. \xc9 ideal para investimentos de m\xe9dio prazo sem juros semestrais, e pode ser resgatado antecipadamente pelo valor de mercado.'},cbdc_infos:{id:1,name:"Hong Kong",icon:"https://i.im.ge/2023/12/04/C4zosc.image-69.png"},liquidity:1.2,APR:32},{id:2,public_title_infos:{id:1,name:"TESOURO PREFIXADO 2029",type:"ltn",icon:"https://i.im.ge/2023/11/27/CQm4OD.Group-14.png",description:'O "Tesouro Prefixado 2029" \xe9 um t\xedtulo que vence em 01/01/2029. Indicado para aqueles que querem realizar investimentos de m\xe9dio prazo. T\xedtulo prefixado, ou seja, no momento da compra, voc\xea j\xe1 sabe exatamente quanto ir\xe1 receber no futuro.'},cbdc_infos:{id:1,name:"Jap\xe3o",icon:"https://i.im.ge/2023/12/04/C4zlzG.image-74.png"},liquidity:1.4,APR:25},{id:3,public_title_infos:{id:1,name:"TESOURO SELIC 2026",type:"ltf",icon:"https://i.im.ge/2023/11/27/CQmGWC.Group-12.png",description:"Investimento com vencimento em 01/03/2026. Indicado para aqueles que querem realizar investimentos de m\xe9dio prazo T\xedtulo com rentabilidade di\xe1ria vinculada \xe0 taxa de juros da economia (taxa Selic)."},cbdc_infos:{id:1,name:"Real Digital",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQHSURBVHgBnVVdbFNlGH6+c9aethus+6mKwaYFnDHEZZs6WYJmEzHqhahxF8ZkqxnhQkKYXkjiDUhiIJGETWPCjXFTbiTeSBQwMQ6U2MFwW10WR8hYGT8bZbRdaUvbrefj/c7o3057BjzJyffT7/ue933e9+3LYIQRjx1xvAEZrQB/BRwbwGCiUaXRBzAfOP8DocDPeOtkstQzrOjulMeCgLoHKuumE3asDD8k3oPmH3ofjMTrcdGFX8najXh4+MFZG1r6/PmbUsGRs54GkmX4EQkEXGT2IM6Ld3LIeSI8YNxLsyeMXimXOGIqgzF4CIrUhMYlj3KeMD5gRGCXVBx+PIJo3Sy+dESwmtalwaqQJMmP77DlSAY9uyFcLYFWWxIj7jl0V8W09ec1MfhovcWWNCAiyR2JzzRKHGs3w2m7WIxEWL/XEdUeH7tWB+9kE2IpKyqUOF50/YcG5//oCZZj/1wFQqqkp+EIw8LcDOc7P6SsP1rM+u/XzMOhKjj0exeG/PW6NzY/fQG7Xv0Rt6QkOmfs+Ctu1hOl1Q8kKqaty60X2g84g3CZ0vjp349wJdwEc5k+2GcvvaAZIM6dcd7WYmWjxCiAzFoZvJ0jJFpDvvXiksB8qgGTkS9gkimrLBLMMsPEjSRODccwcS0XjwPvHcJzay9qc/+CjI9nK3EyptyXjE+U0VCfr30+jg0+g19GA9m1IGpab0FHWyXSZMc3vwURmF+kWDVmSYSBJ54KarHac2sVUmDrysgLqX9NGG+v0mdKNGktWMcSKv4ej2vfRqeCAx2PkVdRBINW3d3u6hjcRPjO9SqzSIlU16wd34VtuoPlyl2Uwvh0EjuPzGBtjQnbmvXx6iVPPDOVYpqmwOPyHA3bScct09Waphm0rBuFERILHIeP34aaOpfdu7ooo226Bt2B1QiLtOZ8TKJKP5M58Gdcwct04NtQubYWOje7fIZEIo03OMaz1tdfrsXpwlT2ydjeWEGT9zM7EWI/QZkxmjBhk3UBr60fw82IA9PBJ3UEoiA/2dqHGa7i3evVOEKSJ/gy6STpK4YBakwWPlWsb9TKKg467qDLHsfo1WcxNFVPyWCjWMU1KYWnwvp9VPHhYhUv/vrLlLolWm/HPjC2FyWwrSKBHirQTP0ICO07btiXS1MIjt1o6f96ieSfdisk2xBQuo9Uk1f7a6PYSbW0gvU5Lzb1u8WksJ9AHSaPqoxuCglFNq6AWeqQLZkOmTstNiS1TTtggBUJOEJYZG/mt+DCGy8d9WkWCFcfDeNIqc9jc19BgZXuo+c8u6iQPoVBM8tC9A2wXuqrB+HuSyz/2bhZX9hhQjrVDlV9nWIlGor4ZHp0gcbJpUKWTkPBKern4VLP3AMt7456UKHPTwAAAABJRU5ErkJggg=="},liquidity:1.7,APR:23}],ie=({firstPair:e,secondPair:t})=>{const i=[{img:e},{img:t}];return(0,r.jsx)(J,{data:i})},ne=h.default.div.withConfig({displayName:"PoolCard__PoolCardsContainer",componentId:"sc-a5b17ee0-0"})`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,oe=h.default.div.withConfig({displayName:"PoolCard__CollateralBadge",componentId:"sc-a5b17ee0-1"})`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
  background-color: #ecfdf3;
  width: 83px;
  height: 22px;
  border-radius: 16px;

  .rounded-pill {
    background-color: #12b76a;
    width: 6px;
    height: 6px;
    border-radius: 100%;
  }

  label {
    font-size: 14px;
    color: #027a48;
  }
`,ae=h.default.div.withConfig({displayName:"PoolCard__StyledPoolCard",componentId:"sc-a5b17ee0-2"})`
  width: 360px;
  height: 478px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #eaecf0;
`,re=h.default.header.withConfig({displayName:"PoolCard__PoolCardHeader",componentId:"sc-a5b17ee0-3"})`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-bottom: 1px solid #eaecf0;
  height: 75px;

  > div {
    display: flex;
    align-items: center;
    column-gap: 10px;
    .main-icon {
      width: 32px;
      height: 32px;
    }

    h3 {
      font-size: 14px;
    }
  }
`,de=h.default.div.withConfig({displayName:"PoolCard__PoolCardBody",componentId:"sc-a5b17ee0-4"})`
  position: relative;
  height: 45%;
  display: flex;
  border-bottom: 1px solid #eaecf0;
  justify-content: center;

  .progress-graph {
    position: absolute;
  }

  .body-infos {
    display: flex;
    align-items: center;
    column-gap: 50px;
    margin-top: 30px;

    > div {
      display: flex;
      width: 70px;
      height: 50px;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      span {
        height: 32px;
        font-size: 24px;
        font-weight: 500;
        font-family: 'Inter';
      }

      label {
        color: #667085;
        align-self: center;
      }
    }
  }
`,se=h.default.div.withConfig({displayName:"PoolCard__PoolCardFooter",componentId:"sc-a5b17ee0-5"})`
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 360px;

  p {
    font-size: 14px;
    font-weight: 400;
    color: #667085;
    text-align: justify;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis; /* Adiciona reticências para indicar texto cortado */
    -webkit-line-clamp: 4; /* Limita o número de linhas exibidas (ajuste conforme necessário) */
    -webkit-box-orient: vertical;
    line-height: 1.2em; /* Ajuste conforme a altura do texto */
    height: 6em; /* Limita a altura a aproximadamente 3 linhas */
  }

  button {
    color: #9a9aaf;
    border: 1px solid #c6cbd9;
    background-color: inherit;
    border-radius: 8px;
    width: 100%;
    padding: 10px;
  }
`;function le({activePoolType:e}){const t="all"!==e?te.filter((t=>t.public_title_infos.type===e)):te;return(0,r.jsx)(ne,{children:t.map((e=>(0,r.jsxs)(ae,{children:[(0,r.jsxs)(re,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("img",{className:"main-icon",src:e.public_title_infos.icon,alt:"tesouro-prefixiado-2026"}),(0,r.jsx)("h3",{children:e.public_title_infos.name})]}),(0,r.jsxs)(oe,{children:[(0,r.jsx)("div",{className:"rounded-pill"}),(0,r.jsx)("label",{children:"Collateral"})]})]}),(0,r.jsxs)(de,{children:[(0,r.jsx)("img",{className:"progress-graph",src:ee}),(0,r.jsxs)("div",{className:"body-infos",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(ie,{firstPair:e.cbdc_infos.icon,secondPair:e.public_title_infos.icon}),(0,r.jsx)("label",{children:"Pool"})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("span",{children:[e.APR,"%"]}),(0,r.jsx)("label",{children:"APR"})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("span",{children:["$",e.liquidity,"M"]}),(0,r.jsx)("label",{children:"Liquidez"})]})]})]}),(0,r.jsx)(se,{children:(0,r.jsx)("p",{children:e.public_title_infos.description})})]},e.id)))})}i(55494);const ce=(0,h.default)(u.Tz).withConfig({displayName:"Pool__PageWrapper",componentId:"sc-76341048-0"})`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 800px;
    padding-top: 48px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    max-width: 500px;
    padding-top: 20px;
  }
`,pe=(0,h.default)(W.m0).withConfig({displayName:"Pool__TitleRow",componentId:"sc-76341048-1"})`
  color: ${({theme:e})=>e.neutral2};
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
  }
`,me=((0,h.default)(W.DA).withConfig({displayName:"Pool__ButtonRow",componentId:"sc-76341048-2"})`
  & > *:not(:last-child) {
    margin-left: 8px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`,(0,h.default)((({flyoutAlignment:e=j.RIGHT,ToggleUI:t,menuItems:i,...n})=>{const o=(0,f.useRef)(),a=(0,v.Wt)(_.Lk.POOL_OVERVIEW_OPTIONS),d=(0,v.xk)(_.Lk.POOL_OVERVIEW_OPTIONS);(0,C.t)(o,a?d:void 0);const s=t||I;return(0,r.jsxs)(P,{ref:o,...n,children:[(0,r.jsx)(s,{onClick:d}),a&&(0,r.jsx)(k,{flyoutAlignment:e,children:i.map((({content:e,link:t,external:i},n)=>i?(0,r.jsx)(N,{href:t,children:e},n):(0,r.jsx)(T,{to:t,children:e},n)))})]})})).withConfig({displayName:"Pool__PoolMenu",componentId:"sc-76341048-3"})`
  margin-left: 0;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }

  a {
    width: 100%;
  }
`,h.default.div.withConfig({displayName:"Pool__PoolMenuItem",componentId:"sc-76341048-4"})`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 535;
`,(0,h.default)(m.Ux).withConfig({displayName:"Pool__MoreOptionsButton",componentId:"sc-76341048-5"})`
  border-radius: 12px;
  flex: 1 1 auto;
  padding: 6px 8px;
  width: 100%;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-right: 8px;
`,(0,h.default)(x.Tv.BodyPrimary).withConfig({displayName:"Pool__MoreOptionsText",componentId:"sc-76341048-6"})`
  align-items: center;
  display: flex;
`,h.default.div.withConfig({displayName:"Pool__ErrorContainer",componentId:"sc-76341048-7"})`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 300px;
  min-height: 25vh;
`),ue=h.css`
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
`,fe=(0,h.default)($.Z).withConfig({displayName:"Pool__NetworkIcon",componentId:"sc-76341048-8"})`
  ${ue}
`,ge=((0,h.default)(S.Z).withConfig({displayName:"Pool__InboxIcon",componentId:"sc-76341048-9"})`
  ${ue}
`,(0,h.default)(m.DF).withConfig({displayName:"Pool__ResponsiveButtonPrimary",componentId:"sc-76341048-10"})`
  border-radius: 12px;
  font-size: 16px;
  padding: 6px 8px;
  width: fit-content;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }
`,h.default.main.withConfig({displayName:"Pool__MainContentWrapper",componentId:"sc-76341048-11"})`
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  padding: 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`),he=h.default.div.withConfig({displayName:"Pool__MainContainerTitleWrapper",componentId:"sc-76341048-12"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: '#101828';
    font-weight: 600;
    font-size: 36px;
    font-family: 'Inter', sans-serif;
  }
`,xe=h.default.div.withConfig({displayName:"Pool__PoolsTypesSelect",componentId:"sc-76341048-13"})`
  border: 1px solid #c6cbd9;
  margin-bottom: 30px;
  border-radius: 8px;
  width: 267px;
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
  height: 52px;
  padding: 5px;

  button {
    background-color: inherit;
    color: #9a9aaf;
    font-size: 14px;
    border: none;
    cursor: pointer;
    transition: all linear 0.3s;
    width: 84px;
    border-radius: 4px;
    :hover {
      background-color: #e6e6e7;
    }
  }

  .selected {
    background-color: #eff2f5;
    border: 1px solid #c6cbd9;
    color: #2e2e3a;
    cursor: inherit;
  }
`;function be(){const e=(0,h.useTheme)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ce,{children:(0,r.jsx)(u.Tz,{gap:"lg",justify:"center",children:(0,r.jsxs)(u.Tz,{gap:"lg",style:{width:"100%"},children:[(0,r.jsx)(pe,{padding:"0",children:(0,r.jsx)(x.Tv.LargeHeader,{children:(0,r.jsx)(d.cC,{id:"lQfOr9"})})}),(0,r.jsx)(ge,{children:(0,r.jsx)(me,{children:(0,r.jsxs)(x.Tv.BodyPrimary,{color:e.neutral3,textAlign:"center",children:[(0,r.jsx)(fe,{strokeWidth:1.2}),(0,r.jsx)("div",{"data-testid":"pools-unsupported-err",children:(0,r.jsx)(d.cC,{id:"nFZR3H"})})]})})})]})})}),(0,r.jsx)(E.c,{})]})}function we(){const{account:e,chainId:t}=(0,l.useWeb3React)(),[i,n]=((0,L.G)(),(0,p.LK)(),(0,f.useState)("all")),[o,a]=((0,h.useTheme)(),(0,H.QP)()),{positions:m,loading:g}=(0,z.W)(e),[x,b]=m?.reduce(((e,t)=>(e[t.liquidity?.isZero()?1:0].push(t),e)),[[],[]])??[[],[]],w=(0,f.useMemo)((()=>[...x,...o?[]:b]),[b,x,o]);(0,R.J)(w);if(!(0,M.EC)(t))return(0,r.jsx)(be,{});Boolean(!e),d.cC,B.Z,d.cC,G.Z,d.cC,q.Z;const y=e=>{n(e)};return(0,r.jsxs)(c.fM,{page:s.yJ.POOL_PAGE,shouldLogImpression:!0,children:[(0,r.jsx)(ce,{children:(0,r.jsx)(u.Tz,{gap:"lg",justify:"center",children:(0,r.jsx)(u.Tz,{gap:"lg",style:{width:"100%"},children:(0,r.jsxs)(he,{children:[(0,r.jsx)("h2",{children:"Pools de liquidez"}),(0,r.jsxs)(xe,{children:[(0,r.jsx)("button",{onClick:()=>y("all"),className:`${"all"===i&&"selected"}`,children:"Ver todos"}),(0,r.jsx)("button",{onClick:()=>y("ltn"),className:`${"ltn"===i&&"selected"}`,children:"LTN"}),(0,r.jsx)("button",{onClick:()=>y("ltf"),className:`${"ltf"===i&&"selected"}`,children:"LTF"})]}),(0,r.jsx)(le,{activePoolType:i})]})})})}),(0,r.jsx)(E.c,{})]})}}}]);
//# sourceMappingURL=5167.aa60cf94.chunk.js.map