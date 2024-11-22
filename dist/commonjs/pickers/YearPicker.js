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
var range_1 = __importDefault(require("lodash/range"));
var includes_1 = __importDefault(require("lodash/includes"));
var isNil_1 = __importDefault(require("lodash/isNil"));
var isArray_1 = __importDefault(require("lodash/isArray"));
var concat_1 = __importDefault(require("lodash/concat"));
var uniq_1 = __importDefault(require("lodash/uniq"));
var filter_1 = __importDefault(require("lodash/filter"));
var last_1 = __importDefault(require("lodash/last"));
var first_1 = __importDefault(require("lodash/first"));
var some_1 = __importDefault(require("lodash/some"));
var React = __importStar(require("react"));
var YearView_1 = __importDefault(require("../views/YearView"));
var BasePicker_1 = require("./BasePicker");
var PAGE_WIDTH = 3;
var PAGE_HEIGHT = 4;
var YEARS_ON_PAGE = PAGE_WIDTH * PAGE_HEIGHT;
var YearPicker = /** @class */ (function (_super) {
    __extends(YearPicker, _super);
    /*
      Note:
        use it like this <YearPicker key={someInputValue} />
        to make react create new instance when input value changes
    */
    function YearPicker(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (e, _a) {
            var value = _a.value;
            var data = __assign(__assign({}, _this.props), { value: { year: parseInt(value, 10) } });
            _this.props.onChange(e, data);
        };
        _this.switchToNextPage = function (e, data, callback) {
            _this.setState(function (_a) {
                var date = _a.date;
                var nextDate = date.clone();
                nextDate.add(YEARS_ON_PAGE, 'year');
                return { date: nextDate };
            }, callback);
        };
        _this.switchToPrevPage = function (e, data, callback) {
            _this.setState(function (_a) {
                var date = _a.date;
                var prevDate = date.clone();
                prevDate.subtract(YEARS_ON_PAGE, 'year');
                return { date: prevDate };
            }, callback);
        };
        _this.PAGE_WIDTH = PAGE_WIDTH;
        return _this;
    }
    YearPicker.prototype.render = function () {
        var _a = this.props, onChange = _a.onChange, value = _a.value, initializeWith = _a.initializeWith, closePopup = _a.closePopup, inline = _a.inline, isPickerInFocus = _a.isPickerInFocus, isTriggerInFocus = _a.isTriggerInFocus, onCalendarViewMount = _a.onCalendarViewMount, disable = _a.disable, enable = _a.enable, minDate = _a.minDate, maxDate = _a.maxDate, localization = _a.localization, rest = __rest(_a, ["onChange", "value", "initializeWith", "closePopup", "inline", "isPickerInFocus", "isTriggerInFocus", "onCalendarViewMount", "disable", "enable", "minDate", "maxDate", "localization"]);
        return (React.createElement(YearView_1.default, __assign({}, rest, { values: this.buildCalendarValues(), onNextPageBtnClick: this.switchToNextPage, onPrevPageBtnClick: this.switchToPrevPage, onValueClick: this.handleChange, onBlur: this.handleBlur, inline: this.props.inline, onMount: this.props.onCalendarViewMount, hoveredItemIndex: this.state.hoveredCellPosition, onCellHover: this.onHoveredCellPositionChange, hasPrevPage: this.isPrevPageAvailable(), hasNextPage: this.isNextPageAvailable(), disabledItemIndexes: this.getDisabledPositions(), activeItemIndex: this.getActiveCellPosition(), localization: localization })));
    };
    YearPicker.prototype.buildCalendarValues = function () {
        /*
          Return array of years (strings) like ['2012', '2013', ...]
          that used to populate calendar's page.
        */
        var years = [];
        var date = this.state.date;
        var padd = date.year() % YEARS_ON_PAGE;
        var firstYear = date.year() - padd;
        for (var i = 0; i < YEARS_ON_PAGE; i++) {
            years[i] = (firstYear + i).toString();
        }
        return years;
    };
    YearPicker.prototype.getInitialDatePosition = function () {
        var selectable = this.getSelectableCellPositions();
        var values = this.buildCalendarValues();
        var currentYearIndex = values.indexOf(this.state.date.year().toString());
        if (selectable.indexOf(currentYearIndex) < 0) {
            return selectable[0];
        }
        return currentYearIndex;
    };
    YearPicker.prototype.getActiveCellPosition = function () {
        /*
          Return position of a year that should be displayed as active
          (position in array returned by `this.buildCalendarValues`).
        */
        if (!(0, isNil_1.default)(this.props.value)) {
            var years = this.buildCalendarValues();
            var yearIndex = years.indexOf(this.props.value.year().toString());
            if (yearIndex >= 0) {
                return yearIndex;
            }
        }
    };
    YearPicker.prototype.getSelectableCellPositions = function () {
        var _this = this;
        return (0, filter_1.default)((0, range_1.default)(0, YEARS_ON_PAGE), function (y) { return !(0, includes_1.default)(_this.getDisabledPositions(), y); });
    };
    YearPicker.prototype.getDisabledPositions = function () {
        /*
          Return position numbers of years that should be displayed as disabled
          (position in array returned by `this.buildCalendarValues`).
        */
        var disabled = [];
        var years = this.buildCalendarValues();
        if ((0, isArray_1.default)(this.props.enable)) {
            var enabledYears_1 = this.props.enable.map(function (yearMoment) { return yearMoment.year().toString(); });
            disabled = (0, concat_1.default)(disabled, years
                .filter(function (year) { return !(0, includes_1.default)(enabledYears_1, year); })
                .map(function (year) { return years.indexOf(year); }));
        }
        if ((0, isArray_1.default)(this.props.disable)) {
            disabled = (0, concat_1.default)(disabled, this.props.disable
                .filter(function (yearMoment) { return (0, includes_1.default)(years, yearMoment.year().toString()); })
                .map(function (yearMoment) { return years.indexOf(yearMoment.year().toString()); }));
        }
        if (!(0, isNil_1.default)(this.props.maxDate)) {
            if (parseInt((0, first_1.default)(years), 10) > this.props.maxDate.year()) {
                disabled = (0, range_1.default)(0, years.length);
            }
            else if ((0, includes_1.default)(years, this.props.maxDate.year().toString())) {
                disabled = (0, concat_1.default)(disabled, (0, range_1.default)(years.indexOf(this.props.maxDate.year().toString()) + 1, years.length));
            }
        }
        if (!(0, isNil_1.default)(this.props.minDate)) {
            if (parseInt((0, last_1.default)(years), 10) < this.props.minDate.year()) {
                disabled = (0, range_1.default)(0, years.length);
            }
            else if ((0, includes_1.default)(years, this.props.minDate.year().toString())) {
                disabled = (0, concat_1.default)(disabled, (0, range_1.default)(0, years.indexOf(this.props.minDate.year().toString())));
            }
        }
        if (disabled.length > 0) {
            return (0, uniq_1.default)(disabled);
        }
    };
    YearPicker.prototype.isNextPageAvailable = function () {
        var _a = this.props, maxDate = _a.maxDate, enable = _a.enable;
        var lastOnPage = parseInt((0, last_1.default)(this.buildCalendarValues()), 10);
        if ((0, isArray_1.default)(enable)) {
            return (0, some_1.default)(enable, function (enabledYear) { return enabledYear.year() > lastOnPage; });
        }
        if ((0, isNil_1.default)(maxDate)) {
            return true;
        }
        return lastOnPage < maxDate.year();
    };
    YearPicker.prototype.isPrevPageAvailable = function () {
        var _a = this.props, minDate = _a.minDate, enable = _a.enable;
        var firstOnPage = parseInt((0, first_1.default)(this.buildCalendarValues()), 10);
        if ((0, isArray_1.default)(enable)) {
            return (0, some_1.default)(enable, function (enabledYear) { return enabledYear.year() < firstOnPage; });
        }
        if ((0, isNil_1.default)(minDate)) {
            return true;
        }
        return firstOnPage > minDate.year();
    };
    return YearPicker;
}(BasePicker_1.SingleSelectionPicker));
exports.default = YearPicker;