"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4637],{3905:function(A,e,t){t.d(e,{Zo:function(){return p},kt:function(){return g}});var n=t(7294);function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function a(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function o(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function i(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},a=Object.keys(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var l=n.createContext({}),d=function(A){var e=n.useContext(l),t=e;return A&&(t="function"==typeof A?A(e):o(o({},e),A)),t},p=function(A){var e=d(A.components);return n.createElement(l.Provider,{value:e},A.children)},u="mdxType",s={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(A,e){var t=A.components,r=A.mdxType,a=A.originalType,l=A.parentName,p=i(A,["components","mdxType","originalType","parentName"]),u=d(t),c=r,g=u["".concat(l,".").concat(c)]||u[c]||s[c]||a;return t?n.createElement(g,o(o({ref:e},p),{},{components:t})):n.createElement(g,o({ref:e},p))}));function g(A,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var a=t.length,o=new Array(a);o[0]=c;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=A,i[u]="string"==typeof A?A:r,o[1]=i;for(var d=2;d<a;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},281:function(A,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var n=t(7462),r=t(3366),a=(t(7294),t(3905)),o=["components"],i={title:"GitLab Repository",sidebar_position:1},l=void 0,d={unversionedId:"configuration/gitlab",id:"configuration/gitlab",title:"GitLab Repository",description:"Go to New Project in GitLab.",source:"@site/react/configuration/gitlab.mdx",sourceDirName:"configuration",slug:"/configuration/gitlab",permalink:"/react/configuration/gitlab",draft:!1,editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/react/configuration/gitlab.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"GitLab Repository",sidebar_position:1},sidebar:"react",previous:{title:"Recommended Packages",permalink:"/react/getting-started/recommended-packages"},next:{title:"AAD Authentication",permalink:"/react/configuration/authentication"}},p={},u=[{value:"Pushing your application",id:"pushing-your-application",level:2},{value:"Add GitLab Deploy Token",id:"add-gitlab-deploy-token",level:2},{value:"Adding CI/CD Variables",id:"adding-cicd-variables",level:2},{value:"Adding Badges",id:"adding-badges",level:2}],s={toc:u},c="wrapper";function g(A){var e=A.components,i=(0,r.Z)(A,o);return(0,a.kt)(c,(0,n.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Go to ",(0,a.kt)("a",{parentName:"p",href:"https://gitlab.intility.com/projects/new"},"New Project in GitLab"),"."),(0,a.kt)("p",null,"Select a fitting name, it should be as globally unique and descriptive for your project as possible.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"New Project in Gitlab photo",src:t(9596).Z,width:"1199",height:"180"}),(0,a.kt)("br",{parentName:"p"}),"\n","Take note of the Project Slug, as we'll use it later to configure the project in Sentry and OpenShift."),(0,a.kt)("h2",{id:"pushing-your-application"},"Pushing your application"),(0,a.kt)("p",null,'Creating a dotnet project from a template does not automatically create a git repository for you,\nso we have to make one ourselves.\nFollow the "Push an existing folder" example,\nwhich should look something like this:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'git init --initial-branch=main\ngit remote add origin git@gitlab.intility.com:Group/intility-app.git\ngit add .\ngit commit -m "Initial commit"\ngit push -u origin main\n')),(0,a.kt)("p",null,"The pipeline will fail initially, but don't worry, we'll set it up correctly in the next steps."),(0,a.kt)("h2",{id:"add-gitlab-deploy-token"},"Add GitLab Deploy Token"),(0,a.kt)("p",null,"The pipeline publishes a docker image to GitLab Container Registry, and uses Helm to create resources in OpenShift.\nAs a result, OpenShift needs access to pull images from GCR."),(0,a.kt)("p",null,"In your GitLab repository, go to Settings -> Repository -> Deploy tokens.\nCreate a new token named ",(0,a.kt)("inlineCode",{parentName:"p"},"gitlab-deploy-token"),", and give it the ",(0,a.kt)("inlineCode",{parentName:"p"},"read_registry")," scope."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitLab Deploy Token",src:t(434).Z,width:"1356",height:"720"})),(0,a.kt)("p",null,"That's all you have to do in the repository.\nThe token is exposed as a variable in the pipeline, and helm applies it as a pull secret in OpenShift.\nRead more about GitLab deploy tokens ",(0,a.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/user/project/deploy_tokens/#gitlab-deploy-token"},"here"),"."),(0,a.kt)("h2",{id:"adding-cicd-variables"},"Adding CI/CD Variables"),(0,a.kt)("p",null,"In your project on GitLab, go to Settings -> CI / CD, and expand the Variables section.\nWe don't need to add anything yet, but it's here we'll add tokens and such in the other steps."),(0,a.kt)("h2",{id:"adding-badges"},"Adding Badges"),(0,a.kt)("p",null,"In your project on GitLab, go to Settings -> General, and expand the Badges section.\nHere you can add badges by giving them a Name, Link and Image URL."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add Badge in GitLab",src:t(9826).Z,width:"670",height:"456"})),(0,a.kt)("p",null,"We can go ahead and add a badge for our pipeline with the following values:",(0,a.kt)("br",{parentName:"p"}),"\n","Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"Pipeline"),(0,a.kt)("br",{parentName:"p"}),"\n","Link: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://gitlab.intility.com/%{project_path}"),(0,a.kt)("br",{parentName:"p"}),"\n","Image URL: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://gitlab.intility.com/%{project_path}/badges/%{default_branch}/pipeline.svg")))}g.isMDXComponent=!0},9826:function(A,e,t){e.Z=t.p+"assets/images/gitlab-badge-ebc36eca64fe0fd1a5dda6de7d2ae39d.png"},434:function(A,e,t){e.Z=t.p+"assets/images/gitlab-deploy-token-ccd4c08110149ac9716ae0ce55634d2d.png"},9596:function(A,e){e.Z="data:image/png;base64,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"}}]);