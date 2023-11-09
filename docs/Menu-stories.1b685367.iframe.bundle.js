"use strict";(self.webpackChunksagu_ui=self.webpackChunksagu_ui||[]).push([[664],{"./src/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t$:()=>click_outside,uS:()=>useOnKeypress});var react=__webpack_require__("./node_modules/react/index.js");const click_outside=(ref,handler)=>{(0,react.useEffect)((()=>{const listener=event=>{const el=ref?.current;el&&!el.contains(event?.target)&&handler(event)};return document.addEventListener("mousedown",listener),document.addEventListener("touchstart",listener),()=>{document.removeEventListener("mousedown",listener),document.removeEventListener("touchstart",listener)}}),[ref,handler])};function useOnKeypress(key,action){(0,react.useEffect)((()=>{function onKeyup(e){e.key===key&&action()}return window.addEventListener("keyup",onKeyup),()=>window.removeEventListener("keyup",onKeyup)}),[key,action])}try{windownearbottom.displayName="windownearbottom",windownearbottom.__docgenInfo={description:"",displayName:"windownearbottom",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/window-near-bottom/index.tsx#windownearbottom"]={docgenInfo:windownearbottom.__docgenInfo,name:"windownearbottom",path:"src/hooks/window-near-bottom/index.tsx#windownearbottom"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Rk:()=>icons_Down,QS:()=>icons_Elipsis,jj:()=>icons_Error,kI:()=>icons_Info,WF:()=>icons_Minus,v3:()=>icons_Plus,fB:()=>icons_Success,Up:()=>icons_Up,nL:()=>icons_Warning});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Down=()=>(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{opacity:"0.3",fillRule:"evenodd",clipRule:"evenodd",d:"m8 9.491 3.403-3.308a.656.656 0 0 1 .909 0 .613.613 0 0 1 0 .884l-3.857 3.75a.656.656 0 0 1-.91 0l-3.857-3.75a.613.613 0 0 1 0-.884.656.656 0 0 1 .91 0L8 9.491Z",fill:"currentColor"})});Down.displayName="Down";const icons_Down=Down,Up=()=>(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{opacity:"0.3",fillRule:"evenodd",clipRule:"evenodd",d:"M8 6.509 4.597 9.817a.656.656 0 0 1-.909 0 .613.613 0 0 1 0-.884l3.857-3.75a.656.656 0 0 1 .91 0l3.857 3.75a.613.613 0 0 1 0 .884.656.656 0 0 1-.91 0L8 6.509Z",fill:"currentColor"})});Up.displayName="Up";const icons_Up=Up,Minus=()=>(0,jsx_runtime.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"0 0 24 24",width:"1em",children:(0,jsx_runtime.jsx)("path",{clipRule:"evenodd",d:"M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z",fill:"currentColor",fillRule:"evenodd"})});Minus.displayName="Minus";const icons_Minus=Minus,Plus=()=>(0,jsx_runtime.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"0 0 24 24",width:"1em",children:(0,jsx_runtime.jsx)("path",{clipRule:"evenodd",d:"M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z",fill:"currentColor",fillRule:"evenodd"})});Plus.displayName="Plus";const icons_Plus=Plus,Elipsis=()=>(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 512",children:(0,jsx_runtime.jsx)("path",{d:"M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm56-104c0 30.9-25.1 56-56 56S8 126.9 8 96s25.1-56 56-56 56 25.1 56 56z"})});Elipsis.displayName="Elipsis";const icons_Elipsis=Elipsis,Info=()=>(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",fill:"currentColor","aria-label":"info",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 14A7 7 0 117 0a7 7 0 010 14zm0-9.333a1.167 1.167 0 100-2.334 1.167 1.167 0 000 2.334zm0 1.166c-.644 0-1.167.522-1.167 1.167v3.5a1.167 1.167 0 002.334 0V7c0-.644-.522-1.167-1.167-1.167z",fill:"currentColor"})});Info.displayName="Info";const icons_Info=Info,Success=()=>(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",fill:"currentColor","aria-label":"success",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 14A7 7 0 117 0a7 7 0 010 14zM5.848 7.702L4.342 6.196a1.166 1.166 0 10-1.65 1.65l2.333 2.333a1.166 1.166 0 001.707-.061l4.61-4.61a1.166 1.166 0 10-1.65-1.65L5.848 7.702z",fill:"currentColor"})});Success.displayName="Success";const icons_Success=Success,Error=()=>(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 32 32",width:"1em",height:"1em",fill:"currentColor","aria-label":"error",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.936 20.711c0-.363-.133-.672-.393-.937L19.769 16l3.771-3.769a1.28 1.28 0 00.393-.937c0-.377-.133-.695-.393-.958l-1.877-1.874a1.312 1.312 0 00-.962-.395c-.361 0-.67.133-.937.395l-3.765 3.769L12.23 8.46a1.293 1.293 0 00-.939-.395c-.375 0-.697.133-.958.395l-1.874 1.874a1.312 1.312 0 00-.395.958c0 .361.133.67.395.937L12.23 16l-3.771 3.771a1.278 1.278 0 00-.395.937c0 .375.133.695.395.96l1.874 1.874c.263.263.583.393.958.393.361 0 .672-.13.937-.393l3.771-3.771 3.769 3.771c.265.263.576.393.937.393.377 0 .697-.13.962-.393l1.877-1.874c.258-.265.391-.587.391-.958zM32 16c0 2.903-.715 5.579-2.144 8.03a15.931 15.931 0 01-5.822 5.826c-2.457 1.429-5.131 2.142-8.034 2.142s-5.579-.711-8.034-2.142a15.924 15.924 0 01-5.822-5.826C.715 21.58 0 18.903 0 16s.715-5.579 2.146-8.032 3.369-4.393 5.822-5.822S13.097.002 16 .002s5.577.715 8.034 2.146a15.928 15.928 0 015.822 5.822C31.282 10.42 32 13.097 32 16z",fill:"currentColor"})});Error.displayName="Error";const icons_Error=Error,Warning=()=>(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",fill:"currentColor","aria-label":"warning",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.021 1.101l5.832 10.509a1.168 1.168 0 01-1.021 1.734H1.167a1.167 1.167 0 01-1.02-1.734L5.979 1.101a1.167 1.167 0 012.041 0zM7 12.177a1.167 1.167 0 100-2.334 1.167 1.167 0 000 2.334zm0-9.34c-.645 0-1.167.523-1.167 1.167v3.502a1.167 1.167 0 002.334 0V4.004c0-.645-.523-1.167-1.167-1.167z",fill:"currentColor"})});Warning.displayName="Warning";const icons_Warning=Warning},"./src/packages/Box/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>packages_Box});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),spacingModifier=__webpack_require__("./src/styles/spacingModifier.ts");const flexModifier={row:()=>styled_components_browser_esm.iv`
    display: flex;
    flex-direction: row;
  `,column:()=>styled_components_browser_esm.iv`
    display: flex;
    flex-direction: column;
  `,block:()=>styled_components_browser_esm.iv`
    display: block;
  `,none:()=>styled_components_browser_esm.iv`
    display: none;
  `},wrapperModifier={default:theme=>styled_components_browser_esm.iv`
    background: ${theme.colors.base.white};
  `,filled:theme=>styled_components_browser_esm.iv`
    background: ${theme.colors.primary.medium};
  `,transparent:()=>styled_components_browser_esm.iv`
    background: transparent;
  `},Wrapper=styled_components_browser_esm.ZP.div`
  ${({theme,padding="small",border,shadow,flex="block",gap="small",justify,alignment,fullWidth,variant="default"})=>styled_components_browser_esm.iv`
    ${!!shadow&&` box-shadow: ${theme.shadows.default};`};
    ${!!border&&`border: 0.2rem solid ${theme.colors.secondary.light};`};
    width: ${fullWidth?"100%":"fit-content"};
    height: fit-content;
    align-items: ${alignment};
    justify-content: ${justify};
    z-index: ${theme.layers.menu};
    ${wrapperModifier[variant](theme)}
    ${flexModifier[flex]()}
    ${spacingModifier.r[padding](theme,"padding")}
    ${spacingModifier.r[gap](theme,"gap")}
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Box=({children,padding,border=!1,shadow=!1,flex,gap,justify,alignment,fullWidth,variant,...props})=>(0,jsx_runtime.jsx)(Wrapper,{padding,border,shadow,flex,gap,justify,alignment,fullWidth,variant,...props,children});Box.displayName="Box";const packages_Box=Box;try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'},{value:'"xsmall"'},{value:'"xmini"'},{value:'"mini"'},{value:'"xxsmall"'},{value:'"xlarge"'},{value:'"xxlarge"'}]}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'},{value:'"xsmall"'},{value:'"xmini"'},{value:'"mini"'},{value:'"xxsmall"'},{value:'"xlarge"'},{value:'"xxlarge"'}]}},border:{defaultValue:{value:"false"},description:"",name:"border",required:!1,type:{name:"boolean"}},shadow:{defaultValue:{value:"false"},description:"",name:"shadow",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"default"'},{value:'"transparent"'}]}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"row"'},{value:'"column"'},{value:'"block"'}]}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"space-evenly"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},alignment:{defaultValue:null,description:"",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"center"'},{value:'"end"'},{value:'"start"'},{value:'"baseline"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Box/index.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/packages/Box/index.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/packages/Menu/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,IconMenu:()=>IconMenu,default:()=>stories});var react=__webpack_require__("./node_modules/react/index.js"),NavLink=__webpack_require__("./src/packages/NavLink/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles=__webpack_require__("./src/packages/NavLink/styles.ts");const Menu=styled_components_browser_esm.ZP.menu`
  position: relative;
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
`,MenuButton=styled_components_browser_esm.ZP.button`
  ${({theme,active,asIcon=!1})=>styled_components_browser_esm.iv`
    cursor: pointer;
    border: none;
    background: transparent;
    outline: none;
    position: relative;
    width: calc(100% + ${theme.spacings.small});
    text-align: left;
    color: ${active?theme.colors.secondary.medium:theme.colors.primary.medium};
    &:hover {
      color: ${theme.colors.secondary.medium};
    }

    ${!asIcon&&styled_components_browser_esm.iv`
      &::after {
        content: '';
        z-index: 0;
        color: inherit;
        position: absolute;
        border: solid currentColor;
        border-width: ${active?"0.2rem 0 0 0.2rem":"0 0.2rem 0.2rem 0"};
        display: inline-block;
        padding: 0.2rem;
        right: ${theme.spacings.xsmall};
        top: ${active?"60%":"40%"};
        transform: rotate(45deg) translateY(-50%);
        transition: color ${theme.transitions.default};
      }
    `}

    svg {
      width: auto;
      height: ${theme.spacings.medium};
      fill: ${theme.colors.primary.medium};
      transition: fill ${theme.transitions.default};
      &:hover {
        fill: ${theme.colors.secondary.medium};
      }
    }

    ${styles.O} {
      color: inherit;
      &::after {
        content: none;
      }
    }
  `}
`,MenuList=styled_components_browser_esm.ZP.ul`
  list-style: none;
  width: 100%;
`,MenuItem=styled_components_browser_esm.ZP.li`
  display: flex;
  flex-direction: column;
  width: 100%;
`;var Paper=__webpack_require__("./src/packages/Paper/index.tsx"),hooks=__webpack_require__("./src/hooks/index.ts"),icons=__webpack_require__("./src/icons/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Menu_Menu=({title,active,items,asIcon=!1,...props})=>{const[isActive,setIsActive]=(0,react.useState)(active),ref=(0,react.useRef)(null);return(0,hooks.t$)(ref,(()=>{setIsActive(!1)})),(0,hooks.uS)("Escape",(()=>{setIsActive(!1)})),items?.length?(0,jsx_runtime.jsxs)(Menu,{...props,ref,children:[(0,jsx_runtime.jsx)(MenuButton,{asIcon,active:isActive,onClick:()=>setIsActive(!isActive),children:(0,jsx_runtime.jsx)(NavLink.Z,{size:"medium",active:isActive,children:asIcon?(0,jsx_runtime.jsx)(icons.QS,{}):title})}),isActive&&(0,jsx_runtime.jsx)(Paper.Z,{placement:asIcon?"right":"bottom",active:isActive,children:(0,jsx_runtime.jsx)(MenuList,{children:items?.map((({path,label})=>(0,jsx_runtime.jsx)(MenuItem,{children:(0,jsx_runtime.jsx)(NavLink.Z,{size:"small",href:path,children:label})},path)))})})]}):null};Menu_Menu.displayName="Menu";const packages_Menu=Menu_Menu;try{Menu_Menu.displayName="Menu",Menu_Menu.__docgenInfo={description:"",displayName:"Menu",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},asIcon:{defaultValue:{value:"false"},description:"",name:"asIcon",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"ItemsProps[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Menu/index.tsx#Menu"]={docgenInfo:Menu_Menu.__docgenInfo,name:"Menu",path:"src/packages/Menu/index.tsx#Menu"})}catch(__react_docgen_typescript_loader_error){}const stories={title:"Menu",component:packages_Menu,args:{title:"More",active:!1,items:[{label:"Home",path:"/"},{label:"About",path:"/about"},{label:"Blog",path:"/blog"}]}},Default=args=>(0,jsx_runtime.jsx)(packages_Menu,{...args});Default.displayName="Default";const IconMenu=args=>(0,jsx_runtime.jsx)(packages_Menu,{...args,asIcon:!0});IconMenu.displayName="IconMenu"},"./src/packages/NavLink/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/packages/NavLink/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const NavLink=({children,active=!1,disabled=!1,size="medium",padding="xsmall",...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_1__.O,{"aria-disabled":disabled,active,size,padding,disabled,...props,children});NavLink.displayName="NavLink";const __WEBPACK_DEFAULT_EXPORT__=NavLink;try{NavLink.displayName="NavLink",NavLink.__docgenInfo={description:"",displayName:"NavLink",props:{active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},padding:{defaultValue:{value:"xsmall"},description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'},{value:'"xsmall"'},{value:'"xmini"'},{value:'"mini"'},{value:'"xxsmall"'},{value:'"xlarge"'},{value:'"xxlarge"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/NavLink/index.tsx#NavLink"]={docgenInfo:NavLink.__docgenInfo,name:"NavLink",path:"src/packages/NavLink/index.tsx#NavLink"})}catch(__react_docgen_typescript_loader_error){}},"./src/packages/NavLink/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>NavLink});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styles_spacingModifier__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styles/spacingModifier.ts");const NavLink=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.a`
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
`},"./src/packages/Paper/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>packages_Paper});__webpack_require__("./node_modules/react/index.js");var Box=__webpack_require__("./src/packages/Box/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const paperModifiers={bottom:theme=>styled_components_browser_esm.iv`
    left: 0;
    top: calc(100% + ${theme.spacings.xxsmall});
  `,left:theme=>styled_components_browser_esm.iv`
    top: 0;
    right: calc(100% + ${theme.spacings.xxsmall});
  `,right:theme=>styled_components_browser_esm.iv`
    top: 0;
    left: calc(100% + ${theme.spacings.xxsmall});
  `},Paper=styled_components_browser_esm.ZP.div`
  ${({theme,active,placement})=>styled_components_browser_esm.iv`
    position: absolute;
    display: ${active?"block":"none"};
    width: fit-content;
    height: fit-content;
    z-index: ${theme.layers.menu};
    ${paperModifiers[placement](theme)}
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Paper_Paper=({children,active,placement="bottom",padding="none",...props})=>(0,jsx_runtime.jsx)(Paper,{"aria-hidden":!active,active,placement,"data-testid":"paper",children:(0,jsx_runtime.jsx)(Box.Z,{...props,shadow:!0,border:!0,padding,children})});Paper_Paper.displayName="Paper";const packages_Paper=Paper_Paper;try{Paper_Paper.displayName="Paper",Paper_Paper.__docgenInfo={description:"",displayName:"Paper",props:{placement:{defaultValue:{value:"bottom"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},padding:{defaultValue:{value:"none"},description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'},{value:'"xsmall"'},{value:'"xmini"'},{value:'"mini"'},{value:'"xxsmall"'},{value:'"xlarge"'},{value:'"xxlarge"'}]}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'},{value:'"xsmall"'},{value:'"xmini"'},{value:'"mini"'},{value:'"xxsmall"'},{value:'"xlarge"'},{value:'"xxlarge"'}]}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},shadow:{defaultValue:null,description:"",name:"shadow",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"default"'},{value:'"transparent"'}]}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"row"'},{value:'"column"'},{value:'"block"'}]}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"space-evenly"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},alignment:{defaultValue:null,description:"",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"center"'},{value:'"end"'},{value:'"start"'},{value:'"baseline"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Paper/index.tsx#Paper"]={docgenInfo:Paper_Paper.__docgenInfo,name:"Paper",path:"src/packages/Paper/index.tsx#Paper"})}catch(__react_docgen_typescript_loader_error){}},"./src/styles/spacingModifier.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>spacingModifier});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const spacingModifier={none:(theme,attribute)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
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
//# sourceMappingURL=Menu-stories.1b685367.iframe.bundle.js.map