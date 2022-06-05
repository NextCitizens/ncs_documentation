"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[3489],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return t?n.createElement(m,p(p({ref:r},l),{},{components:t})):n.createElement(m,p({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var s=2;s<o;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4337:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),p=["components"],c={},i="spawnPed",s={unversionedId:"api/ped/server/spawnPed",id:"api/ped/server/spawnPed",title:"spawnPed",description:"Examples",source:"@site/framework/api/ped/server/spawnPed.md",sourceDirName:"api/ped/server",slug:"/api/ped/server/spawnPed",permalink:"/ncs_documentation/framework/api/ped/server/spawnPed",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"deletePed",permalink:"/ncs_documentation/framework/api/ped/server/deletePed"},next:{title:"freeze",permalink:"/ncs_documentation/framework/api/player/client/freeze"}},l={},u=[{value:"Examples",id:"examples",level:3}],d={toc:u};function f(e){var r=e.components,t=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spawnped"},"spawnPed"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"NCs.Ped:spawnPed(modelName, x, y, z, heading)\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"NCs.Ped:spawnPed('cs_bankman', 178.14, 158.21, 56.21, 90.0)\n")),(0,o.kt)("p",null,"List of ped models name ",(0,o.kt)("a",{parentName:"p",href:"https://docs.fivem.net/docs/game-references/ped-models/"},"here")))}f.isMDXComponent=!0}}]);