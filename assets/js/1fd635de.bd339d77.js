"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5326],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return A}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=r,A=d["".concat(p,".").concat(g)]||d[g]||c[g]||a;return n?i.createElement(A,o(o({ref:t},u),{},{components:n})):i.createElement(A,o({ref:t},u))}));function A(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1807:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return A},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={title:"AAD Authorization",sidebar_position:2},p=void 0,l={unversionedId:"setup/authorization",id:"setup/authorization",title:"AAD Authorization",description:"The example code is set up to use authorization. For this to work, an App Registration has to be set up in Azure AD.",source:"@site/dotnet/setup/authorization.mdx",sourceDirName:"setup",slug:"/setup/authorization",permalink:"/dotnet/setup/authorization",draft:!1,editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/dotnet/setup/authorization.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"AAD Authorization",sidebar_position:2},sidebar:"dotnet",previous:{title:"GitLab Repository",permalink:"/dotnet/setup/gitlab"},next:{title:".gitlab-ci.yml Overview",permalink:"/dotnet/setup/gitlab-ci"}},u={},d=[{value:"API",id:"api",level:3},{value:"Add an application scope",id:"add-an-application-scope",level:3},{value:"Swagger",id:"swagger",level:2},{value:"Adding reply URLs",id:"adding-reply-urls",level:3},{value:"Access API",id:"access-api",level:3},{value:"Guest users",id:"guest-users",level:2},{value:"User Assignment in Enterprise Application",id:"user-assignment-in-enterprise-application",level:3}],c={toc:d},g="wrapper";function A(e){var t=e.components,s=(0,r.Z)(e,o);return(0,a.kt)(g,(0,i.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The example code is set up to use authorization. For this to work, an App Registration has to be set up in Azure AD."),(0,a.kt)("h3",{id:"api"},"API"),(0,a.kt)("p",null,"Head over to ",(0,a.kt)("a",{parentName:"p",href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps"},"Azure -> Azure Active Directory -> App registrations"),"\nwith your Intility Account, and create a new registration."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"New Registration in Azure",src:n(3377).Z,width:"1023",height:"631"}),(0,a.kt)("br",{parentName:"p"}),"\n","Select a fitting name for your project, this name will be presented to the user during consent."),(0,a.kt)("p",null,"Under ",(0,a.kt)("inlineCode",{parentName:"p"},"Supported account types"),", choose either ",(0,a.kt)("inlineCode",{parentName:"p"},"Intility AS only - Single tenant")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Any Azure AD directory - Multitenant"),".\nThis can be changed later, so if you're unsure what to choose, select single tenant."),(0,a.kt)("p",null,"Leave the ",(0,a.kt)("inlineCode",{parentName:"p"},"Redirect URI")," section blank."),(0,a.kt)("p",null,"Hit the register button, and you will be taken to an overview of your newly created registration."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Finding Client ID",src:n(6113).Z,width:"503",height:"203"}),(0,a.kt)("br",{parentName:"p"}),"\n","Copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"Application (Client) ID")," GUID, and paste it into the ",(0,a.kt)("inlineCode",{parentName:"p"},"AzureAd:ClientId")," field in your ",(0,a.kt)("inlineCode",{parentName:"p"},"appsettings.json")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="appsettings.json"',title:'"appsettings.json"'},'{\n  "AzureAd": {\n    "ClientId": "YOUR_CLIENT_ID",\n    ...\n  },\n  ...\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you chose Multitenant, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"AzureAd:TenantId")," field to ",(0,a.kt)("inlineCode",{parentName:"p"},"common"),".")),(0,a.kt)("h3",{id:"add-an-application-scope"},"Add an application scope"),(0,a.kt)("p",null,"Go to Expose an API in your app registration, and add a scope.\nYou will be prompted to set an Application ID URI.\nUse the suggested one, and hit Save and continue."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add a scope",src:n(1389).Z,width:"566",height:"560"})),(0,a.kt)("p",null,"Add a scope named ",(0,a.kt)("inlineCode",{parentName:"p"},"user_impersonation"),", that can be consented by ",(0,a.kt)("inlineCode",{parentName:"p"},"Admins and users"),"."),(0,a.kt)("p",null,"You can use the following descriptions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Access API as user\nAllows the app to access the API as the user.\n\nAccess API as you\nAllows the app to acces the API as you.\n")),(0,a.kt)("h2",{id:"swagger"},"Swagger"),(0,a.kt)("p",null,"In addition to creating an App Registration for the API itself, we need to make one for the Swagger client too.\nAgain head over to ",(0,a.kt)("a",{parentName:"p",href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps"},"Azure -> Azure Active Directory -> App registrations"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"New Registration in Azure",src:n(8501).Z,width:"832",height:"505"}),"  "),(0,a.kt)("p",null,"Use the same name appended with ",(0,a.kt)("inlineCode",{parentName:"p"},"Swagger"),"."),(0,a.kt)("p",null,"Under ",(0,a.kt)("inlineCode",{parentName:"p"},"Redirect URI"),", select ",(0,a.kt)("inlineCode",{parentName:"p"},"Single-page application (SPA)")," and enter ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/oauth2-redirect.html"),"."),(0,a.kt)("p",null,"Hit the register button, and you will be taken to an overview of your newly created registration."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Finding Client ID",src:n(7580).Z,width:"500",height:"197"}),(0,a.kt)("br",{parentName:"p"}),"\n","Copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"Application (Client) ID")," GUID, and paste it into the ",(0,a.kt)("inlineCode",{parentName:"p"},"AzureAd:ClientId")," field in your ",(0,a.kt)("inlineCode",{parentName:"p"},"appsettings.json")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="appsettings.json"',title:'"appsettings.json"'},'{\n  "Swagger": {\n    "ClientId": "YOUR_SWAGGER_CLIENT_ID",\n    ...\n  },\n  ...\n}\n')),(0,a.kt)("h3",{id:"adding-reply-urls"},"Adding reply URLs"),(0,a.kt)("p",null,"For each deployment of your app, you'll need to register it. You can do that by going to the Authentication page."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Adding Reply URLs",src:n(59).Z,width:"811",height:"368"}),(0,a.kt)("br",{parentName:"p"}),"\n","The first reply URLs we need to add are the localhost https URL, and the OpenShift deploy URL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://localhost:5001/oauth2-redirect.html\nhttps://{your-project-slug}-dev.apps.int.intility.no/oauth2-redirect.html\n")),(0,a.kt)("p",null,"You can also add more later if you create more environments."),(0,a.kt)("h3",{id:"access-api"},"Access API"),(0,a.kt)("p",null,"To allow Swagger to talk to the API, you need to add API permissions to the Swagger app registration.\nGo to API permissions, and hit Add a permission.\nUnder My APIs, find your API, select the scope(s) and press Add permissions."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add API permission",src:n(9520).Z,width:"832",height:"542"})),(0,a.kt)("h2",{id:"guest-users"},"Guest users"),(0,a.kt)("p",null,"The template comes with an authorization policy that denies guest users in Azure AD from accessing the API.\nThis policy is enabled when the application is not set up as multitenant.\nIf you want guest users to access your single tenant API, simply remove the lines applying the policy."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title=Startup.cs",title:"Startup.cs"},'services.AddAuthorization(options =>\n{\n    var tenantId = Configuration["AzureAd:TenantId"];\n    if (tenantId != "common" && tenantId != "organizations")\n    {\n        options.AddPolicy("NoGuests", policy => policy.RequireClaim(\n            ClaimConstants.TenantId,\n            tenantId));\n    }\n});\n')),(0,a.kt)("h3",{id:"user-assignment-in-enterprise-application"},"User Assignment in Enterprise Application"),(0,a.kt)("p",null,"The policy successfully denies guest users access to the API.\nHowever, it's not very user friendly, since the user won't know their denied until they call the API.\nUsing user assignment in Enterprise Applications, we can deny users during authentication."),(0,a.kt)("p",null,"Go to ",(0,a.kt)("a",{parentName:"p",href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/AllApps/menuId/"},"Azure AD -> Enterprise Applications")," and find your application (you can search by Client ID).",(0,a.kt)("br",{parentName:"p"}),"\n","Under Properties, enable ",(0,a.kt)("inlineCode",{parentName:"p"},"User assignment required?")," and save."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Enable User assignment required",src:n(4986).Z,width:"412",height:"39"})),(0,a.kt)("p",null,"Then, go to Users and groups, and add user/group. Find users or a fitting group and assign it to the role Default Access."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Groups you select should have all users as direct members of the group. Nested groups does not work with Enterprise Applications.")),(0,a.kt)("p",null,"This should be done for all app registrations (API, Swagger and frontend)."),(0,a.kt)("p",null,"For more information, check out ",(0,a.kt)("a",{parentName:"p",href:"https://gitlab.intility.com/groups/documentation/-/wikis/Security/API-sikkerhet-med-Azure-AD"},"our internal docs.")))}A.isMDXComponent=!0},1389:function(e,t,n){t.Z=n.p+"assets/images/azure-add-scope-1b8457ba1e65c5e9f719f6ce5d8f2509.png"},9520:function(e,t,n){t.Z=n.p+"assets/images/azure-api-permissions-3bfc9e8d1623d4e3030cdc7b31ee9872.png"},6113:function(e,t,n){t.Z=n.p+"assets/images/azure-clientid-dotnet-a31cd0017a15663e6474390653500747.png"},7580:function(e,t,n){t.Z=n.p+"assets/images/azure-clientid-swagger-aeffd261b413bda085518af4de06fb52.png"},3377:function(e,t,n){t.Z=n.p+"assets/images/azure-new-dotnet-ea0e24ada63afd57d0da294dd9a43caf.png"},8501:function(e,t,n){t.Z=n.p+"assets/images/azure-new-swagger-f585ee6da48bc30d279999fb080ddcb3.png"},59:function(e,t,n){t.Z=n.p+"assets/images/azure-replyurls-swagger-a9471812a200512d52bd05df1f221d87.png"},4986:function(e,t){t.Z="data:image/png;base64,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"}}]);