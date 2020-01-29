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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/apps/app-client/pages/dynamic-page/dynamic-page.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/apps/app-client/pages/dynamic-page/dynamic-page.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\r\n    <ng-container #viewContainerRef></ng-container>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/apps/app-client/pages/routable-components/ask-question/ask-question.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/apps/app-client/pages/routable-components/ask-question/ask-question.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\r\n    <div class=\"centered_div\">\r\n        <div>\r\n            <div>\r\n                <app-input-component type=\"action\" [textbox]=\"true\" width=\"400\" text=\"Deine Frage\"\r\n                    actionInputBinding=\"Action.SaveQuestion.Data.Text\">\r\n                </app-input-component>\r\n            </div>\r\n            <div>\r\n                <app-select-component width=\"400\" text=\"Jugendstunde\"\r\n                    outputValueBinding=\"Action.SaveQuestion.Data.Category\" listDataBinding=\"Data.JugendStunde\"\r\n                    showValues=\"Thema, Datum\"></app-select-component>\r\n            </div>\r\n            <div>\r\n                <app-action-button width=\"400\" text=\"Absenden\" actionBinding=\"SaveQuestion\">\r\n                </app-action-button>\r\n            </div>\r\n            <div style=\"float: right\">\r\n                <app-text-component opasityTime=\"80\" textMode=\"text\" icon=\"check\" dataInputBinding=\"Data.SaveSucces\" text=\"Deine Frage wurde gespeichert\"></app-text-component>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <app-action-button class=\"logoutButton\" text=\"Logout\" actionBinding=\"LogoutAction\">\r\n        </app-action-button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/apps/app-client/pages/routable-components/login/login.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/apps/app-client/pages/routable-components/login/login.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\r\n    <div class=\"centered_div\">\r\n        <app-input-component type=\"action\" text=\"Passwort\" actionInputBinding=\"Action.LoginAction.Password\">\r\n        </app-input-component>\r\n        <app-action-button text=\"Login\" actionBinding=\"LoginAction\"></app-action-button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/apps/app-client/pages/routable-components/show-questions/show-questions.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/apps/app-client/pages/routable-components/show-questions/show-questions.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-action-button class=\"logoutButton\" text=\"Logout\" actionBinding=\"LogoutAction\">\r\n</app-action-button>\r\n<app-data-table listDataBinding='Data.Question' showValues=\"text\"></app-data-table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/components/action-button/action-button.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/components/action-button/action-button.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button mat-button (click)=\"onClick()\">{{text}}</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/components/dataTable/dataTable.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/components/dataTable/dataTable.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table mat-table [dataSource]=\"tableDataSource\" class=\"full-width data-table mat-table\">\r\n\r\n    <ng-container *ngFor=\"let columnName of displayedColumns\" [matColumnDef]=\"columnName\">\r\n        <th mat-header-cell *matHeaderCellDef width=\"{{getColumnWidthByDisplayedColumn(columnName)}}\">\r\n            {{getHeaderNameByDisplayedColumn(columnName)}} </th>\r\n        <td mat-cell *matCellDef=\"let element\"width=\"{{getColumnWidthByDisplayedColumn(columnName)}}\"> {{element[columnName]}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/components/input/input.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/components/input/input.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field id=\"formField\">\r\n    <input *ngIf=\"!textbox\" matInput [placeholder]=\"text\" (input)=\"setInput($event.target.value)\" [value]=\"inputValue\">\r\n    <textarea *ngIf=\"textbox\" matInput [placeholder]=\"text\" (input)=\"setInput($event.target.value)\" [value]=\"inputValue\">\r\n    </textarea>\r\n</mat-form-field>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/components/select/select.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/components/select/select.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field id=\"formField\">\r\n  <mat-label>{{text}}</mat-label>\r\n  <mat-select (selectionChange)=\"onChange($event)\">\r\n    <mat-option *ngFor=\"let data of dataList\" [value]=\"data.ID\">\r\n      <div fxLayout=\"row\">\r\n        <div fxFlex=\"75\">{{getDataItemsAsString(data, 1)}}</div>\r\n        <div fxFlex=\"25\" style=\"text-align: right\"><div style=\"float: right\">&nbsp;&nbsp;&nbsp;&nbsp;{{getDataItemsAsString(data, 2)}}</div></div>\r\n      </div>\r\n    </mat-option>\r\n  </mat-select>\r\n</mat-form-field>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/components/text/text.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/components/text/text.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"app-text-component\">\r\n    <div *ngIf=\"inputValue.length > 0\" class=\"mat-typography\">\r\n        <div *ngIf=\"icon.length > 0\" class=\"show-icon\">\r\n            <mat-icon>{{icon}}</mat-icon>&nbsp;&nbsp;\r\n        </div>\r\n        <div class=\"show-text\">{{inputValue}}</div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/@bug-fisch/apps/app-client/pages/dynamic-page/dynamic-page.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/@bug-fisch/apps/app-client/pages/dynamic-page/dynamic-page.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  background-image: url('hintergrung.jpg');\n  background-repeat: no-repeat;\n  background-size: 100vw 100vh;\n  height: 100vh;\n  width: 100vw;\n  overflow: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AYnVnLWZpc2NoL2FwcHMvYXBwLWNsaWVudC9wYWdlcy9keW5hbWljLXBhZ2UvRDpcXEVpZ2VuZURhdGVpZW5cXERva3VtZW50ZVxcUHJvamVrdGVcXEJ1Z2Zpc2NoXFxGRS9zcmNcXEBidWctZmlzY2hcXGFwcHNcXGFwcC1jbGllbnRcXHBhZ2VzXFxkeW5hbWljLXBhZ2VcXGR5bmFtaWMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9AYnVnLWZpc2NoL2FwcHMvYXBwLWNsaWVudC9wYWdlcy9keW5hbWljLXBhZ2UvZHluYW1pYy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9AYnVnLWZpc2NoL2FwcHMvYXBwLWNsaWVudC9wYWdlcy9keW5hbWljLXBhZ2UvZHluYW1pYy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaGludGVyZ3J1bmcuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDB2dyAxMDB2aDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59IiwiLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaGludGVyZ3J1bmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3IDEwMHZoO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59Il19 */");

/***/ }),

/***/ "./src/@bug-fisch/apps/app-client/pages/dynamic-page/dynamic-page.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/@bug-fisch/apps/app-client/pages/dynamic-page/dynamic-page.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DynamicPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicPageComponent", function() { return DynamicPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_bug_fisch_services_action_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@bug-fisch/services/action.service */ "./src/@bug-fisch/services/action.service.ts");
/* harmony import */ var src_bug_fisch_model_action_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@bug-fisch/model/action.model */ "./src/@bug-fisch/model/action.model.ts");




