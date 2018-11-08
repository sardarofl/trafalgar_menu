(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar_spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n  .fullscreen-bg {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    overflow: hidden;\r\n    z-index: -100;\r\n    background: #2b4369\r\n  }\r\n  .fullscreen-bg__video {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    min-width: 1300px;\r\n    z-index: -100;\r\n    -webkit-transform: translate(-50%, -50%) rotate(90deg);\r\n    transform: translate(-50%, -50%) rotate(90deg);\r\n    background-size: cover;\r\n    transition: opacity 1s;\r\n    width: auto;\r\n    \r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n        <span>Trafalgar Menu Panel</span>\n        <span class=\"toolbar_spacer\"></span>\n        <!-- <button mat-button [routerLink]=\"['/bemenu/login']\" *ngIf=\"!isLoggednIn\">login</button> \n        <button mat-button (click)=\"onLogout()\" *ngIf=\"authenticationService.loggedIn()\">logout</button>\n    </mat-toolbar-row>\n\n</mat-toolbar>\n<br> -->\n<router-outlet (activate)=\"routeChanged()\"></router-outlet>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _node_modules_angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(location, router, activatedRouter, authenticationService) {
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.authenticationService = authenticationService;
        this.title = 'app';
        this.isLoggednIn = false;
        if (authenticationService.loggedIn()) {
            this.isLoggednIn = true;
            console.log(this.isLoggednIn);
        }
        location.subscribe(function (val) { return console.log(val); });
    }
    AppComponent.prototype.onLogout = function () {
        var _this = this;
        this.authenticationService.logout().subscribe(function (data) {
            localStorage.removeItem('menuToken');
            _this.router.navigateByUrl('/bemenu/login');
        });
    };
    AppComponent.prototype.routeChanged = function () {
        console.log("working");
        if (this.authenticationService.loggedIn()) {
            this.isLoggednIn = true;
            console.log(this.isLoggednIn);
        }
        else {
            this.isLoggednIn = false;
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/accounts/accounts.component */ "./src/app/components/accounts/accounts.component.ts");
/* harmony import */ var _components_femenu_femenu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/femenu/femenu.component */ "./src/app/components/femenu/femenu.component.ts");
/* harmony import */ var _components_bemenu_bemenu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/bemenu/bemenu.component */ "./src/app/components/bemenu/bemenu.component.ts");
/* harmony import */ var _components_menulogin_menulogin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/menulogin/menulogin.component */ "./src/app/components/menulogin/menulogin.component.ts");
/* harmony import */ var _components_menudata_menudata_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/menudata/menudata.component */ "./src/app/components/menudata/menudata.component.ts");
/* harmony import */ var _components_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/guards/auth.guard */ "./src/app/components/guards/auth.guard.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _services_adddata_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/adddata.service */ "./src/app/services/adddata.service.ts");
/* harmony import */ var node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_getdata_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/getdata.service */ "./src/app/services/getdata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















//materialize imports





var appRoutes = [
    //, canActivate:[AuthGuard]
    { path: 'bemenu', component: _components_bemenu_bemenu_component__WEBPACK_IMPORTED_MODULE_8__["BemenuComponent"],
        children: [
            { path: 'login', component: _components_menulogin_menulogin_component__WEBPACK_IMPORTED_MODULE_9__["MenuloginComponent"] },
            { path: 'menudata', component: _components_menudata_menudata_component__WEBPACK_IMPORTED_MODULE_10__["MenudataComponent"], canActivate: [_components_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
            { path: '**', redirectTo: 'login' }
        ]
    },
    { path: 'femenu', component: _components_femenu_femenu_component__WEBPACK_IMPORTED_MODULE_7__["FemenuComponent"] },
    { path: '**', redirectTo: 'femenu' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_6__["AccountsComponent"],
                _components_femenu_femenu_component__WEBPACK_IMPORTED_MODULE_7__["FemenuComponent"],
                _components_bemenu_bemenu_component__WEBPACK_IMPORTED_MODULE_8__["BemenuComponent"],
                _components_menulogin_menulogin_component__WEBPACK_IMPORTED_MODULE_9__["MenuloginComponent"],
                _components_menudata_menudata_component__WEBPACK_IMPORTED_MODULE_10__["MenudataComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"]
            ],
            providers: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"], _services_adddata_service__WEBPACK_IMPORTED_MODULE_17__["AdddataService"], node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"], _services_getdata_service__WEBPACK_IMPORTED_MODULE_19__["GetdataService"], _components_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/accounts/accounts.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/accounts/accounts.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/accounts/accounts.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/accounts/accounts.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  accounts works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/accounts/accounts.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/accounts/accounts.component.ts ***!
  \***********************************************************/
/*! exports provided: AccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsComponent", function() { return AccountsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountsComponent = /** @class */ (function () {
    function AccountsComponent() {
    }
    AccountsComponent.prototype.ngOnInit = function () {
    };
    AccountsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accounts',
            template: __webpack_require__(/*! ./accounts.component.html */ "./src/app/components/accounts/accounts.component.html"),
            styles: [__webpack_require__(/*! ./accounts.component.css */ "./src/app/components/accounts/accounts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountsComponent);
    return AccountsComponent;
}());



/***/ }),

/***/ "./src/app/components/bemenu/bemenu.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/bemenu/bemenu.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar_spacer {\r\n    flex: 1 1 auto;\r\n  }"

/***/ }),

