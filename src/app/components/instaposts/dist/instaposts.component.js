"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InstapostsComponent = void 0;
var core_1 = require("@angular/core");
var InstapostsComponent = /** @class */ (function () {
    function InstapostsComponent(homeComponent, staticDateServiceService) {
        this.homeComponent = homeComponent;
        this.staticDateServiceService = staticDateServiceService;
    }
    InstapostsComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    InstapostsComponent.prototype.loadData = function () {
        var _this = this;
        this.staticDateServiceService.getData().subscribe(function (data) {
            _this.staticPageContent = data;
        });
    };
    InstapostsComponent = __decorate([
        core_1.Component({
            selector: 'app-instaposts',
            templateUrl: './instaposts.component.html',
            styleUrls: ['./instaposts.component.css']
        })
    ], InstapostsComponent);
    return InstapostsComponent;
}());
exports.InstapostsComponent = InstapostsComponent;
