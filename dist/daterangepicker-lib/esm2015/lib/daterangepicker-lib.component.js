/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { Constants } from "./constants";
import { DateUtil } from "./util/date.util";
import $ from "jquery";
import moment from 'moment';
import 'daterangepicker';
export class DaterangepickerLibComponent {
    constructor() {
        this.timePicker = false;
        this.alwaysShowCalendar = true;
        this.startTime = 0;
        this.endTime = 0;
        this.enableDateRangeOption = true;
        this.tooltipMessage = Constants.EMPTY_STRING;
        this.timeRange = localStorage.getItem('timeRange');
        this.checkOutsideClickEvent = false;
        this.dateRangeChanged = new EventEmitter();
        /** @type {?} */
        let currentTime = moment();
        if (this.timeRange && parseInt(this.timeRange) > 0) {
            currentTime = (moment.unix(Number.parseInt(this.timeRange)));
        }
        this.presetsConfig = {
            'Today': [moment(currentTime), moment(currentTime)],
            'This Week': [moment(currentTime).startOf('week'), moment(currentTime).endOf('week')],
            'Week': [moment(currentTime).startOf('week'), moment(currentTime).endOf('week')],
            'This Month': [moment(currentTime).startOf('month'), moment(currentTime).endOf('month')],
            'Month': [moment(currentTime).startOf('month'), moment(currentTime).endOf('month')],
            'Yesterday': [moment(currentTime).subtract(1, 'days'), moment(currentTime).subtract(1, 'days')],
            'Last 7 Days': [moment(currentTime).subtract(6, 'days'), moment(currentTime)],
            'Last 30 Days': [moment(currentTime).subtract(29, 'days'), moment(currentTime)],
            'Last Month': [moment(currentTime).subtract(1, 'month').startOf('month'), moment(currentTime).subtract(1, 'month').endOf('month')],
            'Quarter': [moment(currentTime).startOf('quarter'), moment(currentTime).endOf('quarter')]
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.prepareConfigForEnabledPresets();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initializeDateRangePicker();
    }
    /**
     * @param {?=} minDate
     * @param {?=} maxDate
     * @return {?}
     */
    initializeDateRangePicker(minDate, maxDate) {
        /** @type {?} */
        let start = this.startTime == 0 ? moment.utc().subtract(29, 'days') : moment.utc(this.startTime * 1000);
        /** @type {?} */
        let end = this.endTime == 0 ? moment.utc() : moment.utc(this.endTime * 1000);
        /** @type {?} */
        let that = this;
        /** @type {?} */
        let dateRangePickerConfig = {
            alwaysShowCalendars: that.alwaysShowCalendar,
            timePicker: that.timePicker,
            startDate: that.startTime,
            endDate: that.endTime,
            ranges: that.enabledPresetsRangeConfig
        };
        if (minDate) {
            dateRangePickerConfig['minDate'] = minDate;
        }
        if (maxDate) {
            dateRangePickerConfig['maxDate'] = maxDate;
        }
        if (this.locale) {
            dateRangePickerConfig['locale'] = this.locale;
        }
        $(this.dateRangePicker.nativeElement).daterangepicker(dateRangePickerConfig, this.cb.bind(this)).on('outsideClick.daterangepicker', (/**
         * @param {?} ev
         * @param {?} picker
         * @return {?}
         */
        function (ev, picker) {
            that.checkOutsideClickEvent = true;
            picker.startDate = picker.oldStartDate;
            picker.endDate = picker.oldEndDate;
        }));
    }
    /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    cb(start, end) {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (!this.checkOutsideClickEvent) {
                $(this.dateRangePickerInput.nativeElement).html(start.format(DateUtil.DATE_FORMAT_DD_MMM_YYYY) + ' - ' +
                    end.format(DateUtil.DATE_FORMAT_DD_MMM_YYYY));
                this.dateRangeChanged.emit({
                    startDate: DateUtil.getEpochTimeInSeconds(start['_d'].getTime() - (start['_d'].getTimezoneOffset() * 60000)),
                    endDate: DateUtil.getEpochTimeInSeconds(end['_d'].getTime() - (end['_d'].getTimezoneOffset() * 60000)),
                    dateRangeString: start.format(DateUtil.DATE_FORMAT_DD_MMM_YYYY) + ' - ' +
                        end.format(DateUtil.DATE_FORMAT_DD_MMM_YYYY)
                });
                this.selectedDuration = start.format(DateUtil.DATE_FORMAT_DD_MMM_YYYY) + ' - ' +
                    end.format(DateUtil.DATE_FORMAT_DD_MMM_YYYY);
            }
            else {
                this.checkOutsideClickEvent = !this.checkOutsideClickEvent;
            }
        }), 0);
    }
    /**
     * @return {?}
     */
    prepareConfigForEnabledPresets() {
        /** @type {?} */
        let config = {};
        for (let preset of this.enabledPresets) {
            config[preset] = this.presetsConfig[preset];
        }
        this.enabledPresetsRangeConfig = config;
    }
    /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    updateDates(start, end) {
        $(this.dateRangePicker.nativeElement).data('daterangepicker').setStartDate(start.format('MM-DD-YYYY'));
        $(this.dateRangePicker.nativeElement).data('daterangepicker').setEndDate(end.format('MM-DD-YYYY'));
        $(this.dateRangePickerInput.nativeElement).html(start.format(DateUtil.DATE_FORMAT_DD_MMM_YYYY) + ' - ' +
            end.format(DateUtil.DATE_FORMAT_DD_MMM_YYYY));
    }
}
DaterangepickerLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-daterange-picker',
                template: "<!--<tooltip-content #tooltipContent>{{tooltipMessage}}</tooltip-content>-->\n<span [ngClass]=\"{'disabled-custom': !enableDateRangeOption }\" tooltipPlacement=\"bottom\">\n    <input [attr.id]=\"id\" #dateRangePicker class=\"btn btn-default dateRangePicker\" value=\"{{selectedDuration}}\" />\n</span>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
