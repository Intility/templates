"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3770],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(4334),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(7462),a=n(7294),o=n(4334),i=n(2466),u=n(6550),s=n(1980),l=n(7392),c=n(12);function p(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,u.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,s._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function f(e){var t,n,r,o,i=e.defaultValue,u=e.queryString,s=void 0!==u&&u,l=e.groupId,p=d(e),f=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:p})})),g=f[0],y=f[1],b=m({queryString:s,groupId:l}),v=b[0],k=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:l}.groupId),n=(0,c.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=w[0],C=w[1],R=function(){var e=null!=v?v:N;return h({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){R&&y(R)}),[R]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!h({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);y(e),k(e),C(e)}),[k,C,p]),tabValues:p}}var g=n(2389),y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,n=e.block,u=e.selectedValue,s=e.selectValue,l=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),r=l[n].value;r!==u&&(p(t),s(r))},h=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},l.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:h,onClick:d},i,{className:(0,o.Z)("tabs__item",y.tabItem,null==i?void 0:i.className,{"tabs__item--active":u===t})}),null!=n?n:t)})))}function v(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function k(e){var t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function w(e){var t=(0,g.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},9460:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return h}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(4866),u=n(5162),s=["components"],l={title:"AAD Authentication",sidebar_position:2},c=void 0,p={unversionedId:"configuration/authentication",id:"configuration/authentication",title:"AAD Authentication",description:"The example code is set up to use authentication. For this to work, an App Registration has to be set up in Azure AD.",source:"@site/react/configuration/authentication.mdx",sourceDirName:"configuration",slug:"/configuration/authentication",permalink:"/react/configuration/authentication",draft:!1,editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/react/configuration/authentication.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"AAD Authentication",sidebar_position:2},sidebar:"react",previous:{title:"GitLab Repository",permalink:"/react/configuration/gitlab"},next:{title:"Environment Variables",permalink:"/react/configuration/environment-variables"}},d={},h=[{value:"Create App Registration",id:"create-app-registration",level:3},{value:"Adding reply URLs",id:"adding-reply-urls",level:3},{value:"Enabling authentication in your app",id:"enabling-authentication-in-your-app",level:2},{value:"Forcing auth",id:"forcing-auth",level:3},{value:"Other methods",id:"other-methods",level:3},{value:"Consuming an authenticated API",id:"consuming-an-authenticated-api",level:2},{value:"SWR / React Query",id:"swr--react-query",level:3}],m={toc:h},f="wrapper";function g(e){var t=e.components,l=(0,a.Z)(e,s);return(0,o.kt)(f,(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The example code is set up to use authentication. For this to work, an App Registration has to be set up in Azure AD."),(0,o.kt)("h3",{id:"create-app-registration"},"Create App Registration"),(0,o.kt)("p",null,"Head over to ",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps"},"Azure -> Azure Active Directory -> App registrations"),"\nwith your Intility Account, and create a new registration."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"New Registration in Azure",src:n(1381).Z,width:"1041",height:"633"}),(0,o.kt)("br",{parentName:"p"}),"\n","Select a fitting name for your project, this name will be presented to the user during consent."),(0,o.kt)("p",null,"Under ",(0,o.kt)("inlineCode",{parentName:"p"},"Supported account types"),", choose either ",(0,o.kt)("inlineCode",{parentName:"p"},"Intility AS only - Single tenant")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Any Azure AD directory - Multitenant"),".\nThis can be changed later, so if you're unsure what to choose, select single tenant."),(0,o.kt)("p",null,"Under ",(0,o.kt)("inlineCode",{parentName:"p"},"Redirect URI"),", select ",(0,o.kt)("inlineCode",{parentName:"p"},"Single-page application (SPA)")," from the dropdown, and enter ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."),(0,o.kt)("p",null,"Hit the register button, and you will be taken to an overview of your newly created registration."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Finding Client ID",src:n(5546).Z,width:"674",height:"225"}),(0,o.kt)("br",{parentName:"p"}),"\n","Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"Application (Client) ID")," GUID, and paste it into the ",(0,o.kt)("inlineCode",{parentName:"p"},"clientId")," field in your ",(0,o.kt)("inlineCode",{parentName:"p"},"auth/config.ts")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/auth/config.ts"',title:'"src/auth/config.ts"'},'const msal = {\n  auth: {\n    clientId: "YOUR_CLIENT_ID",\n    ...\n  },\n  ...\n}\n')),(0,o.kt)("p",null,"Check out ",(0,o.kt)("a",{parentName:"p",href:"#enabling-authentication-in-your-app"},"Enabling authentication in your app")," to enable authentication in your app."),(0,o.kt)("h3",{id:"adding-reply-urls"},"Adding reply URLs"),(0,o.kt)("p",null,"For each deployment of your app, you'll need to register it. You can do that by going to the Authentication page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Adding Reply URLs",src:n(6680).Z,width:"1272",height:"341"}),(0,o.kt)("br",{parentName:"p"}),"\n","The first we need to add is the URL the deploy step makes in OpenShift:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://{your-project-slug}-dev.apps.int.intility.no\n")),(0,o.kt)("p",null,"You can also add more later if you create more environments."),(0,o.kt)("h2",{id:"enabling-authentication-in-your-app"},"Enabling authentication in your app"),(0,o.kt)("p",null,"Depending on what your applications scope is, there are different ways of enabling authentication."),(0,o.kt)("h3",{id:"forcing-auth"},"Forcing auth"),(0,o.kt)("p",null,"This is the simplest way, and can be enabled by wrapping your application in ",(0,o.kt)("inlineCode",{parentName:"p"},"MsalAuthenticationTemplate")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"@azure/msal-react"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},"root.render(\n  <React.StrictMode>\n    <MsalProvider instance={instance}>\n      <MsalAuthenticationTemplate\n        interactionType={InteractionType.Redirect}\n        authenticationRequest={{ scopes: ['User.Read'] }}\n      >\n        <RouterProvider router={router} />\n      </MsalAuthenticationTemplate>\n    </MsalProvider>\n  </React.StrictMode>,\n);\n")),(0,o.kt)("p",null,"This will force user authentication, and your app won't render unless the user is authenticated."),(0,o.kt)("h3",{id:"other-methods"},"Other methods"),(0,o.kt)("p",null,"There are many ways to protect your application, both conditionally and forced."),(0,o.kt)("p",null,"Read the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md"},(0,o.kt)("inlineCode",{parentName:"a"},"@azure/msal-react")," docs")," to see other ways to authenticate."),(0,o.kt)("h2",{id:"consuming-an-authenticated-api"},"Consuming an authenticated API"),(0,o.kt)("p",null,'To consume an authenticated API you will need to add permission. You can do this by going to your frontends application registration in Azure, under API Permissions.\nClick "Add a permission" and follow the steps to add the api scope you need.'),(0,o.kt)("p",null,"The permission you add will have a scope looking something like ",(0,o.kt)("inlineCode",{parentName:"p"},"api://application-guid/scopename"),", which you will use as the ",(0,o.kt)("inlineCode",{parentName:"p"},"'API_SCOPE'")," variable in the next steps below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"API Permissions",src:n(4670).Z,width:"1149",height:"339"})),(0,o.kt)("p",null,"If the API you want to consume requires user consent you'll need to add the api scope to the ",(0,o.kt)("inlineCode",{parentName:"p"},"authenticationRequest")," scopes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},"root.render(\n  <React.StrictMode>\n    <MsalProvider instance={instance}>\n      <MsalAuthenticationTemplate\n        interactionType={InteractionType.Redirect}\n        authenticationRequest={{ scopes: ['User.Read', 'API_SCOPE'] }}\n      >\n        <RouterProvider router={router} />\n      </MsalAuthenticationTemplate>\n    </MsalProvider>\n  </React.StrictMode>,\n);\n")),(0,o.kt)("p",null,"You'll also need to modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"authorizedFetch")," method, and acquire the correct scopes for the URL you're trying to call."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/auth/authorizedFetch.ts"',title:'"src/auth/authorizedFetch.ts"'},"async function authorizedFetch() {\n  ...\n  if (url?.toLowerCase().startsWith('https://graph.microsoft.com')) {\n    scopes.push('User.Read');\n  } else if (url?.toLowerCase().startsWith('http://localhost:5000')) {\n    scopes.push('API_SCOPE');\n  }\n  ...\n}\n")),(0,o.kt)("p",null,"The API base URL can also be dynamically applied from an ",(0,o.kt)("a",{parentName:"p",href:"/react/configuration/environment-variables"},"Environment Variables"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/auth/authorizedFetch.ts"',title:'"src/auth/authorizedFetch.ts"'},"async function authorizedFetch() {\n  ...\n  if (url?.toLowerCase().startsWith('https://graph.microsoft.com')) {\n    scopes.push('User.Read');\n  } else if (url?.toLowerCase().startsWith(import.meta.env.VITE_API_URL)) {\n    scopes.push('API_SCOPE');\n  }\n  ...\n}\n")),(0,o.kt)("p",null,"You can now consume an API with ",(0,o.kt)("inlineCode",{parentName:"p"},"authorizedFetch"),", which uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"endpoints")," config to detect which token to use in a request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState, useEffect } from 'react';\nimport { authorizedFetch } from '~/auth';\n\n// This is a simplified example of data fetching in react\n// Please don't use in production\n\nconst DataComponent = () => {\n  const [data, setData] = useState();\n  const [error, setError] = useState();\n\n  useEffect(() => {\n    authorizedFetch('my-api/resource')\n      .then((response) => response.json())\n      .then((json) => setData(json))\n      .catch((error) => setError(error));\n  }, []);\n\n  return (\n    <>\n      {!data && !error && <p>Loading data...</p>}\n      {data && <div>Here is the data: {data}</div>}\n      {error && <p className=\"error\">Oh No!!! {error.toString()}</p>}\n    </>\n  );\n};\n")),(0,o.kt)("h3",{id:"swr--react-query"},"SWR / React Query"),(0,o.kt)(i.Z,{groupId:"fetchinglib",defaultValue:"swr",values:[{label:"SWR",value:"swr"},{label:"React Query",value:"react-query"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"swr",mdxType:"TabItem"},(0,o.kt)("p",null,"Before continuing this step, read about and install ",(0,o.kt)("a",{parentName:"p",href:"https://swr.vercel.app/"},"SWR"),"."),(0,o.kt)("p",null,"Integrating ",(0,o.kt)("inlineCode",{parentName:"p"},"authenticatedFetch")," with SWR is very simple. All you need to do is specify a fetcher for SWR."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import useSWR from 'swr';\nimport { authorizedFetch } from '~/auth';\n\nconst authFetcher = (url: string) =>\n  authorizedFetch(url).then((result) => result.json());\n\nconst SwrComponent = () => {\n  const { data, error } = useSWR('my-api/resource', { fetcher: authFetcher });\n\n  return (\n    <>\n      {!data && !error && <p>Loading data...</p>}\n      {data && <div>Here is the data: {data}</div>}\n      {error && <p className=\"error\">Oh No!!! {error.toString()}</p>}\n    </>\n  );\n};\n")),(0,o.kt)("p",null,"We could take this one step further, and assign the fetcher globally using ",(0,o.kt)("inlineCode",{parentName:"p"},"SWRConfig"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},"import { SWRConfig } from 'swr';\nimport { authorizedFetch } from '~/auth';\n\n// Note that we apply a base url to every request\nconst swr = {\n  fetcher: (path: string) =>\n    authorizedFetch(import.meta.env.VITE_API_URL + path).then((response) =>\n      response.json(),\n    ),\n};\n\nroot.render(\n  <React.StrictMode>\n    <MsalProvider instance={instance}>\n      <SWRConfig value={swr}>\n        <RouterProvider router={router} />\n      </SWRConfig>\n    </MsalProvider>\n  </React.StrictMode>,\n);\n")),(0,o.kt)("p",null,"We can now call ",(0,o.kt)("inlineCode",{parentName:"p"},"useSWR")," somewhere in our app, and it will by default use the authorized fetcher."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import useSWR from 'swr';\nimport { authorizedFetch } from '~/auth';\n\nconst SwrComponent = () => {\n  // Note that only the resource is requested here\n  // that's because the API base URL is prepended in our fetcher\n  const { data, error } = useSWR('resource');\n\n  return (\n    <>\n      {!data && !error && <p>Loading data...</p>}\n      {data && <div>Here is the data: {data}</div>}\n      {error && <p className=\"error\">Oh No!!! {error.toString()}</p>}\n    </>\n  );\n};\n")),(0,o.kt)("p",null,"One great thing about SWR is request deduping and caching.",(0,o.kt)("br",{parentName:"p"}),"\n","In the following example, there will be three instances of our ",(0,o.kt)("inlineCode",{parentName:"p"},"SwrComponent"),", but only one request will be made.\nThat would not be the case if we were to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataComponent")," from earlier, where we manually fetched the data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const SomeExample = () => (\n  <>\n    <SwrComponent />\n    <SwrComponent />\n    <SwrComponent />\n  </>\n);\n")),(0,o.kt)("p",null,"To read more about SWR, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://swr.vercel.app/"},"SWR Docs"),".")),(0,o.kt)(u.Z,{value:"react-query",mdxType:"TabItem"},(0,o.kt)("p",null,"Integrating ",(0,o.kt)("inlineCode",{parentName:"p"},"authenticatedFetch")," with React Query is very simple. All you need to do is specify a query function for React Query."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useQuery } from 'react-query';\nimport { authorizedFetch } from '~/auth';\n\nconst authFetcher = (url: string) =>\n  authorizedFetch(url).then((result) => result.json());\n\nconst QueryComponent = () => {\n  const { data, error, isLoading, isError } = useQuery(\n    'my-api/resource',\n    async () => {\n      let response = await authorizedFetch('my-api/resource');\n      return await response.json();\n    },\n  );\n\n  return (\n    <>\n      {isLoading && <p>Loading data...</p>}\n      {data && <div>Here is the data: {data}</div>}\n      {isError && <p className=\"error\">Oh No!!! {error.message}</p>}\n    </>\n  );\n};\n")),(0,o.kt)("p",null,"We could take this one step further, and assign a global default query function using ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryClient")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryClientProvider"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},"import { QueryClient, QueryClientProvider } from 'react-query';\nimport { authorizedFetch } from '~/auth';\n\n// Note that we apply a base url to every request\nconst defaultQueryFn = async ({ queryKey }) => {\n  let response = await authorizedFetch(\n    (import.meta.env.VITE_API_URL as string) + queryKey[0],\n  );\n  return await response.json();\n};\n\nconst queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      queryFn: defaultQueryFn,\n    },\n  },\n});\n\nroot.render(\n  <React.StrictMode>\n    <MsalProvider instance={instance}>\n      <QueryClientProvider value={queryClient}>\n        <RouterProvider router={router} />\n      </QueryClientProvider>\n    </MsalProvider>\n  </React.StrictMode>,\n);\n")),(0,o.kt)("p",null,"We can now call ",(0,o.kt)("inlineCode",{parentName:"p"},"useQuery")," somewhere in our app, and it will by default use the authorized fetcher."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useQuery } from 'react-query';\nimport { authorizedFetch } from '~/auth';\n\nconst QueryComponent = () => {\n  // Note that only the resource is requested here\n  // that's because the API base URL is prepended in our fetcher\n  const { data, error, isLoading, isError } = useQuery('resource');\n\n  return (\n    <>\n      {isLoading && <p>Loading data...</p>}\n      {data && <div>Here is the data: {data}</div>}\n      {isError && <p className=\"error\">Oh No!!! {error.message}</p>}\n    </>\n  );\n};\n")),(0,o.kt)("p",null,"One great thing about React Query is request deduping and caching.",(0,o.kt)("br",{parentName:"p"}),"\n","In the following example, there will be three instances of our ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryComponent"),", but only one request will be made.\nThat would not be the case if we were to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataComponent")," from earlier, where we manually fetched the data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const SomeExample = () => (\n  <>\n    <QueryComponent />\n    <QueryComponent />\n    <QueryComponent />\n  </>\n);\n")),(0,o.kt)("p",null,"To read more about React Query, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/"},"React Query Docs"),"."))))}g.isMDXComponent=!0},4670:function(e,t,n){t.Z=n.p+"assets/images/azure-api-permissions2-a1251b609cfe9c82c5e7908365d428d5.png"},5546:function(e,t,n){t.Z=n.p+"assets/images/azure-clientid-7f51d95f1c63551cca6027589b49b102.png"},1381:function(e,t,n){t.Z=n.p+"assets/images/azure-new-1cf4168261a05409f3362b59243e7d04.png"},6680:function(e,t,n){t.Z=n.p+"assets/images/azure-replyurls-a673e5fdc87c6b2cf2e713bad508e587.png"}}]);