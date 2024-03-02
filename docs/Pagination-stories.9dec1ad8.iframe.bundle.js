"use strict";(self.webpackChunksagu_ui=self.webpackChunksagu_ui||[]).push([[735],{"./src/packages/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>packages_Button});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),spacingModifier=__webpack_require__("./src/styles/spacingModifier.ts");const buttonVariants={primary:theme=>styled_components_browser_esm.AH`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button_Button=({children,variant="primary",size,padding,outline=!0,...props})=>(0,jsx_runtime.jsx)(Button,{size,variant,outline,padding,...props,children});Button_Button.displayName="Button";const packages_Button=Button_Button;try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"filled"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xsmall"'}]}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'},{value:'"xsmall"'},{value:'"xmini"'},{value:'"mini"'},{value:'"xxsmall"'},{value:'"xlarge"'},{value:'"xxlarge"'}]}},outline:{defaultValue:{value:"true"},description:"",name:"outline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Button/index.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/packages/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/packages/Pagination/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>stories});var react=__webpack_require__("./node_modules/react/index.js");const range=(start,end)=>{const length=end-start+1;return Array.from({length},((_,idx)=>idx+start))},usePagination=({totalCount,pageSize,siblingCount=1,currentPage})=>(0,react.useMemo)((()=>{const totalPageCount=Math.ceil(totalCount/pageSize);if(siblingCount+5>=totalPageCount)return range(1,totalPageCount);const leftSiblingIndex=Math.max(currentPage-siblingCount,1),rightSiblingIndex=Math.min(currentPage+siblingCount,totalPageCount),shouldShowLeftDots=leftSiblingIndex>2,shouldShowRightDots=rightSiblingIndex<totalPageCount-2,lastPageIndex=totalPageCount;if(!shouldShowLeftDots&&shouldShowRightDots){return[...range(1,3+2*siblingCount),0,totalPageCount]}if(shouldShowLeftDots&&!shouldShowRightDots){return[1,0,...range(totalPageCount-(3+2*siblingCount)+1,totalPageCount)]}if(shouldShowLeftDots&&shouldShowRightDots){return[1,0,...range(leftSiblingIndex,rightSiblingIndex),0,lastPageIndex]}}),[totalCount,pageSize,siblingCount,currentPage]);try{usePagination.displayName="usePagination",usePagination.__docgenInfo={description:"",displayName:"usePagination",props:{totalCount:{defaultValue:null,description:"",name:"totalCount",required:!0,type:{name:"number"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!0,type:{name:"number"}},siblingCount:{defaultValue:{value:"1"},description:"",name:"siblingCount",required:!1,type:{name:"number"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/pagination/index.tsx#usePagination"]={docgenInfo:usePagination.__docgenInfo,name:"usePagination",path:"src/hooks/pagination/index.tsx#usePagination"})}catch(__react_docgen_typescript_loader_error){}var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Button=__webpack_require__("./src/packages/Button/index.tsx");const figureArrowModifiers={left:()=>styled_components_browser_esm.AH`
    transform: rotate(-135deg) translate(-50%);
  `,right:()=>styled_components_browser_esm.AH`
    transform: rotate(45deg);
  `},Container=styled_components_browser_esm.Ay.ul`
  display: flex;
  list-style-type: none;
`,Item=(0,styled_components_browser_esm.Ay)(Button.A)`
  ${({disabled})=>styled_components_browser_esm.AH`
    ${disabled?"pointer-events: none;":""}
  `}
`,Arrow=styled_components_browser_esm.Ay.div`
  ${({theme,direction,disabled})=>styled_components_browser_esm.AH`
    :before {
      position: relative;
      content: '';
      display: block;
      width: 0.8rem;
      height: 0.8rem;
      border-right: 0.12rem solid ${theme.colors.base.black};
      border-top: 0.12rem solid ${theme.colors.base.black};
      visibility: ${disabled?"hidden":"visible"};
      ${figureArrowModifiers[direction]}
      top: ${"left"===direction?"-0.2rem":"unset"};
    }
  `}
`,Dots=(0,styled_components_browser_esm.Ay)(Item)`
  pointer-events: none;
`;try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLUListElement | null) => void) | RefObject<HTMLUListElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Pagination/styles.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/packages/Pagination/styles.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}try{Item.displayName="Item",Item.__docgenInfo={description:"",displayName:"Item",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xsmall"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"filled"'}]}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'},{value:'"xsmall"'},{value:'"xmini"'},{value:'"mini"'},{value:'"xxsmall"'},{value:'"xlarge"'},{value:'"xxlarge"'}]}},outline:{defaultValue:null,description:"",name:"outline",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Pagination/styles.tsx#Item"]={docgenInfo:Item.__docgenInfo,name:"Item",path:"src/packages/Pagination/styles.tsx#Item"})}catch(__react_docgen_typescript_loader_error){}try{Arrow.displayName="Arrow",Arrow.__docgenInfo={description:"",displayName:"Arrow",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Pagination/styles.tsx#Arrow"]={docgenInfo:Arrow.__docgenInfo,name:"Arrow",path:"src/packages/Pagination/styles.tsx#Arrow"})}catch(__react_docgen_typescript_loader_error){}try{Dots.displayName="Dots",Dots.__docgenInfo={description:"",displayName:"Dots",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xsmall"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"filled"'}]}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'},{value:'"xsmall"'},{value:'"xmini"'},{value:'"mini"'},{value:'"xxsmall"'},{value:'"xlarge"'},{value:'"xxlarge"'}]}},outline:{defaultValue:null,description:"",name:"outline",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Pagination/styles.tsx#Dots"]={docgenInfo:Dots.__docgenInfo,name:"Dots",path:"src/packages/Pagination/styles.tsx#Dots"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Pagination=({className,totalCount,currentPage,pageSize,onPageChange,siblingCount=1})=>{const paginationRange=usePagination({currentPage,totalCount,siblingCount,pageSize});if(0===currentPage||paginationRange&&paginationRange.length<2)return null;const lastPage=paginationRange&&paginationRange[paginationRange.length-1];return(0,jsx_runtime.jsxs)(Container,{className,children:[(0,jsx_runtime.jsx)(Item,{disabled:1===currentPage,onClick:()=>{currentPage>1&&onPageChange(currentPage-1)},outline:!1,children:(0,jsx_runtime.jsx)(Arrow,{direction:"left",disabled:1===currentPage})}),paginationRange?.map(((pageNumber,index)=>0===pageNumber?(0,jsx_runtime.jsx)(Dots,{outline:!1,children:"…"},index):(0,jsx_runtime.jsx)(Item,{onClick:()=>onPageChange(pageNumber),outline:pageNumber===currentPage,variant:pageNumber===currentPage?"secondary":"primary",children:pageNumber},index))),(0,jsx_runtime.jsx)(Item,{disabled:currentPage===lastPage,onClick:()=>{currentPage<Math.ceil(totalCount/pageSize)&&onPageChange(currentPage+1)},outline:!1,children:(0,jsx_runtime.jsx)(Arrow,{direction:"right",disabled:currentPage===lastPage})})]})};Pagination.displayName="Pagination";const packages_Pagination=Pagination;try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"",displayName:"Pagination",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},totalCount:{defaultValue:null,description:"",name:"totalCount",required:!0,type:{name:"number"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!0,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!0,type:{name:"(page: number) => void"}},siblingCount:{defaultValue:{value:"1"},description:"",name:"siblingCount",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Pagination/index.tsx#Pagination"]={docgenInfo:Pagination.__docgenInfo,name:"Pagination",path:"src/packages/Pagination/index.tsx#Pagination"})}catch(__react_docgen_typescript_loader_error){}const stories={title:"Pagination",component:packages_Pagination,args:{totalCount:100,currentPage:1,pageSize:10,siblingCount:1}},Template=args=>{const[currentPage,setCurrentPage]=(0,react.useState)(args.currentPage);return(0,react.useEffect)((()=>{setCurrentPage(args.currentPage)}),[args.currentPage]),(0,jsx_runtime.jsx)(packages_Pagination,{...args,currentPage,onPageChange:page=>{setCurrentPage(page)}})};Template.displayName="Template";const Default=Template.bind({});Default.args={totalCount:100,currentPage:1,pageSize:10,siblingCount:1};try{Default.displayName="Default",Default.__docgenInfo={description:"",displayName:"Default",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},totalCount:{defaultValue:null,description:"",name:"totalCount",required:!0,type:{name:"number"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!0,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!0,type:{name:"(page: number) => void"}},siblingCount:{defaultValue:null,description:"",name:"siblingCount",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Pagination/stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"src/packages/Pagination/stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}},"./src/styles/spacingModifier.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>spacingModifier});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const spacingModifier={none:(theme,attribute)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
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
//# sourceMappingURL=Pagination-stories.9dec1ad8.iframe.bundle.js.map