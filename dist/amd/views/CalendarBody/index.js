var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./Body", "./Cell"], function (require, exports, Body_1, Cell_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Cell = exports.Body = void 0;
    Object.defineProperty(exports, "Body", { enumerable: true, get: function () { return __importDefault(Body_1).default; } });
    Object.defineProperty(exports, "Cell", { enumerable: true, get: function () { return __importDefault(Cell_1).default; } });
});
