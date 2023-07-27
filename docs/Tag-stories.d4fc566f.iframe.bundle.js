"use strict";(self.webpackChunksagu_ui=self.webpackChunksagu_ui||[]).push([[7],{"./src/packages/Tag/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>packages_Tag});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const wrapperModifier_isUppercase=()=>styled_components_browser_esm.iv`
    text-transform: uppercase;
  `,wrapperModifier_isBold=theme=>styled_components_browser_esm.iv`
    font-weight: ${theme.font.weights.bold};
  `,wrapperModifier_isPointer=()=>styled_components_browser_esm.iv`
    cursor: pointer;
  `,wrapperModifier_isSlashed=()=>styled_components_browser_esm.iv`
    text-decoration: line-through;
  `,Wrapper=styled_components_browser_esm.ZP.div`
  ${({theme,isUppercase,isSlashed,isBold,isPointer,size="small"})=>styled_components_browser_esm.iv`
    padding: ${theme.spacings.mini} ${theme.spacings.xxsmall};
    background: ${theme.colors.primary.light};
    color: ${theme.colors.base.white};
    width: fit-content;
    height: fit-content;
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes[size]};
    font-weight: ${theme.font.weights.regular};
    ${!!isUppercase&&wrapperModifier_isUppercase()};
    ${!!isPointer&&wrapperModifier_isPointer()};
    ${!!isSlashed&&wrapperModifier_isSlashed()};
    ${!!isBold&&wrapperModifier_isBold(theme)};
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tag=({value,isBold,isUppercase,isPointer,size,...props})=>(0,jsx_runtime.jsx)(Wrapper,{isUppercase,isBold,isPointer,size,...props,children:value});Tag.displayName="Tag";const packages_Tag=Tag;try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},isUppercase:{defaultValue:null,description:"",name:"isUppercase",required:!1,type:{name:"boolean"}},isBold:{defaultValue:null,description:"",name:"isBold",required:!1,type:{name:"boolean"}},isPointer:{defaultValue:null,description:"",name:"isPointer",required:!1,type:{name:"boolean"}},isSlashed:{defaultValue:null,description:"",name:"isSlashed",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Tag/index.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"src/packages/Tag/index.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}},"./src/packages/Tag/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/packages/Tag/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Tag",component:___WEBPACK_IMPORTED_MODULE_1__.Z,args:{value:"coffee"}},Default=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args});Default.displayName="Default"}}]);
//# sourceMappingURL=Tag-stories.d4fc566f.iframe.bundle.js.map