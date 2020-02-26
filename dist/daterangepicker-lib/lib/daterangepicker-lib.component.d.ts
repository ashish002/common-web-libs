import { ElementRef, EventEmitter, OnInit } from "@angular/core";
export declare class DaterangepickerLibComponent implements OnInit {
    id: string;
    enabledPresets: Array<string>;
    selectedDuration: any;
    dateRangePicker: ElementRef;
    dateRangePickerInput: ElementRef;
    dateRangeChanged: EventEmitter<any>;
    startTime: number;
    endTime: number;
    presetsConfig: any;
    enabledPresetsRangeConfig: any;
    timeRange: string;
    custom: string;
    checkOutsideClickEvent: boolean;
    enableDateRangeOption: boolean;
    tooltipMessage: string;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    initializeDateRangePicker(minDate?: any, maxDate?: any): void;
    cb(start: any, end: any): void;
    prepareConfigForEnabledPresets(): void;
    init(): void;
    updateDates(start: any, end: any): void;
    setMinMaxDates(minDate: any, maxDate: any): void;
    disableDateRangePicker(): boolean;
}
