(function(e){function t(t){for(var n,a,u=t[0],c=t[1],i=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==s[c]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},s={settings:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var d=c;o.push([4,"chunk-vendors","chunk-common"]),r()})({2884:function(e,t,r){"use strict";r.r(t);var n=r("a026"),s=r("8c4f"),o=r("f9d5"),a=r.n(o),u=r("003c"),c=r("c0cc"),i=r("918d"),d=r("0eb0"),l=r("af2a"),f=r("0486"),p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"user-feedback"},[t("user-feedback-notices"),t("user-feedback-admin-header",{attrs:{logo:e.headerLogo},scopedSlots:e._u([{key:"header-end",fn:function(){return[t("user-feedback-notifications-toggle")]},proxy:!0}])}),e._t("default"),t("router-view"),t("user-feedback-notifications")],2)},h=[],b=r("53ad"),g=r("3e90"),m=r("3e71");const v=document.querySelector('[href*="userfeedback_settings#/about"]'),k=document.querySelector('[href*="userfeedback_settings#/addons"]'),y=document.querySelector('[href*="userfeedback_settings#/integrations"]');var w={name:"UserFeedbackSettings",components:{UserFeedbackNotifications:b["a"],UserFeedbackNotificationsToggle:g["a"],UserFeedbackNotices:m["a"]},computed:{headerLogo(){return this.$uf.assets+"/img/user-feedback-logo-full.svg"}},methods:{handleRouteChange(){const e=this.$route,t=e.path.includes("about"),r=e.path.includes("addons"),n=e.path.includes("integrations"),s=document.querySelector("#toplevel_page_userfeedback_surveys .wp-submenu li.current");t&&v?(s.classList.remove("current"),v.closest("li").classList.add("current")):r&&k?(s.classList.remove("current"),k.closest("li").classList.add("current")):n&&y&&(s.classList.remove("current"),y.closest("li").classList.add("current"))}},watch:{$route(){this.handleRouteChange()}},created(){this.handleRouteChange()}},_=w,O=r("2877"),S=Object(O["a"])(_,p,h,!1,null,null,null),x=S.exports,j=(r("459b"),r("7220")),L=r("5943");(()=>{const e=document.getElementById("userfeedback-settings");e&&(n["a"].use(s["a"]),n["a"].use(u["a"],{themes:{uf:{$extend:"tooltip",autoHide:!0,hideTriggers:["click"]}}}),n["a"].use(c["a"],{componentPrefix:"UserFeedback",classPrefix:"user-feedback"}),window.userfeedback_addons&&window.userfeedback_addons.forEach(e=>{n["a"].use(e)}),n["a"].use(i["a"],{store:j["a"]}),n["a"].use(l["a"],{store:j["a"]}),n["a"].use(f["a"],{store:j["a"]}),n["a"].use(a.a),n["a"].use(d["a"]),new n["a"]({router:L["router"],store:j["a"],mounted(){this.$store.dispatch("config/fetchSettings"),this.$store.dispatch("license/getLicense")},render:e=>e(x)}).$mount(e))})()},4:function(e,t,r){e.exports=r("2884")},"459b":function(e,t,r){}});