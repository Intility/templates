"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4862],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=i,v=m["".concat(d,".").concat(u)]||m[u]||c[u]||r;return t?a.createElement(v,o(o({ref:n},s),{},{components:t})):a.createElement(v,o({ref:n},s))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3074:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var a=t(3117),i=t(102),r=(t(7294),t(3905)),o=["components"],l={title:"Adding Environments",sidebar_position:1},d=void 0,p={unversionedId:"advanced/adding-environments",id:"advanced/adding-environments",title:"Adding Environments",description:"The included pipeline contains jobs for dev and prod environments.",source:"@site/cra/advanced/adding-environments.mdx",sourceDirName:"advanced",slug:"/advanced/adding-environments",permalink:"/cra/advanced/adding-environments",editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/cra/advanced/adding-environments.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Adding Environments",sidebar_position:1},sidebar:"cra",previous:{title:"Deploy",permalink:"/cra/configuration/deploy"},next:{title:"Deploy with ArgoCD",permalink:"/cra/advanced/deploy-argocd"}},s=[{value:"Enabling the <code>deploy:prod</code> job",id:"enabling-the-deployprod-job",children:[{value:"Trigger production jobs",id:"trigger-production-jobs",children:[],level:3},{value:"Separate OpenShift project",id:"separate-openshift-project",children:[],level:3}],level:2},{value:"Adding even more Environments",id:"adding-even-more-environments",children:[],level:2}],c={toc:s};function m(e){var n=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The included pipeline contains jobs for ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"prod")," environments.\nHere we'll talk about enabling, using and adding more environments."),(0,r.kt)("h2",{id:"enabling-the-deployprod-job"},"Enabling the ",(0,r.kt)("inlineCode",{parentName:"h2"},"deploy:prod")," job"),(0,r.kt)("p",null,"The provided ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy:prod")," job is disabled by default.\nThis is to force you to make an active choice on wether you want to use the job or ",(0,r.kt)("a",{parentName:"p",href:"/cra/advanced/deploy-argocd"},"ArgoCD"),"."),(0,r.kt)("p",null,"To enable the job, simply remove the ",(0,r.kt)("inlineCode",{parentName:"p"},".")," from the last job."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title=".gitlab-ci.yml"',title:'".gitlab-ci.yml"'},"- .deploy:prod:\n+ deploy:prod:\n")),(0,r.kt)("h3",{id:"trigger-production-jobs"},"Trigger production jobs"),(0,r.kt)("p",null,"To trigger the production jobs, simply run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm version [major|minor|patch]\ngit push --tags\n")),(0,r.kt)("p",null,"This will update the ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," field in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),",\nupdate the ",(0,r.kt)("inlineCode",{parentName:"p"},"appVersion")," field in ",(0,r.kt)("inlineCode",{parentName:"p"},"chart/Chart.yaml"),",\nand create a git tag with the version."),(0,r.kt)("p",null,"After all the other jobs has completed, we can manually trigger the ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy:prod")," job.\nThis is manual by design, and shouldn't be set to automatic."),(0,r.kt)("h3",{id:"separate-openshift-project"},"Separate OpenShift project"),(0,r.kt)("p",null,"You can, and should create a separate OpenShift project to host the production environment."),(0,r.kt)("p",null,"To do this, simply follow the ",(0,r.kt)("a",{parentName:"p",href:"/cra/configuration/deploy"},"same steps as earlier"),".\nThis time, name it ",(0,r.kt)("inlineCode",{parentName:"p"},"aa-<project-slug>-prod"),".\nWhen adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"OPENSHIFT_TOKEN")," to CI/CD variables, select ",(0,r.kt)("inlineCode",{parentName:"p"},"prod")," as the Environment scope.\nThis variable will then be used instead of the default one in the ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy:prod")," job."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"prod scoped variable",src:t(8230).Z})),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you can't see the ",(0,r.kt)("inlineCode",{parentName:"p"},"prod")," environment when creating a variable,\nyou need to trigger the production jobs first.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"build:prod")," job will then provision the ",(0,r.kt)("inlineCode",{parentName:"p"},"prod")," environment,\nand you can insert the ",(0,r.kt)("inlineCode",{parentName:"p"},"OPENSHIFT_TOKEN")," before triggering the deploy job."))),(0,r.kt)("h2",{id:"adding-even-more-environments"},"Adding even more Environments"),(0,r.kt)("p",null,"Usually, a development and a production environment is enough.\nIn big applications however, you might see the need for more environments."),(0,r.kt)("p",null,"In this example, we will set up a QA environment.\nTo do this, we will simply copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"prod")," jobs, and create our own for ",(0,r.kt)("inlineCode",{parentName:"p"},"qa")," instead."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".gitlab-ci.yml"',title:'".gitlab-ci.yml"'},"build:qa:\n  extends: build:dev\n  environment:\n    name: qa\n  rules:\n    - if: '$CI_COMMIT_TAG'\n\nimage:qa:\n  extends: image:dev\n  variables:\n    IMAGE_TAG: qa\n  rules:\n    - if: '$CI_COMMIT_TAG'\n  needs: [ \"build:qa\" ]\n\nsentry:qa:\n  extends: sentry:dev\n  variables:\n    SENTRY_ENV: qa\n  rules:\n    - if: '$CI_COMMIT_TAG'\n  needs: [ \"build:qa\" ]\n\n.deploy:qa:\n  extends: deploy:dev\n  variables:\n    ROUTE: $CI_PROJECT_NAME-qa.apps.int.intility.no\n  environment:\n    name: qa\n    url: https://$CI_PROJECT_NAME-qa.apps.int.intility.no\n  rules:\n    - if: '$CI_COMMIT_TAG'\n  needs: [ \"test\", \"image:qa\" ]\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We don't override the Sentry release and the image version,\nto avoid version collisions with the production jobs."))),(0,r.kt)("p",null,"This example will, like the production jobs, be triggered by git tags.\nBut it will automatically deploy it to the QA environment,\nwhich will be created in the default OpenShift project,\nunless you've created a custom QA project."))}m.isMDXComponent=!0},8230:function(e,n,t){n.Z=t.p+"assets/images/gitlab-scoped-prod-604c558ff3dbe92cf6e9d99aa5d91ba6.png"}}]);