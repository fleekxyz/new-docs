"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[3826],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7855:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={draft:!1,title:"Changelog - January 22nd, 2024",sidebarCollapsible:!1,sidebar_position:6,date:new Date("2023-01-10T09:00:00.000Z"),description:"Welcome to the documentation for the beta of Fleek.xyz. This is the changelog for January 22nd, 2024, find all the new features & updates of the Fleek Platform here.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Accounts","Guide","Learn","Fleek"]},l=void 0,o={unversionedId:"changelog-22-01-24",id:"changelog-22-01-24",title:"Changelog - January 22nd, 2024",description:"Welcome to the documentation for the beta of Fleek.xyz. This is the changelog for January 22nd, 2024, find all the new features & updates of the Fleek Platform here.",source:"@site/changelog/changelog-22-01-24.md",sourceDirName:".",slug:"/changelog-22-01-24",permalink:"/changelog/changelog-22-01-24",draft:!1,editUrl:"https://github.com/fleekxyz/fleek-xyz-docs/changelog/changelog-22-01-24.md",tags:[{label:"Accounts",permalink:"/changelog/tags/accounts"},{label:"Guide",permalink:"/changelog/tags/guide"},{label:"Learn",permalink:"/changelog/tags/learn"},{label:"Fleek",permalink:"/changelog/tags/fleek"}],version:"current",lastUpdatedAt:1712163359,formattedLastUpdatedAt:"Apr 3, 2024",sidebarPosition:6,frontMatter:{draft:!1,title:"Changelog - January 22nd, 2024",sidebarCollapsible:!1,sidebar_position:6,date:"2023-01-10T09:00:00.000Z",description:"Welcome to the documentation for the beta of Fleek.xyz. This is the changelog for January 22nd, 2024, find all the new features & updates of the Fleek Platform here.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Accounts","Guide","Learn","Fleek"]},sidebar:"defaultSidebar",previous:{title:"Changelog - November 9th, 2023",permalink:"/changelog/changelog-09-11-23"},next:{title:"Changelog - March 11th, 2024",permalink:"/changelog/changelog-03-11-24"}},s={},c=[{value:"New Features",id:"new-features",level:3},{value:"Improvements",id:"improvements",level:3},{value:"Fixes",id:"fixes",level:3},{value:"Backoffice &amp; Monitoring",id:"backoffice--monitoring",level:3}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this changelog, we are introducing some changes to the deployment overview page, increasing the storage upload limit, and some quality-of-life improvements that we've implemented from the feedback all our users have been sharing."),(0,r.kt)("h3",{id:"new-features"},"New Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Automatic ENS integration is now available."),(0,r.kt)("li",{parentName:"ul"},"New build breakdown in the deployment overview."),(0,r.kt)("li",{parentName:"ul"},"Wallet linking is enabled for email accounts."),(0,r.kt)("li",{parentName:"ul"},"Email linking is enabled for wallet accounts."),(0,r.kt)("li",{parentName:"ul"},"Duplciate detection in the storage before uploading."),(0,r.kt)("li",{parentName:"ul"},"Integrated ENS name resolution for users that have authenticated with a wallet and have an ENS name."),(0,r.kt)("li",{parentName:"ul"},"Added async availability for domain names."),(0,r.kt)("li",{parentName:"ul"},"Added async availability for environment variables."),(0,r.kt)("li",{parentName:"ul"},"Added async availability validation for private gateways name."),(0,r.kt)("li",{parentName:"ul"},"Added async availability validation for site name."),(0,r.kt)("li",{parentName:"ul"},"Added async availability validation for emails.")),(0,r.kt)("h3",{id:"improvements"},"Improvements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adjusted the deployment tags to show previews, current, and outdated."),(0,r.kt)("li",{parentName:"ul"},"Increased the storage upload limit to 2GB."),(0,r.kt)("li",{parentName:"ul"},"Changed the way we create pins so we display it immediatly in the UI after upload is complete."),(0,r.kt)("li",{parentName:"ul"},"Increased the docker image name character size to 50 characters."),(0,r.kt)("li",{parentName:"ul"},"Increased the env variable value character size to 250 characters."),(0,r.kt)("li",{parentName:"ul"},"Added copy to clipboard button in the deployment overview."),(0,r.kt)("li",{parentName:"ul"},"Improved the efficacy of the site screenshot generation."),(0,r.kt)("li",{parentName:"ul"},"Duplicated uploads are now skipped and marked as duplicates."),(0,r.kt)("li",{parentName:"ul"},"Site slug now has a maximum of 63 characters long."),(0,r.kt)("li",{parentName:"ul"},"Increased the succes rate of the screenshot service.")),(0,r.kt)("h3",{id:"fixes"},"Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a typo in the docker image tooltip."),(0,r.kt)("li",{parentName:"ul"},"Fixed a problem where the site slug was not clickable after the first deployment."),(0,r.kt)("li",{parentName:"ul"},"Disabled the redeployment button while the first deployment is in progress."),(0,r.kt)("li",{parentName:"ul"},"ENS modal now closes after clicking 'Ok, I have added it' button."),(0,r.kt)("li",{parentName:"ul"},"NextJS template image is now displaying in all browsers"),(0,r.kt)("li",{parentName:"ul"},"Storage tooltip now displays the correct information."),(0,r.kt)("li",{parentName:"ul"},"Project name can be change on Arc Browsers."),(0,r.kt)("li",{parentName:"ul"},"ENS subnames can be added correctly to a site."),(0,r.kt)("li",{parentName:"ul"},"Only images can be uploaded as avatars now."),(0,r.kt)("li",{parentName:"ul"},"Domains are removed from the list immeditally after triggering the deletion."),(0,r.kt)("li",{parentName:"ul"},"Loader is now visible in light theme.")),(0,r.kt)("h3",{id:"backoffice--monitoring"},"Backoffice & Monitoring"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added the build settings in the deployment details information in the backoffice for better customer support."),(0,r.kt)("li",{parentName:"ul"},"Added project and site id information in the backoffice search capabilities."),(0,r.kt)("li",{parentName:"ul"},"Added ENS names search in the backoffice to improve customer support experience."),(0,r.kt)("li",{parentName:"ul"},"Added project link on all tables in the backoffice to improve customer support experience."),(0,r.kt)("li",{parentName:"ul"},"Added Private Gateway information in the domains table.")))}u.isMDXComponent=!0}}]);