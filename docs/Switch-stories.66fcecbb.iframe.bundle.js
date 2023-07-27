"use strict";(self.webpackChunksagu_ui=self.webpackChunksagu_ui||[]).push([[672],{"./src/packages/Switch/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Customized:()=>Customized,Default:()=>Default,DefaultChecked:()=>DefaultChecked,Disabled:()=>Disabled,default:()=>stories});__webpack_require__("./node_modules/react/index.js");var TextContent=__webpack_require__("./src/packages/TextContent/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Label=styled_components_browser_esm.ZP.label`
  ${({disabled})=>styled_components_browser_esm.iv`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: ${disabled?"not-allowed":"pointer"};
    width: fit-content;
  `}
`,switchModifiers={small:()=>styled_components_browser_esm.iv`
    width: 2.8rem;
    height: 1.6rem;
    &:before {
      width: 1rem;
      height: 1rem;
    }
  `,medium:()=>styled_components_browser_esm.iv`
    width: 3.5rem;
    height: 2rem;
    &:before {
      width: 1.4rem;
      height: 1.4rem;
    }
  `,large:()=>styled_components_browser_esm.iv`
    width: 4.2rem;
    height: 2.4rem;
    &:before {
      width: 1.8rem;
      height: 1.8rem;
    }
  `},Input=styled_components_browser_esm.ZP.input`
  ${({theme,colors,spanSize="large"})=>styled_components_browser_esm.iv`
    opacity: 0;
    position: absolute;

    & + span {
      position: relative;
      border-radius: ${theme.spacings.medium};
      padding: ${theme.spacings.mini};
      transition: 300ms all;
      background: ${colors?.bgUnchecked||theme.colors.neutral.dark};

      ${spanSize&&switchModifiers[spanSize]()}

      &:before {
        transition: 300ms all;
        content: '';
        position: absolute;
        border-radius: ${theme.spacings.medium};
        top: 50%;
        left: ${theme.spacings.mini};
        transform: translate(0, -50%);
        background: ${colors?.dot||theme.colors.base.white};
      }
    }

    &:checked + span {
      background: ${colors?.bgChecked||theme.colors.primary.medium};

      &:before {
        transform: translate(90%, -50%);
      }
    }

    &:disabled + span {
      opacity: 0.7;

      &:before {
        background: ${theme.colors.neutral.lightest};
      }
    }
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Switch=({label,colors,checked,defaultChecked=!1,disabled=!1,size="medium",onSwitch})=>(0,jsx_runtime.jsxs)(Label,{disabled,children:[label&&(0,jsx_runtime.jsx)(TextContent.Z,{size,disabled,value:label,tag:"span"}),(0,jsx_runtime.jsx)(Input,{type:"checkbox",colors,checked,defaultChecked,onChange:onSwitch,disabled,spanSize:size}),(0,jsx_runtime.jsx)("span",{})]});Switch.displayName="Switch";const packages_Switch=Switch;try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},colors:{defaultValue:null,description:"",name:"colors",required:!1,type:{name:"Colors"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:{value:"false"},description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onSwitch:{defaultValue:null,description:"",name:"onSwitch",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Switch/index.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"src/packages/Switch/index.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}const stories={title:"Switch",component:packages_Switch,args:{},argTypes:{colors:{control:!1}}},Default=args=>(0,jsx_runtime.jsx)(packages_Switch,{...args});Default.displayName="Default";const DefaultChecked=args=>(0,jsx_runtime.jsx)(packages_Switch,{...args,defaultChecked:!0});DefaultChecked.displayName="DefaultChecked";const Disabled=args=>(0,jsx_runtime.jsx)(packages_Switch,{...args,disabled:!0});Disabled.displayName="Disabled";const Customized=args=>(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gridGap:"10px"},children:[(0,jsx_runtime.jsx)("p",{children:"Switch without text"}),(0,jsx_runtime.jsx)(packages_Switch,{...args,colors:{dot:"#7ec4fa",bgChecked:"purple",bgUnchecked:"hotpink"}}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{children:"Switch with text"}),(0,jsx_runtime.jsx)(packages_Switch,{...args,label:"Dark mode?",colors:{dot:"beige",bgChecked:"purple",bgUnchecked:"#81fd9c"}}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{children:"Switch with defaultValue"}),(0,jsx_runtime.jsx)(packages_Switch,{...args,label:"Dark mode?",defaultChecked:!0,colors:{dot:"green",bgChecked:"purple",bgUnchecked:"hotpink"}}),(0,jsx_runtime.jsx)("br",{})]});Customized.displayName="Customized"},"./src/packages/TextContent/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>packages_TextContent});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const colorModifier={white:theme=>styled_components_browser_esm.iv`
    color: ${theme.colors.base.white};
  `,black:theme=>styled_components_browser_esm.iv`
    color: ${theme.colors.base.black};
  `,primary:theme=>styled_components_browser_esm.iv`
    color: ${theme.colors.primary.medium};
  `,secondary:theme=>styled_components_browser_esm.iv`
    color: ${theme.colors.secondary.medium};
  `},Text=styled_components_browser_esm.ZP.p`
  ${({theme,disabled=!1,size="small",color="black"})=>styled_components_browser_esm.iv`
    font-size: ${theme.font.sizes[size]};
    ${disabled?`color: ${theme.colors.base.disabled};`:colorModifier[color](theme)};
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextContent=({value,tag="span",size,disabled=!1,color,...props})=>(0,jsx_runtime.jsx)(Text,{size,disabled,as:tag,color,...props,children:value});TextContent.displayName="TextContent";const packages_TextContent=TextContent;try{TextContent.displayName="TextContent",TextContent.__docgenInfo={description:"",displayName:"TextContent",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},tag:{defaultValue:{value:"span"},description:"",name:"tag",required:!1,type:{name:"enum",value:[{value:'"p"'},{value:'"span"'},{value:'"i"'},{value:'"b"'},{value:'"mark"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"black"'},{value:'"primary"'},{value:'"secondary"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/TextContent/index.tsx#TextContent"]={docgenInfo:TextContent.__docgenInfo,name:"TextContent",path:"src/packages/TextContent/index.tsx#TextContent"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=Switch-stories.66fcecbb.iframe.bundle.js.map