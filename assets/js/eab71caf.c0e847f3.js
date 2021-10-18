"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7680],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9662:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(3117),i=r(102),a=(r(7294),r(3905)),o=["components"],l={title:"Included Dependencies",sidebar_position:3},c=void 0,s={unversionedId:"getting-started/included-dependencies",id:"getting-started/included-dependencies",isDocsHomePage:!1,title:"Included Dependencies",description:"The template includes some dependencies which are found to be common needs of most React apps by Intility.",source:"@site/cra/getting-started/included-dependencies.mdx",sourceDirName:"getting-started",slug:"/getting-started/included-dependencies",permalink:"/cra/getting-started/included-dependencies",editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/cra/getting-started/included-dependencies.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Included Dependencies",sidebar_position:3},sidebar:"cra",previous:{title:"Project Overview",permalink:"/cra/getting-started/project-overview"},next:{title:"Recommended Packages",permalink:"/cra/getting-started/recommended-packages"}},u=[{value:"@intility/bifrost-react",id:"intilitybifrost-react",children:[],level:2},{value:"@intility/react-msal-browser",id:"intilityreact-msal-browser",children:[],level:2},{value:"react-router",id:"react-router",children:[],level:2},{value:"@sentry/react and @sentry/tracing",id:"sentryreact-and-sentrytracing",children:[],level:2},{value:"prettier",id:"prettier",children:[],level:2},{value:"source-map-explorer",id:"source-map-explorer",children:[],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The template includes some dependencies which are found to be common needs of most React apps by Intility."),(0,a.kt)("h2",{id:"intilitybifrost-react"},"@intility/bifrost-react"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://bifrost.intility.no/"},"Docs"))),(0,a.kt)("p",null,"Intility's design system for React."),(0,a.kt)("h2",{id:"intilityreact-msal-browser"},"@intility/react-msal-browser"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gitlab.intility.no/DeveloperServices/react-auth/-/wikis/getting-started"},"Docs (WIP)"))),(0,a.kt)("p",null,"@intility/react-","*"," is an abstraction of the 3 auth libraries (adal, msal, msal-browser) by Microsoft for React."),(0,a.kt)("h2",{id:"react-router"},"react-router"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ReactTraining/react-router/tree/dev/docs"},"Docs (v6)"))),(0,a.kt)("p",null,"Unless you're a dashboard, you need a router, and react-router is the de facto router for React."),(0,a.kt)("h2",{id:"sentryreact-and-sentrytracing"},"@sentry/react and @sentry/tracing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.sentry.io/platforms/javascript/guides/react/"},"Docs"))),(0,a.kt)("p",null,"Used for error reporting to Sentry."),(0,a.kt)("h2",{id:"prettier"},"prettier"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://prettier.io/"},"Docs"))),(0,a.kt)("p",null,"Prettier is a code formatter and great tool for unifying formatting when collaborating on a project.\nThe Visual Studio Code Workspace is set up to auto-format on save."),(0,a.kt)("h2",{id:"source-map-explorer"},"source-map-explorer"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/danvk/source-map-explorer#readme"},"GitHub"))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/analyzing-the-bundle-size"},"Analyzing the Bundle Size")," for more information.",(0,a.kt)("br",{parentName:"p"}),"\n","You can use it by running the following command in your project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run analyze\n")))}d.isMDXComponent=!0}}]);