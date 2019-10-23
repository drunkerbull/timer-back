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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projects.service */ "./src/app/layouts/pages/projects/projects.service.ts");





let ProjectComponent = class ProjectComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(activatedRoute, projectsService) {
        super();
        this.activatedRoute = activatedRoute;
        this.projectsService = projectsService;
        this.loading = false;
    }
    addTask() {
        this.loading = true;
        const pack = {
            name: 'testTaskOKCreate ' + Math.random(),
            project: this.project._id
        };
        const subDataAddTask = this.projectsService.addTaskToProject(pack).subscribe((task) => {
            this.project.tasks.push(task);
            this.loading = false;
        });
        this.someSubscriptions.add(subDataAddTask);
    }
    ngOnInit() {
        const subData = this.activatedRoute.data.subscribe((project) => {
            this.project = project.project;
            this.loading = true;
            const subDataTasks = this.projectsService.getTasksOfProject(this.project._id).subscribe((tasks) => {
                this.project.tasks = tasks;
                this.loading = false;
            });
            this.someSubscriptions.add(subDataTasks);
        });
        this.someSubscriptions.add(subData);
    }
};
ProjectComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"] }
];
ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project',
        template: __webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/pages/projects/pages/project/project.component.html"),
        styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/layouts/pages/projects/pages/project/project.component.scss")]
    })
], ProjectComponent);



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _projects_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.module */ "./src/app/layouts/pages/projects/projects.module.ts");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects.component */ "./src/app/layouts/pages/projects/projects.component.ts");
/* harmony import */ var _pages_project_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/project/project.component */ "./src/app/layouts/pages/projects/pages/project/project.component.ts");
/* harmony import */ var _shared_resolvers_project_resolve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/resolvers/project.resolve */ "./src/app/shared/resolvers/project.resolve.ts");







const routes = [
    {
        path: '', component: _projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"]
    },
    {
        path: ':project', component: _pages_project_project_component__WEBPACK_IMPORTED_MODULE_5__["ProjectComponent"], resolve: { project: _shared_resolvers_project_resolve__WEBPACK_IMPORTED_MODULE_6__["ProjectResolve"] }
    },
];
let ProjectsRoutingModule = class ProjectsRoutingModule {
};
ProjectsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _projects_module__WEBPACK_IMPORTED_MODULE_3__["ProjectsModule"]],
    })
], ProjectsRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.service */ "./src/app/layouts/pages/projects/projects.service.ts");



let ProjectsComponent = class ProjectsComponent {
    constructor(projectsService) {
        this.projectsService = projectsService;
    }
    ngOnInit() {
        this.getProjects();
    }
    createRandomProject() {
        const pack = { name: 'superProjectNumber-' + Math.random() };
        this.projectsService.createProject(pack).subscribe(res => {
            this.projects.push(res);
        });
    }
    getProjects() {
        this.projectsService.projects().subscribe(res => {
            this.projects = res;
        });
    }
};
ProjectsComponent.ctorParameters = () => [
    { type: _projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] }
];
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/pages/projects/projects.component.html"),
        styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/layouts/pages/projects/projects.component.scss")]
    })
], ProjectsComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pages_project_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/project/project.component */ "./src/app/layouts/pages/projects/pages/project/project.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let ProjectsModule = class ProjectsModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_base_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/base-http.service */ "./src/app/shared/services/base-http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let ProjectsService = class ProjectsService {
    constructor(baseHttp) {
        this.baseHttp = baseHttp;
    }
    projects() {
        return this.baseHttp.get('/projects')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => resp));
    }
    createProject(pack) {
        return this.baseHttp.post('/projects', pack)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => resp));
    }
    getProject(id) {
        return this.baseHttp.get('/projects/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => resp));
    }
    getTasksOfProject(id) {
        return this.baseHttp.get('/projects/' + id + '/tasks')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => resp));
    }
    addTaskToProject(pack) {
        return this.baseHttp.post('/tasks', pack)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => resp));
    }
};
ProjectsService.ctorParameters = () => [
    { type: _shared_services_base_http_service__WEBPACK_IMPORTED_MODULE_2__["BaseHttpService"] }
];
ProjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProjectsService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _layouts_pages_projects_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/pages/projects/projects.service */ "./src/app/layouts/pages/projects/projects.service.ts");
/* harmony import */ var _components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/base.component */ "./src/app/shared/components/base.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let ProjectResolve = class ProjectResolve extends _components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"] {
    constructor(projectsService) {
        super();
        this.projectsService = projectsService;
    }
    resolve(route) {
        const id = route.paramMap.get('project');
        if (!id) {
            const error = { message: 'not_found' };
            return this.errorHandle(error);
        }
        return this.projectsService.getProject(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            return this.errorHandle(error);
        }));
    }
    errorHandle(error) {
        this.router.navigate(['/projects']);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({ data: null, error: error.message });
    }
};
ProjectResolve.ctorParameters = () => [
    { type: _layouts_pages_projects_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] }
];
ProjectResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProjectResolve);



/***/ })

}]);
//# sourceMappingURL=layouts-pages-projects-projects-routing-module-es2015.js.map