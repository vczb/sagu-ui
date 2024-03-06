"use strict";(self.webpackChunksagu_ui=self.webpackChunksagu_ui||[]).push([[897],{"./src/packages/Table/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Table=styled_components_browser_esm.Ay.table`
  ${({theme})=>styled_components_browser_esm.AH`
    width: 100%;
    border-collapse: collapse;
    border-width: ${theme.border.xxsmall}
    border-style: solid;
    border-color: ${theme.colors.primary.light};
    `}
`,TableHead=styled_components_browser_esm.Ay.thead`
  ${({theme})=>styled_components_browser_esm.AH`
    background-color: ${theme.colors.primary.light};
  `}
`,TableHeaderCell=styled_components_browser_esm.Ay.th`
  ${({theme})=>styled_components_browser_esm.AH`
    padding: ${theme.spacings.xxsmall};
    border: ${theme.border.mini} solid ${theme.colors.primary.dark};
  `}
`,TableBody=styled_components_browser_esm.Ay.tbody``,TableCell=styled_components_browser_esm.Ay.td`
  ${({theme})=>styled_components_browser_esm.AH`
    padding: ${theme.spacings.xxsmall};
    border: ${theme.border.mini} solid ${theme.colors.primary.dark};
    background-color: ${theme.colors.neutral.lighter};
    text-align: center;
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Table_Table=({columns,data})=>(0,jsx_runtime.jsxs)(Table,{children:[(0,jsx_runtime.jsx)(TableHead,{children:columns.map((column=>(0,jsx_runtime.jsx)(TableHeaderCell,{children:column.title},column.key)))}),(0,jsx_runtime.jsx)(TableBody,{children:data.map(((row,index)=>(0,jsx_runtime.jsx)("tr",{children:columns.map((column=>(0,jsx_runtime.jsx)(TableCell,{children:row[column.key]},column.key)))},index)))})]});Table_Table.displayName="Table";const packages_Table=Table_Table;try{Table_Table.displayName="Table",Table_Table.__docgenInfo={description:"",displayName:"Table",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"TableRow[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Table/index.tsx#Table"]={docgenInfo:Table_Table.__docgenInfo,name:"Table",path:"src/packages/Table/index.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}const stories={title:"Table",component:packages_Table},Template=args=>(0,jsx_runtime.jsx)(packages_Table,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={columns:[{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Country",key:"country"}],data:[{name:"John",age:30,country:"USA"},{name:"Alice",age:25,country:"Canada"},{name:"Bob",age:35,country:"UK"}]}}}]);
//# sourceMappingURL=Table-stories.b7e180fb.iframe.bundle.js.map