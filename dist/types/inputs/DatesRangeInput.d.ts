import * as React from 'react';
import BaseInput, { BaseInputProps, BaseInputState, DateRelatedProps, MinMaxValueProps, MarkedValuesProps, RangeRelatedProps } from './BaseInput';
import { Moment } from 'moment';
type CalendarMode = 'year' | 'month' | 'day';
interface DatesRangeInputState extends BaseInputState {
    mode: CalendarMode;
    inputStart: Moment;
    inputEnd: Moment;
    displayYear: number;
    displayMonth: number;
}
export type DatesRangeInputProps = BaseInputProps & DateRelatedProps & MarkedValuesProps & MinMaxValueProps & RangeRelatedProps;
export type DatesRangeInputOnChangeData = DatesRangeInputProps;
declare class DatesRangeInput extends BaseInput<DatesRangeInputProps, DatesRangeInputState> {
    /**
     * Component responsibility:
     *  - parse input value (start: Moment, end: Moment)
     *  - handle DayPicker change (format {start: Moment, end: Moment} into
     *    string 'start - end')
     */
    static readonly defaultProps: {
        dateFormat: string;
        icon: string;
        inline: boolean;
        localization: string;
    };
    static readonly propTypes: {
        allowSameEndDate: import("prop-types").Requireable<boolean>;
        maxDate: import("prop-types").Requireable<{}>;
        minDate: import("prop-types").Requireable<{}>;
        marked: import("prop-types").Requireable<unknown[]>;
        markColor: import("prop-types").Requireable<string>;
        dateFormat: import("prop-types").Requireable<string>;
        initialDate: import("prop-types").Requireable<{}>;
        value: import("prop-types").Validator<string>;
        onChange: import("prop-types").Validator<(...args: any[]) => any>;
        closable: import("prop-types").Requireable<boolean>;
        inline: import("prop-types").Requireable<boolean>;
        icon: import("prop-types").Requireable<NonNullable<string | boolean>>;
        iconPosition: import("prop-types").Requireable<string>;
        onClear: import("prop-types").Requireable<(...args: any[]) => any>;
        clearable: import("prop-types").Requireable<boolean>;
        clearIcon: import("prop-types").Requireable<any>;
        popupPosition: import("prop-types").Requireable<string>;
        closeOnMouseLeave: import("prop-types").Requireable<boolean>;
        mountNode: import("prop-types").Requireable<any>;
        inlineLabel: import("prop-types").Requireable<boolean>;
        pickerWidth: import("prop-types").Requireable<string>;
        pickerStyle: import("prop-types").Requireable<object>;
        duration: import("prop-types").Requireable<number>;
        animation: import("prop-types").Requireable<string>;
        localization: import("prop-types").Requireable<string>;
        hideMobileKeyboard: import("prop-types").Requireable<boolean>;
    };
    constructor(props: any);
    render(): React.JSX.Element;
    private getPicker;
    private handleSelect;
    private setYear;
    private setMonth;
    private switchToNextModeUndelayed;
    private switchToNextMode;
    private switchToPrevModeUndelayed;
    private switchToPrevMode;
    private isValidDate;
    private inputChangeHandler;
}
export default DatesRangeInput;
