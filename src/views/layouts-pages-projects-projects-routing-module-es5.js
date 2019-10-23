(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-pages-projects-projects-routing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/pages/projects/pages/project/project.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/pages/projects/pages/project/project.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h3>{{project.name}}</h3>\r\n  <button (click)=\"addTask()\">+</button>\r\n</div>\r\n<h4>tasks</h4>\r\n<ul *ngIf=\"!loading\">\r\n  <li *ngFor=\"let task of project.tasks.reverse()\">{{task.name}}</li>\r\n</ul>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/pages/projects/projects.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/pages/projects/projects.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"createRandomProject()\">Add random project</button>\r\n<div>\r\n  <ul *ngIf=\"projects\">\r\n    <li *ngFor=\"let project of projects.reverse()\"><a [routerLink]=\"'/projects/'+project._id\">{{project.name + '||' + project._id}}</a></li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layouts/pages/projects/pages/project/project.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/layouts/pages/projects/pages/project/project.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvcGFnZXMvcHJvamVjdHMvcGFnZXMvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layouts/pages/projects/pages/project/project.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layouts/pages/projects/pages/project/project.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projects.service */ "./src/app/layouts/pages/projects/projects.service.ts");





var ProjectComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProjectComponent, _super);
    function ProjectComponent(activatedRoute, projectsService) {
        var _this = _super.call(this) || this;
        _this.activatedRoute = activatedRoute;
        _this.projectsService = projectsService;
        _this.loading = false;
        return _this;
    }
    ProjectComponent.prototype.addTask = function () {
        var _this = this;
        this.loading = true;
        var pack = {
            name: 'testTaskOKCreate ' + Math.random(),
            project: this.project._id
        };
        var subDataAddTask = this.projectsService.addTaskToProject(pack).subscribe(function (task) {
            _this.project.tasks.push(task);
            _this.loading = false;
        });
        this.someSubscriptions.add(subDataAddTask);
    };
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        var subData = this.activatedRoute.data.subscribe(function (project) {
            _this.project = project.project;
            _this.loading = true;
            var subDataTasks = _this.projectsService.getTasksOfProject(_this.project._id).subscribe(function (tasks) {
                _this.project.tasks = tasks;
                _this.loading = false;
            });
            _this.someSubscriptions.add(subDataTasks);
        });
        this.someSubscriptions.add(subData);
    };
    ProjectComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"] }
    ]; };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/pages/projects/pages/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/layouts/pages/projects/pages/project/project.component.scss")]
        })
    ], ProjectComponent);
    return ProjectComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layouts/pages/projects/projects-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layouts/pages/projects/projects-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProjectsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsRoutingModule", function() { return ProjectsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projects_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.module */ "./src/app/layouts/pages/projects/projects.module.ts");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects.component */ "./src/app/layouts/pages/projects/projects.component.ts");
/* harmony import */ var _pages_project_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/project/project.component */ "./src/app/layouts/pages/projects/pages/project/project.component.ts");
/* harmony import */ var _shared_resolvers_project_resolve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/resolvers/project.resolve */ "./src/app/shared/resolvers/project.resolve.ts");







var routes = [
    {
        path: '', component: _projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"]
    },
    {
        path: ':project', component: _pages_project_project_component__WEBPACK_IMPORTED_MODULE_5__["ProjectComponent"], resolve: { project: _shared_resolvers_project_resolve__WEBPACK_IMPORTED_MODULE_6__["ProjectResolve"] }
    },
];
var ProjectsRoutingModule = /** @class */ (function () {
    function ProjectsRoutingModule() {
    }
    ProjectsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _projects_module__WEBPACK_IMPORTED_MODULE_3__["ProjectsModule"]],
        })
    ], ProjectsRoutingModule);
    return ProjectsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layouts/pages/projects/projects.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layouts/pages/projects/projects.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvcGFnZXMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layouts/pages/projects/projects.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/pages/projects/projects.component.ts ***!
  \**************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.service */ "./src/app/layouts/pages/projects/projects.service.ts");



var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(projectsService) {
        this.projectsService = projectsService;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectsComponent.prototype.createRandomProject = function () {
        var _this = this;
        var pack = { name: 'superProjectNumber-' + Math.random() };
        this.projectsService.createProject(pack).subscribe(function (res) {
            _this.projects.push(res);
        });
    };
    ProjectsComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectsService.projects().subscribe(function (res) {
            _this.projects = res;
        });
    };
    ProjectsComponent.ctorParameters = function () { return [
        { type: _projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] }
    ]; };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/pages/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/layouts/pages/projects/projects.component.scss")]
        })
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/layouts/pages/projects/projects.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/layouts/pages/projects/projects.module.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.component */ "./src/app/layouts/pages/projects/projects.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_project_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/project/project.component */ "./src/app/layouts/pages/projects/pages/project/project.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _projects_component__WEBPACK_IMPORTED_MODULE_1__["ProjectsComponent"],
                _pages_project_project_component__WEBPACK_IMPORTED_MODULE_5__["ProjectComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ]
        })
    ], ProjectsModule);
    return ProjectsModule;
}());



/***/ }),

/***/ "./src/app/layouts/pages/projects/projects.service.ts":
/*!************************************************************!*\
  !*** ./src/app/layouts/pages/projects/projects.service.ts ***!
  \************************************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_base_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/base-http.service */ "./src/app/shared/services/base-http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ProjectsService = /** @class */ (function () {
    function ProjectsService(baseHttp) {
        this.baseHttp = baseHttp;
    }
    ProjectsService.prototype.projects = function () {
        return this.baseHttp.get('/projects')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp; }));
    };
    ProjectsService.prototype.createProject = function (pack) {
        return this.baseHttp.post('/projects', pack)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp; }));
    };
    ProjectsService.prototype.getProject = function (id) {
        return this.baseHttp.get('/projects/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp; }));
    };
    ProjectsService.prototype.getTasksOfProject = function (id) {
        return this.baseHttp.get('/projects/' + id + '/tasks')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp; }));
    };
    ProjectsService.prototype.addTaskToProject = function (pack) {
        return this.baseHttp.post('/tasks', pack)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp; }));
    };
    ProjectsService.ctorParameters = function () { return [
        { type: _shared_services_base_http_service__WEBPACK_IMPORTED_MODULE_2__["BaseHttpService"] }
    ]; };
    ProjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "./src/app/shared/resolvers/project.resolve.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/resolvers/project.resolve.ts ***!
  \*****************************************************/
/*! exports provided: ProjectResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectResolve", function() { return ProjectResolve; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layouts_pages_projects_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/pages/projects/projects.service */ "./src/app/layouts/pages/projects/projects.service.ts");
/* harmony import */ var _components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/base.component */ "./src/app/shared/components/base.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var ProjectResolve = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProjectResolve, _super);
    function ProjectResolve(projectsService) {
        var _this = _super.call(this) || this;
        _this.projectsService = projectsService;
        return _this;
    }
    ProjectResolve.prototype.resolve = function (route) {
        var _this = this;
        var id = route.paramMap.get('project');
        if (!id) {
            var error = { message: 'not_found' };
            return this.errorHandle(error);
        }
        return this.projectsService.getProject(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return _this.errorHandle(error);
        }));
    };
    ProjectResolve.prototype.errorHandle = function (error) {
        this.router.navigate(['/projects']);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({ data: null, error: error.message });
    };
    ProjectResolve.ctorParameters = function () { return [
        { type: _layouts_pages_projects_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] }
    ]; };
    ProjectResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ProjectResolve);
    return ProjectResolve;
}(_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=layouts-pages-projects-projects-routing-module-es5.js.map