/***/ "./src/app/components/bemenu/bemenu.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/bemenu/bemenu.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n        <mat-toolbar-row>\r\n            <span>Trafalgar Menu Panel</span>\r\n            <span class=\"toolbar_spacer\"></span>\r\n            <!-- <button mat-button [routerLink]=\"['/bemenu/login']\" *ngIf=\"!isLoggednIn\">login</button> -->\r\n            <button mat-button (click)=\"onLogout()\" *ngIf=\"authenticationService.loggedIn()\">logout</button>\r\n        </mat-toolbar-row>\r\n    \r\n    </mat-toolbar>\r\n    <br>\r\n    \r\n<div class=\"container\"><router-outlet (activate)=\"routeChanged()\"></router-outlet></div>"

/***/ }),

/***/ "./src/app/components/bemenu/bemenu.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/bemenu/bemenu.component.ts ***!
  \*******************************************************/
/*! exports provided: BemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BemenuComponent", function() { return BemenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.././services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _node_modules_angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BemenuComponent = /** @class */ (function () {
    function BemenuComponent(location, router, activatedRouter, authenticationService) {
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.authenticationService = authenticationService;
        this.title = 'app';
        this.isLoggednIn = false;
        if (authenticationService.loggedIn()) {
            this.isLoggednIn = true;
            console.log(this.isLoggednIn);
        }
        location.subscribe(function (val) { return console.log(val); });
    }
    BemenuComponent.prototype.ngOnInit = function () {
    };
    BemenuComponent.prototype.onLogout = function () {
        var _this = this;
        this.authenticationService.logout().subscribe(function (data) {
            localStorage.removeItem('menuToken');
            _this.router.navigateByUrl('/bemenu/login');
        });
    };
    BemenuComponent.prototype.routeChanged = function () {
        console.log("working");
        if (this.authenticationService.loggedIn()) {
            this.isLoggednIn = true;
            console.log(this.isLoggednIn);
        }
        else {
            this.isLoggednIn = false;
        }
    };
    BemenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bemenu',
            template: __webpack_require__(/*! ./bemenu.component.html */ "./src/app/components/bemenu/bemenu.component.html"),
            styles: [__webpack_require__(/*! ./bemenu.component.css */ "./src/app/components/bemenu/bemenu.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], BemenuComponent);
    return BemenuComponent;
}());



/***/ }),

/***/ "./src/app/components/femenu/femenu.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/femenu/femenu.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid_layout{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 2fr 5fr;\r\n        grid-template-columns: 2fr 5fr;\r\n    \r\n}\r\n\r\n.hotbeverages{\r\n    position: fixed;\r\n    margin-left: 60px;\r\n    margin-top: 159px;\r\n    min-width: 1110px;\r\n    font-size: 30px;\r\n    font-weight: 500;\r\n    line-height: 36px;\r\n}\r\n\r\n.foodandsnacks{\r\n    position: fixed;\r\n    margin-left: 1215px;\r\n    margin-top: 159px;\r\n    min-width: 673px;\r\n    font-size: 30px;\r\n    font-weight: 500;\r\n    line-height: 34px;\r\n   }\r\n\r\n.coldbeverages{\r\n    margin-left: 60px;\r\n    margin-top: 613px;\r\n    position: fixed;\r\n    min-width: 1110px;\r\n    font-size: 30px;\r\n    font-weight: 500;\r\n    line-height: 36px;\r\n}\r\n\r\n.left{\r\n    text-align: left;\r\n    margin-left:20px;\r\n}\r\n\r\n.right{\r\n    text-align: right;\r\n    margin-right:20px;\r\n}\r\n\r\ntable, th, td\r\n{\r\n    font-family: Frutiger, \"Frutiger Linotype\", Univers, Calibri, \"Gill Sans\", \"Gill Sans MT\", \"Myriad Pro\", Myriad, \"DejaVu Sans Condensed\", \"Liberation Sans\", \"Nimbus Sans L\", Tahoma, Geneva, \"Helvetica Neue\", Helvetica, Arial, sans-serif !important;\r\n  border-bottom: 0px solid #cdd0d4 !important;\r\n}\r\n\r\ntable\r\n{\r\n\r\n}\r\n\r\n/* .titlebox{\r\n    background-image: linear-gradient(#0759a1,#307cc0);\r\n  color:whitesmoke;\r\n  font-size:3.0em;\r\n  font-weight: 500;\r\n  text-align: center;\r\n    margin:10px;\r\n\r\n} */\r\n\r\n/* .table_hotbeverages{\r\n    width:98%;\r\n    text-align: center;\r\n    font-size:2.0vw;\r\n    margin:10px;\r\n    font-weight: 500;\r\n} */\r\n\r\n/* tr:nth-child(even) {\r\n    background-color: #ffdf84;\r\n    font-weight: 500;\r\n}\r\ntr:nth-child(odd) {\r\n    background-color: #fff8e5;\r\n    font-weight: 500;\r\n} */\r\n\r\n"