let DynamicPageComponent = class DynamicPageComponent {
    constructor(componentFactoryResolver, changeDetectRef, actionService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectRef = changeDetectRef;
        this.actionService = actionService;
        this.standardComponents = [];
    }
    ngOnInit() {
        this.loadStadardComponents();
        this.actionService.routingSubject.subscribe(res => this.createComponentByName(res));
    }
    ngAfterViewInit() {
        let token = localStorage.getItem('Token');
        if (!token) {
            token = '';
        }
        let action = new src_bug_fisch_model_action_model__WEBPACK_IMPORTED_MODULE_3__["Action"];
        action.Type = 'InitializeSessionAction';
        action.Input = {};
        action.Name = '';
        action.Id = '';
        action.Input.Token = token;
        this.actionService.executeAction(action);
        this.changeDetectRef.detectChanges();
    }
    loadStadardComponents() {
        console.log(this.componentFactoryResolver);
        const moduleRefList = this.componentFactoryResolver['_ngModule']['_def']['modules']
            .find((x) => x.name === 'RoutableComponentsModule')['__annotations__'][0]['imports'];
        moduleRefList.forEach((moduleRef) => {
            if (moduleRef['__annotations__'] !== undefined) {
                if (moduleRef['__annotations__'][0] !== undefined) {
                    if (moduleRef['__annotations__'][0]['exports'] !== undefined) {
                        if (moduleRef['__annotations__'][0]['exports'][0] !== undefined) {
                            this.pushComponent(moduleRef['__annotations__'][0]['exports'][0]);
                        }
                    }
                }
            }
        });
    }
    pushComponent(factoryClass) {
        if (!this.factoryExists(factoryClass.name)) {
            return;
        }
        const factory = this.componentFactoryResolver.resolveComponentFactory(factoryClass);
        const inputs = factory.inputs.map((value) => {
            return value.propName;
        });
        const selector = factory.selector;
        this.standardComponents.push({
            componentName: factoryClass.name,
            inputs: inputs,
            factory: factory,
            factoryClass: factoryClass,
            selector: selector,
            innerHtml: '',
            style: null
        });
    }
    factoryExists(name) {
        return (Array.from(this.componentFactoryResolver['_factories'].values()).find((value) => (value.componentType.name === name)) !== undefined);
    }
    createComponentByName(componentName) {
        const component = this.standardComponents.find(c => c.componentName === componentName);
        this.viewContainerRef.clear();
        this.viewContainerRef.createComponent(component.factory);
        const element = document.getElementsByTagName(component.selector)[0];
        component.innerHtml = element.outerHTML;
        component.style = element.style;
        this.changeDetectRef.detectChanges();
    }
};
DynamicPageComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_bug_fisch_services_action_service__WEBPACK_IMPORTED_MODULE_2__["ActionService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('viewContainerRef', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: false })
], DynamicPageComponent.prototype, "viewContainerRef", void 0);
DynamicPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dynamic-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dynamic-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/apps/app-client/pages/dynamic-page/dynamic-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dynamic-page.component.scss */ "./src/@bug-fisch/apps/app-client/pages/dynamic-page/dynamic-page.component.scss")).default]
    })
], DynamicPageComponent);



/***/ }),

/***/ "./src/@bug-fisch/apps/app-client/pages/dynamic-page/dynamic-page.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/@bug-fisch/apps/app-client/pages/dynamic-page/dynamic-page.module.ts ***!
  \**********************************************************************************/
/*! exports provided: DynamicPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicPageModule", function() { return DynamicPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dynamic_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-page.component */ "./src/@bug-fisch/apps/app-client/pages/dynamic-page/dynamic-page.component.ts");
/* harmony import */ var _routable_components_routable_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routable-components/routable-components.module */ "./src/@bug-fisch/apps/app-client/pages/routable-components/routable-components.module.ts");




let DynamicPageModule = class DynamicPageModule {
};
DynamicPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _routable_components_routable_components_module__WEBPACK_IMPORTED_MODULE_3__["RoutableComponentsModule"]
        ],
        declarations: [
            _dynamic_page_component__WEBPACK_IMPORTED_MODULE_2__["DynamicPageComponent"]
        ]
    })
], DynamicPageModule);



/***/ }),

/***/ "./src/@bug-fisch/apps/app-client/pages/routable-components/ask-question/ask-question.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/@bug-fisch/apps/app-client/pages/routable-components/ask-question/ask-question.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".centered_div {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.content {\n  height: 100%;\n  width: 100%;\n}\n\n.logoutButton {\n  position: absolute;\n  right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AYnVnLWZpc2NoL2FwcHMvYXBwLWNsaWVudC9wYWdlcy9yb3V0YWJsZS1jb21wb25lbnRzL2Fzay1xdWVzdGlvbi9EOlxcRWlnZW5lRGF0ZWllblxcRG9rdW1lbnRlXFxQcm9qZWt0ZVxcQnVnZmlzY2hcXEZFL3NyY1xcQGJ1Zy1maXNjaFxcYXBwc1xcYXBwLWNsaWVudFxccGFnZXNcXHJvdXRhYmxlLWNvbXBvbmVudHNcXGFzay1xdWVzdGlvblxcYXNrLXF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL0BidWctZmlzY2gvYXBwcy9hcHAtY2xpZW50L3BhZ2VzL3JvdXRhYmxlLWNvbXBvbmVudHMvYXNrLXF1ZXN0aW9uL2Fzay1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL0BidWctZmlzY2gvYXBwcy9hcHAtY2xpZW50L3BhZ2VzL3JvdXRhYmxlLWNvbXBvbmVudHMvYXNrLXF1ZXN0aW9uL2Fzay1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJlZF9kaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAgNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvZ291dEJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTVweDtcclxufSIsIi5jZW50ZXJlZF9kaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dvdXRCdXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/@bug-fisch/apps/app-client/pages/routable-components/ask-question/ask-question.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/@bug-fisch/apps/app-client/pages/routable-components/ask-question/ask-question.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AskQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskQuestionComponent", function() { return AskQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AskQuestionComponent = class AskQuestionComponent {
    constructor() {
    }
};
AskQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ask-question',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ask-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/apps/app-client/pages/routable-components/ask-question/ask-question.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ask-question.component.scss */ "./src/@bug-fisch/apps/app-client/pages/routable-components/ask-question/ask-question.component.scss")).default]
    })
], AskQuestionComponent);



/***/ }),

/***/ "./src/@bug-fisch/apps/app-client/pages/routable-components/ask-question/ask-question.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/@bug-fisch/apps/app-client/pages/routable-components/ask-question/ask-question.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: AskQuestionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskQuestionModule", function() { return AskQuestionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ask_question_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ask-question.component */ "./src/@bug-fisch/apps/app-client/pages/routable-components/ask-question/ask-question.component.ts");
/* harmony import */ var src_bug_fisch_bug_fisch_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@bug-fisch/bug-fisch.shared.module */ "./src/@bug-fisch/bug-fisch.shared.module.ts");
/* harmony import */ var src_bug_fisch_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@bug-fisch/components/components.module */ "./src/@bug-fisch/components/components.module.ts");





