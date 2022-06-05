"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[1996],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),m=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=m(e.components);return a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=m(t),f=n,C=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return t?a.createElement(C,i(i({ref:r},l),{},{components:t})):a.createElement(C,i({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var m=2;m<o;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4673:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return u}});var a=t(7462),n=t(3366),o=(t(7294),t(3905)),i=["components"],c={},s="setCameraParams",m={unversionedId:"api/Camera/Client/setCameraParams",id:"api/Camera/Client/setCameraParams",title:"setCameraParams",description:"Examples",source:"@site/framework/api/Camera/Client/setCameraParams.md",sourceDirName:"api/Camera/Client",slug:"/api/Camera/Client/setCameraParams",permalink:"/ncs_documentation/framework/api/Camera/Client/setCameraParams",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"setCameraCoords",permalink:"/ncs_documentation/framework/api/Camera/Client/setCameraCoords"},next:{title:"setCameraPointAtCoords",permalink:"/ncs_documentation/framework/api/Camera/Client/setCameraPointAtCoords"}},l={},u=[{value:"Examples",id:"examples",level:3}],p={toc:u};function f(e){var r=e.components,t=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setcameraparams"},"setCameraParams"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"NCs.Camera:setCameraParams(coords, rotationX, rotationY, rotationZ, fov)\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local camera = NCs.Camera:createCamera(vector3(780.14, 452.14, 54.12), 180.0)\ncamera:setCameraParams(vector3(78.45, 98.21, 54.17), 60.0, 90.0, 78.0, 30.0)\n")))}f.isMDXComponent=!0}}]);