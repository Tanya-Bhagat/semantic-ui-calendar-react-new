import * as React from 'react';
import BaseCalendarView, { BaseCalendarViewProps, CalendarWithOptionalHeaderViewProps, SingleSelectionCalendarViewProps } from './BaseCalendarView';
export declare const MONTH_CALENDAR_ROW_WIDTH = 3;
type MonthViewProps = BaseCalendarViewProps & SingleSelectionCalendarViewProps & CalendarWithOptionalHeaderViewProps;
declare class MonthView extends BaseCalendarView<MonthViewProps, any> {
    render(): React.JSX.Element;
}
export default MonthView;
