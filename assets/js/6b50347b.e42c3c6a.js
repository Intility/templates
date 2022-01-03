"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8710],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,v=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(3117),a=n(7294),i=n(2389),o=n(9443);var l=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(6681),u=n(6010),p="tabItem_1uMI";function s(e){var t,n,i,o=e.lazy,s=e.block,d=e.defaultValue,m=e.values,v=e.groupId,f=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,c.lx)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=b[0])?void 0:i.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=l(),N=y.tabGroupChoices,I=y.setTabGroupChoices,C=(0,a.useState)(g),E=C[0],A=C[1],w=[],T=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var x=N[v];null!=x&&x!==E&&h.some((function(e){return e.value===x}))&&A(x)}var j=function(e){var t=e.currentTarget,n=w.indexOf(t),r=h[n].value;r!==E&&(T(t),A(r),null!=v&&I(v,r))},R=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.currentTarget)+1;n=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.currentTarget)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":s},f)},h.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return w.push(e)},onKeyDown:R,onFocus:j,onClick:j},i,{className:(0,u.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(b.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function d(e){var t=(0,i.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},2104:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return v}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=n(6396),l=n(8215),c=["components"],u={title:"Deploy",sidebar_position:7},p=void 0,s={unversionedId:"configuration/deploy",id:"configuration/deploy",title:"Deploy",description:"Remember to set up the GitLab Deploy Token!",source:"@site/cra/configuration/deploy.mdx",sourceDirName:"configuration",slug:"/configuration/deploy",permalink:"/cra/configuration/deploy",editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/cra/configuration/deploy.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Deploy",sidebar_position:7},sidebar:"cra",previous:{title:"Sentry",permalink:"/cra/configuration/sentry"},next:{title:"Adding Environments",permalink:"/cra/advanced/adding-environments"}},d=[{value:"Create project",id:"create-project",children:[],level:2},{value:"Acquire Token",id:"acquire-token",children:[],level:2}],m={toc:d};function v(e){var t=e.components,u=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"GitLab Deploy Token")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Remember to set up the ",(0,i.kt)("a",{parentName:"p",href:"/cra/configuration/gitlab#add-gitlab-deploy-token"},"GitLab Deploy Token"),"!"))),(0,i.kt)("p",null,"The included deploy job will deploy your project to OpenShift. For this to work, you need to create a project in OpenShift, and acquire a token for Openshift."),(0,i.kt)("h2",{id:"create-project"},"Create project"),(0,i.kt)(o.Z,{groupId:"openshift",defaultValue:"ui",values:[{label:"UI",value:"ui"},{label:"CLI",value:"cli"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"ui",mdxType:"TabItem"},(0,i.kt)("p",null,"Go to ",(0,i.kt)("a",{parentName:"p",href:"https://console.apps.openshift.intility.com/"},"our OpenShift instance")," and log in as Intility Developer."),(0,i.kt)("p",null,"Create a project, the name should be ",(0,i.kt)("inlineCode",{parentName:"p"},"aa-<GITLAB_SLUG>-dev"),", e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"aa-my-app-dev"),".",(0,i.kt)("br",{parentName:"p"}),"\n","Add a fitting display name and description if you feel like it.")),(0,i.kt)(l.Z,{value:"cli",mdxType:"TabItem"},(0,i.kt)("p",null,"The name should be ",(0,i.kt)("inlineCode",{parentName:"p"},"aa-<GITLAB_SLUG>-dev"),", e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"aa-my-app-dev"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"oc new-project <projectname>\n")))),(0,i.kt)("h2",{id:"acquire-token"},"Acquire Token"),(0,i.kt)(o.Z,{groupId:"openshift",defaultValue:"ui",values:[{label:"UI",value:"ui"},{label:"CLI",value:"cli"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"ui",mdxType:"TabItem"},(0,i.kt)("p",null,"In your newly created project, switch from Developer to Administrator view in the sidebar."),(0,i.kt)("p",null,"Then go to User Management -> Service Accounts, and click Create Service Account. Change the name field to ",(0,i.kt)("inlineCode",{parentName:"p"},"gitlab-builder"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create Service Account",src:n(4042).Z})),(0,i.kt)("p",null,"After creating the Service Account, go to User Mangement -> Role Bindings, and click Create Binding. Fill the form with the following values:"),(0,i.kt)("p",null,"Role Binding Name: ",(0,i.kt)("inlineCode",{parentName:"p"},"gitlab-builder-edit"),(0,i.kt)("br",{parentName:"p"}),"\n","Role Name: ",(0,i.kt)("inlineCode",{parentName:"p"},"edit"),(0,i.kt)("br",{parentName:"p"}),"\n","Subject: Service Account",(0,i.kt)("br",{parentName:"p"}),"\n","Subject Name: ",(0,i.kt)("inlineCode",{parentName:"p"},"gitlab-builder"),"  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create Binding",src:n(6853).Z})),(0,i.kt)("p",null,"After creating the role binding, go back to Service Accounts and go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"gitlab-builder")," Service Account.",(0,i.kt)("br",{parentName:"p"}),"\n","At the bottom of page, you'll find a link to a secret named ",(0,i.kt)("inlineCode",{parentName:"p"},"gitlab-builder-token-*"),", click it.",(0,i.kt)("br",{parentName:"p"}),"\n","Copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"token")," field at the bottom of the page, and ",(0,i.kt)("a",{parentName:"p",href:"/cra/configuration/gitlab#adding-cicd-variables"},"add it to GitLab CI/CD variables")," with the key ",(0,i.kt)("inlineCode",{parentName:"p"},"OPENSHIFT_TOKEN"),".")),(0,i.kt)(l.Z,{value:"cli",mdxType:"TabItem"},(0,i.kt)("p",null,"Copy login command from OpenShift Console and paste it in a terminal.",(0,i.kt)("br",{parentName:"p"}),"\n","After logging in, the CLI will show you available projects. Follow the instructions to change to the project you just created."),(0,i.kt)("p",null,"When you have selected the right project, we need to create a Service Account."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"oc create sa gitlab-builder\noc describe sa gitlab-builder\n")),(0,i.kt)("p",null,"Note the ",(0,i.kt)("inlineCode",{parentName:"p"},"gitlab-builder-token-*")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Mountable secrets")," section."),(0,i.kt)("p",null,"Then we have to set the user to admin."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"oc policy add-role-to-user edit -z gitlab-builder\n")),(0,i.kt)("p",null,"Lastly, we have to extract the token from the secret presented in the first step."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"oc describe secret <secret-name>\n")),(0,i.kt)("p",null,"Copy the contents from the ",(0,i.kt)("inlineCode",{parentName:"p"},"token")," section and ",(0,i.kt)("a",{parentName:"p",href:"/cra/configuration/gitlab#adding-cicd-variables"},"add it to GitLab CI/CD variables")," with the key ",(0,i.kt)("inlineCode",{parentName:"p"},"OPENSHIFT_TOKEN"),"."))))}v.isMDXComponent=!0},6853:function(e,t,n){t.Z=n.p+"assets/images/openshift-rb-new-57db46973e682e35ce0b2937717ae4e7.png"},4042:function(e,t){t.Z="data:image/png;base64,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"}}]);