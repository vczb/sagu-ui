"use strict";(self.webpackChunksagu_ui=self.webpackChunksagu_ui||[]).push([[16],{"./src/packages/Input/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>packages_Input});__webpack_require__("./node_modules/react/index.js");var Label=__webpack_require__("./src/packages/Label/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Input=styled_components_browser_esm.ZP.input`
  ${({theme,label})=>styled_components_browser_esm.iv`
    background: ${theme.colors.base.white};
    border-radius: ${theme.border.xxsmall};
    border: 0.2rem solid ${theme.colors.primary.lighter};
    border-radius: ${theme.border.xxsmall};
    color: ${theme.colors.primary.dark};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weights.regular};
    font-family: ${theme.font.family.primary};
    transition: ${theme.transitions.default};
    outline: none;
    height: 100%;
    min-height: ${theme.spacings.xlarge};
    letter-spacing: 0.1rem;
    padding: ${label?"1.5rem 2.2rem 0 1.5rem":"0 2.2rem 0 1.5rem"};
    &::placeholder {
      color: ${theme.colors.primary.medium};
    }
    &:hover {
      border: 0.2rem solid ${theme.colors.secondary.lighter};
    }
    &:focus {
      border: 0.2rem solid ${theme.colors.secondary.light};
    }
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input_Input=({label,type="text",generic,...props})=>(0,jsx_runtime.jsx)(Label.Z,{title:label,children:(0,jsx_runtime.jsx)(Input,{...props,...generic?.props,as:generic?.as,type,label})});Input_Input.displayName="Input";const packages_Input=Input_Input;try{Input_Input.displayName="Input",Input_Input.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"HTMLInputTypeAttribute"}},generic:{defaultValue:null,description:"",name:"generic",required:!1,type:{name:"Generic"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Input/index.tsx#Input"]={docgenInfo:Input_Input.__docgenInfo,name:"Input",path:"src/packages/Input/index.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/packages/Input/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Date:()=>Date,Default:()=>Default,Number:()=>Number,Password:()=>Password,Polymorphism:()=>Polymorphism,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/packages/Input/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const selectMock={generic:{as:"select",props:{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option",{children:"Option 1"},"1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option",{children:"Option 2"},"2")]}}},__WEBPACK_DEFAULT_EXPORT__={title:"Input",component:___WEBPACK_IMPORTED_MODULE_1__.Z,args:{name:"test"},argTypes:{type:{control:{type:"text"}}}},Default=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args});Default.displayName="Default";const Date=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args,type:"date"});Date.displayName="Date";const Number=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args,type:"number"});Number.displayName="Number";const Password=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args,type:"password"});Password.displayName="Password";const Polymorphism=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args,...selectMock});Polymorphism.displayName="Polymorphism"},"./src/packages/Label/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>packages_Label});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Label=styled_components_browser_esm.ZP.label`
  position: relative;
  height: fit-content;
  display: flex;
  flex-direction: column;
`,Title=styled_components_browser_esm.ZP.span`
  ${({theme})=>styled_components_browser_esm.iv`
    position: absolute;
    color: ${theme.colors.secondary.medium};
    font-size: ${theme.font.sizes.xsmall};
    top: ${theme.spacings.xxsmall};
    left: ${theme.spacings.xsmall};
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Label_Label=({title,children,...props})=>(0,jsx_runtime.jsxs)(Label,{...props,children:[title&&(0,jsx_runtime.jsx)(Title,{children:title}),children]});Label_Label.displayName="Label";const packages_Label=Label_Label;try{Label_Label.displayName="Label",Label_Label.__docgenInfo={description:"",displayName:"Label",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Label/index.tsx#Label"]={docgenInfo:Label_Label.__docgenInfo,name:"Label",path:"src/packages/Label/index.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=Input-stories.89217db2.iframe.bundle.js.map