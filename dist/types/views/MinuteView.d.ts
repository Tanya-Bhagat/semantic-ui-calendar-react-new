import * as React from 'react';
import BaseCalendarView, { BaseCalendarViewProps, CalendarWithOptionalHeaderViewProps, SingleSelectionCalendarViewProps } from './BaseCalendarView';
type MinuteViewProps = BaseCalendarViewProps & SingleSelectionCalendarViewProps & CalendarWithOptionalHeaderViewProps;
declare class MinuteView extends BaseCalendarView<MinuteViewProps, any> {
    render(): React.JSX.Element;
}
export default MinuteView;
