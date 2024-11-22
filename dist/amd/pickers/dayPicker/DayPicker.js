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
define(["require", "exports", "lodash/filter", "lodash/range", "lodash/includes", "lodash/isArray", "lodash/some", "react", "../../views/DayView", "../../views/DayView", "../BasePicker", "./sharedFunctions"], function (require, exports, filter_1, range_1, includes_1, isArray_1, some_1, React, DayView_1, DayView_2, BasePicker_1, sharedFunctions_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DAYS_ON_PAGE = void 0;
    filter_1 = __importDefault(filter_1);
    range_1 = __importDefault(range_1);
    includes_1 = __importDefault(includes_1);
    isArray_1 = __importDefault(isArray_1);
    some_1 = __importDefault(some_1);
    React = __importStar(React);
    DayView_1 = __importDefault(DayView_1);
    var PAGE_WIDTH = 7;
    exports.DAYS_ON_PAGE = DayView_2.WEEKS_TO_DISPLAY * PAGE_WIDTH;
    var DayPicker = /** @class */ (function (_super) {
        __extends(DayPicker, _super);
        function DayPicker(props) {
            var _this = _super.call(this, props) || this;
            _this.isNextPageAvailable = function () {
                var _a = _this.props, maxDate = _a.maxDate, enable = _a.enable;
                if ((0, isArray_1.default)(enable)) {
                    return (0, some_1.default)(enable, function (enabledDate) { return enabledDate.isAfter(_this.state.date, 'month'); });
                }
                return (0, sharedFunctions_1.isNextPageAvailable)(_this.state.date, maxDate);
            };
            _this.isPrevPageAvailable = function () {
                var _a = _this.props, minDate = _a.minDate, enable = _a.enable;
                if ((0, isArray_1.default)(enable)) {
                    return (0, some_1.default)(enable, function (enabledDate) { return enabledDate.isBefore(_this.state.date, 'month'); });
                }
                return (0, sharedFunctions_1.isPrevPageAvailable)(_this.state.date, minDate);
            };
            _this.handleChange = function (e, _a) {
                var value = _a.value;
                // `value` is selected date(string) like '31' or '1'
                var data = __assign(__assign({}, _this.props), { value: {
                        year: _this.state.date.year(),
                        month: _this.state.date.month(),
                        date: parseInt(value, 10),
                    } });
                _this.props.onChange(e, data);
            };
            _this.switchToNextPage = function (e, data, callback) {
                _this.setState(function (_a) {
                    var date = _a.date;
                    var nextDate = date.clone();
                    nextDate.add(1, 'month');
                    return { date: nextDate };
                }, callback);
            };
            _this.switchToPrevPage = function (e, data, callback) {
                _this.setState(function (_a) {
                    var date = _a.date;
                    var prevDate = date.clone();
                    prevDate.subtract(1, 'month');
                    return { date: prevDate };
                }, callback);
            };
            _this.PAGE_WIDTH = PAGE_WIDTH;
            return _this;
        }
        DayPicker.prototype.render = function () {
            var _a = this.props, onChange = _a.onChange, value = _a.value, initializeWith = _a.initializeWith, closePopup = _a.closePopup, inline = _a.inline, isPickerInFocus = _a.isPickerInFocus, isTriggerInFocus = _a.isTriggerInFocus, onCalendarViewMount = _a.onCalendarViewMount, disable = _a.disable, enable = _a.enable, minDate = _a.minDate, maxDate = _a.maxDate, marked = _a.marked, markColor = _a.markColor, localization = _a.localization, rest = __rest(_a, ["onChange", "value", "initializeWith", "closePopup", "inline", "isPickerInFocus", "isTriggerInFocus", "onCalendarViewMount", "disable", "enable", "minDate", "maxDate", "marked", "markColor", "localization"]);
            return (React.createElement(DayView_1.default, __assign({}, rest, { values: this.buildCalendarValues(), hasNextPage: this.isNextPageAvailable(), hasPrevPage: this.isPrevPageAvailable(), onNextPageBtnClick: this.switchToNextPage, onPrevPageBtnClick: this.switchToPrevPage, onValueClick: this.handleChange, onBlur: this.handleBlur, inline: this.props.inline, onMount: this.props.onCalendarViewMount, hoveredItemIndex: this.state.hoveredCellPosition, onCellHover: this.onHoveredCellPositionChange, currentHeadingValue: this.getCurrentDate(), disabledItemIndexes: this.getDisabledPositions(), activeItemIndex: this.getActiveCellPosition(), markedItemIndexes: this.getMarkedPositions(), markColor: markColor, localization: localization })));
        };
        DayPicker.prototype.getCurrentDate = function () {
            /* Return currently selected year and month(string) to display in calendar header. */
            return this.state.date.format('MMMM YYYY');
        };
        DayPicker.prototype.buildCalendarValues = function () {
            /*
              Return array of dates (strings) like ['31', '1', ...]
              that used to populate calendar's page.
            */
            return (0, sharedFunctions_1.buildDays)(this.state.date, exports.DAYS_ON_PAGE);
        };
        DayPicker.prototype.getSelectableCellPositions = function () {
            var _this = this;
            return (0, filter_1.default)((0, range_1.default)(0, exports.DAYS_ON_PAGE), function (d) { return !(0, includes_1.default)(_this.getDisabledPositions(), d); });
        };
        DayPicker.prototype.getInitialDatePosition = function () {
            return (0, sharedFunctions_1.getInitialDatePosition)(this.state.date.date().toString(), this.buildCalendarValues(), this.getSelectableCellPositions());
        };
        DayPicker.prototype.getActiveCellPosition = function () {
            /*
              Return position of a date that should be displayed as active
              (position in array returned by `this.buildCalendarValues`).
            */
            if (this.props.value && this.props.value.isSame(this.state.date, 'month')) {
                var disabledPositions_1 = this.getDisabledPositions();
                var active = this.buildCalendarValues()
                    .map(function (day, i) { return (0, includes_1.default)(disabledPositions_1, i) ? undefined : day; })
                    .indexOf(this.props.value.date().toString());
                if (active >= 0) {
                    return active;
                }
            }
        };
        DayPicker.prototype.getDisabledPositions = function () {
            /*
              Return position numbers of dates that should be displayed as disabled
              (position in array returned by `this.buildCalendarValues`).
            */
            var _a = this.props, disable = _a.disable, maxDate = _a.maxDate, minDate = _a.minDate, enable = _a.enable;
            return (0, sharedFunctions_1.getDisabledDays)(disable, maxDate, minDate, this.state.date, exports.DAYS_ON_PAGE, enable);
        };
        DayPicker.prototype.getMarkedPositions = function () {
            /*
              Return position numbers of dates that should be displayed as marked
              (position in array returned by `this.buildCalendarValues`).
            */
            var marked = this.props.marked;
            if (marked) {
                return (0, sharedFunctions_1.getMarkedDays)(marked, this.state.date, exports.DAYS_ON_PAGE);
            }
            else {
                return [];
            }
        };
        return DayPicker;
    }(BasePicker_1.SingleSelectionPicker));
    exports.default = DayPicker;
});