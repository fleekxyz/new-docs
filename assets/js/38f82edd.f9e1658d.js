"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[3180],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,p=u["".concat(s,".").concat(m)]||u[m]||h[m]||o;return a?n.createElement(p,i(i({ref:t},d),{},{components:a})):n.createElement(p,i({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},733:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={draft:!1,title:"Changelog - October 26th, 2023",sidebarCollapsible:!1,sidebar_position:5,date:new Date("2023-01-10T09:00:00.000Z"),description:"Welcome to the documentation for the beta of Fleek.xyz. This is the changelog for October 26th, 2023, find all the new features & updates of the Fleek Platform here.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Accounts","Guide","Learn","Fleek"]},i=void 0,l={unversionedId:"changelog-26-10-23",id:"changelog-26-10-23",title:"Changelog - October 26th, 2023",description:"Welcome to the documentation for the beta of Fleek.xyz. This is the changelog for October 26th, 2023, find all the new features & updates of the Fleek Platform here.",source:"@site/changelog/changelog-26-10-23.md",sourceDirName:".",slug:"/changelog-26-10-23",permalink:"/changelog/changelog-26-10-23",draft:!1,editUrl:"https://github.com/fleekxyz/fleek-xyz-docs/changelog/changelog-26-10-23.md",tags:[{label:"Accounts",permalink:"/changelog/tags/accounts"},{label:"Guide",permalink:"/changelog/tags/guide"},{label:"Learn",permalink:"/changelog/tags/learn"},{label:"Fleek",permalink:"/changelog/tags/fleek"}],version:"current",lastUpdatedAt:1715866371,formattedLastUpdatedAt:"May 16, 2024",sidebarPosition:5,frontMatter:{draft:!1,title:"Changelog - October 26th, 2023",sidebarCollapsible:!1,sidebar_position:5,date:"2023-01-10T09:00:00.000Z",description:"Welcome to the documentation for the beta of Fleek.xyz. This is the changelog for October 26th, 2023, find all the new features & updates of the Fleek Platform here.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Accounts","Guide","Learn","Fleek"]},sidebar:"defaultSidebar",previous:{title:"Changelog - October 12th, 2023",permalink:"/changelog/changelog-12-10-23"},next:{title:"Changelog - November 9th, 2023",permalink:"/changelog/changelog-09-11-23"}},s={},c=[{value:"New Features",id:"new-features",level:3},{value:"Improvements",id:"improvements",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"CLI",id:"cli",level:3},{value:"Backoffice &amp; Monitoring",id:"backoffice--monitoring",level:3}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the changelog, we are introducing another improvement to our closed alpha release of Fleek.xyz. We are continuing with all the good feedback provided by the community, focusing heavily on storage performance and domain management!"),(0,r.kt)("h3",{id:"new-features"},"New Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can now set primary domains for Sites and Private Gateways."),(0,r.kt)("li",{parentName:"ul"},"We have implemented error collection on the front end for better debugging and customer support."),(0,r.kt)("li",{parentName:"ul"},"Now users can create sites with names using capital letters."),(0,r.kt)("li",{parentName:"ul"},"We have added an option to copy the deploy ID.")),(0,r.kt)("h3",{id:"improvements"},"Improvements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We have improved the upload speed for all files via the UI."),(0,r.kt)("li",{parentName:"ul"},'Changed "Delete Domain" in favor of "Remove Domain" to avoid confusion.'),(0,r.kt)("li",{parentName:"ul"},"We have changed the cursors for the tooltips to show an arrow as a pointer."),(0,r.kt)("li",{parentName:"ul"},"We have disabled the option to cancel a deployment that was not building."),(0,r.kt)("li",{parentName:"ul"},"We are now hiding the managed domains section where there are no domains."),(0,r.kt)("li",{parentName:"ul"},"We have increased the limit of storage in our deploying lambda to accommodate bigger site repositories."),(0,r.kt)("li",{parentName:"ul"},"We have improved the domain validation rules to prevent the creation of invalid domains."),(0,r.kt)("li",{parentName:"ul"},"We have made the GitHub avatar bigger in the deploy flow."),(0,r.kt)("li",{parentName:"ul"},"We have made the URL of the deployment card clickable to redirect to the site."),(0,r.kt)("li",{parentName:"ul"},"We have added the auto-generated domain on the site overview if there is no domain set."),(0,r.kt)("li",{parentName:"ul"},"We have removed the delete option from a domain that is in the verifying stage."),(0,r.kt)("li",{parentName:"ul"},'The "Learn More" button in the templates marketplace now opens in a new tab.')),(0,r.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where the IPNS values were not being updated after a deployment."),(0,r.kt)("li",{parentName:"ul"},"We have fixed typos in the Private Gateway delete modal."),(0,r.kt)("li",{parentName:"ul"},"We have fixed an error where the delete button was active during domain deletion."),(0,r.kt)("li",{parentName:"ul"},"Fixed an error where we were showing the incorrect message when a site name was not available."),(0,r.kt)("li",{parentName:"ul"},"We have fixed an issue with some users getting stuck on the welcome screen."),(0,r.kt)("li",{parentName:"ul"},"We have fixed a problem where the 'View Site' button on the deployment was not working."),(0,r.kt)("li",{parentName:"ul"},"We have fixed a bug where the site was available for visits while the first deployment was in progress."),(0,r.kt)("li",{parentName:"ul"},"We have fixed a problem where the 'View Site' button on the recent deployment cards was not working.")),(0,r.kt)("h3",{id:"cli"},"CLI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We improved error handling when the user is not using the default Fleek configuration files while deploying with GHA.")),(0,r.kt)("h3",{id:"backoffice--monitoring"},"Backoffice & Monitoring"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We have created a canary project to monitor the site deployment flow for better customer support and availability."),(0,r.kt)("li",{parentName:"ul"},"We have created a monitoring system for all of our backend services."),(0,r.kt)("li",{parentName:"ul"},"We are tracking the mean build time for sites to identify improvements to the deployment process.")))}u.isMDXComponent=!0}}]);