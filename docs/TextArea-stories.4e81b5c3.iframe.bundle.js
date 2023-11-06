"use strict";(self.webpackChunksagu_ui=self.webpackChunksagu_ui||[]).push([[337],{"./src/packages/GenericInput/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>packages_GenericInput});__webpack_require__("./node_modules/react/index.js");var Label=__webpack_require__("./src/packages/Label/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const GenericInput=styled_components_browser_esm.ZP.input`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const GenericInput_GenericInput=({label,type,generic={as:"input",props:{}},...props})=>(0,jsx_runtime.jsx)(Label.Z,{title:label,children:(0,jsx_runtime.jsx)(GenericInput,{...props,...generic.props,as:generic.as,type,label})});GenericInput_GenericInput.displayName="GenericInput";const packages_GenericInput=GenericInput_GenericInput;try{GenericInput_GenericInput.displayName="GenericInput",GenericInput_GenericInput.__docgenInfo={description:"",displayName:"GenericInput",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"HTMLInputTypeAttribute"}},generic:{defaultValue:{value:"{ as: 'input', props: {} }"},description:"",name:"generic",required:!1,type:{name:"Generic"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/GenericInput/index.tsx#GenericInput"]={docgenInfo:GenericInput_GenericInput.__docgenInfo,name:"GenericInput",path:"src/packages/GenericInput/index.tsx#GenericInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/packages/Label/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>packages_Label});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Label=styled_components_browser_esm.ZP.label`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Label_Label=({title,children,...props})=>(0,jsx_runtime.jsxs)(Label,{...props,children:[title&&(0,jsx_runtime.jsx)(Title,{children:title}),children]});Label_Label.displayName="Label";const packages_Label=Label_Label;try{Label_Label.displayName="Label",Label_Label.__docgenInfo={description:"",displayName:"Label",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Label/index.tsx#Label"]={docgenInfo:Label_Label.__docgenInfo,name:"Label",path:"src/packages/Label/index.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/packages/TextArea/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),GenericInput=__webpack_require__("./src/packages/GenericInput/index.tsx");const TextArea=(0,styled_components_browser_esm.ZP)(GenericInput.Z)`
  ${({theme,label})=>styled_components_browser_esm.iv`
    padding-top: ${label?theme.spacings.small:theme.spacings.xsmall};
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextArea_TextArea=({label,rows=6,columns,...props})=>(0,jsx_runtime.jsx)(TextArea,{...props,label,type:void 0,generic:{as:"textarea",props:{rows,columns}}});TextArea_TextArea.displayName="TextArea";const packages_TextArea=TextArea_TextArea;try{TextArea_TextArea.displayName="TextArea",TextArea_TextArea.__docgenInfo={description:"",displayName:"TextArea",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},rows:{defaultValue:{value:"6"},description:"",name:"rows",required:!1,type:{name:"number"}},columns:{defaultValue:null,description:"",name:"columns",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/TextArea/index.tsx#TextArea"]={docgenInfo:TextArea_TextArea.__docgenInfo,name:"TextArea",path:"src/packages/TextArea/index.tsx#TextArea"})}catch(__react_docgen_typescript_loader_error){}const stories={title:"TextArea",component:packages_TextArea,args:{label:"Description",placeholder:"..."}},Default=args=>(0,jsx_runtime.jsx)(packages_TextArea,{...args});Default.displayName="Default"}}]);
//# sourceMappingURL=TextArea-stories.4e81b5c3.iframe.bundle.js.map