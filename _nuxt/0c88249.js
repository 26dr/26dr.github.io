(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{189:function(t,e,n){var content=n(193);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("53bb3107",content,!0,{sourceMap:!1})},192:function(t,e,n){"use strict";n(189)},193:function(t,e,n){var o=n(104)(!1);o.push([t.i,"@media (max-width:544px){.site-footer__bottom-footer p[data-v-ac592234]{font-size:.7rem}}",""]),t.exports=o},194:function(t,e,n){"use strict";var o={name:"NavTwo",data:function(){return{sticky:!1,mobileToggle:!1}},mounted:function(){this.stickyDynamic?window.addEventListener("scroll",this.handleScroll):this.sticky=!0},props:["stickyDynamic"],methods:{handleScroll:function(){window.scrollY>70?this.sticky=!0:window.scrollY<70&&(this.sticky=!1)}}},l=n(46),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"site-header header-one header-one__home-two"},[n("nav",{class:"navbar navbar-expand-lg navbar-light header-navigation stricky "+(t.sticky?"stricky-fixed":"")+" animated slideInDown"},[n("div",{staticClass:"container clearfix"},[n("div",{staticClass:"logo-box clearfix"},[n("button",{staticClass:"menu-toggler",attrs:{"data-target":".header-one .main-navigation","aria-label":"Toggle fold-out menu"},on:{click:function(e){t.mobileToggle=!t.mobileToggle}}},[n("span",{staticClass:"fa fa-bars"})])]),t._v(" "),n("div",{class:"main-navigation "+(t.mobileToggle?"showen":""),style:"display: "+(t.mobileToggle?"block":"")},[t._m(0)]),t._v(" "),n("div",{staticClass:"right-side-box"},[n("NuxtLink",{staticClass:"header-one__btn",attrs:{to:"/coming-soon"}},[t._v("\n              Log In\n              ")])],1)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:" navigation-box one-page-scroll-menu "},[n("li",{staticClass:"scrollToLink"},[n("a",{attrs:{href:"#home"}},[t._v("Home")])]),t._v(" "),n("li",{staticClass:"scrollToLink"},[n("a",{attrs:{href:"#benefits"}},[t._v("Benefits")])]),t._v(" "),n("li",{staticClass:"scrollToLink"},[n("a",{attrs:{href:"#features"}},[t._v("Features")])]),t._v(" "),n("li",{staticClass:"scrollToLink"},[n("a",{attrs:{href:"#pricing"}},[t._v("Pricing")])]),t._v(" "),n("li",{staticClass:"scrollToLink"},[n("a",{attrs:{href:"#newsletter"}},[t._v("Newsletter")])])])}],!1,null,"186c9fbd",null);e.a=component.exports},195:function(t,e,n){"use strict";var o={name:"Footer",data:function(){return{scrollBtn:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.scrollBtn=!0:window.scrollY<70&&(this.scrollBtn=!1)},scrollTop:function(){window.scrollTo(0,0)}}},l=(n(192),n(46)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("footer",{staticClass:"site-footer"},[n("img",{staticClass:"bubble-1",attrs:{src:"/images/banner-icon-1-1.png",alt:"Awesome Image",loading:"lazy"}}),t._v(" "),n("img",{staticClass:"bubble-2",attrs:{src:"/images/banner-icon-1-3.png",alt:"Awesome Image",loading:"lazy"}}),t._v(" "),n("img",{staticClass:"bubble-3",attrs:{src:"/images/banner-icon-1-2.png",alt:"Awesome Image",loading:"lazy"}}),t._v(" "),n("img",{staticClass:"bubble-4",attrs:{src:"/images/banner-icon-1-4.png",alt:"Awesome Image",loading:"lazy"}}),t._v(" "),n("div",{staticClass:"site-footer__main-footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-3 col-md-6 col-sm-12"}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"col-lg-3 col-md-6 col-sm-12"},[n("div",{staticClass:"footer-widget"},[n("h3",{staticClass:"footer-widget__title"},[t._v("\n                            Resources\n                        ")]),t._v(" "),n("ul",{staticClass:"footer-widget__link-list"},[n("li",[n("NuxtLink",{attrs:{to:"/"}},[t._v("\n                                  Home\n                                ")])],1)])])]),t._v(" "),n("div",{staticClass:"col-lg-2 col-md-6 col-sm-12"},[n("div",{staticClass:"footer-widget"},[n("h3",{staticClass:"footer-widget__title"},[t._v("\n                            Links\n                        ")]),t._v(" "),n("ul",{staticClass:"footer-widget__link-list"},[n("li",[n("NuxtLink",{attrs:{to:"/privacy"}},[t._v("\n                                Privacy Policy\n                                ")])],1),t._v(" "),n("li",[n("NuxtLink",{attrs:{to:"/coming-soon"}},[t._v("\n                                FAQ\n                              ")])],1)])])]),t._v(" "),t._m(1)])])]),t._v(" "),t._m(2)]),t._v(" "),n("a",{staticClass:"scroll-to-target scroll-to-top",style:"display:"+(t.scrollBtn?"block":""),attrs:{href:"#","data-target":"html","aria-label":"Scroll to the top of the page"},on:{click:t.scrollTop}},[n("i",{staticClass:"fa fa-angle-up"})])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-2 col-md-6 col-sm-12"},[n("div",{staticClass:"footer-widget"},[n("h3",{staticClass:"footer-widget__title"},[t._v("\n                            Contact Us\n                        ")]),t._v(" "),n("ul",{staticClass:"footer-widget__link-list"},[n("li",[t._v("info@pductivity.com")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-2 col-md-6 col-sm-12 d-flex"},[n("div",{staticClass:"footer-widget my-auto"},[n("div",{staticClass:"social-block"},[n("a",{attrs:{href:"https://twitter.com/pductivity",target:"_blank",rel:"noreferrer noopener","aria-label":"Twitter"}},[n("i",{staticClass:"fa fa-twitter"})]),t._v(" "),n("a",{attrs:{href:"https://www.facebook.com/pductivity",target:"_blank",rel:"noreferrer noopener","aria-label":"Facebook"}},[n("i",{staticClass:"fa fa-facebook-f"})])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"site-footer__bottom-footer text-center"},[n("div",{staticClass:"container"},[n("p",[t._v("COPYRIGHT © 2021 Pductivity, All rights Reserved")])])])}],!1,null,"ac592234",null);e.a=component.exports},199:function(t,e,n){var content=n(210);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("2a336648",content,!0,{sourceMap:!1})},200:function(t,e,n){var content=n(212);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("6619ecc6",content,!0,{sourceMap:!1})},201:function(t,e,n){var content=n(214);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("fff657b6",content,!0,{sourceMap:!1})},202:function(t,e,n){var content=n(216);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("49e88322",content,!0,{sourceMap:!1})},203:function(t,e,n){var content=n(218);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("f4c19de2",content,!0,{sourceMap:!1})},209:function(t,e,n){"use strict";n(199)},210:function(t,e,n){var o=n(104)(!1);o.push([t.i,".block-title__text[data-v-aeed2d0c]{font-size:50px}@media only screen and (max-width:1750px){.banner-one__moc[data-v-aeed2d0c]{width:50%}.banner-one[data-v-aeed2d0c]{padding-top:230px;height:100vh}}@media only screen and (max-width:1250px){.banner-one__moc[data-v-aeed2d0c]{display:none}}@media (max-width:544px){.banner-one__content[data-v-aeed2d0c]{padding:30px}.block-title__text[data-v-aeed2d0c]{font-size:1.9rem}.banner-one__text[data-v-aeed2d0c]{font-size:.9rem}.banner-one__btn[data-v-aeed2d0c]{margin:0 auto;display:block}}",""]),t.exports=o},211:function(t,e,n){"use strict";n(200)},212:function(t,e,n){var o=n(104)(!1);o.push([t.i,"@media (max-width:544px){.block-title__text[data-v-fd420166]{font-size:1.3rem}.service-one[data-v-fd420166]{padding-top:60px}.service-one__single[data-v-fd420166]{margin-top:20px;padding:20px}}",""]),t.exports=o},213:function(t,e,n){"use strict";n(201)},214:function(t,e,n){var o=n(104)(!1);o.push([t.i,"@media (max-width:544px){.block-title__text[data-v-dc8e5c8c]{font-size:1.5rem;padding-left:30px;padding-right:30px}.cta-three[data-v-dc8e5c8c]{padding-top:60px;padding-bottom:60px}.cta-three__list[data-v-dc8e5c8c],.cta-three__text[data-v-dc8e5c8c]{font-size:1rem;padding-left:30px;padding-right:30px}.cta-three__list-item[data-v-dc8e5c8c]{font-size:1rem;margin-bottom:30px}.cta-three__btn[data-v-dc8e5c8c]{margin:0 auto;display:block}}",""]),t.exports=o},215:function(t,e,n){"use strict";n(202)},216:function(t,e,n){var o=n(104)(!1);o.push([t.i,"@media (max-width:544px){.block-title__text[data-v-291f5ede]{font-size:1.5rem;padding-left:30px;padding-right:30px}.pricing-one__feature[data-v-291f5ede]{margin-top:40px;margin-bottom:30px}.pricing-one__single[data-v-291f5ede]{margin-bottom:0;padding-bottom:25px}}",""]),t.exports=o},217:function(t,e,n){"use strict";n(203)},218:function(t,e,n){var o=n(104)(!1);o.push([t.i,"@media (max-width:544px){.block-title__text{font-size:1.6rem}.site-footer__subscribe-form{height:55px}.site-footer__subscribe-form button[type=submit]{top:130%}}",""]),t.exports=o},222:function(t,e,n){"use strict";n.r(e);var o=n(194),l={name:"BannerTwo"},c=(n(209),n(46)),r=Object(c.a)(l,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"banner-one banner-one__home-two",attrs:{id:"home"}},[n("img",{staticClass:"banner-one__moc",attrs:{src:"/images/banner-moc-2.png",alt:"13-Week Goal Screenshot From Pductivity App",loading:"lazy"}}),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"banner-one__content"},[n("div",{staticClass:"block-title"},[n("div",{staticClass:"block-title__text"},[n("span",[t._v("The perfect blend of")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("productivity &")]),t._v(" "),n("br"),n("span",[t._v("self-improvement")])])]),t._v(" "),n("p",{staticClass:"banner-one__text"},[t._v("Become the best you that you can be. Pductivity combines productivity and self-improvement into one smooth experience.")]),t._v(" "),n("a",{staticClass:"banner-one__btn",attrs:{href:"#newsletter"}},[t._v("Get Started")])])])])])])}],!1,null,"aeed2d0c",null).exports,_=n(195),d={name:"ServiceOne"},v=(n(211),Object(c.a)(d,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"service-one",attrs:{id:"benefits"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"block-title text-center"},[n("div",{staticClass:"block-title__text"},[n("span",[t._v("Achieving your dreams starts with an")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("actionable plan")])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-4 col-lg-6 col-md-12 col-sm-12"},[n("div",{staticClass:"service-one__single"},[n("h3",{staticClass:"service-one__title"},[n("a",{attrs:{href:"#"}},[t._v("Goals")])]),t._v(" "),n("p",{staticClass:"service-one__text"},[t._v("Plan, organize, and keep track of progress toward your most important goals.")])])]),t._v(" "),n("div",{staticClass:"col-xl-4 col-lg-6 col-md-12 col-sm-12"},[n("div",{staticClass:"service-one__single"},[n("h3",{staticClass:"service-one__title"},[n("a",{attrs:{href:"#"}},[t._v("Productivity ")])]),t._v(" "),n("p",{staticClass:"service-one__text"},[t._v("Instantly become more productive by focusing on what matters most.")])])]),t._v(" "),n("div",{staticClass:"col-xl-4 col-lg-6 col-md-12 col-sm-12"},[n("div",{staticClass:"service-one__single"},[n("h3",{staticClass:"service-one__title"},[n("a",{attrs:{href:"#"}},[t._v("Habits")])]),t._v(" "),n("p",{staticClass:"service-one__text"},[t._v("Build good habits, optimize your workload, and get the most out of your day.")])])])])])])}],!1,null,"fd420166",null).exports),m={name:"CTAThree"},f=(n(213),Object(c.a)(m,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"cta-three",attrs:{id:"features"}},[n("img",{staticClass:"bubble-1",attrs:{src:"/images/banner-icon-1-6.png",alt:"Awesome Image",loading:"lazy"}}),t._v(" "),n("img",{staticClass:"bubble-2",attrs:{src:"/images/banner-icon-1-4.png",alt:"Awesome Image",loading:"lazy"}}),t._v(" "),n("img",{staticClass:"bubble-3",attrs:{src:"/images/banner-icon-1-5.png",alt:"Awesome Image",loading:"lazy"}}),t._v(" "),n("div",{staticClass:"container"},[n("img",{staticClass:"cta-three__moc",attrs:{src:"/images/cta-moc-1-1.png",alt:"Awesome Image",loading:"lazy"}}),t._v(" "),n("div",{staticClass:"row no-gutters justify-content-end"},[n("div",{staticClass:"col-lg-6 col-md-12 col-sm-12 d-flex"},[n("div",{staticClass:"cta-three__content my-auto"},[n("div",{staticClass:"block-title"},[n("div",{staticClass:"block-title__text"},[n("span",[t._v("Be Productive. "),n("br"),t._v("Be Awesome. "),n("br"),t._v("Be Happy")])])]),t._v(" "),n("p",{staticClass:"cta-three__text"},[t._v("Designed for people who need a balance between productivity and self-improvement.")]),t._v(" "),n("ul",{staticClass:"cta-three__list"},[n("li",{staticClass:"cta-three__list-item"},[n("i",{staticClass:"fa fa-check"}),t._v("Interactive and easy-to-use 13 week road map to help you build the life you want! ")]),t._v(" "),n("li",{staticClass:"cta-three__list-item"},[n("i",{staticClass:"fa fa-check"}),t._v("Weekly planning template for goal-oriented habit development, giving you space to reflect on progress, learnings & steps for improvement.")]),t._v(" "),n("li",{staticClass:"cta-three__list-item"},[n("i",{staticClass:"fa fa-check"}),t._v("Daily planner to help you find more time, stay focused and make better decisions.")])]),t._v(" "),n("a",{staticClass:"cta-three__btn",attrs:{href:"#newsletter"}},[t._v("Learn More")])])])])])])}],!1,null,"dc8e5c8c",null).exports),h={name:"Pricing"},C=(n(215),Object(c.a)(h,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"pricing-one",attrs:{id:"pricing"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"block-title text-center"},[n("div",{staticClass:"block-title__text"},[n("span",[t._v("Get started within minutes ")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("and never look back")])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-4 offset-lg-4"},[n("div",{staticClass:"pricing-one__single"},[n("div",{staticClass:"pricing-one__top"},[n("h3",{staticClass:"pricing-one__title"},[t._v("$6.99")]),t._v(" "),n("p",{staticClass:"pricing-one__pack"},[t._v("medium pack")])]),t._v(" "),n("ul",{staticClass:"pricing-one__feature"},[n("li",{staticClass:"pricing-one__feature-item"},[t._v("Daily Planning")]),t._v(" "),n("li",{staticClass:"pricing-one__feature-item"},[t._v("Weekly Planning")]),t._v(" "),n("li",{staticClass:"pricing-one__feature-item"},[t._v("Habit Tracking")]),t._v(" "),n("li",{staticClass:"pricing-one__feature-item"},[t._v("Goal Roadmap")]),t._v(" "),n("li",{staticClass:"pricing-one__feature-item"},[t._v("Bucket List Roadmap")])]),t._v(" "),n("a",{staticClass:"pricing-one__btn",attrs:{href:"#newsletter"}},[t._v("Coming Soon")]),t._v(" "),n("p",{staticClass:"pricing-one__note"},[t._v("No hidden charges!")])])])])])])}],!1,null,"291f5ede",null).exports),x={},w=(n(217),Object(c.a)(x,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"site-footer__subscribe"},[n("div",{staticClass:"container",attrs:{id:"newsletter"}},[n("div",{staticClass:"block-title text-center"},[n("div",{staticClass:"block-title__text"},[n("span",[t._v("We are launching soon!")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("Subscribe our newsletter")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("to get new updates")])])]),t._v(" "),n("form",{staticClass:"site-footer__subscribe-form",attrs:{action:"#"}},[n("input",{staticClass:"newsletter__input",attrs:{type:"text",name:"email",placeholder:"john@example.com"}}),t._v(" "),n("button",{attrs:{type:"submit"}},[t._v("Subscribe")])])])])}],!1,null,null,null).exports),y={components:{CTAThree:f,ServiceOne:v,Footer:_.a,BannerTwo:r,NavTwo:o.a,Pricing:C,EmailSubscribe:w},head:function(){return{title:"Productivity and Self-improvement - Pductivity App"}}},k=Object(c.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NavTwo",{attrs:{stickyDynamic:!0}}),t._v(" "),n("BannerTwo"),t._v(" "),n("ServiceOne"),t._v(" "),n("CTAThree"),t._v(" "),n("Pricing"),t._v(" "),n("EmailSubscribe"),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=k.exports}}]);