DaterangepickerLibComponent.ctorParameters = () => [];
DaterangepickerLibComponent.propDecorators = {
    id: [{ type: Input, args: ['id',] }],
    enabledPresets: [{ type: Input, args: ['enabledPresets',] }],
    selectedDuration: [{ type: Input, args: ['selectedDuration',] }],
    timePicker: [{ type: Input, args: ['timePicker',] }],
    alwaysShowCalendar: [{ type: Input, args: ['alwaysShowCalendars',] }],
    locale: [{ type: Input, args: ['locale',] }],
    minDate: [{ type: Input, args: ['minDate',] }],
    maxDate: [{ type: Input, args: ['minDate',] }],
    startTime: [{ type: Input, args: ['startTime',] }],
    endTime: [{ type: Input, args: ['endTime',] }],
    enableDateRangeOption: [{ type: Input, args: ['enableDateRangeOption',] }],
    tooltipMessage: [{ type: Input, args: ['tooltipMessage',] }],
    dateRangePicker: [{ type: ViewChild, args: ['dateRangePicker', { static: false },] }],
    dateRangePickerInput: [{ type: ViewChild, args: ['dateRangePickerInput', { static: false },] }],
    dateRangeChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DaterangepickerLibComponent.prototype.id;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.enabledPresets;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.selectedDuration;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.timePicker;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.alwaysShowCalendar;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.locale;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.minDate;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.maxDate;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.startTime;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.endTime;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.enableDateRangeOption;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.tooltipMessage;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.dateRangePicker;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.dateRangePickerInput;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.dateRangeChanged;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.presetsConfig;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.enabledPresetsRangeConfig;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.timeRange;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.checkOutsideClickEvent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXJhbmdlcGlja2VyLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kYXRlcmFuZ2VwaWNrZXItbGliLyIsInNvdXJjZXMiOlsibGliL2RhdGVyYW5nZXBpY2tlci1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25ILE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDdEMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRTFDLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUN2QixPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFFNUIsT0FBTyxpQkFBaUIsQ0FBQztBQU96QixNQUFNLE9BQU8sMkJBQTJCO0lBeUJ0QztRQXBCcUIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUNuQix1QkFBa0IsR0FBWSxJQUFJLENBQUM7UUFJN0MsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN4QixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ04sMEJBQXFCLEdBQVksSUFBSSxDQUFDO1FBQzdDLG1CQUFjLEdBQVcsU0FBUyxDQUFDLFlBQVksQ0FBQztRQVN6RSxjQUFTLEdBQVcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0RCwyQkFBc0IsR0FBWSxLQUFLLENBQUM7UUFHdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7O1lBQ3ZDLFdBQVcsR0FBRyxNQUFNLEVBQUU7UUFDMUIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xELFdBQVcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJ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QUFTO29DQUNmLEtBQUssU0FBQyx1QkFBdUI7NkJBQzdCLEtBQUssU0FBQyxnQkFBZ0I7OEJBRXRCLFNBQVMsU0FBQyxpQkFBaUIsRUFBRSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUM7bUNBQzNDLFNBQVMsU0FBQyxzQkFBc0IsRUFBRSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUM7K0JBRWhELE1BQU07Ozs7SUFoQlAseUNBQXdCOztJQUN4QixxREFBdUQ7O0lBQ3ZELHVEQUFnRDs7SUFDaEQsaURBQWlEOztJQUNqRCx5REFBaUU7O0lBQ2pFLDZDQUE2Qjs7SUFDN0IsOENBQStCOztJQUMvQiw4Q0FBK0I7O0lBQy9CLGdEQUEwQzs7SUFDMUMsOENBQXNDOztJQUN0Qyw0REFBc0U7O0lBQ3RFLHFEQUF5RTs7SUFFekUsc0RBQTBFOztJQUMxRSwyREFBb0Y7O0lBRXBGLHVEQUE4Qzs7SUFFOUMsb0RBQW1COztJQUNuQixnRUFBK0I7O0lBQy9CLGdEQUFzRDs7SUFDdEQsNkRBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0NvbnN0YW50c30gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQge0RhdGVVdGlsfSBmcm9tIFwiLi91dGlsL2RhdGUudXRpbFwiO1xuXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmltcG9ydCAnZGF0ZXJhbmdlcGlja2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWRhdGVyYW5nZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZXJhbmdlcGlja2VyLWxpYi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXJhbmdlcGlja2VyTGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0e1xuXG4gIEBJbnB1dCgnaWQnKSBpZDogc3RyaW5nO1xuICBASW5wdXQoJ2VuYWJsZWRQcmVzZXRzJykgZW5hYmxlZFByZXNldHM6IEFycmF5PHN0cmluZz47XG4gIEBJbnB1dCgnc2VsZWN0ZWREdXJhdGlvbicpIHNlbGVjdGVkRHVyYXRpb246YW55O1xuICBASW5wdXQoJ3RpbWVQaWNrZXInKSB0aW1lUGlja2VyOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgnYWx3YXlzU2hvd0NhbGVuZGFycycpIGFsd2F5c1Nob3dDYWxlbmRhcjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgnbG9jYWxlJykgbG9jYWxlOiBhbnk7XG4gIEBJbnB1dCgnbWluRGF0ZScpIG1pbkRhdGU6IGFueTtcbiAgQElucHV0KCdtaW5EYXRlJykgbWF4RGF0ZTogYW55O1xuICBASW5wdXQoJ3N0YXJ0VGltZScpIHN0YXJ0VGltZTogbnVtYmVyID0gMDtcbiAgQElucHV0KCdlbmRUaW1lJykgZW5kVGltZTogbnVtYmVyID0gMDtcbiAgQElucHV0KCdlbmFibGVEYXRlUmFuZ2VPcHRpb24nKSBlbmFibGVEYXRlUmFuZ2VPcHRpb246IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoJ3Rvb2x0aXBNZXNzYWdlJykgdG9vbHRpcE1lc3NhZ2U6IHN0cmluZyA9IENvbnN0YW50cy5FTVBUWV9TVFJJTkc7XG5cbiAgQFZpZXdDaGlsZCgnZGF0ZVJhbmdlUGlja2VyJywge3N0YXRpYzpmYWxzZX0pIGRhdGVSYW5nZVBpY2tlcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZGF0ZVJhbmdlUGlja2VySW5wdXQnLCB7c3RhdGljOmZhbHNlfSkgZGF0ZVJhbmdlUGlja2VySW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgQE91dHB1dCgpIGRhdGVSYW5nZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIHByZXNldHNDb25maWc6IGFueTtcbiAgZW5hYmxlZFByZXNldHNSYW5nZUNvbmZpZzogYW55O1xuICB0aW1lUmFuZ2U6IHN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lUmFuZ2UnKTtcbiAgY2hlY2tPdXRzaWRlQ2xpY2tFdmVudDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGF0ZVJhbmdlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBsZXQgY3VycmVudFRpbWUgPSBtb21lbnQoKTtcbiAgICBpZiAodGhpcy50aW1lUmFuZ2UgJiYgcGFyc2VJbnQodGhpcy50aW1lUmFuZ2UpID4gMCkge1xuICAgICAgY3VycmVudFRpbWUgPSAobW9tZW50LnVuaXgoTnVtYmVyLnBhcnNlSW50KHRoaXMudGltZVJhbmdlKSkpO1xuICAgIH1cbiAgICB0aGlzLnByZXNldHNDb25maWcgPSB7XG4gICAgICAnVG9kYXknOiBbbW9tZW50KGN1cnJlbnRUaW1lKSwgbW9tZW50KGN1cnJlbnRUaW1lKV0sXG4gICAgICAnVGhpcyBXZWVrJzogW21vbWVudChjdXJyZW50VGltZSkuc3RhcnRPZignd2VlaycpLCBtb21lbnQoY3VycmVudFRpbWUpLmVuZE9mKCd3ZWVrJyldLFxuICAgICAgJ1dlZWsnOiBbbW9tZW50KGN1cnJlbnRUaW1lKS5zdGFydE9mKCd3ZWVrJyksIG1vbWVudChjdXJyZW50VGltZSkuZW5kT2YoJ3dlZWsnKV0sXG4gICAgICAnVGhpcyBNb250aCc6IFttb21lbnQoY3VycmVudFRpbWUpLnN0YXJ0T2YoJ21vbnRoJyksIG1vbWVudChjdXJyZW50VGltZSkuZW5kT2YoJ21vbnRoJyldLFxuICAgICAgJ01vbnRoJzogW21vbWVudChjdXJyZW50VGltZSkuc3RhcnRPZignbW9udGgnKSwgbW9tZW50KGN1cnJlbnRUaW1lKS5lbmRPZignbW9udGgnKV0sXG4gICAgICAnWWVzdGVyZGF5JzogW21vbWVudChjdXJyZW50VGltZSkuc3VidHJhY3QoMSwgJ2RheXMnKSwgbW9tZW50KGN1cnJlbnRUaW1lKS5zdWJ0cmFjdCgxLCAnZGF5cycpXSxcbiAgICAgICdMYXN0IDcgRGF5cyc6IFttb21lbnQoY3VycmVudFRpbWUpLnN1YnRyYWN0KDYsICdkYXlzJyksIG1vbWVudChjdXJyZW50VGltZSldLFxuICAgICAgJ0xhc3QgMzAgRGF5cyc6IFttb21lbnQoY3VycmVudFRpbWUpLnN1YnRyYWN0KDI5LCAnZGF5cycpLCBtb21lbnQoY3VycmVudFRpbWUpXSxcbiAgICAgICdMYXN0IE1vbnRoJzogW21vbWVudChjdXJyZW50VGltZSkuc3VidHJhY3QoMSwgJ21vbnRoJykuc3RhcnRPZignbW9udGgnKSwgbW9tZW50KGN1cnJlbnRUaW1lKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5lbmRPZignbW9udGgnKV0sXG4gICAgICAnUXVhcnRlcic6IFttb21lbnQoY3VycmVudFRpbWUpLnN0YXJ0T2YoJ3F1YXJ0ZXInKSwgbW9tZW50KGN1cnJlbnRUaW1lKS5lbmRPZigncXVhcnRlcicpXVxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnByZXBhcmVDb25maWdGb3JFbmFibGVkUHJlc2V0cygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZURhdGVSYW5nZVBpY2tlcigpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZURhdGVSYW5nZVBpY2tlcihtaW5EYXRlPzphbnksIG1heERhdGU/OmFueSl7XG4gICAgbGV0IHN0YXJ0ID0gdGhpcy5zdGFydFRpbWUgPT0gMCA/IG1vbWVudC51dGMoKS5zdWJ0cmFjdCgyOSwgJ2RheXMnKSA6IG1vbWVudC51dGModGhpcy5zdGFydFRpbWUgKiAxMDAwKTtcbiAgICBsZXQgZW5kID0gdGhpcy5lbmRUaW1lID09IDAgPyBtb21lbnQudXRjKCkgOiBtb21lbnQudXRjKHRoaXMuZW5kVGltZSAqIDEwMDApO1xuICAgIGxldCB0aGF0OiBhbnkgPSB0aGlzO1xuICAgIGxldCBkYXRlUmFuZ2VQaWNrZXJDb25maWcgPSB7XG4gICAgICBhbHdheXNTaG93Q2FsZW5kYXJzOiB0aGF0LmFsd2F5c1Nob3dDYWxlbmRhcixcbiAgICAgIHRpbWVQaWNrZXI6IHRoYXQudGltZVBpY2tlcixcbiAgICAgIHN0YXJ0RGF0ZTogdGhhdC5zdGFydFRpbWUsXG4gICAgICBlbmREYXRlOiB0aGF0LmVuZFRpbWUsXG4gICAgICByYW5nZXM6IHRoYXQuZW5hYmxlZFByZXNldHNSYW5nZUNvbmZpZ1xuICAgIH07XG4gICAgaWYobWluRGF0ZSl7XG4gICAgICBkYXRlUmFuZ2VQaWNrZXJDb25maWdbJ21pbkRhdGUnXSA9IG1pbkRhdGU7XG4gICAgfVxuICAgIGlmKG1heERhdGUpe1xuICAgICAgZGF0ZVJhbmdlUGlja2VyQ29uZmlnWydtYXhEYXRlJ10gPSBtYXhEYXRlO1xuICAgIH1cbiAgICBpZih0aGlzLmxvY2FsZSl7XG4gICAgICBkYXRlUmFuZ2VQaWNrZXJDb25maWdbJ2xvY2FsZSddID0gdGhpcy5sb2NhbGU7XG4gICAgfVxuICAgICQodGhpcy5kYXRlUmFuZ2VQaWNrZXIubmF0aXZlRWxlbWVudCkuZGF0ZXJhbmdlcGlja2VyKGRhdGVSYW5nZVBpY2tlckNvbmZpZywgdGhpcy5jYi5iaW5kKHRoaXMpKS5vbignb3V0c2lkZUNsaWNrLmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKGV2LCBwaWNrZXIpIHtcbiAgICAgIHRoYXQuY2hlY2tPdXRzaWRlQ2xpY2tFdmVudCA9IHRydWU7XG4gICAgICBwaWNrZXIuc3RhcnREYXRlID0gcGlja2VyLm9sZFN0YXJ0RGF0ZTtcbiAgICAgIHBpY2tlci5lbmREYXRlID0gcGlja2VyLm9sZEVuZERhdGU7XG4gICAgfSk7XG4gIH1cblxuICBjYihzdGFydCwgZW5kKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZighdGhpcy5jaGVja091dHNpZGVDbGlja0V2ZW50KSB7XG4gICAgICAgICQodGhpcy5kYXRlUmFuZ2VQaWNrZXJJbnB1dC5uYXRpdmVFbGVtZW50KS5odG1sKHN0YXJ0LmZvcm1hdChEYXRlVXRpbC5EQVRFX0ZPUk1BVF9ERF9NTU1fWVlZWSkgKyAnIC0gJyArXG4gICAgICAgICAgZW5kLmZvcm1hdChEYXRlVXRpbC5EQVRFX0ZPUk1BVF9ERF9NTU1fWVlZWSkpO1xuICAgICAgICB0aGlzLmRhdGVSYW5nZUNoYW5nZWQuZW1pdCh7XG4gICAgICAgICAgc3RhcnREYXRlOiBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMoc3RhcnRbJ19kJ10uZ2V0VGltZSgpIC0gKHN0YXJ0WydfZCddLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpLFxuICAgICAgICAgIGVuZERhdGU6IERhdGVVdGlsLmdldEVwb2NoVGltZUluU2Vjb25kcyhlbmRbJ19kJ10uZ2V0VGltZSgpIC0gKGVuZFsnX2QnXS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApKSxcbiAgICAgICAgICBkYXRlUmFuZ2VTdHJpbmc6IHN0YXJ0LmZvcm1hdChEYXRlVXRpbC5EQVRFX0ZPUk1BVF9ERF9NTU1fWVlZWSkgKyAnIC0gJyArXG4gICAgICAgICAgZW5kLmZvcm1hdChEYXRlVXRpbC5EQVRFX0ZPUk1BVF9ERF9NTU1fWVlZWSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREdXJhdGlvbiA9IHN0YXJ0LmZvcm1hdChEYXRlVXRpbC5EQVRFX0ZPUk1BVF9ERF9NTU1fWVlZWSkgKyAnIC0gJyArXG4gICAgICAgICAgZW5kLmZvcm1hdChEYXRlVXRpbC5EQVRFX0ZPUk1BVF9ERF9NTU1fWVlZWSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNoZWNrT3V0c2lkZUNsaWNrRXZlbnQgPSAhdGhpcy5jaGVja091dHNpZGVDbGlja0V2ZW50O1xuICAgICAgfVxuICAgIH0sMCk7XG4gIH1cblxuICBwcmVwYXJlQ29uZmlnRm9yRW5hYmxlZFByZXNldHMoKSB7XG4gICAgbGV0IGNvbmZpZzogYW55ID0ge307XG4gICAgZm9yIChsZXQgcHJlc2V0IG9mIHRoaXMuZW5hYmxlZFByZXNldHMpIHtcbiAgICAgIGNvbmZpZ1twcmVzZXRdID0gdGhpcy5wcmVzZXRzQ29uZmlnW3ByZXNldF07XG4gICAgfVxuICAgIHRoaXMuZW5hYmxlZFByZXNldHNSYW5nZUNvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIHVwZGF0ZURhdGVzKHN0YXJ0OmFueSwgZW5kOmFueSl7XG4gICAgJCh0aGlzLmRhdGVSYW5nZVBpY2tlci5uYXRpdmVFbGVtZW50KS5kYXRhKCdkYXRlcmFuZ2VwaWNrZXInKS5zZXRTdGFydERhdGUoc3RhcnQuZm9ybWF0KCdNTS1ERC1ZWVlZJykpO1xuICAgICQodGhpcy5kYXRlUmFuZ2VQaWNrZXIubmF0aXZlRWxlbWVudCkuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJykuc2V0RW5kRGF0ZShlbmQuZm9ybWF0KCdNTS1ERC1ZWVlZJykpO1xuICAgICQodGhpcy5kYXRlUmFuZ2VQaWNrZXJJbnB1dC5uYXRpdmVFbGVtZW50KS5odG1sKHN0YXJ0LmZvcm1hdChEYXRlVXRpbC5EQVRFX0ZPUk1BVF9ERF9NTU1fWVlZWSkgKyAnIC0gJyArXG4gICAgICBlbmQuZm9ybWF0KERhdGVVdGlsLkRBVEVfRk9STUFUX0REX01NTV9ZWVlZKSk7XG4gIH1cblxufVxuIl19