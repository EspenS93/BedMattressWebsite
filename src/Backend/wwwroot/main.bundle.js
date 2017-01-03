webpackJsonp([0,3],{

/***/ 139:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_bed_chooser_bed_chooser_service__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BedChooserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BedChooserComponent = (function () {
    function BedChooserComponent(router, route, bedChooserService, fb) {
        this.router = router;
        this.route = route;
        this.bedChooserService = bedChooserService;
        this.fb = fb;
        this.pictures = [];
        this.form = this.fb.group({
            Color: [""],
            Type: [""],
            Fabric: [""],
            Size: [""],
            Series: [""],
        });
    }
    BedChooserComponent.prototype.ngOnInit = function () {
        this.getBeds();
        this.getTypes();
        this.getColors();
        this.getFabrics();
        this.getSizes();
        this.getSeries();
    };
    BedChooserComponent.prototype.onSelect = function (bed) {
        this.selectedBed = bed;
    };
    BedChooserComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/bed/', this.selectedBed.id]);
    };
    BedChooserComponent.prototype.getPicture = function (beds) {
        var _this = this;
        var _loop_1 = function(i) {
            this_1.bedChooserService.getOnePicture(beds[i].id).then(function (image) { return _this.pictures[beds[i].id] = image; });
        };
        var this_1 = this;
        for (var i = 0; i < beds.length; i++) {
            _loop_1(i);
        }
    };
    BedChooserComponent.prototype.getBeds = function () {
        var _this = this;
        this.bedChooserService
            .getBeds()
            .then(function (beds) { _this.beds = beds; _this.getPicture(beds); });
    };
    BedChooserComponent.prototype.getColors = function () {
        var _this = this;
        this.bedChooserService
            .getColors()
            .then(function (colors) { return _this.colors = colors; });
    };
    BedChooserComponent.prototype.getTypes = function () {
        var _this = this;
        this.bedChooserService
            .getTypes()
            .then(function (types) { return _this.types = types; });
    };
    BedChooserComponent.prototype.getFabrics = function () {
        var _this = this;
        this.bedChooserService
            .getFabrics()
            .then(function (fabrics) { return _this.fabrics = fabrics; });
    };
    BedChooserComponent.prototype.getSizes = function () {
        var _this = this;
        this.bedChooserService
            .getSizes()
            .then(function (sizes) { return _this.sizes = sizes; });
    };
    BedChooserComponent.prototype.getSeries = function () {
        var _this = this;
        this.bedChooserService
            .getSeries()
            .then(function (series) { return _this.series = series; });
    };
    BedChooserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.bedChooserService.getSpecificBeds(this.form.value).then(function (beds) { return _this.beds = beds; });
    };
    BedChooserComponent.prototype.deleteBed = function (bed) {
        var _this = this;
        this.bedChooserService
            .deleteBed(bed.id)
            .then(function () {
            _this.beds = _this.beds.filter(function (h) { return h !== bed; });
            if (_this.selectedBed === bed) {
                _this.selectedBed = null;
            }
        });
    };
    BedChooserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-bed-chooser',
            templateUrl: './bed-chooser.component.html',
            styleUrls: ['./bed-chooser.component.css'],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Services_bed_chooser_bed_chooser_service__["a" /* BedChooserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__Services_bed_chooser_bed_chooser_service__["a" /* BedChooserService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === 'function' && _d) || Object])
    ], BedChooserComponent);
    return BedChooserComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/bed-chooser.component.js.map

/***/ },

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_bed_chooser_bed_chooser_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BedComponent = (function () {
    function BedComponent(bedChooserService, route, location) {
        var _this = this;
        this.bedChooserService = bedChooserService;
        this.route = route;
        this.location = location;
        this.pictures = [];
        this.route.params.forEach(function (params) {
            var id = params['id'];
            _this.bedChooserService.getBed(id).then(function (bed) { _this.bed = bed; });
            _this.bedChooserService.getPictures(id).then(function (pictures) { return _this.pictures = pictures; });
        });
    }
    BedComponent.prototype.ngOnInit = function () {
    };
    BedComponent.prototype.goBack = function () {
        this.location.back();
    };
    BedComponent.prototype.addToCart = function () {
        //TODO: make a cart and add bed to cart with this method
    };
    BedComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-bed',
            templateUrl: './bed.component.html',
            styleUrls: ['./bed.component.css']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_bed_chooser_bed_chooser_service__["a" /* BedChooserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__Services_bed_chooser_bed_chooser_service__["a" /* BedChooserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* Location */]) === 'function' && _c) || Object])
    ], BedComponent);
    return BedComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/bed.component.js.map

/***/ },

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FrontpageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FrontpageComponent = (function () {
    function FrontpageComponent() {
    }
    FrontpageComponent.prototype.ngOnInit = function () {
    };
    FrontpageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-frontpage',
            templateUrl: './frontpage.component.html',
            styleUrls: ['./frontpage.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], FrontpageComponent);
    return FrontpageComponent;
}());
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/Frontpage.component.js.map

/***/ },

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_uuid__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models_bed__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Models_picture__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_bed_chooser_bed_chooser_service__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NewBedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewBedComponent = (function () {
    function NewBedComponent(bedChooserService, router) {
        this.bedChooserService = bedChooserService;
        this.router = router;
        this.formdata = new FormData();
        this.image = [];
    }
    NewBedComponent.prototype.ngOnInit = function () {
        this.newBed = new __WEBPACK_IMPORTED_MODULE_3__Models_bed__["a" /* Bed */]();
    };
    NewBedComponent.prototype.add = function () {
        this.newPictures = [];
        this.newBed.id = __WEBPACK_IMPORTED_MODULE_2_angular2_uuid__["UUID"].UUID();
        this.bedChooserService.addBed(this.newBed);
        for (var i = 0; i < this.files.length; i++) {
            this.newPictures[i] = new __WEBPACK_IMPORTED_MODULE_4__Models_picture__["a" /* Picture */]();
            this.newPictures[i].id = __WEBPACK_IMPORTED_MODULE_2_angular2_uuid__["UUID"].UUID();
            this.newPictures[i].name = this.files[i].name;
            this.newPictures[i].contentType = this.files[i].type;
            this.newPictures[i].image = this.image[i];
            this.newPictures[i].bedID = this.newBed.id;
            this.bedChooserService.addPicture(this.newPictures[i]);
        }
        this.router.navigateByUrl('/webshop');
    };
    NewBedComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        this.files = inputValue.files;
        this.image = [];
        var myReader = new FileReader();
        var _loop_1 = function(i) {
            myReader.onload = function (e) {
                _this.image[i] = myReader.result;
            };
            myReader.readAsDataURL(this_1.files[i]);
        };
        var this_1 = this;
        for (var i = 0; i < this.files.length; i++) {
            _loop_1(i);
        }
    };
    NewBedComponent.prototype.fileChangeEvent = function ($event) {
        this.readThis($event.target);
    };
    NewBedComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-new-bed',
            templateUrl: './new-bed.component.html',
            styleUrls: ['./new-bed.component.css']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__Services_bed_chooser_bed_chooser_service__["a" /* BedChooserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__Services_bed_chooser_bed_chooser_service__["a" /* BedChooserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], NewBedComponent);
    return NewBedComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/new-bed.component.js.map

/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_if__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_NgIf; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_NgIf = (function () {
    function Wrapper_NgIf(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_if__["a" /* NgIf */](p0, p1);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_NgIf.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgIf.prototype.ngOnDestroy = function () {
    };
    Wrapper_NgIf.prototype.check_ngIf = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.ngIf = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_NgIf.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_NgIf.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NgIf.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgIf.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NgIf;
}());
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/ng_if.ngfactory.js.map

/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_ng_control_status__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Wrapper_NgControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_NgControlStatusGroup; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_NgControlStatus = (function () {
    function Wrapper_NgControlStatus(p0) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_ng_control_status__["a" /* NgControlStatus */](p0);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_NgControlStatus.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgControlStatus.prototype.ngOnDestroy = function () {
    };
    Wrapper_NgControlStatus.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_NgControlStatus.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_0 = this.context.ngClassUntouched;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currVal_0)) {
            view.renderer.setElementClass(el, 'ng-untouched', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this.context.ngClassTouched;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currVal_1)) {
            view.renderer.setElementClass(el, 'ng-touched', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this.context.ngClassPristine;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            view.renderer.setElementClass(el, 'ng-pristine', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this.context.ngClassDirty;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_3, currVal_3)) {
            view.renderer.setElementClass(el, 'ng-dirty', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this.context.ngClassValid;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_4, currVal_4)) {
            view.renderer.setElementClass(el, 'ng-valid', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this.context.ngClassInvalid;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_5, currVal_5)) {
            view.renderer.setElementClass(el, 'ng-invalid', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this.context.ngClassPending;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_6, currVal_6)) {
            view.renderer.setElementClass(el, 'ng-pending', currVal_6);
            this._expr_6 = currVal_6;
        }
    };
    Wrapper_NgControlStatus.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgControlStatus.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NgControlStatus;
}());
var Wrapper_NgControlStatusGroup = (function () {
    function Wrapper_NgControlStatusGroup(p0) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_ng_control_status__["b" /* NgControlStatusGroup */](p0);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_NgControlStatusGroup.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgControlStatusGroup.prototype.ngOnDestroy = function () {
    };
    Wrapper_NgControlStatusGroup.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_NgControlStatusGroup.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_0 = this.context.ngClassUntouched;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currVal_0)) {
            view.renderer.setElementClass(el, 'ng-untouched', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this.context.ngClassTouched;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currVal_1)) {
            view.renderer.setElementClass(el, 'ng-touched', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this.context.ngClassPristine;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            view.renderer.setElementClass(el, 'ng-pristine', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this.context.ngClassDirty;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_3, currVal_3)) {
            view.renderer.setElementClass(el, 'ng-dirty', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this.context.ngClassValid;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_4, currVal_4)) {
            view.renderer.setElementClass(el, 'ng-valid', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this.context.ngClassInvalid;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_5, currVal_5)) {
            view.renderer.setElementClass(el, 'ng-invalid', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this.context.ngClassPending;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_6, currVal_6)) {
            view.renderer.setElementClass(el, 'ng-pending', currVal_6);
            this._expr_6 = currVal_6;
        }
    };
    Wrapper_NgControlStatusGroup.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgControlStatusGroup.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NgControlStatusGroup;
}());
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/ng_control_status.ngfactory.js.map

/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Mattress store';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/app.component.js.map

/***/ },

/***/ 318:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 318;


/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gendir_app_app_module_ngfactory__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(129);





if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_4" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* platformBrowser */])().bootstrapModuleFactory(__WEBPACK_IMPORTED_MODULE_3__gendir_app_app_module_ngfactory__["a" /* AppModuleNgFactory */]);
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/main.js.map

/***/ },

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['.selected[_ngcontent-%COMP%] {\r\n    background-color: teal !important;\r\n    color: white;\r\n  }'];
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/bed-chooser.component.css.shim.ngstyle.js.map

