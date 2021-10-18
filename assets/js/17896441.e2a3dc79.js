"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7918],{6742:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(102),r=a(7294),i=a(3727),l=a(2263),o=a(3919),s=a(412),c=(0,r.createContext)({collectLink:function(){}}),d=a(4996),u=a(9356),m=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var t,a,v=e.isNavLink,f=e.to,p=e.href,h=e.activeClassName,g=e.isActive,b=e["data-noBrokenLinkCheck"],E=e.autoAddBaseUrl,k=void 0===E||E,N=(0,n.Z)(e,m),_=(0,l.Z)().siteConfig,L=_.trailingSlash,Z=_.baseUrl,U=(0,d.C)().withBaseUrl,w=(0,r.useContext)(c),C=f||p,y=(0,o.Z)(C),T=null==C?void 0:C.replace("pathname://",""),M=void 0!==T?(a=T,k&&function(e){return e.startsWith("/")}(a)?U(a):a):void 0;M&&y&&(M=(0,u.applyTrailingSlash)(M,{trailingSlash:L,baseUrl:Z}));var A,O=(0,r.useRef)(!1),B=v?i.OL:i.rU,H=s.Z.canUseIntersectionObserver;(0,r.useEffect)((function(){return!H&&y&&null!=M&&window.docusaurus.prefetch(M),function(){H&&A&&A.disconnect()}}),[M,H,y]);var x=null!==(t=null==M?void 0:M.startsWith("#"))&&void 0!==t&&t,S=!M||!y||x;return M&&y&&!x&&!b&&w.collectLink(M),S?r.createElement("a",Object.assign({href:M},C&&!y&&{target:"_blank",rel:"noopener noreferrer"},N)):r.createElement(B,Object.assign({},N,{onMouseEnter:function(){O.current||null==M||(window.docusaurus.preload(M),O.current=!0)},innerRef:function(e){var t,a;H&&e&&y&&(t=e,a=function(){null!=M&&window.docusaurus.prefetch(M)},(A=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(A.unobserve(t),A.disconnect(),a())}))}))).observe(t))},to:M||""},v&&{isActive:g,activeClassName:h}))}},3919:function(e,t,a){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{b:function(){return n},Z:function(){return r}})},4996:function(e,t,a){a.d(t,{C:function(){return i},Z:function(){return l}});var n=a(2263),r=a(3919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,l=i.forcePrependBaseUrl,o=void 0!==l&&l,s=i.absolute,c=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(o)return t+a;var d=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+d:d}(i,a,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},5743:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===a)return e;var r,i=e.split(/[#?]/)[0],l="/"===i||i===n?i:(r=i,a?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(i,l)}},9356:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=a(5743);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var i=a(5259);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},5259:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},5172:function(e,t,a){a.r(t),a.d(t,{default:function(){return $}});var n=a(7294),r=a(6010),i=a(3783),l=a(6742),o=a(4973);var s=function(e){var t=e.metadata;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(l.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(l.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},c=a(2263),d=a(6730),u=a(9558);var m={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=m[e.versionMetadata.banner];return n.createElement(t,e)}function f(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(l.Z,{to:a,onClick:r},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,a=e.versionMetadata,i=(0,c.Z)().siteConfig.title,l=(0,d.gA)({failfast:!0}).pluginId,o=(0,u.J)(l).savePreferredVersionName,s=(0,d.Jo)(l),m=s.latestDocSuggestion,p=s.latestVersionSuggestion,h=null!=m?m:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,r.Z)(u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:i,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(f,{versionLabel:p.label,to:h.path,onClick:function(){return o(p.name)}})))}var h=function(e){var t=e.versionMetadata;return t.banner?n.createElement(p,{versionMetadata:t}):n.createElement(n.Fragment,null)},g=a(1217);function b(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function E(e){var t=e.lastUpdatedBy;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function k(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(b,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(E,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var N=a(3117),_=a(102),L="iconEdit_2_ui",Z=["className"],U=function(e){var t=e.className,a=(0,_.Z)(e,Z);return n.createElement("svg",(0,N.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(L,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function w(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(U,null),n.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var C="tag_1Okp",y="tagRegular_3MiF",T="tagWithCount_1HU1";var M=function(e){var t,a=e.permalink,i=e.name,o=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(C,(t={},t[y]=!o,t[T]=o,t))},i,o&&n.createElement("span",null,o))},A="tags_2ga9",O="tag_11ep";function B(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(A,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:O},n.createElement(M,{name:t,permalink:a}))}))))}var H="lastUpdated_13-_";function x(e){return n.createElement("div",{className:(0,r.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(B,e)))}function S(e){var t=e.editUrl,a=e.lastUpdatedAt,i=e.lastUpdatedBy,l=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,r.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(w,{editUrl:t})),n.createElement("div",{className:(0,r.Z)("col",H)},(a||i)&&n.createElement(k,{lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:i})))}function D(e){var t=e.content.metadata,a=t.editUrl,i=t.lastUpdatedAt,l=t.formattedLastUpdatedAt,o=t.lastUpdatedBy,s=t.tags,c=s.length>0,d=!!(a||i||o);return c||d?n.createElement("footer",{className:(0,r.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(x,{tags:s}),d&&n.createElement(S,{editUrl:a,lastUpdatedAt:i,lastUpdatedBy:o,formattedLastUpdatedAt:l})):n.createElement(n.Fragment,null)}var I=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function F(e){var t=e.toc,a=e.className,r=e.linkClassName,i=e.isChild;return t.length?n.createElement("ul",{className:i?void 0:a},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(F,{isChild:!0,toc:e.children,className:a,linkClassName:r}))}))):null}function P(e){var t=e.toc,a=e.className,r=void 0===a?"table-of-contents table-of-contents__left-border":a,i=e.linkClassName,l=void 0===i?"table-of-contents__link":i,o=e.linkActiveClassName,s=void 0===o?void 0:o,c=e.minHeadingLevel,d=e.maxHeadingLevel,m=(0,_.Z)(e,I),v=(0,u.LU)(),f=null!=c?c:v.tableOfContents.minHeadingLevel,p=null!=d?d:v.tableOfContents.maxHeadingLevel,h=(0,u.DA)({toc:t,minHeadingLevel:f,maxHeadingLevel:p}),g=(0,n.useMemo)((function(){if(l&&s)return{linkClassName:l,linkActiveClassName:s,minHeadingLevel:f,maxHeadingLevel:p}}),[l,s,f,p]);return(0,u.Si)(g),n.createElement(F,(0,N.Z)({toc:h,className:r,linkClassName:l},m))}var V="tableOfContents_35-E",W=["className"];var j=function(e){var t=e.className,a=(0,_.Z)(e,W);return n.createElement("div",{className:(0,r.Z)(V,"thin-scrollbar",t)},n.createElement(P,(0,N.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))},R="tocCollapsible_1PrD",z="tocCollapsibleButton_2O1e",q="tocCollapsibleContent_2Ydz",J="tocCollapsibleExpanded_3GYr";function Y(e){var t,a=e.toc,i=e.className,l=e.minHeadingLevel,s=e.maxHeadingLevel,c=(0,u.uR)({initialState:!0}),d=c.collapsed,m=c.toggleCollapsed;return n.createElement("div",{className:(0,r.Z)(R,(t={},t[J]=!d,t),i)},n.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",z),onClick:m},n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:q,collapsed:d},n.createElement(P,{toc:a,minHeadingLevel:l,maxHeadingLevel:s})))}var G=a(6159),K="docItemContainer_33ec",Q="docItemCol_3FnS",X="tocMobile_3Hoh";function $(e){var t,a=e.content,l=e.versionMetadata,o=a.metadata,c=a.frontMatter,d=c.image,m=c.keywords,v=c.hide_title,f=c.hide_table_of_contents,p=c.toc_min_heading_level,b=c.toc_max_heading_level,E=o.description,k=o.title,N=!v&&void 0===a.contentTitle,_=(0,i.Z)(),L=!f&&a.toc&&a.toc.length>0,Z=L&&("desktop"===_||"ssr"===_);return n.createElement(n.Fragment,null,n.createElement(g.Z,{title:k,description:E,keywords:m,image:d}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,r.Z)("col",(t={},t[Q]=!f,t))},n.createElement(h,{versionMetadata:l}),n.createElement("div",{className:K},n.createElement("article",null,l.badge&&n.createElement("span",{className:(0,r.Z)(u.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",l.label),L&&n.createElement(Y,{toc:a.toc,minHeadingLevel:p,maxHeadingLevel:b,className:(0,r.Z)(u.kM.docs.docTocMobile,X)}),n.createElement("div",{className:(0,r.Z)(u.kM.docs.docMarkdown,"markdown")},N&&n.createElement(G.N,null,k),n.createElement(a,null)),n.createElement(D,e)),n.createElement(s,{metadata:o}))),Z&&n.createElement("div",{className:"col col--3"},n.createElement(j,{toc:a.toc,minHeadingLevel:p,maxHeadingLevel:b,className:u.kM.docs.docTocDesktop}))))}},6159:function(e,t,a){a.d(t,{N:function(){return m},Z:function(){return v}});var n=a(102),r=a(3117),i=a(7294),l=a(6010),o=a(4973),s=a(9558),c="anchorWithStickyNavbar_31ik",d="anchorWithHideOnScrollNavbar_3R7-",u=["id"],m=function(e){var t=Object.assign({},e);return i.createElement("header",null,i.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},v=function(e){return"h1"===e?m:(t=e,function(e){var a,m=e.id,v=(0,n.Z)(e,u),f=(0,s.LU)().navbar.hideOnScroll;return m?i.createElement(t,(0,r.Z)({},v,{className:(0,l.Z)("anchor",(a={},a[d]=f,a[c]=!f,a)),id:m}),v.children,i.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+m,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(t,v)});var t}},1217:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(9105),i=a(9558),l=a(4996);function o(e){var t=e.title,a=e.description,o=e.keywords,s=e.image,c=e.children,d=(0,i.pe)(t),u=(0,l.C)().withBaseUrl,m=s?u(s,{absolute:!0}):void 0;return n.createElement(r.Z,null,t&&n.createElement("title",null,d),t&&n.createElement("meta",{property:"og:title",content:d}),a&&n.createElement("meta",{name:"description",content:a}),a&&n.createElement("meta",{property:"og:description",content:a}),o&&n.createElement("meta",{name:"keywords",content:Array.isArray(o)?o.join(","):o}),m&&n.createElement("meta",{property:"og:image",content:m}),m&&n.createElement("meta",{name:"twitter:image",content:m}),c)}},3783:function(e,t,a){var n=a(7294),r=a(412),i="desktop",l="mobile",o="ssr";function s(){return r.Z.canUseDOM?window.innerWidth>996?i:l:o}t.Z=function(){var e=(0,n.useState)((function(){return s()})),t=e[0],a=e[1];return(0,n.useEffect)((function(){function e(){a(s())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),t}}}]);