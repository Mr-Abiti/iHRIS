"use strict";(self["webpackChunkiHRIS_v5"]=self["webpackChunkiHRIS_v5"]||[]).push([[627],{5424:function(t,e,s){s.d(e,{Z:function(){return d}});var i=s(3325),l=s(5827),a=s(172),n=s(6952),o=s(7352),r=s(8085),h=s(2936),c=s(6505),p=s(9131),u=s(1824),d=(0,i.Z)(n.Z,p.Z,c.Z,r.Z,(0,o.d)("chipGroup"),(0,h.d)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...c.Z.options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(c.Z.options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,u.fK)(t,e,this)}))},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(a.Z,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.Zq,t)},genClose(){return this.$createElement(a.Z,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:s,data:i}=this.generateRouteLink();i.attrs={...i.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex},i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);const l=this.textColor||this.outlined&&this.color;return t(s,this.setTextColor(l,i),e)}})},7781:function(t,e,s){s.d(e,{Z:function(){return h}});s(6699);var i=s(5978),l=i.Z,a=s(5424),n=s(4589),o=s(1824),r=s(6290),h=l.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:t=>"boolean"===typeof t||[1e3,1024].includes(t)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:t=>(0,n.TI)(t).every((t=>null!=t&&"object"===typeof t))}},computed:{classes(){return{...l.options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);const e=this.internalArrayValue.reduce(((t,{size:e=0})=>t+e),0);return this.$vuetify.lang.t(this.counterSizeString,t,(0,n.XE)(e,1024===this.base))},internalArrayValue(){return(0,n.TI)(this.internalValue)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},text(){return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((t=>{const{name:e="",size:s=0}=t,i=this.truncateText(e);return this.showSize?`${i} (${(0,n.XE)(s,1024===this.base)})`:i})):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(t){!0===t&&(0,o.N6)("readonly is not supported on <v-file-input>",this)},immediate:!0},value(t){const e=this.multiple?t:t?[t]:[];(0,n.vZ)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map(((t,e)=>this.$createElement(a.Z,{props:{small:this.smallChips},on:{"click:close":()=>{const t=this.internalValue;t.splice(e,1),this.internalValue=t}}},[t]))):[]},genControl(){const t=l.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=(0,r.y0)(t.data.style,{display:"none"})),t},genInput(){const t=l.options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot(){if(!this.prependIcon)return null;const t=this.genIcon("prepend",(()=>{this.$refs.input.click()}));return this.genSlot("prepend","outer",[t])},genSelectionText(){const t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections(){const t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach(((e,s)=>{this.$scopedSlots.selection&&t.push(this.$scopedSlots.selection({text:this.text[s],file:e,index:s}))})):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot(){const t=l.options.methods.genTextFieldSlot.call(this);return t.data.on={...t.data.on||{},click:()=>this.$refs.input.click()},t},onInput(t){const e=[...t.target.files||[]];this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown(t){this.$emit("keydown",t)},truncateText(t){if(t.length<Number(this.truncateLength))return t;const e=Math.floor((Number(this.truncateLength)-1)/2);return`${t.slice(0,e)}…${t.slice(t.length-e)}`}}})},2364:function(t,e,s){s.r(e),s.d(e,{default:function(){return S}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("center",[s("v-card",{attrs:{width:"500"}},[s("v-card-text",[s("v-card-title",{attrs:{"primary-title":""}},[t._v(" Install New iHRIS App ")]),s("v-card-text",[s("v-file-input",{ref:"file",attrs:{"show-size":"",label:"Select",accept:".zip"},model:{value:t.app,callback:function(e){t.app=e},expression:"app"}})],1),s("v-card-actions",[s("v-row",[s("v-col",{attrs:{cols:"5"}},[t.displayProgress?s("v-progress-linear",{attrs:{height:"25"},model:{value:t.percentUpload,callback:function(e){t.percentUpload=e},expression:"percentUpload"}},[s("strong",[t._v(t._s(Math.ceil(t.percentUpload))+"%")])]):t._e()],1),s("v-spacer"),s("v-col",[s("v-btn",{attrs:{color:"primary",disabled:!t.app},on:{click:t.doUpload}},[t._v("Upload")])],1)],1)],1)],1)],1)],1)},l=[],a=s(9669),n=s.n(a),o={data(){return{app:"",percentUpload:0,displayProgress:!1}},methods:{doUpload(){const t=new FormData;t.append("app",this.app),n().request({method:"post",url:"/apps/install",data:t,onUploadProgress:t=>{this.displayProgress=!0,this.percentUpload=100*t.loaded/t.total}}).then((()=>{this.app="",this.$store.state.message.active=!0,this.$store.state.message.type="success",this.$store.state.message.text="App Installed Successfully"})).catch((t=>{t.response&&t.response.data?this.$store.state.message.text=t.response.data:this.$store.state.message.text="OOps, something went wrong, App Failed to Install",this.$store.state.message.active=!0,this.$store.state.message.type="red accent-2"}))}}},r=o,h=s(3736),c=s(3453),p=s.n(c),u=s(3150),d=s(2371),g=s(7118),v=s(2102),f=s(7781),m=s(7003),y=s(2877),b=s(9762),C=(0,h.Z)(r,i,l,!1,null,null,null),S=C.exports;p()(C,{VBtn:u.Z,VCard:d.Z,VCardActions:g.h7,VCardText:g.ZB,VCardTitle:g.EB,VCol:v.Z,VFileInput:f.Z,VProgressLinear:m.Z,VRow:y.Z,VSpacer:b.Z})}}]);
//# sourceMappingURL=627.4c0b09dd.js.map