"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.momentObj = momentObj;
exports.dateObject = dateObject;
var moment_1 = __importDefault(require("moment"));
function momentObj(props, propName, componentName) {
    if (props[propName]) {
        var value = props[propName];
        if (moment_1.default.isMoment(value)) {
            if (!value.isValid()) {
                return new Error("".concat(propName, " in ").concat(componentName, " is invalid 'moment' object"));
            }
        }
        else {
            return new Error("".concat(propName, " in ").concat(componentName, " is not 'moment' object"));
        }
    }
    return null;
}
function dateObject(props, propName, componentName) {
    if (props[propName]) {
        var value = props[propName];
        if (value && value.constructor && value.constructor.name) {
            if (value.constructor.name !== 'Date') {
                return new Error("".concat(propName, " in ").concat(componentName, " is not 'Date' object"));
            }
        }
    }
    return null;
}
exports.default = {
    momentObj: momentObj,
    dateObject: dateObject,
};