let AskQuestionModule = class AskQuestionModule {
};
AskQuestionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_bug_fisch_bug_fisch_shared_module__WEBPACK_IMPORTED_MODULE_3__["BugFischSharedModule"],
            src_bug_fisch_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]
        ],
        declarations: [
            _ask_question_component__WEBPACK_IMPORTED_MODULE_2__["AskQuestionComponent"]
        ],
        exports: [
            _ask_question_component__WEBPACK_IMPORTED_MODULE_2__["AskQuestionComponent"]
        ],
        providers: [
            _ask_question_component__WEBPACK_IMPORTED_MODULE_2__["AskQuestionComponent"]
        ],
        entryComponents: [
            _ask_question_component__WEBPACK_IMPORTED_MODULE_2__["AskQuestionComponent"]
        ]
    })
], AskQuestionModule);



/***/ }),

/***/ "./src/@bug-fisch/apps/app-client/pages/routable-components/login/login.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/@bug-fisch/apps/app-client/pages/routable-components/login/login.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".centered_div {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.content {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AYnVnLWZpc2NoL2FwcHMvYXBwLWNsaWVudC9wYWdlcy9yb3V0YWJsZS1jb21wb25lbnRzL2xvZ2luL0Q6XFxFaWdlbmVEYXRlaWVuXFxEb2t1bWVudGVcXFByb2pla3RlXFxCdWdmaXNjaFxcRkUvc3JjXFxAYnVnLWZpc2NoXFxhcHBzXFxhcHAtY2xpZW50XFxwYWdlc1xccm91dGFibGUtY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL0BidWctZmlzY2gvYXBwcy9hcHAtY2xpZW50L3BhZ2VzL3JvdXRhYmxlLWNvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvQGJ1Zy1maXNjaC9hcHBzL2FwcC1jbGllbnQvcGFnZXMvcm91dGFibGUtY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJlZF9kaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAgNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSIsIi5jZW50ZXJlZF9kaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/@bug-fisch/apps/app-client/pages/routable-components/login/login.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/@bug-fisch/apps/app-client/pages/routable-components/login/login.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_bug_fisch_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@bug-fisch/services/data.service */ "./src/@bug-fisch/services/data.service.ts");



let LoginComponent = class LoginComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        this.dataService.data = [];
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_bug_fisch_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line:component-selector
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/apps/app-client/pages/routable-components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/@bug-fisch/apps/app-client/pages/routable-components/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/@bug-fisch/apps/app-client/pages/routable-components/login/login.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/@bug-fisch/apps/app-client/pages/routable-components/login/login.module.ts ***!
  \****************************************************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/@bug-fisch/apps/app-client/pages/routable-components/login/login.component.ts");
/* harmony import */ var src_bug_fisch_bug_fisch_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@bug-fisch/bug-fisch.shared.module */ "./src/@bug-fisch/bug-fisch.shared.module.ts");
/* harmony import */ var src_bug_fisch_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@bug-fisch/components/components.module */ "./src/@bug-fisch/components/components.module.ts");





let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_bug_fisch_bug_fisch_shared_module__WEBPACK_IMPORTED_MODULE_3__["BugFischSharedModule"],
            src_bug_fisch_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]
        ],
        declarations: [
            _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
        ],
        exports: [
            _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
        ],
        providers: [
            _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
        ],
        entryComponents: [
            _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
        ]
    })
], LoginModule);



/***/ }),

/***/ "./src/@bug-fisch/apps/app-client/pages/routable-components/routable-components.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/@bug-fisch/apps/app-client/pages/routable-components/routable-components.module.ts ***!
  \************************************************************************************************/
/*! exports provided: RoutableComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutableComponentsModule", function() { return RoutableComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.module */ "./src/@bug-fisch/apps/app-client/pages/routable-components/login/login.module.ts");
/* harmony import */ var _ask_question_ask_question_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ask-question/ask-question.module */ "./src/@bug-fisch/apps/app-client/pages/routable-components/ask-question/ask-question.module.ts");
/* harmony import */ var _show_questions_show_questions_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show-questions/show-questions.module */ "./src/@bug-fisch/apps/app-client/pages/routable-components/show-questions/show-questions.module.ts");





let RoutableComponentsModule = class RoutableComponentsModule {
};
RoutableComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _ask_question_ask_question_module__WEBPACK_IMPORTED_MODULE_3__["AskQuestionModule"],
            _login_login_module__WEBPACK_IMPORTED_MODULE_2__["LoginModule"],
            _show_questions_show_questions_module__WEBPACK_IMPORTED_MODULE_4__["ShowQuestionsModule"]
        ]
    })
], RoutableComponentsModule);



/***/ }),

/***/ "./src/@bug-fisch/apps/app-client/pages/routable-components/show-questions/show-questions.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/@bug-fisch/apps/app-client/pages/routable-components/show-questions/show-questions.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logoutButton {\n  position: absolute;\n  right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AYnVnLWZpc2NoL2FwcHMvYXBwLWNsaWVudC9wYWdlcy9yb3V0YWJsZS1jb21wb25lbnRzL3Nob3ctcXVlc3Rpb25zL0Q6XFxFaWdlbmVEYXRlaWVuXFxEb2t1bWVudGVcXFByb2pla3RlXFxCdWdmaXNjaFxcRkUvc3JjXFxAYnVnLWZpc2NoXFxhcHBzXFxhcHAtY2xpZW50XFxwYWdlc1xccm91dGFibGUtY29tcG9uZW50c1xcc2hvdy1xdWVzdGlvbnNcXHNob3ctcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL0BidWctZmlzY2gvYXBwcy9hcHAtY2xpZW50L3BhZ2VzL3JvdXRhYmxlLWNvbXBvbmVudHMvc2hvdy1xdWVzdGlvbnMvc2hvdy1xdWVzdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvQGJ1Zy1maXNjaC9hcHBzL2FwcC1jbGllbnQvcGFnZXMvcm91dGFibGUtY29tcG9uZW50cy9zaG93LXF1ZXN0aW9ucy9zaG93LXF1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvdXRCdXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbn0iLCIubG9nb3V0QnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/@bug-fisch/apps/app-client/pages/routable-components/show-questions/show-questions.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/@bug-fisch/apps/app-client/pages/routable-components/show-questions/show-questions.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ShowQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowQuestionsComponent", function() { return ShowQuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShowQuestionsComponent = class ShowQuestionsComponent {
    constructor() {
    }
};
ShowQuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-questions',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./show-questions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/apps/app-client/pages/routable-components/show-questions/show-questions.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./show-questions.component.scss */ "./src/@bug-fisch/apps/app-client/pages/routable-components/show-questions/show-questions.component.scss")).default]
    })
], ShowQuestionsComponent);



