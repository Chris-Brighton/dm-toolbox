(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{476:function(t,e,n){"use strict";n.r(e);var r=n(521),l=n(441),o=n(471),c=n(435),h={props:{title:{type:String,default:null},subText:{type:String,default:null}}},d=n(88),component=Object(d.a)(h,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"my-3 mx-6",attrs:{tile:"",elevation:"2"}},[t.title||t.$slots.actions?e(l.d,[t.title?e("span",{staticClass:"primary--text"},[t._v(" "+t._s(t.title)+" ")]):t._e(),t._v(" "),t.$slots.actions?[e(c.a),t._v(" "),t._t("cardTitleRight")]:t._e()],2):t._e(),t._v(" "),t.subText?e(l.b,[t._v("\n    "+t._s(t.subText)+"\n  ")]):t._e(),t._v(" "),e(o.a),t._v(" "),e(l.c,[t._t("default",(function(){return[t._v(" Screen Content ")]}))],2),t._v(" "),t.$slots.actions?e(l.a,[t._t("actions")],2):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},511:function(t,e,n){var content=n(512);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("50788f08",content,!0,{sourceMap:!1})},512:function(t,e,n){var r=n(21)(!1);r.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content{border-radius:0}.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=r},581:function(t,e,n){"use strict";n(13),n(17),n(23),n(12),n(24);var r=n(2),l=(n(63),n(5),n(18),n(70),n(158),n(282),n(44),n(58),n(511),n(490)),o=n(494),c=n(125),h=n(1);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=f(f({},l.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=l.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:l.a.options.props.menuProps.type,default:function(){return m}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return f(f({},l.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(h.q)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=l.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),f(f({},m),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=l.a.options.computed.listData.call(this);return data.props=f(f({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var r=e[this.$refs.menu.listIndex];r?this.setMenuIndex(t.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===h.w.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===h.w.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==h.w.backspace&&t!==h.w.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[r]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,l.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=o.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(h.o)(this.$refs.menu,"activeTile.id"),autocomplete:Object(h.o)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=l.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?l.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[h.w.home,h.w.end].includes(e)||l.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){l.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){l.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){l.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],l=this.getText(r);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",l),null===(n=t.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",l),t.preventDefault()}}}})},610:function(t,e,n){"use strict";n.r(e);var r=n(581),l=n(426),o=n(19),c=(n(89),{name:"CreateMonsterPage",inject:["appLoading"],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.get("https://www.dnd5eapi.co/api/monsters");case 3:return r=e.sent,data=r.data,e.abrupt("return",{monsters:data.results});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{selectedMonster:null,imported:null}},methods:{fetchMonster:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.appLoading(!0),e.next=3,t.$axios.get("https://www.dnd5eapi.co/api/monsters/"+t.selectedMonster);case 3:n=e.sent,data=n.data,t.imported=data,t.$nextTick((function(){t.appLoading(!1)}));case 7:case"end":return e.stop()}}),e)})))()}}}),h=n(88),component=Object(h.a)(c,(function(){var t=this,e=t._self._c;return e("details-screen",{attrs:{title:"Create Monster","sub-text":"Yon can enter all the information from scratch or select a monster and attempt to import the data"},scopedSlots:t._u([{key:"actions",fn:function(){return[e(l.a,{attrs:{tile:"",block:"",color:"success","x-large":""},on:{click:function(e){return e.preventDefault(),t.create.apply(null,arguments)}}},[t._v("\n      create\n    ")])]},proxy:!0}])},[e("div",{staticClass:"d-flex mb-6"},[e(r.a,{staticClass:"rounded-0",attrs:{items:t.monsters,"item-text":"name","item-value":"index",label:"Select Monster To Import",filled:"",dense:"","hide-details":"",clearable:""},model:{value:t.selectedMonster,callback:function(e){t.selectedMonster=e},expression:"selectedMonster"}}),t._v(" "),e(l.a,{staticStyle:{height:"53px"},attrs:{small:"","x-large":"",tile:"",disabled:!t.selectedMonster,color:"primary"},on:{click:function(e){return e.preventDefault(),t.fetchMonster.apply(null,arguments)}}},[t._v("\n      Import\n    ")])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DetailsScreen:n(476).default})}}]);