/***/ }),

/***/ "./src/app/components/femenu/femenu.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/femenu/femenu.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"/assets/tp3 updatedv2.png\" height=\"1080\" width=\"1920\" style=\"position:fixed; z-index: -10;\">\n<div class=\"hotbeverages\">\n\n    <table class=\"table_hotbeverages\">    \n       <tbody>\n         <tr>\n           <td  class=\"left\">{{item1}}</td>\n           <td class=\"right\">{{price1}}</td>\n         </tr>\n         <tr>\n             <td class=\"left\">{{item2}}</td>\n             <td class=\"right\">{{price2}}</td>\n           </tr>\n         <tr>\n           <td class=\"left\">{{item3}}</td>\n           <td class=\"right\">{{price3}}</td>\n         </tr>\n         <tr>\n             <td class=\"left\">{{item4}}</td>\n             <td class=\"right\">{{price4}}</td>\n         </tr>\n         <tr>\n            <td class=\"left\">{{item5}}</td>\n            <td class=\"right\">{{price5}}</td>\n          </tr>\n       </tbody>\n     </table>\n  </div>\n  <div class=\"coldbeverages\">\n     <table class=\"table_hotbeverages\">\n\n        <tbody>\n          <tr>\n              <td class=\"left\">{{item6}}</td>\n              <td class=\"right\">{{price6}}</td>\n            </tr>\n          <tr>\n            <td class=\"left\">{{item7}}</td>\n            <td class=\"right\">{{price7}}</td>\n          </tr>\n          <tr>\n              <td class=\"left\">{{item8}}</td>\n              <td class=\"right\">{{price8}}</td>\n          </tr>\n          <tr>\n              <td class=\"left\">{{item9}}</td>\n              <td class=\"right\">{{price9}}</td>\n          </tr>\n          <tr>\n              <td class=\"left\">{{item10}}</td>\n              <td class=\"right\">{{price10}}</td>\n          </tr>\n             \n        </tbody>\n      </table>\n  </div>\n  <div class=\"foodandsnacks\">\n     <table class=\"table_hotbeverages\"  >\n\n        <tbody>\n          <tr>\n            <td class=\"left\">{{item11}}</td>\n            <td class=\"right\">{{price11}}</td>\n          </tr>\n          <tr>\n              <td class=\"left\">{{item12}}</td>\n              <td class=\"right\">{{price12}}</td>\n            </tr>\n          <tr>\n            <td class=\"left\">{{item13}}</td>\n            <td class=\"right\">{{price13}}</td>\n          </tr>\n          <tr>\n              <td class=\"left\">{{item14}}</td>\n              <td class=\"right\">{{price14}}</td>\n          </tr>\n          <tr>\n              <td class=\"left\">{{item15}}</td>\n              <td class=\"right\">{{price15}}</td>\n          </tr>\n          <tr>\n              <td class=\"left\">{{item16}}</td>\n              <td class=\"right\">{{price16}}</td>\n          </tr>\n          <tr>\n              <td class=\"left\">{{item17}}</td>\n              <td class=\"right\">{{price17}}</td>\n          </tr>\n          <tr>\n              <td class=\"left\">{{item18}}</td>\n              <td class=\"right\">{{price18}}</td>\n          </tr>\n          <tr>\n              <td class=\"left\">{{item19}}</td>\n              <td class=\"right\">{{price19}}</td>\n          </tr>\n          <tr>\n              <td class=\"left\">{{item20}}</td>\n              <td class=\"right\">{{price20}}</td>\n          </tr>\n          <tr>\n              <td class=\"left\">{{item21}}</td>\n              <td class=\"right\">{{price21}}</td>\n          </tr>\n          <tr>\n            <td class=\"left\">{{item22}}</td>\n            <td class=\"right\">{{price22}}</td>\n        </tr>\n             \n        </tbody>\n      </table>\n</div>\n  \n<!-- \n<div class=\"grid_layout\">\n  <div class=\"left_grid\">\n      <div class=\"hotbeverages\">\n         <div class=\"titlebox\">\n            HOT BEVERAGES\n            \n         </div>\n         <table class=\"table_hotbeverages centered\">    \n            <tbody>\n              <tr>\n                <td>{{item1}}</td>\n                <td>{{price1}}</td>\n              </tr>\n              <tr>\n                  <td>{{item2}}</td>\n                  <td>{{price2}}</td>\n                </tr>\n              <tr>\n                <td>{{item3}}</td>\n                <td>{{price3}}</td>\n              </tr>\n              <tr>\n                  <td>{{item4}}</td>\n                  <td>{{price4}}</td>\n              </tr>\n                 \n            </tbody>\n          </table>\n       </div>\n      <div class=\"coldbeverages\">\n          <div class=\"titlebox\">\n              COLD BEVERAGES\n              \n           </div>\n           <table class=\"table_hotbeverages centered\">\n      \n              <tbody>\n                <tr>\n                  <td>{{item5}}</td>\n                  <td>{{price5}}</td>\n                </tr>\n                <tr>\n                    <td>{{item6}}</td>\n                    <td>{{price6}}</td>\n                  </tr>\n                <tr>\n                  <td>{{item7}}</td>\n                  <td>{{price7}}</td>\n                </tr>\n                <tr>\n                    <td>{{item8}}</td>\n                    <td>{{price8}}</td>\n                </tr>\n                <tr>\n                    <td>{{item9}}</td>\n                    <td>{{price9}}</td>\n                </tr>\n                <tr>\n                    <td>{{item10}}</td>\n                    <td>{{price10}}</td>\n                </tr>\n                   \n              </tbody>\n            </table>\n        </div>\n  </div>\n \n  <div class=\"foodandsnacks\">\n      <div class=\"titlebox\">\n          FOOD & SNACKS\n          \n       </div>\n       <table class=\"table_hotbeverages centered\">\n  \n          <tbody>\n            <tr>\n              <td>{{item11}}</td>\n              <td>{{price11}}</td>\n            </tr>\n            <tr>\n                <td>{{item12}}</td>\n                <td>{{price12}}</td>\n              </tr>\n            <tr>\n              <td>{{item13}}</td>\n              <td>{{price13}}</td>\n            </tr>\n            <tr>\n                <td>{{item14}}</td>\n                <td>{{price14}}</td>\n            </tr>\n            <tr>\n                <td>{{item15}}</td>\n                <td>{{price15}}</td>\n            </tr>\n            <tr>\n                <td>{{item16}}</td>\n                <td>{{price16}}</td>\n            </tr>\n            <tr>\n                <td>{{item17}}</td>\n                <td>{{price17}}</td>\n            </tr>\n            <tr>\n                <td>{{item18}}</td>\n                <td>{{price18}}</td>\n            </tr>\n            <tr>\n                <td>{{item19}}</td>\n                <td>{{price19}}</td>\n            </tr>\n            <tr>\n                <td>{{item20}}</td>\n                <td>{{price20}}</td>\n            </tr>\n            <tr>\n                <td>{{item21}}</td>\n                <td>{{price21}}</td>\n            </tr>\n               \n          </tbody>\n        </table>\n  </div>\n\n</div>\n\n   -->\n"

