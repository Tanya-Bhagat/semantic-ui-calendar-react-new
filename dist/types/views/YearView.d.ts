import * as React from 'react';
import BaseCalendarView, { BaseCalendarViewProps, CalendarWithHeaderViewProps, SingleSelectionCalendarViewProps } from './BaseCalendarView';
type YearViewProps = BaseCalendarViewProps & SingleSelectionCalendarViewProps & CalendarWithHeaderViewProps;
declare class YearView extends BaseCalendarView<YearViewProps, any> {
    render(): React.JSX.Element;
}
export default YearView;
