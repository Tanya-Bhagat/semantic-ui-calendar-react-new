export function buildTimeStringWithSuffix(hour, minute, timeFormat) {
    if (timeFormat === 'ampm') {
        if (parseInt(hour, 10) < 12) {
            return "".concat(convertHourTo_12_Format(hour), ":").concat(minute, " am");
        }
        return "".concat(convertHourTo_12_Format(hour), ":").concat(minute, " pm");
    }
    if (timeFormat === 'AMPM') {
        if (parseInt(hour, 10) < 12) {
            return "".concat(convertHourTo_12_Format(hour), ":").concat(minute, " AM");
        }
        return "".concat(convertHourTo_12_Format(hour), ":").concat(minute, " PM");
    }
    return "".concat(hour, ":").concat(minute);
}
function convertHourTo_12_Format(hour) {
    if (hour === '00' || hour === '12') {
        return '12';
    }
    if (parseInt(hour, 10) < 12) {
        return hour;
    }
    var h = (parseInt(hour, 10) - 12).toString();
    if (h.length === 1) {
        return '0' + h;
    }
    return h;
}
export function isNextPageAvailable(date, maxDate) {
    if (maxDate) {
        return maxDate.isAfter(date, 'day');
    }
    return true;
}
export function isPrevPageAvailable(date, minDate) {
    if (minDate) {
        return minDate.isBefore(date, 'day');
    }
    return true;
}
export function getCurrentDate(date) {
    return date.format('MMMM DD, YYYY');
}