/***/ }),

/***/ "./src/app/components/femenu/femenu.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/femenu/femenu.component.ts ***!
  \*******************************************************/
/*! exports provided: FemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FemenuComponent", function() { return FemenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_getdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/getdata.service */ "./src/app/services/getdata.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FemenuComponent = /** @class */ (function () {
    function FemenuComponent(snackBar, route, activatedRouter, getDataService) {
        var _this = this;
        this.snackBar = snackBar;
        this.route = route;
        this.activatedRouter = activatedRouter;
        this.getDataService = getDataService;
        this.refreshEverything = function () {
            _this.getDataService.getMenu("/api/menus/5b894c834a9fad43c4b0a67e").map(function (response) { return response.json(); }).subscribe(function (data) {
                console.log(data);
                _this.item1 = data['item1'];
                _this.price1 = data['price1'];
                _this.item2 = data['item2'];
                _this.price2 = data['price2'];
                _this.item3 = data['item3'];
                _this.price3 = data['price3'];
                _this.item4 = data['item4'];
                _this.price4 = data['price4'];
                _this.item5 = data['item5'];
                _this.price5 = data['price5'];
                _this.item6 = data['item6'];
                _this.price6 = data['price6'];
                _this.item7 = data['item7'];
                _this.price7 = data['price7'];
                _this.item8 = data['item8'];
                _this.price8 = data['price8'];
                _this.item9 = data['item9'];
                _this.price9 = data['price9'];
                _this.item10 = data['item10'];
                _this.price10 = data['price10'];
                _this.item11 = data['item11'];
                _this.price11 = data['price11'];
                _this.item12 = data['item12'];
                _this.price12 = data['price12'];
                _this.item13 = data['item13'];
                _this.price13 = data['price13'];
                _this.item14 = data['item14'];
                _this.price14 = data['price14'];
                _this.item15 = data['item15'];
                _this.price15 = data['price15'];
                _this.item16 = data['item16'];
                _this.price16 = data['price16'];
                _this.item17 = data['item17'];
                _this.price17 = data['price17'];
                _this.item18 = data['item18'];
                _this.price18 = data['price18'];
                _this.item19 = data['item19'];
                _this.price19 = data['price19'];
                _this.item20 = data['item20'];
                _this.price20 = data['price20'];
                _this.item21 = data['item21'];
                _this.price21 = data['price21'];
                _this.item22 = data['item22'];
                _this.price22 = data['price22'];
            });
        };
        setInterval(function () {
            _this.refreshEverything();
        }, 10000);
    }
    FemenuComponent.prototype.ngOnInit = function () {
        this.refreshEverything();
    };
    FemenuComponent.prototype.openSnackBar = function () {
        this.snackBar.open('Message archived');
    };
    FemenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-femenu',
            template: __webpack_require__(/*! ./femenu.component.html */ "./src/app/components/femenu/femenu.component.html"),
            styles: [__webpack_require__(/*! ./femenu.component.css */ "./src/app/components/femenu/femenu.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_getdata_service__WEBPACK_IMPORTED_MODULE_1__["GetdataService"]])
    ], FemenuComponent);
    return FemenuComponent;
}());



