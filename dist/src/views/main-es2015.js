(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-page>\r\n  <router-outlet></router-outlet>\r\n</app-page>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/components/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/components/header/header.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <div class=\"container\">\r\n    <div class=\"header-box\">\r\n      <div class=\"logo\">\r\n        <h2><a [routerLink]=\"['/']\">LOGO</a></h2>\r\n      </div>\r\n      <div *ngIf=\"storageService.userLogged\">\r\n        <div>\r\n          <a [routerLink]=\"['/projects']\">Projects</a>\r\n          <a [routerLink]=\"['/messages']\">Messages</a>\r\n          <a [routerLink]=\"['/statistics']\">Statistics</a>\r\n        </div>\r\n        <button (click)=\"storageService.logout()\">Logout</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/components/page/page.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/components/page/page.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <ng-content></ng-content>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/auth.guard */ "./src/app/shared/services/auth.guard.ts");




const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | layouts-pages-home-home-routing-module */ "layouts-pages-home-home-routing-module").then(__webpack_require__.bind(null, /*! ./layouts/pages/home/home-routing.module */ "./src/app/layouts/pages/home/home-routing.module.ts")).then(mod => mod.HomeRoutingModule)
    },
    {
        path: 'messages',
        canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | layouts-pages-messages-messages-routing-module */ "layouts-pages-messages-messages-routing-module").then(__webpack_require__.bind(null, /*! ./layouts/pages/messages/messages-routing.module */ "./src/app/layouts/pages/messages/messages-routing.module.ts")).then(mod => mod.MessagesRoutingModule)
    },
    {
        path: 'projects',
        canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | layouts-pages-projects-projects-routing-module */ "layouts-pages-projects-projects-routing-module").then(__webpack_require__.bind(null, /*! ./layouts/pages/projects/projects-routing.module */ "./src/app/layouts/pages/projects/projects-routing.module.ts")).then(mod => mod.ProjectsRoutingModule)
    },
    {
        path: 'statistics',
        canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | layouts-pages-statistics-statistics-routing-module */ "layouts-pages-statistics-statistics-routing-module").then(__webpack_require__.bind(null, /*! ./layouts/pages/statistics/statistics-routing.module */ "./src/app/layouts/pages/statistics/statistics-routing.module.ts")).then(mod => mod.StatisticsRoutingModule)
    },
    {
        path: 'settings',
        canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | layouts-pages-settings-settings-routing-module */ "layouts-pages-settings-settings-routing-module").then(__webpack_require__.bind(null, /*! ./layouts/pages/settings/settings-routing.module */ "./src/app/layouts/pages/settings/settings-routing.module.ts")).then(mod => mod.SettingsRoutingModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'timer-front';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_services_app_injector_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/app-injector.service */ "./src/app/shared/services/app-injector.service.ts");







let AppModule = class AppModule {
    constructor(injector) {
        _shared_services_app_injector_service__WEBPACK_IMPORTED_MODULE_6__["AppInjector"].setInjector(injector);
    }
};
AppModule.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }
];
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/layouts/components/header/header.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/layouts/components/header/header.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 60px;\n  display: block;\n  background: grey;\n}\n\n.header-box {\n  display: flex;\n  align-items: center;\n}\n\n.header-box .logo {\n  margin-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL2hlYWRlci9DOlxcVXNlcnNcXG12Z2FtXFxQaHBTdG9ybVxcdGltZXItZnJvbnQvc3JjXFxhcHBcXGxheW91dHNcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXRzL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDRTtFQUNFLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IGdyZXk7XHJcbn1cclxuXHJcbi5oZWFkZXItYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5sb2dvIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IGdyZXk7XG59XG5cbi5oZWFkZXItYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXItYm94IC5sb2dvIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/layouts/components/header/header.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layouts/components/header/header.component.ts ***!
  \***************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");



let HeaderComponent = class HeaderComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor() {
        super();
    }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layouts/components/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/layouts/components/page/page.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/layouts/components/page/page.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  margin-top: 60px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL3BhZ2UvQzpcXFVzZXJzXFxtdmdhbVxcUGhwU3Rvcm1cXHRpbWVyLWZyb250L3NyY1xcYXBwXFxsYXlvdXRzXFxjb21wb25lbnRzXFxwYWdlXFxwYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXRzL2NvbXBvbmVudHMvcGFnZS9wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL2NvbXBvbmVudHMvcGFnZS9wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiIsIjpob3N0IHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/layouts/components/page/page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layouts/components/page/page.component.ts ***!
  \***********************************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageComponent = class PageComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page',
        template: __webpack_require__(/*! raw-loader!./page.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/components/page/page.component.html"),
        styles: [__webpack_require__(/*! ./page.component.scss */ "./src/app/layouts/components/page/page.component.scss")]
    })
], PageComponent);



