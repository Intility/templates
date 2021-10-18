"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6523],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),g=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=g(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=g(n),m=i,d=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var g=2;g<o;g++)a[g]=n[g];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8653:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return g},toc:function(){return c},Highlight:function(){return p},default:function(){return m}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],l={title:"API - Logging",sidebar_label:"Logging",slug:"/API/Logging",sidebar_position:6},s=void 0,g={unversionedId:"API/logging",id:"API/logging",isDocsHomePage:!1,title:"API - Logging",description:"This template includes an LoggingService class for simple and informative logging.",source:"@site/express/API/logging.mdx",sourceDirName:"API",slug:"/API/Logging",permalink:"/express/API/Logging",editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/express/API/logging.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"API - Logging",sidebar_label:"Logging",slug:"/API/Logging",sidebar_position:6},sidebar:"express",previous:{title:"Sentry",permalink:"/express/API/Sentry"},next:{title:"Application Insights",permalink:"/express/API/Azure/Application-Insights"}},c=[{value:"How to use",id:"how-to-use",children:[],level:2},{value:"How to customize",id:"how-to-customize",children:[],level:2}],p=function(e){var t=e.children,n=e.bg,r=e.title;return(0,o.kt)("div",{style:{padding:"0.5rem",borderLeft:"10px solid "+n,margin:"0"}},(0,o.kt)("span",{style:{paddingRight:".2rem"}},(0,o.kt)("strong",null,r),":"),t)},u={toc:c,Highlight:p};function m(e){var t=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This template includes an ",(0,o.kt)("inlineCode",{parentName:"p"},"LoggingService")," class for simple and informative logging.\nThis service expands on the well known and well integrated framework ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/winston"},"winston"),"."),(0,o.kt)("p",null,"There are several levels of logging. From most important to least important:"),(0,o.kt)("div",{style:{marginBottom:"1rem"}},(0,o.kt)(p,{bg:"var(--ifm-color-danger)",title:"Error",mdxType:"Highlight"},"Highly criticality information about non-recoverable exceptions and faulty states"),(0,o.kt)(p,{bg:"var(--ifm-color-warning)",title:"Warning",mdxType:"Highlight"},"Medium criticality information and recoverable exceptions"),(0,o.kt)(p,{bg:"#32CD32",title:"Info",mdxType:"Highlight"},"Low criticality application information"),(0,o.kt)(p,{bg:"#00BFFF",title:"Verbose",mdxType:"Highlight"},"Events related to code performance and infrastructure"),(0,o.kt)(p,{bg:"#FF1493",title:"Debug",mdxType:"Highlight"},"General debug information used in development environments with high verbosity"),(0,o.kt)(p,{bg:"#f0f0f0",title:"Silly",mdxType:"Highlight"},"When you just want to display some text...")),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("p",null,"Create a new instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"LoggerService")," anywhere in your code and give it an label."),(0,o.kt)("p",null,"From that instance you have access to all the different logging levels. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const logger = new LoggerService('Server');\n\nlogger.error('Unable to connect to external service');\nlogger.warn('Skipping external request');\nlogger.info('Configuring service!');\nlogger.verbose('Created new entity');\nlogger.debug('Working?');\nlogger.silly('Just a silly message');\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Logging levels",src:n(4148).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE: By default logging levels are set to ",(0,o.kt)("inlineCode",{parentName:"strong"},"silly")," in non production environments and ",(0,o.kt)("inlineCode",{parentName:"strong"},"warn")," in production")),(0,o.kt)("h2",{id:"how-to-customize"},"How to customize"),(0,o.kt)("p",null,"Winston is a very dynamic framework and can be customized to emit logs to multiple transports."),(0,o.kt)("p",null,"There are several ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/winstonjs/winston/blob/master/docs/transports.md#winston-core"},"core transports")," included in winston, which leverage the built-in networking and file I/O offered by Node.js core.\nIn addition, there are ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/winstonjs/winston/blob/master/docs/transports.md#additional-transports"},"additional transports")," written by members of the community."),(0,o.kt)("p",null,"For other customizations head over to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/winstonjs/winston"},"Official Documentation")," at GitHub."))}m.isMDXComponent=!0},4148:function(e,t,n){t.Z=n.p+"assets/images/node_logging_levels-189d38314a57460b7e2ade39983f0f83.png"}}]);