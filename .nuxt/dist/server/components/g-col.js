exports.ids = [7];
exports.modules = {

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(203);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0f444ba3", content, true, context)
};

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GCol.vue?vue&type=template&id=233154cc&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "g-col",
    class: _vm.classes,
    style: _vm.colFlexWidth
  }, [_vm._t("default")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/GCol.vue?vue&type=template&id=233154cc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GCol.vue?vue&type=script&lang=js&
/* harmony default export */ var GColvue_type_script_lang_js_ = ({
  name: 'GCol',
  inject: ['gRow'],
  props: {
    cols: {
      type: [String, Number],
      default: 1,
      validator(cols) {
        cols = parseInt(cols);
        return !isNaN(cols) && cols > 0;
      }
    },
    gutter: {
      type: String,
      default: 'default',
      validator(gutter) {
        return ['none', 'default', 'large'].includes(gutter);
      }
    }
  },
  data() {
    return {
      internal: {
        cols: this.cols
      }
    };
  },
  computed: {
    colFlexWidth() {
      const cols = this.internal.cols;
      const {
        columns,
        gutter
      } = this.gRow;
      const x = Math.min(parseInt(cols), parseInt(columns));
      let g = 0;
      if (gutter === 'default') g = 8;
      if (gutter === 'large') g = 24;
      const y = parseInt(columns);
      const p = x / y * 100;
      return {
        flex: `0 0 calc(${p}% - ${g}px)`,
        maxWidth: `calc(${p}% - ${g}px)`,
        width: `calc(${p}% - ${g}px)`
      };
    },
    classes() {
      const g = this.gRow.gutter;
      const c = {
        'g-col-gutters-default': g === 'default',
        'g-col-gutters-none': g === 'none',
        'g-col-gutters-large': g === 'large'
      };
      return c;
    }
  }
});
// CONCATENATED MODULE: ./components/GCol.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GColvue_type_script_lang_js_ = (GColvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

// CONCATENATED MODULE: ./components/GCol.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(202)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GColvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e73ab5c6"
  
)

/* harmony default export */ var GCol = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GCol_vue_vue_type_style_index_0_id_233154cc_prod_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(190);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GCol_vue_vue_type_style_index_0_id_233154cc_prod_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GCol_vue_vue_type_style_index_0_id_233154cc_prod_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GCol_vue_vue_type_style_index_0_id_233154cc_prod_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GCol_vue_vue_type_style_index_0_id_233154cc_prod_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".row .g-col{width:100%}.row .g-col-gutters-default{margin:4px}.row .g-col-gutters-large{margin:12px}.row .g-col-gutters-none{margin:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=g-col.js.map