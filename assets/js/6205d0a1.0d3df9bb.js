"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[2731],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),f=i,g=u["".concat(s,".").concat(f)]||u[f]||p[f]||n;return a?r.createElement(g,o(o({ref:t},d),{},{components:a})):r.createElement(g,o({ref:t},d))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},5915:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=a(7462),i=(a(7294),a(3905));const n={draft:!1,title:"Storage",sidebarCollapsible:!1,sidebar_position:3,date:new Date("2023-01-10T09:00:00.000Z"),description:"Dive into Fleek's decentralized storage service. Offering support for IPFS, Arweave, and Filecoin, Fleek ensures high availability and performance..",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Edge Platform","CDN","Guide","Learn","Fleek"]},o=void 0,l={unversionedId:"Storage/index",id:"Storage/index",title:"Storage",description:"Dive into Fleek's decentralized storage service. Offering support for IPFS, Arweave, and Filecoin, Fleek ensures high availability and performance..",source:"@site/docs/Storage/index.md",sourceDirName:"Storage",slug:"/Storage/",permalink:"/docs/Storage/",draft:!1,tags:[{label:"Edge Platform",permalink:"/docs/tags/edge-platform"},{label:"CDN",permalink:"/docs/tags/cdn"},{label:"Guide",permalink:"/docs/tags/guide"},{label:"Learn",permalink:"/docs/tags/learn"},{label:"Fleek",permalink:"/docs/tags/fleek"}],version:"current",sidebarPosition:3,frontMatter:{draft:!1,title:"Storage",sidebarCollapsible:!1,sidebar_position:3,date:"2023-01-10T09:00:00.000Z",description:"Dive into Fleek's decentralized storage service. Offering support for IPFS, Arweave, and Filecoin, Fleek ensures high availability and performance..",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Edge Platform","CDN","Guide","Learn","Fleek"]},sidebar:"default",previous:{title:"Application Credentials",permalink:"/docs/Projects/application-credentials"},next:{title:"Sites",permalink:"/docs/Sites/"}},s={},c=[{value:"Introduction",id:"introduction",level:3},{value:"IPFS (InterPlanetary File System):",id:"ipfs-interplanetary-file-system",level:4},{value:"Filecoin:",id:"filecoin",level:4},{value:"Arweave:",id:"arweave",level:4},{value:"Add a File or Directory",id:"add-a-file-or-directory",level:3},{value:"Accessing a file or directory",id:"accessing-a-file-or-directory",level:3},{value:"Deleting a file or directory",id:"deleting-a-file-or-directory",level:3},{value:"Content Addressing",id:"content-addressing",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5254).Z,width:"1215",height:"750"})),(0,i.kt)("h3",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In Fleek we offer a storage service that you can use to store your files in a decentralized way. We support the following protocols:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"IPFS"),(0,i.kt)("li",{parentName:"ul"},"Arweave"),(0,i.kt)("li",{parentName:"ul"},"Filecoin")),(0,i.kt)("p",null,"To guarantee the best performance and availability we use a combination of these protocols. We use IPFS as the main storage protocol and we use Arweave and Filecoin as a backup layer. This allows us to provide a high availability and performance service. By default we are using Filecoin as the backup layer but all the configuration can be changed in the storage settings."),(0,i.kt)("p",null,"Storage is a service unique for every project. This means that you can have different storage configurations for each project you have in Fleek."),(0,i.kt)("h4",{id:"ipfs-interplanetary-file-system"},"IPFS (InterPlanetary File System):"),(0,i.kt)("p",null,"Fleek utilizes IPFS as its primary storage protocol, enabling decentralized storage and sharing of data through unique content addressing. IPFS offers robust peer-to-peer storage and retrieval, making it ideal for decentralized applications (dApps) and content distribution. By leveraging IPFS, Fleek ensures reliable and efficient storage for its users' files while promoting decentralization and data accessibility."),(0,i.kt)("h4",{id:"filecoin"},"Filecoin:"),(0,i.kt)("p",null,"As a backup layer, Fleek integrates Filecoin's decentralized storage capability, leveraging its ability to store and retrieve data in a secure and decentralized manner. Filecoin's Proof of Replication (PoRep) and Proof of Spacetime (PoSt) mechanisms ensure the integrity and ongoing storage of users' data, providing added assurance and trustworthiness to Fleek's storage service."),(0,i.kt)("h4",{id:"arweave"},"Arweave:"),(0,i.kt)("p",null,"Fleek incorporates Arweave as another backup layer, leveraging its decentralized storage platform known for its permanent and tamper-proof storage solutions. Arweave's blockweave structure ensures the long-term availability and immutability of stored data, making it suitable for archival purposes. By integrating Arweave into its storage service, Fleek enhances data resilience and security, catering to users' needs for durable and immutable storage solutions."),(0,i.kt)("h3",{id:"add-a-file-or-directory"},"Add a File or Directory"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We are aware that there is a bug in the UI for some users using Firefox and Linux that prevents the upload dialog box from appearing. We are investigating this issue in the meantime in case you are experiencing this issue please try with another browser. More info ",(0,i.kt)("a",{parentName:"p",href:"https://support.mozilla.org/gl/questions/1375307"},"here"),".")),(0,i.kt)("p",null,"To add a file to your storage you first need to navigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Files")," section in your project dashboard and click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Upload File")," button. This will open a modal where you can select one or multiple files to upload."),(0,i.kt)("p",null,"This will be uploaded to IPFS and in the background it will be uploading to Filecoin and/or Arweave depending on your configuration."),(0,i.kt)("p",null,"To add a directory simply select the ",(0,i.kt)("inlineCode",{parentName:"p"},"Upload Directory")," button and select the directory you want to upload."),(0,i.kt)("h3",{id:"accessing-a-file-or-directory"},"Accessing a file or directory"),(0,i.kt)("p",null,"To access a file or directory you can click on the three dots icon in the file or directory row and select the ",(0,i.kt)("inlineCode",{parentName:"p"},"Copy URL")," option. This will copy the URL to your clipboard and you can use it to access the file or directory. By default Fleek will be using Public gateways to surface the content. If you want you can set up a custom domain to access the content that will allow you to have a more performant a branded experience."),(0,i.kt)("p",null,"To do this you can follow the steps in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/Gateways"},"Gateways")," section."),(0,i.kt)("h3",{id:"deleting-a-file-or-directory"},"Deleting a file or directory"),(0,i.kt)("p",null,"To delete a file or directory you can click on the three dots icon in the file or directory row and select the ",(0,i.kt)("inlineCode",{parentName:"p"},"Delete")," option. This will remove the file or directory from your storage. This action is irreversible."),(0,i.kt)("h3",{id:"content-addressing"},"Content Addressing"),(0,i.kt)("p",null,"In Fleek, all files in storage are made content-addressable by using IPFS as the addressability layer, which means all files stored on Fleek are stored on IPFS by default aside from the decentralized-storage layer of choice (Filecoin/Arweave). Each file will receive its unique immutable IPFS content hash to make it addressable under a common denominator/format that is standard in web3."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"IPFS hashes look like: ",(0,i.kt)("inlineCode",{parentName:"li"},"QmX4XRaPP6jBSDiYr3tK7fEBWSA5QURS8WZ87ZvPRJgAqK"))),(0,i.kt)("p",null,"And they can be accessed via either Fleek's gateways, or a public gateways such as ",(0,i.kt)("inlineCode",{parentName:"p"},"ipfs.io/ipfs/<yourhash>"),". While immutable, you can use IPNS to map dynamically changing IPFS hashes to a static hash/record (IPNS). See our CLI/SDK section for instructions on how to manage IPNS records."))}u.isMDXComponent=!0},5254:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/storage-ui-4e678c810b3cc80cf0e09b975949143f.png"}}]);