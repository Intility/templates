"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8120],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,i(i({ref:e},l),{},{components:n})):r.createElement(m,i({ref:e},l))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7102:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={title:"Testing",sidebar_position:1},p=void 0,c={unversionedId:"topics/testing",id:"topics/testing",title:"Testing",description:"Testing is important. Your app is shipped with a tests folder, which contains a bunch of example tests. In order to",source:"@site/fastapi/topics/testing.mdx",sourceDirName:"topics",slug:"/topics/testing",permalink:"/fastapi/topics/testing",draft:!1,editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/fastapi/topics/testing.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Testing",sidebar_position:1},sidebar:"python",previous:{title:"Sentry",permalink:"/fastapi/setup/sentry"},next:{title:"SQLmodel and migrations",permalink:"/fastapi/topics/migrations"}},l={},u=[],f={toc:u};function d(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Testing is important. Your app is shipped with a ",(0,a.kt)("inlineCode",{parentName:"p"},"tests")," folder, which contains a bunch of example tests. In order to\nunderstand them, you should read these resources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://fastapi.tiangolo.com/tutorial/testing/"},"Official docs on testing")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://fastapi.tiangolo.com/advanced/testing-database/"},"Official docs on testing a database")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://fastapi.tiangolo.com/advanced/async-tests/"},"Official docs on async tests"))),(0,a.kt)("p",null,"And lastly, learn about ",(0,a.kt)("inlineCode",{parentName:"p"},"pytest"),", specifically how ",(0,a.kt)("inlineCode",{parentName:"p"},"conftest.py")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"fixtures")," work.\nYou can do so here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.pytest.org/en/6.2.x/fixture.html"},"Official docs on pytest fixtures")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.pytest.org/en/6.2.x/fixture.html#scope-sharing-fixtures-across-classes-modules-packages-or-session"},"Official docs on pytest ",(0,a.kt)("inlineCode",{parentName:"a"},"conftest.py")))),(0,a.kt)("p",null,"When running tests, remember to first run your containers by running ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose up"),".\nYou can now run ",(0,a.kt)("inlineCode",{parentName:"p"},"pytest")," through ",(0,a.kt)("inlineCode",{parentName:"p"},"poetry"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"poetry run pytest . --cov\n")),(0,a.kt)("p",null,"You can also run tests through PyCharm. Right click your ",(0,a.kt)("inlineCode",{parentName:"p"},"tests")," folder and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Run 'pytest in tests'"),".\nIf you're facing issues, click the dropdown in the top right corner and ensure the tests are run from your root folder."))}d.isMDXComponent=!0}}]);