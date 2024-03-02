"use strict";(self.webpackChunksagu_ui=self.webpackChunksagu_ui||[]).push([[961],{"./src/packages/ProgressBar/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>packages_ProgressBar});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const indeterminateAnimation=styled_components_browser_esm.i7`
  0% {
    transform:  translateX(0) scaleX(0);
  }
  40% {
    transform:  translateX(0) scaleX(0.4);
  }
  100% {
    transform:  translateX(100%) scaleX(0.5);
  }
`,ProgressBarWrapper=styled_components_browser_esm.Ay.div`
  ${({showValue,label})=>styled_components_browser_esm.AH`
    position: relative;
    height: ${label||showValue?"3rem":"0.4rem"};
    overflow: hidden;
  `}
`,ProgressBarBackground=styled_components_browser_esm.Ay.div`
  ${({theme,color,showValue,label,indeterminate})=>styled_components_browser_esm.AH`
    position: absolute;
    height: 0.4rem;
    opacity: 0.3;
    background-color: ${color||theme.colors.secondary.medium};
    top: ${label||showValue&&!indeterminate?"2.4rem":0};
    left: 0;
    width: 100%;
    border-radius: 0.2rem;
  `}
`,ProgressBar=styled_components_browser_esm.Ay.div`
  ${({theme,color,showValue,label,value,indeterminate})=>styled_components_browser_esm.AH`
    position: absolute;
    top: ${label||showValue&&!indeterminate?"2.4rem":0};
    left: 0;
    height: 0.4rem;
    width: ${indeterminate?"100%":value?`${value}%`:"0%"};
    animation: ${indeterminate&&styled_components_browser_esm.AH`
      ${indeterminateAnimation} 1s infinite linear
    `};
    transform-origin: ${indeterminate&&"0% 50%"};
    border-radius: 0.2rem;
    transition: ${!indeterminate&&"width 250ms ease-in-out"};
    background-color: ${color||theme.colors.secondary.medium};
  `}
`,ProgressBarValue=styled_components_browser_esm.Ay.span`
  ${({theme,color,indeterminate})=>styled_components_browser_esm.AH`
    display: ${indeterminate?"none":"initial"};
    position: absolute;
    top: 0.4rem;
    color: ${color||theme.colors.secondary.medium};
    right: 0;
    font-size: ${theme.font.sizes.xsmall};
    font-family: ${theme.font.family.primary};
  `}
`,ProgressBarLabel=styled_components_browser_esm.Ay.span`
  ${({theme})=>styled_components_browser_esm.AH`
    position: absolute;
    top: 0;
    color: ${theme.colors.base.black};
    left: 0;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.weights.semiBold};
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ProgressBar_ProgressBar=({value=0,color,showValue=!1,indeterminate=!1,label})=>(0,jsx_runtime.jsxs)(ProgressBarWrapper,{role:"progressbar","data-testid":"progress-bar",indeterminate,showValue,color,value,label,children:[(0,jsx_runtime.jsx)(ProgressBarBackground,{label,showValue,indeterminate,color}),(0,jsx_runtime.jsx)(ProgressBar,{label,showValue,indeterminate,value,color}),showValue&&(0,jsx_runtime.jsxs)(ProgressBarValue,{"data-testid":"progress-bar-value",indeterminate,color,children:[value,"%"]}),label&&(0,jsx_runtime.jsx)(ProgressBarLabel,{"data-testid":"progress-bar-label",children:label})]});ProgressBar_ProgressBar.displayName="ProgressBar";const packages_ProgressBar=ProgressBar_ProgressBar;try{ProgressBar_ProgressBar.displayName="ProgressBar",ProgressBar_ProgressBar.__docgenInfo={description:"",displayName:"ProgressBar",props:{value:{defaultValue:{value:"0"},description:"Value from 0 to 100",name:"value",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},showValue:{defaultValue:{value:"false"},description:"",name:"showValue",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},indeterminate:{defaultValue:{value:"false"},description:"If you use the indeterminate property, value and showValue will be ignored",name:"indeterminate",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/ProgressBar/index.tsx#ProgressBar"]={docgenInfo:ProgressBar_ProgressBar.__docgenInfo,name:"ProgressBar",path:"src/packages/ProgressBar/index.tsx#ProgressBar"})}catch(__react_docgen_typescript_loader_error){}},"./src/packages/ProgressBar/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Customized:()=>Customized,Default:()=>Default,Indeterminate:()=>Indeterminate,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/packages/ProgressBar/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"ProgressBar",component:___WEBPACK_IMPORTED_MODULE_1__.A,args:{value:25}},Default=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{...args});Default.displayName="Default";const Customized=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{...args,color:"#0064d6",showValue:!0,label:"My progress bar"});Customized.displayName="Customized";const Indeterminate=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{indeterminate:!0,...args,label:"Loading..."});Indeterminate.displayName="Indeterminate"}}]);
//# sourceMappingURL=ProgressBar-stories.c40f8b02.iframe.bundle.js.map