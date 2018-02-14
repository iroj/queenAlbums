webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/album-list/album-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/album-list/album-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf='albumdata$ | async'>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h5>\n        From : {{(albumdata$ | async)?.sunrise | date:'hh:mm a zzzz'}}\n      </h5>\n    </div>\n    <div class=\"col-md-6\">\n      <h5 class='float-right'>\n        To: {{(albumdata$ | async)?.sunset | date:'hh:mm a zzzz'}}\n      </h5>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <table class='table table-striped'>\n        <thead>\n          <tr class='row'>\n            <td class='col-md-8 text-center'>\n              Album Title\n            </td>\n            <td class='col-md-4 text-center'>\n              Duration\n            </td>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class='row' *ngFor='let album of (albumdata$ | async)?.uniqueAlbums; let i =index'>\n            <td class='col-md-8'>\n              {{i+1}}. {{album.key}}\n            </td>\n            <td class='col-md-4 text-center'>\n              {{album.value | durationPipe}}\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <h5>Daylight Duration: {{(albumdata$|async)?.daylight | durationPipe}}</h5>\n        </div>\n        <div class=\"col-md-6\">\n          <h5>Total Track Length: {{(albumdata$|async)?.totallength | durationPipe}}</h5>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/album-list/album-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_selectors__ = __webpack_require__("../../../../../src/app/store/selectors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlbumListComponent = /** @class */ (function () {
    function AlbumListComponent(store) {
        this.store = store;
        this.albumdata$ = store.select(__WEBPACK_IMPORTED_MODULE_2__store_selectors__["a" /* getAlbumsState */]);
    }
    AlbumListComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
    };
    AlbumListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-album-list',
            template: __webpack_require__("../../../../../src/app/album-list/album-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/album-list/album-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]])
    ], AlbumListComponent);
    return AlbumListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  margin-top: 50px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <app-select-city></app-select-city>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <app-album-list *ngIf='selectedCity$ | async'></app-album-list>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_selectors__ = __webpack_require__("../../../../../src/app/store/selectors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
        this.selectedCity$ = store.select(__WEBPACK_IMPORTED_MODULE_2__store_selectors__["c" /* getCityState */]);
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIS; });
var CITIES = [
    'Toronto',
    'London',
    'Tokyo',
    'Sydney'
];
var APIS = {
    CITY: 'https://www.metaweather.com/api/location/search/?query=',
    WEATHER: 'https://www.metaweather.com/api/location/',
    ALBUMS: 'http://musicbrainz.org/ws/2/recording?query=artist:%22Queen%22%20and%20type:%22album%22&fmt=json'
};


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__select_city_select_city_component__ = __webpack_require__("../../../../../src/app/select-city/select-city.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__album_list_album_list_component__ = __webpack_require__("../../../../../src/app/album-list/album-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_index__ = __webpack_require__("../../../../../src/app/store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__store_cities_effects__ = __webpack_require__("../../../../../src/app/store/cities/effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store_albums_effects__ = __webpack_require__("../../../../../src/app/store/albums/effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_durationPipe__ = __webpack_require__("../../../../../src/app/pipes/durationPipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__select_city_select_city_component__["a" /* SelectCityComponent */],
                __WEBPACK_IMPORTED_MODULE_8__album_list_album_list_component__["a" /* AlbumListComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pipes_durationPipe__["a" /* DurationPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__ngrx_store__["d" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__store_index__["a" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_11__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_12__store_cities_effects__["a" /* CitiesEffects */], __WEBPACK_IMPORTED_MODULE_13__store_albums_effects__["a" /* AlbumsEffects */]])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__app_service__["a" /* AppService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};





var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.cityNames = __WEBPACK_IMPORTED_MODULE_1__app_constants__["b" /* CITIES */];
    }
    AppService.prototype.getCities = function () {
        var _this = this;
        var observableArray = this.cityNames.map(function (cityName) {
            return _this.http.get("" + __WEBPACK_IMPORTED_MODULE_1__app_constants__["a" /* APIS */].CITY + cityName).map(function (res) {
                return res[0];
            });
        });
        return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_forkJoin__["a" /* forkJoin */])(observableArray);
    };
    AppService.prototype.getAlbumsByCity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cityDetails, albums;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get("" + __WEBPACK_IMPORTED_MODULE_1__app_constants__["a" /* APIS */].WEATHER + id)
                            .map(function (res) {
                            return res;
                        }).toPromise()];
                    case 1:
                        cityDetails = _a.sent();
                        return [4 /*yield*/, this.http.get("" + __WEBPACK_IMPORTED_MODULE_1__app_constants__["a" /* APIS */].ALBUMS)
                                .map(function (res) {
                                return res;
                            }).toPromise()];
                    case 2:
                        albums = _a.sent();
                        return [2 /*return*/, this.getAlbums(cityDetails, albums)];
                }
            });
        });
    };
    AppService.prototype.getAlbums = function (cityDetails, albums) {
        var sunRise = new Date(cityDetails.sun_rise), sunSet = new Date(cityDetails.sun_set);
        var diff = sunSet.getTime() - sunRise.getTime();
        var uniqueAlbums = {};
        var sum = 0;
        albums.recordings.forEach(function (recording) {
            recording.releases.forEach(function (release) {
                if (!recording.length || !release['track-count'] ||
                    (sum + recording.length * release['track-count']) >= diff) {
                    return;
                }
                if (!uniqueAlbums[release.title] ||
                    uniqueAlbums[release.title] < recording.length * release['track-count']) {
                    uniqueAlbums[release.title] = recording.length * release['track-count'];
                    sum += recording.length * release['track-count'];
                }
            });
        });
        return {
            sunrise: cityDetails.sun_rise,
            sunset: cityDetails.sun_set,
            daylight: diff,
            totallength: sum,
            uniqueAlbums: this.getArray(uniqueAlbums)
        };
    };
    AppService.prototype.getArray = function (obj) {
        var array = [];
        // tslint:disable-next-line:forin
        for (var key in obj) {
            array.push({ key: key, value: obj[key] });
        }
        return array;
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/durationPipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DurationPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DurationPipe = /** @class */ (function () {
    function DurationPipe() {
    }
    DurationPipe.prototype.transform = function (value, args) {
        var milliseconds = Math.floor((value % 1000) / 100), seconds = Math.floor((value / 1000) % 60), minutes = Math.floor((value / (1000 * 60)) % 60), hours = Math.floor((value / (1000 * 60 * 60)) % 24);
        return ((hours < 10) ? '0' + hours : hours) + ": " + ((minutes < 10) ? '0' + minutes : minutes) + ": " + ((seconds < 10) ? '0' + seconds : seconds);
    };
    DurationPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Pipe */])({ name: 'durationPipe' })
    ], DurationPipe);
    return DurationPipe;
}());



