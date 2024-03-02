"use strict";(self.webpackChunksagu_ui=self.webpackChunksagu_ui||[]).push([[336],{"./src/packages/CheckBox/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>packages_CheckBox});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const CheckBoxLabel=styled_components_browser_esm.Ay.label`
  ${({theme})=>styled_components_browser_esm.AH`
    cursor: pointer;
    span {
      position: relative;
      font-family: ${theme.font.family.primary};
      color: ${theme.colors.primary.dark};
      font-size: ${theme.font.sizes.medium};
      margin-left: ${theme.spacings.xsmall};
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 1.5rem;
        height: 1.5rem;
        border: 0.1rem solid ${theme.colors.primary.medium};
        left: -${theme.spacings.small};
        transform: translateY(-50%);
      }
    }
    input {
      opacity: 0;
    }
    input:focus + span {
      &::after {
        box-shadow: ${theme.shadows.focus};
      }
    }
    input:checked + span {
      &::after {
        background: ${theme.colors.secondary.medium};
      }
    }
    input[type='radio'] + span {
      &::after {
        border-radius: 50%;
      }
    }
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CheckBox=({title,type="checkbox",...props})=>(0,jsx_runtime.jsxs)(CheckBoxLabel,{children:[(0,jsx_runtime.jsx)("input",{type,...props}),(0,jsx_runtime.jsx)("span",{children:title})]});CheckBox.displayName="CheckBox";const packages_CheckBox=CheckBox;try{CheckBox.displayName="CheckBox",CheckBox.__docgenInfo={description:"",displayName:"CheckBox",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},type:{defaultValue:{value:"checkbox"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/CheckBox/index.tsx#CheckBox"]={docgenInfo:CheckBox.__docgenInfo,name:"CheckBox",path:"src/packages/CheckBox/index.tsx#CheckBox"})}catch(__react_docgen_typescript_loader_error){}},"./src/packages/CheckBox/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/packages/CheckBox/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"CheckBox",component:___WEBPACK_IMPORTED_MODULE_1__.A,args:{title:"New York"},argTypes:{type:{control:!1}}},Default=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{...args});Default.displayName="Default"}}]);
//# sourceMappingURL=CheckBox-stories.b1dd4995.iframe.bundle.js.map