/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_Components_bed_chooser_bed_chooser_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router_src_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_state__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_Services_bed_chooser_bed_chooser_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms_src_form_builder__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bed_chooser_component_css_shim_ngstyle__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_forms_src_directives_reactive_directives_form_group_directive_ngfactory__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_forms_src_directives_reactive_directives_form_control_name_ngfactory__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__gendir_node_modules_angular_forms_src_directives_select_multiple_control_value_accessor_ngfactory__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_view_container__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_core_src_change_detection_differs_iterable_differs__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_directives_select_control_value_accessor__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_select_multiple_control_value_accessor__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_common_src_directives_ng_for__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_control_value_accessor__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_reactive_directives_form_control_name__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_forms_src_directives_ng_control__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_ng_control_status__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_forms_src_directives_reactive_directives_form_group_directive__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_forms_src_directives_control_container__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_common_src_directives_ng_if__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_core_src_security__ = __webpack_require__(54);
/* unused harmony export Wrapper_BedChooserComponent */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BedChooserComponentNgFactory; });
/* unused harmony export View_BedChooserComponent0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



































var Wrapper_BedChooserComponent = (function () {
    function Wrapper_BedChooserComponent(p0, p1, p2, p3) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_Components_bed_chooser_bed_chooser_component__["a" /* BedChooserComponent */](p0, p1, p2, p3);
    }
    Wrapper_BedChooserComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_BedChooserComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_BedChooserComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_BedChooserComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_BedChooserComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_BedChooserComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_BedChooserComponent;
}());
var renderType_BedChooserComponent_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_BedChooserComponent_Host0 = (function (_super) {
    __extends(View_BedChooserComponent_Host0, _super);
    function View_BedChooserComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_BedChooserComponent_Host0, renderType_BedChooserComponent_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_BedChooserComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'app-bed-chooser', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_BedChooserComponent0(this.viewUtils, this, 0, this._el_0);
        this._BedChooserComponent_0_3 = new Wrapper_BedChooserComponent(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__angular_router_src_router__["a" /* Router */], this.parentIndex), this.injectorGet(__WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_state__["b" /* ActivatedRoute */], this.parentIndex), this.injectorGet(__WEBPACK_IMPORTED_MODULE_9__app_Services_bed_chooser_bed_chooser_service__["a" /* BedChooserService */], this.parentIndex), this.injectorGet(__WEBPACK_IMPORTED_MODULE_10__angular_forms_src_form_builder__["a" /* FormBuilder */], this.parentIndex));
        this.compView_0.create(this._BedChooserComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["b" /* ComponentRef_ */](0, this, this._el_0, this._BedChooserComponent_0_3.context);
    };
    View_BedChooserComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_Components_bed_chooser_bed_chooser_component__["a" /* BedChooserComponent */]) && (0 === requestNodeIndex))) {
            return this._BedChooserComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_BedChooserComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._BedChooserComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_BedChooserComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_BedChooserComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BedChooserComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var BedChooserComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["a" /* ComponentFactory */]('app-bed-chooser', View_BedChooserComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_Components_bed_chooser_bed_chooser_component__["a" /* BedChooserComponent */]);
var styles_BedChooserComponent = [__WEBPACK_IMPORTED_MODULE_11__bed_chooser_component_css_shim_ngstyle__["a" /* styles */]];
var renderType_BedChooserComponent = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_BedChooserComponent, {});
var View_BedChooserComponent0 = (function (_super) {
    __extends(View_BedChooserComponent0, _super);
    function View_BedChooserComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_BedChooserComponent0, renderType_BedChooserComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_BedChooserComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', ' w3-container w3-left w3-border w3-quarter'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n\n', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_5 = this.renderer.createText(this._el_4, 'Filter', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n', null);
        this._el_7 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'form', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-container'), null);
        this._FormGroupDirective_7_3 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_forms_src_directives_reactive_directives_form_group_directive_ngfactory__["a" /* Wrapper_FormGroupDirective */](null, null);
        this._ControlContainer_7_4 = this._FormGroupDirective_7_3.context;
        this._NgControlStatusGroup_7_5 = new __WEBPACK_IMPORTED_MODULE_13__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__["a" /* Wrapper_NgControlStatusGroup */](this._ControlContainer_7_4);
        this._text_8 = this.renderer.createText(this._el_7, '\n\n  ', null);
        this._el_9 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_7, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'form-row'), null);
        this._text_10 = this.renderer.createText(this._el_9, '\n    ', null);
        this._el_11 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_9, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_12 = this.renderer.createText(this._el_11, 'Color', null);
        this._text_13 = this.renderer.createText(this._el_9, '\n    ', null);
        this._el_14 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_9, 'select', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'w3-select', 'formControlName', 'Color'), null);
        this._SelectControlValueAccessor_14_3 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__["a" /* Wrapper_SelectControlValueAccessor */](this.renderer, new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_14));
        this._NG_VALUE_ACCESSOR_14_4 = [this._SelectControlValueAccessor_14_3.context];
        this._FormControlName_14_5 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_forms_src_directives_reactive_directives_form_control_name_ngfactory__["a" /* Wrapper_FormControlName */](this._ControlContainer_7_4, null, null, this._NG_VALUE_ACCESSOR_14_4);
        this._NgControl_14_6 = this._FormControlName_14_5.context;
        this._NgControlStatus_14_7 = new __WEBPACK_IMPORTED_MODULE_13__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__["b" /* Wrapper_NgControlStatus */](this._NgControl_14_6);
        this._text_15 = this.renderer.createText(this._el_14, '\n        ', null);
        this._el_16 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_14, 'option', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'selected', '', 'value', ''), null);
        this._NgSelectOption_16_3 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__["b" /* Wrapper_NgSelectOption */](new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_16), this.renderer, this._SelectControlValueAccessor_14_3.context);
        this._NgSelectMultipleOption_16_4 = new __WEBPACK_IMPORTED_MODULE_16__gendir_node_modules_angular_forms_src_directives_select_multiple_control_value_accessor_ngfactory__["a" /* Wrapper_NgSelectMultipleOption */](new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_16), this.renderer, null);
        this._text_17 = this.renderer.createText(this._el_16, 'All', null);
        this._text_18 = this.renderer.createText(this._el_14, '\n        ', null);
        this._anchor_19 = this.renderer.createTemplateAnchor(this._el_14, null);
        this._vc_19 = new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_view_container__["a" /* ViewContainer */](19, 14, this, this._anchor_19);
        this._TemplateRef_19_5 = new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 19, this._anchor_19);
        this._NgFor_19_6 = new __WEBPACK_IMPORTED_MODULE_18__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_19.vcRef, this._TemplateRef_19_5, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_21__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentIndex), this.ref);
        this._text_20 = this.renderer.createText(this._el_14, '\n      ', null);
        this._text_21 = this.renderer.createText(this._el_9, '\n  ', null);
        this._text_22 = this.renderer.createText(this._el_7, '\n\n  ', null);
        this._el_23 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_7, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'form-row'), null);
        this._text_24 = this.renderer.createText(this._el_23, '\n    ', null);
        this._el_25 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_23, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_26 = this.renderer.createText(this._el_25, 'Type', null);
        this._text_27 = this.renderer.createText(this._el_23, '\n    ', null);
        this._el_28 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_23, 'select', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'w3-select', 'formControlName', 'Type'), null);
        this._SelectControlValueAccessor_28_3 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__["a" /* Wrapper_SelectControlValueAccessor */](this.renderer, new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_28));
        this._NG_VALUE_ACCESSOR_28_4 = [this._SelectControlValueAccessor_28_3.context];
        this._FormControlName_28_5 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_forms_src_directives_reactive_directives_form_control_name_ngfactory__["a" /* Wrapper_FormControlName */](this._ControlContainer_7_4, null, null, this._NG_VALUE_ACCESSOR_28_4);
        this._NgControl_28_6 = this._FormControlName_28_5.context;
        this._NgControlStatus_28_7 = new __WEBPACK_IMPORTED_MODULE_13__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__["b" /* Wrapper_NgControlStatus */](this._NgControl_28_6);
        this._text_29 = this.renderer.createText(this._el_28, '\n        ', null);
        this._el_30 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_28, 'option', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'selected', '', 'value', ''), null);
        this._NgSelectOption_30_3 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__["b" /* Wrapper_NgSelectOption */](new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_30), this.renderer, this._SelectControlValueAccessor_28_3.context);
        this._NgSelectMultipleOption_30_4 = new __WEBPACK_IMPORTED_MODULE_16__gendir_node_modules_angular_forms_src_directives_select_multiple_control_value_accessor_ngfactory__["a" /* Wrapper_NgSelectMultipleOption */](new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_30), this.renderer, null);
        this._text_31 = this.renderer.createText(this._el_30, 'All', null);
        this._text_32 = this.renderer.createText(this._el_28, '\n        ', null);
        this._anchor_33 = this.renderer.createTemplateAnchor(this._el_28, null);
        this._vc_33 = new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_view_container__["a" /* ViewContainer */](33, 28, this, this._anchor_33);
        this._TemplateRef_33_5 = new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 33, this._anchor_33);
        this._NgFor_33_6 = new __WEBPACK_IMPORTED_MODULE_18__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_33.vcRef, this._TemplateRef_33_5, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_21__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentIndex), this.ref);
        this._text_34 = this.renderer.createText(this._el_28, '\n      ', null);
        this._text_35 = this.renderer.createText(this._el_23, '\n  ', null);
        this._text_36 = this.renderer.createText(this._el_7, '\n\n  ', null);
        this._el_37 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_7, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'form-row'), null);
        this._text_38 = this.renderer.createText(this._el_37, '\n    ', null);
        this._el_39 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_37, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_40 = this.renderer.createText(this._el_39, 'Fabric', null);
        this._text_41 = this.renderer.createText(this._el_37, '\n    ', null);
        this._el_42 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_37, 'select', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'w3-select', 'formControlName', 'Fabric'), null);
        this._SelectControlValueAccessor_42_3 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__["a" /* Wrapper_SelectControlValueAccessor */](this.renderer, new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_42));
        this._NG_VALUE_ACCESSOR_42_4 = [this._SelectControlValueAccessor_42_3.context];
        this._FormControlName_42_5 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_forms_src_directives_reactive_directives_form_control_name_ngfactory__["a" /* Wrapper_FormControlName */](this._ControlContainer_7_4, null, null, this._NG_VALUE_ACCESSOR_42_4);
        this._NgControl_42_6 = this._FormControlName_42_5.context;
        this._NgControlStatus_42_7 = new __WEBPACK_IMPORTED_MODULE_13__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__["b" /* Wrapper_NgControlStatus */](this._NgControl_42_6);
        this._text_43 = this.renderer.createText(this._el_42, '\n        ', null);
        this._el_44 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_42, 'option', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'selected', '', 'value', ''), null);
        this._NgSelectOption_44_3 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__["b" /* Wrapper_NgSelectOption */](new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_44), this.renderer, this._SelectControlValueAccessor_42_3.context);
        this._NgSelectMultipleOption_44_4 = new __WEBPACK_IMPORTED_MODULE_16__gendir_node_modules_angular_forms_src_directives_select_multiple_control_value_accessor_ngfactory__["a" /* Wrapper_NgSelectMultipleOption */](new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_44), this.renderer, null);
        this._text_45 = this.renderer.createText(this._el_44, 'All', null);
        this._text_46 = this.renderer.createText(this._el_42, '\n        ', null);
        this._anchor_47 = this.renderer.createTemplateAnchor(this._el_42, null);
        this._vc_47 = new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_view_container__["a" /* ViewContainer */](47, 42, this, this._anchor_47);
        this._TemplateRef_47_5 = new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 47, this._anchor_47);
        this._NgFor_47_6 = new __WEBPACK_IMPORTED_MODULE_18__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_47.vcRef, this._TemplateRef_47_5, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_21__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentIndex), this.ref);
        this._text_48 = this.renderer.createText(this._el_42, '\n      ', null);
        this._text_49 = this.renderer.createText(this._el_37, '\n  ', null);
        this._text_50 = this.renderer.createText(this._el_7, '\n\n  ', null);
        this._el_51 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_7, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'form-row'), null);
        this._text_52 = this.renderer.createText(this._el_51, '\n    ', null);
        this._el_53 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_51, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_54 = this.renderer.createText(this._el_53, 'Size', null);
        this._text_55 = this.renderer.createText(this._el_51, '\n    ', null);
        this._el_56 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_51, 'select', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'w3-select', 'formControlName', 'Size'), null);
        this._SelectControlValueAccessor_56_3 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__["a" /* Wrapper_SelectControlValueAccessor */](this.renderer, new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_56));
        this._NG_VALUE_ACCESSOR_56_4 = [this._SelectControlValueAccessor_56_3.context];
        this._FormControlName_56_5 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_forms_src_directives_reactive_directives_form_control_name_ngfactory__["a" /* Wrapper_FormControlName */](this._ControlContainer_7_4, null, null, this._NG_VALUE_ACCESSOR_56_4);
        this._NgControl_56_6 = this._FormControlName_56_5.context;
        this._NgControlStatus_56_7 = new __WEBPACK_IMPORTED_MODULE_13__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__["b" /* Wrapper_NgControlStatus */](this._NgControl_56_6);
        this._text_57 = this.renderer.createText(this._el_56, '\n        ', null);
        this._el_58 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_56, 'option', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'selected', '', 'value', ''), null);
        this._NgSelectOption_58_3 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__["b" /* Wrapper_NgSelectOption */](new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_58), this.renderer, this._SelectControlValueAccessor_56_3.context);
        this._NgSelectMultipleOption_58_4 = new __WEBPACK_IMPORTED_MODULE_16__gendir_node_modules_angular_forms_src_directives_select_multiple_control_value_accessor_ngfactory__["a" /* Wrapper_NgSelectMultipleOption */](new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_58), this.renderer, null);
        this._text_59 = this.renderer.createText(this._el_58, 'All', null);
        this._text_60 = this.renderer.createText(this._el_56, '\n        ', null);
        this._anchor_61 = this.renderer.createTemplateAnchor(this._el_56, null);
        this._vc_61 = new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_view_container__["a" /* ViewContainer */](61, 56, this, this._anchor_61);
        this._TemplateRef_61_5 = new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 61, this._anchor_61);
        this._NgFor_61_6 = new __WEBPACK_IMPORTED_MODULE_18__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_61.vcRef, this._TemplateRef_61_5, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_21__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentIndex), this.ref);
        this._text_62 = this.renderer.createText(this._el_56, '\n      ', null);
        this._text_63 = this.renderer.createText(this._el_51, '\n  ', null);
        this._text_64 = this.renderer.createText(this._el_7, '\n\n  ', null);
        this._el_65 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_7, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'form-row'), null);
        this._text_66 = this.renderer.createText(this._el_65, '\n    ', null);
        this._el_67 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_65, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_68 = this.renderer.createText(this._el_67, 'Series', null);
        this._text_69 = this.renderer.createText(this._el_65, '\n    ', null);
        this._el_70 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_65, 'select', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'w3-select', 'formControlName', 'Series'), null);
        this._SelectControlValueAccessor_70_3 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__["a" /* Wrapper_SelectControlValueAccessor */](this.renderer, new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_70));
        this._NG_VALUE_ACCESSOR_70_4 = [this._SelectControlValueAccessor_70_3.context];
        this._FormControlName_70_5 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_forms_src_directives_reactive_directives_form_control_name_ngfactory__["a" /* Wrapper_FormControlName */](this._ControlContainer_7_4, null, null, this._NG_VALUE_ACCESSOR_70_4);
        this._NgControl_70_6 = this._FormControlName_70_5.context;
        this._NgControlStatus_70_7 = new __WEBPACK_IMPORTED_MODULE_13__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__["b" /* Wrapper_NgControlStatus */](this._NgControl_70_6);
        this._text_71 = this.renderer.createText(this._el_70, '\n        ', null);
        this._el_72 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_70, 'option', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'selected', '', 'value', ''), null);
        this._NgSelectOption_72_3 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__["b" /* Wrapper_NgSelectOption */](new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_72), this.renderer, this._SelectControlValueAccessor_70_3.context);
        this._NgSelectMultipleOption_72_4 = new __WEBPACK_IMPORTED_MODULE_16__gendir_node_modules_angular_forms_src_directives_select_multiple_control_value_accessor_ngfactory__["a" /* Wrapper_NgSelectMultipleOption */](new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_72), this.renderer, null);
        this._text_73 = this.renderer.createText(this._el_72, 'All', null);
        this._text_74 = this.renderer.createText(this._el_70, '\n        ', null);
        this._anchor_75 = this.renderer.createTemplateAnchor(this._el_70, null);
        this._vc_75 = new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_view_container__["a" /* ViewContainer */](75, 70, this, this._anchor_75);
        this._TemplateRef_75_5 = new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 75, this._anchor_75);
        this._NgFor_75_6 = new __WEBPACK_IMPORTED_MODULE_18__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_75.vcRef, this._TemplateRef_75_5, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_21__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentIndex), this.ref);
        this._text_76 = this.renderer.createText(this._el_70, '\n      ', null);
        this._text_77 = this.renderer.createText(this._el_65, '\n  ', null);
        this._text_78 = this.renderer.createText(this._el_7, '\n\n  ', null);
        this._el_79 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_7, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'form-row'), null);
        this._text_80 = this.renderer.createText(this._el_79, '\n    ', null);
        this._el_81 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_79, 'button', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'w3-btn w3-teal w3-margin', 'type', 'submit'), null);
        this._text_82 = this.renderer.createText(this._el_81, 'Search', null);
        this._text_83 = this.renderer.createText(this._el_79, '\n  ', null);
        this._text_84 = this.renderer.createText(this._el_7, '\n\n', null);
        this._text_85 = this.renderer.createText(this._el_2, '\n', null);
        this._text_86 = this.renderer.createText(this._el_0, '\n', null);
        this._el_87 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', ' w3-container w3-rest'), null);
        this._text_88 = this.renderer.createText(this._el_87, '\n  \n  ', null);
        this._anchor_89 = this.renderer.createTemplateAnchor(this._el_87, null);
        this._vc_89 = new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_view_container__["a" /* ViewContainer */](89, 87, this, this._anchor_89);
        this._TemplateRef_89_5 = new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 89, this._anchor_89);
        this._NgFor_89_6 = new __WEBPACK_IMPORTED_MODULE_18__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_89.vcRef, this._TemplateRef_89_5, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_21__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentIndex), this.ref);
        this._text_90 = this.renderer.createText(this._el_87, '\n\n', null);
        this._text_91 = this.renderer.createText(this._el_0, '\n\n', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_7, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](6, 'ngSubmit', null, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_7));
        this._FormGroupDirective_7_3.subscribe(this, this.eventHandler(this.handleEvent_7), true);
        var disposable_1 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_14, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'change', null, 'blur', null), this.eventHandler(this.handleEvent_14));
        var disposable_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_28, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'change', null, 'blur', null), this.eventHandler(this.handleEvent_28));
        var disposable_3 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_42, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'change', null, 'blur', null), this.eventHandler(this.handleEvent_42));
        var disposable_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_56, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'change', null, 'blur', null), this.eventHandler(this.handleEvent_56));
        var disposable_5 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_70, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'change', null, 'blur', null), this.eventHandler(this.handleEvent_70));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._anchor_19,
            this._text_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._anchor_33,
            this._text_34,
            this._text_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._text_46,
            this._anchor_47,
            this._text_48,
            this._text_49,
            this._text_50,
            this._el_51,
            this._text_52,
            this._el_53,
            this._text_54,
            this._text_55,
            this._el_56,
            this._text_57,
            this._el_58,
            this._text_59,
            this._text_60,
            this._anchor_61,
            this._text_62,
            this._text_63,
            this._text_64,
            this._el_65,
            this._text_66,
            this._el_67,
            this._text_68,
            this._text_69,
            this._el_70,
            this._text_71,
            this._el_72,
            this._text_73,
            this._text_74,
            this._anchor_75,
            this._text_76,
            this._text_77,
            this._text_78,
            this._el_79,
            this._text_80,
            this._el_81,
            this._text_82,
            this._text_83,
            this._text_84,
            this._text_85,
            this._text_86,
            this._el_87,
            this._text_88,
            this._anchor_89,
            this._text_90,
            this._text_91
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5
        ]);
        return null;
    };
    View_BedChooserComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_directives_select_control_value_accessor__["b" /* NgSelectOption */]) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._NgSelectOption_16_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_select_multiple_control_value_accessor__["b" /* NgSelectMultipleOption */]) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._NgSelectMultipleOption_16_4.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (19 === requestNodeIndex))) {
            return this._TemplateRef_19_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_24__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (19 === requestNodeIndex))) {
            return this._NgFor_19_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_directives_select_control_value_accessor__["a" /* SelectControlValueAccessor */]) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._SelectControlValueAccessor_14_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_control_value_accessor__["a" /* NG_VALUE_ACCESSOR */]) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._NG_VALUE_ACCESSOR_14_4;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_reactive_directives_form_control_name__["a" /* FormControlName */]) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._FormControlName_14_5.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_27__angular_forms_src_directives_ng_control__["a" /* NgControl */]) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._NgControl_14_6;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_ng_control_status__["a" /* NgControlStatus */]) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._NgControlStatus_14_7.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_directives_select_control_value_accessor__["b" /* NgSelectOption */]) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._NgSelectOption_30_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_select_multiple_control_value_accessor__["b" /* NgSelectMultipleOption */]) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._NgSelectMultipleOption_30_4.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (33 === requestNodeIndex))) {
            return this._TemplateRef_33_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_24__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (33 === requestNodeIndex))) {
            return this._NgFor_33_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_directives_select_control_value_accessor__["a" /* SelectControlValueAccessor */]) && ((28 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._SelectControlValueAccessor_28_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_control_value_accessor__["a" /* NG_VALUE_ACCESSOR */]) && ((28 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._NG_VALUE_ACCESSOR_28_4;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_reactive_directives_form_control_name__["a" /* FormControlName */]) && ((28 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._FormControlName_28_5.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_27__angular_forms_src_directives_ng_control__["a" /* NgControl */]) && ((28 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._NgControl_28_6;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_ng_control_status__["a" /* NgControlStatus */]) && ((28 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._NgControlStatus_28_7.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_directives_select_control_value_accessor__["b" /* NgSelectOption */]) && ((44 <= requestNodeIndex) && (requestNodeIndex <= 45)))) {
            return this._NgSelectOption_44_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_select_multiple_control_value_accessor__["b" /* NgSelectMultipleOption */]) && ((44 <= requestNodeIndex) && (requestNodeIndex <= 45)))) {
            return this._NgSelectMultipleOption_44_4.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (47 === requestNodeIndex))) {
            return this._TemplateRef_47_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_24__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (47 === requestNodeIndex))) {
            return this._NgFor_47_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_directives_select_control_value_accessor__["a" /* SelectControlValueAccessor */]) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._SelectControlValueAccessor_42_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_control_value_accessor__["a" /* NG_VALUE_ACCESSOR */]) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._NG_VALUE_ACCESSOR_42_4;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_reactive_directives_form_control_name__["a" /* FormControlName */]) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._FormControlName_42_5.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_27__angular_forms_src_directives_ng_control__["a" /* NgControl */]) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._NgControl_42_6;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_ng_control_status__["a" /* NgControlStatus */]) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._NgControlStatus_42_7.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_directives_select_control_value_accessor__["b" /* NgSelectOption */]) && ((58 <= requestNodeIndex) && (requestNodeIndex <= 59)))) {
            return this._NgSelectOption_58_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_select_multiple_control_value_accessor__["b" /* NgSelectMultipleOption */]) && ((58 <= requestNodeIndex) && (requestNodeIndex <= 59)))) {
            return this._NgSelectMultipleOption_58_4.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (61 === requestNodeIndex))) {
            return this._TemplateRef_61_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_24__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (61 === requestNodeIndex))) {
            return this._NgFor_61_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_directives_select_control_value_accessor__["a" /* SelectControlValueAccessor */]) && ((56 <= requestNodeIndex) && (requestNodeIndex <= 62)))) {
            return this._SelectControlValueAccessor_56_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_control_value_accessor__["a" /* NG_VALUE_ACCESSOR */]) && ((56 <= requestNodeIndex) && (requestNodeIndex <= 62)))) {
            return this._NG_VALUE_ACCESSOR_56_4;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_reactive_directives_form_control_name__["a" /* FormControlName */]) && ((56 <= requestNodeIndex) && (requestNodeIndex <= 62)))) {
            return this._FormControlName_56_5.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_27__angular_forms_src_directives_ng_control__["a" /* NgControl */]) && ((56 <= requestNodeIndex) && (requestNodeIndex <= 62)))) {
            return this._NgControl_56_6;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_ng_control_status__["a" /* NgControlStatus */]) && ((56 <= requestNodeIndex) && (requestNodeIndex <= 62)))) {
            return this._NgControlStatus_56_7.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_directives_select_control_value_accessor__["b" /* NgSelectOption */]) && ((72 <= requestNodeIndex) && (requestNodeIndex <= 73)))) {
            return this._NgSelectOption_72_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_select_multiple_control_value_accessor__["b" /* NgSelectMultipleOption */]) && ((72 <= requestNodeIndex) && (requestNodeIndex <= 73)))) {
            return this._NgSelectMultipleOption_72_4.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (75 === requestNodeIndex))) {
            return this._TemplateRef_75_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_24__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (75 === requestNodeIndex))) {
            return this._NgFor_75_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_directives_select_control_value_accessor__["a" /* SelectControlValueAccessor */]) && ((70 <= requestNodeIndex) && (requestNodeIndex <= 76)))) {
            return this._SelectControlValueAccessor_70_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_control_value_accessor__["a" /* NG_VALUE_ACCESSOR */]) && ((70 <= requestNodeIndex) && (requestNodeIndex <= 76)))) {
            return this._NG_VALUE_ACCESSOR_70_4;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_reactive_directives_form_control_name__["a" /* FormControlName */]) && ((70 <= requestNodeIndex) && (requestNodeIndex <= 76)))) {
            return this._FormControlName_70_5.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_27__angular_forms_src_directives_ng_control__["a" /* NgControl */]) && ((70 <= requestNodeIndex) && (requestNodeIndex <= 76)))) {
            return this._NgControl_70_6;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_ng_control_status__["a" /* NgControlStatus */]) && ((70 <= requestNodeIndex) && (requestNodeIndex <= 76)))) {
            return this._NgControlStatus_70_7.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_29__angular_forms_src_directives_reactive_directives_form_group_directive__["a" /* FormGroupDirective */]) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 84)))) {
            return this._FormGroupDirective_7_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_30__angular_forms_src_directives_control_container__["a" /* ControlContainer */]) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 84)))) {
            return this._ControlContainer_7_4;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_ng_control_status__["b" /* NgControlStatusGroup */]) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 84)))) {
            return this._NgControlStatusGroup_7_5.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (89 === requestNodeIndex))) {
            return this._TemplateRef_89_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_24__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (89 === requestNodeIndex))) {
            return this._NgFor_89_6.context;
        }
        return notFoundResult;
    };
    View_BedChooserComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_7_0_0 = this.context.form;
        this._FormGroupDirective_7_3.check_form(currVal_7_0_0, throwOnChange, false);
        this._FormGroupDirective_7_3.ngDoCheck(this, this._el_7, throwOnChange);
        this._NgControlStatusGroup_7_5.ngDoCheck(this, this._el_7, throwOnChange);
        this._SelectControlValueAccessor_14_3.ngDoCheck(this, this._el_14, throwOnChange);
        var currVal_14_1_0 = 'Color';
        this._FormControlName_14_5.check_name(currVal_14_1_0, throwOnChange, false);
        this._FormControlName_14_5.ngDoCheck(this, this._el_14, throwOnChange);
        this._NgControlStatus_14_7.ngDoCheck(this, this._el_14, throwOnChange);
        var currVal_16_0_0 = '';
        this._NgSelectOption_16_3.check_value(currVal_16_0_0, throwOnChange, false);
        this._NgSelectOption_16_3.ngDoCheck(this, this._el_16, throwOnChange);
        var currVal_16_1_0 = '';
        this._NgSelectMultipleOption_16_4.check_value(currVal_16_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_16_4.ngDoCheck(this, this._el_16, throwOnChange);
        var currVal_19_0_0 = this.context.colors;
        this._NgFor_19_6.check_ngForOf(currVal_19_0_0, throwOnChange, false);
        this._NgFor_19_6.ngDoCheck(this, this._anchor_19, throwOnChange);
        this._SelectControlValueAccessor_28_3.ngDoCheck(this, this._el_28, throwOnChange);
        var currVal_28_1_0 = 'Type';
        this._FormControlName_28_5.check_name(currVal_28_1_0, throwOnChange, false);
        this._FormControlName_28_5.ngDoCheck(this, this._el_28, throwOnChange);
        this._NgControlStatus_28_7.ngDoCheck(this, this._el_28, throwOnChange);
        var currVal_30_0_0 = '';
        this._NgSelectOption_30_3.check_value(currVal_30_0_0, throwOnChange, false);
        this._NgSelectOption_30_3.ngDoCheck(this, this._el_30, throwOnChange);
        var currVal_30_1_0 = '';
        this._NgSelectMultipleOption_30_4.check_value(currVal_30_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_30_4.ngDoCheck(this, this._el_30, throwOnChange);
        var currVal_33_0_0 = this.context.types;
        this._NgFor_33_6.check_ngForOf(currVal_33_0_0, throwOnChange, false);
        this._NgFor_33_6.ngDoCheck(this, this._anchor_33, throwOnChange);
        this._SelectControlValueAccessor_42_3.ngDoCheck(this, this._el_42, throwOnChange);
        var currVal_42_1_0 = 'Fabric';
        this._FormControlName_42_5.check_name(currVal_42_1_0, throwOnChange, false);
        this._FormControlName_42_5.ngDoCheck(this, this._el_42, throwOnChange);
        this._NgControlStatus_42_7.ngDoCheck(this, this._el_42, throwOnChange);
        var currVal_44_0_0 = '';
        this._NgSelectOption_44_3.check_value(currVal_44_0_0, throwOnChange, false);
        this._NgSelectOption_44_3.ngDoCheck(this, this._el_44, throwOnChange);
        var currVal_44_1_0 = '';
        this._NgSelectMultipleOption_44_4.check_value(currVal_44_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_44_4.ngDoCheck(this, this._el_44, throwOnChange);
        var currVal_47_0_0 = this.context.fabrics;
        this._NgFor_47_6.check_ngForOf(currVal_47_0_0, throwOnChange, false);
        this._NgFor_47_6.ngDoCheck(this, this._anchor_47, throwOnChange);
        this._SelectControlValueAccessor_56_3.ngDoCheck(this, this._el_56, throwOnChange);
        var currVal_56_1_0 = 'Size';
        this._FormControlName_56_5.check_name(currVal_56_1_0, throwOnChange, false);
        this._FormControlName_56_5.ngDoCheck(this, this._el_56, throwOnChange);
        this._NgControlStatus_56_7.ngDoCheck(this, this._el_56, throwOnChange);
        var currVal_58_0_0 = '';
        this._NgSelectOption_58_3.check_value(currVal_58_0_0, throwOnChange, false);
        this._NgSelectOption_58_3.ngDoCheck(this, this._el_58, throwOnChange);
        var currVal_58_1_0 = '';
        this._NgSelectMultipleOption_58_4.check_value(currVal_58_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_58_4.ngDoCheck(this, this._el_58, throwOnChange);
        var currVal_61_0_0 = this.context.sizes;
        this._NgFor_61_6.check_ngForOf(currVal_61_0_0, throwOnChange, false);
        this._NgFor_61_6.ngDoCheck(this, this._anchor_61, throwOnChange);
        this._SelectControlValueAccessor_70_3.ngDoCheck(this, this._el_70, throwOnChange);
        var currVal_70_1_0 = 'Series';
        this._FormControlName_70_5.check_name(currVal_70_1_0, throwOnChange, false);
        this._FormControlName_70_5.ngDoCheck(this, this._el_70, throwOnChange);
        this._NgControlStatus_70_7.ngDoCheck(this, this._el_70, throwOnChange);
        var currVal_72_0_0 = '';
        this._NgSelectOption_72_3.check_value(currVal_72_0_0, throwOnChange, false);
        this._NgSelectOption_72_3.ngDoCheck(this, this._el_72, throwOnChange);
        var currVal_72_1_0 = '';
        this._NgSelectMultipleOption_72_4.check_value(currVal_72_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_72_4.ngDoCheck(this, this._el_72, throwOnChange);
        var currVal_75_0_0 = this.context.series;
        this._NgFor_75_6.check_ngForOf(currVal_75_0_0, throwOnChange, false);
        this._NgFor_75_6.ngDoCheck(this, this._anchor_75, throwOnChange);
        var currVal_89_0_0 = this.context.beds;
        this._NgFor_89_6.check_ngForOf(currVal_89_0_0, throwOnChange, false);
        this._NgFor_89_6.ngDoCheck(this, this._anchor_89, throwOnChange);
        this._vc_19.detectChangesInNestedViews(throwOnChange);
        this._vc_33.detectChangesInNestedViews(throwOnChange);
        this._vc_47.detectChangesInNestedViews(throwOnChange);
        this._vc_61.detectChangesInNestedViews(throwOnChange);
        this._vc_75.detectChangesInNestedViews(throwOnChange);
        this._vc_89.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatusGroup_7_5.checkHost(this, this, this._el_7, throwOnChange);
        this._NgControlStatus_14_7.checkHost(this, this, this._el_14, throwOnChange);
        this._NgControlStatus_28_7.checkHost(this, this, this._el_28, throwOnChange);
        this._NgControlStatus_42_7.checkHost(this, this, this._el_42, throwOnChange);
        this._NgControlStatus_56_7.checkHost(this, this, this._el_56, throwOnChange);
        this._NgControlStatus_70_7.checkHost(this, this, this._el_70, throwOnChange);
    };
    View_BedChooserComponent0.prototype.destroyInternal = function () {
        this._vc_19.destroyNestedViews();
        this._vc_33.destroyNestedViews();
        this._vc_47.destroyNestedViews();
        this._vc_61.destroyNestedViews();
        this._vc_75.destroyNestedViews();
        this._vc_89.destroyNestedViews();
        this._NgSelectOption_16_3.ngOnDestroy();
        this._NgSelectMultipleOption_16_4.ngOnDestroy();
        this._FormControlName_14_5.ngOnDestroy();
        this._NgSelectOption_30_3.ngOnDestroy();
        this._NgSelectMultipleOption_30_4.ngOnDestroy();
        this._FormControlName_28_5.ngOnDestroy();
        this._NgSelectOption_44_3.ngOnDestroy();
        this._NgSelectMultipleOption_44_4.ngOnDestroy();
        this._FormControlName_42_5.ngOnDestroy();
        this._NgSelectOption_58_3.ngOnDestroy();
        this._NgSelectMultipleOption_58_4.ngOnDestroy();
        this._FormControlName_56_5.ngOnDestroy();
        this._NgSelectOption_72_3.ngOnDestroy();
        this._NgSelectMultipleOption_72_4.ngOnDestroy();
        this._FormControlName_70_5.ngOnDestroy();
        this._FormGroupDirective_7_3.ngOnDestroy();
    };
    View_BedChooserComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 19)) {
            return new View_BedChooserComponent1(this.viewUtils, this, 19, this._anchor_19, this._vc_19);
        }
        if ((nodeIndex == 33)) {
            return new View_BedChooserComponent2(this.viewUtils, this, 33, this._anchor_33, this._vc_33);
        }
        if ((nodeIndex == 47)) {
            return new View_BedChooserComponent3(this.viewUtils, this, 47, this._anchor_47, this._vc_47);
        }
        if ((nodeIndex == 61)) {
            return new View_BedChooserComponent4(this.viewUtils, this, 61, this._anchor_61, this._vc_61);
        }
        if ((nodeIndex == 75)) {
            return new View_BedChooserComponent5(this.viewUtils, this, 75, this._anchor_75, this._vc_75);
        }
        if ((nodeIndex == 89)) {
            return new View_BedChooserComponent6(this.viewUtils, this, 89, this._anchor_89, this._vc_89);
        }
        return null;
    };
    View_BedChooserComponent0.prototype.handleEvent_7 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._FormGroupDirective_7_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngSubmit')) {
            var pd_sub_0 = (this.context.onSubmit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_BedChooserComponent0.prototype.handleEvent_14 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._SelectControlValueAccessor_14_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_BedChooserComponent0.prototype.handleEvent_28 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._SelectControlValueAccessor_28_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_BedChooserComponent0.prototype.handleEvent_42 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._SelectControlValueAccessor_42_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_BedChooserComponent0.prototype.handleEvent_56 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._SelectControlValueAccessor_56_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_BedChooserComponent0.prototype.handleEvent_70 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._SelectControlValueAccessor_70_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_BedChooserComponent0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_BedChooserComponent1 = (function (_super) {
    __extends(View_BedChooserComponent1, _super);
    function View_BedChooserComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_BedChooserComponent1, renderType_BedChooserComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_4 = __WEBPACK_IMPORTED_MODULE_31__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_BedChooserComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'option', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._NgSelectOption_0_3 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__["b" /* Wrapper_NgSelectOption */](new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_0), this.renderer, this.parentView._SelectControlValueAccessor_14_3.context);
        this._NgSelectMultipleOption_0_4 = new __WEBPACK_IMPORTED_MODULE_16__gendir_node_modules_angular_forms_src_directives_select_multiple_control_value_accessor_ngfactory__["a" /* Wrapper_NgSelectMultipleOption */](new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_0), this.renderer, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_BedChooserComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_directives_select_control_value_accessor__["b" /* NgSelectOption */]) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectOption_0_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_select_multiple_control_value_accessor__["b" /* NgSelectMultipleOption */]) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectMultipleOption_0_4.context;
        }
        return notFoundResult;
    };
    View_BedChooserComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.$implicit;
        this._NgSelectOption_0_3.check_value(currVal_0_0_0, throwOnChange, false);
        this._NgSelectOption_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_0_1_0 = this.context.$implicit;
        this._NgSelectMultipleOption_0_4.check_value(currVal_0_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_BedChooserComponent1.prototype.destroyInternal = function () {
        this._NgSelectOption_0_3.ngOnDestroy();
        this._NgSelectMultipleOption_0_4.ngOnDestroy();
    };
    View_BedChooserComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BedChooserComponent1;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_BedChooserComponent2 = (function (_super) {
    __extends(View_BedChooserComponent2, _super);
    function View_BedChooserComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_BedChooserComponent2, renderType_BedChooserComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_4 = __WEBPACK_IMPORTED_MODULE_31__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_BedChooserComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'option', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._NgSelectOption_0_3 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__["b" /* Wrapper_NgSelectOption */](new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_0), this.renderer, this.parentView._SelectControlValueAccessor_28_3.context);
        this._NgSelectMultipleOption_0_4 = new __WEBPACK_IMPORTED_MODULE_16__gendir_node_modules_angular_forms_src_directives_select_multiple_control_value_accessor_ngfactory__["a" /* Wrapper_NgSelectMultipleOption */](new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_0), this.renderer, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_BedChooserComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_directives_select_control_value_accessor__["b" /* NgSelectOption */]) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectOption_0_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_select_multiple_control_value_accessor__["b" /* NgSelectMultipleOption */]) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectMultipleOption_0_4.context;
        }
        return notFoundResult;
    };
    View_BedChooserComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.$implicit;
        this._NgSelectOption_0_3.check_value(currVal_0_0_0, throwOnChange, false);
        this._NgSelectOption_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_0_1_0 = this.context.$implicit;
        this._NgSelectMultipleOption_0_4.check_value(currVal_0_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_BedChooserComponent2.prototype.destroyInternal = function () {
        this._NgSelectOption_0_3.ngOnDestroy();
        this._NgSelectMultipleOption_0_4.ngOnDestroy();
    };
    View_BedChooserComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BedChooserComponent2;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_BedChooserComponent3 = (function (_super) {
    __extends(View_BedChooserComponent3, _super);
    function View_BedChooserComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_BedChooserComponent3, renderType_BedChooserComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_4 = __WEBPACK_IMPORTED_MODULE_31__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_BedChooserComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'option', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._NgSelectOption_0_3 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__["b" /* Wrapper_NgSelectOption */](new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_0), this.renderer, this.parentView._SelectControlValueAccessor_42_3.context);
        this._NgSelectMultipleOption_0_4 = new __WEBPACK_IMPORTED_MODULE_16__gendir_node_modules_angular_forms_src_directives_select_multiple_control_value_accessor_ngfactory__["a" /* Wrapper_NgSelectMultipleOption */](new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_0), this.renderer, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_BedChooserComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_directives_select_control_value_accessor__["b" /* NgSelectOption */]) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectOption_0_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_select_multiple_control_value_accessor__["b" /* NgSelectMultipleOption */]) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectMultipleOption_0_4.context;
        }
        return notFoundResult;
    };
    View_BedChooserComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.$implicit;
        this._NgSelectOption_0_3.check_value(currVal_0_0_0, throwOnChange, false);
        this._NgSelectOption_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_0_1_0 = this.context.$implicit;
        this._NgSelectMultipleOption_0_4.check_value(currVal_0_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_BedChooserComponent3.prototype.destroyInternal = function () {
        this._NgSelectOption_0_3.ngOnDestroy();
        this._NgSelectMultipleOption_0_4.ngOnDestroy();
    };
    View_BedChooserComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BedChooserComponent3;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_BedChooserComponent4 = (function (_super) {
    __extends(View_BedChooserComponent4, _super);
    function View_BedChooserComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_BedChooserComponent4, renderType_BedChooserComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_4 = __WEBPACK_IMPORTED_MODULE_31__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_BedChooserComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'option', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._NgSelectOption_0_3 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__["b" /* Wrapper_NgSelectOption */](new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_0), this.renderer, this.parentView._SelectControlValueAccessor_56_3.context);
        this._NgSelectMultipleOption_0_4 = new __WEBPACK_IMPORTED_MODULE_16__gendir_node_modules_angular_forms_src_directives_select_multiple_control_value_accessor_ngfactory__["a" /* Wrapper_NgSelectMultipleOption */](new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_0), this.renderer, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_BedChooserComponent4.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_directives_select_control_value_accessor__["b" /* NgSelectOption */]) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectOption_0_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_select_multiple_control_value_accessor__["b" /* NgSelectMultipleOption */]) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectMultipleOption_0_4.context;
        }
        return notFoundResult;
    };
    View_BedChooserComponent4.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.$implicit;
        this._NgSelectOption_0_3.check_value(currVal_0_0_0, throwOnChange, false);
        this._NgSelectOption_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_0_1_0 = this.context.$implicit;
        this._NgSelectMultipleOption_0_4.check_value(currVal_0_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_BedChooserComponent4.prototype.destroyInternal = function () {
        this._NgSelectOption_0_3.ngOnDestroy();
        this._NgSelectMultipleOption_0_4.ngOnDestroy();
    };
    View_BedChooserComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BedChooserComponent4;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_BedChooserComponent5 = (function (_super) {
    __extends(View_BedChooserComponent5, _super);
    function View_BedChooserComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_BedChooserComponent5, renderType_BedChooserComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_4 = __WEBPACK_IMPORTED_MODULE_31__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_BedChooserComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'option', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._NgSelectOption_0_3 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_select_control_value_accessor_ngfactory__["b" /* Wrapper_NgSelectOption */](new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_0), this.renderer, this.parentView._SelectControlValueAccessor_70_3.context);
        this._NgSelectMultipleOption_0_4 = new __WEBPACK_IMPORTED_MODULE_16__gendir_node_modules_angular_forms_src_directives_select_multiple_control_value_accessor_ngfactory__["a" /* Wrapper_NgSelectMultipleOption */](new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_0), this.renderer, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_BedChooserComponent5.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_directives_select_control_value_accessor__["b" /* NgSelectOption */]) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectOption_0_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_select_multiple_control_value_accessor__["b" /* NgSelectMultipleOption */]) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectMultipleOption_0_4.context;
        }
        return notFoundResult;
    };
    View_BedChooserComponent5.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.$implicit;
        this._NgSelectOption_0_3.check_value(currVal_0_0_0, throwOnChange, false);
        this._NgSelectOption_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_0_1_0 = this.context.$implicit;
        this._NgSelectMultipleOption_0_4.check_value(currVal_0_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_BedChooserComponent5.prototype.destroyInternal = function () {
        this._NgSelectOption_0_3.ngOnDestroy();
        this._NgSelectMultipleOption_0_4.ngOnDestroy();
    };
    View_BedChooserComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BedChooserComponent5;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_BedChooserComponent6 = (function (_super) {
    __extends(View_BedChooserComponent6, _super);
    function View_BedChooserComponent6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_BedChooserComponent6, renderType_BedChooserComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_31 = __WEBPACK_IMPORTED_MODULE_31__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_32 = __WEBPACK_IMPORTED_MODULE_31__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_33 = __WEBPACK_IMPORTED_MODULE_31__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_34 = __WEBPACK_IMPORTED_MODULE_31__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_35 = __WEBPACK_IMPORTED_MODULE_31__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_36 = __WEBPACK_IMPORTED_MODULE_31__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_37 = __WEBPACK_IMPORTED_MODULE_31__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_38 = __WEBPACK_IMPORTED_MODULE_31__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_39 = __WEBPACK_IMPORTED_MODULE_31__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_BedChooserComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', ' w3-card-4 w3-quarter w3-accordion w3-padding-large w3-margin'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgIf_2_6 = new __WEBPACK_IMPORTED_MODULE_32__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_5 = this.renderer.createText(this._el_4, '', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_7 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-accordion-content w3-hide'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n      ', null);
        this._el_9 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_7, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_10 = this.renderer.createText(this._el_9, '', null);
        this._text_11 = this.renderer.createText(this._el_7, '\n      ', null);
        this._el_12 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_7, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_13 = this.renderer.createText(this._el_12, '', null);
        this._text_14 = this.renderer.createText(this._el_7, '\n      ', null);
        this._el_15 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_7, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_16 = this.renderer.createText(this._el_15, '', null);
        this._text_17 = this.renderer.createText(this._el_7, '\n      ', null);
        this._el_18 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_7, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_19 = this.renderer.createText(this._el_18, '', null);
        this._text_20 = this.renderer.createText(this._el_7, '\n      ', null);
        this._el_21 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_7, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_22 = this.renderer.createText(this._el_21, '', null);
        this._text_23 = this.renderer.createText(this._el_7, '\n      ', null);
        this._el_24 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_7, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_25 = this.renderer.createText(this._el_24, '', null);
        this._text_26 = this.renderer.createText(this._el_7, '\n    ', null);
        this._text_27 = this.renderer.createText(this._el_0, '\n\n  ', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_0, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](6, 'click', null, 'mouseenter', null, 'mouseleave', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._text_27
        ]), [disposable_0]);
        return null;
    };
    View_BedChooserComponent6.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_33__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_BedChooserComponent6.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.context.pictures[this.context.$implicit.id];
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
        var currVal_31 = (this.context.$implicit === this.parentView.context.selectedBed);
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_31, currVal_31)) {
            this.renderer.setElementClass(this._el_0, 'selected', currVal_31);
            this._expr_31 = currVal_31;
        }
        var currVal_32 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit.name, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_32, currVal_32)) {
            this.renderer.setText(this._text_5, currVal_32);
            this._expr_32 = currVal_32;
        }
        var currVal_33 = (this.context.$implicit === this.parentView.context.selectedBed);
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_33, currVal_33)) {
            this.renderer.setElementClass(this._el_7, 'w3-show', currVal_33);
            this._expr_33 = currVal_33;
        }
        var currVal_34 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit.color, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_34, currVal_34)) {
            this.renderer.setText(this._text_10, currVal_34);
            this._expr_34 = currVal_34;
        }
        var currVal_35 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit.type, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_35, currVal_35)) {
            this.renderer.setText(this._text_13, currVal_35);
            this._expr_35 = currVal_35;
        }
        var currVal_36 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit.fabric, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_36, currVal_36)) {
            this.renderer.setText(this._text_16, currVal_36);
            this._expr_36 = currVal_36;
        }
        var currVal_37 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit.size, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_37, currVal_37)) {
            this.renderer.setText(this._text_19, currVal_37);
            this._expr_37 = currVal_37;
        }
        var currVal_38 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit.series, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_38, currVal_38)) {
            this.renderer.setText(this._text_22, currVal_38);
            this._expr_38 = currVal_38;
        }
        var currVal_39 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit.price, ' Kr');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_39, currVal_39)) {
            this.renderer.setText(this._text_25, currVal_39);
            this._expr_39 = currVal_39;
        }
    };
    View_BedChooserComponent6.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_BedChooserComponent6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_BedChooserComponent6.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_BedChooserComponent7(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    View_BedChooserComponent6.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.gotoDetail() !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'mouseenter')) {
            var pd_sub_1 = (this.parentView.context.onSelect(this.context.$implicit) !== false);
            result = (pd_sub_1 && result);
        }
        if ((eventName == 'mouseleave')) {
            var pd_sub_2 = (this.parentView.context.onSelect() !== false);
            result = (pd_sub_2 && result);
        }
        return result;
    };
    return View_BedChooserComponent6;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_BedChooserComponent7 = (function (_super) {
    __extends(View_BedChooserComponent7, _super);
    function View_BedChooserComponent7(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_BedChooserComponent7, renderType_BedChooserComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_31__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_BedChooserComponent7.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'img', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-image w3-round'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_BedChooserComponent7.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this.parentView.parentView.context.pictures[this.parentView.context.$implicit.id].image;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_0, 'src', this.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_34__angular_core_src_security__["b" /* SecurityContext */].URL, currVal_1));
            this._expr_1 = currVal_1;
        }
    };
    View_BedChooserComponent7.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BedChooserComponent7;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/bed-chooser.component.ngfactory.js.map

/***/ },

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = [''];
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/bed.component.css.shim.ngstyle.js.map

