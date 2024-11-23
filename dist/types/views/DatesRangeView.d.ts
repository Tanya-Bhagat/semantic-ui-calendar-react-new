import * as React from 'react';
import BaseCalendarView, { BaseCalendarViewProps, CalendarWithHeaderViewProps, HeadingValueProps, RangeSelectionCalendarViewProps } from './BaseCalendarView';
type DatesRangeViewProps = BaseCalendarViewProps & HeadingValueProps & RangeSelectionCalendarViewProps & CalendarWithHeaderViewProps;
declare class DatesRangeView extends BaseCalendarView<DatesRangeViewProps, any> {
    static defaultProps: {
        active: {
            start: any;
            end: any;
        };
    };
    render(): React.JSX.Element;
}
export default DatesRangeView;
