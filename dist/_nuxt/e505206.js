(window.webpackJsonp=window.webpackJsonp||[]).push([[25,7],{469:function(t,e,r){var content=r(486);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("825fc7e0",content,!0,{sourceMap:!1})},485:function(t,e,r){"use strict";r(469)},486:function(t,e,r){var n=r(21)(!1);n.push([t.i,".data-table-custom p{margin:0}.v-data-table-header__icon{color:var(--v-primary) !important;margin-left:2px}.table-delete-item{width:36px !important;min-width:36px !important}.custom-th:hover{color:var(--v-primary) !important}",""]),t.exports=n},492:function(t,e,r){"use strict";r.r(e);var n=r(426),l=r(521),o=r(441),c=r(603),d=r(531),f=r(471),h=r(422),v=(r(283),r(44),r(58),r(19)),m=(r(89),r(29),r(158),r(5),{name:"DataTable",props:{headers:{type:Array,required:!0},service:{type:String,required:!0},update:{type:String,required:!0},showDelete:{type:Boolean,default:!0}},data:function(){return{rows:[],total:0,loading:!1,offset:0,limit:20,showDeleteModal:!1,header:this.showDelete?this.headers.concat([{value:"delete",sortable:!1}]):this.headers}},watch:{headers:function(t,e){JSON.stringify(t)!==JSON.stringify(e)&&(this.showDelete&&t.push({value:"delete",sortable:!1}),this.header=t)}},mounted:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetch();case 2:case"end":return e.stop()}}),e)})))()},methods:{cellStyle:function(t,e){var style={};return t&&"string"==typeof t&&(style.minWidth=t),t&&"number"==typeof t&&(style.minWidth="".concat(t,"px")),e&&"string"==typeof e&&(style.maxWidth=e),e&&"number"==typeof e&&(style.maxWidth="".concat(e,"px")),style},sortIcon:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t===e?"mdi-arrow-".concat(r?"up":"down","-bold"):"mdi-format-vertical-align-center"},goto:function(t){this.$router.push(this.update+"/"+t)},fetch:function(t){var e=this;return Object(v.a)(regeneratorRuntime.mark((function r(){var n,l,o,c,d,f,h,i,v,m,x,y,_;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=e.limit,o=[],c=[],t&&(n=t.itemsPerPage,l=t.page,o=t.sortBy,c=t.sortDesc),e.loading=!0,d=e.offset,l&&(d=(l-1)*n),f={$limit:n,$offset:d},o.length>0){for(h={},i=0;i<o.length;i++)v=o[i],m=c[i]?1:-1,h[v]=m;f.$sort=h}return e.offset=d,e.limit=n,r.next=13,e.$service(e.service).find(f);case 13:x=r.sent,y=x.rows,_=x.total,e.$nextTick((function(){y&&_?(e.rows=y,e.total=_):(e.rows=[],e.total=0),e.$nextTick((function(){e.loading=!1}))}));case 17:case"end":return r.stop()}}),r)})))()},remove:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$service(t.service).remove(t.selected);case 3:t.$nextTick(Object(v.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$toast.success("Item Deleted"),e.next=3,t.fetch();case 3:t.showDeleteModal=!1;case 4:case"end":return e.stop()}}),e)}))));case 4:case"end":return e.stop()}}),e)})))()},showDeleteDialog:function(t){var e=this,r=t.id;this.selected=r,this.$nextTick((function(){e.showDeleteModal=!0}))}}}),x=m,y=(r(485),r(88)),component=Object(y.a)(x,(function(){var t=this,e=t._self._c;return e("div",[e(c.a,{staticClass:"data-table-custom",attrs:{dense:"",headers:t.header,items:t.rows,"items-per-page":10,"server-items-length":t.total,"footer-props":{itemsPerPageOptions:[10,20,50,100,-1]},"loading-text":"Loading... Please wait",loading:t.loading,"hide-default-header":"","calculate-widths":""},on:{"update:options":t.fetch},scopedSlots:t._u([{key:"header",fn:function(r){var n=r.props,l=n.headers,o=n.options,c=o.sortBy,d=o.sortDesc,f=r.on;return[e("thead",{staticClass:"v-data-table-header"},[e("tr",t._l(l,(function(r,n){var l=r.value,text=r.text,o=r.sortable,v=r.align,m=r.width,x=r.maxWidth;return e("th",{key:l+n,staticClass:"custom-th",class:{sortable:!1!==o,"text-left":"left"!==v||"right"!==v,"text-center":"center"===v,"text-right":"right"===v},style:t.cellStyle(m,x),on:{click:function(t){return t.preventDefault(),f.sort(l)}}},[e("div",{staticClass:"d-flex"},[text?e("span",{attrs:{"sort-by":c,"sort-desc":d}},[t._v("\n                "+t._s(text)+"\n              ")]):t._e(),t._v(" "),!1!==o?[e(h.a,{staticClass:"ml-1",attrs:{small:"",color:t.sortIcon(l,c[0],d[0]).includes("mdi-arrow-")?"secondary":"grey"}},[t._v("\n                  "+t._s(t.sortIcon(l,c[0],d[0]))+"\n                ")])]:t._e()],2)])})),0)])]}},{key:"item",fn:function(r){var l=r.item,head=r.headers,o=r.index;return[e("tr",{staticClass:"custom-row"},[t._l(head,(function(r,c){return["delete"!==r.value?e("td",{key:o+"-"+c,staticClass:"py-1 custom-cell",class:{"text-left":"center"!==r.align||"right"!==r.align,"text-center":"center"===r.align,"text-right":"right"===r.align},staticStyle:{cursor:"pointer"},style:t.cellStyle(r.width,r.maxWidth),on:{click:function(e){return e.preventDefault(),t.goto(l.id)}}},[t._t("col-"+r.value,(function(){return[t._v("\n              "+t._s(l[r.value])+"\n            ")]}),null,{item:l,value:l[r.value],index:o})],2):t._e(),t._v(" "),"delete"===r.value?e("td",{key:o+"-"+c},[e(n.a,{staticClass:"py-1 custom-cell table-delete-item",attrs:{tile:"",color:"error"},on:{click:function(e){return e.preventDefault(),t.showDeleteDialog(l)}}},[e(h.a,[t._v("mdi-delete")])],1)],1):t._e()]}))],2)]}}],null,!0)}),t._v(" "),e(d.a,{attrs:{width:"512"},model:{value:t.showDeleteModal,callback:function(e){t.showDeleteModal=e},expression:"showDeleteModal"}},[e(l.a,{attrs:{tile:""}},[e(o.d,{staticClass:"error--text h2 my-0 py-1"},[t._v("\n        Delete Item\n      ")]),t._v(" "),e(f.a),t._v(" "),e(o.c,{staticClass:"text-center pt-3"},[e("strong",[t._v(" Are you sure you want to delete this item? ")])]),t._v(" "),e(o.a,{staticClass:"pa-0 d-flex flex-row"},[e(n.a,{staticClass:"ma-0 py-4",staticStyle:{width:"50%"},attrs:{tile:"",color:"success"},on:{click:function(e){e.preventDefault(),t.showDeleteModal=!1}}},[t._v("\n          cancel\n        ")]),t._v(" "),e(n.a,{staticClass:"ma-0 py-4",staticStyle:{width:"50%"},attrs:{tile:"",color:"error"},on:{click:function(e){return e.preventDefault(),t.remove.apply(null,arguments)}}},[t._v("\n          delete\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},493:function(t,e,r){"use strict";r.r(e);var n=r(426),l=r(521),o=r(441),c=r(471),d=r(422),f=r(435),h={props:{title:{type:String,default:null},subText:{type:String,default:null},createLink:{type:String,default:null},editLink:{type:String,default:null},deleteLink:{type:String,default:null}}},v=r(88),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;return e(l.a,{staticClass:"my-3 mx-6",attrs:{tile:"",elevation:"2"}},[e(o.d,[e("span",{staticClass:"primary--text"},[t._v(" "+t._s(t.title)+" ")]),t._v(" "),e(f.a),t._v(" "),t.createLink?e(n.a,{attrs:{to:t.createLink,tile:"",color:"primary"}},[t._v("\n      Create\n      "),e(d.a,{staticClass:"ml-1"},[t._v("mdi-plus-thick")])],1):t._e()],1),t._v(" "),t.subText?e(o.b,[t._v("\n    "+t._s(t.subText)+"\n  ")]):t._e(),t._v(" "),e(c.a),t._v(" "),e(o.c,[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=component.exports},607:function(t,e,r){"use strict";r.r(e);var n={name:"MonsterListPage",data:function(){return{headers:[{text:"Name",value:"name"},{text:"CR",value:"cr"},{text:"Type ",value:"type"},{text:"Description",value:"description",sortable:!1,maxWidth:500}]}}},l=r(88),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("data-table-screen",{attrs:{title:"Monsters","create-link":"/monster/create"}},[e("data-table",{attrs:{headers:t.headers,service:"monster",update:"/monster"},scopedSlots:t._u([{key:"col-description",fn:function(r){var n=r.value;return[e("div",{domProps:{innerHTML:t._s(n)}})]}}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DataTable:r(492).default,DataTableScreen:r(493).default})}}]);