"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var filter_1 = __importDefault(require("lodash/filter"));
var range_1 = __importDefault(require("lodash/range"));
var includes_1 = __importDefault(require("lodash/includes"));
var isNil_1 = __importDefault(require("lodash/isNil"));
var React = __importStar(require("react"));
var MonthView_1 = __importDefault(require("../../views/MonthView"));
var BasePicker_1 = require("../BasePicker");
var const_1 = require("./const");
var sharedFunctions_1 = require("./sharedFunctions");
var MonthPicker = /** @class */ (function (_super) {
    __extends(MonthPicker, _super);
    /*
      Note:
        use it like this <MonthPicker key={someInputValue} />
        to make react create new instance when input value changes
    */
    function MonthPicker(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (e, _a) {
            var value = _a.value;
            var data = __assign(__assign({}, _this.props), { value: {
                    year: parseInt(_this.getCurrentDate(), 10),
                    month: _this.buildCalendarValues().indexOf(value),
                } });
            _this.props.onChange(e, data);
        };
        _this.switchToNextPage = function (e, data, callback) {
            _this.setState(function (_a) {
                var date = _a.date;
                var nextDate = date.clone();
                nextDate.add(1, 'year');
                return { date: nextDate };
            }, callback);
        };
        _this.switchToPrevPage = function (e, data, callback) {
            _this.setState(function (_a) {
                var date = _a.date;
                var prevDate = date.clone();
                prevDate.subtract(1, 'year');
                return { date: prevDate };
            }, callback);
        };
        _this.PAGE_WIDTH = const_1.MONTH_PAGE_WIDTH;
        return _this;
    }
    MonthPicker.prototype.render = function () {
        var _a = this.props, onChange = _a.onChange, value = _a.value, initializeWith = _a.initializeWith, closePopup = _a.closePopup, inline = _a.inline, isPickerInFocus = _a.isPickerInFocus, isTriggerInFocus = _a.isTriggerInFocus, onCalendarViewMount = _a.onCalendarViewMount, disable = _a.disable, enable = _a.enable, minDate = _a.minDate, maxDate = _a.maxDate, localization = _a.localization, rest = __rest(_a, ["onChange", "value", "initializeWith", "closePopup", "inline", "isPickerInFocus", "isTriggerInFocus", "onCalendarViewMount", "disable", "enable", "minDate", "maxDate", "localization"]);
        return (React.createElement(MonthView_1.default, __assign({}, rest, { values: this.buildCalendarValues(), onValueClick: this.handleChange, onCellHover: this.onHoveredCellPositionChange, onNextPageBtnClick: this.switchToNextPage, onPrevPageBtnClick: this.switchToPrevPage, hasPrevPage: this.isPrevPageAvailable(), hasNextPage: this.isNextPageAvailable(), onBlur: this.handleBlur, inline: this.props.inline, onMount: this.props.onCalendarViewMount, disabledItemIndexes: this.getDisabledPositions(), activeItemIndex: this.getActiveCellPosition(), hoveredItemIndex: this.state.hoveredCellPosition, currentHeadingValue: this.getCurrentDate(), localization: localization })));
    };
    MonthPicker.prototype.getCurrentDate = function () {
        /* Return current year(string) to display in calendar header. */
        return this.state.date.year().toString();
    };
    MonthPicker.prototype.buildCalendarValues = function () {
        var localization = this.props.localization;
        return (0, sharedFunctions_1.buildCalendarValues)(localization);
    };
    MonthPicker.prototype.getSelectableCellPositions = function () {
        var _this = this;
        return (0, filter_1.default)((0, range_1.default)(0, const_1.MONTHS_IN_YEAR), function (m) { return !(0, includes_1.default)(_this.getDisabledPositions(), m); });
    };
    MonthPicker.prototype.getInitialDatePosition = function () {
        var selectable = this.getSelectableCellPositions();
        return (0, sharedFunctions_1.getInitialDatePosition)(selectable, this.state.date);
    };
    MonthPicker.prototype.getActiveCellPosition = function () {
        /*
          Return position of a month that should be displayed as active
          (position in array returned by `this.buildCalendarValues`).
        */
        if (!(0, isNil_1.default)(this.props.value)) {
            if (this.props.value.year() === this.state.date.year()) {
                return this.props.value.month();
            }
        }
    };
    MonthPicker.prototype.getDisabledPositions = function () {
        var _a = this.props, maxDate = _a.maxDate, minDate = _a.minDate, enable = _a.enable, disable = _a.disable;
        return (0, sharedFunctions_1.getDisabledPositions)(enable, disable, maxDate, minDate, this.state.date);
    };
    MonthPicker.prototype.isNextPageAvailable = function () {
        var _a = this.props, maxDate = _a.maxDate, enable = _a.enable;
        return (0, sharedFunctions_1.isNextPageAvailable)(maxDate, enable, this.state.date);
    };
    MonthPicker.prototype.isPrevPageAvailable = function () {
        var _a = this.props, minDate = _a.minDate, enable = _a.enable;
        return (0, sharedFunctions_1.isPrevPageAvailable)(minDate, enable, this.state.date);
    };
    return MonthPicker;
}(BasePicker_1.SingleSelectionPicker));
exports.default = MonthPicker;