"use strict";(self.webpackChunksagu_ui=self.webpackChunksagu_ui||[]).push([[631],{"./src/packages/Box/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>packages_Box});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),spacingModifier=__webpack_require__("./src/styles/spacingModifier.ts");const flexModifier={row:()=>styled_components_browser_esm.AH`
    display: flex;
    flex-direction: row;
  `,column:()=>styled_components_browser_esm.AH`
    display: flex;
    flex-direction: column;
  `,block:()=>styled_components_browser_esm.AH`
    display: block;
  `,none:()=>styled_components_browser_esm.AH`
    display: none;
  `},wrapperModifier={default:theme=>styled_components_browser_esm.AH`
    background: ${theme.colors.base.white};
  `,filled:theme=>styled_components_browser_esm.AH`
    background: ${theme.colors.primary.medium};
  `,transparent:()=>styled_components_browser_esm.AH`
    background: transparent;
  `},Wrapper=styled_components_browser_esm.Ay.div`
  ${({theme,padding="small",border,shadow,flex="block",gap="small",justify,alignment,fullWidth,variant="default"})=>styled_components_browser_esm.AH`
    ${!!shadow&&` box-shadow: ${theme.shadows.default};`};
    ${!!border&&`border: 0.2rem solid ${theme.colors.secondary.light};`};
    width: ${fullWidth?"100%":"fit-content"};
    height: fit-content;
    align-items: ${alignment};
    justify-content: ${justify};
    z-index: ${theme.layers.menu};
    ${wrapperModifier[variant](theme)}
    ${flexModifier[flex]()}
    ${spacingModifier.B[padding](theme,"padding")}
    ${spacingModifier.B[gap](theme,"gap")}
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Box=({children,padding,border=!1,shadow=!1,flex,gap,justify,alignment,fullWidth,variant,...props})=>(0,jsx_runtime.jsx)(Wrapper,{padding,border,shadow,flex,gap,justify,alignment,fullWidth,variant,...props,children});Box.displayName="Box";const packages_Box=Box;try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'},{value:'"xsmall"'},{value:'"xmini"'},{value:'"mini"'},{value:'"xxsmall"'},{value:'"xlarge"'},{value:'"xxlarge"'}]}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'},{value:'"xsmall"'},{value:'"xmini"'},{value:'"mini"'},{value:'"xxsmall"'},{value:'"xlarge"'},{value:'"xxlarge"'}]}},border:{defaultValue:{value:"false"},description:"",name:"border",required:!1,type:{name:"boolean"}},shadow:{defaultValue:{value:"false"},description:"",name:"shadow",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"default"'},{value:'"transparent"'}]}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"row"'},{value:'"column"'},{value:'"block"'}]}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"space-evenly"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},alignment:{defaultValue:null,description:"",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"center"'},{value:'"end"'},{value:'"start"'},{value:'"baseline"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Box/index.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/packages/Box/index.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/packages/Paper/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>packages_Paper});__webpack_require__("./node_modules/react/index.js");var Box=__webpack_require__("./src/packages/Box/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const paperModifiers={bottom:theme=>styled_components_browser_esm.AH`
    left: 0;
    top: calc(100% + ${theme.spacings.xxsmall});
  `,left:theme=>styled_components_browser_esm.AH`
    top: 0;
    right: calc(100% + ${theme.spacings.xxsmall});
  `,right:theme=>styled_components_browser_esm.AH`
    top: 0;
    left: calc(100% + ${theme.spacings.xxsmall});
  `},Paper=styled_components_browser_esm.Ay.div`
  ${({theme,active,placement})=>styled_components_browser_esm.AH`
    position: absolute;
    display: ${active?"block":"none"};
    width: fit-content;
    height: fit-content;
    z-index: ${theme.layers.menu};
    ${paperModifiers[placement](theme)}
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Paper_Paper=({children,active,placement="bottom",padding="none",...props})=>(0,jsx_runtime.jsx)(Paper,{"aria-hidden":!active,active,placement,"data-testid":"paper",children:(0,jsx_runtime.jsx)(Box.A,{...props,shadow:!0,border:!0,padding,children})});Paper_Paper.displayName="Paper";const packages_Paper=Paper_Paper;try{Paper_Paper.displayName="Paper",Paper_Paper.__docgenInfo={description:"",displayName:"Paper",props:{placement:{defaultValue:{value:"bottom"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},padding:{defaultValue:{value:"none"},description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'},{value:'"xsmall"'},{value:'"xmini"'},{value:'"mini"'},{value:'"xxsmall"'},{value:'"xlarge"'},{value:'"xxlarge"'}]}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'},{value:'"xsmall"'},{value:'"xmini"'},{value:'"mini"'},{value:'"xxsmall"'},{value:'"xlarge"'},{value:'"xxlarge"'}]}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},shadow:{defaultValue:null,description:"",name:"shadow",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"default"'},{value:'"transparent"'}]}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"row"'},{value:'"column"'},{value:'"block"'}]}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"space-evenly"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},alignment:{defaultValue:null,description:"",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"center"'},{value:'"end"'},{value:'"start"'},{value:'"baseline"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Paper/index.tsx#Paper"]={docgenInfo:Paper_Paper.__docgenInfo,name:"Paper",path:"src/packages/Paper/index.tsx#Paper"})}catch(__react_docgen_typescript_loader_error){}},"./src/packages/Paper/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styles/index.ts"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/packages/Paper/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Paper",component:___WEBPACK_IMPORTED_MODULE_2__.A,args:{active:!0,placement:"bottom"}},Default=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{position:"relative",width:"10rem",height:"10rem",background:_styles__WEBPACK_IMPORTED_MODULE_1__.w4.colors.primary.lighter},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{width:"10rem",height:"10rem"}})})});Default.displayName="Default"},"./src/styles/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$_:()=>styles_media,w4:()=>theme.A});__webpack_require__("./src/styles/global.ts");var theme=__webpack_require__("./src/styles/theme/index.ts"),styled_components_browser_esm=(__webpack_require__("./src/styles/theme/ocean.ts"),__webpack_require__("./src/styles/theme/wine.ts"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const breakpoints={xs:"480px",sm:"768px",md:"992px",lg:"1200px"},styles_media=Object.keys(breakpoints).reduce(((acc,view)=>(acc[view]=args=>styled_components_browser_esm.AH`
    @media (min-width: ${breakpoints[view]}) {
      ${args};
    }
  `,acc)),{})},"./src/styles/spacingModifier.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>spacingModifier});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const spacingModifier={none:(theme,attribute)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
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
//# sourceMappingURL=Paper-stories.c25f9636.iframe.bundle.js.map