"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2155],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4249:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],u={title:"Security - Authorization",sidebar_label:"Authorization",slug:"/Setup/Security/Authorization",sidebar_position:2},s=void 0,l={unversionedId:"setup/Security/Authorization",id:"setup/Security/Authorization",title:"Security - Authorization",description:"| Method | Description |",source:"@site/express/setup/Security/Authorization.mdx",sourceDirName:"setup/Security",slug:"/Setup/Security/Authorization",permalink:"/express/Setup/Security/Authorization",draft:!1,editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/express/setup/Security/Authorization.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Security - Authorization",sidebar_label:"Authorization",slug:"/Setup/Security/Authorization",sidebar_position:2},sidebar:"express",previous:{title:"Sentry",permalink:"/express/Setup/Sentry"},next:{title:"CORS",permalink:"/express/Setup/Security/CORS"}},c={},p=[{value:"Authentication",id:"authentication",level:2},{value:"Authorization",id:"authorization",level:2},{value:"User values in token",id:"user-values-in-token",level:3},{value:"Roles",id:"roles",level:3},{value:"BONUS: ROT OData API query",id:"bonus-rot-odata-api-query",level:4}],d={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Authentication"),(0,i.kt)("td",{parentName:"tr",align:null},"Authentication is the process of proving that you are who you say you are. It's sometimes shortened to AuthN. The Microsoft identity platform uses the OpenID Connect protocol for handling authentication.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,i.kt)("td",{parentName:"tr",align:null},"Authorization is the act of granting an authenticated party permission to do something. It specifies what data you're allowed to access and what you can do with that data. Authorization is sometimes shortened to AuthZ. The Microsoft identity platform uses the OAuth 2.0 protocol for handling authorization.")))),(0,i.kt)("p",null,"Source: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/authentication-vs-authorization"},"Authentication vs. authorization - Microsoft identity platform")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This assumes that you have an Azure AD application registration created for your project."),(0,i.kt)("p",{parentName:"div"},"This section assume that you have created an ",(0,i.kt)("a",{parentName:"p",href:"../ApplicationRegistrations"},"Azure AD application registrations"),"."))),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"In some cases you only want to authenticate your user. to do this, add the ",(0,i.kt)("inlineCode",{parentName:"p"},"authenticate")," middleware to your routes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'router.get("/", authenticate, controller.getByOid);\nrouter.post("/", authenticate, controller.createNewUser);\n')),(0,i.kt)("h2",{id:"authorization"},"Authorization"),(0,i.kt)("p",null,"Authorization is mostly done by inspecting the authenticated token and conditionally allow or decline users from accessing certain endpoints. We are checking for values like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tid")," or tenantId: The authenticated users origin tenant ID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"acct")," or account: Users account status in tenant."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"roles"),": List of roles for this application.")),(0,i.kt)("h3",{id:"user-values-in-token"},"User values in token"),(0,i.kt)("p",null,"It's equally important to ensure that the API only responds with data or allow actions which corresponds to the authorized user's role. An example can be that you've created a multi-tenant API with a common endpoint for fetching a company's mobile subscriptions. It's then essential to actually force that multi-tenancy in your code. To accomplish this we can take a look at some of the claims provided in the token. We use token claims because they contain information about the user which are provided by a trusted resource (AD/Azure AD). "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"upn"),", User principal name: this is the same as primary email for Intility users and can be used to identify the user."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tid"),", Tenant ID: this can either be used alone if you have this filed in your dataset, or with ROT-OData API to lookup the company GUID or company code. This is especially important for multi tenant applications.")),(0,i.kt)("h3",{id:"roles"},"Roles"),(0,i.kt)("p",null,"An official guide on how to configure your application registration to use app roles and receiving them in the token can be found in this guide: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-add-app-roles-in-azure-ad-apps"},"How to: Add app roles to your application and receive them in the token")),(0,i.kt)("p",null,"Validating and checking the token is done by creating an Express middleware that validating the claims provided by the token. Passport saves the decoded token fields in the request object."),(0,i.kt)("p",null,"To implement authorization on your endpoints, add the ",(0,i.kt)("inlineCode",{parentName:"p"},"authorize")," middleware to your routes and provide a set of roles as the parameter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"router.get(\"/\", authenticate, authorize(['Api.Read']), controller.getByOid);\nrouter.post(\"/\", authenticate, authorize(['Api.Read', 'Api.Write']), controller.createNewUser);\n")),(0,i.kt)("h4",{id:"bonus-rot-odata-api-query"},"BONUS: ROT OData API query"),(0,i.kt)("p",null,"The following query can be used to get a Company's GUID and/or code (e.g. AA) by the ",(0,i.kt)("inlineCode",{parentName:"p"},"tid")," claim provided in the token by using the ROT OData API. You can find the Official API documentation here: ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.intility.com/DeveloperServices/open-rot-api"},"open-rot-api")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<ROT_BASE_URL>/ROTDirectoryAzureTenant?$filter=AzureTenantGUID eq <TENANT_ID_FROM_TOKEN>&$select=Directory, AzureTenantGUID&$expand=Directory($select=Name, CompanyGUID)")))}h.isMDXComponent=!0}}]);