"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, tradeMark, model, color, price) {
        this.name = name;
        this.tradeMark = tradeMark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    Mobile.prototype.setName = function (name) {
        this.name = name;
    };
    Mobile.prototype.setTradeMark = function (tradeMark) {
        this.tradeMark = tradeMark;
    };
    Mobile.prototype.setModel = function (model) {
        this.model = model;
    };
    Mobile.prototype.setColor = function (color) {
        this.color = color;
    };
    Mobile.prototype.setPrice = function (price) {
        this.price = price;
    };
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.getTradeMark = function () {
        return this.tradeMark;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