/***/ },

/***/ 393:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_Components_bed_bed_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_Services_bed_chooser_bed_chooser_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_state__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_src_location_location__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bed_component_css_shim_ngstyle__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_container__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_if__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_core_src_security__ = __webpack_require__(54);
/* unused harmony export Wrapper_BedComponent */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BedComponentNgFactory; });
/* unused harmony export View_BedComponent0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

















var Wrapper_BedComponent = (function () {
    function Wrapper_BedComponent(p0, p1, p2) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_Components_bed_bed_component__["a" /* BedComponent */](p0, p1, p2);
    }
    Wrapper_BedComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_BedComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_BedComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_BedComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_BedComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_BedComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_BedComponent;
}());
var renderType_BedComponent_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_BedComponent_Host0 = (function (_super) {
    __extends(View_BedComponent_Host0, _super);
    function View_BedComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_BedComponent_Host0, renderType_BedComponent_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_BedComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'app-bed', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_BedComponent0(this.viewUtils, this, 0, this._el_0);
        this._BedComponent_0_3 = new Wrapper_BedComponent(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__app_Services_bed_chooser_bed_chooser_service__["a" /* BedChooserService */], this.parentIndex), this.injectorGet(__WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_state__["b" /* ActivatedRoute */], this.parentIndex), this.injectorGet(__WEBPACK_IMPORTED_MODULE_9__angular_common_src_location_location__["a" /* Location */], this.parentIndex));
        this.compView_0.create(this._BedComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["b" /* ComponentRef_ */](0, this, this._el_0, this._BedComponent_0_3.context);
    };
    View_BedComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_Components_bed_bed_component__["a" /* BedComponent */]) && (0 === requestNodeIndex))) {
            return this._BedComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_BedComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._BedComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_BedComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_BedComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BedComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var BedComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["a" /* ComponentFactory */]('app-bed', View_BedComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_Components_bed_bed_component__["a" /* BedComponent */]);
var styles_BedComponent = [__WEBPACK_IMPORTED_MODULE_10__bed_component_css_shim_ngstyle__["a" /* styles */]];
var renderType_BedComponent = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_BedComponent, {});
var View_BedComponent0 = (function (_super) {
    __extends(View_BedComponent0, _super);
    function View_BedComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_BedComponent0, renderType_BedComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_BedComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_0 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_container__["a" /* ViewContainer */](0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 0, this._anchor_0);
        this._NgIf_0_6 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_0.vcRef, this._TemplateRef_0_5);
        this.init(null, (this.renderer.directRenderer ? null : [this._anchor_0]), null);
        return null;
    };
    View_BedComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (0 === requestNodeIndex))) {
            return this._NgIf_0_6.context;
        }
        return notFoundResult;
    };
    View_BedComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.bed;
        this._NgIf_0_6.check_ngIf(currVal_0_0_0, throwOnChange, false);
        this._NgIf_0_6.ngDoCheck(this, this._anchor_0, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
    };
    View_BedComponent0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
    };
    View_BedComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 0)) {
            return new View_BedComponent1(this.viewUtils, this, 0, this._anchor_0, this._vc_0);
        }
        return null;
    };
    return View_BedComponent0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_BedComponent1 = (function (_super) {
    __extends(View_BedComponent1, _super);
    function View_BedComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_BedComponent1, renderType_BedComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_88 = __WEBPACK_IMPORTED_MODULE_15__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_89 = __WEBPACK_IMPORTED_MODULE_15__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_90 = __WEBPACK_IMPORTED_MODULE_15__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_91 = __WEBPACK_IMPORTED_MODULE_15__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_92 = __WEBPACK_IMPORTED_MODULE_15__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_93 = __WEBPACK_IMPORTED_MODULE_15__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_94 = __WEBPACK_IMPORTED_MODULE_15__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_95 = __WEBPACK_IMPORTED_MODULE_15__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_BedComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'div', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  \n  ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-twothird'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'div', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_5 = this.renderer.createText(this._el_4, '\n      ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_4, null);
        this._vc_6 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_container__["a" /* ViewContainer */](6, 4, this, this._anchor_6);
        this._TemplateRef_6_5 = new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 6, this._anchor_6);
        this._NgIf_6_6 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(this._el_4, '\n    ', null);
        this._text_8 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_9 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'table', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-table w3-border'), null);
        this._text_10 = this.renderer.createText(this._el_9, '\n      ', null);
        this._el_11 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_9, 'thead', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-teal'), null);
        this._text_12 = this.renderer.createText(this._el_11, '\n        ', null);
        this._el_13 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_11, 'tr', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_14 = this.renderer.createText(this._el_13, '\n          ', null);
        this._el_15 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_13, 'th', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_16 = this.renderer.createText(this._el_15, 'Type ', null);
        this._text_17 = this.renderer.createText(this._el_13, '\n          ', null);
        this._el_18 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_13, 'th', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_19 = this.renderer.createText(this._el_18, 'Color ', null);
        this._text_20 = this.renderer.createText(this._el_13, '\n          ', null);
        this._el_21 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_13, 'th', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_22 = this.renderer.createText(this._el_21, 'Fabric ', null);
        this._text_23 = this.renderer.createText(this._el_13, '\n          ', null);
        this._el_24 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_13, 'th', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_25 = this.renderer.createText(this._el_24, 'Size ', null);
        this._text_26 = this.renderer.createText(this._el_13, '\n          ', null);
        this._el_27 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_13, 'th', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_28 = this.renderer.createText(this._el_27, 'Series ', null);
        this._text_29 = this.renderer.createText(this._el_13, '\n          ', null);
        this._el_30 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_13, 'th', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_31 = this.renderer.createText(this._el_30, 'Price ', null);
        this._text_32 = this.renderer.createText(this._el_13, '\n        ', null);
        this._text_33 = this.renderer.createText(this._el_11, '\n      ', null);
        this._text_34 = this.renderer.createText(this._el_9, '\n      ', null);
        this._el_35 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_9, 'tbody', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_36 = this.renderer.createText(this._el_35, '\n        ', null);
        this._el_37 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_35, 'tr', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_38 = this.renderer.createText(this._el_37, '\n          ', null);
        this._el_39 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_37, 'td', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_40 = this.renderer.createText(this._el_39, '', null);
        this._text_41 = this.renderer.createText(this._el_37, '\n          ', null);
        this._el_42 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_37, 'td', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_43 = this.renderer.createText(this._el_42, '', null);
        this._text_44 = this.renderer.createText(this._el_37, '\n          ', null);
        this._el_45 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_37, 'td', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_46 = this.renderer.createText(this._el_45, '', null);
        this._text_47 = this.renderer.createText(this._el_37, '\n          ', null);
        this._el_48 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_37, 'td', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_49 = this.renderer.createText(this._el_48, '', null);
        this._text_50 = this.renderer.createText(this._el_37, '\n          ', null);
        this._el_51 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_37, 'td', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_52 = this.renderer.createText(this._el_51, '', null);
        this._text_53 = this.renderer.createText(this._el_37, '\n          ', null);
        this._el_54 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_37, 'td', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_55 = this.renderer.createText(this._el_54, '', null);
        this._text_56 = this.renderer.createText(this._el_37, '\n        ', null);
        this._text_57 = this.renderer.createText(this._el_35, '\n      ', null);
        this._text_58 = this.renderer.createText(this._el_9, '\n    ', null);
        this._text_59 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_60 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_61 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-third'), null);
        this._text_62 = this.renderer.createText(this._el_61, '\n    ', null);
        this._el_63 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_61, 'h2', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-teal'), null);
        this._text_64 = this.renderer.createText(this._el_63, '', null);
        this._text_65 = this.renderer.createText(this._el_61, '\n    ', null);
        this._el_66 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_61, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-border w3-bordered'), null);
        this._text_67 = this.renderer.createText(this._el_66, '\n      ', null);
        this._el_68 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_66, 'label', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_69 = this.renderer.createText(this._el_68, 'Description: ', null);
        this._text_70 = this.renderer.createText(this._el_66, '\n      ', null);
        this._el_71 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_66, 'label', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_72 = this.renderer.createText(this._el_71, '', null);
        this._text_73 = this.renderer.createText(this._el_66, '\n    ', null);
        this._text_74 = this.renderer.createText(this._el_61, '\n    ', null);
        this._el_75 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_61, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-margin'), null);
        this._text_76 = this.renderer.createText(this._el_75, '\n      ', null);
        this._el_77 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_75, 'button', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_78 = this.renderer.createText(this._el_77, 'Back', null);
        this._text_79 = this.renderer.createText(this._el_75, '\n      ', null);
        this._el_80 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_75, 'button', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_81 = this.renderer.createText(this._el_80, 'Add to cart', null);
        this._text_82 = this.renderer.createText(this._el_75, '\n    ', null);
        this._text_83 = this.renderer.createText(this._el_61, '\n  ', null);
        this._text_84 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_77, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_77));
        var disposable_1 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_80, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_80));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._text_44,
            this._el_45,
            this._text_46,
            this._text_47,
            this._el_48,
            this._text_49,
            this._text_50,
            this._el_51,
            this._text_52,
            this._text_53,
            this._el_54,
            this._text_55,
            this._text_56,
            this._text_57,
            this._text_58,
            this._text_59,
            this._text_60,
            this._el_61,
            this._text_62,
            this._el_63,
            this._text_64,
            this._text_65,
            this._el_66,
            this._text_67,
            this._el_68,
            this._text_69,
            this._text_70,
            this._el_71,
            this._text_72,
            this._text_73,
            this._text_74,
            this._el_75,
            this._text_76,
            this._el_77,
            this._text_78,
            this._text_79,
            this._el_80,
            this._text_81,
            this._text_82,
            this._text_83,
            this._text_84
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_BedComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6.context;
        }
        return notFoundResult;
    };
    View_BedComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_6_0_0 = this.parentView.context.pictures[0];
        this._NgIf_6_6.check_ngIf(currVal_6_0_0, throwOnChange, false);
        this._NgIf_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
        var currVal_88 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.parentView.context.bed.type, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_88, currVal_88)) {
            this.renderer.setText(this._text_40, currVal_88);
            this._expr_88 = currVal_88;
        }
        var currVal_89 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.parentView.context.bed.color, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_89, currVal_89)) {
            this.renderer.setText(this._text_43, currVal_89);
            this._expr_89 = currVal_89;
        }
        var currVal_90 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.parentView.context.bed.fabric, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_90, currVal_90)) {
            this.renderer.setText(this._text_46, currVal_90);
            this._expr_90 = currVal_90;
        }
        var currVal_91 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.parentView.context.bed.size, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_91, currVal_91)) {
            this.renderer.setText(this._text_49, currVal_91);
            this._expr_91 = currVal_91;
        }
        var currVal_92 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.parentView.context.bed.series, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_92, currVal_92)) {
            this.renderer.setText(this._text_52, currVal_92);
            this._expr_92 = currVal_92;
        }
        var currVal_93 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.parentView.context.bed.price, ' Kr');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_93, currVal_93)) {
            this.renderer.setText(this._text_55, currVal_93);
            this._expr_93 = currVal_93;
        }
        var currVal_94 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.parentView.context.bed.name, ' details!');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_94, currVal_94)) {
            this.renderer.setText(this._text_64, currVal_94);
            this._expr_94 = currVal_94;
        }
        var currVal_95 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.parentView.context.bed.description, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_95, currVal_95)) {
            this.renderer.setText(this._text_72, currVal_95);
            this._expr_95 = currVal_95;
        }
    };
    View_BedComponent1.prototype.destroyInternal = function () {
        this._vc_6.destroyNestedViews();
    };
    View_BedComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_BedComponent1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 6)) {
            return new View_BedComponent2(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        return null;
    };
    View_BedComponent1.prototype.handleEvent_77 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.goBack() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_BedComponent1.prototype.handleEvent_80 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.addToCart() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_BedComponent1;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_BedComponent2 = (function (_super) {
    __extends(View_BedComponent2, _super);
    function View_BedComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_BedComponent2, renderType_BedComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_15__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_BedComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'img', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-image w3-round w3-border'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_BedComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this.parentView.parentView.context.pictures[0].image;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_0, 'src', this.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_16__angular_core_src_security__["b" /* SecurityContext */].URL, currVal_1));
            this._expr_1 = currVal_1;
        }
    };
    View_BedComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BedComponent2;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/bed.component.ngfactory.js.map

/***/ },

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_Components_frontpage_Frontpage_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__frontpage_component_css_shim_ngstyle__ = __webpack_require__(395);
/* unused harmony export Wrapper_FrontpageComponent */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FrontpageComponentNgFactory; });
/* unused harmony export View_FrontpageComponent0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};








var Wrapper_FrontpageComponent = (function () {
    function Wrapper_FrontpageComponent() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_Components_frontpage_Frontpage_component__["a" /* FrontpageComponent */]();
    }
    Wrapper_FrontpageComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_FrontpageComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_FrontpageComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_FrontpageComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_FrontpageComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_FrontpageComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_FrontpageComponent;
}());
var renderType_FrontpageComponent_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_FrontpageComponent_Host0 = (function (_super) {
    __extends(View_FrontpageComponent_Host0, _super);
    function View_FrontpageComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_FrontpageComponent_Host0, renderType_FrontpageComponent_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_FrontpageComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'app-frontpage', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_FrontpageComponent0(this.viewUtils, this, 0, this._el_0);
        this._FrontpageComponent_0_3 = new Wrapper_FrontpageComponent();
        this.compView_0.create(this._FrontpageComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["b" /* ComponentRef_ */](0, this, this._el_0, this._FrontpageComponent_0_3.context);
    };
    View_FrontpageComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_Components_frontpage_Frontpage_component__["a" /* FrontpageComponent */]) && (0 === requestNodeIndex))) {
            return this._FrontpageComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_FrontpageComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._FrontpageComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_FrontpageComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_FrontpageComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_FrontpageComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var FrontpageComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["a" /* ComponentFactory */]('app-frontpage', View_FrontpageComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_Components_frontpage_Frontpage_component__["a" /* FrontpageComponent */]);
var styles_FrontpageComponent = [__WEBPACK_IMPORTED_MODULE_7__frontpage_component_css_shim_ngstyle__["a" /* styles */]];
var renderType_FrontpageComponent = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_FrontpageComponent, {});
var View_FrontpageComponent0 = (function (_super) {
    __extends(View_FrontpageComponent0, _super);
    function View_FrontpageComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_FrontpageComponent0, renderType_FrontpageComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_FrontpageComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  frontpage works!\n', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2
        ]), null);
        return null;
    };
    return View_FrontpageComponent0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/Frontpage.component.ngfactory.js.map