/***/ }),

/***/ "../../../../../src/app/select-city/select-city.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/select-city/select-city.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n    <div class=\"form-group\">\r\n      <label for='city'>Select City</label>\r\n      <select id='city' class='form-control' [ngModel]='selectedCity$ | async' (ngModelChange)='cityChanged($event)'>\r\n        <option *ngFor='let city of cities$ | async' [ngValue]='city'>{{city.title}}</option>\r\n      </select>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/select-city/select-city.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectCityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_selectors__ = __webpack_require__("../../../../../src/app/store/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_city_actions__ = __webpack_require__("../../../../../src/app/store/city/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_cities_actions__ = __webpack_require__("../../../../../src/app/store/cities/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_albums_actions__ = __webpack_require__("../../../../../src/app/store/albums/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SelectCityComponent = /** @class */ (function () {
    function SelectCityComponent(store) {
        this.store = store;
        this.selectedCity$ = store.select(__WEBPACK_IMPORTED_MODULE_2__store_selectors__["c" /* getCityState */]);
        this.cities$ = store.select(__WEBPACK_IMPORTED_MODULE_2__store_selectors__["b" /* getCitiesState */]);
    }
    SelectCityComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store_cities_actions__["d" /* GetCitiesAction */]());
    };
    SelectCityComponent.prototype.cityChanged = function (city) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_city_actions__["a" /* CityChangeAction */](city));
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_albums_actions__["d" /* GetAlbumsAction */](city.woeid));
    };
    SelectCityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-select-city',
            template: __webpack_require__("../../../../../src/app/select-city/select-city.component.html"),
            styles: [__webpack_require__("../../../../../src/app/select-city/select-city.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]])
    ], SelectCityComponent);
    return SelectCityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/store/albums/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GETALBUMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALBUMSUPDATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GetAlbumsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AlbumsUpdatedAction; });
