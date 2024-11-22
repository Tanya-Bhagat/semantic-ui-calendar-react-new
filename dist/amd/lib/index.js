var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./tick", "./findHTMLElement", "./checkMobile"], function (require, exports, tick_1, findHTMLElement_1, checkMobile_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.checkMobile = exports.findHTMLElement = exports.tick = void 0;
    Object.defineProperty(exports, "tick", { enumerable: true, get: function () { return __importDefault(tick_1).default; } });
    Object.defineProperty(exports, "findHTMLElement", { enumerable: true, get: function () { return __importDefault(findHTMLElement_1).default; } });
    Object.defineProperty(exports, "checkMobile", { enumerable: true, get: function () { return __importDefault(checkMobile_1).default; } });
});