/***/ }),

/***/ "./src/app/components/guards/auth.guard.ts":
/*!*************************************************!*\
  !*** ./src/app/components/guards/auth.guard.ts ***!
  \*************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/bemenu/login']);
            alert("Please login First");
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/menudata/menudata.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/menudata/menudata.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".items{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: auto 3% auto;\r\n        grid-template-columns: auto 3% auto;\r\n}\r\n\r\n#overlay_loading {\r\n\r\n    position:fixed;\r\n    z-index:5;\r\n     left:0;\r\n     top:0;\r\n    margin:0px;\r\n    width:100%; height:100%;\r\n    background: rgba(54, 25, 25, .7);\r\n    text-align: center;\r\n    color:white;\r\n     }\r\n\r\n#gifspinner{\r\n       position:fixed;\r\n       width:150px;\r\n       height:150px;\r\n       top:50%;\r\n       display: inline-block;\r\n        vertical-align: middle;\r\n        line-height: normal;\r\n    \r\n     }\r\n    "

/***/ }),

/***/ "./src/app/components/menudata/menudata.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/menudata/menudata.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"submitted\" id=\"overlay_loading\">\n\n    <div id=\"gifspinner\" class=\"preloader-wrapper big active\">\n         <div class=\"spinner-layer spinner-blue\">\n         <div class=\"circle-clipper left\">\n           <div class=\"circle\"></div>\n         </div><div class=\"gap-patch\">\n           <div class=\"circle\"></div>\n         </div><div class=\"circle-clipper right\">\n           <div class=\"circle\"></div>\n         </div>\n       </div>\n    \n    </div>\n    </div>\n\n<form  id = \"formMenuData\" name =\"formMenuData\" #menuData = \"ngForm\">\n  <h3>Hot Beverages</h3>\n  <label>item1</label><br>\n  <div class=\"items\">\n    <input type = \"text\" name =\"item1\" id=\"item1\" placeholder=\"item1\" [(ngModel)]=\"item1\"><div class=\"spacer\"></div><input class=\"grid_item\" type = \"text\" name =\"price1\" id=\"price1\" placeholder=\"price1\" [(ngModel)]=\"price1\"><br>\n  </div>\n    \n  <label>item2</label><br>\n  <div class=\"items\">\n    <input type = \"text\" name =\"item2\" id=\"item2\" placeholder=\"item2\" [(ngModel)]=\"item2\"><div class=\"spacer\"></div><input type = \"text\" name =\"price2\" id=\"price2\" placeholder=\"price2\" [(ngModel)]=\"price2\"><br>\n  </div>\n  <label>item3</label><br>\n  <div class=\"items\">\n    <input type = \"text\" name =\"item3\" id=\"item3\" placeholder=\"item3\" [(ngModel)]=\"item3\"><div class=\"spacer\"></div><input type = \"text\" name =\"price3\" id=\"price3\" placeholder=\"price3\" [(ngModel)]=\"price3\"><br>\n  </div>\n  <label>item4</label><br>\n  <div class=\"items\">\n    <input type = \"text\" name =\"item4\" id=\"item4\" placeholder=\"item4\" [(ngModel)]=\"item4\"><div class=\"spacer\"></div><input type = \"text\" name =\"price4\" id=\"price4\" placeholder=\"price4\" [(ngModel)]=\"price4\"><br>\n  </div>\n\n  <label>item5</label><br>\n  <div class=\"items\">\n    <input type = \"text\" name =\"item5\" id=\"item5\" placeholder=\"item5\" [(ngModel)]=\"item5\"><div class=\"spacer\"></div><input type = \"text\" name =\"price5\" id=\"price5\" placeholder=\"price5\" [(ngModel)]=\"price5\"><br>\n  </div>\n  <h3>Cold Beverages</h3>\n  <label>item1</label><br>\n  <div class=\"items\">\n    <input type = \"text\" name =\"item6\" id=\"item6\" placeholder=\"item6\" [(ngModel)]=\"item6\"><div class=\"spacer\"></div><input type = \"text\" name =\"price6\" id=\"price6\" placeholder=\"price6\" [(ngModel)]=\"price6\"><br>\n  </div>\n  <label>item2</label><br>\n  <div class=\"items\">\n    <input type = \"text\" name =\"item7\" id=\"item7\" placeholder=\"item7\" [(ngModel)]=\"item7\"><div class=\"spacer\"></div><input type = \"text\" name =\"price7\" id=\"price7\" placeholder=\"price7\" [(ngModel)]=\"price7\"><br>\n  </div>\n  <label>item3</label><br>\n  <div class=\"items\">\n    <input type = \"text\" name =\"item8\" id=\"item8\" placeholder=\"item8\" [(ngModel)]=\"item8\"><div class=\"spacer\"></div><input type = \"text\" name =\"price8\" id=\"price8\" placeholder=\"price8\" [(ngModel)]=\"price8\"><br>\n  </div>\n  <label>item4</label><br>\n  <div class=\"items\">\n    <input type = \"text\" name =\"item9\" id=\"item9\" placeholder=\"item9\" [(ngModel)]=\"item9\"><div class=\"spacer\"></div><input type = \"text\" name =\"price9\" id=\"price9\" placeholder=\"price9\" [(ngModel)]=\"price9\"><br>\n  </div>\n  <label>item5</label><br>\n  <div class=\"items\">\n    <input type = \"text\" name =\"item10\" id=\"item10\" placeholder=\"item10\" [(ngModel)]=\"item10\"><div class=\"spacer\"></div><input type = \"text\" name =\"price10\" id=\"price10\" placeholder=\"price10\" [(ngModel)]=\"price10\"><br>\n  </div>\n    <h3>Food and Snacks</h3>\n  <label>item1</label><br>\n  <div class=\"items\">\n    <input type = \"text\" name =\"item11\" id=\"item11\" placeholder=\"item11\" [(ngModel)]=\"item11\"><div class=\"spacer\"></div><input type = \"text\" name =\"price11\" id=\"price11\" placeholder=\"price11\" [(ngModel)]=\"price11\"><br>\n  </div>\n  <label>item2</label><br>\n  <div class=\"items\">\n    <input type = \"text\" name =\"item12\" id=\"item12\" placeholder=\"item12\" [(ngModel)]=\"item12\"><div class=\"spacer\"></div><input type = \"text\" name =\"price12\" id=\"price12\" placeholder=\"price12\" [(ngModel)]=\"price12\"><br>\n  </div>\n  <label>item3</label><br>\n  <div class=\"items\">\n    <input type = \"text\" name =\"item13\" id=\"item13\" placeholder=\"item13\" [(ngModel)]=\"item13\"><div class=\"spacer\"></div><input type = \"text\" name =\"price13\" id=\"price13\" placeholder=\"price13\" [(ngModel)]=\"price13\"><br>\n  </div>\n  <label>item4</label><br>\n  <div class=\"items\">\n    <input type = \"text\" name =\"item14\" id=\"item14\" placeholder=\"item14\" [(ngModel)]=\"item14\"><div class=\"spacer\"></div><input type = \"text\" name =\"price14\" id=\"price14\" placeholder=\"price14\" [(ngModel)]=\"price14\"><br>\n  </div>\n  <label>item5</label><br>\n  <div class=\"items\">\n    <input type = \"text\" name =\"item15\" id=\"item15\" placeholder=\"item15\" [(ngModel)]=\"item15\"><div class=\"spacer\"></div><input type = \"text\" name =\"price15\" id=\"price15\" placeholder=\"price15\" [(ngModel)]=\"price15\"><br>\n  </div>\n  <label>item6</label><br>\n  <div class=\"items\">\n    <input type = \"text\" name =\"item16\" id=\"item16\" placeholder=\"item16\" [(ngModel)]=\"item16\"><div class=\"spacer\"></div><input type = \"text\" name =\"price16\" id=\"price16\" placeholder=\"price16\" [(ngModel)]=\"price16\"><br>\n  </div>\n  <label>item7</label><br>\n  <div class=\"items\">\n    <input type = \"text\" name =\"item17\" id=\"item17\" placeholder=\"item17\" [(ngModel)]=\"item17\"><div class=\"spacer\"></div><input type = \"text\" name =\"price17\" id=\"price17\" placeholder=\"price17\" [(ngModel)]=\"price17\"><br>\n  </div>\n  <label>item8</label><br>\n  <div class=\"items\">\n    <input type = \"text\" name =\"item18\" id=\"item18\" placeholder=\"item18\" [(ngModel)]=\"item18\"><div class=\"spacer\"></div><input type = \"text\" name =\"price18\" id=\"price18\" placeholder=\"price18\" [(ngModel)]=\"price18\"><br>\n  </div>\n  <label>item9</label><br>\n  <div class=\"items\">\n    <input type = \"text\" name =\"item19\" id=\"item19\" placeholder=\"item19\" [(ngModel)]=\"item19\"><div class=\"spacer\"></div><input type = \"text\" name =\"price19\" id=\"price19\" placeholder=\"price19\" [(ngModel)]=\"price19\"><br>\n  </div>\n  <label>item10</label><br>\n  <div class=\"items\">\n    <input type = \"text\" name =\"item20\" id=\"item20\" placeholder=\"item20\" [(ngModel)]=\"item20\"><div class=\"spacer\"></div><input type = \"text\" name =\"price20\" id=\"price20\" placeholder=\"price20\" [(ngModel)]=\"price20\"><br>\n  </div>\n  <label>item11</label><br>\n  <div class=\"items\">\n    <input type = \"text\" name =\"item21\" id=\"item21\" placeholder=\"item21\" [(ngModel)]=\"item21\"><div class=\"spacer\"></div><input type = \"text\" name =\"price21\" id=\"price21\" placeholder=\"price21\" [(ngModel)]=\"price21\">\n  </div>\n  <label>item12</label><br>\n  <div class=\"items\">\n    <input type = \"text\" name =\"item22\" id=\"item22\" placeholder=\"item22\" [(ngModel)]=\"item22\"><div class=\"spacer\"></div><input type = \"text\" name =\"price22\" id=\"price22\" placeholder=\"price22\" [(ngModel)]=\"price22\">\n  </div>\n</form>\n<br>\n<div class=\"center-align\" *ngIf=\"isLoggednIn\"><button mat-raised-button color=\"primary\" (click)=\"submitmenudata();\">Submit</button></div>\n<br><br>\n"

