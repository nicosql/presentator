(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-622574f8"],{"11b2":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{ref:"slotWrapper"},[t._t("default")],2)])},a=[],o={name:"relocator",props:{container:{default:"body"}},computed:{containerElem(){return"string"===typeof this.container?document.querySelector(this.container):this.container}},mounted(){if(this.containerElem){let t=this.$refs.slotWrapper;t.parentNode.removeChild(t),this.containerElem.appendChild(t),this.$once("hook:beforeDestroy",()=>{t&&(t.parentNode.removeChild(t),this.$el.appendChild(t))})}}},r=o,n=s("2877"),l=Object(n["a"])(r,i,a,!1,null,null,null);e["a"]=l.exports},"1efe":function(t,e,s){"use strict";s.d(e,"a",function(){return r});var i=s("9242"),a=s("9300"),o=s("dd93");class r extends i["a"]{load(t){t=t||{},super.load(t),this.projectId=o["a"].isEmpty(t.projectId)?null:t.projectId,this.order=o["a"].isEmpty(t.order)?1:t.order<<0,this.title=o["a"].isEmpty(t.title)?"":t.title,this.description=o["a"].isEmpty(t.description)?"":t.description,o["a"].isArray(t.assets)?this.assets=a["a"].createInstances(t.assets):this.assets=this.assets||[]}}},3905:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"popupContainer",staticClass:"popup",class:{active:t.isActive,"is-closing":t.isClosing},attrs:{tabindex:"-1"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:e.target!==e.currentTarget?null:void(!t.closeOnEsc||t.close())}}},[s("div",{staticClass:"popup-overlay",on:{click:function(e){e.preventDefault(),!t.closeOnOverlay||t.close()}}}),s("div",{staticClass:"popup-panel"},[t.closeBtn?s("span",{staticClass:"popup-close-handle popup-close",on:{click:function(e){return e.preventDefault(),t.close()}}}):t._e(),s("div",{staticClass:"popup-header"},[t._t("header")],2),s("div",{staticClass:"popup-content"},[t._t("content")],2),s("div",{staticClass:"popup-footer"},[t._t("footer")],2)])])},a=[],o={name:"popup",props:{closeOnEsc:{type:Boolean,default:!0},closeOnOverlay:{type:Boolean,default:!0},closeBtn:{type:Boolean,default:!0}},data(){return{isActive:!1,isClosing:!1}},methods:{open(){this.isActive=!0,this.isClosing=!1,this.$nextTick(()=>{this.$refs.popupContainer.focus()}),document.body.classList.add("popup-active"),this.$nextTick(()=>{let t=this.$el.querySelector("form input");t&&t.focus()})},close(){this.isActive&&(this.isClosing=!0,document.body.classList.remove("popup-active"),this.closingTimeoutId&&clearTimeout(this.closingTimeoutId),this.closingTimeoutId=setTimeout(()=>{this.isActive=!1,this.isClosing=!1},300))}}},r=o,n=s("2877"),l=Object(n["a"])(r,i,a,!1,null,null,null);e["a"]=l.exports},9300:function(t,e,s){"use strict";s.d(e,"a",function(){return r});s("28a5");var i=s("9242"),a=s("dd93");const o=["png","jpg","jpeg","svg","bmp"];class r extends i["a"]{load(t){t=t||{},super.load(t),this.guidelineSectionId=a["a"].isEmpty(t.guidelineSectionId)?null:t.guidelineSectionId,this.type=a["a"].isEmpty(t.type)?"file":t.type,this.order=a["a"].isEmpty(t.order)?1:t.order,this.hex=a["a"].isEmpty(t.hex)?"":t.hex,this.title=a["a"].isEmpty(t.title)?"":t.title,this.file=a["a"].isEmpty(t.file)?{}:t.file}get isFile(){return"file"===this.type}get isColor(){return"color"===this.type}get contrastHex(){return this.isColor?a["a"].getContrastHex(this.hex):""}get rgb(){var t=a["a"].hexToRgb(this.hex);return"rgb("+t.r+", "+t.g+", "+t.b+")"}get fileExtension(){return this.isFile&&this.file.original?this.file.original.split(".").pop():""}get isImage(){return this.isFile&&this.file.original&&o.indexOf(this.fileExtension)>=0}getFileUrl(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"original";return this.file[t]||this.file["original"]||""}}},"9c86":function(t,e,s){"use strict";s.d(e,"a",function(){return o});var i=s("9242"),a=s("dd93");class o extends i["a"]{load(t){t=t||{},super.load(t),this.title=a["a"].isEmpty(t.title)?"":t.title,this.archived=a["a"].isEmpty(t.archived)?0:t.archived<<0,this.featuredScreen=a["a"].isEmpty(t.featuredScreen)?{}:t.featuredScreen}getFeaturedScreen(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"original";return this.featuredScreen[t]||this.featuredScreen["original"]||""}get isArchived(){return!!this.archived}}},ae26:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"guideline-section"},[s("header",{staticClass:"section-header"},[s("h5",{staticClass:"title"},[t._v(t._s(t.section.title))]),t.section.description?[t._v("\n            ("),s("div",{staticClass:"description"},[t._v(t._s(t.section.description))]),t._v(")\n        ")]:t._e(),s("div",{staticClass:"flex-fill-block"}),s("div",{staticClass:"ctrl-item toggle-ctrl",on:{click:function(e){return e.preventDefault(),t.toggleSection()}}},[t.collapsed?[s("span",{staticClass:"txt m-r-5 txt-default"},[t._v(t._s(t.$t("Expand")))]),s("i",{staticClass:"fe fe-chevron-down"})]:[s("span",{staticClass:"txt m-r-5"},[t._v(t._s(t.$t("Collapse")))]),s("i",{staticClass:"fe fe-chevron-up"})]],2)],2),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.collapsed,expression:"!collapsed"}],staticClass:"section-content"},[s("div",{staticClass:"boxes-list assets-list"},t._l(t.orderedAssets,function(t){return s("asset-box-preview",{key:t.id,attrs:{asset:t}})}),1)])])},a=[],o=(s("55dd"),s("dd93")),r=s("1efe"),n=s("9300"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box box-card box-compact",class:{"box-color":t.asset.isColor},on:{mouseleave:function(e){!t.$refs.assetDropdown||t.$refs.assetDropdown.hide()}}},[s("figure",{staticClass:"box-thumb",style:{background:t.asset.hex}},[t.asset.isFile?[s("div",{staticClass:"crop-wrapper"},[t.asset.isImage?s("img",{staticClass:"img",attrs:{src:t.asset.getFileUrl("medium"),alt:t.asset.title}}):s("span",{staticClass:"img img-alt"},[t._v(t._s(t.asset.fileExtension))])])]:t._e(),s("div",{staticClass:"thumb-overlay"},[t.asset.isImage?[s("div",{staticClass:"overlay-ctrl",on:{click:function(e){return e.preventDefault(),t.openPreviewPopup()}}}),s("div",{staticClass:"box-ctrl handle center",on:{click:function(e){return e.preventDefault(),t.openPreviewPopup()}}},[s("i",{staticClass:"fe fe-eye"})])]:t._e(),s("div",{staticClass:"box-ctrl handle top-right"},[s("i",{staticClass:"fe fe-more-horizontal",style:{color:t.asset.isColor?t.asset.contrastHex:null}}),s("toggler",{ref:"assetDropdown",staticClass:"dropdown dropdown-sm"},[t.asset.isFile?s("a",{staticClass:"dropdown-item",attrs:{href:t.asset.getFileUrl(),tabindex:"-1",download:"",target:"_blank",rel:"noopener"}},[s("i",{staticClass:"fe fe-download"}),s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Download")))])]):t._e(),t.asset.isColor?s("div",{staticClass:"dropdown-item",on:{click:function(e){e.preventDefault(),t.copyToClipboard(t.asset.hex.toUpperCase())}}},[s("i",{staticClass:"fe fe-copy"}),s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Copy"))+" HEX")])]):t._e(),t.asset.isColor?s("div",{staticClass:"dropdown-item",on:{click:function(e){e.preventDefault(),t.copyToClipboard(t.asset.rgb.toUpperCase())}}},[s("i",{staticClass:"fe fe-copy"}),s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Copy"))+" RGB")])]):t._e()])],1)],2)],2),s("div",{staticClass:"box-content"},[t.asset.isFile?[t.asset.isImage?s("div",{staticClass:"title",attrs:{title:t.asset.title},on:{click:function(e){return e.preventDefault(),t.openPreviewPopup()}}},[t._v("\n                "+t._s(t.asset.title)+"\n            ")]):s("a",{staticClass:"title",attrs:{target:"_blank",rel:"noopener",download:"",href:t.asset.getFileUrl(),title:t.asset.title}},[t._v("\n                "+t._s(t.asset.title)+"\n            ")]),s("div",{staticClass:"meta"},[s("div",{staticClass:"meta-item txt-uppercase"},[t._v(t._s(t.asset.fileExtension))]),t.asset.isImage&&t.assetWidth>0&&t.assetHeight>0?s("div",{staticClass:"meta-item"},[t._v("\n                    "+t._s(t.assetWidth)+"x"+t._s(t.assetHeight)+"\n                ")]):t._e()])]:[s("div",{staticClass:"title cursor-default",attrs:{title:t.asset.title}},[t._v(t._s(t.asset.title))]),s("div",{staticClass:"meta"},[s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.$t("Copy"),expression:"$t('Copy')",modifiers:{bottom:!0}}],staticClass:"meta-item",on:{click:function(e){e.preventDefault(),t.copyToClipboard(t.asset.hex.toUpperCase())}}},[t._v("\n                    "+t._s(t.asset.hex.toUpperCase())+"\n                ")]),s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.$t("Copy"),expression:"$t('Copy')",modifiers:{bottom:!0}}],staticClass:"meta-item",on:{click:function(e){e.preventDefault(),t.copyToClipboard(t.asset.rgb.toUpperCase())}}},[t._v("\n                    "+t._s(t.asset.rgb.toUpperCase())+"\n                ")])])]],2),t.asset.isImage?s("relocator",[s("popup",{key:"asset_popup_"+t.asset.id,ref:"previewPopup",staticClass:"popup-image",scopedSlots:t._u([{key:"content",fn:function(){return[t.$refs.previewPopup&&t.$refs.previewPopup.isActive?s("img",{attrs:{src:t.asset.getFileUrl("original"),alt:t.asset.title}}):t._e()]},proxy:!0}],null,!1,4169098407)})],1):t._e()],1)},c=[],p=s("11b2"),u=s("3905"),d={name:"asset-box-preview",components:{relocator:p["a"],popup:u["a"]},props:{asset:{type:n["a"],required:!0}},data(){return{assetWidth:0,assetHeight:0}},mounted(){this.asset.isImage&&o["a"].loadImage(this.asset.getFileUrl()).then(t=>{this.assetWidth=t.width,this.assetHeight=t.height})},methods:{copyToClipboard(t){o["a"].copyToClipboard(t)?this.$toast(this.$t("Successfully copied {text} to clipboard.",{text:t})):this.$toast(this.$t("Failed copying {text} to clipboard.",{text:t}),"danger")},openPreviewPopup(){this.$refs.previewPopup&&this.$refs.previewPopup.open()},closePreviewPopup(){this.$refs.previewPopup&&this.$refs.previewPopup.close()}}},v=d,h=s("2877"),g=Object(h["a"])(v,l,c,!1,null,null,null),m=g.exports,f={name:"guideline-section-preview",props:{section:{type:r["a"],required:!0}},components:{"asset-box-preview":m},data(){return{collapsed:!1}},computed:{orderedAssets(){return this.section.assets.slice().sort((t,e)=>t["order"]-e["order"])}},methods:{toggleSection(){this.collapsed=!this.collapsed}}},C=f,_=Object(h["a"])(C,i,a,!1,null,null,null);e["a"]=_.exports},ba5d:function(t,e,s){"use strict";s.d(e,"a",function(){return r});var i=s("9242"),a=s("72a1"),o=s("dd93");class r extends i["a"]{load(t){t=t||{},super.load(t),this.projectId=o["a"].isEmpty(t.projectId)?null:t.projectId,this.slug=o["a"].isEmpty(t.slug)?"":t.slug,this.passwordProtected=!!t.passwordProtected,this.allowComments=!!t.allowComments,this.allowGuideline=!!t.allowGuideline,o["a"].isArray(t.prototypes)?this.prototypes=a["a"].createInstances(t.prototypes):this.prototypes=this.prototypes||[]}get baseUrl(){var t=o["a"].getNestedVal(window,"location.origin","");return o["a"].getNestedVal(window,"location.href","").indexOf("/#/")>0&&(t+="/#"),t=t.endsWith("/")?t.substring(0,t.length-1):t,t}get fullUrl(){return this.baseUrl+"/"+this.slug}get prototypeIds(){var t=[];for(let e in this.prototypes)this.prototypes[e].id&&t.push(this.prototypes[e].id);return t}}},db9e:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"floating-bar preview-bar",class:{active:t.isActive}},[s("div",{staticClass:"visibility-toggle",on:{click:function(e){return e.preventDefault(),t.toggle()}}},[s("span",{staticClass:"txt"},[t._v(t._s(t.isActive?t.$t("Hide"):t.$t("Show")))])]),s("div",{staticClass:"nav nav-left"},[t._t("left")],2),s("div",{staticClass:"nav nav-center"},[t.projectLink.allowGuideline?s("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:t.$t("Guideline ({shortcut})",{shortcut:"G"}),expression:"$t('Guideline ({shortcut})', {shortcut: 'G'})",modifiers:{top:!0}},{name:"shortcut",rawName:"v-shortcut.71",value:t.selfClick,expression:"selfClick",modifiers:{71:!0}}],staticClass:"ctrl-item ctrl-item-circle ctrl-item-warning",attrs:{to:{name:"preview-guideline",params:{slug:t.projectLink.slug},query:{}},"active-class":"highlight"}},[s("i",{staticClass:"fe fe-book-open"})]):t._e(),s("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:t.$t("Preview mode ({shortcut})",{shortcut:"P"}),expression:"$t('Preview mode ({shortcut})', {shortcut: 'P'})",modifiers:{top:!0}},{name:"shortcut",rawName:"v-shortcut.80",value:t.selfClick,expression:"selfClick",modifiers:{80:!0}}],staticClass:"ctrl-item ctrl-item-circle ctrl-item-success",attrs:{to:{name:"preview-prototype",params:Object.assign({},t.$route.params,{slug:t.projectLink.slug,prototypeId:t.activePrototypeId}),query:Object.assign({},t.$route.query,{mode:"preview"})},"exact-active-class":"highlight"}},[s("i",{staticClass:"fe fe-eye"})]),t.projectLink.allowComments?s("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:t.$t("Comments mode ({shortcut})",{shortcut:"C"}),expression:"$t('Comments mode ({shortcut})', {shortcut: 'C'})",modifiers:{top:!0}},{name:"shortcut",rawName:"v-shortcut.67",value:t.selfClick,expression:"selfClick",modifiers:{67:!0}}],staticClass:"ctrl-item ctrl-item-circle ctrl-item-danger",attrs:{to:{name:"preview-prototype",params:Object.assign({},t.$route.params,{slug:t.projectLink.slug,prototypeId:t.activePrototypeId}),query:Object.assign({},t.$route.query,{mode:"comments"})},"exact-active-class":"highlight"}},[t.activeUnreadComments.length?s("span",{staticClass:"beacon beacon-danger"}):t._e(),s("i",{staticClass:"fe fe-message-circle"})]):t._e()],1),s("div",{staticClass:"nav nav-right"},[t._t("right"),s("div",{staticClass:"ctrl-item ctrl-item-circle ctrl-item-settings"},[s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:t.$t("Preview info"),expression:"$t('Preview info')",modifiers:{top:!0}}]},[s("i",{staticClass:"fe fe-info"})]),s("preview-info-popover",{ref:"projectInfoPopover",staticClass:"transform-bottom-right",attrs:{project:t.project}})],1)],2)])},a=[],o=(s("ac6a"),s("ade3")),r=s("2f62"),n=s("0abc"),l=s("3d48"),c=s("9c86"),p=s("ba5d"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("toggler",{staticClass:"popover popover-sm preview-info-popover",attrs:{hideOnChildClick:!1}},[s("div",{staticClass:"content m-b-small txt-center"},[s("p",[s("strong",[t._v(t._s(t.project.title))])]),t.$getAppConfig("VUE_APP_PROJECT_URL")?s("p",{staticClass:"txt-hint txt-small"},[s("i18n",{attrs:{path:"Presented with {projectLink}."}},[s("a",{attrs:{place:"projectLink",href:t.$getAppConfig("VUE_APP_PROJECT_URL"),target:"_blank",rel:"noopener"}},[t._v("Presentator")])])],1):t._e(),s("div",{staticClass:"clearfix m-t-small"}),s("language-select")],1)])},d=[],v=s("f7ef"),h={name:"preview-info-popover",components:{"language-select":v["a"]},props:{project:{type:c["a"],required:!0}}},g=h,m=s("2877"),f=Object(m["a"])(g,u,d,!1,null,null,null),C=f.exports;function _(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,i)}return s}function y(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?_(s,!0).forEach(function(e){Object(o["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):_(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var b={name:"preview-bar",components:{"preview-info-popover":C},props:{project:{type:c["a"],required:!0},projectLink:{type:p["a"],required:!0}},data(){return{isActive:!0}},computed:y({},Object(r["d"])({activePrototypeId:t=>t.prototypes.activePrototypeId,activeScreenId:t=>t.screens.activeScreenId}),{},Object(r["c"])({getUnreadCommentsForScreen:"notifications/getUnreadCommentsForScreen"}),{activeUnreadComments(){return this.getUnreadCommentsForScreen(this.activeScreenId)}}),mounted(){var t=l["a"].getItem(n["a"].get("VUE_APP_PREVIEW_BAR_VISIBLITY_STORAGE_KEY"),!0);t?this.show():this.hide()},methods:{show(){this.isActive=!0,l["a"].setItem(n["a"].get("VUE_APP_PREVIEW_BAR_VISIBLITY_STORAGE_KEY"),!0),this.$emit("show")},hide(){this.isActive=!1,l["a"].setItem(n["a"].get("VUE_APP_PREVIEW_BAR_VISIBLITY_STORAGE_KEY"),!1),this.$emit("hide")},toggle(){this.isActive?this.hide():this.show()},goToGuideline(){this.$router.push({name:"preview-guideline",params:{slug:this.projectLink.slug}})},selfClick(t,e){e&&e.click()}}},w=b,x=Object(m["a"])(w,i,a,!1,null,null,null);e["a"]=x.exports},f7ef:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"languages-select",class:{loading:t.isChanging}},[s("div",{staticClass:"selected-language"},[s("span",{staticClass:"txt language-title"},[t._v(t._s(t.activeLanguageTitle))]),t._v("\n        ("),s("span",{staticClass:"txt language-code"},[t._v(t._s(t.activeLanguageCode))]),t._v(")\n    ")]),s("toggler",{staticClass:"dropdown dropdown-sm"},t._l(t.languages,function(e,i){return s("div",{key:"language_"+i,staticClass:"dropdown-item",class:{active:t.activeLanguageCode==i},on:{click:function(e){return e.preventDefault(),t.changeLanguage(i)}}},[s("small",{staticClass:"label language-code m-r-5",class:t.activeLanguageCode==i?"label-transp-primary":"label-light-border"},[t._v(t._s(i))]),s("span",{staticClass:"txt language-title"},[t._v(t._s(e))])])}),0)],1)},a=[],o=(s("097d"),s("9225")),r={name:"languages-select",data(){return{isChanging:!1,languages:Object.assign({},o["c"])}},watch:{"$i18n.locale":function(t,e){"function"===typeof document._titleFunc&&this.$setDocumentTitle(document._titleFunc)}},computed:{activeLanguageCode(){return this.$i18n.locale},activeLanguageTitle(){return this.languages[this.activeLanguageCode]}},methods:{changeLanguage(t){this.isChanging=!0,Object(o["a"])(t).finally(()=>{this.isChanging=!1})}}},n=r,l=s("2877"),c=Object(l["a"])(n,i,a,!1,null,null,null);e["a"]=c.exports}}]);