/***/ }),

/***/ "./src/@bug-fisch/apps/app-client/pages/routable-components/show-questions/show-questions.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/@bug-fisch/apps/app-client/pages/routable-components/show-questions/show-questions.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ShowQuestionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowQuestionsModule", function() { return ShowQuestionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_bug_fisch_bug_fisch_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@bug-fisch/bug-fisch.shared.module */ "./src/@bug-fisch/bug-fisch.shared.module.ts");
/* harmony import */ var src_bug_fisch_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@bug-fisch/components/components.module */ "./src/@bug-fisch/components/components.module.ts");
/* harmony import */ var _show_questions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show-questions.component */ "./src/@bug-fisch/apps/app-client/pages/routable-components/show-questions/show-questions.component.ts");





let ShowQuestionsModule = class ShowQuestionsModule {
};
ShowQuestionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_bug_fisch_bug_fisch_shared_module__WEBPACK_IMPORTED_MODULE_2__["BugFischSharedModule"],
            src_bug_fisch_components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"]
        ],
        declarations: [
            _show_questions_component__WEBPACK_IMPORTED_MODULE_4__["ShowQuestionsComponent"]
        ],
        exports: [
            _show_questions_component__WEBPACK_IMPORTED_MODULE_4__["ShowQuestionsComponent"]
        ],
        providers: [
            _show_questions_component__WEBPACK_IMPORTED_MODULE_4__["ShowQuestionsComponent"]
        ],
        entryComponents: [
            _show_questions_component__WEBPACK_IMPORTED_MODULE_4__["ShowQuestionsComponent"]
        ]
    })
], ShowQuestionsModule);



/***/ }),

/***/ "./src/@bug-fisch/bug-fisch.shared.module.ts":
/*!***************************************************!*\
  !*** ./src/@bug-fisch/bug-fisch.shared.module.ts ***!
  \***************************************************/
/*! exports provided: BugFischSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BugFischSharedModule", function() { return BugFischSharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");




let BugFischSharedModule = class BugFischSharedModule {
};
BugFischSharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]
        ]
    })
], BugFischSharedModule);



/***/ }),

/***/ "./src/@bug-fisch/components/action-button/action-button.component.scss":
/*!******************************************************************************!*\
  !*** ./src/@bug-fisch/components/action-button/action-button.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvQGJ1Zy1maXNjaC9jb21wb25lbnRzL2FjdGlvbi1idXR0b24vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/@bug-fisch/components/action-button/action-button.component.ts":
/*!****************************************************************************!*\
  !*** ./src/@bug-fisch/components/action-button/action-button.component.ts ***!
  \****************************************************************************/
/*! exports provided: ActionButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionButtonComponent", function() { return ActionButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_bug_fisch_services_action_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@bug-fisch/services/action.service */ "./src/@bug-fisch/services/action.service.ts");



let ActionButtonComponent = class ActionButtonComponent {
    constructor(actionService) {
        this.actionService = actionService;
        this.actionBinding = ' ';
        this.text = '';
        this.width = '';
    }
    onClick() {
        this.actionService.runAction(this.actionBinding);
    }
    ngAfterViewInit() {
        document.getElementsByClassName('mat-button')[0].style.minWidth = this.width + 'px';
    }
};
ActionButtonComponent.ctorParameters = () => [
    { type: src_bug_fisch_services_action_service__WEBPACK_IMPORTED_MODULE_2__["ActionService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ActionButtonComponent.prototype, "actionBinding", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ActionButtonComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ActionButtonComponent.prototype, "width", void 0);
ActionButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-action-button',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./action-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/components/action-button/action-button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./action-button.component.scss */ "./src/@bug-fisch/components/action-button/action-button.component.scss")).default]
    })
], ActionButtonComponent);



/***/ }),

/***/ "./src/@bug-fisch/components/action-button/action-button.module.ts":
/*!*************************************************************************!*\
  !*** ./src/@bug-fisch/components/action-button/action-button.module.ts ***!
  \*************************************************************************/
/*! exports provided: ActionButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionButtonModule", function() { return ActionButtonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _action_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-button.component */ "./src/@bug-fisch/components/action-button/action-button.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let ActionButtonModule = class ActionButtonModule {
};
ActionButtonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]
        ],
        declarations: [
            _action_button_component__WEBPACK_IMPORTED_MODULE_2__["ActionButtonComponent"]
        ],
        exports: [
            _action_button_component__WEBPACK_IMPORTED_MODULE_2__["ActionButtonComponent"]
        ]
    })
], ActionButtonModule);



/***/ }),

/***/ "./src/@bug-fisch/components/components.module.ts":
/*!********************************************************!*\
  !*** ./src/@bug-fisch/components/components.module.ts ***!
  \********************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _input_input_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input/input.module */ "./src/@bug-fisch/components/input/input.module.ts");
/* harmony import */ var _action_button_action_button_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action-button/action-button.module */ "./src/@bug-fisch/components/action-button/action-button.module.ts");
/* harmony import */ var _select_select_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select/select.module */ "./src/@bug-fisch/components/select/select.module.ts");
/* harmony import */ var _dataTable_dataTable_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dataTable/dataTable.module */ "./src/@bug-fisch/components/dataTable/dataTable.module.ts");
/* harmony import */ var _text_text_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./text/text.module */ "./src/@bug-fisch/components/text/text.module.ts");







let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _input_input_module__WEBPACK_IMPORTED_MODULE_2__["InputModule"],
            _action_button_action_button_module__WEBPACK_IMPORTED_MODULE_3__["ActionButtonModule"],
            _select_select_module__WEBPACK_IMPORTED_MODULE_4__["SelectModule"],
            _dataTable_dataTable_module__WEBPACK_IMPORTED_MODULE_5__["DataTableModule"],
            _text_text_module__WEBPACK_IMPORTED_MODULE_6__["TextModule"]
        ],
        exports: [
            _input_input_module__WEBPACK_IMPORTED_MODULE_2__["InputModule"],
            _action_button_action_button_module__WEBPACK_IMPORTED_MODULE_3__["ActionButtonModule"],
            _select_select_module__WEBPACK_IMPORTED_MODULE_4__["SelectModule"],
            _dataTable_dataTable_module__WEBPACK_IMPORTED_MODULE_5__["DataTableModule"],
            _text_text_module__WEBPACK_IMPORTED_MODULE_6__["TextModule"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/@bug-fisch/components/dataTable/dataTable.component.scss":
/*!**********************************************************************!*\
  !*** ./src/@bug-fisch/components/dataTable/dataTable.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width {\n  width: calc(100% - 100px);\n}\n\n.data-table {\n  margin: 50px;\n}\n\n.mat-table {\n  overflow-x: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AYnVnLWZpc2NoL2NvbXBvbmVudHMvZGF0YVRhYmxlL0Q6XFxFaWdlbmVEYXRlaWVuXFxEb2t1bWVudGVcXFByb2pla3RlXFxCdWdmaXNjaFxcRkUvc3JjXFxAYnVnLWZpc2NoXFxjb21wb25lbnRzXFxkYXRhVGFibGVcXGRhdGFUYWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9AYnVnLWZpc2NoL2NvbXBvbmVudHMvZGF0YVRhYmxlL2RhdGFUYWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9AYnVnLWZpc2NoL2NvbXBvbmVudHMvZGF0YVRhYmxlL2RhdGFUYWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xyXG59XHJcblxyXG4uZGF0YS10YWJsZSB7XHJcbiAgbWFyZ2luOiA1MHB4O1xyXG59XHJcblxyXG4ubWF0LXRhYmxlIHtcclxuICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbn1cclxuIiwiLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xufVxuXG4uZGF0YS10YWJsZSB7XG4gIG1hcmdpbjogNTBweDtcbn1cblxuLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbn0iXX0= */");

/***/ }),

