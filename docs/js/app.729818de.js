(function(e){function t(t){for(var n,s,r=t[0],l=t[1],c=t[2],d=0,p=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);m&&m(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},i={app:0},o=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/portfolio/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var m=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"19dd":function(e,t,a){"use strict";var n=a("4db7"),i=a.n(n);i.a},"2eba":function(e,t,a){},"4db7":function(e,t,a){},"4f26":function(e,t,a){"use strict";var n=a("81f5"),i=a.n(n);i.a},5465:function(e,t,a){e.exports=a.p+"img/portfolio-template.b06c85a0.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("menu-top"),a("home"),a("skills"),a("portfolio"),a("contact")],1)},o=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"menu-top"}},e._l(e.menuItems,(function(t){return a("div",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#"+t.scrollTo,duration:500},expression:"{ element: `#${item.scrollTo}`, duration: 500 }"}],key:t.label,staticClass:"menu__item",class:t.class,attrs:{id:t.id}},[e._v(e._s(t.label))])})),0)},r=[],l=a("f13c"),c=a.n(l),m=a("cd29"),d=a.n(m);a("057a");n["a"].use(c.a);var p={mounted:function(){this.setClassActive()},props:{animationDone:{type:Boolean,default:!1}},data:function(){return{menuItems:[{scrollTo:"home",label:"Hello",class:"menu__item active",id:"menu__home"},{scrollTo:"skills",label:"What I do",class:"menu__item",id:"menu__skills"},{scrollTo:"portfolio",label:"Portfolio",class:"menu__item",id:"menu__portfolio"},{scrollTo:"contact",label:"Contacts",class:"menu__item",id:"menu__contact"}]}},methods:{setClassActive:function(){var e=new d.a.Controller({globalSceneOptions:{duration:"170%"}});new d.a.Scene({triggerElement:"#home"}).setClassToggle("#menu__home","active").addTo(e),new d.a.Scene({triggerElement:"#skills"}).setClassToggle("#menu__skills","active").addTo(e),new d.a.Scene({triggerElement:"#portfolio"}).setClassToggle("#menu__portfolio","active").addTo(e),new d.a.Scene({triggerElement:"#contact"}).setClassToggle("#menu__contact","active").addTo(e)}}},_=p,u=(a("19dd"),a("2877")),g=Object(u["a"])(_,s,r,!1,null,null,null),f=g.exports,h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{attrs:{id:"home"}},[a("div",{staticClass:"home__texts-wrapper"},[a("h1",{staticClass:"home__title line-home"},[e._v("Hello, I'm Helene")]),a("h2",{staticClass:"home__job line-home"},[e._v("I'm a frontend developer")])]),a("div",{staticClass:"home__arrow"},[a("div",{staticClass:"icon i-angle-down"})]),a("div",{staticClass:"home__trigger"})])}],w=(a("ac1f"),a("1276"),a("c1ac")),b={mounted:function(){this.splitText(),this.animateTextsIn(),this.animateArrow(),this.animateTextsOut()},methods:{splitText:function(){for(var e=document.getElementsByClassName("line-home"),t=0;t<e.length;t++){var a=e[t].innerHTML;a=a.split("");for(var n="",i=0;i<a.length;i++)n+="<span>".concat(a[i],"</span>");e[t].innerHTML=n}},animateTextsIn:function(){var e="11em",t="18em";window.innerHeight<660&&(e="12em",t="19em");var a=new w["TimelineLite"]({paused:!0});a.fromTo(".home__title",.75,{width:"0"},{width:e,ease:w["SteppedEase"].config(18)},1).fromTo(".home__title",1,{"border-right-color":"rgba(255, 255, 255, 0.75)"},{"border-right-color":"rgba(255, 255, 255, 0)",repeat:-1,ease:w["SteppedEase"].config(2)},0).fromTo(".home__job",1,{width:"0"},{width:t,ease:w["SteppedEase"].config(40)},1.75).fromTo(".home__arrow",.75,{bottom:"50px",opacity:0},{bottom:"0",opacity:.75,repeat:-1,ease:w["SteppedEase"].config(2)},2.75).play()},animateArrow:function(){var e=new w["TimelineLite"]({paused:!0});e.fromTo(".home__arrow",.75,{bottom:"0px"},{bottom:"-100",repeat:-1,ease:w["SteppedEase"].config(2)},2.75).play().kill();var t=new d.a.Controller;new d.a.Scene({triggerElement:".home__trigger",triggerHook:1}).setTween(e).addTo(t)},animateTextsOut:function(){var e="11em",t="18em";window.innerHeight<660&&(e="12em",t="19em");var a=new w["TimelineLite"]({paused:!0});a.fromTo(".home__job",.75,{width:t},{width:"0",ease:w["SteppedEase"].config(35)},0).fromTo(".home__title",.75,{width:e},{width:"0",ease:w["SteppedEase"].config(18)},.5).play().delay(0).kill();var n=new d.a.Controller;new d.a.Scene({triggerElement:".home__trigger",triggerHook:1}).setTween(a).addTo(n)}}},k=b,T=(a("a318"),Object(u["a"])(k,h,v,!1,null,null,null)),C=T.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{attrs:{id:"skills"}},[a("div",{staticClass:"text"},[a("h2",{staticClass:"text__description anim-typewriter line__skills"},[e._v("I build websites with")]),a("div",e._l(e.skills,(function(t){return"1"===t.main?a("div",{key:t.name,staticClass:"text__item"},[e._v(e._s(t.name))]):e._e()})),0)]),a("div",{staticClass:"map"},[a("h2",{staticClass:"map__title line__skills"},[e._v("I am good at...")]),a("div",{staticClass:"map__wrapper"},[a("div",{staticClass:"map__block"},[a("div",{staticClass:"map__item"},[a("h3",{staticClass:"line__skills line__skill"},[e._v("Languages")]),a("h4",{staticClass:"languages__frontendss line__skills line__skill"},[e._v("Frontend")]),e._l(e.skills,(function(t){return"frontend"===t.type?a("div",{staticClass:"skill line__skills line__skill"},[e._v(e._s(t.name))]):e._e()})),a("h4",{staticClass:"languages__backend line__skills line__skill"},[e._v("Backend")]),e._l(e.skills,(function(t){return"backend"===t.type?a("div",{staticClass:"skill line__skills line__skill"},[e._v(e._s(t.name))]):e._e()}))],2)]),a("div",{staticClass:"map__block"},[a("div",{staticClass:"map__item framworks"},[a("h3",{staticClass:"line__skills line__skill"},[e._v("Frameworks")]),e._l(e.skills,(function(t){return"framework"===t.type?a("div",{staticClass:"skill line__skills line__skill"},[e._v(e._s(t.name))]):e._e()}))],2)]),a("div",{staticClass:"map__block"},[a("div",{staticClass:"map__item"},[a("h3",{staticClass:"line__skills line__skill"},[e._v("Libraries")]),e._l(e.skills,(function(t){return"library"===t.type?a("div",{staticClass:"skill line__skills line__skill"},[e._v(e._s(t.name))]):e._e()}))],2)])])])])},S=[],x={name:"skills",components:{},mounted:function(){this.splitText(),this.animateGlobalSkills(),this.animateMapSkills()},data:function(){return{skills:[{name:"HTML5",type:"frontend",main:"1"},{name:"CSS3, Sass/SCSS",type:"frontend",main:"1"},{name:"JavaScript ES6",type:"frontend",main:"1"},{name:"PHP",type:"backend"},{name:"SQL/MySQL",type:"backend"},{name:"Vue.js",type:"framework",main:"1"},{name:"Nuxt.js",type:"framework"},{name:"React.js",type:"framework",main:"1"},{name:"React Native",type:"framework",main:"1"},{name:"jQuery",type:"library"},{name:"Vuetify.js",type:"library"},{name:"GSAP",type:"library"},{name:"ScrollMagic",type:"library"}]}},methods:{splitText:function(){for(var e=document.getElementsByClassName("line__skills"),t=0;t<e.length;t++){var a=e[t].innerHTML;a=a.split("");for(var n="",i=0;i<a.length;i++)n+="<span>".concat(a[i],"</span>");e[t].innerHTML=n}},animateGlobalSkills:function(){var e="12.8em";window.innerHeight<660&&(e="14em");var t=new d.a.Controller({});new d.a.Scene({triggerElement:"#skills",duration:2e3,triggerHook:.1}).setPin("#skills").addTo(t);var a=.4,n=100,i=new w["TimelineLite"]({onComplete:function(){i.restart()}});i.fromTo(".text__description",.75,{width:"0"},{width:e,ease:w["SteppedEase"].config(22)}).add(w["TweenMax"].staggerFromTo(".text__item",a,{opacity:0,y:n},{opacity:1,y:0},2)).add(w["TweenMax"].staggerTo(".text__item",a,{delay:a,opacity:0,y:-n},2),1.3).delay(1).play();var o=new d.a.Controller;new d.a.Scene({triggerElement:".text",triggerHook:1}).setTween(i).addTo(o)},animateMapSkills:function(){var e="9em";window.innerHeight<660&&(e="10em");var t=new w["TimelineLite"]({paused:!0});t.fromTo(".map__title",.75,{width:"0"},{width:e,ease:w["SteppedEase"].config(15)}).fromTo(".map__title",1,{"border-right-color":"rgba(255, 255, 255, 0.75)"},{"border-right-color":"rgba(255, 255, 255, 0)",repeat:-1,ease:w["SteppedEase"].config(2)},0).play();var a=new d.a.Controller;new d.a.Scene({triggerElement:".map",triggerHook:.5}).setTween(t).addTo(a);var n="12em",i="40vh",o="72%";window.innerWidth<450&&(i="auto",o="20px");var s=new w["TimelineLite"]({paused:!0});s.fromTo(".map__item",1,{height:"0","border-right-color":"rgba(255, 255, 255, 0)","padding-top":"0",top:"50%"},{height:i,"border-right-color":"rgba(255, 255, 255, 1)",opacity:1,"padding-top":o,top:"0",ease:w["Power3"].easeIn},.5).fromTo(".map__item",1.5,{width:"1px","border-right-color":"rgba(255, 255, 255, 1)"},{width:n,"border-right-color":"rgba(255, 255, 255, 0)",opacity:1,ease:w["Power3"].easeIn},2).play();var r=new d.a.Controller;new d.a.Scene({triggerElement:".map",triggerHook:.6}).setTween(s).addTo(r);var l=new w["TimelineLite"]({paused:!0});l.add(w["TweenMax"].staggerFromTo(".line__skill",1.5,{width:"0",opacity:0},{width:n,opacity:1,delay:1,ease:w["SteppedEase"].config(15)},.1)).play();var c=new d.a.Controller;new d.a.Scene({triggerElement:".map",triggerHook:.5}).setTween(l).addTo(c)}}},E=x,j=(a("7f99"),Object(u["a"])(E,y,S,!1,null,null,null)),H=j.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{attrs:{id:"portfolio"}},[a("h2",{staticClass:"projects__title line-portfolio"},[e._v("My works")]),a("div",{staticClass:"projects"},e._l(e.projects,(function(t){return a("div",{staticClass:"project"},[a("div",{staticClass:"project__inner",on:{click:e.turnPolaroid}},[a("div",{staticClass:"project-front"},[a("div",{staticClass:"project-front__image"},[a("img",{staticClass:"image",attrs:{src:e.getImage(t.image)}})]),a("div",{staticClass:"project-front__text"},[e._v(e._s(t.name))])]),a("div",{staticClass:"project-back"},[a("h2",{staticClass:"project-back__title"},[e._v(e._s(t.name))]),a("div",{staticClass:"project-back__details"},[a("em",[e._v(e._s(t.details))])]),a("div",{staticClass:"project-back__tools"},[a("i",{staticClass:"i-wand"},[e._v(e._s(t.tools))])]),a("div",{staticClass:"project-back__link"},[a("i",{staticClass:"i-web"}),a("a",{attrs:{href:t.link,target:"_blank"}},[a("em",[e._v(e._s(t.displayedLink))])])])])])])})),0)])},M=[],P={name:"home",mounted:function(){this.splitText(),this.animateTexts(),this.animatePolaroids()},data:function(){return{projects:[{name:"Sweet Cocktails",image:"sweetcocktails.png",details:"Interactive cocktail recipes and virtual bar - coming soon",tools:"Javascript, Vue, HTML5, CSS3, PHP, MySql, Git",link:"http://v2.sweetcocktails.com",displayedLink:"http://v2.sweetcocktails.com"},{name:"Sweet Bites",image:"sweetbites.png",details:"Ecommerce.",tools:"Javascript, Vue, Nuxt, HTML5, CSS3, Git",link:"https://helene-andre.github.io/SweetBites",displayedLink:"helene-andre.github.io/sweetbites"},{name:"Momentum",image:"momentum.png",details:"Clone of the chrome plugin Momentum using local weather and famous quotes APIs",tools:"Javascript, jQuery, HTML5, CSS3, Git",link:"https://helene-andre.github.io/Momentum",displayedLink:"helene-andre.github.io/momentum"},{name:"Porfolio Template",image:"portfolio-template.png",details:"An online portfolio built for a customer.",tools:"Javascript, Vue, HTML5, CSS3, PHP, Git",link:"https://helene-andre.github.io/portfolio-template",displayedLink:"helene-andre.github.io/portfolio-template"}]}},methods:{getImage:function(e){return a("7584")("./".concat(e))},splitText:function(){for(var e=document.getElementsByClassName("line-portfolio"),t=0;t<e.length;t++){var a=e[t].innerHTML;a=a.split("");for(var n="",i=0;i<a.length;i++)n+="<span>".concat(a[i],"</span>");e[t].innerHTML=n}},animateTexts:function(){var e="5em";window.innerHeight<660&&(e="6em");var t=new w["TimelineLite"]({paused:!0});t.fromTo(".projects__title",.75,{width:"0"},{width:e,ease:w["SteppedEase"].config(8)},0).fromTo(".projects__title",1,{"border-right-color":"rgba(255, 255, 255, 0.75)"},{"border-right-color":"rgba(255, 255, 255, 0)",repeat:-1,ease:w["SteppedEase"].config(2)},0).play();var a=new d.a.Controller;new d.a.Scene({triggerElement:"#portfolio",triggerHook:1}).setTween(t).addTo(a)},animatePolaroids:function(){var e=new w["TimelineLite"]({paused:!0});e.fromTo(".project",1,{opacity:"0"},{opacity:"1",ease:w["Power3"].easeIn},0).fromTo(".project-front__image",1.5,{opacity:"0"},{opacity:"1",ease:w["Power3"].easeIn},1).play();var t=new d.a.Controller;new d.a.Scene({triggerElement:"#portfolio",triggerHook:1}).setTween(e).addTo(t)},turnPolaroid:function(){window.innerHeight>670?event.currentTarget.classList.toggle("turn-big-screen"):event.currentTarget.classList.toggle("turn-small-screen")}}},O=P,I=(a("4f26"),Object(u["a"])(O,L,M,!1,null,null,null)),N=I.exports,$=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},A=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{attrs:{id:"contact"}},[a("div",{staticClass:"contact"},[a("h2",{staticClass:"contact__title line__contact"},[e._v("Let's work together")]),a("div",{staticClass:"contact__item"},[a("h3",{staticClass:"contact__subtitle line__contact"},[e._v("eMail me:")]),a("br"),a("div",{staticClass:"contact__details"},[a("a",{staticClass:"line__contact",attrs:{id:"email",href:"mailto:helene.andre.06@gmail.com"}},[e._v("helene.andre.06@gmail.com")])])]),a("div",{staticClass:"contact__item"},[a("h3",{staticClass:"contact__subtitle line__contact"},[e._v("Call me")]),a("br"),a("div",{staticClass:"contact__details"},[a("a",{staticClass:"line__contact",attrs:{id:"phone",href:"tel:+61 (0) 484 084 650"}},[e._v("+61 (0) 484 084 650")])])]),a("div",{staticClass:"contact__item"},[a("h3",{staticClass:"contact__subtitle line__contact"},[e._v("Meet me")]),a("br"),a("div",{staticClass:"contact__details line__contact"},[e._v("Melbourne, VIC, Australia")])]),a("div",{staticClass:"contact__item"},[a("h3",{staticClass:"contact__subtitle line__contact"},[e._v("Watch me")]),a("br"),a("a",{staticClass:"i-github",attrs:{href:"https://github.com/helene-andre",target:"_blank"}}),a("a",{staticClass:"i-linkedin",attrs:{href:"https://www.linkedin.com/in/helene-andre/",target:"_blank"}})])])])}],B={name:"home",components:{},mounted:function(){this.splitText(),this.animateContactTexts()},methods:{splitText:function(){for(var e=document.getElementsByClassName("line__contact"),t=0;t<e.length;t++){var a=e[t].innerHTML;a=a.split("");for(var n="",i=0;i<a.length;i++)n+="<span>".concat(a[i],"</span>");e[t].innerHTML=n}},animateContactTexts:function(){var e="11.5em";window.innerHeight<660&&(e="14em");var t=new w["TimelineLite"]({paused:!0});t.fromTo(".contact__title",.75,{width:"0"},{width:e,ease:w["SteppedEase"].config(20)},0).fromTo(".contact__title",1,{"border-right-color":"rgba(255, 255, 255, 0.75)"},{"border-right-color":"rgba(255, 255, 255, 0)",repeat:-1,ease:w["SteppedEase"].config(2)},0).play();var a=new d.a.Controller;new d.a.Scene({triggerElement:"#contact",triggerHook:.6}).setTween(t).addTo(a);var n=new w["TimelineLite"]({paused:!0});n.add(w["TweenMax"].staggerFromTo(".contact__item",1.5,{width:"0",opacity:0},{width:"100%","border-right-color":"#fff",opacity:1,delay:1,ease:w["SteppedEase"].config(15)},.1)).play();var i=new d.a.Controller;new d.a.Scene({triggerElement:"#contact",triggerHook:.5}).setTween(n).addTo(i)}}},G=B,J=(a("7634"),Object(u["a"])(G,$,A,!1,null,null,null)),F=J.exports,V={name:"App",components:{menuTop:f,home:C,skills:H,portfolio:N,contact:F}},Q=V,D=(a("5c0b"),Object(u["a"])(Q,i,o,!1,null,null,null)),W=D.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(W)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),i=a.n(n);i.a},7584:function(e,t,a){var n={"./momentum.png":"b36b","./portfolio-template.png":"5465","./sweetbites.png":"d77a","./sweetcocktails.png":"b160"};function i(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id="7584"},7634:function(e,t,a){"use strict";var n=a("f4d4"),i=a.n(n);i.a},"7f99":function(e,t,a){"use strict";var n=a("cae6"),i=a.n(n);i.a},"81f5":function(e,t,a){},"9c0c":function(e,t,a){},a318:function(e,t,a){"use strict";var n=a("2eba"),i=a.n(n);i.a},b160:function(e,t,a){e.exports=a.p+"img/sweetcocktails.74cb3785.png"},b36b:function(e,t,a){e.exports=a.p+"img/momentum.d51986bd.png"},cae6:function(e,t,a){},d77a:function(e,t,a){e.exports=a.p+"img/sweetbites.3f8635b3.png"},f4d4:function(e,t,a){}});
//# sourceMappingURL=app.729818de.js.map