"use strict";(self.webpackChunksagu_ui=self.webpackChunksagu_ui||[]).push([[936],{"./src/packages/Breadcrumb/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>stories});__webpack_require__("./node_modules/react/index.js");var NavLink=__webpack_require__("./src/packages/NavLink/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Breadcrumb=styled_components_browser_esm.ZP.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
`,BreadcrumbItem=styled_components_browser_esm.ZP.li`
  ${({theme,size="small"})=>styled_components_browser_esm.iv`
    margin: 0 0.5rem;
    color: ${theme.colors.primary.medium};
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.sizes[size]};
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Breadcrumb_Breadcrumb=({separator="/",items,padding="mini",size="small"})=>items?(0,jsx_runtime.jsx)(Breadcrumb,{children:items.map(((item,index)=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[index>0&&(0,jsx_runtime.jsx)(BreadcrumbItem,{size,children:separator},`breadcrumb-${separator}-${index}`),(0,jsx_runtime.jsx)(BreadcrumbItem,{size,children:(0,jsx_runtime.jsx)(NavLink.Z,{active:index===items.length-1,disabled:index===items.length-1,title:item.name,size,href:index!==items.length-1?item.link:void 0,padding,children:item.name})},`breadcrumb-${item.name}-${index}`)]})))}):null;Breadcrumb_Breadcrumb.displayName="Breadcrumb";const packages_Breadcrumb=Breadcrumb_Breadcrumb;try{Breadcrumb_Breadcrumb.displayName="Breadcrumb",Breadcrumb_Breadcrumb.__docgenInfo={description:"",displayName:"Breadcrumb",props:{separator:{defaultValue:{value:"/"},description:"",name:"separator",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}},padding:{defaultValue:{value:"mini"},description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'},{value:'"xsmall"'},{value:'"xmini"'},{value:'"mini"'},{value:'"xxsmall"'},{value:'"xlarge"'},{value:'"xxlarge"'}]}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Breadcrumb/index.tsx#Breadcrumb"]={docgenInfo:Breadcrumb_Breadcrumb.__docgenInfo,name:"Breadcrumb",path:"src/packages/Breadcrumb/index.tsx#Breadcrumb"})}catch(__react_docgen_typescript_loader_error){}const stories={title:"Breadcrumb",component:packages_Breadcrumb,args:{items:[{name:"Blog",link:"/blog"},{name:"Tech",link:"/blog/tech"},{name:"React",link:"/blog/tech/react"}]}},Default=args=>(0,jsx_runtime.jsx)(packages_Breadcrumb,{...args});Default.displayName="Default"},"./src/packages/NavLink/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/packages/NavLink/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const NavLink=({children,active=!1,disabled=!1,size="medium",padding,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_1__.O,{"aria-disabled":disabled,active,size,padding,disabled,...props,children});NavLink.displayName="NavLink";const __WEBPACK_DEFAULT_EXPORT__=NavLink;try{NavLink.displayName="NavLink",NavLink.__docgenInfo={description:"",displayName:"NavLink",props:{active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'},{value:'"xsmall"'},{value:'"xmini"'},{value:'"mini"'},{value:'"xxsmall"'},{value:'"xlarge"'},{value:'"xxlarge"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/NavLink/index.tsx#NavLink"]={docgenInfo:NavLink.__docgenInfo,name:"NavLink",path:"src/packages/NavLink/index.tsx#NavLink"})}catch(__react_docgen_typescript_loader_error){}},"./src/packages/NavLink/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>NavLink});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styles_spacingModifier__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styles/spacingModifier.ts");const NavLink=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.a`
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
//# sourceMappingURL=Breadcrumb-stories.bcfd8ada.iframe.bundle.js.map