"use strict";(self.webpackChunksagu_ui=self.webpackChunksagu_ui||[]).push([[258],{"./src/packages/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>packages_Button});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),spacingModifier=__webpack_require__("./src/styles/spacingModifier.ts");const buttonVariants={primary:theme=>styled_components_browser_esm.AH`
    border-color: ${theme.colors.primary.medium};
    color: ${theme.colors.primary.medium};
    &:hover {
      border-color: ${theme.colors.secondary.medium};
      color: ${theme.colors.secondary.medium};
    }
    &:active {
      border-color: ${theme.colors.secondary.dark};
      color: ${theme.colors.secondary.dark};
    }
  `,secondary:theme=>styled_components_browser_esm.AH`
    border-color: ${theme.colors.secondary.medium};
    color: ${theme.colors.secondary.medium};
    &:hover {
      border-color: ${theme.colors.primary.light};
      color: ${theme.colors.primary.light};
    }
    &:active {
      border-color: ${theme.colors.primary.medium};
      color: ${theme.colors.primary.medium};
    }
  `,filled:theme=>styled_components_browser_esm.AH`
    color: ${theme.colors.base.white};
    background: ${theme.colors.primary.medium};

    &:hover {
      background: ${theme.colors.primary.dark};
    }
    &:active {
      background: ${theme.colors.primary.medium};
    }
  `},Button=styled_components_browser_esm.Ay.button`
  ${({theme,variant,outline,size="small",padding="xxsmall"})=>styled_components_browser_esm.AH`
    cursor: pointer;
    border: ${outline?"0.2rem solid":"none"} ;
    background-color: transparent;
    font-weight: ${theme.font.weights.bold};
    border-radius: ${theme.border.radius};
    transition: ${theme.transitions.default};
    font-size: ${theme.font.sizes[size]};
    ${spacingModifier.B[padding](theme,"padding")}
    ${!!variant&&buttonVariants[variant](theme)}}
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button_Button=({children,variant="primary",size,padding,outline=!0,...props})=>(0,jsx_runtime.jsx)(Button,{size,variant,outline,padding,...props,children});Button_Button.displayName="Button";const packages_Button=Button_Button;try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"filled"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xsmall"'}]}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'},{value:'"xsmall"'},{value:'"xmini"'},{value:'"mini"'},{value:'"xxsmall"'},{value:'"xlarge"'},{value:'"xxlarge"'}]}},outline:{defaultValue:{value:"true"},description:"",name:"outline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Button/index.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/packages/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/packages/Heading/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>packages_Heading});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles=__webpack_require__("./src/styles/index.ts");const WrapperModifiers={small:theme=>styled_components_browser_esm.AH`
    font-size: ${theme.font.sizes.medium};
    &::after {
      width: 3rem;
    }
  `,medium:theme=>styled_components_browser_esm.AH`
    font-size: ${theme.font.sizes.xlarge};

    ${styles.$_.sm`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `,huge:theme=>styled_components_browser_esm.AH`
    font-size: ${theme.font.sizes.huge};
  `,lineLeft:(theme,lineColor)=>styled_components_browser_esm.AH`
    padding-left: ${theme.spacings.xsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor].medium};
  `,lineBottom:(theme,lineColor)=>styled_components_browser_esm.AH`
    position: relative;
    margin-bottom: ${theme.spacings.medium};
    &::after {
      position: absolute;
      left: 0;
      bottom: -1rem;
      content: '';
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor].medium};
    }
  `},Wrapper=styled_components_browser_esm.Ay.h2`
  ${({theme,color,lineLeft,lineBottom,lineColor,size})=>styled_components_browser_esm.AH`
    color: ${theme.colors.base[color]};

    ${lineLeft&&WrapperModifiers.lineLeft(theme,lineColor)}
    ${lineBottom&&WrapperModifiers.lineBottom(theme,lineColor)}
    ${!!size&&WrapperModifiers[size](theme)}
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Heading=({children,color="black",lineLeft=!1,lineBottom=!1,size="medium",lineColor="primary"})=>(0,jsx_runtime.jsx)(Wrapper,{lineBottom,lineLeft,color,size,lineColor,children});Heading.displayName="Heading";const packages_Heading=Heading;try{Heading.displayName="Heading",Heading.__docgenInfo={description:"",displayName:"Heading",props:{color:{defaultValue:{value:"black"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"black"'}]}},lineLeft:{defaultValue:{value:"false"},description:"",name:"lineLeft",required:!1,type:{name:"boolean"}},lineBottom:{defaultValue:{value:"false"},description:"",name:"lineBottom",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"huge"'}]}},lineColor:{defaultValue:{value:"primary"},description:"",name:"lineColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Heading/index.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"src/packages/Heading/index.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}},"./src/packages/Modal/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ModalWithFooter:()=>ModalWithFooter,ModalWithHeader:()=>ModalWithHeader,ModalWithHeaderFooter:()=>ModalWithHeaderFooter,Simple:()=>Simple,default:()=>stories});__webpack_require__("./node_modules/react/index.js");var Button=__webpack_require__("./src/packages/Button/index.tsx"),Heading=__webpack_require__("./src/packages/Heading/index.tsx"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles=__webpack_require__("./src/styles/index.ts");const modalVariants={small:()=>styled_components_browser_esm.AH`
    width: 100%;
    ${styles.$_.xs`
			width: 30rem;
    `}
  `,medium:()=>styled_components_browser_esm.AH`
    width: 100%;
    ${styles.$_.xs`
			width: 30rem;
    `}
    ${styles.$_.sm`
			width: 50rem;
    `}
  `,large:()=>styled_components_browser_esm.AH`
    width: 100%;
    ${styles.$_.xs`
			width: 30rem;
    `}
    ${styles.$_.sm`
			width: 50rem;
    `}
    ${styles.$_.md`
			width: 80rem;
    `}
  `},ModalWrapper=styled_components_browser_esm.Ay.div`
  ${({theme,size})=>styled_components_browser_esm.AH`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    & .modal-backdrop {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.1);
    }

    & .modal {
      background-color: ${theme.colors.base.white};
      top: 50%;
      left: 50%;
      display: flex;
      flex-direction: column;
      transform: translate(-50%, -50%);
      position: absolute;
      border: ${theme.border.mini} solid ${theme.colors.secondary.medium};
      box-sizing: border-box;
      ${size?modalVariants[size]():modalVariants.medium()}
    }
  `}
`,ModalBody=styled_components_browser_esm.Ay.div`
  ${({theme})=>styled_components_browser_esm.AH`
    flex-grow: 1;
    min-height: 10rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `}
`,ModalHeader=styled_components_browser_esm.Ay.div`
  ${({theme})=>styled_components_browser_esm.AH`
    width: 100%;
    font-size: ${theme.font.sizes.xlarge};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    margin-left: ${-theme.border.mini};
    border-bottom: 1px solid ${theme.colors.primary.lighter};
  `}
`,ModalFooter=styled_components_browser_esm.Ay.div`
  ${({theme,align})=>styled_components_browser_esm.AH`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${"left"===align?"flex-start":"flex-end"};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border-top: 1px solid ${theme.colors.primary.lighter};
    margin-left: ${-theme.border.mini};

    & * {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Modal_ModalHeader=({children})=>(0,jsx_runtime.jsx)(ModalHeader,{"data-testid":"modal-header",children});Modal_ModalHeader.displayName="ModalHeader";const Modal_ModalFooter=({align="right",children})=>(0,jsx_runtime.jsx)(ModalFooter,{"data-testid":"modal-footer",align,children});Modal_ModalFooter.displayName="ModalFooter";const Modal_ModalBody=({children})=>(0,jsx_runtime.jsx)(ModalBody,{children});Modal_ModalBody.displayName="ModalBody";const Modal=({open,size="medium",children,onClose})=>open?react_dom.createPortal((0,jsx_runtime.jsxs)(ModalWrapper,{size,children:[(0,jsx_runtime.jsx)("div",{className:"modal-backdrop",onClick:onClose}),(0,jsx_runtime.jsx)("div",{"data-testid":"modal",className:"modal",children})]}),document.querySelector("body")||document.createElement("div")):null,packages_Modal=Modal;try{Modal_ModalHeader.displayName="ModalHeader",Modal_ModalHeader.__docgenInfo={description:"",displayName:"ModalHeader",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Modal/index.tsx#ModalHeader"]={docgenInfo:Modal_ModalHeader.__docgenInfo,name:"ModalHeader",path:"src/packages/Modal/index.tsx#ModalHeader"})}catch(__react_docgen_typescript_loader_error){}try{Modal_ModalFooter.displayName="ModalFooter",Modal_ModalFooter.__docgenInfo={description:"",displayName:"ModalFooter",props:{align:{defaultValue:{value:"right"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Modal/index.tsx#ModalFooter"]={docgenInfo:Modal_ModalFooter.__docgenInfo,name:"ModalFooter",path:"src/packages/Modal/index.tsx#ModalFooter"})}catch(__react_docgen_typescript_loader_error){}try{Modal_ModalBody.displayName="ModalBody",Modal_ModalBody.__docgenInfo={description:"",displayName:"ModalBody",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Modal/index.tsx#ModalBody"]={docgenInfo:Modal_ModalBody.__docgenInfo,name:"ModalBody",path:"src/packages/Modal/index.tsx#ModalBody"})}catch(__react_docgen_typescript_loader_error){}try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Modal/index.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/packages/Modal/index.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}const stories={title:"Modal",component:packages_Modal,args:{open:!1},argTypes:{onClose:{action:"closed"}}},Simple=args=>(0,jsx_runtime.jsx)(packages_Modal,{...args,children:(0,jsx_runtime.jsx)(Modal_ModalBody,{children:"Modal content here"})});Simple.displayName="Simple";const ModalWithHeader=args=>(0,jsx_runtime.jsxs)(packages_Modal,{...args,children:[(0,jsx_runtime.jsx)(Modal_ModalHeader,{children:(0,jsx_runtime.jsx)(Heading.A,{children:"Title"})}),(0,jsx_runtime.jsx)(Modal_ModalBody,{children:"Modal content here"})]});ModalWithHeader.displayName="ModalWithHeader";const ModalWithFooter=args=>(0,jsx_runtime.jsxs)(packages_Modal,{...args,children:[(0,jsx_runtime.jsx)(Modal_ModalBody,{children:"Modal content here"}),(0,jsx_runtime.jsx)(Modal_ModalFooter,{children:(0,jsx_runtime.jsx)(Button.A,{children:"OK"})})]});ModalWithFooter.displayName="ModalWithFooter";const ModalWithHeaderFooter=args=>(0,jsx_runtime.jsxs)(packages_Modal,{...args,children:[(0,jsx_runtime.jsx)(Modal_ModalHeader,{children:(0,jsx_runtime.jsx)(Heading.A,{children:"Title"})}),(0,jsx_runtime.jsx)(Modal_ModalBody,{children:"Modal content here"}),(0,jsx_runtime.jsx)(Modal_ModalFooter,{children:(0,jsx_runtime.jsx)(Button.A,{children:"OK"})})]});ModalWithHeaderFooter.displayName="ModalWithHeaderFooter"},"./src/styles/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$_:()=>styles_media,w4:()=>theme.A});__webpack_require__("./src/styles/global.ts");var theme=__webpack_require__("./src/styles/theme/index.ts"),styled_components_browser_esm=(__webpack_require__("./src/styles/theme/ocean.ts"),__webpack_require__("./src/styles/theme/wine.ts"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const breakpoints={xs:"480px",sm:"768px",md:"992px",lg:"1200px"},styles_media=Object.keys(breakpoints).reduce(((acc,view)=>(acc[view]=args=>styled_components_browser_esm.AH`
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
//# sourceMappingURL=Modal-stories.234d8326.iframe.bundle.js.map