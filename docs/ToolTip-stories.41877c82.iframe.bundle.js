"use strict";(self.webpackChunksagu_ui=self.webpackChunksagu_ui||[]).push([[792],{"./src/packages/ToolTip/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Bottom:()=>Bottom,Default:()=>Default,Left:()=>Left,Right:()=>Right,Top:()=>Top,default:()=>stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Wrapper=styled_components_browser_esm.Ay.div`
  position: relative;
  display: inline-block;
`,Content=styled_components_browser_esm.Ay.span`
  ${({theme,position})=>styled_components_browser_esm.AH`
    visibility: hidden;
    max-width: calc(${theme.container.small} / 2);
    background-color: ${theme.colors.base.black};
    color: ${theme.colors.base.white};
    text-align: center;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    position: absolute;
    z-index: ${theme.layers.menu};

    // Dynamic positioning based on the provided position prop
    ${"top"===position&&styled_components_browser_esm.AH`
      bottom: calc(100% + ${theme.spacings.xsmall});
      left: 50%;
      transform: translateX(-50%);
    `}
    ${"bottom"===position&&styled_components_browser_esm.AH`
      top: calc(100% + ${theme.spacings.xsmall});
      left: 50%;
      transform: translateX(-50%);
    `}
    ${"left"===position&&styled_components_browser_esm.AH`
      top: 50%;
      right: calc(100% + ${theme.spacings.small});
      transform: translateY(-50%);
    `}
    ${"right"===position&&styled_components_browser_esm.AH`
      top: 50%;
      left: calc(100% + ${theme.spacings.small});
      transform: translateY(-50%);
    `}

    ${Wrapper}:hover & {
      visibility: visible;
    }
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tooltip=({children,content,position="top"})=>(0,jsx_runtime.jsxs)(Wrapper,{children:[children,(0,jsx_runtime.jsx)(Content,{position,children:content})]});Tooltip.displayName="Tooltip";const packages_ToolTip=Tooltip;try{ToolTip.displayName="ToolTip",ToolTip.__docgenInfo={description:"",displayName:"ToolTip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},position:{defaultValue:{value:"top"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/ToolTip/index.tsx#ToolTip"]={docgenInfo:ToolTip.__docgenInfo,name:"ToolTip",path:"src/packages/ToolTip/index.tsx#ToolTip"})}catch(__react_docgen_typescript_loader_error){}const stories={title:"Tooltip",component:packages_ToolTip,args:{children:"Hover me",content:"Tooltip text here"},argTypes:{position:{control:{type:"select",options:["top","bottom","left","right"]}}}},Default=args=>(0,jsx_runtime.jsx)(packages_ToolTip,{...args});Default.displayName="Default";const Top=args=>(0,jsx_runtime.jsx)(packages_ToolTip,{...args,position:"top",children:"Top"});Top.displayName="Top";const Bottom=args=>(0,jsx_runtime.jsx)(packages_ToolTip,{...args,position:"bottom",children:"Bottom"});Bottom.displayName="Bottom";const Left=args=>(0,jsx_runtime.jsx)(packages_ToolTip,{...args,position:"left",children:"Left"});Left.displayName="Left";const Right=args=>(0,jsx_runtime.jsx)(packages_ToolTip,{...args,position:"right",children:"Right"});Right.displayName="Right"}}]);
//# sourceMappingURL=ToolTip-stories.41877c82.iframe.bundle.js.map