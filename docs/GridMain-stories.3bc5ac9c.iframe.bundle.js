"use strict";(self.webpackChunksagu_ui=self.webpackChunksagu_ui||[]).push([[332],{"./src/packages/GridMain/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Wrapper=styled_components_browser_esm.Ay.main`
  ${({theme,size="medium",minHeight})=>styled_components_browser_esm.AH`
    display: grid;
    grid-template-columns:
      1fr min(
        ${theme.container[size]},
        calc(100% - calc(${theme.container.gutter} * 2))
      )
      1fr;
    grid-column-gap: ${theme.container.gutter};
    min-height: ${minHeight};

    & > * {
      grid-column: 2;
    }
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const GridMain=({children,size,minHeight="unset",...props})=>(0,jsx_runtime.jsx)(Wrapper,{...props,size,minHeight,children});GridMain.displayName="GridMain";const packages_GridMain=GridMain;try{GridMain.displayName="GridMain",GridMain.__docgenInfo={description:"",displayName:"GridMain",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'}]}},minHeight:{defaultValue:{value:"unset"},description:"",name:"minHeight",required:!1,type:{name:"enum",value:[{value:'"70vh"'},{value:'"100vh"'},{value:'"100%"'},{value:'"unset"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/GridMain/index.tsx#GridMain"]={docgenInfo:GridMain.__docgenInfo,name:"GridMain",path:"src/packages/GridMain/index.tsx#GridMain"})}catch(__react_docgen_typescript_loader_error){}const stories={title:"GridMain",component:packages_GridMain},Default=args=>(0,jsx_runtime.jsx)(packages_GridMain,{...args,size:"mini",children:(0,jsx_runtime.jsx)("h1",{children:"CHILDREN"})});Default.displayName="Default"}}]);
//# sourceMappingURL=GridMain-stories.3bc5ac9c.iframe.bundle.js.map