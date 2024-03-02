"use strict";(self.webpackChunksagu_ui=self.webpackChunksagu_ui||[]).push([[627],{"./src/packages/Heading/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>packages_Heading});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles=__webpack_require__("./src/styles/index.ts");const WrapperModifiers={small:theme=>styled_components_browser_esm.AH`
    font-size: ${theme.font.sizes.medium};
    &::after {
      width: 3rem;
    }
  `,medium:theme=>styled_components_browser_esm.AH`
    font-size: ${theme.font.sizes.xlarge};

    ${styles.$_.sm`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `,huge:theme=>styled_components_browser_esm.AH`
    font-size: ${theme.font.sizes.huge};
  `,lineLeft:(theme,lineColor)=>styled_components_browser_esm.AH`
    padding-left: ${theme.spacings.xsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor].medium};
  `,lineBottom:(theme,lineColor)=>styled_components_browser_esm.AH`
    position: relative;
    margin-bottom: ${theme.spacings.medium};
    &::after {
      position: absolute;
      left: 0;
      bottom: -1rem;
      content: '';
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor].medium};
    }
  `},Wrapper=styled_components_browser_esm.Ay.h2`
  ${({theme,color,lineLeft,lineBottom,lineColor,size})=>styled_components_browser_esm.AH`
    color: ${theme.colors.base[color]};

    ${lineLeft&&WrapperModifiers.lineLeft(theme,lineColor)}
    ${lineBottom&&WrapperModifiers.lineBottom(theme,lineColor)}
    ${!!size&&WrapperModifiers[size](theme)}
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Heading=({children,color="black",lineLeft=!1,lineBottom=!1,size="medium",lineColor="primary"})=>(0,jsx_runtime.jsx)(Wrapper,{lineBottom,lineLeft,color,size,lineColor,children});Heading.displayName="Heading";const packages_Heading=Heading;try{Heading.displayName="Heading",Heading.__docgenInfo={description:"",displayName:"Heading",props:{color:{defaultValue:{value:"black"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"black"'}]}},lineLeft:{defaultValue:{value:"false"},description:"",name:"lineLeft",required:!1,type:{name:"boolean"}},lineBottom:{defaultValue:{value:"false"},description:"",name:"lineBottom",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"huge"'}]}},lineColor:{defaultValue:{value:"primary"},description:"",name:"lineColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Heading/index.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"src/packages/Heading/index.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}},"./src/packages/Heading/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/packages/Heading/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Heading",component:___WEBPACK_IMPORTED_MODULE_1__.A,argTypes:{children:{type:"string"}}},Default=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{...args});Default.displayName="Default",Default.args={children:"Most Populars"}},"./src/styles/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$_:()=>styles_media,w4:()=>theme.A});__webpack_require__("./src/styles/global.ts");var theme=__webpack_require__("./src/styles/theme/index.ts"),styled_components_browser_esm=(__webpack_require__("./src/styles/theme/ocean.ts"),__webpack_require__("./src/styles/theme/wine.ts"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const breakpoints={xs:"480px",sm:"768px",md:"992px",lg:"1200px"},styles_media=Object.keys(breakpoints).reduce(((acc,view)=>(acc[view]=args=>styled_components_browser_esm.AH`
    @media (min-width: ${breakpoints[view]}) {
      ${args};
    }
  `,acc)),{})}}]);
//# sourceMappingURL=Heading-stories.fe6120e8.iframe.bundle.js.map