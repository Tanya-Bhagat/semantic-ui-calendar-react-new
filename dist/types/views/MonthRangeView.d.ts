import * as React from 'react';
import BaseCalendarView, { BaseCalendarViewProps, CalendarWithHeaderViewProps, HeadingValueProps, RangeSelectionCalendarViewProps } from './BaseCalendarView';
type MonthRangeViewProps = BaseCalendarViewProps & HeadingValueProps & RangeSelectionCalendarViewProps & CalendarWithHeaderViewProps;
declare class MonthRangeView extends BaseCalendarView<MonthRangeViewProps, any> {
    static defaultProps: {
        active: {
            start: any;
            end: any;
        };
    };
    render(): React.JSX.Element;
}
export default MonthRangeView;
