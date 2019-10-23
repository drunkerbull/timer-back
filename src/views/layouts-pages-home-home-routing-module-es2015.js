(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-pages-home-home-routing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/pages/home/components/login/login.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/pages/home/components/login/login.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\r\n  <h2>login</h2>\r\n  <input type=\"text\" placeholder=\"email\" formControlName=\"email\">\r\n  <input type=\"password\" placeholder=\"pass\" formControlName=\"pass\">\r\n  <button (click)=\"login()\">Login</button>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/pages/home/components/register/register.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/pages/home/components/register/register.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>register</h2>\r\n<form [formGroup]=\"form\">\r\n  <input type=\"text\" placeholder=\"email\" formControlName=\"email\">\r\n  <input type=\"text\" placeholder=\"nickname\" formControlName=\"nickname\">\r\n  <input type=\"password\" placeholder=\"pass\" formControlName=\"pass\">\r\n  <button (click)=\"register()\">Register</button>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/pages/home/home.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/pages/home/home.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Home page</h1>\r\n<app-login></app-login>\r\n<app-register></app-register>\r\n"

/***/ }),

/***/ "./src/app/layouts/pages/home/components/login/login.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/layouts/pages/home/components/login/login.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  border: 1px solid black;\n  padding: 16px;\n  margin: 20px 0;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9wYWdlcy9ob21lL2NvbXBvbmVudHMvbG9naW4vQzpcXFVzZXJzXFxtdmdhbVxcUGhwU3Rvcm1cXHRpbWVyLWZyb250L3NyY1xcYXBwXFxsYXlvdXRzXFxwYWdlc1xcaG9tZVxcY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXRzL3BhZ2VzL2hvbWUvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL3BhZ2VzL2hvbWUvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbjogMjBweCAwO1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layouts/pages/home/components/login/login.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/layouts/pages/home/components/login/login.component.ts ***!
  \************************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../home.service */ "./src/app/layouts/pages/home/home.service.ts");






let LoginComponent = class LoginComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"] {
    constructor(homeService) {
        super();
        this.homeService = homeService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    ngOnInit() {
    }
    login() {
        const pack = this.form.value;
        const subLogin = this.homeService.login(pack).subscribe((res) => {
            this.storageService.put(_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].USER_TOKEN, res.token);
            this.router.navigate(['/projects']);
        }, (err) => this.errorHandlingService.showError(err));
        this.someSubscriptions.add(subLogin);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/pages/home/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/layouts/pages/home/components/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/layouts/pages/home/components/register/register.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/layouts/pages/home/components/register/register.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  border: 1px solid black;\n  padding: 16px;\n  margin: 20px 0;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9wYWdlcy9ob21lL2NvbXBvbmVudHMvcmVnaXN0ZXIvQzpcXFVzZXJzXFxtdmdhbVxcUGhwU3Rvcm1cXHRpbWVyLWZyb250L3NyY1xcYXBwXFxsYXlvdXRzXFxwYWdlc1xcaG9tZVxcY29tcG9uZW50c1xccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXRzL3BhZ2VzL2hvbWUvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL3BhZ2VzL2hvbWUvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxufVxyXG4iLCI6aG9zdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW46IDIwcHggMDtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/layouts/pages/home/components/register/register.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layouts/pages/home/components/register/register.component.ts ***!
  \******************************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home.service */ "./src/app/layouts/pages/home/home.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");






let RegisterComponent = class RegisterComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"] {
    constructor(homeService) {
        super();
        this.homeService = homeService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            nickname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    ngOnInit() {
    }
    register() {
        const pack = this.form.value;
        const subRegister = this.homeService.register(pack).subscribe((res) => {
            const { nickname } = pack, otherAuthPack = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](pack, ["nickname"]);
            this.homeService.login(otherAuthPack).subscribe((res) => {
                this.storageService.put(_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"].USER_TOKEN, res.token);
                this.router.navigate(['/projects']);
            });
        }, (err) => this.errorHandlingService.showError(err));
        this.someSubscriptions.add(subRegister);
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/pages/home/components/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/layouts/pages/home/components/register/register.component.scss")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/layouts/pages/home/home-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/layouts/pages/home/home-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/layouts/pages/home/home.component.ts");
/* harmony import */ var _home_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module */ "./src/app/layouts/pages/home/home.module.ts");





const routes = [
    {
        path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _home_module__WEBPACK_IMPORTED_MODULE_4__["HomeModule"]],
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/layouts/pages/home/home.component.scss":
/*!********************************************************!*\
  !*** ./src/app/layouts/pages/home/home.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layouts/pages/home/home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/layouts/pages/home/home.component.ts ***!
  \******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/pages/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/layouts/pages/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/layouts/pages/home/home.module.ts":
/*!***************************************************!*\
  !*** ./src/app/layouts/pages/home/home.module.ts ***!
  \***************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/layouts/pages/home/home.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/layouts/pages/home/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/layouts/pages/home/components/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/layouts/pages/home/home.service.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/pages/home/home.service.ts ***!
  \****************************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_base_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/base-http.service */ "./src/app/shared/services/base-http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let HomeService = class HomeService {
    constructor(baseHttp) {
        this.baseHttp = baseHttp;
    }
    register(pack) {
        return this.baseHttp.post('/register', pack)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => resp));
    }
    login(pack) {
        return this.baseHttp.post('/login', pack)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => resp));
    }
};
HomeService.ctorParameters = () => [
    { type: _shared_services_base_http_service__WEBPACK_IMPORTED_MODULE_2__["BaseHttpService"] }
];
HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HomeService);



/***/ })

}]);
//# sourceMappingURL=layouts-pages-home-home-routing-module-es2015.js.map