/***/ }),

/***/ "./src/app/shared/components/base.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/components/base.component.ts ***!
  \*****************************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_base_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/base-http.service */ "./src/app/shared/services/base-http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _services_app_injector_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/app-injector.service */ "./src/app/shared/services/app-injector.service.ts");
/* harmony import */ var _services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/error-handling.service */ "./src/app/shared/services/error-handling.service.ts");






class BaseComponent {
    constructor() {
        this.someSubscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        const injector = _services_app_injector_service__WEBPACK_IMPORTED_MODULE_4__["AppInjector"].getInjector();
        this.router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]);
        this.storageService = injector.get(_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]);
        this.baseHttp = injector.get(_services_base_http_service__WEBPACK_IMPORTED_MODULE_1__["BaseHttpService"]);
        this.route = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]);
        this.errorHandlingService = injector.get(_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"]);
    }
    ngOnDestroy() {
        this.someSubscriptions.unsubscribe();
    }
}


/***/ }),

/***/ "./src/app/shared/services/APIInterceptor.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/APIInterceptor.service.ts ***!
  \***********************************************************/
/*! exports provided: APIInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIInterceptor", function() { return APIInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");








let APIInterceptor = class APIInterceptor {
    constructor(storageService, router, route, http) {
        this.storageService = storageService;
        this.router = router;
        this.route = route;
        this.http = http;
        this.refreshInProgress = false;
        this.tokenTurnSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.loadingEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    intercept(req, next) {
        let formatUrl = { url: req.url };
        if (this.storageService.get(_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].USER_TOKEN)) {
            formatUrl = Object.assign(formatUrl, { setHeaders: { Authorization: 'Bearer ' + this.storageService.get(_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].USER_TOKEN) } });
        }
        req = req.clone(formatUrl);
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => {
            switch (err.error.message) {
                case 'unauthorized': {
                    console.log('unauthorized!!!!!!!!!!!!!!!!!!!!!!!!!');
                    break;
                }
                case 'expired_jwt_token': {
                    this.storageService.delete(_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].USER_TOKEN);
                    return !this.refreshInProgress ? this.refreshToken(req, next) : this.tokenTurnContinue(req, next);
                }
                default: {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
                }
            }
        }));
    }
    refreshToken(req, next) {
        this.tokenTurnSubject.next(null);
        this.refreshInProgress = true;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].host + '/token/refresh', {
            refresh_token: this.storageService.get(_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].USER_REFRESH_TOKEN)
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((data) => {
            this.storageService.setToken(data);
            this.refreshInProgress = false;
            this.tokenTurnSubject.next(data.token);
            req = req.clone({ setHeaders: { Authorization: 'Bearer ' + this.storageService.get(_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].USER_TOKEN) } });
            return next.handle(req);
        }));
    }
    tokenTurnContinue(req, next) {
        return this.tokenTurnSubject // wait on stream event
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(token => token != null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
            req = req.clone({ setHeaders: { Authorization: 'Bearer ' + this.storageService.get(_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].USER_TOKEN) } });
            return next.handle(req);
        }));
    }
};
APIInterceptor.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
APIInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], APIInterceptor);



/***/ }),

/***/ "./src/app/shared/services/app-injector.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/app-injector.service.ts ***!
  \*********************************************************/
/*! exports provided: AppInjector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInjector", function() { return AppInjector; });
class AppInjector {
    static setInjector(injector) {
        AppInjector.injector = injector;
    }
    static getInjector() {
        return AppInjector.injector;
    }
}


/***/ }),

