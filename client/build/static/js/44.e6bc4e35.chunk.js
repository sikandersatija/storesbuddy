(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{2524:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(14),i=t(16),s=t(151),o=t(5),c=t(360),u=t(1707),p=t.n(u),b=t(2496),d=t(1339),g=t(565),m=t(1700),h=t(264),f=t(1478),v=t(1600),B=[{label:"Afghanistan"},{label:"Aland Islands"},{label:"Albania"},{label:"Algeria"},{label:"American Samoa"},{label:"Andorra"},{label:"Angola"},{label:"Anguilla"},{label:"Antarctica"},{label:"Antigua and Barbuda"},{label:"Argentina"},{label:"Armenia"},{label:"Aruba"},{label:"Australia"},{label:"Austria"},{label:"Azerbaijan"},{label:"Bahamas"},{label:"Bahrain"},{label:"Bangladesh"},{label:"Barbados"},{label:"Belarus"},{label:"Belgium"},{label:"Belize"},{label:"Benin"},{label:"Bermuda"},{label:"Bhutan"},{label:"Bolivia, Plurinational State of"},{label:"Bonaire, Sint Eustatius and Saba"},{label:"Bosnia and Herzegovina"},{label:"Botswana"},{label:"Bouvet Island"},{label:"Brazil"},{label:"British Indian Ocean Territory"},{label:"Brunei Darussalam"}];function P(e){var a=e.InputProps,t=e.classes,n=e.ref,r=Object(c.a)(e,["InputProps","classes","ref"]);return l.a.createElement(g.a,Object.assign({InputProps:Object(o.a)({inputRef:n,classes:{root:t.inputRoot,input:t.inputInput}},a)},r))}function E(e){var a=e.suggestion,t=e.index,n=e.itemProps,r=e.highlightedIndex===t,i=(e.selectedItem||"").indexOf(a.label)>-1;return l.a.createElement(f.a,Object.assign({},n,{key:a.label,selected:r,component:"div",style:{fontWeight:i?500:400}}),a.label)}function I(e){var a=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).showEmpty,t=void 0!==a&&a,n=p()(e.trim()).toLowerCase(),l=n.length,r=0;return 0!==l||t?B.filter(function(e){var a=r<5&&e.label.slice(0,l).toLowerCase()===n;return a&&(r+=1),a}):[]}function O(e){var a=e.classes,t=l.a.useState(""),n=Object(s.a)(t,2),r=n[0],o=n[1],u=l.a.useState([]),p=Object(s.a)(u,2),d=p[0],g=p[1];function m(e){d.length&&!r.length&&"Backspace"===e.key&&g(d.slice(0,d.length-1))}var f=function(e){return function(){var a=Object(i.a)(d);a.splice(a.indexOf(e),1),g(a)}};return l.a.createElement(b.a,{id:"downshift-multiple",inputValue:r,onChange:function(e){var a=Object(i.a)(d);-1===a.indexOf(e)&&(a=[].concat(Object(i.a)(a),[e])),o(""),g(a)},selectedItem:d},function(e){var t=e.getInputProps,n=e.getItemProps,r=e.getLabelProps,i=e.isOpen,s=e.inputValue,u=e.selectedItem,p=e.highlightedIndex,b=t({onKeyDown:m,placeholder:"Select multiple countries"}),g=b.onBlur,B=b.onChange,O=b.onFocus,A=Object(c.a)(b,["onBlur","onChange","onFocus"]);return l.a.createElement("div",{className:a.container},P({fullWidth:!0,classes:a,label:"Countries",InputLabelProps:r(),InputProps:{startAdornment:d.map(function(e){return l.a.createElement(v.a,{key:e,tabIndex:-1,label:e,className:a.chip,onDelete:f(e)})}),onBlur:g,onChange:function(e){!function(e){o(e.target.value)}(e),B(e)},onFocus:O},inputProps:A}),i?l.a.createElement(h.a,{className:a.paper,square:!0},I(s).map(function(e,a){return E({suggestion:e,index:a,itemProps:n({item:e.label}),highlightedIndex:p,selectedItem:u})})):null)})}var A,j=Object(d.a)(function(e){return{root:{flexGrow:1,height:250},container:{flexGrow:1,position:"relative"},paper:{position:"absolute",zIndex:1,marginTop:e.spacing(1),left:0,right:0},chip:{margin:e.spacing(.5,.25)},inputRoot:{flexWrap:"wrap"},inputInput:{width:"auto",flexGrow:1},divider:{height:e.spacing(2)}}});function x(){var e=j();return l.a.createElement("div",{className:e.root},l.a.createElement(b.a,{id:"downshift-simple"},function(a){var t=a.getInputProps,n=a.getItemProps,r=a.getLabelProps,i=a.getMenuProps,s=a.highlightedIndex,o=a.inputValue,u=a.isOpen,p=a.selectedItem,b=t({placeholder:"Search for a country (start with a)"}),d=b.onBlur,g=b.onFocus,m=Object(c.a)(b,["onBlur","onFocus"]);return l.a.createElement("div",{className:e.container},P({fullWidth:!0,classes:e,label:"Country",InputLabelProps:r({shrink:!0}),InputProps:{onBlur:d,onFocus:g},inputProps:m}),l.a.createElement("div",i(),u?l.a.createElement(h.a,{className:e.paper,square:!0},I(o).map(function(e,a){return E({suggestion:e,index:a,itemProps:n({item:e.label}),highlightedIndex:s,selectedItem:p})})):null))}),l.a.createElement("div",{className:e.divider}),l.a.createElement(O,{classes:e}),l.a.createElement("div",{className:e.divider}),l.a.createElement(b.a,{id:"downshift-popper"},function(a){var t=a.getInputProps,n=a.getItemProps,r=a.getLabelProps,i=a.getMenuProps,s=a.highlightedIndex,o=a.inputValue,u=a.isOpen,p=a.selectedItem,b=t({placeholder:"With Popper"}),d=b.onBlur,g=b.onFocus,f=Object(c.a)(b,["onBlur","onFocus"]);return l.a.createElement("div",{className:e.container},P({fullWidth:!0,classes:e,label:"Country",InputProps:{onBlur:d,onFocus:g},InputLabelProps:r({shrink:!0}),inputProps:f,ref:function(e){A=e}}),l.a.createElement(m.a,{open:u,anchorEl:A},l.a.createElement("div",u?i({},{suppressRefError:!0}):{},l.a.createElement(h.a,{square:!0,style:{marginTop:8,width:A?A.clientWidth:void 0}},I(o).map(function(e,a){return E({suggestion:e,index:a,itemProps:n({item:e.label}),highlightedIndex:s,selectedItem:p})})))))}),l.a.createElement("div",{className:e.divider}),l.a.createElement(b.a,{id:"downshift-options"},function(a){var t=a.clearSelection,n=a.getInputProps,r=a.getItemProps,i=a.getLabelProps,s=a.getMenuProps,o=a.highlightedIndex,u=a.inputValue,p=a.isOpen,b=a.openMenu,d=a.selectedItem,g=n({onChange:function(e){""===e.target.value&&t()},onFocus:b,placeholder:"With the clear & show empty options"}),m=g.onBlur,f=g.onChange,v=g.onFocus,B=Object(c.a)(g,["onBlur","onChange","onFocus"]);return l.a.createElement("div",{className:e.container},P({fullWidth:!0,classes:e,label:"Countries",InputLabelProps:i({shrink:!0}),InputProps:{onBlur:m,onChange:f,onFocus:v},inputProps:B}),l.a.createElement("div",s(),p?l.a.createElement(h.a,{className:e.paper,square:!0},I(u,{showEmpty:!0}).map(function(e,a){return E({suggestion:e,index:a,itemProps:r({item:e.label}),highlightedIndex:o,selectedItem:d})})):null))}))}var y=t(112),S=t(8),C=t(1818),w=t(32),N=t(53),F=t(610),L=t(1618),z=t(2037),k=t.n(z),W=[{label:"Afghanistan"},{label:"Aland Islands"},{label:"Albania"},{label:"Algeria"},{label:"American Samoa"},{label:"Andorra"},{label:"Angola"},{label:"Anguilla"},{label:"Antarctica"},{label:"Antigua and Barbuda"},{label:"Argentina"},{label:"Armenia"},{label:"Aruba"},{label:"Australia"},{label:"Austria"},{label:"Azerbaijan"},{label:"Bahamas"},{label:"Bahrain"},{label:"Bangladesh"},{label:"Barbados"},{label:"Belarus"},{label:"Belgium"},{label:"Belize"},{label:"Benin"},{label:"Bermuda"},{label:"Bhutan"},{label:"Bolivia, Plurinational State of"},{label:"Bonaire, Sint Eustatius and Saba"},{label:"Bosnia and Herzegovina"},{label:"Botswana"},{label:"Bouvet Island"},{label:"Brazil"},{label:"British Indian Ocean Territory"},{label:"Brunei Darussalam"}].map(function(e){return{value:e.label,label:e.label}}),R=Object(d.a)(function(e){return{root:{flexGrow:1,height:250},input:{display:"flex",padding:0,height:"auto"},valueContainer:{display:"flex",flexWrap:"wrap",flex:1,alignItems:"center",overflow:"hidden"},chip:{margin:e.spacing(.5,.25)},chipFocused:{backgroundColor:Object(w.c)("light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],.08)},noOptionsMessage:{padding:e.spacing(1,2)},singleValue:{fontSize:16},placeholder:{position:"absolute",left:2,bottom:6,fontSize:16},paper:{position:"absolute",zIndex:1,marginTop:e.spacing(1),left:0,right:0},divider:{height:e.spacing(2)}}});function V(e){var a=e.inputRef,t=Object(c.a)(e,["inputRef"]);return l.a.createElement("div",Object.assign({ref:a},t))}var M={Control:function(e){var a=e.children,t=e.innerProps,n=e.innerRef,r=e.selectProps,i=r.classes,s=r.TextFieldProps;return l.a.createElement(g.a,Object.assign({fullWidth:!0,InputProps:{inputComponent:V,inputProps:Object(o.a)({className:i.input,ref:n,children:a},t)}},s))},Menu:function(e){return l.a.createElement(h.a,Object.assign({square:!0,className:e.selectProps.classes.paper},e.innerProps),e.children)},MultiValue:function(e){return l.a.createElement(v.a,{tabIndex:-1,label:e.children,className:Object(S.a)(e.selectProps.classes.chip,Object(y.a)({},e.selectProps.classes.chipFocused,e.isFocused)),onDelete:e.removeProps.onClick,deleteIcon:l.a.createElement(k.a,e.removeProps)})},NoOptionsMessage:function(e){return l.a.createElement(F.a,Object.assign({color:"textSecondary",className:e.selectProps.classes.noOptionsMessage},e.innerProps),e.children)},Option:function(e){return l.a.createElement(f.a,Object.assign({ref:e.innerRef,selected:e.isFocused,component:"div",style:{fontWeight:e.isSelected?500:400}},e.innerProps),e.children)},Placeholder:function(e){return l.a.createElement(F.a,Object.assign({color:"textSecondary",className:e.selectProps.classes.placeholder},e.innerProps),e.children)},SingleValue:function(e){return l.a.createElement(F.a,Object.assign({className:e.selectProps.classes.singleValue},e.innerProps),e.children)},ValueContainer:function(e){return l.a.createElement("div",{className:e.selectProps.classes.valueContainer},e.children)}};function T(){var e=R(),a=Object(N.a)(),t=l.a.useState(null),n=Object(s.a)(t,2),r=n[0],i=n[1],c=l.a.useState(null),u=Object(s.a)(c,2),p=u[0],b=u[1];var d={input:function(e){return Object(o.a)(Object(o.a)({},e),{},{color:a.palette.text.primary,"& input":{font:"inherit"}})}};return l.a.createElement("div",{className:e.root},l.a.createElement(L.a,null,l.a.createElement(C.a,{classes:e,styles:d,inputId:"react-select-single",TextFieldProps:{label:"Country",InputLabelProps:{htmlFor:"react-select-single",shrink:!0},placeholder:"Search a country (start with a)"},options:W,components:M,value:r,onChange:function(e){i(e)}}),l.a.createElement("div",{className:e.divider}),l.a.createElement(C.a,{classes:e,styles:d,inputId:"react-select-multiple",TextFieldProps:{label:"Countries",InputLabelProps:{htmlFor:"react-select-multiple",shrink:!0},placeholder:"Select multiple countries"},options:W,components:M,value:p,onChange:function(e){b(e)},isMulti:!0})))}var q=t(2039),D=t.n(q),G=t(2051),H=t.n(G),J=t(2053),K=t.n(J),Q=[{label:"Afghanistan"},{label:"Aland Islands"},{label:"Albania"},{label:"Algeria"},{label:"American Samoa"},{label:"Andorra"},{label:"Angola"},{label:"Anguilla"},{label:"Antarctica"},{label:"Antigua and Barbuda"},{label:"Argentina"},{label:"Armenia"},{label:"Aruba"},{label:"Australia"},{label:"Austria"},{label:"Azerbaijan"},{label:"Bahamas"},{label:"Bahrain"},{label:"Bangladesh"},{label:"Barbados"},{label:"Belarus"},{label:"Belgium"},{label:"Belize"},{label:"Benin"},{label:"Bermuda"},{label:"Bhutan"},{label:"Bolivia, Plurinational State of"},{label:"Bonaire, Sint Eustatius and Saba"},{label:"Bosnia and Herzegovina"},{label:"Botswana"},{label:"Bouvet Island"},{label:"Brazil"},{label:"British Indian Ocean Territory"},{label:"Brunei Darussalam"}];function U(e){var a=e.classes,t=e.inputRef,n=void 0===t?function(){}:t,r=e.ref,i=Object(c.a)(e,["classes","inputRef","ref"]);return l.a.createElement(g.a,Object.assign({fullWidth:!0,InputProps:{inputRef:function(e){r(e),n(e)},classes:{input:a.input}}},i))}function X(e,a){var t=a.query,n=a.isHighlighted,r=H()(e.label,t),i=K()(e.label,r);return l.a.createElement(f.a,{selected:n,component:"div"},l.a.createElement("div",null,i.map(function(e){return l.a.createElement("span",{key:e.text,style:{fontWeight:e.highlight?500:400}},e.text)})))}function Y(e){return e.label}var Z=Object(d.a)(function(e){return{root:{height:250,flexGrow:1},container:{position:"relative"},suggestionsContainerOpen:{position:"absolute",zIndex:1,marginTop:e.spacing(1),left:0,right:0},suggestion:{display:"block"},suggestionsList:{margin:0,padding:0,listStyleType:"none"},divider:{height:e.spacing(2)}}});function $(){var e=Z(),a=l.a.useState(null),t=Object(s.a)(a,2),n=t[0],r=t[1],i=l.a.useState({single:"",popper:""}),c=Object(s.a)(i,2),u=c[0],b=c[1],d=l.a.useState([]),g=Object(s.a)(d,2),f=g[0],v=g[1],B=function(e){return function(a,t){var n=t.newValue;b(Object(o.a)(Object(o.a)({},u),{},Object(y.a)({},e,n)))}},P={renderInputComponent:U,suggestions:f,onSuggestionsFetchRequested:function(e){var a=e.value;v(function(e){var a=p()(e.trim()).toLowerCase(),t=a.length,n=0;return 0===t?[]:Q.filter(function(e){var l=n<5&&e.label.slice(0,t).toLowerCase()===a;return l&&(n+=1),l})}(a))},onSuggestionsClearRequested:function(){v([])},getSuggestionValue:Y,renderSuggestion:X};return l.a.createElement("div",{className:e.root},l.a.createElement(D.a,Object.assign({},P,{inputProps:{classes:e,id:"react-autosuggest-simple",label:"Country",placeholder:"Search a country (start with a)",value:u.single,onChange:B("single")},theme:{container:e.container,suggestionsContainerOpen:e.suggestionsContainerOpen,suggestionsList:e.suggestionsList,suggestion:e.suggestion},renderSuggestionsContainer:function(e){return l.a.createElement(h.a,Object.assign({},e.containerProps,{square:!0}),e.children)}})),l.a.createElement("div",{className:e.divider}),l.a.createElement(D.a,Object.assign({},P,{inputProps:{classes:e,id:"react-autosuggest-popper",label:"Country",placeholder:"With Popper",value:u.popper,onChange:B("popper"),inputRef:function(e){r(e)},InputLabelProps:{shrink:!0}},theme:{suggestionsList:e.suggestionsList,suggestion:e.suggestion},renderSuggestionsContainer:function(e){return l.a.createElement(m.a,{anchorEl:n,open:Boolean(e.children)},l.a.createElement(h.a,Object.assign({square:!0},e.containerProps,{style:{width:n?n.clientWidth:void 0}}),e.children))}})))}a.default=function(){return l.a.createElement("div",{className:"m-sm-30"},l.a.createElement("div",{className:"mb-sm-30"},l.a.createElement(r.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Autocomplete"}]})),l.a.createElement(r.i,{title:"downshift"},l.a.createElement(x,null)),l.a.createElement("div",{className:"py-12"}),l.a.createElement(r.i,{title:"react select"},l.a.createElement(T,null)),l.a.createElement("div",{className:"py-12"}),l.a.createElement(r.i,{title:"react autosuggest"},l.a.createElement($,null)))}}}]);
//# sourceMappingURL=44.e6bc4e35.chunk.js.map