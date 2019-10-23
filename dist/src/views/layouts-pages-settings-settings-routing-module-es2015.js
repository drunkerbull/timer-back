(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-pages-settings-settings-routing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/pages/settings/settings.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/pages/settings/settings.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>settings works!</p>\r\n"

/***/ }),

/***/ "./src/app/layouts/pages/settings/settings-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layouts/pages/settings/settings-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.component */ "./src/app/layouts/pages/settings/settings.component.ts");
/* harmony import */ var _settings_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.module */ "./src/app/layouts/pages/settings/settings.module.ts");





const routes = [
    {
        path: '', component: _settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"]
    },
];
let SettingsRoutingModule = class SettingsRoutingModule {
};
SettingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _settings_module__WEBPACK_IMPORTED_MODULE_4__["SettingsModule"]],
    })
], SettingsRoutingModule);



/***/ }),

/***/ "./src/app/layouts/pages/settings/settings.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layouts/pages/settings/settings.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layouts/pages/settings/settings.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/pages/settings/settings.component.ts ***!
  \**************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsComponent = class SettingsComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/pages/settings/settings.component.html"),
        styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/layouts/pages/settings/settings.component.scss")]
    })
], SettingsComponent);



/***/ }),

/***/ "./src/app/layouts/pages/settings/settings.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/layouts/pages/settings/settings.module.ts ***!
  \***********************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.component */ "./src/app/layouts/pages/settings/settings.component.ts");




let SettingsModule = class SettingsModule {
};
SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"]
        ],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]
    })
], SettingsModule);



/***/ })

}]);
//# sourceMappingURL=layouts-pages-settings-settings-routing-module-es2015.js.map