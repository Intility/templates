"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2477],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(3117),a=n(7294),o=n(2389),i=n(9443);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(9558),u=n(6010),p="tabItem_1uMI";function c(e){var t,n,r,o=e.lazy,i=e.block,c=e.defaultValue,d=e.values,m=e.groupId,h=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,s.lx)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=l(),b=v.tabGroupChoices,w=v.setTabGroupChoices,N=(0,a.useState)(k),C=N[0],x=N[1],A=[],R=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=b[m];null!=I&&I!==C&&y.some((function(e){return e.value===I}))&&x(I)}var T=function(e){var t=e.currentTarget,n=A.indexOf(t),r=y[n].value;r!==C&&(R(t),x(r),null!=m&&w(m,r))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=A.indexOf(e.currentTarget)+1;n=A[r]||A[0];break;case"ArrowLeft":var a=A.indexOf(e.currentTarget)-1;n=A[a]||A[A.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},h)},y.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,u.Z)("tabs__item",p,{"tabs__item--active":C===t}),key:t,ref:function(e){return A.push(e)},onKeyDown:S,onFocus:T,onClick:T},null!=n?n:t)}))),o?(0,a.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,o.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},5193:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=n(5064),l=n(8215),s=["components"],u={title:"AAD Authentication",sidebar_position:2},p=void 0,c={unversionedId:"configuration/authentication",id:"configuration/authentication",isDocsHomePage:!1,title:"AAD Authentication",description:"The example code is set up to use authentication. For this to work, an App Registration has to be set up in Azure AD.",source:"@site/cra/configuration/authentication.mdx",sourceDirName:"configuration",slug:"/configuration/authentication",permalink:"/cra/configuration/authentication",editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/cra/configuration/authentication.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"AAD Authentication",sidebar_position:2},sidebar:"cra",previous:{title:"GitLab Repository",permalink:"/cra/configuration/gitlab"},next:{title:"Environment Variables",permalink:"/cra/configuration/environment-variables"}},d=[{value:"UI",id:"ui",children:[],level:3},{value:"Adding reply URLs",id:"adding-reply-urls",children:[],level:3},{value:"CLI",id:"cli",children:[],level:2},{value:"Enabling authentication in your app",id:"enabling-authentication-in-your-app",children:[{value:"Forcing auth",id:"forcing-auth",children:[],level:3},{value:"Conditional auth",id:"conditional-auth",children:[],level:3}],level:2},{value:"Consuming an authenticated API",id:"consuming-an-authenticated-api",children:[{value:"SWR / React Query",id:"swr--react-query",children:[],level:3}],level:2}],m={toc:d};function h(e){var t=e.components,u=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The example code is set up to use authentication. For this to work, an App Registration has to be set up in Azure AD."),(0,o.kt)("h3",{id:"ui"},"UI"),(0,o.kt)("p",null,"Head over to ",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps"},"Azure -> Azure Active Directory -> App registrations"),"\nwith your Intility Account, and create a new registration."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"New Registration in Azure",src:n(8769).Z}),(0,o.kt)("br",{parentName:"p"}),"\n","Select a fitting name for your project, this name will be presented to the user during consent."),(0,o.kt)("p",null,"Under ",(0,o.kt)("inlineCode",{parentName:"p"},"Supported account types"),", choose either ",(0,o.kt)("inlineCode",{parentName:"p"},"Intility AS only - Single tenant")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Any Azure AD directory - Multitenant"),".\nThis can be changed later, so if you're unsure what to choose, select single tenant."),(0,o.kt)("p",null,"Under ",(0,o.kt)("inlineCode",{parentName:"p"},"Redirect URI"),", select ",(0,o.kt)("inlineCode",{parentName:"p"},"Single-page application (SPA)")," from the dropdown, and enter ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."),(0,o.kt)("p",null,"Hit the register button, and you will be taken to an overview of your newly created registration."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Finding Client ID",src:n(1440).Z}),(0,o.kt)("br",{parentName:"p"}),"\n","Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"Application (Client) ID")," GUID, and paste it into the ",(0,o.kt)("inlineCode",{parentName:"p"},"clientId")," field in your ",(0,o.kt)("inlineCode",{parentName:"p"},"index.tsx")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},'const msal = {\n  auth: {\n    clientId: "YOUR_CLIENT_ID",\n    ...\n  },\n  ...\n}\n')),(0,o.kt)("p",null,"Check out ",(0,o.kt)("a",{parentName:"p",href:"#enabling-authentication-in-your-app"},"Enabling authentication in your app")," to enable authentication in your app."),(0,o.kt)("h3",{id:"adding-reply-urls"},"Adding reply URLs"),(0,o.kt)("p",null,"For each deployment of your app, you'll need to register it. You can do that by going to the Authentication page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Adding Reply URLs",src:n(7032).Z}),(0,o.kt)("br",{parentName:"p"}),"\n","The first we need to add is the URL the deploy step makes in OpenShift:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://{your-project-slug}-dev.apps.int.intility.no\n")),(0,o.kt)("p",null,"You can also add more later if you create more environments."),(0,o.kt)("h2",{id:"cli"},"CLI"),(0,o.kt)("p",null,"Login with the Azure CLI and run the following command (rember to modify the displayName)"),(0,o.kt)(i.Z,{groupId:"shell",defaultValue:"bash",values:[{label:"bash",value:"bash"},{label:"PowerShell",value:"ps"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'az rest -u https://graph.microsoft.com/v1.0/applications -m post -b \'{"displayName":"MyApp","spa":{"redirectUris":["http://localhost:3000"]}}\'\n'))),(0,o.kt)(l.Z,{value:"ps",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ps"},'az rest -u https://graph.microsoft.com/v1.0/applications -m post -b \'{\\"displayName\\":\\"MyApp\\",\\"spa\\":{\\"redirectUris\\":[\\"http://localhost:3000\\"]}}\'\n')))),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"appId")," GUID, and paste it into the ",(0,o.kt)("inlineCode",{parentName:"p"},"clientId")," field in your ",(0,o.kt)("inlineCode",{parentName:"p"},"index.tsx")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},'const msal = {\n  auth: {\n    clientId: "YOUR_CLIENT_ID",\n    ...\n  },\n  ...\n}\n')),(0,o.kt)("p",null,"Check out ",(0,o.kt)("a",{parentName:"p",href:"#enabling-authentication-in-your-app"},"Enabling authentication in your app")," to enable authentication in your app."),(0,o.kt)("h2",{id:"enabling-authentication-in-your-app"},"Enabling authentication in your app"),(0,o.kt)("p",null,"Depending on what your applications scope is, there are different ways of enabling authentication."),(0,o.kt)("h3",{id:"forcing-auth"},"Forcing auth"),(0,o.kt)("p",null,"This is the simplest way, and can be enabled by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"forced")," prop to ",(0,o.kt)("inlineCode",{parentName:"p"},"MsalBrowserProvider"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},'ReactDOM.render(\n  <Router>\n    <MsalBrowserProvider config={msal} forced>\n                                       ^^^^^^\n      <React.StrictMode>\n        <App />\n      </React.StrictMode>\n    </MsalBrowserProvider>\n  </Router>,\n  document.getElementById("root")\n)\n')),(0,o.kt)("p",null,"This will force user authentication, and your app won't render unless the user is authenticated."),(0,o.kt)("h3",{id:"conditional-auth"},"Conditional auth"),(0,o.kt)("p",null,"If you don't want forced auth, you can implement a simple log-in button by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useAuth")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@intility/react-msal-browser"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Button } from "@intility/bifrost-react";\nimport { useAuth } from "@intility/react-msal-browser";\n\nconst LoginButton = () => {\n  const { login } = useAuth();\n  \n  return (\n    <Button onClick={login}>Login</Button>\n  )\n};\n')),(0,o.kt)("p",null,"And elsewhere in your app you can determin the login status by checking the existance of a user with ",(0,o.kt)("inlineCode",{parentName:"p"},"useUser"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useUser } from "@intility/react-msal-browser";\n\nconst MyComponent = () => {\n  const user = useUser();\n\n  return <span>{user !== null ? "Hello friend." : "Who are you?"}</span>;\n};\n')),(0,o.kt)("h2",{id:"consuming-an-authenticated-api"},"Consuming an authenticated API"),(0,o.kt)("p",null,"Consuming an authenticated API is relativly simple.\nFirst, you'll need to modify the endpoints section of your MSAL config.\nThe key needs to be the base URL of the API, and the value should be an array of scopes needed to authenticate to the API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},'const msal = {\n  endpoints: {\n    "http://localhost:5000": ["API_SCOPE"],\n    ...\n  },\n  ...\n}\n')),(0,o.kt)("p",null,"The API base URL can also be dynamically applied from an ",(0,o.kt)("a",{parentName:"p",href:"/cra/configuration/environment-variables"},"Environment Variables"),"."),(0,o.kt)(i.Z,{groupId:"typed",defaultValue:"typed",values:[{label:"TypeScript",value:"typed"},{label:"JavaScript",value:"plain"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"typed",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},'const msal = {\n  endpoints: {\n    [process.env.REACT_APP_API_URL as string]: ["API_SCOPE"],\n    ...\n  },\n  ...\n}\n'))),(0,o.kt)(l.Z,{value:"plain",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/index.js"',title:'"src/index.js"'},'const msal = {\n  endpoints: {\n    [process.env.REACT_APP_API_URL]: ["API_SCOPE"],\n    ...\n  },\n  ...\n}\n')))),(0,o.kt)("p",null,"You can now consume an API with ",(0,o.kt)("inlineCode",{parentName:"p"},"authorizedFetch"),", which uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"endpoints")," config to detect which token to use in a request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useState, useEffect } from "react";\nimport { authorizedFetch } from "@intility/react-msal-browser";\n\n// This is a simplified example of data fetching in react\n// Please don\'t use in production\n\nconst DataComponent = () => {\n  const [data, setData] = useState();\n  const [error, setError] = useState();\n\n  useEffect(() => {\n    authorizedFetch("my-api/resource")\n      .then((response) => response.json())\n      .then((json) => setData(json))\n      .catch((error) => setError(error));\n  }, []);\n\n  return (\n    <>\n      {!data && !error && <p>Loading data...</p>}\n      {data && <div>Here is the data: {data}</div>}\n      {error && <p className="error">Oh No!!! {error.toString()}</p>}\n    </>\n  );\n};\n')),(0,o.kt)("h3",{id:"swr--react-query"},"SWR / React Query"),(0,o.kt)(i.Z,{groupId:"fetchinglib",defaultValue:"swr",values:[{label:"SWR",value:"swr"},{label:"React Query",value:"react-query"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"swr",mdxType:"TabItem"},(0,o.kt)("p",null,"Integrating ",(0,o.kt)("inlineCode",{parentName:"p"},"authenticatedFetch")," with SWR is very simple. All you need to do is specify a fetcher for SWR."),(0,o.kt)(i.Z,{groupId:"typed",defaultValue:"typed",values:[{label:"TypeScript",value:"typed"},{label:"JavaScript",value:"plain"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"typed",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import useSWR from "swr";\nimport { authorizedFetch } from "@intility/react-msal-browser";\n\nconst authFetcher = (url: string) =>\n  authorizedFetch(url).then((result) => result.json());\n\nconst SwrComponent = () => {\n  const { data, error } = useSWR("my-api/resource", { fetcher: authFetcher });\n\n  return (\n    <>\n      {!data && !error && <p>Loading data...</p>}\n      {data && <div>Here is the data: {data}</div>}\n      {error && <p className="error">Oh No!!! {error.toString()}</p>}\n    </>\n  );\n};\n'))),(0,o.kt)(l.Z,{value:"plain",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import useSWR from "swr";\nimport { authorizedFetch } from "@intility/react-msal-browser";\n\nconst authFetcher = (url) =>\n  authorizedFetch(url).then((result) => result.json());\n\nconst SwrComponent = () => {\n  const { data, error } = useSWR("my-api/resource", { fetcher: authFetcher });\n\n  return (\n    <>\n      {!data && !error && <p>Loading data...</p>}\n      {data && <div>Here is the data: {data}</div>}\n      {error && <p className="error">Oh No!!! {error.toString()}</p>}\n    </>\n  );\n};\n')))),(0,o.kt)("p",null,"We could take this one step further, and assign the fetcher globally using ",(0,o.kt)("inlineCode",{parentName:"p"},"SWRConfig"),"."),(0,o.kt)(i.Z,{groupId:"typed",defaultValue:"typed",values:[{label:"TypeScript",value:"typed"},{label:"JavaScript",value:"plain"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"typed",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},'import { SWRConfig } from "swr";\nimport { authorizedFetch } from "@intility/react-msal-browser";\n\n// Note that we apply a base url to every request\nconst swr = {\n  fetcher: (path: string) =>\n    authorizedFetch((process.env.REACT_APP_API_URL as string) + path)\n    .then(response => response.json())\n};\n\nReactDOM.render(\n  <Router>\n    <MsalBrowserProvider config={msal} forced>\n      <SWRConfig value={swr}>\n          <React.StrictMode>\n            <App />\n          </React.StrictMode>\n      </SWRConfig>\n    </MsalBrowserProvider>\n  </Router>,\n  document.getElementById("root")\n);\n'))),(0,o.kt)(l.Z,{value:"plain",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},'import { SWRConfig } from "swr";\nimport { authorizedFetch } from "@intility/react-msal-browser";\n\n// Note that we apply a base url to every request\nconst swr = {\n  fetcher: (path) =>\n    authorizedFetch(process.env.REACT_APP_API_URL + path)\n    .then(response => response.json())\n};\n\nReactDOM.render(\n  <Router>\n    <MsalBrowserProvider config={msal} forced>\n      <SWRConfig value={swr}>\n          <React.StrictMode>\n            <App />\n          </React.StrictMode>\n      </SWRConfig>\n    </MsalBrowserProvider>\n  </Router>,\n  document.getElementById("root")\n);\n')))),(0,o.kt)("p",null,"We can now call ",(0,o.kt)("inlineCode",{parentName:"p"},"useSWR")," somewhere in our app, and it will by default use the authorized fetcher."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import useSWR from "swr";\nimport { authorizedFetch } from "@intility/react-msal-browser";\n\nconst SwrComponent = () => {\n  // Note that only the resource is requested here\n  // that\'s because the API base URL is prepended in our fetcher\n  const { data, error } = useSWR("resource");\n\n  return (\n    <>\n      {!data && !error && <p>Loading data...</p>}\n      {data && <div>Here is the data: {data}</div>}\n      {error && <p className="error">Oh No!!! {error.toString()}</p>}\n    </>\n  );\n};\n')),(0,o.kt)("p",null,"One great thing about SWR is request deduping and caching.",(0,o.kt)("br",{parentName:"p"}),"\n","In the following example, there will be three instances of our ",(0,o.kt)("inlineCode",{parentName:"p"},"SwrComponent"),", but only one request will be made.\nThat would not be the case if we were to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataComponent")," from earlier, where we manually fetched the data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const SomeExample = () => (\n  <>\n    <SwrComponent />\n    <SwrComponent />\n    <SwrComponent />\n  </>\n);\n")),(0,o.kt)("p",null,"To read more about SWR, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://swr.vercel.app/"},"SWR Docs"),".")),(0,o.kt)(l.Z,{value:"react-query",mdxType:"TabItem"},(0,o.kt)("p",null,"Integrating ",(0,o.kt)("inlineCode",{parentName:"p"},"authenticatedFetch")," with React Query is very simple. All you need to do is specify a query function for React Query."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useQuery } from \'react-query\';\nimport { authorizedFetch } from "@intility/react-msal-browser";\n\nconst authFetcher = (url: string) =>\n  authorizedFetch(url).then((result) => result.json());\n\nconst QueryComponent = () => {\n  const { data, error, isLoading, isError } = useQuery("my-api/resource", async () => {\n    let response = await authorizedFetch("my-api/resource");\n    return await response.json();\n  });\n\n  return (\n    <>\n      {isLoading && <p>Loading data...</p>}\n      {data && <div>Here is the data: {data}</div>}\n      {isError && <p className="error">Oh No!!! {error.message}</p>}\n    </>\n  );\n};\n')),(0,o.kt)("p",null,"We could take this one step further, and assign a global default query function using ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryClient")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryClientProvider"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},'import { QueryClient, QueryClientProvider } from "react-query";\nimport { authorizedFetch } from "@intility/react-msal-browser";\n\n// Note that we apply a base url to every request\nconst defaultQueryFn = async ({ queryKey }) => {\n  let response = await authorizedFetch((process.env.REACT_APP_API_URL as string) + queryKey[0]);\n  return await response.json();\n};\n\nconst queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      queryFn: defaultQueryFn,\n    },\n  },\n});\n\nReactDOM.render(\n  <Router>\n    <MsalBrowserProvider config={msal} forced>\n      <QueryClientProvider value={queryClient}>\n          <React.StrictMode>\n            <App />\n          </React.StrictMode>\n      </QueryClientProvider>\n    </MsalBrowserProvider>\n  </Router>,\n  document.getElementById("root")\n);\n')),(0,o.kt)("p",null,"We can now call ",(0,o.kt)("inlineCode",{parentName:"p"},"useQuery")," somewhere in our app, and it will by default use the authorized fetcher."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useQuery } from "react-query";\nimport { authorizedFetch } from "@intility/react-msal-browser";\n\nconst QueryComponent = () => {\n  // Note that only the resource is requested here\n  // that\'s because the API base URL is prepended in our fetcher\n  const { data, error, isLoading, isError } = useQuery("resource");\n\n  return (\n    <>\n      {isLoading && <p>Loading data...</p>}\n      {data && <div>Here is the data: {data}</div>}\n      {isError && <p className="error">Oh No!!! {error.message}</p>}\n    </>\n  );\n};\n')),(0,o.kt)("p",null,"One great thing about React Query is request deduping and caching.",(0,o.kt)("br",{parentName:"p"}),"\n","In the following example, there will be three instances of our ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryComponent"),", but only one request will be made.\nThat would not be the case if we were to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataComponent")," from earlier, where we manually fetched the data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const SomeExample = () => (\n  <>\n    <QueryComponent />\n    <QueryComponent />\n    <QueryComponent />\n  </>\n);\n")),(0,o.kt)("p",null,"To read more about React Query, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/"},"React Query Docs"),"."))))}h.isMDXComponent=!0},1440:function(e,t,n){t.Z=n.p+"assets/images/azure-clientid-7f51d95f1c63551cca6027589b49b102.png"},8769:function(e,t,n){t.Z=n.p+"assets/images/azure-new-1cf4168261a05409f3362b59243e7d04.png"},7032:function(e,t,n){t.Z=n.p+"assets/images/azure-replyurls-a673e5fdc87c6b2cf2e713bad508e587.png"}}]);