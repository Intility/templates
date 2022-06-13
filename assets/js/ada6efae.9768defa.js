"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9123],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,g=f["".concat(s,".").concat(d)]||f[d]||l[d]||i;return n?r.createElement(g,c(c({ref:t},u),{},{components:n})):r.createElement(g,c({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3259:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return l}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),c=["components"],a={title:"Project Overview",sidebar_position:2},s=void 0,p={unversionedId:"getting-started/project-overview",id:"getting-started/project-overview",title:"Project Overview",description:"Depending on which template you chose,",source:"@site/cra/getting-started/project-overview.mdx",sourceDirName:"getting-started",slug:"/getting-started/project-overview",permalink:"/cra/getting-started/project-overview",draft:!1,editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/cra/getting-started/project-overview.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Project Overview",sidebar_position:2},sidebar:"cra",previous:{title:"Installation",permalink:"/cra/getting-started/installation"},next:{title:"Included Dependencies",permalink:"/cra/getting-started/included-dependencies"}},u={},l=[],f={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Depending on which template you chose,\nyour project structure will look more or less like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 public\n\u2502   \u251c\u2500\u2500 favicon.ico\n\u2502   \u251c\u2500\u2500 index.html\n\u2502   \u251c\u2500\u2500 logo192.png\n\u2502   \u251c\u2500\u2500 logo512.png\n\u2502   \u251c\u2500\u2500 manifest.json\n\u2502   \u2514\u2500\u2500 robots.txt\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 assets\n\u2502   \u2502   \u2514\u2500\u2500 logo.svg\n\u2502   \u251c\u2500\u2500 components\n\u2502   \u2502   \u251c\u2500\u2500 About.tsx\n\u2502   \u2502   \u251c\u2500\u2500 App.css\n\u2502   \u2502   \u251c\u2500\u2500 App.test.tsx\n\u2502   \u2502   \u251c\u2500\u2500 App.tsx\n\u2502   \u2502   \u251c\u2500\u2500 Home.tsx\n\u2502   \u2502   \u2514\u2500\u2500 Profile.tsx\n\u2502   \u251c\u2500\u2500 index.tsx\n\u2502   \u251c\u2500\u2500 react-app-env.d.ts\n\u2502   \u251c\u2500\u2500 serviceWorker.ts\n\u2502   \u2514\u2500\u2500 setupTests.ts\n\u251c\u2500\u2500 .env.development\n\u251c\u2500\u2500 .eslintrc\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 .gitlab-ci.yml\n\u251c\u2500\u2500 .npmrc\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 app.code-workspace\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")))}d.isMDXComponent=!0}}]);