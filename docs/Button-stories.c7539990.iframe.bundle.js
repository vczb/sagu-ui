"use strict";(self.webpackChunksagu_ui=self.webpackChunksagu_ui||[]).push([[303],{"./src/packages/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>packages_Button});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),spacingModifier=__webpack_require__("./src/styles/spacingModifier.ts");const buttonVariants={primary:theme=>styled_components_browser_esm.AH`
    border-color: ${theme.colors.primary.medium};
    color: ${theme.colors.primary.medium};
    &:hover {
      border-color: ${theme.colors.secondary.medium};
      color: ${theme.colors.secondary.medium};
    }
    &:active {
      border-color: ${theme.colors.secondary.dark};
      color: ${theme.colors.secondary.dark};
    }
  `,secondary:theme=>styled_components_browser_esm.AH`
    border-color: ${theme.colors.secondary.medium};
    color: ${theme.colors.secondary.medium};
    &:hover {
      border-color: ${theme.colors.primary.light};
      color: ${theme.colors.primary.light};
    }
    &:active {
      border-color: ${theme.colors.primary.medium};
      color: ${theme.colors.primary.medium};
    }
  `,filled:theme=>styled_components_browser_esm.AH`
    color: ${theme.colors.base.white};
    background: ${theme.colors.primary.medium};

    &:hover {
      background: ${theme.colors.primary.dark};
    }
    &:active {
      background: ${theme.colors.primary.medium};
    }
  `},Button=styled_components_browser_esm.Ay.button`
  ${({theme,variant,outline,size="small",padding="xxsmall"})=>styled_components_browser_esm.AH`
    cursor: pointer;
    border: ${outline?"0.2rem solid":"none"} ;
    background-color: transparent;
    font-weight: ${theme.font.weights.bold};
    border-radius: ${theme.border.radius};
    transition: ${theme.transitions.default};
    font-size: ${theme.font.sizes[size]};
    ${spacingModifier.B[padding](theme,"padding")}
    ${!!variant&&buttonVariants[variant](theme)}}
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button_Button=({children,variant="primary",size,padding,outline=!0,...props})=>(0,jsx_runtime.jsx)(Button,{size,variant,outline,padding,...props,children});Button_Button.displayName="Button";const packages_Button=Button_Button;try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"filled"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xsmall"'}]}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'},{value:'"xsmall"'},{value:'"xmini"'},{value:'"mini"'},{value:'"xxsmall"'},{value:'"xlarge"'},{value:'"xxlarge"'}]}},outline:{defaultValue:{value:"true"},description:"",name:"outline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Button/index.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/packages/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/packages/Button/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/packages/Button/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Button",component:___WEBPACK_IMPORTED_MODULE_1__.A,args:{children:"Sign Up",variant:"filled"}},Default=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{...args});Default.displayName="Default"},"./src/styles/spacingModifier.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>spacingModifier});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const spacingModifier={none:(theme,attribute)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
    ${attribute}: ${theme.spacings.none};
  `,xmini:(theme,attribute)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
    ${attribute}: ${theme.spacings.xmini};
  `,mini:(theme,attribute)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
    ${attribute}: ${theme.spacings.mini};
  `,xxsmall:(theme,attribute)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
    ${attribute}: ${theme.spacings.xxsmall};
  `,xsmall:(theme,attribute)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
    ${attribute}: ${theme.spacings.xsmall};
  `,small:(theme,attribute)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
    ${attribute}: ${theme.spacings.small};
  `,medium:(theme,attribute)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
    ${attribute}: ${theme.spacings.medium};
  `,large:(theme,attribute)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
    ${attribute}: ${theme.spacings.large};
  `,xlarge:(theme,attribute)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
    ${attribute}: ${theme.spacings.xlarge};
  `,xxlarge:(theme,attribute)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
    ${attribute}: ${theme.spacings.xxlarge};
  `}}}]);
//# sourceMappingURL=Button-stories.c7539990.iframe.bundle.js.map