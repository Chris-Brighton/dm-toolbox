(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{478:function(e,t,n){var content=n(505);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("2cb66c27",content,!0,{sourceMap:!1})},504:function(e,t,n){"use strict";n(478)},505:function(e,t,n){var r=n(23)(!1);r.push([e.i,".shrink-shape .v-icon{font-size:45px!important;top:50%;left:50%;transform:translateX(-50%) translateY(-50%)}.custom-dice-icon{height:56px!important;width:56px!important;position:relative}.custom-dice-icon .v-icon{font-size:56px;position:absolute}.custom-dice-icon .custom-dice-icon-text{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);font-weight:bolder;font-size:25px}",""]),e.exports=r},521:function(e,t,n){"use strict";n.r(t);var r=n(413),c=n(20),o=(n(88),n(35),n(5),n(62),{props:{roll:{type:Number,default:null},dice:{type:Number,default:20},animate:{type:Boolean,default:!0},working:{type:Boolean,default:!1}},emits:["update:working"],data:function(){return{internal:null}},computed:{icon:function(){switch(this.dice){case 4:return"mdi-triangle";case 6:case 8:case 10:return"mdi-square";case 12:return"mdi-pentagon";case 20:return"mdi-hexagon";default:return"mdi-circle"}},color:function(){switch(this.dice){case 4:return"error";case 6:return"success";case 8:return"warning";case 10:return"info";case 12:return"secondary";case 20:return"primary";default:return"accent"}},classes:function(){return{"mdi-rotate-45":8===this.dice||10===this.dice}}},watch:{roll:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e===t.internal){n.next=7;break}if(!t.animate){n.next=6;break}return n.next=4,t.rollDice(e);case 4:n.next=7;break;case 6:t.internal=e;case 7:case"end":return n.stop()}}),n)})))()}},methods:{getRndInteger:function(e,t){return Math.floor(Math.random()*(t-e))+e},setDice:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise((function(n){setTimeout((function(){e.internal=t||e.getRndInteger(1,e.dice),n()}),e.getRndInteger(50,250))}))},rollDice:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.$emit("update:working",!0),r=t.getRndInteger(5,20),i=0;case 3:if(!(i<r)){n.next=9;break}return n.next=6,t.setDice();case 6:i++,n.next=3;break;case 9:return n.next=11,t.setDice(e);case 11:t.$nextTick((function(){t.$emit("update:working",!1)}));case 12:case"end":return n.stop()}}),n)})))()}}}),l=o,d=(n(504),n(87)),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"custom-dice-icon",class:{"shrink-shape":8===e.dice||10===e.dice}},[t(r.a,{class:e.classes,attrs:{color:e.color}},[e._v(e._s(e.icon))]),e._v(" "),t("span",{staticClass:"white--text custom-dice-icon-text"},[e._v(e._s(e.internal||"?"))])],1)}),[],!1,null,null,null);t.default=component.exports}}]);