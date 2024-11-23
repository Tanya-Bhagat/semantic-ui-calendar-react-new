var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "lodash/indexOf", "lodash/lastIndexOf", "lodash/range", "lodash/includes", "lodash/isNil", "lodash/isArray", "lodash/concat", "lodash/uniq", "lodash/first", "lodash/sortBy", "lodash/slice", "lodash/find"], function (require, exports, indexOf_1, lastIndexOf_1, range_1, includes_1, isNil_1, isArray_1, concat_1, uniq_1, first_1, sortBy_1, slice_1, find_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.testExport = void 0;
    exports.buildDays = buildDays;
    exports.getDefaultEnabledDayPositions = getDefaultEnabledDayPositions;
    exports.getDisabledDays = getDisabledDays;
    exports.getMarkedDays = getMarkedDays;
    exports.isNextPageAvailable = isNextPageAvailable;
    exports.isPrevPageAvailable = isPrevPageAvailable;
    exports.getInitialDatePosition = getInitialDatePosition;
    indexOf_1 = __importDefault(indexOf_1);
    lastIndexOf_1 = __importDefault(lastIndexOf_1);
    range_1 = __importDefault(range_1);
    includes_1 = __importDefault(includes_1);
    isNil_1 = __importDefault(isNil_1);
    isArray_1 = __importDefault(isArray_1);
    concat_1 = __importDefault(concat_1);
    uniq_1 = __importDefault(uniq_1);
    first_1 = __importDefault(first_1);
    sortBy_1 = __importDefault(sortBy_1);
    slice_1 = __importDefault(slice_1);
    find_1 = __importDefault(find_1);
    /** Build days to fill page. */
    function buildDays(date, daysOnPage) {
        var start = date.clone().startOf('month').startOf('week');
        return getDaysArray(start.date(), getBrakepoints(date), daysOnPage).map(function (d) { return d.toString(); });
    }
    /** Return dates from ends of months.
     *
     * On one datepicker's page not only days from current month are displayed
     * but also some days from adjacent months. This function returns days
     * that separate one month from other (last day in month).
     * Return array of one or two numbers.
     */
    function getBrakepoints(referenceDate) {
        var dateInCurrentMonth = referenceDate.clone();
        var currentMonth = dateInCurrentMonth.month();
        var brakepoints = [];
        var firstDateOnPage = dateInCurrentMonth.clone().startOf('month').startOf('week');
        if (firstDateOnPage.month() !== currentMonth) {
            brakepoints.push(firstDateOnPage.clone().endOf('month').date());
        }
        brakepoints.push(dateInCurrentMonth.clone().endOf('month').date());
        return brakepoints;
    }
    /* Return array of day positions that are not disabled by default. */
    function getDefaultEnabledDayPositions(allDays, date) {
        var dateClone = date.clone();
        var brakepoints = getBrakepoints(dateClone);
        if (brakepoints.length === 1) {
            return (0, range_1.default)(0, (0, indexOf_1.default)(allDays, brakepoints[0].toString()) + 1);
        }
        else {
            return (0, range_1.default)((0, indexOf_1.default)(allDays, brakepoints[0].toString()) + 1, (0, lastIndexOf_1.default)(allDays, brakepoints[1].toString()) + 1);
        }
    }
    /** Return day positions that shoud be displayed as disabled. */
    function getDisabledDays(disable, maxDate, minDate, currentDate, daysOnPage, enable) {
        var dayPositions = (0, range_1.default)(daysOnPage);
        var daysInCurrentMonthPositions = getDefaultEnabledDayPositions(buildDays(currentDate, daysOnPage), currentDate);
        var disabledDays = dayPositions.filter(function (dayPosition) { return !(0, includes_1.default)(daysInCurrentMonthPositions, dayPosition); });
        if ((0, isArray_1.default)(enable)) {
            var enabledDaysPositions_1 = enable
                .filter(function (date) { return date.isSame(currentDate, 'month'); })
                .map(function (date) { return date.date(); })
                .map(function (date) { return daysInCurrentMonthPositions[date - 1]; });
            disabledDays = (0, concat_1.default)(disabledDays, dayPositions.filter(function (position) {
                return !(0, includes_1.default)(enabledDaysPositions_1, position);
            }));
        }
        if ((0, isArray_1.default)(disable)) {
            disabledDays = (0, concat_1.default)(disabledDays, disable
                .filter(function (date) { return date.isSame(currentDate, 'month'); })
                .map(function (date) { return date.date(); })
                .map(function (date) { return daysInCurrentMonthPositions[date - 1]; }));
        }
        if (!(0, isNil_1.default)(maxDate)) {
            if (maxDate.isBefore(currentDate, 'month')) {
                disabledDays = dayPositions;
            }
            if (maxDate.isSame(currentDate, 'month')) {
                disabledDays = (0, concat_1.default)(disabledDays, (0, range_1.default)(1, daysInCurrentMonthPositions.length + 1)
                    .filter(function (date) { return date > maxDate.date(); })
                    .map(function (date) { return daysInCurrentMonthPositions[date - 1]; }));
            }
        }
        if (!(0, isNil_1.default)(minDate)) {
            if (minDate.isAfter(currentDate, 'month')) {
                disabledDays = dayPositions;
            }
            if (minDate.isSame(currentDate, 'month')) {
                disabledDays = (0, concat_1.default)(disabledDays, (0, range_1.default)(1, daysInCurrentMonthPositions.length + 1)
                    .filter(function (date) { return date < minDate.date(); })
                    .map(function (date) { return daysInCurrentMonthPositions[date - 1]; }));
            }
        }
        return (0, sortBy_1.default)((0, uniq_1.default)(disabledDays).filter(function (day) { return !(0, isNil_1.default)(day); }));
    }
    /** Return day positions that should be displayed as marked. */
    function getMarkedDays(marked, currentDate, daysOnPage) {
        if (marked.length === 0) {
            return [];
        }
        var allDates = buildDays(currentDate, daysOnPage);
        var activeDayPositions = getDefaultEnabledDayPositions(allDates, currentDate);
        var allDatesNumb = allDates.map(function (date) { return parseInt(date, 10); });
        /*
         * The following will clear all dates before the 1st of the current month.
         * This is to prevent marking days before the 1st, that shouldn't be marked.
         * If the incorrect dates are marked, instead of the legitimate ones, the legitimate dates
         * will not be marked at all.
        */
        var fillTo = allDatesNumb.indexOf(1);
        for (var i = 0; i < fillTo; i++) {
            allDatesNumb[i] = 0;
        }
        var markedIndexes = marked
            .filter(function (date) { return date.isSame(currentDate, 'month'); })
            .map(function (date) { return date.date(); })
            .map(function (date) { return allDatesNumb.indexOf(date); });
        return markedIndexes.filter(function (index) { return (0, includes_1.default)(activeDayPositions, index); });
    }
    function isNextPageAvailable(date, maxDate) {
        if ((0, isNil_1.default)(maxDate)) {
            return true;
        }
        if (date.isSameOrAfter(maxDate, 'month')) {
            return false;
        }
        return true;
    }
    function isPrevPageAvailable(date, minDate) {
        if ((0, isNil_1.default)(minDate)) {
            return true;
        }
        if (date.isSameOrBefore(minDate, 'month')) {
            return false;
        }
        return true;
    }
    // helper
    function getDaysArray(start, brakepoints, length) {
        var currentDay = start;
        var days = [];
        var brakepointsLeft = brakepoints.slice();
        while (!(days.length === length)) {
            days.push(currentDay);
            var bp = (0, first_1.default)(brakepointsLeft);
            if (currentDay === bp) {
                currentDay = 1;
                brakepointsLeft = (0, slice_1.default)(brakepointsLeft, 1);
            }
            else {
                currentDay = currentDay + 1;
            }
        }
        return days;
    }
    exports.testExport = {
        buildDays: buildDays,
        getBrakepoints: getBrakepoints,
        getDisabledDays: getDisabledDays,
        isNextPageAvailable: isNextPageAvailable,
        isPrevPageAvailable: isPrevPageAvailable,
        getDaysArray: getDaysArray,
        getDefaultEnabledDayPositions: getDefaultEnabledDayPositions,
    };
    function getInitialDatePosition(initDate, values, selectablePositions) {
        var selectable = selectablePositions.reduce(function (acc, pos) {
            acc.push({ value: values[pos], position: pos });
            return acc;
        }, []);
        var res = (0, find_1.default)(selectable, function (item) { return item.value === initDate; });
        if (res) {
            return res.position;
        }
        if (selectable.length === 0) {
            return null;
        }
        return selectable[0].position;
    }
});
