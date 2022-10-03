"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5985],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),g=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=g(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=g(n),m=o,d=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var g=2;g<i;g++)a[g]=n[g];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6649:function(e,t,n){n.r(t),n.d(t,{Highlight:function(){return u},assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return g},toc:function(){return p}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],s={title:"Logging",sidebar_label:"Logging",slug:"/Topics/Logging",sidebar_position:6},l=void 0,g={unversionedId:"topics/Logging",id:"topics/Logging",title:"Logging",description:"This template includes an LoggingService class for simple and informative logging.",source:"@site/express/topics/Logging.mdx",sourceDirName:"topics",slug:"/Topics/Logging",permalink:"/express/Topics/Logging",draft:!1,editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/express/topics/Logging.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Logging",sidebar_label:"Logging",slug:"/Topics/Logging",sidebar_position:6},sidebar:"express",previous:{title:"Swagger",permalink:"/express/Topics/Swagger"}},c={},p=[{value:"How to use",id:"how-to-use",level:2},{value:"How to customize",id:"how-to-customize",level:2}],u=function(e){var t=e.children,n=e.bg,r=e.title;return(0,i.kt)("div",{style:{padding:"0.5rem",borderLeft:"10px solid "+n,margin:"0"}},(0,i.kt)("span",{style:{paddingRight:".2rem"}},(0,i.kt)("strong",null,r),":"),t)},m={toc:p,Highlight:u};function d(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This template includes an ",(0,i.kt)("inlineCode",{parentName:"p"},"LoggingService")," class for simple and informative logging.\nThis service expands on the well known and well integrated framework ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/winston"},"winston"),"."),(0,i.kt)("p",null,"There are several levels of logging. From most important to least important:"),(0,i.kt)("div",{style:{marginBottom:"1rem"}},(0,i.kt)(u,{bg:"var(--ifm-color-danger)",title:"Error",mdxType:"Highlight"},"Highly criticality information about non-recoverable exceptions and faulty states"),(0,i.kt)(u,{bg:"var(--ifm-color-warning)",title:"Warning",mdxType:"Highlight"},"Medium criticality information and recoverable exceptions"),(0,i.kt)(u,{bg:"#32CD32",title:"Info",mdxType:"Highlight"},"Low criticality application information"),(0,i.kt)(u,{bg:"#00BFFF",title:"Verbose",mdxType:"Highlight"},"Events related to code performance and infrastructure"),(0,i.kt)(u,{bg:"#FF1493",title:"Debug",mdxType:"Highlight"},"General debug information used in development environments with high verbosity"),(0,i.kt)(u,{bg:"#f0f0f0",title:"Silly",mdxType:"Highlight"},"When you just want to display some text...")),(0,i.kt)("h2",{id:"how-to-use"},"How to use"),(0,i.kt)("p",null,"Create a new instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"LoggerService")," anywhere in your code and give it an label."),(0,i.kt)("p",null,"From that instance you have access to all the different logging levels. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const logger = new LoggerService('Server');\n\nlogger.error('Unable to connect to external service');\nlogger.warn('Skipping external request');\nlogger.info('Configuring service!');\nlogger.verbose('Created new entity');\nlogger.debug('Working?');\nlogger.silly('Just a silly message');\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Logging levels",src:n(9005).Z,width:"580",height:"105"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE: By default logging levels are set to ",(0,i.kt)("inlineCode",{parentName:"strong"},"silly")," in non production environments and ",(0,i.kt)("inlineCode",{parentName:"strong"},"warn")," in production")),(0,i.kt)("h2",{id:"how-to-customize"},"How to customize"),(0,i.kt)("p",null,"Winston is a very dynamic framework and can be customized to emit logs to multiple transports."),(0,i.kt)("p",null,"There are several ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/winstonjs/winston/blob/master/docs/transports.md#winston-core"},"core transports")," included in winston, which leverage the built-in networking and file I/O offered by Node.js core.\nIn addition, there are ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/winstonjs/winston/blob/master/docs/transports.md#additional-transports"},"additional transports")," written by members of the community."),(0,i.kt)("p",null,"For other customizations head over to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/winstonjs/winston"},"Official Documentation")," at GitHub."))}d.isMDXComponent=!0},9005:function(e,t,n){t.Z=n.p+"assets/images/node_logging_levels-189d38314a57460b7e2ade39983f0f83.png"}}]);