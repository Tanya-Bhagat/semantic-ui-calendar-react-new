var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./Header", "./HeaderRange", "./HeaderWeeks"], function (require, exports, Header_1, HeaderRange_1, HeaderWeeks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HeaderWeeks = exports.HeaderRange = exports.Header = void 0;
    Object.defineProperty(exports, "Header", { enumerable: true, get: function () { return __importDefault(Header_1).default; } });
    Object.defineProperty(exports, "HeaderRange", { enumerable: true, get: function () { return __importDefault(HeaderRange_1).default; } });
    Object.defineProperty(exports, "HeaderWeeks", { enumerable: true, get: function () { return __importDefault(HeaderWeeks_1).default; } });
});