/***/ },

/***/ 395:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = [''];
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/frontpage.component.css.shim.ngstyle.js.map

/***/ },

/***/ 396:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = [''];
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/new-bed.component.css.shim.ngstyle.js.map

/***/ },

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_Components_new_bed_new_bed_component__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_Services_bed_chooser_bed_chooser_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__new_bed_component_css_shim_ngstyle__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gendir_node_modules_angular_forms_src_directives_ng_form_ngfactory__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__gendir_node_modules_angular_forms_src_directives_validators_ngfactory__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_ng_model_ngfactory__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_view_container__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_core_src_linker_element_ref__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_template_ref__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_forms_src_directives_default_value_accessor__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_validators__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_validators__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_ng_model__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_common_src_directives_ng_if__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_ng_form__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_forms_src_directives_control_container__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_core_src_security__ = __webpack_require__(54);
/* unused harmony export Wrapper_NewBedComponent */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NewBedComponentNgFactory; });
/* unused harmony export View_NewBedComponent0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};































var Wrapper_NewBedComponent = (function () {
    function Wrapper_NewBedComponent(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_Components_new_bed_new_bed_component__["a" /* NewBedComponent */](p0, p1);
    }
    Wrapper_NewBedComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NewBedComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_NewBedComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_NewBedComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NewBedComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NewBedComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NewBedComponent;
}());
var renderType_NewBedComponent_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_NewBedComponent_Host0 = (function (_super) {
    __extends(View_NewBedComponent_Host0, _super);
    function View_NewBedComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_NewBedComponent_Host0, renderType_NewBedComponent_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_NewBedComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'app-new-bed', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_NewBedComponent0(this.viewUtils, this, 0, this._el_0);
        this._NewBedComponent_0_3 = new Wrapper_NewBedComponent(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__app_Services_bed_chooser_bed_chooser_service__["a" /* BedChooserService */], this.parentIndex), this.injectorGet(__WEBPACK_IMPORTED_MODULE_8__angular_router_src_router__["a" /* Router */], this.parentIndex));
        this.compView_0.create(this._NewBedComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["b" /* ComponentRef_ */](0, this, this._el_0, this._NewBedComponent_0_3.context);
    };
    View_NewBedComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_Components_new_bed_new_bed_component__["a" /* NewBedComponent */]) && (0 === requestNodeIndex))) {
            return this._NewBedComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_NewBedComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NewBedComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_NewBedComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_NewBedComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_NewBedComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var NewBedComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["a" /* ComponentFactory */]('app-new-bed', View_NewBedComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_Components_new_bed_new_bed_component__["a" /* NewBedComponent */]);
var styles_NewBedComponent = [__WEBPACK_IMPORTED_MODULE_9__new_bed_component_css_shim_ngstyle__["a" /* styles */]];
var renderType_NewBedComponent = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_NewBedComponent, {});
var View_NewBedComponent0 = (function (_super) {
    __extends(View_NewBedComponent0, _super);
    function View_NewBedComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_NewBedComponent0, renderType_NewBedComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
        this._expr_243 = __WEBPACK_IMPORTED_MODULE_17__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_244 = __WEBPACK_IMPORTED_MODULE_17__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_245 = __WEBPACK_IMPORTED_MODULE_17__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_246 = __WEBPACK_IMPORTED_MODULE_17__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_247 = __WEBPACK_IMPORTED_MODULE_17__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_248 = __WEBPACK_IMPORTED_MODULE_17__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_249 = __WEBPACK_IMPORTED_MODULE_17__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_250 = __WEBPACK_IMPORTED_MODULE_17__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_NewBedComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-quarter'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-container w3-teal'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'h2', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_5 = this.renderer.createText(this._el_4, 'New Bed', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_8 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'form', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-container'), null);
        this._NgForm_8_3 = new __WEBPACK_IMPORTED_MODULE_10__gendir_node_modules_angular_forms_src_directives_ng_form_ngfactory__["a" /* Wrapper_NgForm */](null, null);
        this._ControlContainer_8_4 = this._NgForm_8_3.context;
        this._NgControlStatusGroup_8_5 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__["a" /* Wrapper_NgControlStatusGroup */](this._ControlContainer_8_4);
        this._text_9 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_10 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_8, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_11 = this.renderer.createText(this._el_10, '\n      ', null);
        this._el_12 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_10, 'label', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_13 = this.renderer.createText(this._el_12, 'Name', null);
        this._text_14 = this.renderer.createText(this._el_10, '\n      ', null);
        this._el_15 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_10, 'input', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](8, 'class', 'w3-input', 'name', 'name', 'required', '', 'type', 'text'), null);
        this._DefaultValueAccessor_15_3 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__["a" /* Wrapper_DefaultValueAccessor */](this.renderer, new __WEBPACK_IMPORTED_MODULE_18__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_15));
        this._RequiredValidator_15_4 = new __WEBPACK_IMPORTED_MODULE_13__gendir_node_modules_angular_forms_src_directives_validators_ngfactory__["a" /* Wrapper_RequiredValidator */]();
        this._NG_VALIDATORS_15_5 = [this._RequiredValidator_15_4.context];
        this._NG_VALUE_ACCESSOR_15_6 = [this._DefaultValueAccessor_15_3.context];
        this._NgModel_15_7 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_ng_model_ngfactory__["a" /* Wrapper_NgModel */](this._ControlContainer_8_4, this._NG_VALIDATORS_15_5, null, this._NG_VALUE_ACCESSOR_15_6);
        this._NgControl_15_8 = this._NgModel_15_7.context;
        this._NgControlStatus_15_9 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__["b" /* Wrapper_NgControlStatus */](this._NgControl_15_8);
        this._text_16 = this.renderer.createText(this._el_10, '\n    ', null);
        this._text_17 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_18 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_8, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_19 = this.renderer.createText(this._el_18, '\n      ', null);
        this._el_20 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_18, 'label', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_21 = this.renderer.createText(this._el_20, 'Images', null);
        this._text_22 = this.renderer.createText(this._el_18, '\n      ', null);
        this._el_23 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_18, 'input', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray16"](10, 'base-sixty-four-input', '', 'class', 'w3-input', 'multiple', '', 'name', 'pictures', 'type', 'file'), null);
        this._text_24 = this.renderer.createText(this._el_18, '\n    ', null);
        this._text_25 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_26 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_8, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_27 = this.renderer.createText(this._el_26, '\n      ', null);
        this._el_28 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_26, 'label', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_29 = this.renderer.createText(this._el_28, 'Description', null);
        this._text_30 = this.renderer.createText(this._el_26, '\n      ', null);
        this._el_31 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_26, 'textarea', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'w3-input', 'name', 'description'), null);
        this._DefaultValueAccessor_31_3 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__["a" /* Wrapper_DefaultValueAccessor */](this.renderer, new __WEBPACK_IMPORTED_MODULE_18__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_31));
        this._NG_VALUE_ACCESSOR_31_4 = [this._DefaultValueAccessor_31_3.context];
        this._NgModel_31_5 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_ng_model_ngfactory__["a" /* Wrapper_NgModel */](this._ControlContainer_8_4, null, null, this._NG_VALUE_ACCESSOR_31_4);
        this._NgControl_31_6 = this._NgModel_31_5.context;
        this._NgControlStatus_31_7 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__["b" /* Wrapper_NgControlStatus */](this._NgControl_31_6);
        this._text_32 = this.renderer.createText(this._el_26, '\n    ', null);
        this._text_33 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_34 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_8, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_35 = this.renderer.createText(this._el_34, '\n      ', null);
        this._el_36 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_34, 'label', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_37 = this.renderer.createText(this._el_36, 'Type', null);
        this._text_38 = this.renderer.createText(this._el_34, '\n      ', null);
        this._el_39 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_34, 'input', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](8, 'class', 'w3-input', 'name', 'type', 'required', '', 'type', 'text'), null);
        this._DefaultValueAccessor_39_3 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__["a" /* Wrapper_DefaultValueAccessor */](this.renderer, new __WEBPACK_IMPORTED_MODULE_18__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_39));
        this._RequiredValidator_39_4 = new __WEBPACK_IMPORTED_MODULE_13__gendir_node_modules_angular_forms_src_directives_validators_ngfactory__["a" /* Wrapper_RequiredValidator */]();
        this._NG_VALIDATORS_39_5 = [this._RequiredValidator_39_4.context];
        this._NG_VALUE_ACCESSOR_39_6 = [this._DefaultValueAccessor_39_3.context];
        this._NgModel_39_7 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_ng_model_ngfactory__["a" /* Wrapper_NgModel */](this._ControlContainer_8_4, this._NG_VALIDATORS_39_5, null, this._NG_VALUE_ACCESSOR_39_6);
        this._NgControl_39_8 = this._NgModel_39_7.context;
        this._NgControlStatus_39_9 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__["b" /* Wrapper_NgControlStatus */](this._NgControl_39_8);
        this._text_40 = this.renderer.createText(this._el_34, '\n    ', null);
        this._text_41 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_42 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_8, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_43 = this.renderer.createText(this._el_42, '\n      ', null);
        this._el_44 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_42, 'label', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_45 = this.renderer.createText(this._el_44, 'Series', null);
        this._text_46 = this.renderer.createText(this._el_42, '\n      ', null);
        this._el_47 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_42, 'input', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](8, 'class', 'w3-input', 'name', 'series', 'required', '', 'type', 'text'), null);
        this._DefaultValueAccessor_47_3 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__["a" /* Wrapper_DefaultValueAccessor */](this.renderer, new __WEBPACK_IMPORTED_MODULE_18__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_47));
        this._RequiredValidator_47_4 = new __WEBPACK_IMPORTED_MODULE_13__gendir_node_modules_angular_forms_src_directives_validators_ngfactory__["a" /* Wrapper_RequiredValidator */]();
        this._NG_VALIDATORS_47_5 = [this._RequiredValidator_47_4.context];
        this._NG_VALUE_ACCESSOR_47_6 = [this._DefaultValueAccessor_47_3.context];
        this._NgModel_47_7 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_ng_model_ngfactory__["a" /* Wrapper_NgModel */](this._ControlContainer_8_4, this._NG_VALIDATORS_47_5, null, this._NG_VALUE_ACCESSOR_47_6);
        this._NgControl_47_8 = this._NgModel_47_7.context;
        this._NgControlStatus_47_9 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__["b" /* Wrapper_NgControlStatus */](this._NgControl_47_8);
        this._text_48 = this.renderer.createText(this._el_42, '\n    ', null);
        this._text_49 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_50 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_8, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_51 = this.renderer.createText(this._el_50, '\n      ', null);
        this._el_52 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_50, 'label', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_53 = this.renderer.createText(this._el_52, 'Size', null);
        this._text_54 = this.renderer.createText(this._el_50, '\n      ', null);
        this._el_55 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_50, 'input', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](8, 'class', 'w3-input', 'name', 'size', 'required', '', 'type', 'text'), null);
        this._DefaultValueAccessor_55_3 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__["a" /* Wrapper_DefaultValueAccessor */](this.renderer, new __WEBPACK_IMPORTED_MODULE_18__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_55));
        this._RequiredValidator_55_4 = new __WEBPACK_IMPORTED_MODULE_13__gendir_node_modules_angular_forms_src_directives_validators_ngfactory__["a" /* Wrapper_RequiredValidator */]();
        this._NG_VALIDATORS_55_5 = [this._RequiredValidator_55_4.context];
        this._NG_VALUE_ACCESSOR_55_6 = [this._DefaultValueAccessor_55_3.context];
        this._NgModel_55_7 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_ng_model_ngfactory__["a" /* Wrapper_NgModel */](this._ControlContainer_8_4, this._NG_VALIDATORS_55_5, null, this._NG_VALUE_ACCESSOR_55_6);
        this._NgControl_55_8 = this._NgModel_55_7.context;
        this._NgControlStatus_55_9 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__["b" /* Wrapper_NgControlStatus */](this._NgControl_55_8);
        this._text_56 = this.renderer.createText(this._el_50, '\n    ', null);
        this._text_57 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_58 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_8, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_59 = this.renderer.createText(this._el_58, '\n      ', null);
        this._el_60 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_58, 'label', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_61 = this.renderer.createText(this._el_60, 'Color', null);
        this._text_62 = this.renderer.createText(this._el_58, '\n      ', null);
        this._el_63 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_58, 'input', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](8, 'class', 'w3-input', 'name', 'color', 'required', '', 'type', 'text'), null);
        this._DefaultValueAccessor_63_3 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__["a" /* Wrapper_DefaultValueAccessor */](this.renderer, new __WEBPACK_IMPORTED_MODULE_18__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_63));
        this._RequiredValidator_63_4 = new __WEBPACK_IMPORTED_MODULE_13__gendir_node_modules_angular_forms_src_directives_validators_ngfactory__["a" /* Wrapper_RequiredValidator */]();
        this._NG_VALIDATORS_63_5 = [this._RequiredValidator_63_4.context];
        this._NG_VALUE_ACCESSOR_63_6 = [this._DefaultValueAccessor_63_3.context];
        this._NgModel_63_7 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_ng_model_ngfactory__["a" /* Wrapper_NgModel */](this._ControlContainer_8_4, this._NG_VALIDATORS_63_5, null, this._NG_VALUE_ACCESSOR_63_6);
        this._NgControl_63_8 = this._NgModel_63_7.context;
        this._NgControlStatus_63_9 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__["b" /* Wrapper_NgControlStatus */](this._NgControl_63_8);
        this._text_64 = this.renderer.createText(this._el_58, '\n    ', null);
        this._text_65 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_66 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_8, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_67 = this.renderer.createText(this._el_66, '\n      ', null);
        this._el_68 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_66, 'label', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_69 = this.renderer.createText(this._el_68, 'Fabric', null);
        this._text_70 = this.renderer.createText(this._el_66, '\n      ', null);
        this._el_71 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_66, 'input', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](8, 'class', 'w3-input', 'name', 'fabric', 'required', '', 'type', 'text'), null);
        this._DefaultValueAccessor_71_3 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__["a" /* Wrapper_DefaultValueAccessor */](this.renderer, new __WEBPACK_IMPORTED_MODULE_18__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_71));
        this._RequiredValidator_71_4 = new __WEBPACK_IMPORTED_MODULE_13__gendir_node_modules_angular_forms_src_directives_validators_ngfactory__["a" /* Wrapper_RequiredValidator */]();
        this._NG_VALIDATORS_71_5 = [this._RequiredValidator_71_4.context];
        this._NG_VALUE_ACCESSOR_71_6 = [this._DefaultValueAccessor_71_3.context];
        this._NgModel_71_7 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_ng_model_ngfactory__["a" /* Wrapper_NgModel */](this._ControlContainer_8_4, this._NG_VALIDATORS_71_5, null, this._NG_VALUE_ACCESSOR_71_6);
        this._NgControl_71_8 = this._NgModel_71_7.context;
        this._NgControlStatus_71_9 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__["b" /* Wrapper_NgControlStatus */](this._NgControl_71_8);
        this._text_72 = this.renderer.createText(this._el_66, '\n    ', null);
        this._text_73 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_74 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_8, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_75 = this.renderer.createText(this._el_74, '\n      ', null);
        this._el_76 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_74, 'label', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_77 = this.renderer.createText(this._el_76, 'Price', null);
        this._text_78 = this.renderer.createText(this._el_74, '\n      ', null);
        this._el_79 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_74, 'input', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](8, 'class', 'w3-input', 'name', 'price', 'required', '', 'type', 'text'), null);
        this._DefaultValueAccessor_79_3 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__["a" /* Wrapper_DefaultValueAccessor */](this.renderer, new __WEBPACK_IMPORTED_MODULE_18__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_79));
        this._RequiredValidator_79_4 = new __WEBPACK_IMPORTED_MODULE_13__gendir_node_modules_angular_forms_src_directives_validators_ngfactory__["a" /* Wrapper_RequiredValidator */]();
        this._NG_VALIDATORS_79_5 = [this._RequiredValidator_79_4.context];
        this._NG_VALUE_ACCESSOR_79_6 = [this._DefaultValueAccessor_79_3.context];
        this._NgModel_79_7 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_ng_model_ngfactory__["a" /* Wrapper_NgModel */](this._ControlContainer_8_4, this._NG_VALIDATORS_79_5, null, this._NG_VALUE_ACCESSOR_79_6);
        this._NgControl_79_8 = this._NgModel_79_7.context;
        this._NgControlStatus_79_9 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__["b" /* Wrapper_NgControlStatus */](this._NgControl_79_8);
        this._text_80 = this.renderer.createText(this._el_74, '\n    ', null);
        this._text_81 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_82 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_8, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_83 = this.renderer.createText(this._el_82, '\n      ', null);
        this._el_84 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_82, 'button', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-btn w3-teal'), null);
        this._text_85 = this.renderer.createText(this._el_84, 'Add new bed', null);
        this._text_86 = this.renderer.createText(this._el_82, '\n    ', null);
        this._text_87 = this.renderer.createText(this._el_8, '\n    ', null);
        this._anchor_88 = this.renderer.createTemplateAnchor(this._el_8, null);
        this._vc_88 = new __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_view_container__["a" /* ViewContainer */](88, 8, this, this._anchor_88);
        this._TemplateRef_88_5 = new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 88, this._anchor_88);
        this._NgIf_88_6 = new __WEBPACK_IMPORTED_MODULE_16__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_88.vcRef, this._TemplateRef_88_5);
        this._text_89 = this.renderer.createText(this._el_8, '\n  ', null);
        this._text_90 = this.renderer.createText(this._el_0, '\n', null);
        this._text_91 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_92 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-right w3-twothird w3-border w3-padding-large'), null);
        this._text_93 = this.renderer.createText(this._el_92, '\n  ', null);
        this._el_94 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_92, 'h2', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_95 = this.renderer.createText(this._el_94, ' Preview', null);
        this._text_96 = this.renderer.createText(this._el_92, '\n  ', null);
        this._el_97 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_92, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-twothird'), null);
        this._text_98 = this.renderer.createText(this._el_97, '\n    ', null);
        this._el_99 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_97, 'div', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_100 = this.renderer.createText(this._el_99, '\n      ', null);
        this._anchor_101 = this.renderer.createTemplateAnchor(this._el_99, null);
        this._vc_101 = new __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_view_container__["a" /* ViewContainer */](101, 99, this, this._anchor_101);
        this._TemplateRef_101_5 = new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 101, this._anchor_101);
        this._NgIf_101_6 = new __WEBPACK_IMPORTED_MODULE_16__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_101.vcRef, this._TemplateRef_101_5);
        this._text_102 = this.renderer.createText(this._el_99, '\n    ', null);
        this._text_103 = this.renderer.createText(this._el_97, '\n    ', null);
        this._el_104 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_97, 'table', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-table w3-border'), null);
        this._text_105 = this.renderer.createText(this._el_104, '\n      ', null);
        this._el_106 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_104, 'thead', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-teal'), null);
        this._text_107 = this.renderer.createText(this._el_106, '\n        ', null);
        this._el_108 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_106, 'tr', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_109 = this.renderer.createText(this._el_108, '\n          ', null);
        this._el_110 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_108, 'th', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_111 = this.renderer.createText(this._el_110, 'Type ', null);
        this._text_112 = this.renderer.createText(this._el_108, '\n          ', null);
        this._el_113 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_108, 'th', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_114 = this.renderer.createText(this._el_113, 'Color ', null);
        this._text_115 = this.renderer.createText(this._el_108, '\n          ', null);
        this._el_116 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_108, 'th', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_117 = this.renderer.createText(this._el_116, 'Fabric ', null);
        this._text_118 = this.renderer.createText(this._el_108, '\n          ', null);
        this._el_119 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_108, 'th', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_120 = this.renderer.createText(this._el_119, 'Size ', null);
        this._text_121 = this.renderer.createText(this._el_108, '\n          ', null);
        this._el_122 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_108, 'th', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_123 = this.renderer.createText(this._el_122, 'Series ', null);
        this._text_124 = this.renderer.createText(this._el_108, '\n          ', null);
        this._el_125 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_108, 'th', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_126 = this.renderer.createText(this._el_125, 'Price ', null);
        this._text_127 = this.renderer.createText(this._el_108, '\n        ', null);
        this._text_128 = this.renderer.createText(this._el_106, '\n      ', null);
        this._text_129 = this.renderer.createText(this._el_104, '\n      ', null);
        this._el_130 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_104, 'tbody', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_131 = this.renderer.createText(this._el_130, '\n        ', null);
        this._el_132 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_130, 'tr', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_133 = this.renderer.createText(this._el_132, '\n          ', null);
        this._el_134 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_132, 'td', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_135 = this.renderer.createText(this._el_134, '', null);
        this._text_136 = this.renderer.createText(this._el_132, '\n          ', null);
        this._el_137 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_132, 'td', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_138 = this.renderer.createText(this._el_137, '', null);
        this._text_139 = this.renderer.createText(this._el_132, '\n          ', null);
        this._el_140 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_132, 'td', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_141 = this.renderer.createText(this._el_140, '', null);
        this._text_142 = this.renderer.createText(this._el_132, '\n          ', null);
        this._el_143 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_132, 'td', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_144 = this.renderer.createText(this._el_143, '', null);
        this._text_145 = this.renderer.createText(this._el_132, '\n          ', null);
        this._el_146 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_132, 'td', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_147 = this.renderer.createText(this._el_146, '', null);
        this._text_148 = this.renderer.createText(this._el_132, '\n          ', null);
        this._el_149 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_132, 'td', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_150 = this.renderer.createText(this._el_149, '', null);
        this._text_151 = this.renderer.createText(this._el_132, '\n        ', null);
        this._text_152 = this.renderer.createText(this._el_130, '\n      ', null);
        this._text_153 = this.renderer.createText(this._el_104, '\n    ', null);
        this._text_154 = this.renderer.createText(this._el_97, '\n  ', null);
        this._text_155 = this.renderer.createText(this._el_92, '\n\n  ', null);
        this._el_156 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_92, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-third'), null);
        this._text_157 = this.renderer.createText(this._el_156, '\n    ', null);
        this._el_158 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_156, 'h2', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-teal'), null);
        this._text_159 = this.renderer.createText(this._el_158, '', null);
        this._text_160 = this.renderer.createText(this._el_156, '\n    ', null);
        this._el_161 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_156, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-border w3-bordered'), null);
        this._text_162 = this.renderer.createText(this._el_161, '\n      ', null);
        this._el_163 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_161, 'label', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_164 = this.renderer.createText(this._el_163, 'Description: ', null);
        this._text_165 = this.renderer.createText(this._el_161, '\n      ', null);
        this._el_166 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_161, 'label', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_167 = this.renderer.createText(this._el_166, '', null);
        this._text_168 = this.renderer.createText(this._el_161, '\n    ', null);
        this._text_169 = this.renderer.createText(this._el_156, '\n    ', null);
        this._el_170 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_156, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-margin'), null);
        this._text_171 = this.renderer.createText(this._el_170, '\n      ', null);
        this._el_172 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_170, 'button', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_173 = this.renderer.createText(this._el_172, 'Back', null);
        this._text_174 = this.renderer.createText(this._el_170, '\n      ', null);
        this._el_175 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_170, 'button', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_176 = this.renderer.createText(this._el_175, 'Add to cart', null);
        this._text_177 = this.renderer.createText(this._el_170, '\n    ', null);
        this._text_178 = this.renderer.createText(this._el_156, '\n  ', null);
        this._text_179 = this.renderer.createText(this._el_92, '\n', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_8, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_8));
        var disposable_1 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_15, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_15));
        this._NgModel_15_7.subscribe(this, this.eventHandler(this.handleEvent_15), true);
        var disposable_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_23, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'change', null), this.eventHandler(this.handleEvent_23));
        var disposable_3 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_31, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_31));
        this._NgModel_31_5.subscribe(this, this.eventHandler(this.handleEvent_31), true);
        var disposable_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_39, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_39));
        this._NgModel_39_7.subscribe(this, this.eventHandler(this.handleEvent_39), true);
        var disposable_5 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_47, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_47));
        this._NgModel_47_7.subscribe(this, this.eventHandler(this.handleEvent_47), true);
        var disposable_6 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_55, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_55));
        this._NgModel_55_7.subscribe(this, this.eventHandler(this.handleEvent_55), true);
        var disposable_7 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_63, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_63));
        this._NgModel_63_7.subscribe(this, this.eventHandler(this.handleEvent_63), true);
        var disposable_8 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_71, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_71));
        this._NgModel_71_7.subscribe(this, this.eventHandler(this.handleEvent_71), true);
        var disposable_9 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_79, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_79));
        this._NgModel_79_7.subscribe(this, this.eventHandler(this.handleEvent_79), true);
        var disposable_10 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_84, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_84));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._text_46,
            this._el_47,
            this._text_48,
            this._text_49,
            this._el_50,
            this._text_51,
            this._el_52,
            this._text_53,
            this._text_54,
            this._el_55,
            this._text_56,
            this._text_57,
            this._el_58,
            this._text_59,
            this._el_60,
            this._text_61,
            this._text_62,
            this._el_63,
            this._text_64,
            this._text_65,
            this._el_66,
            this._text_67,
            this._el_68,
            this._text_69,
            this._text_70,
            this._el_71,
            this._text_72,
            this._text_73,
            this._el_74,
            this._text_75,
            this._el_76,
            this._text_77,
            this._text_78,
            this._el_79,
            this._text_80,
            this._text_81,
            this._el_82,
            this._text_83,
            this._el_84,
            this._text_85,
            this._text_86,
            this._text_87,
            this._anchor_88,
            this._text_89,
            this._text_90,
            this._text_91,
            this._el_92,
            this._text_93,
            this._el_94,
            this._text_95,
            this._text_96,
            this._el_97,
            this._text_98,
            this._el_99,
            this._text_100,
            this._anchor_101,
            this._text_102,
            this._text_103,
            this._el_104,
            this._text_105,
            this._el_106,
            this._text_107,
            this._el_108,
            this._text_109,
            this._el_110,
            this._text_111,
            this._text_112,
            this._el_113,
            this._text_114,
            this._text_115,
            this._el_116,
            this._text_117,
            this._text_118,
            this._el_119,
            this._text_120,
            this._text_121,
            this._el_122,
            this._text_123,
            this._text_124,
            this._el_125,
            this._text_126,
            this._text_127,
            this._text_128,
            this._text_129,
            this._el_130,
            this._text_131,
            this._el_132,
            this._text_133,
            this._el_134,
            this._text_135,
            this._text_136,
            this._el_137,
            this._text_138,
            this._text_139,
            this._el_140,
            this._text_141,
            this._text_142,
            this._el_143,
            this._text_144,
            this._text_145,
            this._el_146,
            this._text_147,
            this._text_148,
            this._el_149,
            this._text_150,
            this._text_151,
            this._text_152,
            this._text_153,
            this._text_154,
            this._text_155,
            this._el_156,
            this._text_157,
            this._el_158,
            this._text_159,
            this._text_160,
            this._el_161,
            this._text_162,
            this._el_163,
            this._text_164,
            this._text_165,
            this._el_166,
            this._text_167,
            this._text_168,
            this._text_169,
            this._el_170,
            this._text_171,
            this._el_172,
            this._text_173,
            this._text_174,
            this._el_175,
            this._text_176,
            this._text_177,
            this._text_178,
            this._text_179
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6,
            disposable_7,
            disposable_8,
            disposable_9,
            disposable_10
        ]);
        return null;
    };
    View_NewBedComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_forms_src_directives_default_value_accessor__["a" /* DefaultValueAccessor */]) && (15 === requestNodeIndex))) {
            return this._DefaultValueAccessor_15_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_validators__["a" /* RequiredValidator */]) && (15 === requestNodeIndex))) {
            return this._RequiredValidator_15_4.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_validators__["b" /* NG_VALIDATORS */]) && (15 === requestNodeIndex))) {
            return this._NG_VALIDATORS_15_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__["a" /* NG_VALUE_ACCESSOR */]) && (15 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_15_6;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_ng_model__["a" /* NgModel */]) && (15 === requestNodeIndex))) {
            return this._NgModel_15_7.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__["a" /* NgControl */]) && (15 === requestNodeIndex))) {
            return this._NgControl_15_8;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__["a" /* NgControlStatus */]) && (15 === requestNodeIndex))) {
            return this._NgControlStatus_15_9.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_forms_src_directives_default_value_accessor__["a" /* DefaultValueAccessor */]) && (31 === requestNodeIndex))) {
            return this._DefaultValueAccessor_31_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__["a" /* NG_VALUE_ACCESSOR */]) && (31 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_31_4;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_ng_model__["a" /* NgModel */]) && (31 === requestNodeIndex))) {
            return this._NgModel_31_5.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__["a" /* NgControl */]) && (31 === requestNodeIndex))) {
            return this._NgControl_31_6;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__["a" /* NgControlStatus */]) && (31 === requestNodeIndex))) {
            return this._NgControlStatus_31_7.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_forms_src_directives_default_value_accessor__["a" /* DefaultValueAccessor */]) && (39 === requestNodeIndex))) {
            return this._DefaultValueAccessor_39_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_validators__["a" /* RequiredValidator */]) && (39 === requestNodeIndex))) {
            return this._RequiredValidator_39_4.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_validators__["b" /* NG_VALIDATORS */]) && (39 === requestNodeIndex))) {
            return this._NG_VALIDATORS_39_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__["a" /* NG_VALUE_ACCESSOR */]) && (39 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_39_6;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_ng_model__["a" /* NgModel */]) && (39 === requestNodeIndex))) {
            return this._NgModel_39_7.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__["a" /* NgControl */]) && (39 === requestNodeIndex))) {
            return this._NgControl_39_8;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__["a" /* NgControlStatus */]) && (39 === requestNodeIndex))) {
            return this._NgControlStatus_39_9.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_forms_src_directives_default_value_accessor__["a" /* DefaultValueAccessor */]) && (47 === requestNodeIndex))) {
            return this._DefaultValueAccessor_47_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_validators__["a" /* RequiredValidator */]) && (47 === requestNodeIndex))) {
            return this._RequiredValidator_47_4.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_validators__["b" /* NG_VALIDATORS */]) && (47 === requestNodeIndex))) {
            return this._NG_VALIDATORS_47_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__["a" /* NG_VALUE_ACCESSOR */]) && (47 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_47_6;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_ng_model__["a" /* NgModel */]) && (47 === requestNodeIndex))) {
            return this._NgModel_47_7.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__["a" /* NgControl */]) && (47 === requestNodeIndex))) {
            return this._NgControl_47_8;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__["a" /* NgControlStatus */]) && (47 === requestNodeIndex))) {
            return this._NgControlStatus_47_9.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_forms_src_directives_default_value_accessor__["a" /* DefaultValueAccessor */]) && (55 === requestNodeIndex))) {
            return this._DefaultValueAccessor_55_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_validators__["a" /* RequiredValidator */]) && (55 === requestNodeIndex))) {
            return this._RequiredValidator_55_4.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_validators__["b" /* NG_VALIDATORS */]) && (55 === requestNodeIndex))) {
            return this._NG_VALIDATORS_55_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__["a" /* NG_VALUE_ACCESSOR */]) && (55 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_55_6;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_ng_model__["a" /* NgModel */]) && (55 === requestNodeIndex))) {
            return this._NgModel_55_7.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__["a" /* NgControl */]) && (55 === requestNodeIndex))) {
            return this._NgControl_55_8;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__["a" /* NgControlStatus */]) && (55 === requestNodeIndex))) {
            return this._NgControlStatus_55_9.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_forms_src_directives_default_value_accessor__["a" /* DefaultValueAccessor */]) && (63 === requestNodeIndex))) {
            return this._DefaultValueAccessor_63_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_validators__["a" /* RequiredValidator */]) && (63 === requestNodeIndex))) {
            return this._RequiredValidator_63_4.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_validators__["b" /* NG_VALIDATORS */]) && (63 === requestNodeIndex))) {
            return this._NG_VALIDATORS_63_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__["a" /* NG_VALUE_ACCESSOR */]) && (63 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_63_6;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_ng_model__["a" /* NgModel */]) && (63 === requestNodeIndex))) {
            return this._NgModel_63_7.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__["a" /* NgControl */]) && (63 === requestNodeIndex))) {
            return this._NgControl_63_8;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__["a" /* NgControlStatus */]) && (63 === requestNodeIndex))) {
            return this._NgControlStatus_63_9.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_forms_src_directives_default_value_accessor__["a" /* DefaultValueAccessor */]) && (71 === requestNodeIndex))) {
            return this._DefaultValueAccessor_71_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_validators__["a" /* RequiredValidator */]) && (71 === requestNodeIndex))) {
            return this._RequiredValidator_71_4.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_validators__["b" /* NG_VALIDATORS */]) && (71 === requestNodeIndex))) {
            return this._NG_VALIDATORS_71_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__["a" /* NG_VALUE_ACCESSOR */]) && (71 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_71_6;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_ng_model__["a" /* NgModel */]) && (71 === requestNodeIndex))) {
            return this._NgModel_71_7.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__["a" /* NgControl */]) && (71 === requestNodeIndex))) {
            return this._NgControl_71_8;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__["a" /* NgControlStatus */]) && (71 === requestNodeIndex))) {
            return this._NgControlStatus_71_9.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_forms_src_directives_default_value_accessor__["a" /* DefaultValueAccessor */]) && (79 === requestNodeIndex))) {
            return this._DefaultValueAccessor_79_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_validators__["a" /* RequiredValidator */]) && (79 === requestNodeIndex))) {
            return this._RequiredValidator_79_4.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_validators__["b" /* NG_VALIDATORS */]) && (79 === requestNodeIndex))) {
            return this._NG_VALIDATORS_79_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__["a" /* NG_VALUE_ACCESSOR */]) && (79 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_79_6;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_ng_model__["a" /* NgModel */]) && (79 === requestNodeIndex))) {
            return this._NgModel_79_7.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__["a" /* NgControl */]) && (79 === requestNodeIndex))) {
            return this._NgControl_79_8;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__["a" /* NgControlStatus */]) && (79 === requestNodeIndex))) {
            return this._NgControlStatus_79_9.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (88 === requestNodeIndex))) {
            return this._TemplateRef_88_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_27__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (88 === requestNodeIndex))) {
            return this._NgIf_88_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_ng_form__["a" /* NgForm */]) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 89)))) {
            return this._NgForm_8_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_29__angular_forms_src_directives_control_container__["a" /* ControlContainer */]) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 89)))) {
            return this._ControlContainer_8_4;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__["b" /* NgControlStatusGroup */]) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 89)))) {
            return this._NgControlStatusGroup_8_5.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (101 === requestNodeIndex))) {
            return this._TemplateRef_101_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_27__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (101 === requestNodeIndex))) {
            return this._NgIf_101_6.context;
        }
        return notFoundResult;
    };
    View_NewBedComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NgForm_8_3.ngDoCheck(this, this._el_8, throwOnChange);
        this._NgControlStatusGroup_8_5.ngDoCheck(this, this._el_8, throwOnChange);
        this._DefaultValueAccessor_15_3.ngDoCheck(this, this._el_15, throwOnChange);
        var currVal_15_1_0 = '';
        this._RequiredValidator_15_4.check_required(currVal_15_1_0, throwOnChange, false);
        this._RequiredValidator_15_4.ngDoCheck(this, this._el_15, throwOnChange);
        var currVal_15_2_0 = 'name';
        this._NgModel_15_7.check_name(currVal_15_2_0, throwOnChange, false);
        var currVal_15_2_1 = this.context.newBed.name;
        this._NgModel_15_7.check_model(currVal_15_2_1, throwOnChange, false);
        this._NgModel_15_7.ngDoCheck(this, this._el_15, throwOnChange);
        this._NgControlStatus_15_9.ngDoCheck(this, this._el_15, throwOnChange);
        this._DefaultValueAccessor_31_3.ngDoCheck(this, this._el_31, throwOnChange);
        var currVal_31_1_0 = 'description';
        this._NgModel_31_5.check_name(currVal_31_1_0, throwOnChange, false);
        var currVal_31_1_1 = this.context.newBed.description;
        this._NgModel_31_5.check_model(currVal_31_1_1, throwOnChange, false);
        this._NgModel_31_5.ngDoCheck(this, this._el_31, throwOnChange);
        this._NgControlStatus_31_7.ngDoCheck(this, this._el_31, throwOnChange);
        this._DefaultValueAccessor_39_3.ngDoCheck(this, this._el_39, throwOnChange);
        var currVal_39_1_0 = '';
        this._RequiredValidator_39_4.check_required(currVal_39_1_0, throwOnChange, false);
        this._RequiredValidator_39_4.ngDoCheck(this, this._el_39, throwOnChange);
        var currVal_39_2_0 = 'type';
        this._NgModel_39_7.check_name(currVal_39_2_0, throwOnChange, false);
        var currVal_39_2_1 = this.context.newBed.type;
        this._NgModel_39_7.check_model(currVal_39_2_1, throwOnChange, false);
        this._NgModel_39_7.ngDoCheck(this, this._el_39, throwOnChange);
        this._NgControlStatus_39_9.ngDoCheck(this, this._el_39, throwOnChange);
        this._DefaultValueAccessor_47_3.ngDoCheck(this, this._el_47, throwOnChange);
        var currVal_47_1_0 = '';
        this._RequiredValidator_47_4.check_required(currVal_47_1_0, throwOnChange, false);
        this._RequiredValidator_47_4.ngDoCheck(this, this._el_47, throwOnChange);
        var currVal_47_2_0 = 'series';
        this._NgModel_47_7.check_name(currVal_47_2_0, throwOnChange, false);
        var currVal_47_2_1 = this.context.newBed.series;
        this._NgModel_47_7.check_model(currVal_47_2_1, throwOnChange, false);
        this._NgModel_47_7.ngDoCheck(this, this._el_47, throwOnChange);
        this._NgControlStatus_47_9.ngDoCheck(this, this._el_47, throwOnChange);
        this._DefaultValueAccessor_55_3.ngDoCheck(this, this._el_55, throwOnChange);
        var currVal_55_1_0 = '';
        this._RequiredValidator_55_4.check_required(currVal_55_1_0, throwOnChange, false);
        this._RequiredValidator_55_4.ngDoCheck(this, this._el_55, throwOnChange);
        var currVal_55_2_0 = 'size';
        this._NgModel_55_7.check_name(currVal_55_2_0, throwOnChange, false);
        var currVal_55_2_1 = this.context.newBed.size;
        this._NgModel_55_7.check_model(currVal_55_2_1, throwOnChange, false);
        this._NgModel_55_7.ngDoCheck(this, this._el_55, throwOnChange);
        this._NgControlStatus_55_9.ngDoCheck(this, this._el_55, throwOnChange);
        this._DefaultValueAccessor_63_3.ngDoCheck(this, this._el_63, throwOnChange);
        var currVal_63_1_0 = '';
        this._RequiredValidator_63_4.check_required(currVal_63_1_0, throwOnChange, false);
        this._RequiredValidator_63_4.ngDoCheck(this, this._el_63, throwOnChange);
        var currVal_63_2_0 = 'color';
        this._NgModel_63_7.check_name(currVal_63_2_0, throwOnChange, false);
        var currVal_63_2_1 = this.context.newBed.color;
        this._NgModel_63_7.check_model(currVal_63_2_1, throwOnChange, false);
        this._NgModel_63_7.ngDoCheck(this, this._el_63, throwOnChange);
        this._NgControlStatus_63_9.ngDoCheck(this, this._el_63, throwOnChange);
        this._DefaultValueAccessor_71_3.ngDoCheck(this, this._el_71, throwOnChange);
        var currVal_71_1_0 = '';
        this._RequiredValidator_71_4.check_required(currVal_71_1_0, throwOnChange, false);
        this._RequiredValidator_71_4.ngDoCheck(this, this._el_71, throwOnChange);
        var currVal_71_2_0 = 'fabric';
        this._NgModel_71_7.check_name(currVal_71_2_0, throwOnChange, false);
        var currVal_71_2_1 = this.context.newBed.fabric;
        this._NgModel_71_7.check_model(currVal_71_2_1, throwOnChange, false);
        this._NgModel_71_7.ngDoCheck(this, this._el_71, throwOnChange);
        this._NgControlStatus_71_9.ngDoCheck(this, this._el_71, throwOnChange);
        this._DefaultValueAccessor_79_3.ngDoCheck(this, this._el_79, throwOnChange);
        var currVal_79_1_0 = '';
        this._RequiredValidator_79_4.check_required(currVal_79_1_0, throwOnChange, false);
        this._RequiredValidator_79_4.ngDoCheck(this, this._el_79, throwOnChange);
        var currVal_79_2_0 = 'price';
        this._NgModel_79_7.check_name(currVal_79_2_0, throwOnChange, false);
        var currVal_79_2_1 = this.context.newBed.price;
        this._NgModel_79_7.check_model(currVal_79_2_1, throwOnChange, false);
        this._NgModel_79_7.ngDoCheck(this, this._el_79, throwOnChange);
        this._NgControlStatus_79_9.ngDoCheck(this, this._el_79, throwOnChange);
        var currVal_88_0_0 = this.context.image;
        this._NgIf_88_6.check_ngIf(currVal_88_0_0, throwOnChange, false);
        this._NgIf_88_6.ngDoCheck(this, this._anchor_88, throwOnChange);
        var currVal_101_0_0 = this.context.image[0];
        this._NgIf_101_6.check_ngIf(currVal_101_0_0, throwOnChange, false);
        this._NgIf_101_6.ngDoCheck(this, this._anchor_101, throwOnChange);
        this._vc_88.detectChangesInNestedViews(throwOnChange);
        this._vc_101.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatusGroup_8_5.checkHost(this, this, this._el_8, throwOnChange);
        this._RequiredValidator_15_4.checkHost(this, this, this._el_15, throwOnChange);
        this._NgControlStatus_15_9.checkHost(this, this, this._el_15, throwOnChange);
        this._NgControlStatus_31_7.checkHost(this, this, this._el_31, throwOnChange);
        this._RequiredValidator_39_4.checkHost(this, this, this._el_39, throwOnChange);
        this._NgControlStatus_39_9.checkHost(this, this, this._el_39, throwOnChange);
        this._RequiredValidator_47_4.checkHost(this, this, this._el_47, throwOnChange);
        this._NgControlStatus_47_9.checkHost(this, this, this._el_47, throwOnChange);
        this._RequiredValidator_55_4.checkHost(this, this, this._el_55, throwOnChange);
        this._NgControlStatus_55_9.checkHost(this, this, this._el_55, throwOnChange);
        this._RequiredValidator_63_4.checkHost(this, this, this._el_63, throwOnChange);
        this._NgControlStatus_63_9.checkHost(this, this, this._el_63, throwOnChange);
        this._RequiredValidator_71_4.checkHost(this, this, this._el_71, throwOnChange);
        this._NgControlStatus_71_9.checkHost(this, this, this._el_71, throwOnChange);
        this._RequiredValidator_79_4.checkHost(this, this, this._el_79, throwOnChange);
        this._NgControlStatus_79_9.checkHost(this, this, this._el_79, throwOnChange);
        var currVal_243 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.newBed.type, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_243, currVal_243)) {
            this.renderer.setText(this._text_135, currVal_243);
            this._expr_243 = currVal_243;
        }
        var currVal_244 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.newBed.color, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_244, currVal_244)) {
            this.renderer.setText(this._text_138, currVal_244);
            this._expr_244 = currVal_244;
        }
        var currVal_245 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.newBed.fabric, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_245, currVal_245)) {
            this.renderer.setText(this._text_141, currVal_245);
            this._expr_245 = currVal_245;
        }
        var currVal_246 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.newBed.size, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_246, currVal_246)) {
            this.renderer.setText(this._text_144, currVal_246);
            this._expr_246 = currVal_246;
        }
        var currVal_247 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.newBed.series, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_247, currVal_247)) {
            this.renderer.setText(this._text_147, currVal_247);
            this._expr_247 = currVal_247;
        }
        var currVal_248 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.newBed.price, ' Kr');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_248, currVal_248)) {
            this.renderer.setText(this._text_150, currVal_248);
            this._expr_248 = currVal_248;
        }
        var currVal_249 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.newBed.name, ' details!');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_249, currVal_249)) {
            this.renderer.setText(this._text_159, currVal_249);
            this._expr_249 = currVal_249;
        }
        var currVal_250 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.newBed.description, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_250, currVal_250)) {
            this.renderer.setText(this._text_167, currVal_250);
            this._expr_250 = currVal_250;
        }
    };
    View_NewBedComponent0.prototype.destroyInternal = function () {
        this._vc_88.destroyNestedViews();
        this._vc_101.destroyNestedViews();
        this._NgModel_15_7.ngOnDestroy();
        this._NgModel_31_5.ngOnDestroy();
        this._NgModel_39_7.ngOnDestroy();
        this._NgModel_47_7.ngOnDestroy();
        this._NgModel_55_7.ngOnDestroy();
        this._NgModel_63_7.ngOnDestroy();
        this._NgModel_71_7.ngOnDestroy();
        this._NgModel_79_7.ngOnDestroy();
        this._NgForm_8_3.ngOnDestroy();
    };
    View_NewBedComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 88)) {
            return new View_NewBedComponent1(this.viewUtils, this, 88, this._anchor_88, this._vc_88);
        }
        if ((nodeIndex == 101)) {
            return new View_NewBedComponent2(this.viewUtils, this, 101, this._anchor_101, this._vc_101);
        }
        return null;
    };
    View_NewBedComponent0.prototype.handleEvent_8 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_8_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_NewBedComponent0.prototype.handleEvent_15 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_15_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.newBed.name = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_NewBedComponent0.prototype.handleEvent_23 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'change')) {
            var pd_sub_0 = (this.context.fileChangeEvent($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_NewBedComponent0.prototype.handleEvent_31 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_31_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.newBed.description = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_NewBedComponent0.prototype.handleEvent_39 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_39_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.newBed.type = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_NewBedComponent0.prototype.handleEvent_47 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_47_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.newBed.series = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_NewBedComponent0.prototype.handleEvent_55 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_55_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.newBed.size = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_NewBedComponent0.prototype.handleEvent_63 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_63_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.newBed.color = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_NewBedComponent0.prototype.handleEvent_71 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_71_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.newBed.fabric = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_NewBedComponent0.prototype.handleEvent_79 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_79_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.newBed.price = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_NewBedComponent0.prototype.handleEvent_84 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.add() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_NewBedComponent0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_NewBedComponent1 = (function (_super) {
    __extends(View_NewBedComponent1, _super);
    function View_NewBedComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_NewBedComponent1, renderType_NewBedComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_NewBedComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'img', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'data-ng-src', 'image'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_NewBedComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_NewBedComponent1;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_NewBedComponent2 = (function (_super) {
    __extends(View_NewBedComponent2, _super);
    function View_NewBedComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_NewBedComponent2, renderType_NewBedComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_17__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_NewBedComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'img', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-image w3-round w3-border'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_NewBedComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this.parentView.context.image[0];
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_0, 'src', this.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_30__angular_core_src_security__["b" /* SecurityContext */].URL, currVal_1));
            this._expr_1 = currVal_1;
        }
    };
    View_NewBedComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_NewBedComponent2;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/new-bed.component.ngfactory.js.map

/***/ },

/***/ 398:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['.active[_ngcontent-%COMP%] {\r\n   background-color: teal !important;\r\n   color: white !important;\r\n}'];
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/app.component.css.shim.ngstyle.js.map

/***/ },

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component_css_shim_ngstyle__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gendir_node_modules_angular_router_src_directives_router_link_ngfactory__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_router_src_directives_router_link_active_ngfactory__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_query_list__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_container__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_router_src_directives_router_outlet_ngfactory__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_router_src_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_router_src_router_state__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_src_location_location_strategy__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_element_ref__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_router_src_router_outlet_map__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_component_factory_resolver__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_router_src_directives_router_link__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_router_src_directives_router_link_active__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_router_src_directives_router_outlet__ = __webpack_require__(137);
/* unused harmony export Wrapper_AppComponent */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponentNgFactory; });
/* unused harmony export View_AppComponent0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};























var Wrapper_AppComponent = (function () {
    function Wrapper_AppComponent() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* AppComponent */]();
    }
    Wrapper_AppComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AppComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AppComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_AppComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AppComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AppComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AppComponent;
}());
var renderType_AppComponent_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_AppComponent_Host0 = (function (_super) {
    __extends(View_AppComponent_Host0, _super);
    function View_AppComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent_Host0, renderType_AppComponent_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_AppComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'app-root', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_AppComponent0(this.viewUtils, this, 0, this._el_0);
        this._AppComponent_0_3 = new Wrapper_AppComponent();
        this.compView_0.create(this._AppComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["b" /* ComponentRef_ */](0, this, this._el_0, this._AppComponent_0_3.context);
    };
    View_AppComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* AppComponent */]) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AppComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AppComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AppComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var AppComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["a" /* ComponentFactory */]('app-root', View_AppComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* AppComponent */]);
