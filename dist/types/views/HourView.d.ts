import * as React from 'react';
import BaseCalendarView, { BaseCalendarViewProps, CalendarWithOptionalHeaderViewProps, SingleSelectionCalendarViewProps } from './BaseCalendarView';
type HourViewProps = BaseCalendarViewProps & SingleSelectionCalendarViewProps & CalendarWithOptionalHeaderViewProps;
declare class HourView extends BaseCalendarView<HourViewProps, any> {
    render(): React.JSX.Element;
}
export default HourView;
