(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-pages-statistics-statistics-routing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/pages/statistics/statistics.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/pages/statistics/statistics.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>statistics works!</p>\r\n"

/***/ }),

/***/ "./src/app/layouts/pages/statistics/settings.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/pages/statistics/settings.module.ts ***!
  \*************************************************************/
/*! exports provided: StatisticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsModule", function() { return StatisticsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _statistics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statistics.component */ "./src/app/layouts/pages/statistics/statistics.component.ts");




let StatisticsModule = class StatisticsModule {
};
StatisticsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _statistics_component__WEBPACK_IMPORTED_MODULE_3__["StatisticsComponent"]
        ],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]
    })
], StatisticsModule);



/***/ }),

/***/ "./src/app/layouts/pages/statistics/statistics-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layouts/pages/statistics/statistics-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: StatisticsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsRoutingModule", function() { return StatisticsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _settings_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.module */ "./src/app/layouts/pages/statistics/settings.module.ts");
/* harmony import */ var _statistics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./statistics.component */ "./src/app/layouts/pages/statistics/statistics.component.ts");





const routes = [
    {
        path: '', component: _statistics_component__WEBPACK_IMPORTED_MODULE_4__["StatisticsComponent"]
    },
];
let StatisticsRoutingModule = class StatisticsRoutingModule {
};
StatisticsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _settings_module__WEBPACK_IMPORTED_MODULE_3__["StatisticsModule"]],
    })
], StatisticsRoutingModule);



/***/ }),

/***/ "./src/app/layouts/pages/statistics/statistics.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/layouts/pages/statistics/statistics.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvcGFnZXMvc3RhdGlzdGljcy9zdGF0aXN0aWNzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layouts/pages/statistics/statistics.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/layouts/pages/statistics/statistics.component.ts ***!
  \******************************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StatisticsComponent = class StatisticsComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
StatisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-statistics',
        template: __webpack_require__(/*! raw-loader!./statistics.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/pages/statistics/statistics.component.html"),
        styles: [__webpack_require__(/*! ./statistics.component.scss */ "./src/app/layouts/pages/statistics/statistics.component.scss")]
    })
], StatisticsComponent);



/***/ })

}]);
//# sourceMappingURL=layouts-pages-statistics-statistics-routing-module-es2015.js.map