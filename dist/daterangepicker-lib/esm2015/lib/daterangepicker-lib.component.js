/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { Constants } from "./constants";
import { DateUtil } from "./util/date.util";
import * as moment from 'moment';
export class DaterangepickerLibComponent {
    constructor() {
        this.startTime = 0;
        this.endTime = 0;
        this.timeRange = localStorage.getItem('timeRange');
        this.checkOutsideClickEvent = false;
        this.enableDateRangeOption = true;
        this.tooltipMessage = Constants.EMPTY_STRING;
        this.dateRangeChanged = new EventEmitter();
        /** @type {?} */
        let currentTime = moment.now();
        if (this.timeRange && parseInt(this.timeRange) > 0) {
            currentTime = (moment.unix(Number(this.timeRange))).valueOf();
        }
        this.presetsConfig = {
        /*'Today': [moment(currentTime), moment(currentTime)],
        'This Week': [moment(currentTime).startOf('week'), moment(currentTime).endOf('week')],
        'Week': [moment(currentTime).startOf('week'), moment(currentTime).endOf('week')],
        'This Month': [moment(currentTime).startOf('month'), moment(currentTime).endOf('month')],
        'Month': [moment(currentTime).startOf('month'), moment(currentTime).endOf('month')],
        'Yesterday': [moment(currentTime).subtract(1, 'days'), moment(currentTime).subtract(1, 'days')],
        'Last 7 Days': [moment(currentTime).subtract(6, 'days'), moment(currentTime)],
        'Last 30 Days': [moment(currentTime).subtract(29, 'days'), moment(currentTime)],
        'Last Month': [moment(currentTime).subtract(1, 'month').startOf('month'), moment(currentTime).subtract(1, 'month').endOf('month')],
        'Quarter': [moment(currentTime).startOf('quarter'), moment(currentTime).endOf('quarter')]*/
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
            alwaysShowCalendars: true,
            startDate: start,
            endDate: end,
            ranges: that.enabledPresetsRangeConfig
        };
        if (minDate) {
            dateRangePickerConfig['minDate'] = minDate;
        }
        if (maxDate) {
            dateRangePickerConfig['maxDate'] = maxDate;
        }
        ((/** @type {?} */ ($(this.dateRangePicker.nativeElement)))).daterangepicker(dateRangePickerConfig, this.cb.bind(this)).on('outsideClick.daterangepicker', (/**
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
     * @return {?}
     */
    init() {
        $(this.dateRangePickerInput.nativeElement).html('Custom');
        this.ngAfterViewInit();
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
    /**
     * @param {?} minDate
     * @param {?} maxDate
     * @return {?}
     */
    setMinMaxDates(minDate, maxDate) {
        this.initializeDateRangePicker(minDate, maxDate);
    }
    /**
     * @return {?}
     */
    disableDateRangePicker() {
        return false;
    }
}
DaterangepickerLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-daterange-picker',
                template: "<!--<tooltip-content #tooltipContent>{{tooltipMessage}}</tooltip-content>-->\n<span\n      tooltipPlacement=\"bottom\">\n    <div [attr.id]=\"id\" #dateRangePicker class=\"btn btn-default dateRangePicker\">\n      <span #dateRangePickerInput>{{selectedDuration}}</span> <b class=\"caret\"></b>\n    </div>\n  </span>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
DaterangepickerLibComponent.ctorParameters = () => [];
DaterangepickerLibComponent.propDecorators = {
    id: [{ type: Input, args: ['id',] }],
    enabledPresets: [{ type: Input, args: ['enabledPresets',] }],
    selectedDuration: [{ type: Input, args: ['selectedDuration',] }],
    dateRangePicker: [{ type: ViewChild, args: ['dateRangePicker', { static: false },] }],
    dateRangePickerInput: [{ type: ViewChild, args: ['dateRangePickerInput', { static: false },] }],
    dateRangeChanged: [{ type: Output }],
    startTime: [{ type: Input, args: ['startTime',] }],
    endTime: [{ type: Input, args: ['endTime',] }],
    enableDateRangeOption: [{ type: Input, args: ['enableDateRangeOption',] }],
    tooltipMessage: [{ type: Input, args: ['tooltipMessage',] }]
};
if (false) {
    /** @type {?} */
    DaterangepickerLibComponent.prototype.id;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.enabledPresets;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.selectedDuration;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.dateRangePicker;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.dateRangePickerInput;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.dateRangeChanged;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.startTime;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.endTime;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.presetsConfig;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.enabledPresetsRangeConfig;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.timeRange;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.custom;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.checkOutsideClickEvent;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.enableDateRangeOption;
    /** @type {?} */
    DaterangepickerLibComponent.prototype.tooltipMessage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXJhbmdlcGlja2VyLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kYXRlcmFuZ2VwaWNrZXItbGliLyIsInNvdXJjZXMiOlsibGliL2RhdGVyYW5nZXBpY2tlci1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFFMUMsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFRakMsTUFBTSxPQUFPLDJCQUEyQjtJQWtCdEM7UUFWb0IsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN4QixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBR3RDLGNBQVMsR0FBVyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXRELDJCQUFzQixHQUFZLEtBQUssQ0FBQztRQUNSLDBCQUFxQixHQUFZLElBQUksQ0FBQztRQUM3QyxtQkFBYyxHQUFXLFNBQVMsQ0FBQyxZQUFZLENBQUM7UUFHdkUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7O1lBQ3ZDLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFO1FBQzlCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsRCxXQUFXLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQy9EO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FB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O0lBQ3hDLDREQUFzRTs7SUFDdEUscURBQXlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0NvbnN0YW50c30gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQge0RhdGVVdGlsfSBmcm9tIFwiLi91dGlsL2RhdGUudXRpbFwiO1xuXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZGF0ZXJhbmdlLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlcmFuZ2VwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRlcmFuZ2VwaWNrZXItbGliLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcmFuZ2VwaWNrZXJMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgQElucHV0KCdpZCcpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgnZW5hYmxlZFByZXNldHMnKSBlbmFibGVkUHJlc2V0czogQXJyYXk8c3RyaW5nPjtcbiAgQElucHV0KCdzZWxlY3RlZER1cmF0aW9uJykgc2VsZWN0ZWREdXJhdGlvbjphbnk7XG4gIEBWaWV3Q2hpbGQoJ2RhdGVSYW5nZVBpY2tlcicsIHtzdGF0aWM6ZmFsc2V9KSBkYXRlUmFuZ2VQaWNrZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2RhdGVSYW5nZVBpY2tlcklucHV0Jywge3N0YXRpYzpmYWxzZX0pIGRhdGVSYW5nZVBpY2tlcklucHV0OiBFbGVtZW50UmVmO1xuICBAT3V0cHV0KCkgZGF0ZVJhbmdlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT47XG4gIEBJbnB1dCgnc3RhcnRUaW1lJykgc3RhcnRUaW1lOiBudW1iZXIgPSAwO1xuICBASW5wdXQoJ2VuZFRpbWUnKSBlbmRUaW1lOiBudW1iZXIgPSAwO1xuICBwcmVzZXRzQ29uZmlnOiBhbnk7XG4gIGVuYWJsZWRQcmVzZXRzUmFuZ2VDb25maWc6IGFueTtcbiAgdGltZVJhbmdlOiBzdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGltZVJhbmdlJyk7XG4gIGN1c3RvbTogc3RyaW5nO1xuICBjaGVja091dHNpZGVDbGlja0V2ZW50OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgnZW5hYmxlRGF0ZVJhbmdlT3B0aW9uJykgZW5hYmxlRGF0ZVJhbmdlT3B0aW9uOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCd0b29sdGlwTWVzc2FnZScpIHRvb2x0aXBNZXNzYWdlOiBzdHJpbmcgPSBDb25zdGFudHMuRU1QVFlfU1RSSU5HO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGF0ZVJhbmdlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBsZXQgY3VycmVudFRpbWUgPSBtb21lbnQubm93KCk7XG4gICAgaWYgKHRoaXMudGltZVJhbmdlICYmIHBhcnNlSW50KHRoaXMudGltZVJhbmdlKSA+IDApIHtcbiAgICAgIGN1cnJlbnRUaW1lID0gKG1vbWVudC51bml4KE51bWJlcih0aGlzLnRpbWVSYW5nZSkpKS52YWx1ZU9mKCk7XG4gICAgfVxuICAgIHRoaXMucHJlc2V0c0NvbmZpZyA9IHtcbiAgICAgIC8qJ1RvZGF5JzogW21vbWVudChjdXJyZW50VGltZSksIG1vbWVudChjdXJyZW50VGltZSldLFxuICAgICAgJ1RoaXMgV2Vlayc6IFttb21lbnQoY3VycmVudFRpbWUpLnN0YXJ0T2YoJ3dlZWsnKSwgbW9tZW50KGN1cnJlbnRUaW1lKS5lbmRPZignd2VlaycpXSxcbiAgICAgICdXZWVrJzogW21vbWVudChjdXJyZW50VGltZSkuc3RhcnRPZignd2VlaycpLCBtb21lbnQoY3VycmVudFRpbWUpLmVuZE9mKCd3ZWVrJyldLFxuICAgICAgJ1RoaXMgTW9udGgnOiBbbW9tZW50KGN1cnJlbnRUaW1lKS5zdGFydE9mKCdtb250aCcpLCBtb21lbnQoY3VycmVudFRpbWUpLmVuZE9mKCdtb250aCcpXSxcbiAgICAgICdNb250aCc6IFttb21lbnQoY3VycmVudFRpbWUpLnN0YXJ0T2YoJ21vbnRoJyksIG1vbWVudChjdXJyZW50VGltZSkuZW5kT2YoJ21vbnRoJyldLFxuICAgICAgJ1llc3RlcmRheSc6IFttb21lbnQoY3VycmVudFRpbWUpLnN1YnRyYWN0KDEsICdkYXlzJyksIG1vbWVudChjdXJyZW50VGltZSkuc3VidHJhY3QoMSwgJ2RheXMnKV0sXG4gICAgICAnTGFzdCA3IERheXMnOiBbbW9tZW50KGN1cnJlbnRUaW1lKS5zdWJ0cmFjdCg2LCAnZGF5cycpLCBtb21lbnQoY3VycmVudFRpbWUpXSxcbiAgICAgICdMYXN0IDMwIERheXMnOiBbbW9tZW50KGN1cnJlbnRUaW1lKS5zdWJ0cmFjdCgyOSwgJ2RheXMnKSwgbW9tZW50KGN1cnJlbnRUaW1lKV0sXG4gICAgICAnTGFzdCBNb250aCc6IFttb21lbnQoY3VycmVudFRpbWUpLnN1YnRyYWN0KDEsICdtb250aCcpLnN0YXJ0T2YoJ21vbnRoJyksIG1vbWVudChjdXJyZW50VGltZSkuc3VidHJhY3QoMSwgJ21vbnRoJykuZW5kT2YoJ21vbnRoJyldLFxuICAgICAgJ1F1YXJ0ZXInOiBbbW9tZW50KGN1cnJlbnRUaW1lKS5zdGFydE9mKCdxdWFydGVyJyksIG1vbWVudChjdXJyZW50VGltZSkuZW5kT2YoJ3F1YXJ0ZXInKV0qL1xuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnByZXBhcmVDb25maWdGb3JFbmFibGVkUHJlc2V0cygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZURhdGVSYW5nZVBpY2tlcigpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZURhdGVSYW5nZVBpY2tlcihtaW5EYXRlPzphbnksIG1heERhdGU/OmFueSl7XG4gICAgbGV0IHN0YXJ0ID0gdGhpcy5zdGFydFRpbWUgPT0gMCA/IG1vbWVudC51dGMoKS5zdWJ0cmFjdCgyOSwgJ2RheXMnKSA6IG1vbWVudC51dGModGhpcy5zdGFydFRpbWUgKiAxMDAwKTtcbiAgICBsZXQgZW5kID0gdGhpcy5lbmRUaW1lID09IDAgPyBtb21lbnQudXRjKCkgOiBtb21lbnQudXRjKHRoaXMuZW5kVGltZSAqIDEwMDApO1xuICAgIGxldCB0aGF0OiBhbnkgPSB0aGlzO1xuICAgIGxldCBkYXRlUmFuZ2VQaWNrZXJDb25maWcgPSB7XG4gICAgICBhbHdheXNTaG93Q2FsZW5kYXJzOiB0cnVlLFxuICAgICAgc3RhcnREYXRlOiBzdGFydCxcbiAgICAgIGVuZERhdGU6IGVuZCxcbiAgICAgIHJhbmdlczogdGhhdC5lbmFibGVkUHJlc2V0c1JhbmdlQ29uZmlnXG4gICAgfTtcbiAgICBpZihtaW5EYXRlKXtcbiAgICAgIGRhdGVSYW5nZVBpY2tlckNvbmZpZ1snbWluRGF0ZSddID0gbWluRGF0ZTtcbiAgICB9XG4gICAgaWYobWF4RGF0ZSl7XG4gICAgICBkYXRlUmFuZ2VQaWNrZXJDb25maWdbJ21heERhdGUnXSA9IG1heERhdGU7XG4gICAgfVxuICAgICg8YW55PiQodGhpcy5kYXRlUmFuZ2VQaWNrZXIubmF0aXZlRWxlbWVudCkpLmRhdGVyYW5nZXBpY2tlcihkYXRlUmFuZ2VQaWNrZXJDb25maWcsIHRoaXMuY2IuYmluZCh0aGlzKSkub24oJ291dHNpZGVDbGljay5kYXRlcmFuZ2VwaWNrZXInLCBmdW5jdGlvbihldiwgcGlja2VyKSB7XG4gICAgICB0aGF0LmNoZWNrT3V0c2lkZUNsaWNrRXZlbnQgPSB0cnVlO1xuICAgICAgcGlja2VyLnN0YXJ0RGF0ZSA9IHBpY2tlci5vbGRTdGFydERhdGU7XG4gICAgICBwaWNrZXIuZW5kRGF0ZSA9IHBpY2tlci5vbGRFbmREYXRlO1xuICAgIH0pO1xuICB9XG5cbiAgY2Ioc3RhcnQsIGVuZCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYoIXRoaXMuY2hlY2tPdXRzaWRlQ2xpY2tFdmVudCkge1xuICAgICAgICAkKHRoaXMuZGF0ZVJhbmdlUGlja2VySW5wdXQubmF0aXZlRWxlbWVudCkuaHRtbChzdGFydC5mb3JtYXQoRGF0ZVV0aWwuREFURV9GT1JNQVRfRERfTU1NX1lZWVkpICsgJyAtICcgK1xuICAgICAgICAgIGVuZC5mb3JtYXQoRGF0ZVV0aWwuREFURV9GT1JNQVRfRERfTU1NX1lZWVkpKTtcbiAgICAgICAgdGhpcy5kYXRlUmFuZ2VDaGFuZ2VkLmVtaXQoe1xuICAgICAgICAgIHN0YXJ0RGF0ZTogRGF0ZVV0aWwuZ2V0RXBvY2hUaW1lSW5TZWNvbmRzKHN0YXJ0WydfZCddLmdldFRpbWUoKSAtIChzdGFydFsnX2QnXS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApKSxcbiAgICAgICAgICBlbmREYXRlOiBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMoZW5kWydfZCddLmdldFRpbWUoKSAtIChlbmRbJ19kJ10uZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKSksXG4gICAgICAgICAgZGF0ZVJhbmdlU3RyaW5nOiBzdGFydC5mb3JtYXQoRGF0ZVV0aWwuREFURV9GT1JNQVRfRERfTU1NX1lZWVkpICsgJyAtICcgK1xuICAgICAgICAgIGVuZC5mb3JtYXQoRGF0ZVV0aWwuREFURV9GT1JNQVRfRERfTU1NX1lZWVkpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNlbGVjdGVkRHVyYXRpb24gPSBzdGFydC5mb3JtYXQoRGF0ZVV0aWwuREFURV9GT1JNQVRfRERfTU1NX1lZWVkpICsgJyAtICcgK1xuICAgICAgICAgIGVuZC5mb3JtYXQoRGF0ZVV0aWwuREFURV9GT1JNQVRfRERfTU1NX1lZWVkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jaGVja091dHNpZGVDbGlja0V2ZW50ID0gIXRoaXMuY2hlY2tPdXRzaWRlQ2xpY2tFdmVudDtcbiAgICAgIH1cbiAgICB9LDApO1xuICB9XG5cbiAgcHJlcGFyZUNvbmZpZ0ZvckVuYWJsZWRQcmVzZXRzKCkge1xuICAgIGxldCBjb25maWc6IGFueSA9IHt9O1xuICAgIGZvciAobGV0IHByZXNldCBvZiB0aGlzLmVuYWJsZWRQcmVzZXRzKSB7XG4gICAgICBjb25maWdbcHJlc2V0XSA9IHRoaXMucHJlc2V0c0NvbmZpZ1twcmVzZXRdO1xuICAgIH1cbiAgICB0aGlzLmVuYWJsZWRQcmVzZXRzUmFuZ2VDb25maWcgPSBjb25maWc7XG4gIH1cblxuICBpbml0KCkge1xuICAgICQodGhpcy5kYXRlUmFuZ2VQaWNrZXJJbnB1dC5uYXRpdmVFbGVtZW50KS5odG1sKCdDdXN0b20nKTtcbiAgICB0aGlzLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuICB9XG5cbiAgdXBkYXRlRGF0ZXMoc3RhcnQ6YW55LCBlbmQ6YW55KXtcbiAgICAkKHRoaXMuZGF0ZVJhbmdlUGlja2VyLm5hdGl2ZUVsZW1lbnQpLmRhdGEoJ2RhdGVyYW5nZXBpY2tlcicpLnNldFN0YXJ0RGF0ZShzdGFydC5mb3JtYXQoJ01NLURELVlZWVknKSk7XG4gICAgJCh0aGlzLmRhdGVSYW5nZVBpY2tlci5uYXRpdmVFbGVtZW50KS5kYXRhKCdkYXRlcmFuZ2VwaWNrZXInKS5zZXRFbmREYXRlKGVuZC5mb3JtYXQoJ01NLURELVlZWVknKSk7XG4gICAgJCh0aGlzLmRhdGVSYW5nZVBpY2tlcklucHV0Lm5hdGl2ZUVsZW1lbnQpLmh0bWwoc3RhcnQuZm9ybWF0KERhdGVVdGlsLkRBVEVfRk9STUFUX0REX01NTV9ZWVlZKSArICcgLSAnICtcbiAgICAgIGVuZC5mb3JtYXQoRGF0ZVV0aWwuREFURV9GT1JNQVRfRERfTU1NX1lZWVkpKTtcbiAgfVxuXG4gIHNldE1pbk1heERhdGVzKG1pbkRhdGU6YW55LCBtYXhEYXRlOmFueSl7XG4gICAgdGhpcy5pbml0aWFsaXplRGF0ZVJhbmdlUGlja2VyKG1pbkRhdGUsIG1heERhdGUpO1xuICB9XG5cbiAgZGlzYWJsZURhdGVSYW5nZVBpY2tlcigpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufVxuIl19