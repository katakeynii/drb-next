(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(A,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1397)}])},9749:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t(6495).Z,i=t(2648).Z,s=t(1598).Z,r=t(7273).Z,n=s(t(7294)),o=i(t(3121)),l=t(2675),c=t(139),d=t(8730);t(7238);var g=i(t(9824));let u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(A){return void 0!==A.default}function E(A){return"number"==typeof A||void 0===A?A:"string"==typeof A&&/^[0-9]+$/.test(A)?parseInt(A,10):NaN}function m(A,e,t,i,s){if(!A||A["data-loaded-src"]===e)return;A["data-loaded-src"]=e;let r="decode"in A?A.decode():Promise.resolve();r.catch(()=>{}).then(()=>{if(A.parentNode){if(null==t?void 0:t.current){let e=new Event("load");Object.defineProperty(e,"target",{writable:!1,value:A});let s=!1,r=!1;t.current(a({},e,{nativeEvent:e,currentTarget:A,target:A,isDefaultPrevented:()=>s,isPropagationStopped:()=>r,persist(){},preventDefault(){s=!0,e.preventDefault()},stopPropagation(){r=!0,e.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(A)}})}let f=n.forwardRef((A,e)=>{var{imgAttributes:t,heightInt:i,widthInt:s,qualityInt:o,className:l,imgStyle:c,blurStyle:d,isLazy:g,fill:u,placeholder:h,loading:E,srcString:f,config:p,unoptimized:C,loader:Q,onLoadRef:x,onLoadingCompleteRef:w,onLoad:v,onError:j}=A,B=r(A,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","onLoad","onError"]);return E=g?"lazy":E,n.default.createElement(n.default.Fragment,null,n.default.createElement("img",Object.assign({},B,t,{width:s,height:i,decoding:"async","data-nimg":u?"fill":"1",className:l,loading:E,style:a({},c,d),ref:n.useCallback(A=>{e&&("function"==typeof e?e(A):"object"==typeof e&&(e.current=A)),A&&(j&&(A.src=A.src),A.complete&&m(A,f,x,w,C))},[f,x,w,j,C,e]),onLoad(A){let e=A.currentTarget;m(e,f,x,w,C)},onError(A){let{style:e}=A.currentTarget;"transparent"===e.color&&(e.color=""),"blur"===h&&e.backgroundImage&&(e.backgroundSize="",e.backgroundPosition="",e.backgroundRepeat="",e.backgroundImage=""),j&&j(A)}})))}),p=n.forwardRef((A,e)=>{let t,i;var s,{src:m,sizes:p,unoptimized:C=!1,priority:Q=!1,loading:x,className:w,quality:v,width:j,height:B,fill:b,style:I,onLoad:D,onLoadingComplete:S,placeholder:y="empty",blurDataURL:M,layout:P,objectFit:k,objectPosition:N,lazyBoundary:R,lazyRoot:U}=A,F=r(A,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let _=n.useContext(d.ImageConfigContext),L=n.useMemo(()=>{let A=u||_||c.imageConfigDefault,e=[...A.deviceSizes,...A.imageSizes].sort((A,e)=>A-e),t=A.deviceSizes.sort((A,e)=>A-e);return a({},A,{allSizes:e,deviceSizes:t})},[_]),z=F,K=z.loader||g.default;if(delete z.loader,"__next_img_default"in K){if("custom"===L.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let T=K;K=A=>{let{config:e}=A,t=r(A,["config"]);return T(t)}}if(P){"fill"===P&&(b=!0);let H={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];H&&(I=a({},I,H));let G={responsive:"100vw",fill:"100vw"}[P];G&&!p&&(p=G)}let W="",O=E(j),Y=E(B);if("object"==typeof(s=m)&&(h(s)||void 0!==s.src)){let J=h(m)?m.default:m;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(t=J.blurWidth,i=J.blurHeight,M=M||J.blurDataURL,W=J.src,!b){if(O||Y){if(O&&!Y){let V=O/J.width;Y=Math.round(J.height*V)}else if(!O&&Y){let Z=Y/J.height;O=Math.round(J.width*Z)}}else O=J.width,Y=J.height}}let X=!Q&&("lazy"===x||void 0===x);((m="string"==typeof m?m:W).startsWith("data:")||m.startsWith("blob:"))&&(C=!0,X=!1),L.unoptimized&&(C=!0);let q=E(v),$=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:N}:{},{color:"transparent"},I),AA="blur"===y&&M?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(l.getImageBlurSvg({widthInt:O,heightInt:Y,blurWidth:t,blurHeight:i,blurDataURL:M}),'")')}:{},Ae=function(A){let{config:e,src:t,unoptimized:a,width:i,quality:s,sizes:r,loader:n}=A;if(a)return{src:t,srcSet:void 0,sizes:void 0};let{widths:o,kind:l}=function(A,e,t){let{deviceSizes:a,allSizes:i}=A;if(t){let s=/(^|\s)(1?\d?\d)vw/g,r=[];for(let n;n=s.exec(t);n)r.push(parseInt(n[2]));if(r.length){let o=.01*Math.min(...r);return{widths:i.filter(A=>A>=a[0]*o),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof e)return{widths:a,kind:"w"};let l=[...new Set([e,2*e].map(A=>i.find(e=>e>=A)||i[i.length-1]))];return{widths:l,kind:"x"}}(e,i,r),c=o.length-1;return{sizes:r||"w"!==l?r:"100vw",srcSet:o.map((A,a)=>"".concat(n({config:e,src:t,quality:s,width:A})," ").concat("w"===l?A:a+1).concat(l)).join(", "),src:n({config:e,src:t,quality:s,width:o[c]})}}({config:L,src:m,unoptimized:C,width:O,quality:q,sizes:p,loader:K}),At=m,Aa={imageSrcSet:Ae.srcSet,imageSizes:Ae.sizes,crossOrigin:z.crossOrigin},Ai=n.useRef(D);n.useEffect(()=>{Ai.current=D},[D]);let As=n.useRef(S);n.useEffect(()=>{As.current=S},[S]);let Ar=a({isLazy:X,imgAttributes:Ae,heightInt:Y,widthInt:O,qualityInt:q,className:w,imgStyle:$,blurStyle:AA,loading:x,config:L,fill:b,unoptimized:C,placeholder:y,loader:K,srcString:At,onLoadRef:Ai,onLoadingCompleteRef:As},z);return n.default.createElement(n.default.Fragment,null,n.default.createElement(f,Object.assign({},Ar,{ref:e})),Q?n.default.createElement(o.default,null,n.default.createElement("link",Object.assign({key:"__nimg-"+Ae.src+Ae.srcSet+Ae.sizes,rel:"preload",as:"image",href:Ae.srcSet?void 0:Ae.src},Aa))):null)});e.default=p,("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),A.exports=e.default)},2675:function(A,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageBlurSvg=function(A){let{widthInt:e,heightInt:t,blurWidth:a,blurHeight:i,blurDataURL:s}=A,r=a||e,n=i||t,o=s.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return r&&n?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(r," ").concat(n,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(a&&i?"1":"20","'/%3E").concat(o,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(s,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(s,"'/%3E%3C/svg%3E")}},9824:function(A,e){"use strict";function t(A){let{config:e,src:t,width:a,quality:i}=A;return t.endsWith(".svg")&&!e.dangerouslyAllowSVG?t:"".concat(e.path,"?url=").concat(encodeURIComponent(t),"&w=").concat(a,"&q=").concat(i||75)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t.__next_img_default=!0,e.default=t},1397:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return m}});var a=t(5893);t(9008);var i=t(5675),s=t.n(i),r={src:"/_next/static/media/meetuptwo.12340c67.jpeg",height:1152,width:2048,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAI4h/8QAHRAAAgIBBQAAAAAAAAAAAAAAAgMBBQAEESIjQf/aAAgBAQABPwC2vtc4uprErmD4Ce/uf//EABYRAQEBAAAAAAAAAAAAAAAAAAERAP/aAAgBAgEBPwCCFN//xAAWEQEBAQAAAAAAAAAAAAAAAAABADH/2gAIAQMBAT8AVMb/2Q==",blurWidth:8,blurHeight:5};t(7294);var n={src:"/_next/static/media/iciss.9e64e39a.jpeg",height:400,width:400,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAJAdn//EAB0QAAICAQUAAAAAAAAAAAAAAAIEAQMABRESIlH/2gAIAQEAAT8AeaXB7St7hHidkT52jP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABcRAQADAAAAAAAAAAAAAAAAAAIAMnH/2gAIAQMBAT8AKts//9k=",blurWidth:8,blurHeight:8},o={src:"/_next/static/media/hospice.d3ddfd56.jpeg",height:400,width:400,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAArAf/xAAbEAEAAgIDAAAAAAAAAAAAAAACAQQDBQARE//aAAgBAQABPwC9mvDaZ1riHZQ7HrMkSOf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:8},l={src:"/_next/static/media/rygel.f34b4060.jpeg",height:400,width:400,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAuwf/xAAeEAABAwQDAAAAAAAAAAAAAAACAwQSAAEFERUhQf/aAAgBAQABPwB69Pn8WKax2Ric47h14Vf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:8},c={src:"/_next/static/media/sidibe.8cfff245.jpeg",height:400,width:400,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAtA//xAAdEAEAAQMFAAAAAAAAAAAAAAACBAABAwYREiFS/9oACAEBAAE/AJMi8XUsEPPcLKlu+7jh5Vf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:8};let d=()=>(0,a.jsxs)("div",{className:"panel-container",children:[(0,a.jsx)("div",{className:"panel-badge",children:"Panel "}),(0,a.jsx)("div",{className:"subject",children:(0,a.jsx)("h1",{children:"Les avantages du d\xe9veloppement mobile natif"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"paneliste-head",children:" Nos Pan\xe9listes : "}),(0,a.jsxs)("div",{className:"panelistes",children:[(0,a.jsx)(g,{name:"Segnonna Hounsou",cover:o,role:"Senior Mobile Engineer",company:"Xapo"}),(0,a.jsx)(g,{name:"Rygel Louv",cover:l,role:"Senior Mobile Engineer",company:"Sendwave"}),(0,a.jsx)(g,{name:"Ibrahima Ciss",cover:n,role:"Senior Mobile Engineer",company:"Ind\xe9pendant"}),(0,a.jsx)(g,{name:"Souleymane Sidibe",cover:c,role:"Senior Mobile Engineer",company:"Atos Senegal"})]})]})]}),g=A=>{let{name:e,cover:t,role:i,company:r}=A;return(0,a.jsxs)("div",{className:"paneliste",children:[(0,a.jsx)("div",{className:"paneliste-cover",children:(0,a.jsx)(s(),{src:t})}),(0,a.jsx)("div",{className:"paneliste-name",children:e}),(0,a.jsx)("div",{className:"paneliste-company",children:r})]})};var u={src:"/_next/static/media/derminator.aa0bda10.jpeg",height:4032,width:3024,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAKxJ/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDEQQTAAUh/9oACAEBAAE/AOyODurPkgRfNZLFWquf/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAC/9oACAECAQE/AHA3/8QAFhEAAwAAAAAAAAAAAAAAAAAAABJh/9oACAEDAQE/AGh//9k=",blurWidth:6,blurHeight:8};let h=A=>{let{hasPanel:e}=A;return e?(0,a.jsx)(d,{}):(0,a.jsx)("div",{className:"tagline",children:(0,a.jsxs)("div",{children:["Dakar Ruby Brigade est une ",(0,a.jsx)("span",{children:"communaut\xe9 de passion\xe9s"})," en technologies o\xf9 on parle de ",(0,a.jsx)("span",{children:"tout"})]})})},E=A=>{let{speakerCover:e,speakerName:t,speakerTwitter:i,title:r}=A;return(0,a.jsxs)("div",{className:"talk",children:[(0,a.jsx)("div",{className:"speaker-cover",children:(0,a.jsx)(s(),{src:e})}),(0,a.jsxs)("div",{className:"talk-details",children:[(0,a.jsxs)("div",{className:"talk-title",children:[" ",r]}),(0,a.jsxs)("div",{className:"speaker-name",children:[" ",t]}),(0,a.jsxs)("div",{className:"speaker-twiter",children:[" ",i," "]})]})]})};var m=function(){return(0,a.jsx)("div",{className:"main-wrapper",children:(0,a.jsxs)("header",{className:"main-header",children:[(0,a.jsx)("nav",{className:"navigation",children:(0,a.jsxs)("div",{className:"logo",children:[(0,a.jsx)("h1",{className:"logo-text",children:"DRB"}),(0,a.jsx)("div",{className:"logo-tagline",children:"Dakar Ruby Brigade"})]})}),(0,a.jsxs)("div",{className:"home-head",children:[(0,a.jsx)(h,{hasPanel:!0}),(0,a.jsxs)("div",{className:"meetup-container",children:[(0,a.jsxs)("div",{className:"meetup-infos",children:[(0,a.jsx)("div",{className:"meetup-badge",children:"Prochain Meetup "}),(0,a.jsx)("div",{className:"title",children:"31 D\xe9cembre 2022"}),(0,a.jsxs)("div",{className:"date",children:["\xe0 10H au ",(0,a.jsx)("span",{children:"Orange Digital Center"})]})]}),(0,a.jsxs)("div",{className:"talks",children:[(0,a.jsx)(E,{speakerCover:n,speakerName:"Ibrahima Ciss",speakerTwitter:"@bionik6",title:"Handling errors as if your life depends on it"}),(0,a.jsx)(E,{speakerCover:u,speakerName:"Mouhamadou DER",title:"Quoi de neuf Drupal ?",speakerTwitter:"@derminator"})]})]})]}),(0,a.jsx)("div",{className:"header-overlay"}),(0,a.jsx)(s(),{className:"header-bg",src:r})]})})}},9008:function(A,e,t){t(3121)},5675:function(A,e,t){A.exports=t(9749)}},function(A){A.O(0,[774,888,179],function(){return A(A.s=5557)}),_N_E=A.O()}]);