var styles_AppComponent = [__WEBPACK_IMPORTED_MODULE_7__app_component_css_shim_ngstyle__["a" /* styles */]];
var renderType_AppComponent = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_AppComponent, {});
var View_AppComponent0 = (function (_super) {
    __extends(View_AppComponent0, _super);
    function View_AppComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent0, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
        this._expr_40 = __WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'nav', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_4 = this.renderer.createText(this._el_3, '\n  ', null);
        this._el_5 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_3, 'ul', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-navbar w3-border w3-padding'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n    ', null);
        this._el_7 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_5, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._el_8 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_7, 'a', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](6, 'class', 'w3-border', 'routerLink', '/frontpage', 'routerLinkActive', 'active'), null);
        this._RouterLinkWithHref_8_3 = new __WEBPACK_IMPORTED_MODULE_8__gendir_node_modules_angular_router_src_directives_router_link_ngfactory__["a" /* Wrapper_RouterLinkWithHref */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_14__angular_router_src_router__["a" /* Router */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_15__angular_router_src_router_state__["b" /* ActivatedRoute */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_16__angular_common_src_location_location_strategy__["a" /* LocationStrategy */], this.parentIndex));
        this._RouterLinkActive_8_4 = new __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_router_src_directives_router_link_active_ngfactory__["a" /* Wrapper_RouterLinkActive */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_14__angular_router_src_router__["a" /* Router */], this.parentIndex), new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_8), this.renderer);
        this._query_RouterLink_8_0 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._query_RouterLinkWithHref_8_1 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._text_9 = this.renderer.createText(this._el_8, 'Frontpage', null);
        this._text_10 = this.renderer.createText(this._el_5, '\n    ', null);
        this._el_11 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_5, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._el_12 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_11, 'a', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](6, 'class', 'w3-border', 'routerLink', '/webshop', 'routerLinkActive', 'active'), null);
        this._RouterLinkWithHref_12_3 = new __WEBPACK_IMPORTED_MODULE_8__gendir_node_modules_angular_router_src_directives_router_link_ngfactory__["a" /* Wrapper_RouterLinkWithHref */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_14__angular_router_src_router__["a" /* Router */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_15__angular_router_src_router_state__["b" /* ActivatedRoute */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_16__angular_common_src_location_location_strategy__["a" /* LocationStrategy */], this.parentIndex));
        this._RouterLinkActive_12_4 = new __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_router_src_directives_router_link_active_ngfactory__["a" /* Wrapper_RouterLinkActive */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_14__angular_router_src_router__["a" /* Router */], this.parentIndex), new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_12), this.renderer);
        this._query_RouterLink_12_0 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._query_RouterLinkWithHref_12_1 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._text_13 = this.renderer.createText(this._el_12, 'webshop', null);
        this._text_14 = this.renderer.createText(this._el_5, '\n  ', null);
        this._text_15 = this.renderer.createText(this._el_3, '\n', null);
        this._text_16 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_17 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-container w3-border w3-padding'), null);
        this._text_18 = this.renderer.createText(this._el_17, '\n  ', null);
        this._el_19 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_17, 'router-outlet', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._vc_19 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_container__["a" /* ViewContainer */](19, 17, this, this._el_19);
        this._RouterOutlet_19_5 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_router_src_directives_router_outlet_ngfactory__["a" /* Wrapper_RouterOutlet */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_18__angular_router_src_router_outlet_map__["a" /* RouterOutletMap */], this.parentIndex), this._vc_19.vcRef, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_component_factory_resolver__["a" /* ComponentFactoryResolver */], this.parentIndex), null);
        this._text_20 = this.renderer.createText(this._el_17, '\n', null);
        this._text_21 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_22 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-container w3-light-grey w3-border w3-padding'), null);
        this._text_23 = this.renderer.createText(this._el_22, '\n  ', null);
        this._el_24 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_22, 'p', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-left'), null);
        this._text_25 = this.renderer.createText(this._el_24, 'Made by Espen Sønnervig', null);
        this._text_26 = this.renderer.createText(this._el_22, '\n  ', null);
        this._el_27 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_22, 'p', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'w3-right'), null);
        this._text_28 = this.renderer.createText(this._el_27, 'Powered by ASP.NET Core, Angular 2 and W3.CSS', null);
        this._text_29 = this.renderer.createText(this._el_22, '\n', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_8, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_8));
        var disposable_1 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_12, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_12));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_router_src_directives_router_link__["b" /* RouterLinkWithHref */]) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._RouterLinkWithHref_8_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_21__angular_router_src_directives_router_link_active__["a" /* RouterLinkActive */]) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._RouterLinkActive_8_4.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_router_src_directives_router_link__["b" /* RouterLinkWithHref */]) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._RouterLinkWithHref_12_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_21__angular_router_src_directives_router_link_active__["a" /* RouterLinkActive */]) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._RouterLinkActive_12_4.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_router_src_directives_router_outlet__["a" /* RouterOutlet */]) && (19 === requestNodeIndex))) {
            return this._RouterOutlet_19_5.context;
        }
        return notFoundResult;
    };
    View_AppComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_8_0_0 = '/frontpage';
        this._RouterLinkWithHref_8_3.check_routerLink(currVal_8_0_0, throwOnChange, false);
        this._RouterLinkWithHref_8_3.ngDoCheck(this, this._el_8, throwOnChange);
        var currVal_8_1_0 = 'active';
        this._RouterLinkActive_8_4.check_routerLinkActive(currVal_8_1_0, throwOnChange, false);
        this._RouterLinkActive_8_4.ngDoCheck(this, this._el_8, throwOnChange);
        var currVal_12_0_0 = '/webshop';
        this._RouterLinkWithHref_12_3.check_routerLink(currVal_12_0_0, throwOnChange, false);
        this._RouterLinkWithHref_12_3.ngDoCheck(this, this._el_12, throwOnChange);
        var currVal_12_1_0 = 'active';
        this._RouterLinkActive_12_4.check_routerLinkActive(currVal_12_1_0, throwOnChange, false);
        this._RouterLinkActive_12_4.ngDoCheck(this, this._el_12, throwOnChange);
        this._RouterOutlet_19_5.ngDoCheck(this, this._el_19, throwOnChange);
        this._vc_19.detectChangesInNestedViews(throwOnChange);
        if (!throwOnChange) {
            if (this._query_RouterLink_8_0.dirty) {
                this._query_RouterLink_8_0.reset([]);
                this._RouterLinkActive_8_4.context.links = this._query_RouterLink_8_0;
                this._query_RouterLink_8_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_8_1.dirty) {
                this._query_RouterLinkWithHref_8_1.reset([this._RouterLinkWithHref_8_3.context]);
                this._RouterLinkActive_8_4.context.linksWithHrefs = this._query_RouterLinkWithHref_8_1;
                this._query_RouterLinkWithHref_8_1.notifyOnChanges();
            }
            if (this._query_RouterLink_12_0.dirty) {
                this._query_RouterLink_12_0.reset([]);
                this._RouterLinkActive_12_4.context.links = this._query_RouterLink_12_0;
                this._query_RouterLink_12_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_12_1.dirty) {
                this._query_RouterLinkWithHref_12_1.reset([this._RouterLinkWithHref_12_3.context]);
                this._RouterLinkActive_12_4.context.linksWithHrefs = this._query_RouterLinkWithHref_12_1;
                this._query_RouterLinkWithHref_12_1.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_8_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_12_4.context.ngAfterContentInit();
            }
        }
        var currVal_40 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.title, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_40, currVal_40)) {
            this.renderer.setText(this._text_1, currVal_40);
            this._expr_40 = currVal_40;
        }
        this._RouterLinkWithHref_8_3.checkHost(this, this, this._el_8, throwOnChange);
        this._RouterLinkWithHref_12_3.checkHost(this, this, this._el_12, throwOnChange);
    };
    View_AppComponent0.prototype.destroyInternal = function () {
        this._vc_19.destroyNestedViews();
        this._RouterLinkWithHref_8_3.ngOnDestroy();
        this._RouterLinkActive_8_4.ngOnDestroy();
        this._RouterLinkWithHref_12_3.ngOnDestroy();
        this._RouterLinkActive_12_4.ngOnDestroy();
        this._RouterOutlet_19_5.ngOnDestroy();
    };
    View_AppComponent0.prototype.handleEvent_8 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_8_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_AppComponent0.prototype.handleEvent_12 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_12_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_AppComponent0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/app.component.ngfactory.js.map

/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms_src_directives__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms_src_form_providers__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_module__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_src_localization__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core_src_application_init__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core_src_testability_testability__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core_src_application_ref__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_compiler__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_src_dom_events_hammer_gestures__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_src_dom_events_event_manager__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_src_dom_shared_styles_host__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_src_dom_dom_renderer__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_src_security_dom_sanitization_service__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_core_src_animation_animation_queue__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_src_browser_title__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_directives_radio_control_value_accessor__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_http_src_backends_browser_xhr__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_http_src_base_response_options__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_http_src_backends_xhr_backend__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_http_src_base_request_options__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_forms_src_form_builder__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_common_src_location_location__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_router_src_url_tree__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_router_src_router_outlet_map__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_core_src_linker_system_js_ng_module_factory_loader__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_router_src_router_preloader__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__app_Services_bed_chooser_bed_chooser_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__Components_frontpage_Frontpage_component_ngfactory__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__Components_bed_bed_component_ngfactory__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__Components_bed_chooser_bed_chooser_component_ngfactory__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__Components_new_bed_new_bed_component_ngfactory__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__app_component_ngfactory__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_core_src_application_tokens__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_platform_browser_src_dom_events_dom_events__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__angular_platform_browser_src_dom_events_key_events__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_core_src_zone_ng_zone__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_platform_browser_src_dom_debug_ng_probe__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__angular_common_src_location_platform_location__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__angular_common_src_location_location_strategy__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__app_Components_frontpage_Frontpage_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__app_Components_bed_bed_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__app_Components_bed_chooser_bed_chooser_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__app_Components_new_bed_new_bed_component__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__angular_router_src_url_handling_strategy__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__angular_router_src_route_reuse_strategy__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__angular_router_src_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__angular_core_src_console__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__angular_core_src_i18n_tokens__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__angular_core_src_error_handler__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__angular_platform_browser_src_dom_dom_tokens__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__angular_platform_browser_src_dom_animation_driver__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__angular_core_src_render_api__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__angular_core_src_security__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__angular_core_src_change_detection_differs_iterable_differs__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__angular_core_src_change_detection_differs_keyvalue_differs__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__angular_http_src_interfaces__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__angular_http_src_http__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__angular_core_src_linker_ng_module_factory_loader__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__angular_router_src_router_config_loader__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__angular_router_src_router_state__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModuleNgFactory; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



































































