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
var invoke_1 = __importDefault(require("lodash/invoke"));
var React = __importStar(require("react"));
var InputView_1 = __importDefault(require("../views/InputView"));
var parse_1 = require("./parse");
var DatesRangePicker_1 = __importDefault(require("../pickers/dayPicker/DatesRangePicker"));
var BaseInput_1 = __importStar(require("./BaseInput"));
var lib_1 = require("../lib");
var shared_1 = require("./shared");
var YearPicker_1 = __importDefault(require("../pickers/YearPicker"));
var MonthPicker_1 = __importDefault(require("../pickers/monthPicker/MonthPicker"));
var lodash_1 = require("lodash");
var moment_1 = __importDefault(require("moment"));
var DATES_SEPARATOR = ' - ';
function getNextMode(currentMode) {
    if (currentMode === 'year') {
        return 'month';
    }
    if (currentMode === 'month') {
        return 'day';
    }
    return 'year';
}
function getPrevMode(currentMode) {
    if (currentMode === 'day') {
        return 'month';
    }
    if (currentMode === 'month') {
        return 'year';
    }
    return 'day';
}
var DatesRangeInput = /** @class */ (function (_super) {
    __extends(DatesRangeInput, _super);
    function DatesRangeInput(props) {
        var _this = _super.call(this, props) || this;
        _this.getPicker = function () {
            var _a = _this.props, value = _a.value, dateFormat = _a.dateFormat, markColor = _a.markColor, marked = _a.marked, localization = _a.localization, minDate = _a.minDate, maxDate = _a.maxDate, tabIndex = _a.tabIndex, pickerWidth = _a.pickerWidth, pickerStyle = _a.pickerStyle, allowSameEndDate = _a.allowSameEndDate;
            var initialDate = _this.props.initialDate;
            var _b = _this.props, disable = _b.disable, enable = _b.enable, inline = _b.inline;
            var start = null;
            var end = null;
            if (_this.isValidDate(_this.state.inputStart)) {
                start = _this.state.inputStart;
            }
            if (_this.isValidDate(_this.state.inputEnd)) {
                end = _this.state.inputEnd;
            }
            var pickerProps = {
                isPickerInFocus: _this.isPickerInFocus,
                isTriggerInFocus: _this.isTriggerInFocus,
                inline: inline,
                onCalendarViewMount: _this.onCalendarViewMount,
                closePopup: _this.closePopup,
                tabIndex: tabIndex,
                pickerWidth: pickerWidth,
                pickerStyle: pickerStyle,
                onHeaderClick: _this.switchToPrevMode,
                value: (0, parse_1.buildValue)(value, null, localization, dateFormat, null),
                enable: (0, parse_1.parseArrayOrValue)(enable, dateFormat, localization),
                minDate: (0, parse_1.parseValue)(minDate, dateFormat, localization),
                maxDate: (0, parse_1.parseValue)(maxDate, dateFormat, localization),
                localization: localization,
            };
            var disableParsed = (0, parse_1.parseArrayOrValue)(disable, dateFormat, localization);
            var markedParsed = (0, parse_1.parseArrayOrValue)(marked, dateFormat, localization);
            var minDateParsed = (0, parse_1.parseValue)(minDate, dateFormat, localization);
            var initializeWith;
            switch (_this.state.mode) {
                case 'year':
                    if (_this.state.displayYear) {
                        initializeWith = (0, moment_1.default)(new Date(_this.state.displayYear, 0, 1));
                    }
                    else if (minDateParsed) {
                        initializeWith = minDateParsed;
                    }
                    else {
                        initializeWith = (0, parse_1.buildValue)(_this.state.inputStart, initialDate, localization, dateFormat);
                    }
                    return (React.createElement(YearPicker_1.default, __assign({}, pickerProps, { onChange: _this.setYear, initializeWith: initializeWith, disable: (0, shared_1.getDisabledYears)(disableParsed) })));
                case 'month':
                    if (_this.state.displayYear) {
                        initializeWith = (0, moment_1.default)(new Date(_this.state.displayYear, 0, 1));
                    }
                    else if (minDateParsed) {
                        initializeWith = minDateParsed;
                    }
                    else {
                        initializeWith = (0, parse_1.buildValue)(_this.state.inputStart, initialDate, localization, dateFormat);
                    }
                    return (React.createElement(MonthPicker_1.default, __assign({}, pickerProps, { hasHeader: true, onChange: _this.setMonth, initializeWith: initializeWith, disable: (0, shared_1.getDisabledMonths)(disableParsed) })));
                case 'day':
                default:
                    if (_this.state.displayYear > 0 && _this.state.displayMonth >= 0) {
                        initialDate = (0, moment_1.default)(new Date(_this.state.displayYear, _this.state.displayMonth, 1));
                    }
                    else if (minDateParsed) {
                        initialDate = minDateParsed;
                    }
                    initializeWith = (0, parse_1.buildValue)(initialDate, _this.state.inputStart, localization, dateFormat);
                    return (React.createElement(DatesRangePicker_1.default, { isPickerInFocus: _this.isPickerInFocus, isTriggerInFocus: _this.isTriggerInFocus, inline: _this.props.inline, onCalendarViewMount: _this.onCalendarViewMount, closePopup: _this.closePopup, onChange: _this.handleSelect, dateFormat: dateFormat, initializeWith: initializeWith, start: start, end: end, marked: markedParsed, markColor: markColor, minDate: (0, parse_1.parseValue)(minDate, dateFormat, localization), maxDate: (0, parse_1.parseValue)(maxDate, dateFormat, localization), localization: localization, onHeaderClick: _this.switchToPrevMode, tabIndex: tabIndex, pickerWidth: pickerWidth, pickerStyle: pickerStyle, allowSameEndDate: allowSameEndDate }));
            }
        };
        _this.handleSelect = function (e, _a) {
            var value = _a.value;
            var dateFormat = _this.props.dateFormat;
            var start = value.start, end = value.end;
            _this.setState({
                inputStart: start,
                inputEnd: end,
            }, function () { return _this.state.mode !== 'day' && _this.switchToNextMode(); });
            var outputString = '';
            if (start && end) {
                outputString = "".concat(start.format(dateFormat)).concat(DATES_SEPARATOR).concat(end.format(dateFormat));
            }
            else if (start) {
                outputString = "".concat(start.format(dateFormat)).concat(DATES_SEPARATOR);
            }
            (0, invoke_1.default)(_this.props, 'onChange', e, __assign(__assign({}, _this.props), { value: outputString }));
            if (_this.props.closable && start && end) {
                _this.closePopup();
            }
        };
        _this.setYear = function (e, _a) {
            var value = _a.value;
            _this.setState({
                displayYear: value.year,
            }, function () { return _this.switchToNextMode(); });
        };
        _this.setMonth = function (e, _a) {
            var value = _a.value;
            var year = value.year, month = value.month;
            _this.setState({
                displayYear: year,
                displayMonth: month,
            }, function () { return _this.switchToNextMode(); });
        };
        _this.switchToNextModeUndelayed = function () {
            _this.setState(function (_a) {
                var mode = _a.mode;
                return { mode: getNextMode(mode) };
            }, _this.onModeSwitch);
        };
        _this.switchToNextMode = function () {
            (0, lib_1.tick)(_this.switchToNextModeUndelayed);
        };
        _this.switchToPrevModeUndelayed = function () {
            _this.setState(function (_a) {
                var mode = _a.mode;
                return { mode: getPrevMode(mode) };
            }, _this.onModeSwitch);
        };
        _this.switchToPrevMode = function () {
            (0, lib_1.tick)(_this.switchToPrevModeUndelayed);
        };
        // Update the start/end dates when input is changed manually (not from Picker)
        _this.inputChangeHandler = function (e, data) {
            var _a = (0, parse_1.parseDatesRange)(data.value, _this.props.dateFormat), start = _a.start, end = _a.end;
            _this.setState({
                inputStart: start,
                inputEnd: end,
            });
            _this.props.onChange(e, data);
        };
        var _a = (0, parse_1.parseDatesRange)(_this.props.value, _this.props.dateFormat), start = _a.start, end = _a.end;
        _this.state = {
            mode: 'day',
            inputStart: start,
            inputEnd: end,
            displayYear: _this.isValidDate(start) ? start.year() : undefined,
            displayMonth: _this.isValidDate(start) ? start.month() : undefined,
            popupIsClosed: true,
        };
        return _this;
    }
    DatesRangeInput.prototype.render = function () {
        var _a = this.props, value = _a.value, dateFormat = _a.dateFormat, initialDate = _a.initialDate, maxDate = _a.maxDate, minDate = _a.minDate, closable = _a.closable, marked = _a.marked, markColor = _a.markColor, localization = _a.localization, allowSameEndDate = _a.allowSameEndDate, rest = __rest(_a, ["value", "dateFormat", "initialDate", "maxDate", "minDate", "closable", "marked", "markColor", "localization", "allowSameEndDate"]);
        return (React.createElement(InputView_1.default, __assign({ popupIsClosed: this.state.popupIsClosed }, rest, { value: value, onMount: this.onInputViewMount, closePopup: this.closePopup, openPopup: this.openPopup, onChange: this.inputChangeHandler, renderPicker: this.getPicker })));
    };
    DatesRangeInput.prototype.isValidDate = function (date) {
        return !(0, lodash_1.isNil)(date) && date.isValid();
    };
    /**
     * Component responsibility:
     *  - parse input value (start: Moment, end: Moment)
     *  - handle DayPicker change (format {start: Moment, end: Moment} into
     *    string 'start - end')
     */
    DatesRangeInput.defaultProps = __assign(__assign({}, BaseInput_1.default.defaultProps), { dateFormat: 'DD-MM-YYYY', icon: 'calendar' });
    DatesRangeInput.propTypes = __assign(__assign(__assign(__assign(__assign({}, BaseInput_1.BaseInputPropTypes), BaseInput_1.DateRelatedPropTypes), BaseInput_1.MarkedValuesPropTypes), BaseInput_1.MinMaxValuePropTypes), BaseInput_1.RangeRelatedPropTypes);
    return DatesRangeInput;
}(BaseInput_1.default));
exports.default = DatesRangeInput;
