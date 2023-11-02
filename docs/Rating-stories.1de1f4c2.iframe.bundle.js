"use strict";(self.webpackChunksagu_ui=self.webpackChunksagu_ui||[]).push([[627],{"./src/packages/Rating/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const RatingContainer=styled_components_browser_esm.ZP.div`
  ${({theme})=>styled_components_browser_esm.iv`
    float: left;

    :not(:checked) > input {
      display: none;
    }

    :not(:checked) > label {
      float: right;
      width: ${theme.font.sizes.medium};
      overflow: hidden;
      white-space: nowrap;
      cursor: pointer;
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.neutral.lighter};
    }
    :not(:checked) > label:before {
      content: '★';
    }
    > input:checked ~ label {
      color: ${theme.colors.base.warning};
    }
    :not(:checked) > label:hover,
    :not(:checked) > label:hover ~ label {
      color: ${theme.colors.base.warning};
    }

    . > input:checked + label:hover,
    . > input:checked + label:hover ~ label {
      color: ${theme.colors.base.warning};
    }
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Rating=({name,value,onChange})=>{const[selectedValue,setSelectedValue]=(0,react.useState)(value),onOptionChange=event=>{const newValue=+event.target.value;onChange(newValue),setSelectedValue(newValue)};return(0,react.useEffect)((()=>{}),[selectedValue]),(0,react.useEffect)((()=>{setSelectedValue(value)}),[value]),(0,jsx_runtime.jsxs)(RatingContainer,{children:[(0,jsx_runtime.jsx)("input",{type:"radio",id:"star5",name,value:"5",checked:selectedValue>=5,onChange:onOptionChange}),(0,jsx_runtime.jsx)("label",{htmlFor:"star5",title:"5 stars",children:"5 stars"}),(0,jsx_runtime.jsx)("input",{type:"radio",id:"star4",name,value:"4",checked:4===selectedValue,onChange:onOptionChange}),(0,jsx_runtime.jsx)("label",{htmlFor:"star4",title:"4 stars",children:"4 stars"}),(0,jsx_runtime.jsx)("input",{type:"radio",id:"star3",name,value:"3",checked:3===selectedValue,onChange:onOptionChange}),(0,jsx_runtime.jsx)("label",{htmlFor:"star3",title:"3 stars",children:"3 stars"}),(0,jsx_runtime.jsx)("input",{type:"radio",id:"star2",name,value:"2",checked:2===selectedValue,onChange:onOptionChange}),(0,jsx_runtime.jsx)("label",{htmlFor:"star2",title:"2 stars",children:"2 stars"}),(0,jsx_runtime.jsx)("input",{type:"radio",id:"star1",name,value:"1",checked:1===selectedValue,onChange:onOptionChange}),(0,jsx_runtime.jsx)("label",{htmlFor:"star1",title:"1 star",children:"1 star"})]})};Rating.displayName="Rating";const packages_Rating=Rating;try{Rating.displayName="Rating",Rating.__docgenInfo={description:"",displayName:"Rating",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(newValue: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Rating/index.tsx#Rating"]={docgenInfo:Rating.__docgenInfo,name:"Rating",path:"src/packages/Rating/index.tsx#Rating"})}catch(__react_docgen_typescript_loader_error){}const stories={title:"Rating",component:packages_Rating,args:{name:"Rating",value:1,onChange:newValue=>console.log(newValue)}},Default=args=>(0,jsx_runtime.jsx)(packages_Rating,{...args});Default.displayName="Default"}}]);
//# sourceMappingURL=Rating-stories.1de1f4c2.iframe.bundle.js.map