var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        _super.call(this, parent, [
            __WEBPACK_IMPORTED_MODULE_34__Components_frontpage_Frontpage_component_ngfactory__["a" /* FrontpageComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_35__Components_bed_bed_component_ngfactory__["a" /* BedComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_36__Components_bed_chooser_bed_chooser_component_ngfactory__["a" /* BedChooserComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_37__Components_new_bed_new_bed_component_ngfactory__["a" /* NewBedComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_38__app_component_ngfactory__["a" /* AppComponentNgFactory */]
        ], [__WEBPACK_IMPORTED_MODULE_38__app_component_ngfactory__["a" /* AppComponentNgFactory */]]);
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_10", {
        get: function () {
            if ((this.__LOCALE_ID_10 == null)) {
                (this.__LOCALE_ID_10 = 'en-US');
            }
            return this.__LOCALE_ID_10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_11", {
        get: function () {
            if ((this.__NgLocalization_11 == null)) {
                (this.__NgLocalization_11 = new __WEBPACK_IMPORTED_MODULE_9__angular_common_src_localization__["c" /* NgLocaleLocalization */](this._LOCALE_ID_10));
            }
            return this.__NgLocalization_11;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_16", {
        get: function () {
            if ((this.__ApplicationRef_16 == null)) {
                (this.__ApplicationRef_16 = this._ApplicationRef__15);
            }
            return this.__ApplicationRef_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_17", {
        get: function () {
            if ((this.__Compiler_17 == null)) {
                (this.__Compiler_17 = new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_compiler__["b" /* Compiler */]());
            }
            return this.__Compiler_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_18", {
        get: function () {
            if ((this.__APP_ID_18 == null)) {
                (this.__APP_ID_18 = __WEBPACK_IMPORTED_MODULE_39__angular_core_src_application_tokens__["e" /* _appIdRandomProviderFactory */]());
            }
            return this.__APP_ID_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_19", {
        get: function () {
            if ((this.__DOCUMENT_19 == null)) {
                (this.__DOCUMENT_19 = __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["e" /* _document */]());
            }
            return this.__DOCUMENT_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_20", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_20 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_20 = new __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_src_dom_events_hammer_gestures__["c" /* HammerGestureConfig */]());
            }
            return this.__HAMMER_GESTURE_CONFIG_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_21", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_21 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_21 = [
                    new __WEBPACK_IMPORTED_MODULE_40__angular_platform_browser_src_dom_events_dom_events__["a" /* DomEventsPlugin */](),
                    new __WEBPACK_IMPORTED_MODULE_41__angular_platform_browser_src_dom_events_key_events__["a" /* KeyEventsPlugin */](),
                    new __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_src_dom_events_hammer_gestures__["a" /* HammerGesturesPlugin */](this._HAMMER_GESTURE_CONFIG_20)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_22", {
        get: function () {
            if ((this.__EventManager_22 == null)) {
                (this.__EventManager_22 = new __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_src_dom_events_event_manager__["a" /* EventManager */](this._EVENT_MANAGER_PLUGINS_21, this.parent.get(__WEBPACK_IMPORTED_MODULE_42__angular_core_src_zone_ng_zone__["a" /* NgZone */])));
            }
            return this.__EventManager_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_23", {
        get: function () {
            if ((this.__DomSharedStylesHost_23 == null)) {
                (this.__DomSharedStylesHost_23 = new __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_src_dom_shared_styles_host__["a" /* DomSharedStylesHost */](this._DOCUMENT_19));
            }
            return this.__DomSharedStylesHost_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_24", {
        get: function () {
            if ((this.__AnimationDriver_24 == null)) {
                (this.__AnimationDriver_24 = __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["f" /* _resolveDefaultAnimationDriver */]());
            }
            return this.__AnimationDriver_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_25", {
        get: function () {
            if ((this.__DomRootRenderer_25 == null)) {
                (this.__DomRootRenderer_25 = new __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_src_dom_dom_renderer__["b" /* DomRootRenderer_ */](this._DOCUMENT_19, this._EventManager_22, this._DomSharedStylesHost_23, this._AnimationDriver_24, this._APP_ID_18));
            }
            return this.__DomRootRenderer_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgProbeToken_26", {
        get: function () {
            if ((this.__NgProbeToken_26 == null)) {
                (this.__NgProbeToken_26 = [__WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_module__["c" /* routerNgProbeToken */]()]);
            }
            return this.__NgProbeToken_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_27", {
        get: function () {
            if ((this.__RootRenderer_27 == null)) {
                (this.__RootRenderer_27 = __WEBPACK_IMPORTED_MODULE_43__angular_platform_browser_src_dom_debug_ng_probe__["b" /* _createConditionalRootRenderer */](this._DomRootRenderer_25, this.parent.get(__WEBPACK_IMPORTED_MODULE_43__angular_platform_browser_src_dom_debug_ng_probe__["c" /* NgProbeToken */], null), this._NgProbeToken_26));
            }
            return this.__RootRenderer_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_28", {
        get: function () {
            if ((this.__DomSanitizer_28 == null)) {
                (this.__DomSanitizer_28 = new __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_src_security_dom_sanitization_service__["b" /* DomSanitizerImpl */]());
            }
            return this.__DomSanitizer_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_29", {
        get: function () {
            if ((this.__Sanitizer_29 == null)) {
                (this.__Sanitizer_29 = this._DomSanitizer_28);
            }
            return this.__Sanitizer_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationQueue_30", {
        get: function () {
            if ((this.__AnimationQueue_30 == null)) {
                (this.__AnimationQueue_30 = new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_animation_animation_queue__["a" /* AnimationQueue */](this.parent.get(__WEBPACK_IMPORTED_MODULE_42__angular_core_src_zone_ng_zone__["a" /* NgZone */])));
            }
            return this.__AnimationQueue_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_31", {
        get: function () {
            if ((this.__ViewUtils_31 == null)) {
                (this.__ViewUtils_31 = new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_view_utils__["ViewUtils"](this._RootRenderer_27, this._Sanitizer_29, this._AnimationQueue_30));
            }
            return this.__ViewUtils_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_32", {
        get: function () {
            if ((this.__IterableDiffers_32 == null)) {
                (this.__IterableDiffers_32 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["b" /* _iterableDiffersFactory */]());
            }
            return this.__IterableDiffers_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_33", {
        get: function () {
            if ((this.__KeyValueDiffers_33 == null)) {
                (this.__KeyValueDiffers_33 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["c" /* _keyValueDiffersFactory */]());
            }
            return this.__KeyValueDiffers_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_34", {
        get: function () {
            if ((this.__SharedStylesHost_34 == null)) {
                (this.__SharedStylesHost_34 = this._DomSharedStylesHost_23);
            }
            return this.__SharedStylesHost_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_35", {
        get: function () {
            if ((this.__Title_35 == null)) {
                (this.__Title_35 = new __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_src_browser_title__["a" /* Title */]());
            }
            return this.__Title_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RadioControlRegistry_36", {
        get: function () {
            if ((this.__RadioControlRegistry_36 == null)) {
                (this.__RadioControlRegistry_36 = new __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_directives_radio_control_value_accessor__["b" /* RadioControlRegistry */]());
            }
            return this.__RadioControlRegistry_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_37", {
        get: function () {
            if ((this.__BrowserXhr_37 == null)) {
                (this.__BrowserXhr_37 = new __WEBPACK_IMPORTED_MODULE_23__angular_http_src_backends_browser_xhr__["a" /* BrowserXhr */]());
            }
            return this.__BrowserXhr_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_38", {
        get: function () {
            if ((this.__ResponseOptions_38 == null)) {
                (this.__ResponseOptions_38 = new __WEBPACK_IMPORTED_MODULE_24__angular_http_src_base_response_options__["b" /* BaseResponseOptions */]());
            }
            return this.__ResponseOptions_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_39", {
        get: function () {
            if ((this.__XSRFStrategy_39 == null)) {
                (this.__XSRFStrategy_39 = __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__["b" /* _createDefaultCookieXSRFStrategy */]());
            }
            return this.__XSRFStrategy_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_40", {
        get: function () {
            if ((this.__XHRBackend_40 == null)) {
                (this.__XHRBackend_40 = new __WEBPACK_IMPORTED_MODULE_25__angular_http_src_backends_xhr_backend__["b" /* XHRBackend */](this._BrowserXhr_37, this._ResponseOptions_38, this._XSRFStrategy_39));
            }
            return this.__XHRBackend_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_41", {
        get: function () {
            if ((this.__RequestOptions_41 == null)) {
                (this.__RequestOptions_41 = new __WEBPACK_IMPORTED_MODULE_26__angular_http_src_base_request_options__["b" /* BaseRequestOptions */]());
            }
            return this.__RequestOptions_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_42", {
        get: function () {
            if ((this.__Http_42 == null)) {
                (this.__Http_42 = __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__["c" /* httpFactory */](this._XHRBackend_40, this._RequestOptions_41));
            }
            return this.__Http_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_FormBuilder_43", {
        get: function () {
            if ((this.__FormBuilder_43 == null)) {
                (this.__FormBuilder_43 = new __WEBPACK_IMPORTED_MODULE_27__angular_forms_src_form_builder__["a" /* FormBuilder */]());
            }
            return this.__FormBuilder_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_CONFIGURATION_44", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_44 == null)) {
                (this.__ROUTER_CONFIGURATION_44 = {});
            }
            return this.__ROUTER_CONFIGURATION_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LocationStrategy_45", {
        get: function () {
            if ((this.__LocationStrategy_45 == null)) {
                (this.__LocationStrategy_45 = __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_module__["d" /* provideLocationStrategy */](this.parent.get(__WEBPACK_IMPORTED_MODULE_44__angular_common_src_location_platform_location__["a" /* PlatformLocation */]), this.parent.get(__WEBPACK_IMPORTED_MODULE_45__angular_common_src_location_location_strategy__["b" /* APP_BASE_HREF */], null), this._ROUTER_CONFIGURATION_44));
            }
            return this.__LocationStrategy_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Location_46", {
        get: function () {
            if ((this.__Location_46 == null)) {
                (this.__Location_46 = new __WEBPACK_IMPORTED_MODULE_28__angular_common_src_location_location__["a" /* Location */](this._LocationStrategy_45));
            }
            return this.__Location_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UrlSerializer_47", {
        get: function () {
            if ((this.__UrlSerializer_47 == null)) {
                (this.__UrlSerializer_47 = new __WEBPACK_IMPORTED_MODULE_29__angular_router_src_url_tree__["i" /* DefaultUrlSerializer */]());
            }
            return this.__UrlSerializer_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterOutletMap_48", {
        get: function () {
            if ((this.__RouterOutletMap_48 == null)) {
                (this.__RouterOutletMap_48 = new __WEBPACK_IMPORTED_MODULE_30__angular_router_src_router_outlet_map__["a" /* RouterOutletMap */]());
            }
            return this.__RouterOutletMap_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgModuleFactoryLoader_49", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_49 == null)) {
                (this.__NgModuleFactoryLoader_49 = new __WEBPACK_IMPORTED_MODULE_31__angular_core_src_linker_system_js_ng_module_factory_loader__["a" /* SystemJsNgModuleLoader */](this._Compiler_17, this.parent.get(__WEBPACK_IMPORTED_MODULE_31__angular_core_src_linker_system_js_ng_module_factory_loader__["b" /* SystemJsNgModuleLoaderConfig */], null)));
            }
            return this.__NgModuleFactoryLoader_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTES_50", {
        get: function () {
            if ((this.__ROUTES_50 == null)) {
                (this.__ROUTES_50 = [[
                        {
                            path: 'frontpage',
                            component: __WEBPACK_IMPORTED_MODULE_46__app_Components_frontpage_Frontpage_component__["a" /* FrontpageComponent */]
                        },
                        {
                            path: '',
                            redirectTo: '/frontpage',
                            pathMatch: 'full'
                        },
                        {
                            path: 'bed/:id',
                            component: __WEBPACK_IMPORTED_MODULE_47__app_Components_bed_bed_component__["a" /* BedComponent */]
                        },
                        {
                            path: 'webshop',
                            component: __WEBPACK_IMPORTED_MODULE_48__app_Components_bed_chooser_bed_chooser_component__["a" /* BedChooserComponent */]
                        },
                        {
                            path: 'newBed',
                            component: __WEBPACK_IMPORTED_MODULE_49__app_Components_new_bed_new_bed_component__["a" /* NewBedComponent */]
                        }
                    ]
                ]);
            }
            return this.__ROUTES_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Router_51", {
        get: function () {
            if ((this.__Router_51 == null)) {
                (this.__Router_51 = __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_module__["e" /* setupRouter */](this._ApplicationRef_16, this._UrlSerializer_47, this._RouterOutletMap_48, this._Location_46, this, this._NgModuleFactoryLoader_49, this._Compiler_17, this._ROUTES_50, this._ROUTER_CONFIGURATION_44, this.parent.get(__WEBPACK_IMPORTED_MODULE_50__angular_router_src_url_handling_strategy__["b" /* UrlHandlingStrategy */], null), this.parent.get(__WEBPACK_IMPORTED_MODULE_51__angular_router_src_route_reuse_strategy__["a" /* RouteReuseStrategy */], null)));
            }
            return this.__Router_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_52", {
        get: function () {
            if ((this.__ActivatedRoute_52 == null)) {
                (this.__ActivatedRoute_52 = __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_module__["f" /* rootRoute */](this._Router_51));
            }
            return this.__ActivatedRoute_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadAllModules_56", {
        get: function () {
            if ((this.__PreloadAllModules_56 == null)) {
                (this.__PreloadAllModules_56 = new __WEBPACK_IMPORTED_MODULE_32__angular_router_src_router_preloader__["c" /* PreloadAllModules */]());
            }
            return this.__PreloadAllModules_56;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_INITIALIZER_57", {
        get: function () {
            if ((this.__ROUTER_INITIALIZER_57 == null)) {
                (this.__ROUTER_INITIALIZER_57 = __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_module__["g" /* initialRouterNavigation */](this._Router_51, this._ApplicationRef_16, this._RouterPreloader_55, this._ROUTER_CONFIGURATION_44));
            }
            return this.__ROUTER_INITIALIZER_57;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_58", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_58 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_58 = [this._ROUTER_INITIALIZER_57]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_58;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BedChooserService_59", {
        get: function () {
            if ((this.__BedChooserService_59 == null)) {
                (this.__BedChooserService_59 = new __WEBPACK_IMPORTED_MODULE_33__app_Services_bed_chooser_bed_chooser_service__["a" /* BedChooserService */](this._Http_42));
            }
            return this.__BedChooserService_59;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__["a" /* CommonModule */]();
        this._ApplicationModule_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["a" /* ApplicationModule */]();
        this._BrowserModule_2 = new __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["d" /* BrowserModule */](this.parent.get(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["d" /* BrowserModule */], null));
        this._InternalFormsSharedModule_3 = new __WEBPACK_IMPORTED_MODULE_5__angular_forms_src_directives__["b" /* InternalFormsSharedModule */]();
        this._FormsModule_4 = new __WEBPACK_IMPORTED_MODULE_6__angular_forms_src_form_providers__["a" /* FormsModule */]();
        this._HttpModule_5 = new __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__["a" /* HttpModule */]();
        this._ROUTER_FORROOT_GUARD_6 = __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_module__["h" /* provideForRootGuard */](this.parent.get(__WEBPACK_IMPORTED_MODULE_52__angular_router_src_router__["a" /* Router */], null));
        this._RouterModule_7 = new __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_module__["b" /* RouterModule */](this._ROUTER_FORROOT_GUARD_6);
        this._ReactiveFormsModule_8 = new __WEBPACK_IMPORTED_MODULE_6__angular_forms_src_form_providers__["b" /* ReactiveFormsModule */]();
        this._AppModule_9 = new __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]();
        this._ErrorHandler_12 = __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["g" /* errorHandler */]();
        this._ApplicationInitStatus_13 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_application_init__["a" /* ApplicationInitStatus */](this.parent.get(__WEBPACK_IMPORTED_MODULE_10__angular_core_src_application_init__["b" /* APP_INITIALIZER */], null));
        this._Testability_14 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_testability_testability__["a" /* Testability */](this.parent.get(__WEBPACK_IMPORTED_MODULE_42__angular_core_src_zone_ng_zone__["a" /* NgZone */]));
        this._ApplicationRef__15 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_application_ref__["d" /* ApplicationRef_ */](this.parent.get(__WEBPACK_IMPORTED_MODULE_42__angular_core_src_zone_ng_zone__["a" /* NgZone */]), this.parent.get(__WEBPACK_IMPORTED_MODULE_53__angular_core_src_console__["a" /* Console */]), this, this._ErrorHandler_12, this, this._ApplicationInitStatus_13, this.parent.get(__WEBPACK_IMPORTED_MODULE_11__angular_core_src_testability_testability__["b" /* TestabilityRegistry */], null), this._Testability_14);
        this._NoPreloading_53 = new __WEBPACK_IMPORTED_MODULE_32__angular_router_src_router_preloader__["b" /* NoPreloading */]();
        this._PreloadingStrategy_54 = this._NoPreloading_53;
        this._RouterPreloader_55 = new __WEBPACK_IMPORTED_MODULE_32__angular_router_src_router_preloader__["a" /* RouterPreloader */](this._Router_51, this._NgModuleFactoryLoader_49, this._Compiler_17, this, this._PreloadingStrategy_54);
        return this._AppModule_9;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__["a" /* CommonModule */])) {
            return this._CommonModule_0;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["a" /* ApplicationModule */])) {
            return this._ApplicationModule_1;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["d" /* BrowserModule */])) {
            return this._BrowserModule_2;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_forms_src_directives__["b" /* InternalFormsSharedModule */])) {
            return this._InternalFormsSharedModule_3;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_6__angular_forms_src_form_providers__["a" /* FormsModule */])) {
            return this._FormsModule_4;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__["a" /* HttpModule */])) {
            return this._HttpModule_5;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_module__["i" /* ROUTER_FORROOT_GUARD */])) {
            return this._ROUTER_FORROOT_GUARD_6;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_module__["b" /* RouterModule */])) {
            return this._RouterModule_7;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_6__angular_forms_src_form_providers__["b" /* ReactiveFormsModule */])) {
            return this._ReactiveFormsModule_8;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */])) {
            return this._AppModule_9;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_54__angular_core_src_i18n_tokens__["a" /* LOCALE_ID */])) {
            return this._LOCALE_ID_10;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_9__angular_common_src_localization__["b" /* NgLocalization */])) {
            return this._NgLocalization_11;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_55__angular_core_src_error_handler__["a" /* ErrorHandler */])) {
            return this._ErrorHandler_12;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_core_src_application_init__["a" /* ApplicationInitStatus */])) {
            return this._ApplicationInitStatus_13;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_11__angular_core_src_testability_testability__["a" /* Testability */])) {
            return this._Testability_14;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_application_ref__["d" /* ApplicationRef_ */])) {
            return this._ApplicationRef__15;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_application_ref__["e" /* ApplicationRef */])) {
            return this._ApplicationRef_16;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_compiler__["b" /* Compiler */])) {
            return this._Compiler_17;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_39__angular_core_src_application_tokens__["d" /* APP_ID */])) {
            return this._APP_ID_18;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_56__angular_platform_browser_src_dom_dom_tokens__["a" /* DOCUMENT */])) {
            return this._DOCUMENT_19;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_src_dom_events_hammer_gestures__["b" /* HAMMER_GESTURE_CONFIG */])) {
            return this._HAMMER_GESTURE_CONFIG_20;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_src_dom_events_event_manager__["c" /* EVENT_MANAGER_PLUGINS */])) {
            return this._EVENT_MANAGER_PLUGINS_21;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_src_dom_events_event_manager__["a" /* EventManager */])) {
            return this._EventManager_22;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_src_dom_shared_styles_host__["a" /* DomSharedStylesHost */])) {
            return this._DomSharedStylesHost_23;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_57__angular_platform_browser_src_dom_animation_driver__["a" /* AnimationDriver */])) {
            return this._AnimationDriver_24;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_src_dom_dom_renderer__["a" /* DomRootRenderer */])) {
            return this._DomRootRenderer_25;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_application_ref__["g" /* NgProbeToken */])) {
            return this._NgProbeToken_26;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_58__angular_core_src_render_api__["a" /* RootRenderer */])) {
            return this._RootRenderer_27;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_src_security_dom_sanitization_service__["a" /* DomSanitizer */])) {
            return this._DomSanitizer_28;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_59__angular_core_src_security__["a" /* Sanitizer */])) {
            return this._Sanitizer_29;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_19__angular_core_src_animation_animation_queue__["a" /* AnimationQueue */])) {
            return this._AnimationQueue_30;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_view_utils__["ViewUtils"])) {
            return this._ViewUtils_31;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_60__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */])) {
            return this._IterableDiffers_32;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_61__angular_core_src_change_detection_differs_keyvalue_differs__["a" /* KeyValueDiffers */])) {
            return this._KeyValueDiffers_33;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_src_dom_shared_styles_host__["b" /* SharedStylesHost */])) {
            return this._SharedStylesHost_34;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_src_browser_title__["a" /* Title */])) {
            return this._Title_35;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_directives_radio_control_value_accessor__["b" /* RadioControlRegistry */])) {
            return this._RadioControlRegistry_36;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_23__angular_http_src_backends_browser_xhr__["a" /* BrowserXhr */])) {
            return this._BrowserXhr_37;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_24__angular_http_src_base_response_options__["a" /* ResponseOptions */])) {
            return this._ResponseOptions_38;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_62__angular_http_src_interfaces__["b" /* XSRFStrategy */])) {
            return this._XSRFStrategy_39;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_25__angular_http_src_backends_xhr_backend__["b" /* XHRBackend */])) {
            return this._XHRBackend_40;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_26__angular_http_src_base_request_options__["a" /* RequestOptions */])) {
            return this._RequestOptions_41;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_63__angular_http_src_http__["a" /* Http */])) {
            return this._Http_42;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_27__angular_forms_src_form_builder__["a" /* FormBuilder */])) {
            return this._FormBuilder_43;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_module__["j" /* ROUTER_CONFIGURATION */])) {
            return this._ROUTER_CONFIGURATION_44;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_45__angular_common_src_location_location_strategy__["a" /* LocationStrategy */])) {
            return this._LocationStrategy_45;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_28__angular_common_src_location_location__["a" /* Location */])) {
            return this._Location_46;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_29__angular_router_src_url_tree__["h" /* UrlSerializer */])) {
            return this._UrlSerializer_47;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_30__angular_router_src_router_outlet_map__["a" /* RouterOutletMap */])) {
            return this._RouterOutletMap_48;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_64__angular_core_src_linker_ng_module_factory_loader__["b" /* NgModuleFactoryLoader */])) {
            return this._NgModuleFactoryLoader_49;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_65__angular_router_src_router_config_loader__["c" /* ROUTES */])) {
            return this._ROUTES_50;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_52__angular_router_src_router__["a" /* Router */])) {
            return this._Router_51;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_66__angular_router_src_router_state__["b" /* ActivatedRoute */])) {
            return this._ActivatedRoute_52;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_32__angular_router_src_router_preloader__["b" /* NoPreloading */])) {
            return this._NoPreloading_53;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_32__angular_router_src_router_preloader__["d" /* PreloadingStrategy */])) {
            return this._PreloadingStrategy_54;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_32__angular_router_src_router_preloader__["a" /* RouterPreloader */])) {
            return this._RouterPreloader_55;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_32__angular_router_src_router_preloader__["c" /* PreloadAllModules */])) {
            return this._PreloadAllModules_56;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_module__["k" /* ROUTER_INITIALIZER */])) {
            return this._ROUTER_INITIALIZER_57;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_39__angular_core_src_application_tokens__["b" /* APP_BOOTSTRAP_LISTENER */])) {
            return this._APP_BOOTSTRAP_LISTENER_58;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_33__app_Services_bed_chooser_bed_chooser_service__["a" /* BedChooserService */])) {
            return this._BedChooserService_59;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__15.ngOnDestroy();
        this._RouterPreloader_55.ngOnDestroy();
    };
    return AppModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["a" /* NgModuleInjector */]));
var AppModuleNgFactory = new __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["b" /* NgModuleFactory */](AppModuleInjector, __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/app.module.ngfactory.js.map

/***/ },

/***/ 401:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_for__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_NgFor; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_NgFor = (function () {
    function Wrapper_NgFor(p0, p1, p2, p3) {
        this._changed = false;
        this._changes = {};
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_for__["a" /* NgFor */](p0, p1, p2, p3);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_NgFor.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgFor.prototype.ngOnDestroy = function () {
    };
    Wrapper_NgFor.prototype.check_ngForOf = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.ngForOf = currValue;
            this._changes['ngForOf'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_NgFor.prototype.check_ngForTrackBy = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.ngForTrackBy = currValue;
            this._changes['ngForTrackBy'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_1, currValue);
            this._expr_1 = currValue;
        }
    };
    Wrapper_NgFor.prototype.check_ngForTemplate = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.ngForTemplate = currValue;
            this._changes['ngForTemplate'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_2, currValue);
            this._expr_2 = currValue;
        }
    };
    Wrapper_NgFor.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
            this.context.ngDoCheck();
        }
        return changed;
    };
    Wrapper_NgFor.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NgFor.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgFor.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NgFor;
}());
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/ng_for.ngfactory.js.map

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_default_value_accessor__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_DefaultValueAccessor; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */

