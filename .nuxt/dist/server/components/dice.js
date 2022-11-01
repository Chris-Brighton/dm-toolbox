exports.ids = [4];
exports.modules = {

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(249);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2cb66c27", content, true, context)
};

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dice_vue_vue_type_style_index_0_id_1fa6061c_prod_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(240);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dice_vue_vue_type_style_index_0_id_1fa6061c_prod_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dice_vue_vue_type_style_index_0_id_1fa6061c_prod_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dice_vue_vue_type_style_index_0_id_1fa6061c_prod_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dice_vue_vue_type_style_index_0_id_1fa6061c_prod_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".shrink-shape .v-icon{font-size:45px!important;top:50%;left:50%;transform:translateX(-50%) translateY(-50%)}.custom-dice-icon{height:56px!important;width:56px!important;position:relative}.custom-dice-icon .v-icon{font-size:56px;position:absolute}.custom-dice-icon .custom-dice-icon-text{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);font-weight:bolder;font-size:25px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(103);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Dice.vue?vue&type=template&id=1fa6061c&


var Dicevue_type_template_id_1fa6061c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "custom-dice-icon",
    class: {
      'shrink-shape': _vm.dice === 8 || _vm.dice === 10
    }
  }, [_c(VIcon["a" /* default */], {
    class: _vm.classes,
    attrs: {
      "color": _vm.color
    }
  }, [_vm._v(_vm._s(_vm.icon))]), _vm._ssrNode(" <span class=\"white--text custom-dice-icon-text\">" + _vm._ssrEscape(_vm._s(_vm.internal || '?')) + "</span>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Dice.vue?vue&type=template&id=1fa6061c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Dice.vue?vue&type=script&lang=js&
/* harmony default export */ var Dicevue_type_script_lang_js_ = ({
  props: {
    roll: {
      type: Number,
      default: null
    },
    dice: {
      type: Number,
      default: 20
    },
    animate: {
      type: Boolean,
      default: true
    },
    working: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:working'],
  data() {
    return {
      internal: null
    };
  },
  computed: {
    icon() {
      switch (this.dice) {
        case 4:
          return 'mdi-triangle';
        case 6:
          return 'mdi-square';
        case 8:
          return 'mdi-square';
        case 10:
          return 'mdi-square';
        case 12:
          return 'mdi-pentagon';
        case 20:
          return 'mdi-hexagon';
        default:
          return 'mdi-circle';
      }
    },
    color() {
      switch (this.dice) {
        case 4:
          return 'error';
        case 6:
          return 'success';
        case 8:
          return 'warning';
        case 10:
          return 'info';
        case 12:
          return 'secondary';
        case 20:
          return 'primary';
        default:
          return 'accent';
      }
    },
    classes() {
      return {
        'mdi-rotate-45': this.dice === 8 || this.dice === 10
      };
    }
  },
  watch: {
    async roll(newRoll) {
      if (newRoll !== this.internal) {
        if (this.animate) await this.rollDice(newRoll);else this.internal = newRoll;
      }
    }
  },
  methods: {
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    setDice(roll = null) {
      return new Promise(resolve => {
        setTimeout(() => {
          this.internal = roll || this.getRndInteger(1, this.dice);
          resolve();
        }, this.getRndInteger(50, 250));
      });
    },
    async rollDice(roll) {
      this.$emit('update:working', true);
      const changes = this.getRndInteger(5, 20);
      for (let i = 0; i < changes; i++) {
        await this.setDice();
      }
      await this.setDice(roll);
      this.$nextTick(() => {
        this.$emit('update:working', false);
      });
    }
  }
});
// CONCATENATED MODULE: ./components/Dice.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Dicevue_type_script_lang_js_ = (Dicevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

// CONCATENATED MODULE: ./components/Dice.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(248)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Dicevue_type_script_lang_js_,
  Dicevue_type_template_id_1fa6061c_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1a0f1e2b"
  
)

/* harmony default export */ var Dice = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=dice.js.map