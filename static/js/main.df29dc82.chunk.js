(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(5),i=t.n(r),c=[{id:1,name:"About",itemClass:"nav-item",a:{class:"nav-link",link:"#about"},ul:{class:"",link:""}},{id:2,name:"Collections",itemClass:"nav-item dropdown",a:{class:"nav-link dropdown-toggle",link:"#",id:"navbarDropdown",role:"button",bsSetting:"dropdown",ariaSetting:"false"},ul:{class:"dropdown-menu",ariaLabel:"navbarDropdown"}},{id:3,name:"Steps",itemClass:"nav-item",a:{class:"nav-link",link:"#steps"},ul:{class:"",link:""}},{id:4,name:"Contact",itemClass:"nav-item",a:{class:"nav-link",link:"#footer"},ul:{class:"",link:""}},{id:5,name:"Sign In",itemClass:"nav-item",a:{class:"nav-link",link:""},ul:{class:"",link:""}}];var s=function(e){return l.a.createElement("li",{id:"dropdown-item"},l.a.createElement("a",{className:"dropdown-item",href:e.link},e.title))},o=[{id:1,title:"Universal Cynical Moments",link:window.location.pathname+"/universal-cynical-moments"},{id:2,title:"Believe in Yourself",link:window.location.pathname+"believe-in-yourself"},{id:3,title:"Funny & Silly",link:"/funny-silly"},{id:4,title:"U R Worthy",link:"/u-r-worthy"},{id:5,title:"This shall pass.",link:"/this-shall-pass"},{id:6,title:"Build Your Own",link:"/build-your-own"}];var m=function(e){return l.a.createElement("li",{id:"toggle-item",className:e.itemClass},l.a.createElement("a",{className:e.a.class,href:e.a.link,id:e.a.id,role:e.a.role,"data-bs-toggle":e.a.bsSetting,"aria-expanded":e.a.ariaSetting},e.name),""!==e.ul.class&&l.a.createElement("ul",{className:e.ul.class,"aria-labelledby":e.ul.ariaLabel},o.map(function(e){return l.a.createElement(s,{key:e.id,title:e.title,link:e.link})})))};var u=function(){return l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarToggler"},l.a.createElement("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0"},c.map(function(e){return l.a.createElement(m,{key:e.id,name:e.name,itemClass:e.itemClass,a:e.a,ul:e.ul})})))};var d=function(){return l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarToggler","aria-controls":"navbarToggler","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"}))};var E=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light bg-light"},l.a.createElement("div",{className:"navbar-container container-fluid"},l.a.createElement("a",{className:"brand-title navbar-brand",href:"/"},"QUOTE COLLECTOR"),l.a.createElement(d,null),l.a.createElement(u,null)))};var f=function(){return l.a.createElement("section",{className:"white-section"},l.a.createElement("div",{className:"wrapper intro"},l.a.createElement("i",{className:"quotation-mark fas fa-quote-right fa-4x"}),l.a.createElement("div",{className:"header"},l.a.createElement("h1",{className:"title"},l.a.createElement("em",null,"Be Comforted,",l.a.createElement("br",null)," Be Inspired,",l.a.createElement("br",null),"Be Who You Want to BE")),l.a.createElement("button",{type:"button",className:"btn sign-up-btn"},"Sign Up")),l.a.createElement("img",{className:"intro-image",src:"/quotecollector/images/Mountain.png",alt:"mountain"})))},p=[{id:1,title:{first:"Fight ",rest:"Life Bummers"},description:"Work, interpersonal relationship challenges and more...find yourself soothed as the quotes resonate."},{id:2,title:{first:"Get Helpful ",rest:"Reminders"},description:"We all feel stressed and stuck at times. You'll be amazed how a line or two could serve as a powerful awakening."},{id:3,title:{first:"Retrieve ",rest:"Inner-Peace"},description:"Restore the state of calmness and pluck up the courage to battle hardship as you create your own collection as the new toolbox."}];var v=function(){return l.a.createElement("section",{className:"colored-section",id:"about"},l.a.createElement("div",{className:"container-fluid row wrapper"},p.map(function(e){return l.a.createElement("div",{key:e.id,className:"column col-lg-4 col-md-6 col-sm-12"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("i",{className:"quotation-mark fas fa-quote-right fa-2x"}),l.a.createElement("h3",{className:"card-content card-title"},l.a.createElement("span",null,e.title.first),e.title.rest),l.a.createElement("p",{className:"card-content card-text"},e.description))))})))};var g=function(){return l.a.createElement("div",{className:"category-container"},o.map(function(e){return l.a.createElement("div",{key:e.id,className:e.id%2===0?"collection even-circle":"collection odd-circle"},l.a.createElement("p",{className:"category-name"},l.a.createElement("a",{href:e.link},e.title)))}))};var b=function(){return l.a.createElement("section",{className:"white-section",id:"collections"},l.a.createElement("div",{className:"container-fluid category wrapper"},l.a.createElement("h2",{className:"section-title"},"Quote Collections"),l.a.createElement(g,null)))};var N=function(e){return l.a.createElement("button",{className:e.name,type:"button","data-bs-target":"#testimonial-carousel","data-bs-slide":e.direction},l.a.createElement("span",{className:e.icon,"aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Previous"))},h=[{id:1,name:"Mur Mumbler, Administrative Assistant",review:"It's so much easier to conquer Monday-blues since I started my own quote collection!",img:"images/cta-1.png"},{id:2,name:"Lolly Poppy, New Graduate",review:"Life sucks. Quote Collector's AWESOME!!!",img:"images/cta-2.png"}];var y=function(){return l.a.createElement("div",{id:"testimonial-carousel",className:"carousel slide","data-ride":"carousel"},l.a.createElement("div",{className:"carousel-inner"},h.map(function(e){return l.a.createElement("div",{key:e.id,className:1===e.id?"carousel-item active container-fluid":"carousel-item container-fluid"},l.a.createElement("div",{className:"testimonial-content-wrapper"},l.a.createElement("div",{className:"testimonial-text-box"},l.a.createElement("i",{className:"quotation-mark quotation-mark-left fas fa-quote-right fa-2x fa-flip-horizontal"}),l.a.createElement("i",{className:"quotation-mark quotation-mark-right fas fa-quote-right fa-2x"}),l.a.createElement("h3",{className:"review"},e.review)),l.a.createElement("div",null,l.a.createElement("img",{className:"reviewer-image",src:e.img,alt:"reviewer"}),l.a.createElement("p",{className:"reviewer-name"},e.name))))})))};var w=function(){return l.a.createElement("section",{className:"colored-section",id:"testimonials"},l.a.createElement("div",{className:"wrapper"},l.a.createElement(y,null),l.a.createElement(N,{name:"carousel-control-prev",direction:"prev",icon:"carousel-control-prev-icon"}),l.a.createElement(N,{name:"carousel-control-next",direction:"next",icon:"carousel-control-next-icon"})))},k=[{id:1,title:"Sign Up & Subscribe",instruction:" Create an account and subscribe for 'Quote of YOUR Day' recommended to you based on your preference."},{id:2,title:"Clip & Customize",instruction:"Clip the quotes that fit your mood or found helpful to begin decorating your own unique collection space"},{id:3,title:"Welcome to Quote Collection World!",instruction:""}];var q=function(){return l.a.createElement("section",{className:"white-section",id:"steps"},l.a.createElement("div",{className:"container-fluid row wrapper"},k.map(function(e){return l.a.createElement("div",{key:e.id,className:"column col-lg-4 col-md-6 col-sm-12"},l.a.createElement("div",{className:"steps card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h2",{className:"card-step"},"STEP ",e.id,".")),l.a.createElement("div",{className:"steps card-body"},l.a.createElement("h3",{className:"card-content card-title"},l.a.createElement("strong",null,e.title)),l.a.createElement("p",{className:"card-content card-text"},e.instruction))))})))};var x=function(){return l.a.createElement("section",{className:"white-section",id:"footer"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("i",{className:"footer-icon fab fa-twitter"}),l.a.createElement("i",{className:"footer-icon fab fa-facebook-f"}),l.a.createElement("i",{className:"footer-icon fab fa-instagram"}),l.a.createElement("i",{className:"footer-icon fas fa-envelope"}),l.a.createElement("p",null,"\xa9 Copyright ",(new Date).getFullYear()," Joy Yu")))};var C=function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(f,null),l.a.createElement(v,null),l.a.createElement(b,null),l.a.createElement(w,null),l.a.createElement(q,null),l.a.createElement(x,null))},S=[{category:"Believe In Yourself",number:2,id:21,src:"/images/quotes/box2-1.jpg"},{category:"Believe In Yourself",number:2,id:22,src:"/images/quotes/box2-2.jpg"},{category:"Believe In Yourself",number:2,id:23,src:"/images/quotes/box2-3.jpg"},{category:"This Shall Pass.",number:5,id:51,src:"/images/quotes/box5-1.png"},{category:"This Shall Pass.",number:5,id:52,src:"/images/quotes/box5-2.jpg"},{category:"This Shall Pass.",number:5,id:53,src:"/images/quotes/box5-3.jpg"}];var B=function(e){return l.a.createElement("section",{className:"quote-content"},l.a.createElement("div",{className:"wrapper quote-category"},l.a.createElement("i",{className:"quotation-mark quotation-mark-left fas fa-quote-right fa-2x fa-flip-horizontal"}),l.a.createElement("i",{className:"quotation-mark quotation-mark-right fas fa-quote-right fa-2x"}),l.a.createElement("div",{className:"quote-title-box"},l.a.createElement("h2",{className:"quote-title"},e.category)),l.a.createElement("div",{className:"quotes-container row"},S.map(function(a){return a.number===e.id&&l.a.createElement("div",{key:S.id,className:"column col-lg-4 col-md-6 col-sm-12"},l.a.createElement("img",{className:"quotes",src:"/quotecollector"+a.src,alt:"quote"}))}))))};var I=function(e){var a=e.categoryID-1;return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(B,{category:o[a].title,key:o[a].id,id:o[a].id}),l.a.createElement(x,null))},T=t(6),Y=t(1);i.a.render(l.a.createElement(T.a,{basename:"/quotecollector"},l.a.createElement(Y.c,null,l.a.createElement(Y.a,{exact:!0,path:"/",element:l.a.createElement(C,null)}),o.map(function(e){return l.a.createElement(Y.a,{key:e.id,exact:!0,path:"/"+(a=e.title,a&&a.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function(e){return e.toLowerCase()}).join("-")),element:l.a.createElement(I,{categoryID:e.id})});var a}))),document.getElementById("root"))},7:function(e,a,t){e.exports=t(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.df29dc82.chunk.js.map