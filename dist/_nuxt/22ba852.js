(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{439:function(t,o,l){var content=l(456);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(24).default)("40e98a7a",content,!0,{sourceMap:!1})},455:function(t,o,l){"use strict";l(439)},456:function(t,o,l){var e=l(23)(!1);e.push([t.i,".text-background-active{background:hsla(0,0%,100%,.08)!important}.text-background{background:hsla(0,0%,100%,.08);transition:all .3s ease}.text-editor:hover .text-background{background:hsla(0,0%,100%,.16)}.ql-container,.ql-editor,.ql-toolbar,.quillWrapper{border:none!important}.ql-editor{border-top:1px solid hsla(0,0%,100%,.7)!important}.text-editor{border-bottom:1px solid hsla(0,0%,100%,.7)!important;transition:border-color .3s ease}.text-editor-active{border-bottom:1px solid var(--v-primary)!important}.ql-stroke{fill:none!important;stroke:#fff!important}.ql-formats>button:hover .ql-stroke{stroke:var(--v-primary)!important}.ql-picker-item:hover,.ql-picker-label .ql-active,.ql-picker:hover .ql-picker-label:before,.ql-selected,.ql-snow.ql-toolbar .ql-picker-item.ql-selected,.ql-snow .ql-toolbar .ql-picker-item.ql-selected,.ql-snow.ql-toolbar .ql-picker-item:hover,.ql-snow .ql-toolbar .ql-picker-item:hover,.ql-snow.ql-toolbar .ql-picker-label.ql-active,.ql-snow .ql-toolbar .ql-picker-label.ql-active,.ql-snow.ql-toolbar .ql-picker-label:hover,.ql-snow .ql-toolbar .ql-picker-label:hover,.ql-snow.ql-toolbar button.ql-active,.ql-snow .ql-toolbar button.ql-active,.ql-snow.ql-toolbar button:focus,.ql-snow .ql-toolbar button:focus,.ql-snow.ql-toolbar button:hover,.ql-snow .ql-toolbar button:hover{color:var(--v-primary)!important}.ql-snow.ql-toolbar button.ql-active .ql-stroke,.ql-snow .ql-toolbar button.ql-active .ql-stroke{stroke:var(--v-primary)!important}.ql-snow.ql-toolbar button.ql-active .ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-fill{fill:var(--v-primary)!important}.ql-picker-options{background-color:#121212!important}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#121212!important}.ql-picker-item,.ql-picker-label{color:#fff}",""]),t.exports=e},461:function(t,o,l){"use strict";l.r(o);var e=l(512),r=l(432),n=(l(35),l(463)),c=[[{header:[!1,1,2,3,4,5,6]}],["bold","italic","underline"],["blockquote"],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],["link"],["clean"]],d=l.n(n)()(),h={name:"TextEditor",props:{value:{type:String,default:""},label:{type:String,default:null},height:{type:[String,Number],default:256},width:{type:[String,Number],default:"100%"}},emits:["input"],data:function(){return{id:d,html:this.value,active:!1,toolbar:c}},computed:{style:function(){return{minHeight:"number"==typeof this.height?"".concat(this.height,"px"):this.height,width:"number"==typeof this.width?"".concat(this.width,"px"):this.width}}},watch:{value:function(t,o){t!==o&&(this.html=t)},html:function(t,o){0!==t&&this.$emit("input",this.html)}},methods:{focus:function(){this.active=!0},blur:function(){this.active=!1,this.$emit("input",this.html)}}},v=(l(455),l(87)),component=Object(v.a)(h,(function(){var t=this,o=t._self._c;return o(e.a,{staticClass:"text-editor mb-4",class:{"text-editor-active":t.active},style:t.style,attrs:{dense:"",tile:"",flat:""}},[t.label?o(r.d,{staticClass:"pa-0",class:{"primary--text":t.active}},[t._v(t._s(t.label))]):t._e(),t._v(" "),o(r.c,{staticClass:"pa-0 text-background",class:{"text-background-active":t.active}},[o("client-only",[o("VueEditor",{attrs:{id:t.id,"editor-toolbar":t.toolbar},on:{blur:t.blur,focus:t.focus},model:{value:t.html,callback:function(o){t.html=o},expression:"html"}})],1)],1)],1)}),[],!1,null,null,null);o.default=component.exports},463:function(t,o,l){(function(o){var l=void 0!==o&&o.pid?o.pid.toString(36):"";function e(){var time=Date.now(),t=e.last||time;return e.last=time>t?time:t+1}t.exports=t.exports.default=function(t,o){return(t||"")+""+l+e().toString(36)+(o||"")},t.exports.process=function(t,o){return(t||"")+l+e().toString(36)+(o||"")},t.exports.time=function(t,o){return(t||"")+e().toString(36)+(o||"")}}).call(this,l(190))}}]);