/***/ "./src/@bug-fisch/components/dataTable/dataTable.component.ts":
/*!********************************************************************!*\
  !*** ./src/@bug-fisch/components/dataTable/dataTable.component.ts ***!
  \********************************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_bug_fisch_services_action_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@bug-fisch/services/action.service */ "./src/@bug-fisch/services/action.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let DataTableComponent = class DataTableComponent {
    constructor(actionService) {
        this.actionService = actionService;
        this.listDataBinding = '';
        this.columnNames = ['Frage', 'Thema', 'Datum'];
        this.columnDataBindings = ['Text', 'Category.Thema', 'Category.Datum'];
        this.columnWidth = ['75', '20', '5'];
        this.dataList = [];
        this.flatTableDataList = [];
        this.tableDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.flatTableDataList);
        // displayedColumns: string[] = ['Text', 'Thema', 'Datum'];
        this.displayedColumns = [];
    }
    ngOnInit() {
        let data = this.actionService.getInputValueByBinding(this.listDataBinding);
        let i = 0;
        while (data[i]) {
            this.dataList.push(data[i]);
            i++;
        }
        this.createFlatTableDataList();
        this.getDispayedColumns();
    }
    createFlatTableDataList() {
        this.dataList.forEach(dataValue => {
            let newRowValue = {};
            this.columnDataBindings.forEach(binding => {
                let flatValue = dataValue;
                let flatValueName = '';
                binding.split('.').forEach(bindingValue => {
                    flatValueName = bindingValue;
                    flatValue = flatValue[bindingValue];
                });
                newRowValue[flatValueName] = flatValue;
            });
            this.flatTableDataList.push(newRowValue);
        });
    }
    getDispayedColumns() {
        this.columnDataBindings.forEach(binding => {
            let columnName = '';
            binding.split('.').forEach(bindingValue => {
                columnName = bindingValue;
            });
            this.displayedColumns.push(columnName);
        });
    }
    getHeaderNameByDisplayedColumn(columnName) {
        return this.columnNames[this.displayedColumns.indexOf(columnName)];
    }
    getColumnWidthByDisplayedColumn(columnName) {
        if (this.columnWidth.length == 0) {
            return (100 / this.displayedColumns.length) + '%;';
        }
        else {
            return this.columnWidth[this.displayedColumns.indexOf(columnName)] + '%;';
        }
    }
};
DataTableComponent.ctorParameters = () => [
    { type: src_bug_fisch_services_action_service__WEBPACK_IMPORTED_MODULE_2__["ActionService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableComponent.prototype, "listDataBinding", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableComponent.prototype, "columnNames", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableComponent.prototype, "columnDataBindings", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableComponent.prototype, "columnWidth", void 0);
DataTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-data-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dataTable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/components/dataTable/dataTable.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dataTable.component.scss */ "./src/@bug-fisch/components/dataTable/dataTable.component.scss")).default]
    })
], DataTableComponent);



/***/ }),

/***/ "./src/@bug-fisch/components/dataTable/dataTable.module.ts":
/*!*****************************************************************!*\
  !*** ./src/@bug-fisch/components/dataTable/dataTable.module.ts ***!
  \*****************************************************************/
/*! exports provided: DataTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableModule", function() { return DataTableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _dataTable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataTable.component */ "./src/@bug-fisch/components/dataTable/dataTable.component.ts");
/* harmony import */ var src_bug_fisch_bug_fisch_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@bug-fisch/bug-fisch.shared.module */ "./src/@bug-fisch/bug-fisch.shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");







let DataTableModule = class DataTableModule {
};
DataTableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            src_bug_fisch_bug_fisch_shared_module__WEBPACK_IMPORTED_MODULE_5__["BugFischSharedModule"]
        ],
        declarations: [
            _dataTable_component__WEBPACK_IMPORTED_MODULE_4__["DataTableComponent"]
        ],
        exports: [
            _dataTable_component__WEBPACK_IMPORTED_MODULE_4__["DataTableComponent"]
        ]
    })
], DataTableModule);



/***/ }),

/***/ "./src/@bug-fisch/components/input/input.component.scss":
/*!**************************************************************!*\
  !*** ./src/@bug-fisch/components/input/input.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvQGJ1Zy1maXNjaC9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/@bug-fisch/components/input/input.component.ts":
/*!************************************************************!*\
  !*** ./src/@bug-fisch/components/input/input.component.ts ***!
  \************************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_bug_fisch_services_action_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@bug-fisch/services/action.service */ "./src/@bug-fisch/services/action.service.ts");
/* harmony import */ var src_bug_fisch_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@bug-fisch/services/data.service */ "./src/@bug-fisch/services/data.service.ts");




let InputComponent = class InputComponent {
    constructor(actionService, dataService) {
        this.actionService = actionService;
        this.dataService = dataService;
        this.actionInputBinding = '';
        this.text = '';
        this.type = '';
        this.width = '';
        this.textbox = false;
        this.actionName = '';
        this.actionInput = '';
        this.inputValue = '';
    }
    ngAfterViewInit() {
        if (this.width === '')
            return;
        document.getElementById('formField').style.width = this.width + 'px';
    }
    ngOnInit() {
        this.inputValue = this.actionService.getInputValueByBinding(this.actionInputBinding);
    }
    setInput(input) {
        this.inputValue = input;
        this.actionService.setInputValueByBinding(this.actionInputBinding, input);
    }
};
InputComponent.ctorParameters = () => [
    { type: src_bug_fisch_services_action_service__WEBPACK_IMPORTED_MODULE_2__["ActionService"] },
    { type: src_bug_fisch_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InputComponent.prototype, "actionInputBinding", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InputComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InputComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InputComponent.prototype, "width", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InputComponent.prototype, "textbox", void 0);
InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/components/input/input.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./input.component.scss */ "./src/@bug-fisch/components/input/input.component.scss")).default]
    })
], InputComponent);



