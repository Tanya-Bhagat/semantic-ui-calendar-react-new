"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var React = __importStar(require("react"));
var semantic_ui_react_1 = require("semantic-ui-react");
/** Return array of week day names.
 *
 * getWeekDays() --> ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Su']
 */
var getWeekDays = function (m, localization) {
    var weekDays = [];
    var day = localization ? m().locale(localization).startOf('week') : m().startOf('week');
    for (var i = 0; i < 7; i++) {
        weekDays[i] = day.format('dd');
        day.add(1, 'd');
    }
    return weekDays;
};
var cellStyle = {
    border: 'none',
    borderBottom: '1px solid rgba(34,36,38,.1)',
};
var getWeekDayCells = function (m, localization) { return getWeekDays(m, localization).map(function (weekDay) { return (React.createElement(semantic_ui_react_1.Table.HeaderCell, { key: weekDay, style: cellStyle, colSpan: '1' }, weekDay)); }); };
function HeaderWeeks(props) {
    var localization = props.localization;
    return (React.createElement(semantic_ui_react_1.Table.Row, null, getWeekDayCells(moment_1.default, localization)));
}
exports.default = HeaderWeeks;