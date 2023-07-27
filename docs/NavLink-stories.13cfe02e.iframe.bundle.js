"use strict";(self.webpackChunksagu_ui=self.webpackChunksagu_ui||[]).push([[54],{"./src/packages/NavLink/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/packages/NavLink/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const NavLink=({children,active=!1,disabled=!1,size="medium",padding,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_1__.O,{"aria-disabled":disabled,active,size,padding,disabled,...props,children});NavLink.displayName="NavLink";const __WEBPACK_DEFAULT_EXPORT__=NavLink;try{NavLink.displayName="NavLink",NavLink.__docgenInfo={description:"",displayName:"NavLink",props:{active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'},{value:'"xsmall"'},{value:'"xmini"'},{value:'"mini"'},{value:'"xxsmall"'},{value:'"xlarge"'},{value:'"xxlarge"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/NavLink/index.tsx#NavLink"]={docgenInfo:NavLink.__docgenInfo,name:"NavLink",path:"src/packages/NavLink/index.tsx#NavLink"})}catch(__react_docgen_typescript_loader_error){}},"./src/packages/NavLink/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/packages/NavLink/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"NavLink",component:___WEBPACK_IMPORTED_MODULE_1__.Z,args:{children:"Company Retreats",active:!1,size:"medium"}},Default=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args});Default.displayName="Default"},"./src/packages/NavLink/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>NavLink});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styles_spacingModifier__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styles/spacingModifier.ts");const NavLink=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.a`
  ${({theme,active,size,padding="xsmall",disabled})=>styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
    position: relative;
    cursor: ${disabled?"default":"pointer"};
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.sizes[size]};
    font-weight: ${theme.font.weights.regular};
    color: ${active?theme.colors.secondary.medium:theme.colors.primary.medium};
    transition: ${theme.transitions.default};
    ${_styles_spacingModifier__WEBPACK_IMPORTED_MODULE_0__.r[padding](theme,"padding")}
    text-decoration: none;
    &:hover {
      color: ${theme.colors.secondary.medium};
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 2rem;
      height: 0.1rem;
      background: ${active?theme.colors.secondary.medium:"transparent"};
      left: 50%;
      transform: translateX(-50%);
      transition: ${theme.transitions.default};
    }
  `}
`},"./src/styles/spacingModifier.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>spacingModifier});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const spacingModifier={none:(theme,attribute)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
    ${attribute}: ${theme.spacings.none};
  `,xmini:(theme,attribute)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
    ${attribute}: ${theme.spacings.xmini};
  `,mini:(theme,attribute)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
    ${attribute}: ${theme.spacings.mini};
  `,xxsmall:(theme,attribute)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
    ${attribute}: ${theme.spacings.xxsmall};
  `,xsmall:(theme,attribute)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
    ${attribute}: ${theme.spacings.xsmall};
  `,small:(theme,attribute)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
    ${attribute}: ${theme.spacings.small};
  `,medium:(theme,attribute)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
    ${attribute}: ${theme.spacings.medium};
  `,large:(theme,attribute)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
    ${attribute}: ${theme.spacings.large};
  `,xlarge:(theme,attribute)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
    ${attribute}: ${theme.spacings.xlarge};
  `,xxlarge:(theme,attribute)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
    ${attribute}: ${theme.spacings.xxlarge};
  `}}}]);
//# sourceMappingURL=NavLink-stories.13cfe02e.iframe.bundle.js.map