/***/ }),

/***/ "./src/@bug-fisch/components/input/input.module.ts":
/*!*********************************************************!*\
  !*** ./src/@bug-fisch/components/input/input.module.ts ***!
  \*********************************************************/
/*! exports provided: InputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputModule", function() { return InputModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input.component */ "./src/@bug-fisch/components/input/input.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var src_bug_fisch_bug_fisch_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@bug-fisch/bug-fisch.shared.module */ "./src/@bug-fisch/bug-fisch.shared.module.ts");






let InputModule = class InputModule {
};
InputModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            src_bug_fisch_bug_fisch_shared_module__WEBPACK_IMPORTED_MODULE_5__["BugFischSharedModule"]
        ],
        declarations: [
            _input_component__WEBPACK_IMPORTED_MODULE_2__["InputComponent"]
        ],
        exports: [
            _input_component__WEBPACK_IMPORTED_MODULE_2__["InputComponent"]
        ]
    })
], InputModule);



/***/ }),

/***/ "./src/@bug-fisch/components/select/select.component.scss":
/*!****************************************************************!*\
  !*** ./src/@bug-fisch/components/select/select.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvQGJ1Zy1maXNjaC9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/@bug-fisch/components/select/select.component.ts":
/*!**************************************************************!*\
  !*** ./src/@bug-fisch/components/select/select.component.ts ***!
  \**************************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_bug_fisch_services_action_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@bug-fisch/services/action.service */ "./src/@bug-fisch/services/action.service.ts");



let SelectComponent = class SelectComponent {
    constructor(actionService) {
        this.actionService = actionService;
        this.listDataBinding = '';
        this.outputValueBinding = '';
        this.showValues = '';
        this.text = '';
        this.width = '';
        this.selectedValue = '';
        this.dataList = [];
    }
    ngOnInit() {
        let data = this.actionService.getInputValueByBinding(this.listDataBinding);
        let i = 0;
        while (data[i]) {
            this.dataList.push(data[i]);
            i++;
        }
    }
    ngAfterViewInit() {
        if (this.width === '')
            return;
        document.getElementsByClassName('mat-form-field-infix')[1].style.width = this.width + 'px';
    }
    setInput(input) {
    }
    getDataItemsAsString(data, number) {
        return data[this.showValues.split(',')[number - 1].replace(' ', '')];
    }
    onChange(event) {
        this.actionService.setInputValueByBinding(this.outputValueBinding, '' + event.value);
    }
};
SelectComponent.ctorParameters = () => [
    { type: src_bug_fisch_services_action_service__WEBPACK_IMPORTED_MODULE_2__["ActionService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectComponent.prototype, "listDataBinding", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectComponent.prototype, "outputValueBinding", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectComponent.prototype, "showValues", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectComponent.prototype, "width", void 0);
SelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/components/select/select.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select.component.scss */ "./src/@bug-fisch/components/select/select.component.scss")).default]
    })
], SelectComponent);



/***/ }),

/***/ "./src/@bug-fisch/components/select/select.module.ts":
/*!***********************************************************!*\
  !*** ./src/@bug-fisch/components/select/select.module.ts ***!
  \***********************************************************/
/*! exports provided: SelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectModule", function() { return SelectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select.component */ "./src/@bug-fisch/components/select/select.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_bug_fisch_bug_fisch_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/@bug-fisch/bug-fisch.shared.module */ "./src/@bug-fisch/bug-fisch.shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let SelectModule = class SelectModule {
};
SelectModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_bug_fisch_bug_fisch_shared_module__WEBPACK_IMPORTED_MODULE_6__["BugFischSharedModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        ],
        declarations: [
            _select_component__WEBPACK_IMPORTED_MODULE_4__["SelectComponent"]
        ],
        exports: [
            _select_component__WEBPACK_IMPORTED_MODULE_4__["SelectComponent"]
        ]
    })
], SelectModule);



/***/ }),

/***/ "./src/@bug-fisch/components/text/text.component.scss":
/*!************************************************************!*\
  !*** ./src/@bug-fisch/components/text/text.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".show-text {\n  float: left;\n}\n\n.show-icon {\n  float: left;\n}\n\n#app-text-component {\n  color: darkolivegreen;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AYnVnLWZpc2NoL2NvbXBvbmVudHMvdGV4dC9EOlxcRWlnZW5lRGF0ZWllblxcRG9rdW1lbnRlXFxQcm9qZWt0ZVxcQnVnZmlzY2hcXEZFL3NyY1xcQGJ1Zy1maXNjaFxcY29tcG9uZW50c1xcdGV4dFxcdGV4dC5jb21wb25lbnQuc2NzcyIsInNyYy9AYnVnLWZpc2NoL2NvbXBvbmVudHMvdGV4dC90ZXh0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvQGJ1Zy1maXNjaC9jb21wb25lbnRzL3RleHQvdGV4dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93LXRleHR7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnNob3ctaWNvbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI2FwcC10ZXh0LWNvbXBvbmVudHtcclxuICAgIGNvbG9yOiBkYXJrb2xpdmVncmVlbjtcclxufSIsIi5zaG93LXRleHQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnNob3ctaWNvbiB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4jYXBwLXRleHQtY29tcG9uZW50IHtcbiAgY29sb3I6IGRhcmtvbGl2ZWdyZWVuO1xufSJdfQ== */");

/***/ }),

/***/ "./src/@bug-fisch/components/text/text.component.ts":
/*!**********************************************************!*\
  !*** ./src/@bug-fisch/components/text/text.component.ts ***!
  \**********************************************************/
/*! exports provided: TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return TextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_bug_fisch_services_action_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@bug-fisch/services/action.service */ "./src/@bug-fisch/services/action.service.ts");
/* harmony import */ var src_bug_fisch_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@bug-fisch/services/data.service */ "./src/@bug-fisch/services/data.service.ts");




