(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{197:function(t,e,n){var content=n(207);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("5b9925ea",content,!0,{sourceMap:!1})},206:function(t,e,n){"use strict";n(197)},207:function(t,e,n){var r=n(104)(!1);r.push([t.i,".brand-text{font-weight:600;color:#e07a5f}.brand-logo{display:flex;justify-content:center;position:absolute;top:2rem;left:2rem;color:#e07a5f}.misc-inner{margin-top:300px}.btn-sm-block{background:#e07a5f;border-color:#e07a5f}",""]),t.exports=r},230:function(t,e,n){"use strict";n.r(e);var r=n(102),o=n(4),c=n(140),l=n(25),f=n(3),h=n(2),d=Object(h.c)({id:Object(h.b)(f.h),inline:Object(h.b)(f.c,!1),novalidate:Object(h.b)(f.c,!1),validated:Object(h.b)(f.c,!1)},l.b),m=o.default.extend({name:l.b,functional:!0,props:d,render:function(t,e){var n=e.props,data=e.data,r=e.children;return t("form",Object(c.a)(data,{class:{"form-inline":n.inline,"was-validated":n.validated},attrs:{id:n.id,novalidate:n.novalidate}}),r)}}),v=n(188),O=n(14),j=n(20),y=n(43),object=n(6),x="input, textarea, select",w=Object(h.c)({autofocus:Object(h.b)(f.c,!1),disabled:Object(h.b)(f.c,!1),form:Object(h.b)(f.h),id:Object(h.b)(f.h),name:Object(h.b)(f.h),required:Object(h.b)(f.c,!1)},"formControls"),V=o.default.extend({props:w,mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var t=this;this.$nextTick((function(){Object(j.h)((function(){var e=t.$el;t.autofocus&&Object(j.e)(e)&&(Object(j.f)(e,x)||(e=Object(j.i)(x,e)),Object(j.c)(e))}))}))}}}),$=o.default.extend({computed:{selectionStart:{cache:!1,get:function(){return this.$refs.input.selectionStart},set:function(t){this.$refs.input.selectionStart=t}},selectionEnd:{cache:!1,get:function(){return this.$refs.input.selectionEnd},set:function(t){this.$refs.input.selectionEnd=t}},selectionDirection:{cache:!1,get:function(){return this.$refs.input.selectionDirection},set:function(t){this.$refs.input.selectionDirection=t}}},methods:{select:function(){var t;(t=this.$refs.input).select.apply(t,arguments)},setSelectionRange:function(){var t;(t=this.$refs.input).setSelectionRange.apply(t,arguments)},setRangeText:function(){var t;(t=this.$refs.input).setRangeText.apply(t,arguments)}}}),D=Object(h.c)({size:Object(h.b)(f.h)},"formControls"),_=o.default.extend({props:D,computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]}}}),P=n(0),C=Object(h.c)({state:Object(h.b)(f.c,null)},"formState"),S=o.default.extend({props:C,computed:{computedState:function(){return Object(P.b)(this.state)?this.state:null},stateClass:function(){var t=this.computedState;return!0===t?"is-valid":!1===t?"is-invalid":null},computedAriaInvalid:function(){var t=this.ariaInvalid;return!0===t||"true"===t||""===t||!1===this.computedState?"true":t}}}),W=n(21),M=(Math.min,Math.max);Math.abs,Math.ceil,Math.floor,Math.pow,Math.round;function k(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var I=n(36),T=n(9);function B(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function F(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?B(Object(source),!0).forEach((function(e){z(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):B(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var E=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.type,r=void 0===n?f.a:n,c=e.defaultValue,l=void 0===c?void 0:c,d=e.validator,m=void 0===d?void 0:d,v=e.event,O=void 0===v?W.d:v,j=k({},t,Object(h.b)(r,l,m)),y=o.default.extend({model:{prop:t,event:O},props:j});return{mixin:y,props:j,prop:t,event:O}}("value",{type:f.f,defaultValue:"",event:W.e}),A=E.mixin,L=E.props,R=E.prop,J=E.event,N=Object(h.c)(Object(object.f)(F(F({},L),{},{ariaInvalid:Object(h.b)(f.d,!1),autocomplete:Object(h.b)(f.h),debounce:Object(h.b)(f.f,0),formatter:Object(h.b)(f.e),lazy:Object(h.b)(f.c,!1),lazyFormatter:Object(h.b)(f.c,!1),number:Object(h.b)(f.c,!1),placeholder:Object(h.b)(f.h),plaintext:Object(h.b)(f.c,!1),readonly:Object(h.b)(f.c,!1),trim:Object(h.b)(f.c,!1)})),"formTextControls"),G=o.default.extend({mixins:[A],props:N,data:function(){var t=this[R];return{localValue:Object(T.c)(t),vModelValue:this.modifyValue(t)}},computed:{computedClass:function(){var t=this.plaintext,e=this.type,n="range"===e,r="color"===e;return[{"custom-range":n,"form-control-plaintext":t&&!n&&!r,"form-control":r||!t&&!n},this.sizeFormClass,this.stateClass]},computedDebounce:function(){return M(Object(I.b)(this.debounce,0),0)},hasFormatter:function(){return Object(h.a)(this.formatter)}},watch:z({},R,(function(t){var e=Object(T.c)(t),n=this.modifyValue(t);e===this.localValue&&n===this.vModelValue||(this.clearDebounce(),this.localValue=e,this.vModelValue=n)})),created:function(){this.$_inputDebounceTimer=null},mounted:function(){this.$on(W.f,this.clearDebounce)},beforeDestroy:function(){this.clearDebounce()},methods:{clearDebounce:function(){clearTimeout(this.$_inputDebounceTimer),this.$_inputDebounceTimer=null},formatValue:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t=Object(T.c)(t),!this.hasFormatter||this.lazyFormatter&&!n||(t=this.formatter(t,e)),t},modifyValue:function(t){return t=Object(T.c)(t),this.trim&&(t=t.trim()),this.number&&(t=Object(I.a)(t,t)),t},updateValue:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.lazy;if(!r||n){this.clearDebounce();var o=function(){if((t=e.modifyValue(t))!==e.vModelValue)e.vModelValue=t,e.$emit(J,t);else if(e.hasFormatter){var n=e.$refs.input;n&&t!==n.value&&(n.value=t)}},c=this.computedDebounce;c>0&&!r&&!n?this.$_inputDebounceTimer=setTimeout(o,c):o()}},onInput:function(t){if(!t.target.composing){var e=t.target.value,n=this.formatValue(e,t);!1===n||t.defaultPrevented?Object(y.e)(t,{propagation:!1}):(this.localValue=n,this.updateValue(n),this.$emit(W.d,n))}},onChange:function(t){var e=t.target.value,n=this.formatValue(e,t);!1===n||t.defaultPrevented?Object(y.e)(t,{propagation:!1}):(this.localValue=n,this.updateValue(n,!0),this.$emit(W.b,n))},onBlur:function(t){var e=t.target.value,n=this.formatValue(e,t,!0);!1!==n&&(this.localValue=Object(T.c)(this.modifyValue(n)),this.updateValue(n,!0)),this.$emit(W.a,t)},focus:function(){this.disabled||Object(j.c)(this.$el)},blur:function(){this.disabled||Object(j.b)(this.$el)}}}),H=o.default.extend({computed:{validity:{cache:!1,get:function(){return this.$refs.input.validity}},validationMessage:{cache:!1,get:function(){return this.$refs.input.validationMessage}},willValidate:{cache:!1,get:function(){return this.$refs.input.willValidate}}},methods:{setCustomValidity:function(){var t;return(t=this.$refs.input).setCustomValidity.apply(t,arguments)},checkValidity:function(){var t;return(t=this.$refs.input).checkValidity.apply(t,arguments)},reportValidity:function(){var t;return(t=this.$refs.input).reportValidity.apply(t,arguments)}}}),K=n(45),Q={id:Object(h.b)(f.h)},U=o.default.extend({props:Q,data:function(){return{localId_:null}},computed:{safeId:function(){var t=this.id||this.localId_;return function(e){return t?(e=String(e||"").replace(/\s+/g,"_"))?t+"_"+e:t:null}}},mounted:function(){var t=this;this.$nextTick((function(){t.localId_="__BVID__".concat(t[K.a])}))}}),X=n(131);function Y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function Z(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Y(Object(source),!0).forEach((function(e){tt(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):Y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var et=["text","password","email","number","url","tel","search","range","color","date","time","datetime","datetime-local","month","week"],nt=Object(h.c)(Object(object.f)(Z(Z(Z(Z(Z(Z({},Q),w),D),C),N),{},{list:Object(h.b)(f.h),max:Object(h.b)(f.f),min:Object(h.b)(f.f),noWheel:Object(h.b)(f.c,!1),step:Object(h.b)(f.f),type:Object(h.b)(f.h,"text",(function(t){return Object(O.a)(et,t)}))})),l.c),it=o.default.extend({name:l.c,mixins:[X.a,U,V,_,S,G,$,H],props:nt,computed:{localType:function(){var t=this.type;return Object(O.a)(et,t)?t:"text"},computedAttrs:function(){var t=this.localType,e=this.name,form=this.form,n=this.disabled,r=this.placeholder,o=this.required,c=this.min,l=this.max,f=this.step;return{id:this.safeId(),name:e,form:form,type:t,disabled:n,placeholder:r,required:o,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,min:c,max:l,step:f,list:"password"!==t?this.list:null,"aria-required":o?"true":null,"aria-invalid":this.computedAriaInvalid}},computedListeners:function(){return Z(Z({},this.bvListeners),{},{input:this.onInput,change:this.onChange,blur:this.onBlur})}},watch:{noWheel:function(t){this.setWheelStopper(t)}},mounted:function(){this.setWheelStopper(this.noWheel)},deactivated:function(){this.setWheelStopper(!1)},activated:function(){this.setWheelStopper(this.noWheel)},beforeDestroy:function(){this.setWheelStopper(!1)},methods:{setWheelStopper:function(t){var input=this.$el;Object(y.c)(t,input,"focus",this.onWheelFocus),Object(y.c)(t,input,"blur",this.onWheelBlur),t||Object(y.a)(document,"wheel",this.stopWheel)},onWheelFocus:function(){Object(y.b)(document,"wheel",this.stopWheel)},onWheelBlur:function(){Object(y.a)(document,"wheel",this.stopWheel)},stopWheel:function(t){Object(y.e)(t,{propagation:!1}),Object(j.b)(this.$el)}},render:function(t){return t("input",{class:this.computedClass,attrs:this.computedAttrs,domProps:{value:this.localValue},on:this.computedListeners,ref:"input"})}}),img=n(187),ot={components:{BLink:r.a,BForm:m,BButton:v.a,BFormInput:it,BImg:img.a},data:function(){return{}},computed:{}},at=(n(206),n(46)),component=Object(at.a)(ot,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"misc-wrapper"},[n("b-link",{staticClass:"brand-logo",attrs:{href:"/"}},[n("h2",{staticClass:"brand-text ml-1"},[t._v("\n        Pductivity\n      ")])]),t._v(" "),n("div",{staticClass:"misc-inner p-2 p-sm-3"},[n("div",{staticClass:"w-100 text-center"},[n("h2",{staticClass:"mb-1"},[t._v("\n          We are launching soon 🚀\n        ")]),t._v(" "),n("p",{staticClass:"mb-3"},[t._v("\n          We're creating something awesome. Please subscribe to get notified when it's ready!\n        ")]),t._v(" "),n("b-form",{staticClass:"row justify-content-center m-0 mb-2",attrs:{inline:""},on:{submit:function(t){t.preventDefault()}}},[n("b-form-input",{staticClass:"col-12 col-md-5 mb-1 mr-md-2",attrs:{id:"notify-email",type:"text",placeholder:"john@example.com"}}),t._v(" "),n("b-button",{staticClass:"mb-1 btn-sm-block",attrs:{variant:"primary",type:"submit"}},[t._v("\n            Notify\n          ")])],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports},45:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(140);var r="_uid"}}]);