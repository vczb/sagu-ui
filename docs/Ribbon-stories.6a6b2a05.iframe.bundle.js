"use strict";(self.webpackChunksagu_ui=self.webpackChunksagu_ui||[]).push([[488],{"./src/packages/Ribbon/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const wrapperModifiers={color:(theme,color)=>styled_components_browser_esm.iv`
    background-color: ${theme.colors[color].dark};
    &::before {
      border-left-color: ${theme.colors[color].dark};
      border-top-color: ${theme.colors[color].dark};
    }
  `,normal:theme=>styled_components_browser_esm.iv`
    font-size: ${theme.font.sizes.small};
    padding: 0 ${theme.spacings.small};
    height: 3.6rem;
    right: -2rem;
    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,small:theme=>styled_components_browser_esm.iv`
    font-size: ${theme.font.sizes.xsmall};
    padding: 0 ${theme.spacings.xsmall};
    height: 2.6rem;
    right: -1.5rem;
    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `},Wrapper=styled_components_browser_esm.ZP.div`
  ${({theme,color,size})=>styled_components_browser_esm.iv`
    position: absolute;
    top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    font-weight: ${theme.font.weights.bold};
    color: ${theme.colors.base.white};
    z-index: ${theme.layers.base};

    &::before {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
    }
    ${!!color&&wrapperModifiers.color(theme,color)};
    ${!!size&&wrapperModifiers[size](theme)};
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Ribbon=({children,color="primary",size="normal"})=>(0,jsx_runtime.jsx)(Wrapper,{size,color,children});Ribbon.displayName="Ribbon";const packages_Ribbon=Ribbon;try{Ribbon.displayName="Ribbon",Ribbon.__docgenInfo={description:"",displayName:"Ribbon",props:{color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},size:{defaultValue:{value:"normal"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Ribbon/index.tsx#Ribbon"]={docgenInfo:Ribbon.__docgenInfo,name:"Ribbon",path:"src/packages/Ribbon/index.tsx#Ribbon"})}catch(__react_docgen_typescript_loader_error){}const stories={title:"Ribbon",component:packages_Ribbon,args:{children:"Best Seller"},argTypes:{children:{type:"string"}}},Default=args=>(0,jsx_runtime.jsx)("div",{style:{width:"40rem",height:"25rem",position:"relative",backgroundColor:"#888"},children:(0,jsx_runtime.jsx)(packages_Ribbon,{...args})});Default.displayName="Default"}}]);
//# sourceMappingURL=Ribbon-stories.6a6b2a05.iframe.bundle.js.map