/***/ }),

/***/ "./src/app/components/menudata/menudata.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/menudata/menudata.component.ts ***!
  \***********************************************************/
/*! exports provided: MenudataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenudataComponent", function() { return MenudataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_adddata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/adddata.service */ "./src/app/services/adddata.service.ts");
/* harmony import */ var _services_getdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/getdata.service */ "./src/app/services/getdata.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MenudataComponent = /** @class */ (function () {
    function MenudataComponent(snackBar, router, getDataService, addDataService, elem, authenticationService) {
        var _this = this;
        this.snackBar = snackBar;
        this.router = router;
        this.getDataService = getDataService;
        this.addDataService = addDataService;
        this.elem = elem;
        this.authenticationService = authenticationService;
        this.isLoggednIn = false;
        this.refreshEverything = function () {
            _this.getDataService.getMenu("/api/menus/5b894c834a9fad43c4b0a67e").map(function (response) { return response.json(); }).subscribe(function (data) {
                console.log(data);
                _this.item1 = data['item1'];
                _this.price1 = data['price1'];
                _this.item2 = data['item2'];
                _this.price2 = data['price2'];
                _this.item3 = data['item3'];
                _this.price3 = data['price3'];
                _this.item4 = data['item4'];
                _this.price4 = data['price4'];
                _this.item5 = data['item5'];
                _this.price5 = data['price5'];
                _this.item6 = data['item6'];
                _this.price6 = data['price6'];
                _this.item7 = data['item7'];
                _this.price7 = data['price7'];
                _this.item8 = data['item8'];
                _this.price8 = data['price8'];
                _this.item9 = data['item9'];
                _this.price9 = data['price9'];
                _this.item10 = data['item10'];
                _this.price10 = data['price10'];
                _this.item11 = data['item11'];
                _this.price11 = data['price11'];
                _this.item12 = data['item12'];
                _this.price12 = data['price12'];
                _this.item13 = data['item13'];
                _this.price13 = data['price13'];
                _this.item14 = data['item14'];
                _this.price14 = data['price14'];
                _this.item15 = data['item15'];
                _this.price15 = data['price15'];
                _this.item16 = data['item16'];
                _this.price16 = data['price16'];
                _this.item17 = data['item17'];
                _this.price17 = data['price17'];
                _this.item18 = data['item18'];
                _this.price18 = data['price18'];
                _this.item19 = data['item19'];
                _this.price19 = data['price19'];
                _this.item20 = data['item20'];
                _this.price20 = data['price20'];
                _this.item21 = data['item21'];
                _this.price21 = data['price21'];
                _this.item22 = data['item22'];
                _this.price22 = data['price22'];
                _this.submitted = false;
            });
        };
        if (authenticationService.loggedIn()) {
            this.isLoggednIn = true;
        }
        else {
            this.router.navigate(['/bemenu/login']);
        }
    }
    MenudataComponent.prototype.openSnackBar = function () {
        this.snackBar.open('Done');
    };
    MenudataComponent.prototype.ngOnInit = function () {
        this.submitted = true;
        this.refreshEverything();
    };
    MenudataComponent.prototype.submitmenudata = function () {
        var _this = this;
        console.log("menu set");
        this.submitted = true;
        var menudata = { item1: this.item1, price1: this.price1,
            item2: this.item2, price2: this.price2,
            item3: this.item3, price3: this.price3,
            item4: this.item4, price4: this.price4,
            item5: this.item5, price5: this.price5,
            item6: this.item6, price6: this.price6,
            item7: this.item7, price7: this.price7,
            item8: this.item8, price8: this.price8,
            item9: this.item9, price9: this.price9,
            item10: this.item10, price10: this.price10,
            item11: this.item11, price11: this.price11,
            item12: this.item12, price12: this.price12,
            item13: this.item13, price13: this.price13,
            item14: this.item14, price14: this.price14,
            item15: this.item15, price15: this.price15,
            item16: this.item16, price16: this.price16,
            item17: this.item17, price17: this.price17,
            item18: this.item18, price18: this.price18,
            item19: this.item19, price19: this.price19,
            item20: this.item20, price20: this.price20,
            item21: this.item21, price21: this.price21,
            item22: this.item22, price22: this.price22
        };
        var id = '5b894c834a9fad43c4b0a67e';
        this.addDataService.setMenu("/api/menus/" + id, menudata).subscribe(function (data) {
            console.log(data);
            console.log();
            _this.refreshEverything();
            console.log("open snackbar");
            _this.snackBar.open('Data submitted', 'OK', {
                duration: 3000
            });
        });
        console.log(menudata);
    };
    MenudataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menudata',
            template: __webpack_require__(/*! ./menudata.component.html */ "./src/app/components/menudata/menudata.component.html"),
            styles: [__webpack_require__(/*! ./menudata.component.css */ "./src/app/components/menudata/menudata.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_getdata_service__WEBPACK_IMPORTED_MODULE_2__["GetdataService"], _services_adddata_service__WEBPACK_IMPORTED_MODULE_1__["AdddataService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], MenudataComponent);
    return MenudataComponent;
}());



