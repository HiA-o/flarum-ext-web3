/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/index.tsx":
/*!*****************************!*\
  !*** ./src/admin/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_1__);


flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('maojindao55/web3', function () {
  // TODO: show if ffi extension is installed and is `ffi.enable` ini is true.

  flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().extensionData["for"]('maojindao55-web3').registerSetting(function () {
    if (!(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().data)['ffiEnabled']) {
      return m("div", {
        className: "Form-group"
      }, m((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_1___default()), {
        type: "warning",
        dismissible: false
      }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('maojindao55-web3.admin.settings.ffi-disabled')));
    }
    return;
  }).registerSetting({
    setting: 'maojindao55-web3.prioritize-web3-auth-modals',
    type: 'switch',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('maojindao55-web3.admin.settings.prioritize-web3-auth-modals')
  }).registerSetting({
    setting: 'maojindao55-web3.allow-sign-up',
    type: 'switch',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('maojindao55-web3.admin.settings.allow-sign-up')
  }).registerSetting({
    setting: 'maojindao55-web3.signup-with-email',
    type: 'switch',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('maojindao55-web3.admin.settings.signup-with-email')
  }).registerSetting({
    setting: 'maojindao55-web3.no-email-signup-message',
    type: 'text',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('maojindao55-web3.admin.settings.no-email-signup-message'),
    help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('maojindao55-web3.admin.settings.no-email-signup-message-help')
  }).registerSetting({
    setting: 'maojindao55-web3.infura-project-id',
    type: 'text',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('maojindao55-web3.admin.settings.infura-project-id'),
    help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('maojindao55-web3.admin.settings.infura-project-id-help')
  });
});

/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/common/components/Alert":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Alert']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Alert'];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./admin.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.tsx");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map