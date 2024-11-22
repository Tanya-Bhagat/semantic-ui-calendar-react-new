import * as React from 'react';
import BaseInput, { BaseInputProps, BaseInputState, DateRelatedProps, MinMaxValueProps } from './BaseInput';
import { Moment } from 'moment';
type CalendarMode = 'year' | 'month';
interface MonthRangeInputState extends BaseInputState {
    mode: CalendarMode;
    inputStart: Moment;
    inputEnd: Moment;
    displayYear: number;
}
export type MonthRangeInputProps = BaseInputProps & DateRelatedProps & MinMaxValueProps;
export type MonthRangeInputOnChangeData = MonthRangeInputProps;
declare class MonthRangeInput extends BaseInput<MonthRangeInputProps, MonthRangeInputState> {
    static readonly defaultProps: {
        dateFormat: string;
        icon: string;
        inline: boolean;
        localization: string;
    };
    static readonly propTypes: {
        maxDate: import("prop-types").Requireable<{}>;
        minDate: import("prop-types").Requireable<{}>;
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
    private switchToNextModeUndelayed;
    private switchToNextMode;
    private switchToPrevModeUndelayed;
    private switchToPrevMode;
    private isValidDate;
    private inputChangeHandler;
}
export default MonthRangeInput;