/***/ }),

/***/ "./src/app/components/menulogin/menulogin.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/menulogin/menulogin.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fullwidth{\r\n    width:100%;\r\n}"

/***/ }),

/***/ "./src/app/components/menulogin/menulogin.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/menulogin/menulogin.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mt-20\">\n  <mat-card-title>Login</mat-card-title>\n  <hr>\n  <mat-card-content>\n    <div fxLayout=\"column\">\n      <form>\n          <form (submit)=\"login()\">\n              <div class=\"form-group\">\n                <!-- <label>Email</label> -->\n                <input type=\"text\" placeholder=\"Enter your email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\n              </div>\n              <div class=\"form-group\">\n                <!-- <label>Password</label> -->\n                <input type=\"password\" placeholder=\"Enter your password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n              </div><br>\n              <input type=\"submit\" class=\"btn indigo fullwidth\" value=\"Login\">\n            </form>\n      </form>\n     \n    </div>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/menulogin/menulogin.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/menulogin/menulogin.component.ts ***!
  \*************************************************************/
/*! exports provided: MenuloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuloginComponent", function() { return MenuloginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuloginComponent = /** @class */ (function () {
    function MenuloginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        if (authService.loggedIn()) {
            this.router.navigate(['/bemenu/menudata']);
        }
    }
    MenuloginComponent.prototype.ngOnInit = function () {
    };
    MenuloginComponent.prototype.login = function () {
        var _this = this;
        var userData = {
            email: this.email,
            password: this.password
        };
        this.authService.login(userData).subscribe(function (data) {
            console.log(data);
            localStorage.setItem('menuToken', JSON.stringify(data));
            if (_this.authService.loggedIn()) {
                console.log('logged in');
                _this.router.navigate(['/bemenu/menudata']);
            }
        }, function (err) {
            alert("wrong email or password");
        });
    };
    MenuloginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menulogin',
            template: __webpack_require__(/*! ./menulogin.component.html */ "./src/app/components/menulogin/menulogin.component.html"),
            styles: [__webpack_require__(/*! ./menulogin.component.css */ "./src/app/components/menulogin/menulogin.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], MenuloginComponent);
    return MenuloginComponent;
}());



/***/ }),