var GETALBUMS = 'GET_ALBUMS';
var ALBUMSUPDATED = 'ALBUMS_UPDATED';
var GetAlbumsAction = /** @class */ (function () {
    function GetAlbumsAction(payload) {
        this.payload = payload;
        this.type = GETALBUMS;
    }
    return GetAlbumsAction;
}());

var AlbumsUpdatedAction = /** @class */ (function () {
    function AlbumsUpdatedAction(payload) {
        this.payload = payload;
        this.type = ALBUMSUPDATED;
    }
    return AlbumsUpdatedAction;
}());



/***/ }),

/***/ "../../../../../src/app/store/albums/effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumsEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__("../../../../../src/app/store/albums/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AlbumsEffects = /** @class */ (function () {
    function AlbumsEffects(service, actions$) {
        var _this = this;
        this.service = service;
        this.actions$ = actions$;
        this.update$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions__["c" /* GETALBUMS */])
            .switchMap(function (action) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].fromPromise(_this.service
                .getAlbumsByCity(action.payload)
                .then(function (data) {
                return data;
            }))
                .map(function (res) { return new __WEBPACK_IMPORTED_MODULE_4__actions__["b" /* AlbumsUpdatedAction */](res); });
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */])
    ], AlbumsEffects.prototype, "update$", void 0);
    AlbumsEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */]])
    ], AlbumsEffects);
    return AlbumsEffects;
}());



/***/ }),

/***/ "../../../../../src/app/store/albums/reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("../../../../../src/app/store/albums/actions.ts");

function reducer(state, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ALBUMSUPDATED */]: {
            return action.payload;
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/store/cities/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GETCITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CITIESUPDATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GetCitiesAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CitiesUpdatedAction; });
var GETCITIES = 'GET_CITIES';
var CITIESUPDATED = 'CITIES_UPDATED';
var GetCitiesAction = /** @class */ (function () {
    function GetCitiesAction() {
        this.type = GETCITIES;
    }
    return GetCitiesAction;
}());

var CitiesUpdatedAction = /** @class */ (function () {
    function CitiesUpdatedAction(payload) {
        this.payload = payload;
        this.type = CITIESUPDATED;
    }
    return CitiesUpdatedAction;
}());



/***/ }),

/***/ "../../../../../src/app/store/cities/effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitiesEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__("../../../../../src/app/store/cities/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CitiesEffects = /** @class */ (function () {
    function CitiesEffects(service, actions$) {
        var _this = this;
        this.service = service;
        this.actions$ = actions$;
        this.update$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions__["c" /* GETCITIES */])
            .switchMap(function () {
            return _this.service
                .getCities()
                .map(function (data) { return new __WEBPACK_IMPORTED_MODULE_3__actions__["b" /* CitiesUpdatedAction */](data); });
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */])
    ], CitiesEffects.prototype, "update$", void 0);
    CitiesEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */]])
    ], CitiesEffects);
    return CitiesEffects;
}());



/***/ }),

/***/ "../../../../../src/app/store/cities/reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("../../../../../src/app/store/cities/actions.ts");

function reducer(state, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* CITIESUPDATED */]:
            return action.payload;
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/store/city/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SELECTEDCITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityChangeAction; });
var SELECTEDCITY = 'SELECTED_CITY';
var CityChangeAction = /** @class */ (function () {
    function CityChangeAction(payload) {
        this.payload = payload;
        this.type = SELECTEDCITY;
    }
    return CityChangeAction;
}());



/***/ }),

/***/ "../../../../../src/app/store/city/reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("../../../../../src/app/store/city/actions.ts");

function reducer(state, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* SELECTEDCITY */]:
            return action.payload;
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/store/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__city_reducers__ = __webpack_require__("../../../../../src/app/store/city/reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cities_reducers__ = __webpack_require__("../../../../../src/app/store/cities/reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__albums_reducers__ = __webpack_require__("../../../../../src/app/store/albums/reducers.ts");



var reducers = {
    selectedCity: __WEBPACK_IMPORTED_MODULE_0__city_reducers__["a" /* reducer */],
    cities: __WEBPACK_IMPORTED_MODULE_1__cities_reducers__["a" /* reducer */],
    albums: __WEBPACK_IMPORTED_MODULE_2__albums_reducers__["a" /* reducer */]
};


/***/ }),

/***/ "../../../../../src/app/store/selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCityState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCitiesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAlbumsState; });
var getCityState = function (state) { return state.selectedCity; };
var getCitiesState = function (state) { return state.cities; };
var getAlbumsState = function (state) { return state.albums; };


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map