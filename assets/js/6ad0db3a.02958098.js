"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[394],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(o),p=a,h=u["".concat(l,".").concat(p)]||u[p]||m[p]||i;return o?n.createElement(h,r(r({ref:t},c),{},{components:o})):n.createElement(h,r({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=o[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},3047:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=o(7462),a=(o(7294),o(3905));const i={draft:!1,title:"Custom Domains",sidebarCollapsible:!1,sidebar_position:5,date:new Date("2023-01-10T09:00:00.000Z"),description:"Welcome to the documentation site for Fleek Network, the decentralized content and application layer built on established decentralized storage protocols combined with high-speed caching and an effective delivery layer.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Edge Platform","CDN","Guide","Learn","Fleek Network"]},r=void 0,s={unversionedId:"Domains/custom-domains",id:"Domains/custom-domains",title:"Custom Domains",description:"Welcome to the documentation site for Fleek Network, the decentralized content and application layer built on established decentralized storage protocols combined with high-speed caching and an effective delivery layer.",source:"@site/docs/Domains/custom-domains.md",sourceDirName:"Domains",slug:"/Domains/custom-domains",permalink:"/docs/Domains/custom-domains",draft:!1,tags:[{label:"Edge Platform",permalink:"/docs/tags/edge-platform"},{label:"CDN",permalink:"/docs/tags/cdn"},{label:"Guide",permalink:"/docs/tags/guide"},{label:"Learn",permalink:"/docs/tags/learn"},{label:"Fleek Network",permalink:"/docs/tags/fleek-network"}],version:"current",sidebarPosition:5,frontMatter:{draft:!1,title:"Custom Domains",sidebarCollapsible:!1,sidebar_position:5,date:"2023-01-10T09:00:00.000Z",description:"Welcome to the documentation site for Fleek Network, the decentralized content and application layer built on established decentralized storage protocols combined with high-speed caching and an effective delivery layer.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Edge Platform","CDN","Guide","Learn","Fleek Network"]},sidebar:"default",previous:{title:"ENS",permalink:"/docs/Domains/ens"}},l={},d=[{value:"Introduction",id:"introduction",level:3},{value:"Adding a custom domain",id:"adding-a-custom-domain",level:3},{value:"Deleting a custom domain",id:"deleting-a-custom-domain",level:3}],c={toc:d};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"To set up a custom domain, we will create a unique URL for your pull zone, which will point to the last deployed content on your site. You will then need to configure your domain to the pull zone URL using a CNAME record or an ANAME, depending on your DNS provider. This ensures that when someone visits your custom domain, they will be directed to the cached content on our CDN, resulting in faster load times."),(0,a.kt)("p",null,"In case you want to setp up a root domain you need to user a DNS provier that supports ANAME record or CNAME as a root record. Some of the most popular DNS providers that support this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cloudflare"),(0,a.kt)("li",{parentName:"ul"},"DNS Made Easy"),(0,a.kt)("li",{parentName:"ul"},"DNSimple"),(0,a.kt)("li",{parentName:"ul"},"CONSTELLIX"),(0,a.kt)("li",{parentName:"ul"},"DYN DNS"),(0,a.kt)("li",{parentName:"ul"},"Easy DNS"),(0,a.kt)("li",{parentName:"ul"},"NS1")),(0,a.kt)("p",null,"If your DNS provider does not support ANAME record and you want to use your root domain with your Fleek site, please consider migratring to one of the providers above."),(0,a.kt)("p",null,"Each time you make a new deployment on your site, we will automatically update the pull zone with the latest content. This means that your visitors will always see the most up-to-date version of your website, without any additional effort on your part."),(0,a.kt)("h3",{id:"adding-a-custom-domain"},"Adding a custom domain"),(0,a.kt)("p",null,"To add a custom domain to your site, first you need to have a site created. If you don't have a site yet, please follow the steps in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/sites"},"Sites")," section."),(0,a.kt)("p",null,"Once you have a site created, go to the site overview and click on the settings icon. In the settings page, click on the ",(0,a.kt)("strong",{parentName:"p"},"Domains")," tab. You will see a list of all the custom domains you have added to the site. To add a new custom domain, type it into the input available in the custom domains section and after we run some validations (mainly cehcking that the domain is valid and is not added to another site) you will be able to add it by clicking the ",(0,a.kt)("strong",{parentName:"p"},"Add Custom Domain")," button."),(0,a.kt)("p",null,"When the custom domain is added you will see a new row in the custom domains table with the domain you added and the status of the domain in ",(0,a.kt)("inlineCode",{parentName:"p"},"creating"),". During this process we are creating a pull zone for your site and configuring it to use the custom domain you added. This process can take up to 5 minutes. Once the pull zone is created you will be prompted the information you need to configure your DNS provider."),(0,a.kt)("p",null,"After you configure your DNS provider, you have to trigger the validation process. To do this, click on the ",(0,a.kt)("strong",{parentName:"p"},"Ok, I have add it")," button in the custom domains table. This will trigger the validation process and you will see the status of the domain change to ",(0,a.kt)("inlineCode",{parentName:"p"},"validating"),". Once the validation process is completed, you will see the status of the domain change to ",(0,a.kt)("inlineCode",{parentName:"p"},"Active"),"."),(0,a.kt)("h3",{id:"deleting-a-custom-domain"},"Deleting a custom domain"),(0,a.kt)("p",null,"To delete a custom domain, you can on the three dots icon in the custom domains table and select the delete option. This will remove the custom domain from your site and will no longer serving the content of your site."))}u.isMDXComponent=!0}}]);