/***/ "./src/app/services/adddata.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/adddata.service.ts ***!
  \*********************************************/
/*! exports provided: AdddataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdddataService", function() { return AdddataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdddataService = /** @class */ (function () {
    function AdddataService(http) {
        this.http = http;
    }
    AdddataService.prototype.setMenu = function (url, data) {
        //let _url:string = "/api/menus";
        console.log(url, data);
        var headers = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Content-type': 'application/json'
        });
        return this.http.put(url, data, { headers: headers });
    };
    AdddataService.prototype._errorHandler = function (error) {
        console.error('Error occured: ' + error);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error || 'some error on server occured');
    };
    AdddataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], AdddataService);
    return AdddataService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.registerUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/users/register', user, { headers: headers });
    };
    AuthenticationService.prototype.login = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/users/login', user, { headers: headers });
        //;
    };
    AuthenticationService.prototype.getProfile = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('/users/profile', { headers: headers });
    };
    AuthenticationService.prototype.isAdmin = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('/users/profile', { headers: headers });
    };
    AuthenticationService.prototype.loggedIn = function () {
        return localStorage.getItem('menuToken') ? true : false;
    };
    AuthenticationService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthenticationService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthenticationService.prototype.logout = function () {
        // this.authToken = null;
        // this.user = null;
        // localStorage.clear();
        var accessToken;
        if (localStorage.getItem('menuToken')) {
            accessToken = JSON.parse(localStorage.getItem('menuToken')).id;
        }
        console.log(accessToken);
        return this.http.post("/api/users/logout?access_token=" + accessToken, {});
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/getdata.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/getdata.service.ts ***!
  \*********************************************/
/*! exports provided: GetdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetdataService", function() { return GetdataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetdataService = /** @class */ (function () {
    function GetdataService(http) {
        this.http = http;
    }
    GetdataService.prototype.getMenu = function (url) {
        return this.http.get(url);
    };
    GetdataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], GetdataService);
    return GetdataService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Development\trafalgarparkmenu\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map