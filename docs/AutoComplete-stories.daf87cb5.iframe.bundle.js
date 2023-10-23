"use strict";(self.webpackChunksagu_ui=self.webpackChunksagu_ui||[]).push([[703],{"./src/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t$:()=>click_outside,uS:()=>useOnKeypress});var react=__webpack_require__("./node_modules/react/index.js");const click_outside=(ref,handler)=>{(0,react.useEffect)((()=>{const listener=event=>{const el=ref?.current;el&&!el.contains(event?.target||null)&&handler(event)};return document.addEventListener("mousedown",listener),document.addEventListener("touchstart",listener),()=>{document.removeEventListener("mousedown",listener),document.removeEventListener("touchstart",listener)}}),[ref,handler])};function useOnKeypress(key,action){(0,react.useEffect)((()=>{function onKeyup(e){e.key===key&&action()}return window.addEventListener("keyup",onKeyup),()=>window.removeEventListener("keyup",onKeyup)}),[key,action])}try{windownearbottom.displayName="windownearbottom",windownearbottom.__docgenInfo={description:"",displayName:"windownearbottom",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/window-near-bottom/index.tsx#windownearbottom"]={docgenInfo:windownearbottom.__docgenInfo,name:"windownearbottom",path:"src/hooks/window-near-bottom/index.tsx#windownearbottom"})}catch(__react_docgen_typescript_loader_error){}},"./src/packages/AutoComplete/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ComboBox:()=>ComboBox,FreeSolo:()=>FreeSolo,default:()=>stories});var react=__webpack_require__("./node_modules/react/index.js"),hooks=__webpack_require__("./src/hooks/index.ts"),Paper=__webpack_require__("./src/packages/Paper/index.tsx"),TextField=__webpack_require__("./src/packages/TextField/index.tsx"),Tag=__webpack_require__("./src/packages/Tag/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles=__webpack_require__("./src/packages/Select/styles.ts");const AutoComplete=(0,styled_components_browser_esm.ZP)(styles.P)`
  ${()=>styled_components_browser_esm.iv`
    display: flex;
    flex-direction: row;
    align-items: center;
  `}
`,NoOptionsWrapper=styled_components_browser_esm.ZP.div`
  ${({theme,size="small"})=>styled_components_browser_esm.iv`
    padding: ${theme.spacings.mini} ${theme.spacings.xxsmall};
    color: ${theme.colors.neutral.darkest};
    width: fit-content;
    height: fit-content;
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes[size]};
    font-weight: ${theme.font.weights.regular};
  `}
`,figureArrowModifiers={up:styled_components_browser_esm.iv`
    transform: rotate(-45deg);
  `,down:styled_components_browser_esm.iv`
    transform: rotate(135deg);
  `},AutoCompleteArrow=styled_components_browser_esm.ZP.div`
  ${({theme,direction,show})=>styled_components_browser_esm.iv`
    :before {
      position: relative;
      content: '';
      display: block;
      width: 1rem;
      height: 1rem;
      border-right: 2px solid ${theme.colors.secondary.medium};
      border-top: 2px solid ${theme.colors.secondary.medium};
      visibility: ${show?"visible":"hidden"};
      ${figureArrowModifiers[direction]}
      top: ${"up"===direction?"-0.2rem":"unset"};
    }
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AutoComplete_AutoComplete=({label,freeSolo,fieldPlaceholder,options})=>{const ref=(0,react.useRef)(null),[textFieldValue,setTextFieldValue]=(0,react.useState)(""),[showOptions,setShowOptions]=(0,react.useState)(!1),[selectedOption,setSelectedOption]=(0,react.useState)(""),[filteredSuggestions,setFilteredSuggestions]=(0,react.useState)([...options]),resetOptions=()=>setFilteredSuggestions(options),setTheFields=()=>{!1===freeSolo&&(""===selectedOption?(setTextFieldValue(""),resetOptions()):(setTextFieldValue(selectedOption),resetOptions())),setShowOptions(!1)};(0,hooks.t$)(ref,(()=>{setTheFields()})),(0,hooks.uS)("Escape",(()=>{setTheFields()}));return(0,jsx_runtime.jsxs)(AutoComplete,{ref,"data-testid":"auto-complete",children:[(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(TextField.Z,{"data-testid":"auto-complete-input",label,value:textFieldValue,placeholder:fieldPlaceholder,onChange:event=>{!1===showOptions&&setShowOptions(!0);const currentInputValue=event.target.value;setTextFieldValue(currentInputValue);const filteredOptions=(inputValue=currentInputValue,options.filter((option=>option.name.toLowerCase().includes(inputValue.toLowerCase()))));var inputValue;0===filteredOptions.length&&freeSolo?(setShowOptions(!1),setFilteredSuggestions(filteredOptions)):setFilteredSuggestions(filteredOptions),""===currentInputValue&&""!==selectedOption&&setSelectedOption("")},onClick:()=>{0===filteredSuggestions.length?setShowOptions(!1):""===textFieldValue?setShowOptions(!showOptions):""!==selectedOption&&setShowOptions(!0)},style:{marginRight:10}}),!1===freeSolo&&(0,jsx_runtime.jsx)(AutoCompleteArrow,{"data-testid":"arrow-toggle",direction:showOptions?"up":"down",show:!1===freeSolo,onClick:()=>setShowOptions(!showOptions)})]}),showOptions&&(0,jsx_runtime.jsx)(Paper.Z,{"data-testid":"options",active:showOptions,placement:"bottom",children:(0,jsx_runtime.jsx)("div",{style:{display:"grid",gridGap:"0.5rem",gridTemplateColumns:"1fr",padding:"0.5rem",placeItems:"center"},children:filteredSuggestions.length>0?filteredSuggestions.map((option=>(0,jsx_runtime.jsx)(Tag.Z,{value:option.name,onClick:()=>(option=>{setTextFieldValue(option),setSelectedOption(option),setShowOptions(!1),setFilteredSuggestions(options)})(option.name),isPointer:!0,isDarkBgOnHover:!0,isDarkBg:option.name===selectedOption},option.id))):(0,jsx_runtime.jsx)(NoOptionsWrapper,{children:"No Options"})})})]})};AutoComplete_AutoComplete.displayName="AutoComplete";const packages_AutoComplete=AutoComplete_AutoComplete;try{AutoComplete_AutoComplete.displayName="AutoComplete",AutoComplete_AutoComplete.__docgenInfo={description:"",displayName:"AutoComplete",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},freeSolo:{defaultValue:null,description:"",name:"freeSolo",required:!0,type:{name:"boolean"}},fieldPlaceholder:{defaultValue:null,description:"",name:"fieldPlaceholder",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"MockData[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/AutoComplete/index.tsx#AutoComplete"]={docgenInfo:AutoComplete_AutoComplete.__docgenInfo,name:"AutoComplete",path:"src/packages/AutoComplete/index.tsx#AutoComplete"})}catch(__react_docgen_typescript_loader_error){}const stories={title:"AutoComplete",component:packages_AutoComplete,args:{label:"where",fieldPlaceholder:"Enter the Input",freeSolo:!1,options:[{id:1,name:"New York"},{id:2,name:"Los Angeles"},{id:3,name:"Chicago"},{id:4,name:"Houston"}]},argTypes:{fieldValue:{control:!1}}},ComboBox=args=>(0,jsx_runtime.jsx)(packages_AutoComplete,{...args,freeSolo:!1});ComboBox.displayName="ComboBox";const FreeSolo=args=>(0,jsx_runtime.jsx)(packages_AutoComplete,{...args,freeSolo:!0});FreeSolo.displayName="FreeSolo"},"./src/packages/Box/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>packages_Box});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),spacingModifier=__webpack_require__("./src/styles/spacingModifier.ts");const flexModifier={row:()=>styled_components_browser_esm.iv`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Box=({children,padding,border=!1,shadow=!1,flex,gap,justify,alignment,fullWidth,variant,...props})=>(0,jsx_runtime.jsx)(Wrapper,{padding,border,shadow,flex,gap,justify,alignment,fullWidth,variant,...props,children});Box.displayName="Box";const packages_Box=Box;try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'},{value:'"xsmall"'},{value:'"xmini"'},{value:'"mini"'},{value:'"xxsmall"'},{value:'"xlarge"'},{value:'"xxlarge"'}]}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'},{value:'"xsmall"'},{value:'"xmini"'},{value:'"mini"'},{value:'"xxsmall"'},{value:'"xlarge"'},{value:'"xxlarge"'}]}},border:{defaultValue:{value:"false"},description:"",name:"border",required:!1,type:{name:"boolean"}},shadow:{defaultValue:{value:"false"},description:"",name:"shadow",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"default"'},{value:'"transparent"'}]}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"row"'},{value:'"column"'},{value:'"block"'}]}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"space-evenly"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},alignment:{defaultValue:null,description:"",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"center"'},{value:'"end"'},{value:'"start"'},{value:'"baseline"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Box/index.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/packages/Box/index.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/packages/Label/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>packages_Label});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Label=styled_components_browser_esm.ZP.label`
  position: relative;
  height: 5rem;
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Label_Label=({title,children,...props})=>(0,jsx_runtime.jsxs)(Label,{...props,children:[title&&(0,jsx_runtime.jsx)(Title,{children:title}),children]});Label_Label.displayName="Label";const packages_Label=Label_Label;try{Label_Label.displayName="Label",Label_Label.__docgenInfo={description:"",displayName:"Label",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Label/index.tsx#Label"]={docgenInfo:Label_Label.__docgenInfo,name:"Label",path:"src/packages/Label/index.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/packages/Paper/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>packages_Paper});__webpack_require__("./node_modules/react/index.js");var Box=__webpack_require__("./src/packages/Box/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const paperModifiers={bottom:theme=>styled_components_browser_esm.iv`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Paper_Paper=({children,active,placement="bottom",padding="none",...props})=>(0,jsx_runtime.jsx)(Paper,{"aria-hidden":!active,active,placement,"data-testid":"paper",children:(0,jsx_runtime.jsx)(Box.Z,{...props,shadow:!0,border:!0,padding,children})});Paper_Paper.displayName="Paper";const packages_Paper=Paper_Paper;try{Paper_Paper.displayName="Paper",Paper_Paper.__docgenInfo={description:"",displayName:"Paper",props:{placement:{defaultValue:{value:"bottom"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},padding:{defaultValue:{value:"none"},description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'},{value:'"xsmall"'},{value:'"xmini"'},{value:'"mini"'},{value:'"xxsmall"'},{value:'"xlarge"'},{value:'"xxlarge"'}]}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'},{value:'"xsmall"'},{value:'"xmini"'},{value:'"mini"'},{value:'"xxsmall"'},{value:'"xlarge"'},{value:'"xxlarge"'}]}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},shadow:{defaultValue:null,description:"",name:"shadow",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"default"'},{value:'"transparent"'}]}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"row"'},{value:'"column"'},{value:'"block"'}]}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"space-evenly"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},alignment:{defaultValue:null,description:"",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"center"'},{value:'"end"'},{value:'"start"'},{value:'"baseline"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Paper/index.tsx#Paper"]={docgenInfo:Paper_Paper.__docgenInfo,name:"Paper",path:"src/packages/Paper/index.tsx#Paper"})}catch(__react_docgen_typescript_loader_error){}},"./src/packages/Select/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>Select,U:()=>SelectButton});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const SelectButton=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.button`
  ${({theme,active})=>styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
    position: relative;
    cursor: pointer;
    label,
    input {
      cursor: inherit;
    }
    position: relative;
    border: none;
    background: transparent;
    outline: none;
    width: 100%;
    &::after {
      content: '';
      position: absolute;
      border: solid ${theme.colors.secondary.medium};
      opacity: 0.5;
      border-width: ${active?"0.2rem 0 0 0.2rem":"0 0.2rem 0.2rem 0"};
      display: inline-block;
      padding: 0.3rem;
      right: ${theme.spacings.small};
      top: ${active?"60%":"50%"};
      transform: rotate(45deg) translateY(-50%);
    }
  `}
`,Select=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div`
  position: relative;
  width: 100%;
`},"./src/packages/Tag/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>packages_Tag});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const wrapperModifier_isUppercase=()=>styled_components_browser_esm.iv`
    text-transform: uppercase;
  `,wrapperModifier_isBold=theme=>styled_components_browser_esm.iv`
    font-weight: ${theme.font.weights.bold};
  `,wrapperModifier_isPointer=()=>styled_components_browser_esm.iv`
    cursor: pointer;
  `,wrapperModifier_isSlashed=()=>styled_components_browser_esm.iv`
    text-decoration: line-through;
  `,Wrapper=styled_components_browser_esm.ZP.div`
  ${({theme,isUppercase,isSlashed,isBold,isPointer,size="small",isDarkBgOnHover,isDarkBg})=>styled_components_browser_esm.iv`
    padding: ${theme.spacings.mini} ${theme.spacings.xxsmall};
    background: ${isDarkBg?theme.colors.secondary.dark:theme.colors.primary.light};
    color: ${theme.colors.base.white};
    width: fit-content;
    height: fit-content;
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes[size]};
    font-weight: ${theme.font.weights.regular};
    ${!!isUppercase&&wrapperModifier_isUppercase()};
    ${!!isPointer&&wrapperModifier_isPointer()};
    ${!!isSlashed&&wrapperModifier_isSlashed()};
    ${!!isBold&&wrapperModifier_isBold(theme)};
    &:hover {
      background: ${isDarkBgOnHover?theme.colors.secondary.dark:theme.colors.primary.light};
    }
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tag=({value,isBold,isUppercase,isPointer,size,isDarkBgOnHover,isDarkBg,...props})=>(0,jsx_runtime.jsx)(Wrapper,{isUppercase,isBold,isPointer,size,isDarkBgOnHover,isDarkBg,...props,children:value});Tag.displayName="Tag";const packages_Tag=Tag;try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},isUppercase:{defaultValue:null,description:"",name:"isUppercase",required:!1,type:{name:"boolean"}},isBold:{defaultValue:null,description:"",name:"isBold",required:!1,type:{name:"boolean"}},isPointer:{defaultValue:null,description:"",name:"isPointer",required:!1,type:{name:"boolean"}},isSlashed:{defaultValue:null,description:"",name:"isSlashed",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'}]}},isDarkBgOnHover:{defaultValue:null,description:"",name:"isDarkBgOnHover",required:!1,type:{name:"boolean"}},isDarkBg:{defaultValue:null,description:"",name:"isDarkBg",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Tag/index.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"src/packages/Tag/index.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}},"./src/packages/TextField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>packages_TextField});__webpack_require__("./node_modules/react/index.js");var Label=__webpack_require__("./src/packages/Label/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const TextField=styled_components_browser_esm.ZP.input`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextField_TextField=({label,...props})=>(0,jsx_runtime.jsx)(Label.Z,{title:label,children:(0,jsx_runtime.jsx)(TextField,{...props,label})});TextField_TextField.displayName="TextField";const packages_TextField=TextField_TextField;try{TextField_TextField.displayName="TextField",TextField_TextField.__docgenInfo={description:"",displayName:"TextField",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/TextField/index.tsx#TextField"]={docgenInfo:TextField_TextField.__docgenInfo,name:"TextField",path:"src/packages/TextField/index.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}},"./src/styles/spacingModifier.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>spacingModifier});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const spacingModifier={none:(theme,attribute)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
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
//# sourceMappingURL=AutoComplete-stories.daf87cb5.iframe.bundle.js.map