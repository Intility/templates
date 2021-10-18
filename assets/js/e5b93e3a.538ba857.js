"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2184],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3263:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var i=n(3117),a=n(102),r=(n(7294),n(3905)),o=["components"],l={title:".gitlab-ci.yml Overview",sidebar_position:4},p=void 0,s={unversionedId:"configuration/gitlab-ci",id:"configuration/gitlab-ci",isDocsHomePage:!1,title:".gitlab-ci.yml Overview",description:"The gitlab-ci.yml file included with the template comes with the following jobs",source:"@site/cra/configuration/gitlab-ci.mdx",sourceDirName:"configuration",slug:"/configuration/gitlab-ci",permalink:"/cra/configuration/gitlab-ci",editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/cra/configuration/gitlab-ci.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:".gitlab-ci.yml Overview",sidebar_position:4},sidebar:"cra",previous:{title:"Environment Variables",permalink:"/cra/configuration/environment-variables"},next:{title:"SonarQube",permalink:"/cra/configuration/sonarqube"}},d=[{value:"<code>build</code>",id:"build",children:[],level:2},{value:"<code>test</code>",id:"test",children:[],level:2},{value:"<code>sonarqube</code>",id:"sonarqube",children:[],level:2},{value:"<code>image</code>",id:"image",children:[],level:2},{value:"<code>sentry</code>",id:"sentry",children:[],level:2},{value:"<code>deploy</code>",id:"deploy",children:[],level:2}],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"gitlab-ci.yml")," file included with the template comes with the following jobs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"build\nbuild:dev\nbuild:prod\n\ntest\n\nsonarqube\n\nimage:dev\nimage:prod\n\nsentry:dev\nsentry:prod\n\ndeploy:dev\n.deploy:prod\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This page describes jobs of the current version of the templates.\nIf you use an old version, they might differ.\nCheck out the ",(0,r.kt)("a",{parentName:"p",href:"/cra/advanced/upgrade-pipeline"},"pipeline upgrade guide")," to update to the V1 pipeline."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"All ",(0,r.kt)("inlineCode",{parentName:"p"},"*:dev")," jobs is set to run on pushes to ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"All ",(0,r.kt)("inlineCode",{parentName:"p"},"*:prod")," jobs are set to run when tags are pushed to the repository."))),(0,r.kt)("h2",{id:"build"},(0,r.kt)("inlineCode",{parentName:"h2"},"build")),(0,r.kt)("p",null,"The main ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," job runs ",(0,r.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/available-scripts/#npm-run-build"},(0,r.kt)("inlineCode",{parentName:"a"},"npm run build"))," on every push to all branches (except master).\nIt will pass some default environment variables;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"REACT_APP_SENTRY_DSN")," will be ",(0,r.kt)("a",{parentName:"li",href:"/cra/configuration/sentry#acquire-token"},(0,r.kt)("inlineCode",{parentName:"a"},"SENTRY_ENV"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"REACT_APP_SENTRY_ENVIRONMENT")," will be the git branch name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"REACT_APP_SENTRY_RELEASE")," will be the git commit SHA"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"REACT_APP_REDIRECT_URI")," will be",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"https://{projectSlug}-{branchName}.openshift-inside.intility.no"))),(0,r.kt)("p",null,"It also creates an artifact of the ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," folder that is created,\nwhich will be passed onto later jobs."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"build:*")," pipeline does the same as build,\nexcept it adds a GitLab environment.\nThe base job uses the GitLab environment name to configure the Sentry environment."),(0,r.kt)("h2",{id:"test"},(0,r.kt)("inlineCode",{parentName:"h2"},"test")),(0,r.kt)("p",null,"This job simply runs the ",(0,r.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/available-scripts/#npm-test"},(0,r.kt)("inlineCode",{parentName:"a"},"npm test"))," script."),(0,r.kt)("h2",{id:"sonarqube"},(0,r.kt)("inlineCode",{parentName:"h2"},"sonarqube")),(0,r.kt)("p",null,"This job uses the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/"},"SonarScanner CLI")," to upload the source code to SonarQube.\nThe pipeline will continue if this job fails, but it should be looked into."),(0,r.kt)("h2",{id:"image"},(0,r.kt)("inlineCode",{parentName:"h2"},"image")),(0,r.kt)("p",null,"The image jobs builds a docker image with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile.CI")," dockerfile,\nand with the build output from the ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," jobs."),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"image:dev")," job, it pushes two tags, one with ",(0,r.kt)("inlineCode",{parentName:"p"},"dev"),", and one with the pipeline id.\nFor the ",(0,r.kt)("inlineCode",{parentName:"p"},"image:prod")," job, the tags pushed are ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," and the tag name."),(0,r.kt)("h2",{id:"sentry"},(0,r.kt)("inlineCode",{parentName:"h2"},"sentry")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sentry")," job uses the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.sentry.io/product/cli/"},"Sentry CLI")," to create a new release.\nThe release name will be the git commit SHA.\nIt will connect the release to the current commit, and upload sourcemaps from the build step.\nLastly it will associate the release with the right env."),(0,r.kt)("h2",{id:"deploy"},(0,r.kt)("inlineCode",{parentName:"h2"},"deploy")),(0,r.kt)("p",null,"This is the main job for deploying to OpenShift.",(0,r.kt)("br",{parentName:"p"}),"\n","It will create an environment in GitLab, with the URL to the running app."),(0,r.kt)("p",null,"It uses Helm to install the app to an OpenShift project."),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy:dev"),", the route defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://{projectSlug}-dev.apps.int.intility.no"),".",(0,r.kt)("br",{parentName:"p"}),"\n","For ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy:prod"),", the route defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://{projectSlug}.apps.int.intility.no"),"."))}m.isMDXComponent=!0}}]);