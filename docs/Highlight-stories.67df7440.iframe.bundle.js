"use strict";(self.webpackChunksagu_ui=self.webpackChunksagu_ui||[]).push([[230],{"./src/packages/Highlight/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Highlight=styled_components_browser_esm.ZP.div`
  ${({theme})=>styled_components_browser_esm.iv`
    display: grid;
    grid-template-areas: 'a a' 'b c';
    column-gap: ${theme.spacings.xxsmall};
    width: fit-content;
    place-items: start;
  `}
`,Title=styled_components_browser_esm.ZP.h1`
  ${({theme})=>styled_components_browser_esm.iv`
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.weights.semiBold};
    color: ${theme.colors.primary.medium};
    grid-area: b;
  `}
`,Subtitle=styled_components_browser_esm.ZP.h2`
  ${({theme})=>styled_components_browser_esm.iv`
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.weights.light};
    color: ${theme.colors.primary.medium};
  `}
`,HelperText=styled_components_browser_esm.ZP.span`
  ${({theme})=>styled_components_browser_esm.iv`
    position: relative;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.weights.semiBold};
    color: ${theme.colors.secondary.medium};
    grid-area: a;
    text-transform: uppercase;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: calc(100% + ${theme.spacings.xsmall});
      height: 0.1rem;
      width: 7rem;
      transform: translateY(-50%);
      background: ${theme.colors.secondary.medium};
    }
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Highlight_Highlight=({helperText="your stay in one of",title,subtitle})=>(0,jsx_runtime.jsxs)(Highlight,{children:[(0,jsx_runtime.jsx)(HelperText,{children:helperText}),(0,jsx_runtime.jsx)(Title,{children:title}),(0,jsx_runtime.jsx)(Subtitle,{children:subtitle})]});Highlight_Highlight.displayName="Highlight";const packages_Highlight=Highlight_Highlight;try{Highlight_Highlight.displayName="Highlight",Highlight_Highlight.__docgenInfo={description:"",displayName:"Highlight",props:{helperText:{defaultValue:{value:"your stay in one of"},description:"",name:"helperText",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string | number"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Highlight/index.tsx#Highlight"]={docgenInfo:Highlight_Highlight.__docgenInfo,name:"Highlight",path:"src/packages/Highlight/index.tsx#Highlight"})}catch(__react_docgen_typescript_loader_error){}const stories={title:"Highlight",component:packages_Highlight,args:{title:32,subtitle:"homes"}},Default=args=>(0,jsx_runtime.jsx)(packages_Highlight,{...args});Default.displayName="Default"}}]);
//# sourceMappingURL=Highlight-stories.67df7440.iframe.bundle.js.map