var Wrapper_DefaultValueAccessor = (function () {
    function Wrapper_DefaultValueAccessor(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_default_value_accessor__["a" /* DefaultValueAccessor */](p0, p1);
    }
    Wrapper_DefaultValueAccessor.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_DefaultValueAccessor.prototype.ngOnDestroy = function () {
    };
    Wrapper_DefaultValueAccessor.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_DefaultValueAccessor.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_DefaultValueAccessor.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'input')) {
            var pd_sub_0 = (this.context.onChange($event.target.value) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'blur')) {
            var pd_sub_1 = (this.context.onTouched() !== false);
            result = (pd_sub_1 && result);
        }
        return result;
    };
    Wrapper_DefaultValueAccessor.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_DefaultValueAccessor;
}());
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/default_value_accessor.ngfactory.js.map

/***/ },

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_ng_form__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_NgForm; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */

var Wrapper_NgForm = (function () {
    function Wrapper_NgForm(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_ng_form__["a" /* NgForm */](p0, p1);
    }
    Wrapper_NgForm.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgForm.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
    };
    Wrapper_NgForm.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_NgForm.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NgForm.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'submit')) {
            var pd_sub_0 = (this.context.onSubmit($event) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'reset')) {
            var pd_sub_1 = (this.context.onReset() !== false);
            result = (pd_sub_1 && result);
        }
        return result;
    };
    Wrapper_NgForm.prototype.subscribe = function (view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.ngSubmit.subscribe(_eventHandler.bind(view, 'ngSubmit')));
        }
    };
    return Wrapper_NgForm;
}());
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/ng_form.ngfactory.js.map

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_ng_model__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_NgModel; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_NgModel = (function () {
    function Wrapper_NgModel(p0, p1, p2, p3) {
        this._changed = false;
        this._changes = {};
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_ng_model__["a" /* NgModel */](p0, p1, p2, p3);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_NgModel.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgModel.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
        (this.subscription0 && this.subscription0.unsubscribe());
    };
    Wrapper_NgModel.prototype.check_name = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.name = currValue;
            this._changes['name'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_NgModel.prototype.check_isDisabled = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.isDisabled = currValue;
            this._changes['isDisabled'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_1, currValue);
            this._expr_1 = currValue;
        }
    };
    Wrapper_NgModel.prototype.check_model = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.model = currValue;
            this._changes['model'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_2, currValue);
            this._expr_2 = currValue;
        }
    };
    Wrapper_NgModel.prototype.check_options = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_3, currValue))) {
            this._changed = true;
            this.context.options = currValue;
            this._changes['options'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_3, currValue);
            this._expr_3 = currValue;
        }
    };
    Wrapper_NgModel.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
        }
        return changed;
    };
    Wrapper_NgModel.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NgModel.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgModel.prototype.subscribe = function (view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.update.subscribe(_eventHandler.bind(view, 'ngModelChange')));
        }
    };
    return Wrapper_NgModel;
}());
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/ng_model.ngfactory.js.map

/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_reactive_directives_form_control_name__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_FormControlName; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_FormControlName = (function () {
    function Wrapper_FormControlName(p0, p1, p2, p3) {
        this._changed = false;
        this._changes = {};
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_reactive_directives_form_control_name__["a" /* FormControlName */](p0, p1, p2, p3);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_FormControlName.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_FormControlName.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
        (this.subscription0 && this.subscription0.unsubscribe());
    };
    Wrapper_FormControlName.prototype.check_name = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.name = currValue;
            this._changes['name'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_FormControlName.prototype.check_model = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.model = currValue;
            this._changes['model'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_1, currValue);
            this._expr_1 = currValue;
        }
    };
    Wrapper_FormControlName.prototype.check_isDisabled = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.isDisabled = currValue;
            this._changes['isDisabled'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_2, currValue);
            this._expr_2 = currValue;
        }
    };
    Wrapper_FormControlName.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
        }
        return changed;
    };
    Wrapper_FormControlName.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_FormControlName.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_FormControlName.prototype.subscribe = function (view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.update.subscribe(_eventHandler.bind(view, 'ngModelChange')));
        }
    };
    return Wrapper_FormControlName;
}());
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/form_control_name.ngfactory.js.map

/***/ },

/***/ 406:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_reactive_directives_form_group_directive__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_FormGroupDirective; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_FormGroupDirective = (function () {
    function Wrapper_FormGroupDirective(p0, p1) {
        this._changed = false;
        this._changes = {};
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_reactive_directives_form_group_directive__["a" /* FormGroupDirective */](p0, p1);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_FormGroupDirective.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_FormGroupDirective.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
    };
    Wrapper_FormGroupDirective.prototype.check_form = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.form = currValue;
            this._changes['form'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_FormGroupDirective.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
        }
        return changed;
    };
    Wrapper_FormGroupDirective.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_FormGroupDirective.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'submit')) {
            var pd_sub_0 = (this.context.onSubmit($event) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'reset')) {
            var pd_sub_1 = (this.context.onReset() !== false);
            result = (pd_sub_1 && result);
        }
        return result;
    };
    Wrapper_FormGroupDirective.prototype.subscribe = function (view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.ngSubmit.subscribe(_eventHandler.bind(view, 'ngSubmit')));
        }
    };
    return Wrapper_FormGroupDirective;
}());
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/form_group_directive.ngfactory.js.map

/***/ },

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_select_control_value_accessor__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Wrapper_NgSelectOption; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_SelectControlValueAccessor; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_NgSelectOption = (function () {
    function Wrapper_NgSelectOption(p0, p1, p2) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_select_control_value_accessor__["b" /* NgSelectOption */](p0, p1, p2);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_NgSelectOption.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgSelectOption.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
    };
    Wrapper_NgSelectOption.prototype.check_ngValue = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.ngValue = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_NgSelectOption.prototype.check_value = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.value = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_NgSelectOption.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_NgSelectOption.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NgSelectOption.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgSelectOption.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NgSelectOption;
}());
var Wrapper_SelectControlValueAccessor = (function () {
    function Wrapper_SelectControlValueAccessor(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_select_control_value_accessor__["a" /* SelectControlValueAccessor */](p0, p1);
    }
    Wrapper_SelectControlValueAccessor.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_SelectControlValueAccessor.prototype.ngOnDestroy = function () {
    };
    Wrapper_SelectControlValueAccessor.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_SelectControlValueAccessor.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_SelectControlValueAccessor.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'change')) {
            var pd_sub_0 = (this.context.onChange($event.target.value) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'blur')) {
            var pd_sub_1 = (this.context.onTouched() !== false);
            result = (pd_sub_1 && result);
        }
        return result;
    };
    Wrapper_SelectControlValueAccessor.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_SelectControlValueAccessor;
}());
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/select_control_value_accessor.ngfactory.js.map

/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_select_multiple_control_value_accessor__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_NgSelectMultipleOption; });
/* unused harmony export Wrapper_SelectMultipleControlValueAccessor */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_NgSelectMultipleOption = (function () {
    function Wrapper_NgSelectMultipleOption(p0, p1, p2) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_select_multiple_control_value_accessor__["b" /* NgSelectMultipleOption */](p0, p1, p2);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_NgSelectMultipleOption.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgSelectMultipleOption.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
    };
    Wrapper_NgSelectMultipleOption.prototype.check_ngValue = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.ngValue = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_NgSelectMultipleOption.prototype.check_value = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.value = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_NgSelectMultipleOption.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_NgSelectMultipleOption.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NgSelectMultipleOption.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgSelectMultipleOption.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NgSelectMultipleOption;
}());
var Wrapper_SelectMultipleControlValueAccessor = (function () {
    function Wrapper_SelectMultipleControlValueAccessor(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_select_multiple_control_value_accessor__["a" /* SelectMultipleControlValueAccessor */](p0, p1);
    }
    Wrapper_SelectMultipleControlValueAccessor.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_SelectMultipleControlValueAccessor.prototype.ngOnDestroy = function () {
    };
    Wrapper_SelectMultipleControlValueAccessor.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_SelectMultipleControlValueAccessor.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_SelectMultipleControlValueAccessor.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'change')) {
            var pd_sub_0 = (this.context.onChange($event.target) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'blur')) {
            var pd_sub_1 = (this.context.onTouched() !== false);
            result = (pd_sub_1 && result);
        }
        return result;
    };
    Wrapper_SelectMultipleControlValueAccessor.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_SelectMultipleControlValueAccessor;
}());
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/select_multiple_control_value_accessor.ngfactory.js.map

/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_validators__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_RequiredValidator; });
/* unused harmony export Wrapper_MinLengthValidator */
/* unused harmony export Wrapper_MaxLengthValidator */
/* unused harmony export Wrapper_PatternValidator */
/* unused harmony export Wrapper_CheckboxRequiredValidator */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_RequiredValidator = (function () {
    function Wrapper_RequiredValidator() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_validators__["a" /* RequiredValidator */]();
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_RequiredValidator.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_RequiredValidator.prototype.ngOnDestroy = function () {
    };
    Wrapper_RequiredValidator.prototype.check_required = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.required = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_RequiredValidator.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_RequiredValidator.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_1 = (this.context.required ? '' : null);
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currVal_1)) {
            view.renderer.setElementAttribute(el, 'required', ((currVal_1 == null) ? null : currVal_1.toString()));
            this._expr_1 = currVal_1;
        }
    };
    Wrapper_RequiredValidator.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_RequiredValidator.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_RequiredValidator;
}());
var Wrapper_MinLengthValidator = (function () {
    function Wrapper_MinLengthValidator() {
        this._changed = false;
        this._changes = {};
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_validators__["b" /* MinLengthValidator */]();
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_MinLengthValidator.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MinLengthValidator.prototype.ngOnDestroy = function () {
    };
    Wrapper_MinLengthValidator.prototype.check_minlength = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.minlength = currValue;
            this._changes['minlength'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_MinLengthValidator.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
        }
        return changed;
    };
    Wrapper_MinLengthValidator.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_1 = (this.context.minlength ? this.context.minlength : null);
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currVal_1)) {
            view.renderer.setElementAttribute(el, 'minlength', ((currVal_1 == null) ? null : currVal_1.toString()));
            this._expr_1 = currVal_1;
        }
    };
    Wrapper_MinLengthValidator.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_MinLengthValidator.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MinLengthValidator;
}());
var Wrapper_MaxLengthValidator = (function () {
    function Wrapper_MaxLengthValidator() {
        this._changed = false;
        this._changes = {};
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_validators__["c" /* MaxLengthValidator */]();
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_MaxLengthValidator.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MaxLengthValidator.prototype.ngOnDestroy = function () {
    };
    Wrapper_MaxLengthValidator.prototype.check_maxlength = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.maxlength = currValue;
            this._changes['maxlength'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_MaxLengthValidator.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
        }
        return changed;
    };
    Wrapper_MaxLengthValidator.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_1 = (this.context.maxlength ? this.context.maxlength : null);
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currVal_1)) {
            view.renderer.setElementAttribute(el, 'maxlength', ((currVal_1 == null) ? null : currVal_1.toString()));
            this._expr_1 = currVal_1;
        }
    };
    Wrapper_MaxLengthValidator.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_MaxLengthValidator.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MaxLengthValidator;
}());
var Wrapper_PatternValidator = (function () {
    function Wrapper_PatternValidator() {
        this._changed = false;
        this._changes = {};
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_validators__["d" /* PatternValidator */]();
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_PatternValidator.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_PatternValidator.prototype.ngOnDestroy = function () {
    };
    Wrapper_PatternValidator.prototype.check_pattern = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.pattern = currValue;
            this._changes['pattern'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_PatternValidator.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
        }
        return changed;
    };
    Wrapper_PatternValidator.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_1 = (this.context.pattern ? this.context.pattern : null);
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currVal_1)) {
            view.renderer.setElementAttribute(el, 'pattern', ((currVal_1 == null) ? null : currVal_1.toString()));
            this._expr_1 = currVal_1;
        }
    };
    Wrapper_PatternValidator.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_PatternValidator.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_PatternValidator;
}());
var Wrapper_CheckboxRequiredValidator = (function () {
    function Wrapper_CheckboxRequiredValidator() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_validators__["e" /* CheckboxRequiredValidator */]();
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_CheckboxRequiredValidator.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_CheckboxRequiredValidator.prototype.ngOnDestroy = function () {
    };
    Wrapper_CheckboxRequiredValidator.prototype.check_required = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.required = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_CheckboxRequiredValidator.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_CheckboxRequiredValidator.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_1 = (this.context.required ? '' : null);
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currVal_1)) {
            view.renderer.setElementAttribute(el, 'required', ((currVal_1 == null) ? null : currVal_1.toString()));
            this._expr_1 = currVal_1;
        }
    };
    Wrapper_CheckboxRequiredValidator.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_CheckboxRequiredValidator.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_CheckboxRequiredValidator;
}());
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/validators.ngfactory.js.map

/***/ },

/***/ 410:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router_src_directives_router_link__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_security__ = __webpack_require__(54);
/* unused harmony export Wrapper_RouterLink */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_RouterLinkWithHref; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */




var Wrapper_RouterLink = (function () {
    function Wrapper_RouterLink(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_router_src_directives_router_link__["a" /* RouterLink */](p0, p1);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_RouterLink.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_RouterLink.prototype.ngOnDestroy = function () {
    };
    Wrapper_RouterLink.prototype.check_queryParams = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.queryParams = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_RouterLink.prototype.check_fragment = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.fragment = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_RouterLink.prototype.check_preserveQueryParams = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.preserveQueryParams = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_RouterLink.prototype.check_preserveFragment = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_3, currValue))) {
            this._changed = true;
            this.context.preserveFragment = currValue;
            this._expr_3 = currValue;
        }
    };
    Wrapper_RouterLink.prototype.check_skipLocationChange = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_4, currValue))) {
            this._changed = true;
            this.context.skipLocationChange = currValue;
            this._expr_4 = currValue;
        }
    };
    Wrapper_RouterLink.prototype.check_replaceUrl = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_5, currValue))) {
            this._changed = true;
            this.context.replaceUrl = currValue;
            this._expr_5 = currValue;
        }
    };
    Wrapper_RouterLink.prototype.check_routerLink = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_6, currValue))) {
            this._changed = true;
            this.context.routerLink = currValue;
            this._expr_6 = currValue;
        }
    };
    Wrapper_RouterLink.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_RouterLink.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_RouterLink.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClick() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    Wrapper_RouterLink.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_RouterLink;
}());
var Wrapper_RouterLinkWithHref = (function () {
    function Wrapper_RouterLinkWithHref(p0, p1, p2) {
        this._changed = false;
        this._changes = {};
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_router_src_directives_router_link__["b" /* RouterLinkWithHref */](p0, p1, p2);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_RouterLinkWithHref.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_RouterLinkWithHref.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
    };
    Wrapper_RouterLinkWithHref.prototype.check_target = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.target = currValue;
            this._changes['target'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.check_queryParams = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.queryParams = currValue;
            this._changes['queryParams'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_1, currValue);
            this._expr_1 = currValue;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.check_fragment = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.fragment = currValue;
            this._changes['fragment'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_2, currValue);
            this._expr_2 = currValue;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.check_preserveQueryParams = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_3, currValue))) {
            this._changed = true;
            this.context.preserveQueryParams = currValue;
            this._changes['preserveQueryParams'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_3, currValue);
            this._expr_3 = currValue;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.check_preserveFragment = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_4, currValue))) {
            this._changed = true;
            this.context.preserveFragment = currValue;
            this._changes['preserveFragment'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_4, currValue);
            this._expr_4 = currValue;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.check_skipLocationChange = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_5, currValue))) {
            this._changed = true;
            this.context.skipLocationChange = currValue;
            this._changes['skipLocationChange'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_5, currValue);
            this._expr_5 = currValue;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.check_replaceUrl = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_6, currValue))) {
            this._changed = true;
            this.context.replaceUrl = currValue;
            this._changes['replaceUrl'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_6, currValue);
            this._expr_6 = currValue;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.check_routerLink = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_7, currValue))) {
            this._changed = true;
            this.context.routerLink = currValue;
            this._changes['routerLink'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_7, currValue);
            this._expr_7 = currValue;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
        }
        return changed;
    };
    Wrapper_RouterLinkWithHref.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_8 = this.context.href;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_8, currVal_8)) {
            view.renderer.setElementProperty(el, 'href', view.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_3__angular_core_src_security__["b" /* SecurityContext */].URL, currVal_8));
            this._expr_8 = currVal_8;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    Wrapper_RouterLinkWithHref.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_RouterLinkWithHref;
}());
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/router_link.ngfactory.js.map

/***/ },

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router_src_directives_router_link_active__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_RouterLinkActive; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_RouterLinkActive = (function () {
    function Wrapper_RouterLinkActive(p0, p1, p2) {
        this._changed = false;
        this._changes = {};
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_router_src_directives_router_link_active__["a" /* RouterLinkActive */](p0, p1, p2);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_RouterLinkActive.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_RouterLinkActive.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
    };
    Wrapper_RouterLinkActive.prototype.check_routerLinkActiveOptions = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.routerLinkActiveOptions = currValue;
            this._changes['routerLinkActiveOptions'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_RouterLinkActive.prototype.check_routerLinkActive = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.routerLinkActive = currValue;
            this._changes['routerLinkActive'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_1, currValue);
            this._expr_1 = currValue;
        }
    };
    Wrapper_RouterLinkActive.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
        }
        return changed;
    };
    Wrapper_RouterLinkActive.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_RouterLinkActive.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_RouterLinkActive.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_RouterLinkActive;
}());
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/router_link_active.ngfactory.js.map

/***/ },

/***/ 412:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router_src_directives_router_outlet__ = __webpack_require__(137);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_RouterOutlet; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */

var Wrapper_RouterOutlet = (function () {
    function Wrapper_RouterOutlet(p0, p1, p2, p3) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_router_src_directives_router_outlet__["a" /* RouterOutlet */](p0, p1, p2, p3);
    }
    Wrapper_RouterOutlet.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_RouterOutlet.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
        (this.subscription0 && this.subscription0.unsubscribe());
        (this.subscription1 && this.subscription1.unsubscribe());
    };
    Wrapper_RouterOutlet.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_RouterOutlet.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_RouterOutlet.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_RouterOutlet.prototype.subscribe = function (view, _eventHandler, emit0, emit1) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.activateEvents.subscribe(_eventHandler.bind(view, 'activate')));
        }
        if (emit1) {
            (this.subscription1 = this.context.deactivateEvents.subscribe(_eventHandler.bind(view, 'deactivate')));
        }
    };
    return Wrapper_RouterOutlet;
}());
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/router_outlet.ngfactory.js.map

/***/ },

/***/ 413:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Bed; });
var Bed = (function () {
    function Bed() {
    }
    return Bed;
}());
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/bed.js.map

/***/ },

/***/ 414:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Picture; });
var Picture = (function () {
    function Picture() {
    }
    return Picture;
}());
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/picture.js.map

/***/ },

/***/ 415:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_bed_chooser_bed_chooser_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Services_bed_chooser_bed_chooser_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_bed_bed_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Components_frontpage_Frontpage_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Components_new_bed_new_bed_component__ = __webpack_require__(142);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__Components_bed_chooser_bed_chooser_component__["a" /* BedChooserComponent */],
                __WEBPACK_IMPORTED_MODULE_8__Components_bed_bed_component__["a" /* BedComponent */],
                __WEBPACK_IMPORTED_MODULE_9__Components_frontpage_Frontpage_component__["a" /* FrontpageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__Components_new_bed_new_bed_component__["a" /* NewBedComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__Services_bed_chooser_bed_chooser_service__["a" /* BedChooserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/app.module.js.map

/***/ },

/***/ 416:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Components_frontpage_Frontpage_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Components_bed_chooser_bed_chooser_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_bed_bed_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_new_bed_new_bed_component__ = __webpack_require__(142);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routing; });





var appRoutes = [
    {
        path: 'frontpage',
        component: __WEBPACK_IMPORTED_MODULE_1__Components_frontpage_Frontpage_component__["a" /* FrontpageComponent */]
    },
    {
        path: '',
        redirectTo: '/frontpage',
        pathMatch: 'full'
    },
    {
        path: 'bed/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__Components_bed_bed_component__["a" /* BedComponent */]
    },
    {
        path: 'webshop',
        component: __WEBPACK_IMPORTED_MODULE_2__Components_bed_chooser_bed_chooser_component__["a" /* BedChooserComponent */]
    },
    {
        path: 'newBed',
        component: __WEBPACK_IMPORTED_MODULE_4__Components_new_bed_new_bed_component__["a" /* NewBedComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/app.routing.js.map

/***/ },

/***/ 417:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/environment.js.map

/***/ },

/***/ 418:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/polyfills.js.map

/***/ },

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BedChooserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BedChooserService = (function () {
    function BedChooserService(http) {
        this.http = http;
    }
    BedChooserService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    BedChooserService.prototype.getBeds = function () {
        return this.http.get('/api/bed')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BedChooserService.prototype.getSpecificBeds = function (filter) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/bed/filter', JSON.stringify(filter), { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BedChooserService.prototype.getFabrics = function () {
        return this.http.get('/api/bed/fabrics')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BedChooserService.prototype.getColors = function () {
        return this.http.get('/api/bed/colors')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BedChooserService.prototype.getTypes = function () {
        return this.http.get('/api/bed/types')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BedChooserService.prototype.getSizes = function () {
        return this.http.get('/api/bed/sizes')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BedChooserService.prototype.getSeries = function () {
        return this.http.get('/api/bed/series')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BedChooserService.prototype.getBed = function (id) {
        return this.http.get('/api/bed/' + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // ----------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------
    // -------------------------------Moving to own picture service later----------------------
    // ----------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------
    BedChooserService.prototype.getPictures = function (id) {
        return this.http.get('/api/picture/all/' + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BedChooserService.prototype.getOnePicture = function (id) {
        return this.http.get('/api/picture/' + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BedChooserService.prototype.addPicture = function (newPicture) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/picture', JSON.stringify(newPicture), { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BedChooserService.prototype.deletePicture = function (id) {
        return this.http.delete('/api/picture/' + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BedChooserService.prototype.updatePicture = function (picture) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/picture/' + picture.id, JSON.stringify(picture), { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // ----------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------
    BedChooserService.prototype.addBed = function (newBed) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/bed', JSON.stringify(newBed), { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BedChooserService.prototype.deleteBed = function (id) {
        return this.http.delete('/api/bed/' + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BedChooserService.prototype.updateBed = function (bed) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/bed/' + bed.id, JSON.stringify(bed), { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BedChooserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], BedChooserService);
    return BedChooserService;
    var _a;
}());
//# sourceMappingURL=C:/Users/espen/Documents/Visual Studio 2015/Projects/BedMattressWebsite/src/Frontend/src/bed-chooser.service.js.map

/***/ },

/***/ 590:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(319);


/***/ }

},[590]);
//# sourceMappingURL=main.bundle.map