/***/ "./src/app/shared/services/auth.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/services/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.service */ "./src/app/shared/services/storage.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, storageService) {
        this.router = router;
        this.storageService = storageService;
    }
    canActivate() {
        if (!this.storageService.get(_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"].USER_TOKEN)) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/shared/services/base-http.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/base-http.service.ts ***!
  \******************************************************/
/*! exports provided: BaseHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseHttpService", function() { return BaseHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






let BaseHttpService = class BaseHttpService {
    constructor(http) {
        this.http = http;
        this.queue = [];
    }
    getUrl(url) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].host + url;
    }
    post(url, body, options = {}) {
        return this.http.post(this.getUrl(url), body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => {
            return resp;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler('POST')));
    }
    delete(url, options = {}) {
        return this.http.delete(this.getUrl(url), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => resp), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler('DELETE')));
    }
    put(url, body, options = {}) {
        return this.http.put(this.getUrl(url), body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => resp), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler('PUT')));
    }
    get(url, params) {
        const options = { params: null };
        options.params = params;
        return this.http.get(this.getUrl(url), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => resp), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler('GET')));
    }
    errorHandler(operation) {
        return (error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.error);
        };
    }
    postQueue(url, body) {
        const subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        const request = { url, body, subscription };
        this.queue.push(request);
        if (this.queue.length === 1) {
            this.startNextRequest();
        }
        return subscription;
    }
    startNextRequest() {
        if (this.queue.length > 0) {
            const requestData = this.queue[0];
            this.post(requestData.url, requestData.body).subscribe(res => {
                const sub = requestData.subscription;
                sub.next(res);
                this.queue.shift();
                // get next request, if any.
                this.startNextRequest();
            });
        }
    }
};
BaseHttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BaseHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], BaseHttpService);



/***/ }),

/***/ "./src/app/shared/services/error-handling.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/error-handling.service.ts ***!
  \***********************************************************/
/*! exports provided: ErrorHandlingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingService", function() { return ErrorHandlingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorHandlingService = class ErrorHandlingService {
    constructor() {
    }
    showError(error) {
        console.log('ERROR:', error);
    }
};
ErrorHandlingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorHandlingService);



/***/ }),

/***/ "./src/app/shared/services/storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/storage.service.ts ***!
  \****************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

var StorageService_1;


let StorageService = StorageService_1 = class StorageService {
    constructor(router) {
        this.router = router;
    }
    get(key) {
        return localStorage.getItem(key);
    }
    put(key, val) {
        localStorage.setItem(key, val);
    }
    delete(key) {
        localStorage.removeItem(key);
    }
    setToken(data) {
        this.put(StorageService_1.USER_TOKEN, data.token);
        this.put(StorageService_1.USER_REFRESH_TOKEN, data.refresh_token);
    }
    logout() {
        this.delete(StorageService_1.USER_TOKEN);
        setTimeout(() => {
            this.router.navigate(['/']);
        });
    }
    get userLogged() {
        return this.get(StorageService_1.USER_TOKEN);
    }
};
StorageService.USER_TOKEN = 'timer-token';
StorageService.USER_REFRESH_TOKEN = 'timer-token';
StorageService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
StorageService = StorageService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], StorageService);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_base_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/base-http.service */ "./src/app/shared/services/base-http.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _layouts_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layouts/components/header/header.component */ "./src/app/layouts/components/header/header.component.ts");
/* harmony import */ var _services_error_handling_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/error-handling.service */ "./src/app/shared/services/error-handling.service.ts");
/* harmony import */ var _layouts_components_page_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layouts/components/page/page.component */ "./src/app/layouts/components/page/page.component.ts");
/* harmony import */ var _services_APIInterceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/APIInterceptor.service */ "./src/app/shared/services/APIInterceptor.service.ts");












let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _layouts_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _layouts_components_page_page_component__WEBPACK_IMPORTED_MODULE_10__["PageComponent"]
        ],
        exports: [
            _layouts_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _layouts_components_page_page_component__WEBPACK_IMPORTED_MODULE_10__["PageComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                useClass: _services_APIInterceptor_service__WEBPACK_IMPORTED_MODULE_11__["APIInterceptor"],
                multi: true
            },
            _services_base_http_service__WEBPACK_IMPORTED_MODULE_6__["BaseHttpService"],
            _services_error_handling_service__WEBPACK_IMPORTED_MODULE_9__["ErrorHandlingService"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    host: 'https://mtapp-timer.herokuapp.com',
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mvgam\PhpStorm\timer-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map