let TextComponent = class TextComponent {
    constructor(actionService, dataService) {
        this.actionService = actionService;
        this.dataService = dataService;
        this.dataInputBinding = '';
        this.text = '';
        this.width = '';
        this.textMode = '';
        this.icon = '';
        this.opasityTime = '';
        this.inputValue = '';
        this.timeLeft = 60;
        this.opasity = 99;
    }
    ngAfterViewInit() {
        if (this.width === '')
            return;
        document.getElementById('formField').style.width = this.width + 'px';
    }
    ngOnInit() {
        this.dataService.getObservible('SaveSucces').subscribe(() => {
            this.solveBinding();
        });
        this.solveBinding();
    }
    solveBinding() {
        let dataValue = this.actionService.getInputValueByBinding(this.dataInputBinding);
        this.inputValue = this.textMode == 'text' && dataValue.length > 0 ? this.text : dataValue;
        if (this.opasityTime.length > 0 && this.inputValue.length > 0) {
            this.startTimer();
        }
    }
    startTimer() {
        this.timeLeft = parseInt(this.opasityTime);
        this.opasity = 99;
        this.interval = setInterval(() => {
            if (this.timeLeft > 0) {
                this.timeLeft--;
            }
            else {
                this.opasity = 0;
                this.pauseTimer();
            }
            if (this.opasity > 0) {
                if (this.opasity > 10) {
                    document.getElementById('app-text-component').style.opacity = '0.' + Math.floor(this.opasity);
                }
                else {
                    document.getElementById('app-text-component').style.opacity = '0.0' + Math.floor(this.opasity);
                }
                this.opasity = this.opasity - 99 / parseInt(this.opasityTime);
            }
            else {
                document.getElementById('app-text-component').style.opacity = '0.0';
            }
        }, 100);
    }
    pauseTimer() {
        clearInterval(this.interval);
    }
};
TextComponent.ctorParameters = () => [
    { type: src_bug_fisch_services_action_service__WEBPACK_IMPORTED_MODULE_2__["ActionService"] },
    { type: src_bug_fisch_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextComponent.prototype, "dataInputBinding", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextComponent.prototype, "width", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextComponent.prototype, "textMode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextComponent.prototype, "icon", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextComponent.prototype, "opasityTime", void 0);
TextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-text-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./text.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@bug-fisch/components/text/text.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./text.component.scss */ "./src/@bug-fisch/components/text/text.component.scss")).default]
    })
], TextComponent);



/***/ }),

/***/ "./src/@bug-fisch/components/text/text.module.ts":
/*!*******************************************************!*\
  !*** ./src/@bug-fisch/components/text/text.module.ts ***!
  \*******************************************************/
/*! exports provided: TextModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextModule", function() { return TextModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var src_bug_fisch_bug_fisch_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@bug-fisch/bug-fisch.shared.module */ "./src/@bug-fisch/bug-fisch.shared.module.ts");
/* harmony import */ var _text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text.component */ "./src/@bug-fisch/components/text/text.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");







let TextModule = class TextModule {
};
TextModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            src_bug_fisch_bug_fisch_shared_module__WEBPACK_IMPORTED_MODULE_4__["BugFischSharedModule"]
        ],
        declarations: [
            _text_component__WEBPACK_IMPORTED_MODULE_5__["TextComponent"]
        ],
        exports: [
            _text_component__WEBPACK_IMPORTED_MODULE_5__["TextComponent"]
        ]
    })
], TextModule);



/***/ }),

/***/ "./src/@bug-fisch/interceptor/auth.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/@bug-fisch/interceptor/auth.interceptor.ts ***!
  \********************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm2015/add/observable/of.js");
/* harmony import */ var rxjs_add_observable_empty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/empty */ "./node_modules/rxjs-compat/_esm2015/add/observable/empty.js");
/* harmony import */ var rxjs_add_operator_retry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/retry */ "./node_modules/rxjs-compat/_esm2015/add/operator/retry.js");





 // don't forget the imports
let AuthInterceptor = class AuthInterceptor {
    intercept(request, next) {
        return next.handle(request);
    }
};
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "./src/@bug-fisch/model/action.model.ts":
/*!**********************************************!*\
  !*** ./src/@bug-fisch/model/action.model.ts ***!
  \**********************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Action {
}


/***/ }),

/***/ "./src/@bug-fisch/services/action.service.ts":
/*!***************************************************!*\
  !*** ./src/@bug-fisch/services/action.service.ts ***!
  \***************************************************/
/*! exports provided: ActionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionService", function() { return ActionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.service */ "./src/@bug-fisch/services/rest.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/@bug-fisch/services/data.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let ActionService = class ActionService {
    constructor(_rest, dataService) {
        this._rest = _rest;
        this.dataService = dataService;
        this.routingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.actions = [];
    }
    executeAction(action) {
        this._rest.executeAction(action).subscribe(res => {
            let serverActions = res.Actions.filter(action => {
                return action.Execute === 'Server';
            });
            this.actions = serverActions;
            let clientActions = res.Actions.filter(action => {
                return action.Execute === 'Client';
            });
            clientActions.forEach(action => {
                this.handleAction(action);
            });
        });
    }
    updateActionInput(name, inputName, data) {
        const action = this.actions.find(a => a.Name === name);
        if (!action) {
            return;
        }
        action.Input[inputName] = data;
    }
    getInputValue(actionName, inputName) {
        return this.actions.find(a => a.Name === actionName).Input[inputName];
    }
    getInputValueByBinding(binding) {
        let type = binding.split('.')[0];
        if (type === 'Action') {
            return this.getActionBinding(binding);
        }
        return this.dataService.getDataBinding(binding);
    }
    getActionBinding(binding) {
        let name = binding.split('.')[1];
        let object = this.actions.find(a => a.Name === name).Input;
        for (let counter = 2; counter < binding.split('.').length; counter++) {
            object = object[binding.split('.')[counter]];
        }
        return object;
    }
    setInputValueByBinding(binding, input) {
        let type = binding.split('.')[0];
        if (type === 'Action') {
            this.setActionBindingValue(binding, input);
        }
    }
    setActionBindingValue(binding, input) {
        let name = binding.split('.')[1];
        let object = this.actions.find(a => a.Name === name).Input;
        for (let counter = 2; counter < binding.split('.').length - 1; counter++) {
            object = object[binding.split('.')[counter]];
        }
        object[binding.split('.')[binding.split('.').length - 1]] = input;
    }
    runAction(actionName) {
        const action = this.actions.find(a => a.Name === actionName);
        this.executeAction(action);
    }
    handleAction(clientAction) {
        switch (clientAction.Type) {
            case 'DeleteActionInClientAction':
                break;
            case 'ChangeRouteClientAction':
                this.routingSubject.next(clientAction.Input.ComponentName);
                break;
            case 'SetDataClientAction':
                this.dataService.setData(clientAction.Input);
                break;
            case 'SetTokenClientAction':
                localStorage.setItem('Token', clientAction.Input.Token);
                break;
            case 'ClearDataClientActoin':
                this.dataService.data = [];
                break;
            default:
                break;
        }
    }
};
ActionService.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
ActionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ActionService);



/***/ }),

/***/ "./src/@bug-fisch/services/app-injector.service.ts":
/*!*********************************************************!*\
  !*** ./src/@bug-fisch/services/app-injector.service.ts ***!
  \*********************************************************/
