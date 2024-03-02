"use strict";(self.webpackChunksagu_ui=self.webpackChunksagu_ui||[]).push([[618],{"./src/animations/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>animations_placeholder});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles=__webpack_require__("./src/styles/index.ts");const animations_placeholder=styled_components_browser_esm.AH`
  color: ${styles.w4.colors.neutral.lighter};
  background-image: linear-gradient(
    to right,
    currentColor 0%,
    ${styles.w4.colors.neutral.medium} 20%,
    currentColor 40%,
    currentColor 100%
  );
  background-size: 80rem 14rem;
  animation: placeholder 1s linear infinite forwards;

  @keyframes placeholder {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`},"./src/packages/Skeleton/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Circular:()=>Circular,Rectangular:()=>Rectangular,Rounded:()=>Rounded,Text:()=>Text,default:()=>stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),animations=__webpack_require__("./src/animations/index.ts");const figureModifiers={text:fontSize=>styled_components_browser_esm.AH`
    > * {
      font-size: ${fontSize};
    }
  `,circular:()=>styled_components_browser_esm.AH`
    border-radius: 50%;
  `,rectangular:()=>styled_components_browser_esm.AH``,rounded:()=>styled_components_browser_esm.AH`
    border-radius: 10px;
  `},Skeleton=styled_components_browser_esm.Ay.div`
  ${({variant,width,height,fontSize})=>styled_components_browser_esm.AH`
    width: ${width?`${width}px`:"fit-content"};
    height: ${height?`${height}px`:"fit-content"};
    > * {
      visibility: hidden;
      opacity: 0;
    }
    ${figureModifiers[variant](fontSize)}
    ${animations.q}
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let SkeletonVariant=function(SkeletonVariant){return SkeletonVariant.TEXT="text",SkeletonVariant.CIRCULAR="circular",SkeletonVariant.RECTANGULAR="rectangular",SkeletonVariant.ROUNDED="rounded",SkeletonVariant}({});const Skeleton_Skeleton=({children,variant,width,height,fontSize})=>(0,jsx_runtime.jsx)(Skeleton,{variant,width,height,fontSize,children});Skeleton_Skeleton.displayName="Skeleton";const packages_Skeleton=Skeleton_Skeleton;try{Skeleton_Skeleton.displayName="Skeleton",Skeleton_Skeleton.__docgenInfo={description:"",displayName:"Skeleton",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"text"'},{value:'"circular"'},{value:'"rectangular"'},{value:'"rounded"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Skeleton/index.tsx#Skeleton"]={docgenInfo:Skeleton_Skeleton.__docgenInfo,name:"Skeleton",path:"src/packages/Skeleton/index.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}const stories={title:"Skeleton",component:packages_Skeleton,args:{}},Text=args=>(0,jsx_runtime.jsxs)("div",{children:["Skeleton Text",(0,jsx_runtime.jsx)(packages_Skeleton,{...args,variant:SkeletonVariant.TEXT,fontSize:"5rem",children:(0,jsx_runtime.jsx)("p",{children:"Skeleton Text"})}),"Skeleton Text with Width",(0,jsx_runtime.jsx)(packages_Skeleton,{...args,variant:SkeletonVariant.TEXT,width:70,children:(0,jsx_runtime.jsx)("p",{children:"Skeleton Text with Width"})}),"Skeleton Text with Height",(0,jsx_runtime.jsx)(packages_Skeleton,{...args,variant:SkeletonVariant.TEXT,height:50,children:(0,jsx_runtime.jsx)("p",{children:"Skeleton Text with Height"})}),"Skeleton Text with Width and Height",(0,jsx_runtime.jsx)(packages_Skeleton,{...args,variant:SkeletonVariant.TEXT,width:100,height:30,children:(0,jsx_runtime.jsx)("p",{children:"Skeleton Text with Width and Height"})})]});Text.displayName="Text";const Circular=args=>(0,jsx_runtime.jsxs)("div",{children:["Skeleton Circular with an 150x150 image inside",(0,jsx_runtime.jsx)(packages_Skeleton,{...args,variant:SkeletonVariant.CIRCULAR,children:(0,jsx_runtime.jsx)("img",{src:"https://via.placeholder.com/150",alt:"placeholder"})}),"Skeleton Circular with Width and Height",(0,jsx_runtime.jsx)(packages_Skeleton,{...args,variant:SkeletonVariant.CIRCULAR,width:100,height:100,children:(0,jsx_runtime.jsx)("p",{children:"Skeleton Circular with Width and Height"})})]});Circular.displayName="Circular";const Rectangular=args=>(0,jsx_runtime.jsxs)("div",{children:["Skeleton Rectangular",(0,jsx_runtime.jsx)(packages_Skeleton,{...args,variant:SkeletonVariant.RECTANGULAR,children:(0,jsx_runtime.jsx)("p",{children:"Skeleton Rectangular"})}),"Skeleton Rectangular with Width",(0,jsx_runtime.jsx)(packages_Skeleton,{...args,variant:SkeletonVariant.RECTANGULAR,width:170,children:(0,jsx_runtime.jsx)("p",{children:"Skeleton Rectangular with Width"})}),"Skeleton Rectangular with Height",(0,jsx_runtime.jsx)(packages_Skeleton,{...args,variant:SkeletonVariant.RECTANGULAR,height:50,children:(0,jsx_runtime.jsx)("p",{children:"Skeleton Rectangular with Height"})}),"Skeleton Rectangular with Width and Height",(0,jsx_runtime.jsx)(packages_Skeleton,{...args,variant:SkeletonVariant.RECTANGULAR,width:300,height:30,children:(0,jsx_runtime.jsx)("p",{children:"Skeleton Rectangular with Width and Height"})}),"Skeleton Rectangular with an 150x100 image inside",(0,jsx_runtime.jsx)(packages_Skeleton,{...args,variant:SkeletonVariant.ROUNDED,children:(0,jsx_runtime.jsx)("img",{src:"https://via.placeholder.com/150x100",alt:"placeholder"})})]});Rectangular.displayName="Rectangular";const Rounded=args=>(0,jsx_runtime.jsxs)("div",{children:["Skeleton Rounded",(0,jsx_runtime.jsx)(packages_Skeleton,{...args,variant:SkeletonVariant.ROUNDED,children:(0,jsx_runtime.jsx)("p",{children:"Skeleton Rounded"})}),"Skeleton Rounded with Width",(0,jsx_runtime.jsx)(packages_Skeleton,{...args,variant:SkeletonVariant.ROUNDED,width:70,children:(0,jsx_runtime.jsx)("p",{children:"Skeleton Rounded with Width"})}),"Skeleton Rounded with Height",(0,jsx_runtime.jsx)(packages_Skeleton,{...args,variant:SkeletonVariant.ROUNDED,height:50,children:(0,jsx_runtime.jsx)("p",{children:"Skeleton Rounded with Height"})}),"Skeleton Rounded with Width and Height",(0,jsx_runtime.jsx)(packages_Skeleton,{...args,variant:SkeletonVariant.ROUNDED,width:100,height:30,children:(0,jsx_runtime.jsx)("p",{children:"Skeleton Rounded with Width and Height"})}),"Skeleton Rounded with an 150x150 image inside",(0,jsx_runtime.jsx)(packages_Skeleton,{...args,variant:SkeletonVariant.ROUNDED,children:(0,jsx_runtime.jsx)("img",{src:"https://via.placeholder.com/150",alt:"placeholder"})})]});Rounded.displayName="Rounded"},"./src/styles/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$_:()=>styles_media,w4:()=>theme.A});__webpack_require__("./src/styles/global.ts");var theme=__webpack_require__("./src/styles/theme/index.ts"),styled_components_browser_esm=(__webpack_require__("./src/styles/theme/ocean.ts"),__webpack_require__("./src/styles/theme/wine.ts"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const breakpoints={xs:"480px",sm:"768px",md:"992px",lg:"1200px"},styles_media=Object.keys(breakpoints).reduce(((acc,view)=>(acc[view]=args=>styled_components_browser_esm.AH`
    @media (min-width: ${breakpoints[view]}) {
      ${args};
    }
  `,acc)),{})}}]);
//# sourceMappingURL=Skeleton-stories.bd98e277.iframe.bundle.js.map