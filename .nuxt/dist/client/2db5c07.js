(window.webpackJsonp=window.webpackJsonp||[]).push([[17,13,14],{435:function(e,t,l){"use strict";l.d(t,"c",(function(){return n})),l.d(t,"a",(function(){return r})),l.d(t,"d",(function(){return o})),l.d(t,"b",(function(){return c}));var n=[{find:"LEVEL",display:"Level"},{find:"CLASS-LEVEL",display:"Class Level"},{find:"PROFICIENCY",display:"Prof Bonus"},{find:"STR",display:"Str Mod"},{find:"DEX",display:"Dex Mod"},{find:"CON",display:"Con Mod"},{find:"INT",display:"Int Mod"},{find:"WIS",display:"Wis Mod"},{find:"CHA",display:"Cha Mod"}],r=[{label:"d4",value:4},{label:"d6",value:6},{label:"d8",value:8},{label:"d10",value:10},{label:"d12",value:12},{label:"d20",value:20},{label:"d100",value:100}],o=[{label:"Custom",value:"CUSTOM"},{label:"Level",value:"LEVEL"},{label:"Class Level",value:"CLASS-LEVEL"},{label:"Proficiency ",value:"PROFICIENCY"},{label:"Strength",value:"STR"},{label:"Dexterity",value:"DEX"},{label:"Constitution",value:"CON"},{label:"Intelligence",value:"INT"},{label:"Wisdom",value:"WIS"},{label:"Charisma",value:"CHA"},{label:"Spellcasting Modifier",value:"MOD"}],c=[{label:"Custom",value:"CUSTOM"},{label:"Level",value:"LEVEL",suffix:""},{label:"Class Level",value:"CLASS-LEVEL",suffix:""},{label:"Proficiency ",value:"PROFICIENCY"},{label:"Strength",value:"STR",suffix:"Modifier"},{label:"Dexterity",value:"DEX",suffix:"Modifier"},{label:"Constitution",value:"CON",suffix:"Modifier"},{label:"Intelligence",value:"INT",suffix:"Modifier"},{label:"Wisdom",value:"WIS",suffix:"Modifier"},{label:"Charisma",value:"CHA",suffix:"Modifier"},{label:"Spellcasting",value:"MOD",suffix:"Modifier"}]},436:function(e,t,l){var content=l(446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(24).default)("13ed177d",content,!0,{sourceMap:!1})},437:function(e,t,l){var content=l(452);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(24).default)("0f444ba3",content,!0,{sourceMap:!1})},438:function(e,t,l){var content=l(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(24).default)("45b5618b",content,!0,{sourceMap:!1})},440:function(e,t,l){"use strict";l.r(t);var n=l(479),r=l(413),o=(l(35),l(5),l(80),{name:"DicePill",props:{index:{type:Number,required:!0},dice:{type:Object,default:function(){return{dice:20,count:1}}}},emits:["remove"],computed:{icon:function(){return"mdi-dice-d".concat(this.dice.dice.toString())},count:function(){return this.dice.count}},methods:{click:function(){this.$emit("remove",this.index)}}}),c=l(87),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t(n.a,{staticClass:"rounded-0 black--text",attrs:{close:"","close-icon":"mdi-close-box",color:"blue",label:""},on:{"click:close":e.click}},[t("h2",[e._v(e._s(e.count))]),e._v(" "),t(r.a,[e._v(e._s(e.icon))])],1)}),[],!1,null,null,null);t.default=component.exports},441:function(e,t,l){"use strict";l.r(t);var n=l(479),r=(l(35),l(157),l(5),l(29),l(435)),o={name:"ModPill",props:{index:{type:Number,required:!0},modifier:{type:Object,default:function(){return{type:"CUSTOM",value:0}}}},emits:["remove"],computed:{text:function(){var e=this.modifier,t=e.type,l=e.value;if("CUSTOM"===t)return"+ ".concat(l);var n=r.b.find((function(e){return e.value===t}));return"+ ".concat(n.label," ").concat(n.suffix)}},methods:{click:function(){this.$emit("remove",this.index)}}},c=l(87),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t(n.a,{staticClass:"rounded-0 black--text",attrs:{close:"","close-icon":"mdi-close-box",color:"blue",label:""},on:{"click:close":e.click}},["CUSTOM"===e.modifier.type?t("h2",[e._v(e._s(e.text))]):e._e(),e._v(" "),"CUSTOM"!==e.modifier.type?t("h3",[e._v(e._s(e.text))]):e._e()])}),[],!1,null,null,null);t.default=component.exports},444:function(e,t,l){var content=l(465);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(24).default)("543d1950",content,!0,{sourceMap:!1})},445:function(e,t,l){"use strict";l(436)},446:function(e,t,l){var n=l(23)(!1);n.push([e.i,".append-no-margin>div.v-input__append-outer{margin:0!important;height:53px!important}.append-button-size{height:53px!important;width:53px!important}.wide-select{width:280px}.thin-select{width:200px}",""]),e.exports=n},447:function(e,t,l){"use strict";l.r(t);l(35),l(48),l(29);var n={name:"GCol",inject:["gRow"],props:{cols:{type:[String,Number],default:1,validator:function(e){return e=parseInt(e),!isNaN(e)&&e>0}},gutter:{type:String,default:"default",validator:function(e){return["none","default","large"].includes(e)}}},data:function(){return{internal:{cols:this.cols}}},computed:{colFlexWidth:function(){var e=this.internal.cols,t=this.gRow,l=t.columns,n=t.gutter,g=0;"default"===n&&(g=8),"large"===n&&(g=24);var p=Math.min(parseInt(e),parseInt(l))/parseInt(l)*100;return{flex:"0 0 calc(".concat(p,"% - ").concat(g,"px)"),maxWidth:"calc(".concat(p,"% - ").concat(g,"px)"),width:"calc(".concat(p,"% - ").concat(g,"px)")}},classes:function(){var g=this.gRow.gutter;return{"g-col-gutters-default":"default"===g,"g-col-gutters-none":"none"===g,"g-col-gutters-large":"large"===g}}}},r=(l(451),l(87)),component=Object(r.a)(n,(function(){var e=this;return(0,e._self._c)("div",{staticClass:"g-col",class:e.classes,style:e.colFlexWidth},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},448:function(e,t,l){"use strict";l.r(t);l(13),l(17),l(18),l(5),l(21),l(12),l(22);var n=l(2);l(35),l(48);function r(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var c={name:"GRow",provide:function(){return{gRow:o({},this.getData)}},props:{cols:{type:[String,Number],default:12,validator:function(e){return e=parseInt(e),!isNaN(e)}},gutter:{type:String,default:"default",validator:function(e){return["none","default","large"].includes(e)}}},computed:{classes:function(){var g=this.gutter;return{"row-gutters-default":"default"===g,"row-gutters-none":"none"===g,"row-gutters-large":"large"===g}},getData:function(){return{columns:this.cols,gutter:this.gutter}}}},d=(l(453),l(87)),component=Object(d.a)(c,(function(){var e=this;return(0,e._self._c)("div",{staticClass:"row",class:e.classes},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},450:function(e,t,l){"use strict";l.r(t);var n=l(417),r=l(512),o=l(432),c=l(479),d=l(522),f=l(462),v=l(413),m=l(481),h=l(426),y=l(485),_=(l(5),l(12),l(29),l(80),l(157),l(57),l(186),l(435)),x={name:"MakeDiceRoll",props:{label:{type:String,default:"Dice Roll"},value:{type:Array,default:function(){return[]}}},emits:["input"],data:function(){return{show:!1,valid:!1,display:"",current:{dice:{count:1,dice:20},modifier:{type:"CUSTOM",value:0}},internal:[],dice:_.a,types:_.d}},computed:{hideCustomValue:function(){return"CUSTOM"!==this.current.modifier.type}},watch:{show:function(e){e&&(this.internal=this.value)},value:function(e,t){JSON.stringify(e)!==JSON.stringify(t)&&(this.internal=e)}},mounted:function(){Array.isArray(this.value)?this.internal=this.value:this.$emit("input",[])},methods:{makeDisplay:function(){var e=[];this.value.forEach((function(t){var l=t.type,n=t.dice,r=t.count,o=t.modifier,c=t.value;if("DICE"===l&&e.push("".concat(r," d").concat(n)),"MODIFIER"===l)if("CUSTOM"===o)e.push(c.toString());else{var d=_.c.find((function(e){return e.find===o})).display;e.push(d)}})),this.display=e.join(" + ")},addDice:function(){var e=this.current.dice,t=e.dice,l=e.count;this.internal.push({type:"DICE",dice:t,count:l}),this.current.dice={dice:20,count:1}},addModifier:function(){var e=this.current.modifier,t=e.type,l=e.value,n={type:"MODIFIER",modifier:t};"CUSTOM"===t&&(n.value=l),this.internal.push(n),this.current.modifier={type:"CUSTOM",value:0}},remove:function(e){this.internal.splice(e,1)},save:function(){var e=this,data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;data&&(this.internal=data),this.$emit("input",this.internal),this.$nextTick((function(){e.makeDisplay(),e.show=!1}))}}},C=x,w=(l(445),l(87)),component=Object(w.a)(C,(function(){var e=this,t=e._self._c;return t(d.a,{staticClass:"rounded-0",attrs:{"max-width":620},scopedSlots:e._u([{key:"activator",fn:function(l){var r=l.on,o=l.attrs;return[t(y.a,{staticClass:"rounded-0 append-no-margin",attrs:{"hide-details":"",label:e.label,color:"primary",filled:"",dense:"",readonly:""},on:{"click:append":function(t){e.show=!e.show}},scopedSlots:e._u([{key:"append-outer",fn:function(){return[t(n.a,e._g(e._b({staticClass:"append-button-size",attrs:{tile:"",fab:"",color:e.valid?"green":"secondary"}},"v-btn",o,!1),r),[t(v.a,[e._v("mdi-cog")])],1)]},proxy:!0}],null,!0),model:{value:e.display,callback:function(t){e.display=t},expression:"display"}})]}}]),model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[e._v(" "),t(r.a,{attrs:{tile:""}},[t(o.d,{staticClass:"primary--text h2"},[e._v(" Edit Dice Roll ")]),e._v(" "),t(f.a),e._v(" "),t(o.c,[t("div",{staticClass:"d-flex flex-row mt-2"},[t("div",[t("h4",{staticClass:"primary--text"},[e._v("Dice Roll")]),e._v(" "),t("div",{staticClass:"d-flex flex-row"},[t("div",[t("span",[e._v("Count")]),e._v(" "),t(y.a,{staticClass:"rounded-0",staticStyle:{width:"80px"},attrs:{type:"number",dense:"","hide-details":"",filled:""},model:{value:e.current.dice.count,callback:function(t){e.$set(e.current.dice,"count",t)},expression:"current.dice.count"}})],1),e._v(" "),t("div",{staticClass:"mx-1"},[t("span",[e._v("Dice")]),e._v(" "),t(m.a,{staticClass:"rounded-0",staticStyle:{width:"80px"},attrs:{items:e.dice,"item-value":"value",filled:"",dense:"","hide-details":""},scopedSlots:e._u([{key:"selection",fn:function(l){var n=l.item;return[100!==n.value?t(v.a,[e._v("\n                    mdi-dice-"+e._s(n.label)+"\n                  ")]):e._e(),e._v(" "),100===n.value?[e._v(e._s(n.label))]:e._e()]}},{key:"item",fn:function(l){var n=l.item;return[100!==n.value?t(v.a,[e._v("\n                    mdi-dice-"+e._s(n.label)+"\n                  ")]):e._e(),e._v(" "),100===n.value?[e._v(e._s(n.label))]:e._e()]}}]),model:{value:e.current.dice.dice,callback:function(t){e.$set(e.current.dice,"dice",t)},expression:"current.dice.dice"}})],1),e._v(" "),t("div",{staticClass:"d-flex flex-column"},[t("span",[e._v(" ")]),e._v(" "),t(n.a,{staticStyle:{height:"41px",width:"41px"},attrs:{color:"green",fab:"",tile:"",small:""},on:{click:function(t){return t.preventDefault(),e.addDice.apply(null,arguments)}}},[t(v.a,[e._v("mdi-plus")])],1)],1)])]),e._v(" "),t(h.a),e._v(" "),t("div",[t("h4",{staticClass:"primary--text"},[e._v("Modifier")]),e._v(" "),t("div",{staticClass:"d-flex flex-row"},[t("div",[t("span",[e._v("Type")]),e._v(" "),t(m.a,{staticClass:"rounded-0",class:{"thin-select":!e.hideCustomValue,"wide-select":e.hideCustomValue},attrs:{items:e.types,"item-text":"label","item-value":"value",filled:"",dense:"","hide-details":""},model:{value:e.current.modifier.type,callback:function(t){e.$set(e.current.modifier,"type",t)},expression:"current.modifier.type"}})],1),e._v(" "),t("div",{staticClass:"mx-1"},[t("span",[e._v(e._s(e.hideCustomValue?"":"Value"))]),e._v(" "),e.hideCustomValue?e._e():t(y.a,{staticClass:"rounded-0",staticStyle:{width:"80px"},attrs:{filled:"",dense:"",type:"number","hide-details":""},model:{value:e.current.modifier.value,callback:function(t){e.$set(e.current.modifier,"value",t)},expression:"current.modifier.value"}})],1),e._v(" "),t("div",{staticClass:"d-flex flex-column"},[t("span",[e._v(" ")]),e._v(" "),t(n.a,{staticStyle:{height:"41px",width:"41px"},attrs:{color:"green",fab:"",tile:"",small:""},on:{click:function(t){return t.preventDefault(),e.addModifier.apply(null,arguments)}}},[t(v.a,[e._v("mdi-plus")])],1)],1)])])],1),e._v(" "),t("div",{staticClass:"d-flex flex-row flex-wrap align-center"},[e._l(e.internal,(function(l,n){return["DICE"===l.type?t("dice-pill",{key:n,staticClass:"mt-2",attrs:{index:n,dice:{dice:l.dice,count:l.count}},on:{remove:e.remove}}):e._e(),e._v(" "),"MODIFIER"===l.type?t("mod-pill",{key:n,staticClass:"mt-2",attrs:{index:n,modifier:{type:l.modifier,value:l.value}},on:{remove:e.remove}}):e._e(),e._v(" "),n<e.internal.length-1?t(c.a,{key:"plus-"+n,staticClass:"mx-2 mt-2 rounded-0",attrs:{label:"",small:""}},[t("h2",[e._v("+")])]):e._e()]}))],2)]),e._v(" "),t(o.a,{staticClass:"pa-0 d-flex flex-row"},[t(n.a,{staticClass:"ma-0 py-7",staticStyle:{width:"50%"},attrs:{tile:"",color:"error"},on:{click:function(t){e.show=!1}}},[e._v("\n        cancel\n      ")]),e._v(" "),t(n.a,{staticClass:"ma-0 py-7",staticStyle:{width:"50%"},attrs:{tile:"",color:"success"},on:{click:function(t){return t.preventDefault(),e.save(null)}}},[e._v("\n        save\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DicePill:l(440).default,ModPill:l(441).default})},451:function(e,t,l){"use strict";l(437)},452:function(e,t,l){var n=l(23)(!1);n.push([e.i,".row .g-col{width:100%}.row .g-col-gutters-default{margin:4px}.row .g-col-gutters-large{margin:12px}.row .g-col-gutters-none{margin:0}",""]),e.exports=n},453:function(e,t,l){"use strict";l(438)},454:function(e,t,l){var n=l(23)(!1);n.push([e.i,".row-gutters-default{margin:-4px!important;padding:2px 0!important}.row-gutters-large{margin:-12px!important;padding:6px 0!important}.row-gutters-none{margin:0!important}",""]),e.exports=n},464:function(e,t,l){"use strict";l(444)},465:function(e,t,l){var n=l(23)(!1);n.push([e.i,".copy-button-size{height:53px!important}",""]),e.exports=n},468:function(e,t,l){"use strict";l.r(t);var n=l(417),r=l(592),o=l(413),c=l(591),d=(l(36),l(35),l(157),l(5),{name:"SpellScaleDice",props:{startLevel:{type:Number,default:null},name:{type:String,default:"Level"},value:{type:Array,default:function(){return[]}}},emits:["input"],data:function(){return{scale:[],copyRoll:null,copyIndex:null,loading:!1}},watch:{startLevel:function(e,t){e!==t&&this.updateScale(e)},value:function(){}},mounted:function(){this.startLevel&&this.updateScale(this.startLevel)},methods:{copy:function(e,t){this.copyRoll=e,this.copyIndex=t},paste:function(e){this.$refs.diceRoll[e].save(this.copyRoll)},updateScale:function(e){var t=this;this.loading=!0,this.$nextTick((function(){for(var l=[],n=function(i){var e=t.scale.find((function(s){return s.level=i}));e?l.push(e):l.push({level:i,roll:[]})},i=e;i<=20;i++)n(i);t.$nextTick((function(){t.scale=l,t.loading=!1}))}))}}}),f=(l(464),l(87)),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return e.loading?e._e():t("g-row",{attrs:{cols:"1"}},[t("g-col",{attrs:{cols:"1"}},[t("label",[e._v("Spell "+e._s(e.name)+" Scaling")]),e._v(" "),t(c.a,[t(r.a,{attrs:{cols:"12"}})],1)],1),e._v(" "),t("g-col",{attrs:{cols:"1"}},e._l(e.scale,(function(i,l){return t("g-row",{key:l,attrs:{cols:"11"}},[t("g-col",{attrs:{cols:"9"}},[t("make-dice-roll",{ref:"diceRoll",refInFor:!0,attrs:{label:"Level: "+i.level+" Dice Roll"},model:{value:i.roll,callback:function(t){e.$set(i,"roll",t)},expression:"i.roll"}})],1),e._v(" "),t("g-col",{staticClass:"d-flex justify-center",attrs:{cols:"1"}},[t(n.a,{staticClass:"copy-button-size",attrs:{tile:"",color:l===e.copyIndex?"secondary":"info",disabled:0===i.roll.length},on:{click:function(t){return t.preventDefault(),e.copy(i.roll,l)}}},[e._v("\n          copy\n          "),t(o.a,{attrs:{right:""}},[e._v("mdi-content-copy")])],1)],1),e._v(" "),t("g-col",{staticClass:"d-flex justify-center",attrs:{cols:"1"}},[t(n.a,{staticClass:"copy-button-size",attrs:{tile:"",color:"success",disabled:null===e.copyRoll},on:{click:function(t){return t.preventDefault(),e.paste(l)}}},[e._v("\n          paste\n          "),t(o.a,{attrs:{right:""}},[e._v("mdi-content-paste")])],1)],1)],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{GCol:l(447).default,MakeDiceRoll:l(450).default,GRow:l(448).default})}}]);