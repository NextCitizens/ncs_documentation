"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[8444],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=l(n),m=i,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},689:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),c=["components"],a={},u="sendAction",l={unversionedId:"api/ui/client/sendAction",id:"api/ui/client/sendAction",title:"sendAction",description:"",source:"@site/framework/api/ui/client/sendAction.md",sourceDirName:"api/ui/client",slug:"/api/ui/client/sendAction",permalink:"/ncs_documentation/framework/api/ui/client/sendAction",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"registerAction",permalink:"/ncs_documentation/framework/api/ui/client/registerAction"},next:{title:"cleanVehicle",permalink:"/ncs_documentation/framework/api/vehicles/client/cleanVehicle"}},p={},s=[],f={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sendaction"},"sendAction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"NCs.UI:sendAction(moduleName, functionName, argsList)\n")))}m.isMDXComponent=!0}}]);