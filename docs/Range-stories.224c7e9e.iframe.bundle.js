"use strict";(self.webpackChunksagu_ui=self.webpackChunksagu_ui||[]).push([[459],{"./src/packages/Range/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Multiple:()=>Multiple,default:()=>stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const variants_simple=(theme,min,max,val)=>styled_components_browser_esm.iv`
    background: ${theme.colors.secondary.lighter};
    background-image: linear-gradient(
      ${theme.colors.secondary.medium},
      ${theme.colors.secondary.medium}
    );
    background-size: ${100*(val-min)/(max-min)}% 100%;
    background-repeat: no-repeat;
    height: 0.3rem;
    -webkit-appearance: none;
    position: absolute;
    top: 4rem;
    left: 2.5%;
    width: 105%;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      pointer-events: all;
      position: relative;
      height: 1.6rem;
      width: 1.6rem;
      border-radius: 50%;
      cursor: pointer;
      background: ${theme.colors.secondary.medium};
      box-sizing: border-box;
    }
    &::-moz-range-thumb {
      -moz-appearance: none;
      pointer-events: all;
      position: relative;
      height: 1.6rem;
      width: 1.6rem;
      border-radius: 50%;
      border: 0.3rem solid ${theme.colors.secondary.medium};
      cursor: pointer;
      background: ${theme.colors.secondary.medium};
      box-sizing: border-box;
    }

    &:focus::-webkit-slider-thumb,
    &:focus::-moz-range-thumb {
      border: 0.4rem solid ${theme.colors.secondary.lighter};
      height: 2rem;
      width: 2rem;
    }

    &::-webkit-slider-runnable-track,
    &::-moz-range-track {
      width: 100%;
      height: 0.3rem;
      cursor: pointer;
      background: transparent;
      border-radius: 0.5rem;
    }
  `,variants_range=theme=>styled_components_browser_esm.iv`
    pointer-events: none;
    position: absolute;
    appearance: none;
    background: transparent;
    left: 0;
    top: 4rem;
    width: 100%;
    z-index: 10;
    -webkit-appearance: none;

    &:focus {
      outline: 0;
    }
    &:hover {
      cursor: pointer;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      pointer-events: all;
      position: relative;
      height: 1.6rem;
      width: 1.6rem;
      border-radius: 50%;
      background: ${theme.colors.secondary.medium};
    }
    &::-moz-range-thumb {
      -moz-appearance: none;
      pointer-events: all;
      position: relative;
      height: 1.6rem;
      width: 1.6rem;
      border-radius: 50%;
      border: none;
      background: ${theme.colors.secondary.medium};
    }

    &:focus::-moz-range-thumb,
    &:focus::-webkit-slider-thumb {
      border: 0.4rem solid ${theme.colors.secondary.lighter};
      height: 2rem;
      width: 2rem;
    }
  `,RangeWrapper=styled_components_browser_esm.ZP.div`
  ${({theme,min,max,value,width})=>styled_components_browser_esm.iv`
    width: ${width}px;
    position: relative;
    margin: 0 auto 2rem;
    height: 3.5rem;
    text-align: center;

    & input[type='range'] {
      &:focus {
        outline: none;
      }
      ${Array.isArray(value)?variants_range(theme):variants_simple(theme,min,max,value)}
    }

    & .range-progress {
      position: absolute;
      display: flex;
      top: 4.7rem;
      width: 100%;
      height: 0.3rem;
      --max: 0;
      --min: 0;
      --full: ${max};
      background-color: ${theme.colors.secondary.lighter};

      &::before {
        content: '';
        width: calc(((var(--min) / var(--full)) * 100%));
        background-color: ${theme.colors.secondary.lighter};
      }

      &::after {
        content: '';
        width: calc(((var(--max) - var(--min)) / var(--full) * 100%));
        background-color: ${theme.colors.secondary.medium};
      }
    }
  `}
`,InputLabel=styled_components_browser_esm.ZP.span`
  ${({theme,value,isMultiple})=>styled_components_browser_esm.iv`
    left: calc(
      ${value}% - ${Number(value)*(isMultiple?26:6)/1e3}rem
    );
    top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 0.5rem;
    position: absolute;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.weights.semiBold};
    color: ${theme.colors.base.white};
    background: ${theme.colors.neutral.dark};
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Range=({value,min,max,step=1,width=200,onChange})=>{const simpleRangeRef=(0,react.useRef)(null),range1Ref=(0,react.useRef)(null),range2Ref=(0,react.useRef)(null),rangeProgressBar=(0,react.useRef)(null),[rangeValue,setRangeValue]=(0,react.useState)(value),[hasFocus,setHasFocus]=(0,react.useState)(),[labelValue,setLabelValue]=(0,react.useState)(0);(0,react.useEffect)((()=>{value&&setRangeValue(value)}),[value]);const multipleRangeHandler=(0,react.useCallback)((event=>{event?.target&&(event.target===range1Ref.current?setLabelValue(Number(range1Ref.current?.value)):setLabelValue(Number(range2Ref.current?.value)));const minValue=Math.min(Number(range1Ref.current?.value),Number(range2Ref.current?.value)),maxValue=Math.max(Number(range1Ref.current?.value),Number(range2Ref.current?.value));rangeProgressBar.current?.style.setProperty("--min",String(minValue)),rangeProgressBar.current?.style.setProperty("--max",String(maxValue)),setRangeValue([Number(range1Ref.current?.value),Number(range2Ref.current?.value)]),onChange([Number(range1Ref.current?.value),Number(range2Ref.current?.value)])}),[onChange]),onBlurHandler=(0,react.useCallback)((()=>{setHasFocus(!1)}),[]),onFocusHandler=(0,react.useCallback)((()=>{setHasFocus(!0)}),[]);return(0,react.useEffect)((()=>{Array.isArray(value)&&multipleRangeHandler()}),[value,multipleRangeHandler]),(0,jsx_runtime.jsxs)(RangeWrapper,{"data-testid":"range",width,min,max,value:rangeValue,children:[hasFocus&&(0,jsx_runtime.jsx)(InputLabel,{isMultiple:Array.isArray(rangeValue),value:labelValue,children:labelValue}),Array.isArray(rangeValue)?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("input",{type:"range",value:rangeValue[0],step,min,max,ref:range1Ref,onChange:multipleRangeHandler,onBlur:onBlurHandler,onFocus:onFocusHandler}),(0,jsx_runtime.jsx)("input",{type:"range",value:rangeValue[1],step,min,max,ref:range2Ref,onChange:multipleRangeHandler,onBlur:onBlurHandler,onFocus:onFocusHandler}),(0,jsx_runtime.jsx)("div",{ref:rangeProgressBar,className:"range-progress"})]}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("input",{onChange:event=>{simpleRangeRef.current?.style.setProperty("--val",event.target.value),setRangeValue(Number(event.target.value)),setLabelValue(Number(event.target.value)),onChange(Number(event.target.value))},type:"range",value:rangeValue,step,ref:simpleRangeRef,min,max,onBlur:onBlurHandler,onFocus:onFocusHandler})})]})};Range.displayName="Range";const packages_Range=Range;try{Range.displayName="Range",Range.__docgenInfo={description:"",displayName:"Range",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number | [number, number]"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},width:{defaultValue:{value:"200"},description:"",name:"width",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(a: number | [number, number]) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Range/index.tsx#Range"]={docgenInfo:Range.__docgenInfo,name:"Range",path:"src/packages/Range/index.tsx#Range"})}catch(__react_docgen_typescript_loader_error){}const stories={title:"Range",component:packages_Range,args:{value:50,min:0,max:100,step:1,width:200}},Template=args=>(0,jsx_runtime.jsx)(packages_Range,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={value:50,min:0,max:100,step:1,width:200};const Multiple=Template.bind({});Multiple.args={value:[25,75],min:0,max:100,step:1,width:200};try{Default.displayName="Default",Default.__docgenInfo={description:"",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Range/stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"src/packages/Range/stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}try{Multiple.displayName="Multiple",Multiple.__docgenInfo={description:"",displayName:"Multiple",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/packages/Range/stories.tsx#Multiple"]={docgenInfo:Multiple.__docgenInfo,name:"Multiple",path:"src/packages/Range/stories.tsx#Multiple"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=Range-stories.224c7e9e.iframe.bundle.js.map