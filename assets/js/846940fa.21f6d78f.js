"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[1996],{3905:function(e,r,t){t.d(r,{Zo:function(){return m},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=u(t),f=a,C=l["".concat(s,".").concat(f)]||l[f]||p[f]||o;return t?n.createElement(C,i(i({ref:r},m),{},{components:t})):n.createElement(C,i({ref:r},m))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=l;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},4673:function(e,r,t){t.r(r),t.d(r,{assets:function(){return m},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={},s="setCameraParams",u={unversionedId:"api/Camera/Client/setCameraParams",id:"api/Camera/Client/setCameraParams",title:"setCameraParams",description:"",source:"@site/framework/api/Camera/Client/setCameraParams.md",sourceDirName:"api/Camera/Client",slug:"/api/Camera/Client/setCameraParams",permalink:"/ncs_documentation/framework/api/Camera/Client/setCameraParams",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"setCameraCoords",permalink:"/ncs_documentation/framework/api/Camera/Client/setCameraCoords"},next:{title:"setCameraPointAtCoords",permalink:"/ncs_documentation/framework/api/Camera/Client/setCameraPointAtCoords"}},m={},p=[],l={toc:p};function f(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setcameraparams"},"setCameraParams"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"NCs.Camera:setCameraParams(coords, rotationX, rotationY, rotationZ, fov)\n")))}f.isMDXComponent=!0}}]);