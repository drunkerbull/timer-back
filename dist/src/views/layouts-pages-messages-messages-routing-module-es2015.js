(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-pages-messages-messages-routing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/pages/messages/messages.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/pages/messages/messages.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>messages works!</p>\r\n"

/***/ }),

/***/ "./src/app/layouts/pages/messages/messages-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layouts/pages/messages/messages-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: MessagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesRoutingModule", function() { return MessagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _messages_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages.module */ "./src/app/layouts/pages/messages/messages.module.ts");
/* harmony import */ var _messages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages.component */ "./src/app/layouts/pages/messages/messages.component.ts");





const routes = [
    {
        path: '', component: _messages_component__WEBPACK_IMPORTED_MODULE_4__["MessagesComponent"]
    },
];
let MessagesRoutingModule = class MessagesRoutingModule {
};
MessagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _messages_module__WEBPACK_IMPORTED_MODULE_3__["MessagesModule"]],
    })
], MessagesRoutingModule);



/***/ }),

/***/ "./src/app/layouts/pages/messages/messages.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layouts/pages/messages/messages.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvcGFnZXMvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layouts/pages/messages/messages.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/pages/messages/messages.component.ts ***!
  \**************************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MessagesComponent = class MessagesComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: __webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/pages/messages/messages.component.html"),
        styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/app/layouts/pages/messages/messages.component.scss")]
    })
], MessagesComponent);



/***/ }),

/***/ "./src/app/layouts/pages/messages/messages.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/layouts/pages/messages/messages.module.ts ***!
  \***********************************************************/
/*! exports provided: MessagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesModule", function() { return MessagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _messages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages.component */ "./src/app/layouts/pages/messages/messages.component.ts");




let MessagesModule = class MessagesModule {
};
MessagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _messages_component__WEBPACK_IMPORTED_MODULE_3__["MessagesComponent"]
        ],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
        ]
    })
], MessagesModule);



/***/ })

}]);
//# sourceMappingURL=layouts-pages-messages-messages-routing-module-es2015.js.map