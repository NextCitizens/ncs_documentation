"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[7900],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,C=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(C,i(i({ref:t},u),{},{components:r})):n.createElement(C,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1754:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={},s="setCameraPointAtCoords",l={unversionedId:"api/Camera/Client/setCameraPointAtCoords",id:"api/Camera/Client/setCameraPointAtCoords",title:"setCameraPointAtCoords",description:"Examples",source:"@site/framework/api/Camera/Client/setCameraPointAtCoords.md",sourceDirName:"api/Camera/Client",slug:"/api/Camera/Client/setCameraPointAtCoords",permalink:"/ncs_documentation/framework/api/Camera/Client/setCameraPointAtCoords",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"setCameraParams",permalink:"/ncs_documentation/framework/api/Camera/Client/setCameraParams"},next:{title:"setCameraPointAtEntity",permalink:"/ncs_documentation/framework/api/Camera/Client/setCameraPointAtEntity"}},u={},m=[{value:"Examples",id:"examples",level:3}],p={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setcamerapointatcoords"},"setCameraPointAtCoords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"NCs.Camera:setCameraPointAtCoords(coords)\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local camera = NCs.Camera:createCamera(vector3(780.14, 452.14, 54.12), 180.0)\ncamera:setCameraPointAtCoords(vector3(20.45, 87.65, 64.32))\n")))}f.isMDXComponent=!0}}]);