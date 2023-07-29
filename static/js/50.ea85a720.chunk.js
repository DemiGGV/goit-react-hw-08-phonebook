"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[50],{2050:function(n,e,t){t.r(e),t.d(e,{default:function(){return en}});var r=t(9434),o=t(2791),i=t(7821),a=t.n(i),c=t(8174),u=t(7271),l=t(2223),s="NOT_FOUND";var d=function(n,e){return n===e};function f(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?d:r,i=t.maxSize,a=void 0===i?1:i,c=t.resultEqualityCheck,u=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),l=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:s},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(u):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return s}return{get:r,put:function(e,o){r(e)===s&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,u);function f(){var e=l.get(arguments);if(e===s){if(e=n.apply(null,arguments),c){var t=l.getEntries(),r=t.find((function(n){return c(n.value,e)}));r&&(e=r.value)}l.put(arguments,e)}return e}return f.clearCache=function(){return l.clear()},f}function p(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function m(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,a=0,c={memoizeOptions:void 0},u=r.pop();if("object"===typeof u&&(c=u,u=r.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var l=c,s=l.memoizeOptions,d=void 0===s?t:s,f=Array.isArray(d)?d:[d],m=p(r),h=n.apply(void 0,[function(){return a++,u.apply(null,arguments)}].concat(f)),x=n((function(){for(var n=[],e=m.length,t=0;t<e;t++)n.push(m[t].apply(null,arguments));return i=h.apply(null,n)}));return Object.assign(x,{resultFunc:u,memoizedResultFunc:h,dependencies:m,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),x};return o}var h,x,v,b,g,y,w,j,k=m(f),C=function(n){return n.contacts.data},E=function(n){return n.filter},Z=function(n){return n.contacts.isLoading},O=function(n){return n.contacts.isDeleting},S=function(n){return n.contacts.error},T=function(n){return n.contacts.currentID},L=k([C,E],(function(n,e){var t=Number(e)?"number":"name";return n.filter((function(n){return n[t].toLowerCase().includes(e.toLowerCase())}))})),N=t(6052),I=t(533),_=t(5705),A=t(6727),P=t(1538),q=t(184),z=5,B=15,R=function(){var n=(0,r.I0)(),e=(0,r.v9)(C),t=A.Ry().shape({name:A.Z_().min(3,"Too Short!").max(30,"Too Long!").required("Required"),number:A.Z_().min(z,"Too Short!").max(B,"Too Long!").required("Required")});return(0,q.jsx)(_.J9,{initialValues:{name:"",number:""},validationSchema:t,onSubmit:function(t,r){var o=r.resetForm,i=t.name,a=t.number;e.find((function(n){return n.name.toLowerCase()===i.trim().toLowerCase()}))?n((0,P.sT)("".concat(i.trim()," already in contacts!"))):(n((0,N.uK)({name:i.trim(),number:a.trim()})),o())},children:(0,q.jsxs)(l.gN,{children:[(0,q.jsxs)(l.kR,{children:[(0,q.jsx)(l.n3,{type:"text",name:"name"}),(0,q.jsx)(_.Bc,{component:l.ME,name:"name"})]}),(0,q.jsxs)(l.kR,{children:[(0,q.jsx)(l.n3,{type:"tel",name:"number"}),(0,q.jsx)(_.Bc,{component:l.ME,name:"number"})]}),(0,q.jsx)("button",{type:"submit",children:"Add contact"})]})})},D=t(4808),F=function(){var n=(0,r.v9)(E),e=(0,r.v9)(C),t=(0,r.I0)();return(0,q.jsxs)("label",{children:["Filtering contacts by: name/number...",(0,q.jsx)(l.eP,{type:"text",name:"filter",title:"Search",required:!0,disabled:!e.length,value:n,onChange:function(n){n.preventDefault(),t((0,D.T)(n.target.value.trim()))}})]})},M=t(168),V=t(5397),J=V.Z.ul(h||(h=(0,M.Z)(["\n  min-width: 350px;\n  width: 100%;\n"]))),K=V.Z.li(x||(x=(0,M.Z)(["\n  margin-bottom: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n  max-width: 450px;\n  width: 100%;\n  @media screen and (max-width: 650px) {\n    max-width: 350px;\n    padding: 0 20px;\n  }\n"]))),U=(V.Z.span(v||(v=(0,M.Z)(["\n  text-shadow: #fc0 1px 0 10px;\n  margin-left: auto;\n"]))),V.Z.button(b||(b=(0,M.Z)(["\n  margin: 0;\n  height: 38px;\n  background-color: #ffffff;\n  border: 1px solid #cccccc;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;\n  transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;\n  border-radius: 4px;\n  font-size: 1rem;\n  padding: 8px;\n  text-decoration: none;\n  cursor: pointer;\n  max-width: 85px;\n  &:hover {\n    border-color: rgba(82, 168, 236, 0.8);\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset,\n      0 0 8px rgba(82, 168, 236, 0.6);\n    outline: 0 none;\n  }\n"])))),G=t(9439),Y=V.Z.form(g||(g=(0,M.Z)(["\n  min-width: 150px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n"]))),H=V.Z.div(y||(y=(0,M.Z)(["\n  display: flex;\n  gap: 5px;\n  border: 1px solid #bdbdbd50;\n  border-radius: 0.25rem;\n  @media screen and (max-width: 650px) {\n    flex-direction: column;\n  }\n"]))),Q=V.Z.input(w||(w=(0,M.Z)(["\n  display: block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-family: inherit;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #e7ecf2;\n  background-clip: padding-box;\n  border: 0px;\n  outline: 0;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  &::placeholder {\n    color: #212529;\n    opacity: 0.4;\n  }\n  &:focus {\n    color: #212529;\n    background-color: #fff;\n    border-color: #bdbdbd;\n    outline: 0;\n    box-shadow: 0 0 2px 2px rgba(158, 158, 158, 0.25);\n  }\n  &:disabled {\n    background-color: #f5f5f5;\n    opacity: 1;\n  }\n"]))),W=(V.Z.button(j||(j=(0,M.Z)(["\n  margin: 0;\n  height: 38px;\n  background-color: #ffffff;\n  border: 1px solid #cccccc;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;\n  transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;\n  border-radius: 4px;\n  display: block;\n  font-size: 14px;\n  text-align: center;\n  padding: 8px;\n  text-decoration: none;\n  cursor: pointer;\n  max-width: 45px;\n  &:hover {\n    border-color: rgba(82, 168, 236, 0.8);\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset,\n      0 0 8px rgba(82, 168, 236, 0.6);\n    outline: 0 none;\n  }\n"]))),function(n){var e=n.data,t=(0,r.I0)(),i=(0,r.v9)(C),a=(0,o.useState)(e.name),c=(0,G.Z)(a,2),u=c[0],l=c[1],s=(0,o.useState)(e.number),d=(0,G.Z)(s,2),f=d[0],p=d[1],m=e.id,h=function(n){var e;if(n.preventDefault(),"name"===n.target.name){if(i.find((function(e){return e.name.toLowerCase()===n.target.value.trim().toLowerCase()})))return;e={taskId:m,name:n.target.value.trim(),number:f}}else{if(i[i.findIndex((function(n){return n.id===m}))].number===n.target.value.trim())return;e={taskId:m,name:u,number:n.target.value.trim()}}t((0,N.mP)(e))};return(0,q.jsx)(Y,{children:(0,q.jsxs)(H,{children:[(0,q.jsx)(Q,{type:"text",name:"name",value:u,onBlur:h,onChange:function(n){l(n.target.value)}}),(0,q.jsx)(Q,{type:"tel",name:"number",value:f,onBlur:h,onChange:function(n){n.target.value.length<z||n.target.value.length>B||isNaN(n.nativeEvent.data)&&"+"!==n.nativeEvent.data||p(n.target.value)}})]})})}),X=function(n){var e=n.data,t=(0,r.I0)(),o=(0,r.v9)(O),i=(0,r.v9)(T),a=e.id;return(0,q.jsxs)(K,{children:[(0,q.jsx)(W,{data:e}),(0,q.jsx)(U,{type:"button",disabled:o&&i===a,"data-id":a,onClick:function(n){var e=n.target.dataset.id;t((0,P.tY)(e)),t((0,N.GK)(e))},children:"Remove"})]})},$=function(n){var e=n.contacts;return(0,q.jsx)(J,{children:e.map((function(n){return(0,q.jsx)(X,{data:n},n.id)}))})},nn=t(4270);function en(){var n=(0,r.v9)(Z),e=(0,r.v9)(S),t=(0,r.I0)(),i=(0,r.v9)(L);return(0,o.useEffect)((function(){e&&c.Am.error(e,u.N),t((0,N.yF)())}),[t,e]),(0,q.jsxs)(l.Jg,{children:[(0,q.jsx)(nn.q,{children:(0,q.jsx)("title",{children:"Phone book"})}),(0,q.jsx)(a(),{smooth:!0,top:100,component:(0,q.jsx)("p",{style:{color:"blue"},children:"UP"})}),(0,q.jsx)(l.Dx,{children:"Adding new contact"}),(0,q.jsx)(R,{}),(0,q.jsx)(l.Dx,{children:"Contacts"}),(0,q.jsx)(F,{}),n&&(0,q.jsx)(I.a,{}),!!i.length&&(0,q.jsx)($,{contacts:i})]})}},7821:function(n,e,t){var r,o=t(2791),i=(r=o)&&"object"===typeof r&&"default"in r?r.default:r,a=function(){return a=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},a.apply(this,arguments)};!function(n,e){void 0===e&&(e={});var t=e.insertAt;if(n&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n))}}(".scroll-to-top {\n  background-color: white;\n  right: 40px;\n  bottom: 40px;\n  position: fixed;\n  z-index: 2;\n  cursor: pointer;\n  border-radius: 7px;\n  width: 40px;\n  height: 40px;\n  box-shadow: 0 9px 25px 0 rgba(132, 128, 177, 0.28);\n  border: none;\n}\n\n.scroll-to-top:active {\n  transform: matrix(0.95, 0, 0, 0.95, 0, 0);\n}\n");n.exports=function(n){var e=n.top,t=void 0===e?20:e,r=n.className,c=void 0===r?"":r,u=n.color,l=void 0===u?"black":u,s=n.smooth,d=void 0!==s&&s,f=n.component,p=void 0===f?"":f,m=n.viewBox,h=void 0===m?"0 0 256 256":m,x=n.svgPath,v=void 0===x?"M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z":x,b=n.width,g=void 0===b?"28":b,y=n.height,w=void 0===y?"28":y,j=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t}(n,["top","className","color","smooth","component","viewBox","svgPath","width","height"]),k=o.useState(!1),C=k[0],E=k[1];return o.useEffect((function(){var n=function(){E(document.documentElement.scrollTop>=t)};return n(),document.addEventListener("scroll",n),function(){return document.removeEventListener("scroll",n)}}),[t]),i.createElement(i.Fragment,null,C&&i.createElement("button",a({className:"scroll-to-top "+c,onClick:function(){return function(n){void 0===n&&(n=!1),n?window.scrollTo({top:0,behavior:"smooth"}):document.documentElement.scrollTop=0}(d)},"aria-label":"Scroll to top"},j),p||i.createElement("svg",{width:g,height:w,fill:l,viewBox:h},i.createElement("path",{d:v}))))}}}]);
//# sourceMappingURL=50.ea85a720.chunk.js.map