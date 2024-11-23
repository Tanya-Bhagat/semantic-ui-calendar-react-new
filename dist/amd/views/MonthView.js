var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react", "./BaseCalendarView", "./Calendar", "./CalendarBody/Body", "./CalendarHeader/Header", "../lib"], function (require, exports, React, BaseCalendarView_1, Calendar_1, Body_1, Header_1, lib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MONTH_CALENDAR_ROW_WIDTH = void 0;
    React = __importStar(React);
    BaseCalendarView_1 = __importDefault(BaseCalendarView_1);
    Calendar_1 = __importDefault(Calendar_1);
    Body_1 = __importDefault(Body_1);
    Header_1 = __importDefault(Header_1);
    exports.MONTH_CALENDAR_ROW_WIDTH = 3;
    var MonthView = /** @class */ (function (_super) {
        __extends(MonthView, _super);
        function MonthView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MonthView.prototype.render = function () {
            var _this = this;
            var _a = this.props, values = _a.values, hasHeader = _a.hasHeader, onValueClick = _a.onValueClick, onNextPageBtnClick = _a.onNextPageBtnClick, onPrevPageBtnClick = _a.onPrevPageBtnClick, hasPrevPage = _a.hasPrevPage, hasNextPage = _a.hasNextPage, onHeaderClick = _a.onHeaderClick, disabledItemIndexes = _a.disabledItemIndexes, activeItemIndex = _a.activeItemIndex, currentHeadingValue = _a.currentHeadingValue, onCellHover = _a.onCellHover, hoveredItemIndex = _a.hoveredItemIndex, onMount = _a.onMount, inline = _a.inline, localization = _a.localization, rest = __rest(_a, ["values", "hasHeader", "onValueClick", "onNextPageBtnClick", "onPrevPageBtnClick", "hasPrevPage", "hasNextPage", "onHeaderClick", "disabledItemIndexes", "activeItemIndex", "currentHeadingValue", "onCellHover", "hoveredItemIndex", "onMount", "inline", "localization"]);
            var headerProps = {
                className: 'suicr-month-view-header',
                onNextPageBtnClick: onNextPageBtnClick,
                onPrevPageBtnClick: onPrevPageBtnClick,
                hasPrevPage: hasPrevPage,
                hasNextPage: hasNextPage,
                onHeaderClick: onHeaderClick,
                title: currentHeadingValue,
                displayWeeks: false,
                width: exports.MONTH_CALENDAR_ROW_WIDTH,
                localization: localization,
            };
            return (React.createElement(Calendar_1.default, __assign({ ref: function (e) { return _this.calendarNode = (0, lib_1.findHTMLElement)(e); }, outlineOnFocus: inline }, rest),
                hasHeader && React.createElement(Header_1.default, __assign({}, headerProps)),
                React.createElement(Body_1.default, { width: exports.MONTH_CALENDAR_ROW_WIDTH, data: values, onCellClick: onValueClick, onCellHover: onCellHover, active: activeItemIndex, hovered: hoveredItemIndex, disabled: disabledItemIndexes })));
        };
        return MonthView;
    }(BaseCalendarView_1.default));
    exports.default = MonthView;
});