/*! exports provided: AppInjector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInjector", function() { return AppInjector; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AppInjector {
    static setInjector(injector) {
        AppInjector.injector = injector;
    }
    static getInjector() {
        return AppInjector.injector;
    }
}


/***/ }),

/***/ "./src/@bug-fisch/services/data.service.ts":
/*!*************************************************!*\
  !*** ./src/@bug-fisch/services/data.service.ts ***!
  \*************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let DataService = class DataService {
    constructor() {
        this.data = [];
        this.subjectsWithDataPackageName = [];
    }
    setData(data) {
        this.data.push(data);
        let subjectWithDataPackageName = this.subjectsWithDataPackageName.find(ob => {
            return ob.dataPackageName == data.DataPackage.Name;
        });
        if (subjectWithDataPackageName) {
            subjectWithDataPackageName.obersvable.next();
        }
        else {
            this.subjectsWithDataPackageName.push(new SubjectWithDataPackageName(data.DataPackage.Name));
        }
    }
    getDataBinding(binding) {
        let name = binding.split('.')[1];
        let data = this.data.find(ob => {
            if (ob.DataPackage) {
                return ob.DataPackage.Name === name;
            }
            return false;
        });
        if (!data) {
            return '';
        }
        return data.DataPackage.Data;
    }
    getObservible(name) {
        let subjectWithDataPackageName = this.subjectsWithDataPackageName.find(ob => {
            return ob.dataPackageName == name;
        });
        if (subjectWithDataPackageName) {
            return subjectWithDataPackageName.obersvable.asObservable();
        }
        else {
            subjectWithDataPackageName = new SubjectWithDataPackageName(name);
            this.subjectsWithDataPackageName.push(subjectWithDataPackageName);
            return subjectWithDataPackageName.obersvable.asObservable();
        }
    }
};
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DataService);

class SubjectWithDataPackageName {
    constructor(name) {
        this.dataPackageName = name;
        this.obersvable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
}


/***/ }),

/***/ "./src/@bug-fisch/services/rest.service.ts":
/*!*************************************************!*\
  !*** ./src/@bug-fisch/services/rest.service.ts ***!
  \*************************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm2015/add/observable/of.js");
/* harmony import */ var rxjs_add_observable_empty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/observable/empty */ "./node_modules/rxjs-compat/_esm2015/add/observable/empty.js");
/* harmony import */ var rxjs_add_operator_retry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/retry */ "./node_modules/rxjs-compat/_esm2015/add/operator/retry.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data.service */ "./src/@bug-fisch/services/data.service.ts");











let RestService = class RestService {
    // baseUrl = 'http://localhost:8000/'
    constructor(_http, dataService) {
        this._http = _http;
        this.dataService = dataService;
        this.baseUrl = 'http://davidjugend.pythonanywhere.com/';
    }
    postRequest(path, body, headers = null, params = null) {
        body = { data: body };
        let res = this._http.post(this.baseUrl.concat(path), JSON.stringify(body), { 'headers': headers, 'params': params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(100000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
        return res;
    }
    getRequest(path, headers = null, params = null) {
        // run get request
        return this._http.get(this.baseUrl.concat(path), { 'headers': headers, 'params': params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(100000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    }
    deleteRequest(path, headers = null, params = null) {
        // run delete request
        return this._http.delete(this.baseUrl.concat(path), { 'headers': headers, 'params': params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(100000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    }
    putRequest(path, body, headers = null, params = null) {
        return this._http.put(this.baseUrl.concat(path), body, { 'headers': headers, 'params': params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(100000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    }
    executeAction(action) {
        action.Token = localStorage.getItem('Token');
        return this.postRequest('executeAction/', action);
    }
};
RestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"] }
];
RestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], RestService);



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
/* harmony import */ var src_bug_fisch_apps_app_client_pages_dynamic_page_dynamic_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@bug-fisch/apps/app-client/pages/dynamic-page/dynamic-page.component */ "./src/@bug-fisch/apps/app-client/pages/dynamic-page/dynamic-page.component.ts");




const routes = [
    {
        path: '',
        component: src_bug_fisch_apps_app_client_pages_dynamic_page_dynamic_page_component__WEBPACK_IMPORTED_MODULE_3__["DynamicPageComponent"],
        data: {}
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
        this.title = 'GeoQuitzFE';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_bug_fisch_interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@bug-fisch/interceptor/auth.interceptor */ "./src/@bug-fisch/interceptor/auth.interceptor.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_bug_fisch_apps_app_client_pages_dynamic_page_dynamic_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/@bug-fisch/apps/app-client/pages/dynamic-page/dynamic-page.component */ "./src/@bug-fisch/apps/app-client/pages/dynamic-page/dynamic-page.component.ts");
/* harmony import */ var src_bug_fisch_apps_app_client_pages_dynamic_page_dynamic_page_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/@bug-fisch/apps/app-client/pages/dynamic-page/dynamic-page.module */ "./src/@bug-fisch/apps/app-client/pages/dynamic-page/dynamic-page.module.ts");
/* harmony import */ var src_bug_fisch_services_action_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/@bug-fisch/services/action.service */ "./src/@bug-fisch/services/action.service.ts");
/* harmony import */ var src_bug_fisch_services_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@bug-fisch/services/data.service */ "./src/@bug-fisch/services/data.service.ts");
/* harmony import */ var src_bug_fisch_services_rest_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/@bug-fisch/services/rest.service */ "./src/@bug-fisch/services/rest.service.ts");
















const appRoutes = [
    {
        path: 'startt',
        component: src_bug_fisch_apps_app_client_pages_dynamic_page_dynamic_page_component__WEBPACK_IMPORTED_MODULE_10__["DynamicPageComponent"],
        data: { title: 'Heroes List' }
    },
    { path: '',
        redirectTo: '/startt',
        pathMatch: 'full'
    }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            ),
            src_bug_fisch_apps_app_client_pages_dynamic_page_dynamic_page_module__WEBPACK_IMPORTED_MODULE_11__["DynamicPageModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: src_bug_fisch_interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"],
                multi: true,
            },
            src_bug_fisch_services_action_service__WEBPACK_IMPORTED_MODULE_12__["ActionService"],
            src_bug_fisch_services_data_service__WEBPACK_IMPORTED_MODULE_13__["DataService"],
            src_bug_fisch_services_rest_service__WEBPACK_IMPORTED_MODULE_14__["RestService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _bug_fisch_services_app_injector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./@bug-fisch/services/app-injector.service */ "./src/@bug-fisch/services/app-injector.service.ts");




const bootstrap = () => Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then((moduleRef) => _bug_fisch_services_app_injector_service__WEBPACK_IMPORTED_MODULE_3__["AppInjector"].setInjector(moduleRef.injector));
bootstrap().catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\EigeneDateien\Dokumente\Projekte\Bugfisch\FE\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map