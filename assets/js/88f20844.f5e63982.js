"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[3261],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return r?o.createElement(f,a(a({ref:t},d),{},{components:r})):o.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7901:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const i={title:"DNS Records",sidebar_position:2,tags:["Guides","Help","Fleek Network"]},a=void 0,s={unversionedId:"dns-records",id:"dns-records",title:"DNS Records",description:"Introduction",source:"@site/guides/dns-records.md",sourceDirName:".",slug:"/dns-records",permalink:"/guides/dns-records",draft:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/guides/dns-records.md",tags:[{label:"Guides",permalink:"/guides/tags/guides"},{label:"Help",permalink:"/guides/tags/help"},{label:"Fleek Network",permalink:"/guides/tags/fleek-network"}],version:"current",lastUpdatedAt:1693487499,formattedLastUpdatedAt:"Aug 31, 2023",sidebarPosition:2,frontMatter:{title:"DNS Records",sidebar_position:2,tags:["Guides","Help","Fleek Network"]},sidebar:"defaultSidebar",previous:{title:"Guides",permalink:"/guides/"}},l={},u=[{value:"Introduction",id:"introduction",level:3},{value:"DNS Records",id:"dns-records",level:4},{value:"Root Domains",id:"root-domains",level:4},{value:"Subdomains",id:"subdomains",level:4}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"In this guide we will be going over key aspects to set up your DNS records correctly when using Fleek Custom Domains with your Fleek site."),(0,n.kt)("h4",{id:"dns-records"},"DNS Records"),(0,n.kt)("p",null,"Depending on the use case you want to achieve, you will need to set up different DNS records thus impacting on the DNS provider you might need."),(0,n.kt)("h4",{id:"root-domains"},"Root Domains"),(0,n.kt)("p",null,"If you want to use a root domain, you will need to set up a ANAME record pointing to the pull zone that was provided by Fleek."),(0,n.kt)("p",null,"Not all DNS providers support ANAME records so you might need to change providers, some providers that support ANAME records are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cloudflare"),(0,n.kt)("li",{parentName:"ul"},"DNS Made Easy"),(0,n.kt)("li",{parentName:"ul"},"DNSimple"),(0,n.kt)("li",{parentName:"ul"},"CONSTELLIX"),(0,n.kt)("li",{parentName:"ul"},"DYN DNS"),(0,n.kt)("li",{parentName:"ul"},"Easy DNS"),(0,n.kt)("li",{parentName:"ul"},"NS1")),(0,n.kt)("p",null,"Some of this providers like Cloudflare user CNAME and ANAME interchangeably, so if you are using Cloudflare you can use a CNAME record instead."),(0,n.kt)("h4",{id:"subdomains"},"Subdomains"),(0,n.kt)("p",null,"If you want to use a subdomain, you will need to set up a CNAME record pointing to the pull zone that was provided by Fleek. Since CNAME records are supported by most DNS providers, you should be able to use any DNS provider."),(0,n.kt)("p",null,"We do recommend using a DNS provider that supports ANAME records since it will make the setup process easier if in the future you might use a root domain."))}p.isMDXComponent=!0}}]);