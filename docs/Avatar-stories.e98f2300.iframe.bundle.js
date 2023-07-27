"use strict";(self.webpackChunksagu_ui=self.webpackChunksagu_ui||[]).push([[387],{"./src/animations/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>animations_placeholder});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles=__webpack_require__("./src/styles/index.ts");const animations_placeholder=styled_components_browser_esm.iv`
  color: ${styles.rS.colors.neutral.lighter};
  background-image: linear-gradient(
    to right,
    currentColor 0%,
    ${styles.rS.colors.neutral.medium} 20%,
    currentColor 40%,
    currentColor 100%
  );
  background-size: 80rem 14rem;
  animation: placeholder 1s linear infinite forwards;

  @keyframes placeholder {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`},"./src/packages/Avatar/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),animations=__webpack_require__("./src/animations/index.ts");const variantShape={circle:()=>styled_components_browser_esm.iv`
    border-radius: 50%;
  `,square:()=>styled_components_browser_esm.iv`
    border-radius: 0;
  `,rounded:theme=>styled_components_browser_esm.iv`
    border-radius: ${theme.border.radius};
  `},Wrapper=styled_components_browser_esm.ZP.div`
  ${({theme,size="medium",variant="circle"})=>styled_components_browser_esm.iv`
    border-radius: 50%;
    align-items: center;
    font-size: ${theme.font.sizes.large};
    width: ${theme.avatarSizes[size]};
    height: ${theme.avatarSizes[size]};
    justify-content: center;
    overflow: hidden;
    position: relative;
    display: inline-flex;
    color: ${theme.colors.base.white};
    ${animations.W}
    ${!!variant&&variantShape[variant](theme)}}
  `}
`,Img=styled_components_browser_esm.ZP.img`
  ${()=>styled_components_browser_esm.iv`
    width: 100%;
    height: 100%;
    text-align: center;
    object-fit: cover;
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Avatar=({children,src,alt,size,variant,...props})=>(0,jsx_runtime.jsx)(Wrapper,{size,variant,...props,children:src?(0,jsx_runtime.jsx)(Img,{src,alt}):children});Avatar.displayName="Avatar";const packages_Avatar=Avatar;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xsmall"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"square"'},{value:'"rounded"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Avatar/index.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/packages/Avatar/index.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}const stories={title:"Avatar",component:packages_Avatar,args:{children:"OP",src:"https://picsum.photos/id/237/300/300",alt:"Random image",size:"medium",variant:"circle"}},Default=args=>(0,jsx_runtime.jsx)(packages_Avatar,{...args});Default.displayName="Default"},"./src/styles/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BC:()=>styles_media,rS:()=>theme.Z});__webpack_require__("./src/styles/global.ts");var theme=__webpack_require__("./src/styles/theme/index.ts"),styled_components_browser_esm=(__webpack_require__("./src/styles/theme/ocean.ts"),__webpack_require__("./src/styles/theme/wine.ts"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const breakpoints={xs:"480px",sm:"768px",md:"992px",lg:"1200px"},styles_media=Object.keys(breakpoints).reduce(((acc,view)=>(acc[view]=args=>styled_components_browser_esm.iv`
    @media (min-width: ${breakpoints[view]}) {
      ${args};
    }
  `,acc)),{})}}]);
//# sourceMappingURL=Avatar-stories.e98f2300.iframe.bundle.js.map