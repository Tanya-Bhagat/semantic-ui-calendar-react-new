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
import invoke from 'lodash/invoke';
import * as React from 'react';
import BaseInput, { BaseInputPropTypes, DateRelatedPropTypes, MinMaxValuePropTypes, } from './BaseInput';
import MonthRangePicker from '../pickers/monthPicker/MonthRangePicker';
import InputView from '../views/InputView';
import { parseDatesRange, parseValue, buildValue, parseArrayOrValue, } from './parse';
import moment from 'moment';
import YearPicker from '../pickers/YearPicker';
import { tick, } from '../lib';
import { getDisabledYears } from './shared';
import { isNil } from 'lodash';
var DATES_SEPARATOR = ' - ';
function getNextMode(currentMode) {
    if (currentMode === 'year') {
        return 'month';
    }
    return 'year';
}
function getPrevMode(currentMode) {
    if (currentMode === 'month') {
        return 'year';
    }
    return 'month';
}
var MonthRangeInput = /** @class */ (function (_super) {
    __extends(MonthRangeInput, _super);
    function MonthRangeInput(props) {
        var _this = _super.call(this, props) || this;
        _this.getPicker = function () {
            var _a = _this.props, value = _a.value, dateFormat = _a.dateFormat, maxDate = _a.maxDate, minDate = _a.minDate, tabIndex = _a.tabIndex, pickerWidth = _a.pickerWidth, pickerStyle = _a.pickerStyle, localization = _a.localization;
            var _b = _this.props, disable = _b.disable, enable = _b.enable, inline = _b.inline;
            var _c = parseDatesRange(value, dateFormat), start = _c.start, end = _c.end;
            var initialDate = _this.props.initialDate;
            var disableParsed = parseArrayOrValue(disable, dateFormat, localization);
            var minDateParsed = parseValue(minDate, dateFormat, localization);
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
                value: buildValue(value, null, localization, dateFormat, null),
                enable: parseArrayOrValue(enable, dateFormat, localization),
                minDate: parseValue(minDate, dateFormat, localization),
                maxDate: parseValue(maxDate, dateFormat, localization),
                localization: localization,
            };
            var initializeWith;
            if (_this.state.mode === 'year') {
                if (_this.state.displayYear) {
                    initializeWith = moment(new Date(_this.state.displayYear, 0, 1));
                }
                else if (minDateParsed) {
                    initializeWith = minDateParsed;
                }
                else {
                    initializeWith = buildValue(_this.state.inputStart, initialDate, localization, dateFormat);
                }
                return (React.createElement(YearPicker, __assign({}, pickerProps, { onChange: _this.setYear, initializeWith: initializeWith, disable: getDisabledYears(disableParsed) })));
            }
            else {
                if (_this.state.displayYear > 0) {
                    initialDate = moment(new Date(_this.state.displayYear, 0, 1));
                }
                else if (minDateParsed) {
                    initialDate = minDateParsed;
                }
                initializeWith = buildValue(initialDate, _this.state.inputStart, localization, dateFormat);
                return (React.createElement(MonthRangePicker, { isPickerInFocus: _this.isPickerInFocus, isTriggerInFocus: _this.isTriggerInFocus, inline: _this.props.inline, onCalendarViewMount: _this.onCalendarViewMount, closePopup: _this.closePopup, onChange: _this.handleSelect, dateFormat: dateFormat, initializeWith: initializeWith, start: start, end: end, minDate: parseValue(minDate, dateFormat, localization), maxDate: parseValue(maxDate, dateFormat, localization), localization: localization, onHeaderClick: _this.switchToPrevMode }));
            }
        };
        _this.handleSelect = function (e, _a) {
            var value = _a.value;
            var dateFormat = _this.props.dateFormat;
            var start = value.start, end = value.end;
            _this.setState({
                inputStart: start,
                inputEnd: end,
            }, function () { return _this.state.mode !== 'month' && _this.switchToNextMode(); });
            var outputString = '';
            if (start && end) {
                outputString = "".concat(start.format(dateFormat)).concat(DATES_SEPARATOR).concat(end.format(dateFormat));
            }
            else if (start) {
                outputString = "".concat(start.format(dateFormat)).concat(DATES_SEPARATOR);
            }
            invoke(_this.props, 'onChange', e, __assign(__assign({}, _this.props), { value: outputString, date: value }));
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
        _this.switchToNextModeUndelayed = function () {
            _this.setState(function (_a) {
                var mode = _a.mode;
                return { mode: getNextMode(mode) };
            }, _this.onModeSwitch);
        };
        _this.switchToNextMode = function () {
            tick(_this.switchToNextModeUndelayed);
        };
        _this.switchToPrevModeUndelayed = function () {
            _this.setState(function (_a) {
                var mode = _a.mode;
                return { mode: getPrevMode(mode) };
            }, _this.onModeSwitch);
        };
        _this.switchToPrevMode = function () {
            tick(_this.switchToPrevModeUndelayed);
        };
        // Update the start/end dates when input is changed manually (not from Picker)
        _this.inputChangeHandler = function (e, data) {
            var _a = parseDatesRange(data.value, _this.props.dateFormat), start = _a.start, end = _a.end;
            _this.setState({
                inputStart: start,
                inputEnd: end,
            });
            _this.props.onChange(e, data);
        };
        _this.state = {
            mode: 'month',
            inputStart: undefined,
            inputEnd: undefined,
            displayYear: undefined,
            popupIsClosed: true,
        };
        return _this;
    }
    MonthRangeInput.prototype.render = function () {
        var _a = this.props, value = _a.value, dateFormat = _a.dateFormat, initialDate = _a.initialDate, maxDate = _a.maxDate, minDate = _a.minDate, closable = _a.closable, localization = _a.localization, rest = __rest(_a, ["value", "dateFormat", "initialDate", "maxDate", "minDate", "closable", "localization"]);
        return (React.createElement(InputView, __assign({ popupIsClosed: this.state.popupIsClosed }, rest, { value: value, onMount: this.onInputViewMount, closePopup: this.closePopup, openPopup: this.openPopup, onChange: this.inputChangeHandler, renderPicker: this.getPicker })));
    };
    MonthRangeInput.prototype.isValidDate = function (date) {
        return !isNil(date) && date.isValid();
    };
    MonthRangeInput.defaultProps = __assign(__assign({}, BaseInput.defaultProps), { dateFormat: 'MM-YYYY', icon: 'calendar' });
    MonthRangeInput.propTypes = __assign(__assign(__assign({}, BaseInputPropTypes), DateRelatedPropTypes), MinMaxValuePropTypes);
    return MonthRangeInput;
}(BaseInput));
export default MonthRangeInput;
