/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { Constants } from "./constants";
import { DateUtil } from "./util/date.util";
import * as moment_ from "moment";
/** @type {?} */
const moment = moment_;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXJhbmdlcGlja2VyLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kYXRlcmFuZ2VwaWNrZXItbGliLyIsInNvdXJjZXMiOlsibGliL2RhdGVyYW5nZXBpY2tlci1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDMUMsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7O01BRTVCLE1BQU0sR0FBRyxPQUFPO0FBU3RCLE1BQU0sT0FBTywyQkFBMkI7SUFrQnRDO1FBVm9CLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDeEIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUd0QyxjQUFTLEdBQVcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV0RCwyQkFBc0IsR0FBWSxLQUFLLENBQUM7UUFDUiwwQkFBcUIsR0FBWSxJQUFJLENBQUM7UUFDN0MsbUJBQWMsR0FBVyxTQUFTLENBQUMsWUFBWSxDQUFDO1FBR3ZFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDOztZQUN2QyxXQUFXLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRTtRQUM5QixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEQsV0FBVyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMvRDtRQUNELElBQUksQ0FBQyxhQUFhLEdBQUc7UUFDbkI7Ozs7Ozs7OzttR0FTMkY7U0FDNUYsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7Ozs7SUFFRCx5QkFBeUIsQ0FBQyxPQUFZLEVBQUUsT0FBWTs7WUFDOUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzs7WUFDbkcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7O1lBQ3hFLElBQUksR0FBUSxJQUFJOztZQUNoQixxQkFBcUIsR0FBRztZQUMxQixtQkFBbUIsRUFBRSxJQUFJO1lBQ3pCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxHQUFHO1lBQ1osTUFBTSxFQUFFLElBQUksQ0FBQyx5QkFBeUI7U0FDdkM7UUFDRCxJQUFHLE9BQU8sRUFBQztZQUNULHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztTQUM1QztRQUNELElBQUcsT0FBTyxFQUFDO1lBQ1QscUJBQXFCLENBQUMsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDO1NBQzVDO1FBQ0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUMsZUFBZSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLDhCQUE4Qjs7Ozs7UUFBRSxVQUFTLEVBQUUsRUFBRSxNQUFNO1lBQ3JKLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7WUFDbkMsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNyQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRztRQUNYLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUcsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUU7Z0JBQy9CLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsS0FBSztvQkFDcEcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO29CQUN6QixTQUFTLEVBQUUsUUFBUSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDO29CQUM1RyxPQUFPLEVBQUUsUUFBUSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDO29CQUN0RyxlQUFlLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsR0FBRyxLQUFLO3dCQUN2RSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQztpQkFDN0MsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLEtBQUs7b0JBQzVFLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLENBQUM7YUFDaEQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLHNCQUFzQixHQUFHLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDO2FBQzVEO1FBQ0gsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELDhCQUE4Qjs7WUFDeEIsTUFBTSxHQUFRLEVBQUU7UUFDcEIsS0FBSyxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3RDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxDQUFDLHlCQUF5QixHQUFHLE1BQU0sQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBUyxFQUFFLEdBQU87UUFDNUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUN2RyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ25HLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsS0FBSztZQUNwRyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBRUQsY0FBYyxDQUFDLE9BQVcsRUFBRSxPQUFXO1FBQ3JDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELHNCQUFzQjtRQUNwQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQXZIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsMFVBQStDOzthQUVoRDs7Ozs7aUJBR0UsS0FBSyxTQUFDLElBQUk7NkJBQ1YsS0FBSyxTQUFDLGdCQUFnQjsrQkFDdEIsS0FBSyxTQUFDLGtCQUFrQjs4QkFDeEIsU0FBUyxTQUFDLGlCQUFpQixFQUFFLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQzttQ0FDM0MsU0FBUyxTQUFDLHNCQUFzQixFQUFFLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQzsrQkFDaEQsTUFBTTt3QkFDTixLQUFLLFNBQUMsV0FBVztzQkFDakIsS0FBSyxTQUFDLFNBQVM7b0NBTWYsS0FBSyxTQUFDLHVCQUF1Qjs2QkFDN0IsS0FBSyxTQUFDLGdCQUFnQjs7OztJQWR2Qix5Q0FBd0I7O0lBQ3hCLHFEQUF1RDs7SUFDdkQsdURBQWdEOztJQUNoRCxzREFBMEU7O0lBQzFFLDJEQUFvRjs7SUFDcEYsdURBQThDOztJQUM5QyxnREFBMEM7O0lBQzFDLDhDQUFzQzs7SUFDdEMsb0RBQW1COztJQUNuQixnRUFBK0I7O0lBQy9CLGdEQUFzRDs7SUFDdEQsNkNBQWU7O0lBQ2YsNkRBQXdDOztJQUN4Qyw0REFBc0U7O0lBQ3RFLHFEQUF5RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtDb25zdGFudHN9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHtEYXRlVXRpbH0gZnJvbSBcIi4vdXRpbC9kYXRlLnV0aWxcIjtcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSBcIm1vbWVudFwiO1xuXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1kYXRlcmFuZ2UtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGVyYW5nZXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RhdGVyYW5nZXBpY2tlci1saWIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGVyYW5nZXBpY2tlckxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICBASW5wdXQoJ2lkJykgaWQ6IHN0cmluZztcbiAgQElucHV0KCdlbmFibGVkUHJlc2V0cycpIGVuYWJsZWRQcmVzZXRzOiBBcnJheTxzdHJpbmc+O1xuICBASW5wdXQoJ3NlbGVjdGVkRHVyYXRpb24nKSBzZWxlY3RlZER1cmF0aW9uOmFueTtcbiAgQFZpZXdDaGlsZCgnZGF0ZVJhbmdlUGlja2VyJywge3N0YXRpYzpmYWxzZX0pIGRhdGVSYW5nZVBpY2tlcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZGF0ZVJhbmdlUGlja2VySW5wdXQnLCB7c3RhdGljOmZhbHNlfSkgZGF0ZVJhbmdlUGlja2VySW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBPdXRwdXQoKSBkYXRlUmFuZ2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQElucHV0KCdzdGFydFRpbWUnKSBzdGFydFRpbWU6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgnZW5kVGltZScpIGVuZFRpbWU6IG51bWJlciA9IDA7XG4gIHByZXNldHNDb25maWc6IGFueTtcbiAgZW5hYmxlZFByZXNldHNSYW5nZUNvbmZpZzogYW55O1xuICB0aW1lUmFuZ2U6IHN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lUmFuZ2UnKTtcbiAgY3VzdG9tOiBzdHJpbmc7XG4gIGNoZWNrT3V0c2lkZUNsaWNrRXZlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCdlbmFibGVEYXRlUmFuZ2VPcHRpb24nKSBlbmFibGVEYXRlUmFuZ2VPcHRpb246IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoJ3Rvb2x0aXBNZXNzYWdlJykgdG9vbHRpcE1lc3NhZ2U6IHN0cmluZyA9IENvbnN0YW50cy5FTVBUWV9TVFJJTkc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kYXRlUmFuZ2VDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIGxldCBjdXJyZW50VGltZSA9IG1vbWVudC5ub3coKTtcbiAgICBpZiAodGhpcy50aW1lUmFuZ2UgJiYgcGFyc2VJbnQodGhpcy50aW1lUmFuZ2UpID4gMCkge1xuICAgICAgY3VycmVudFRpbWUgPSAobW9tZW50LnVuaXgoTnVtYmVyKHRoaXMudGltZVJhbmdlKSkpLnZhbHVlT2YoKTtcbiAgICB9XG4gICAgdGhpcy5wcmVzZXRzQ29uZmlnID0ge1xuICAgICAgLyonVG9kYXknOiBbbW9tZW50KGN1cnJlbnRUaW1lKSwgbW9tZW50KGN1cnJlbnRUaW1lKV0sXG4gICAgICAnVGhpcyBXZWVrJzogW21vbWVudChjdXJyZW50VGltZSkuc3RhcnRPZignd2VlaycpLCBtb21lbnQoY3VycmVudFRpbWUpLmVuZE9mKCd3ZWVrJyldLFxuICAgICAgJ1dlZWsnOiBbbW9tZW50KGN1cnJlbnRUaW1lKS5zdGFydE9mKCd3ZWVrJyksIG1vbWVudChjdXJyZW50VGltZSkuZW5kT2YoJ3dlZWsnKV0sXG4gICAgICAnVGhpcyBNb250aCc6IFttb21lbnQoY3VycmVudFRpbWUpLnN0YXJ0T2YoJ21vbnRoJyksIG1vbWVudChjdXJyZW50VGltZSkuZW5kT2YoJ21vbnRoJyldLFxuICAgICAgJ01vbnRoJzogW21vbWVudChjdXJyZW50VGltZSkuc3RhcnRPZignbW9udGgnKSwgbW9tZW50KGN1cnJlbnRUaW1lKS5lbmRPZignbW9udGgnKV0sXG4gICAgICAnWWVzdGVyZGF5JzogW21vbWVudChjdXJyZW50VGltZSkuc3VidHJhY3QoMSwgJ2RheXMnKSwgbW9tZW50KGN1cnJlbnRUaW1lKS5zdWJ0cmFjdCgxLCAnZGF5cycpXSxcbiAgICAgICdMYXN0IDcgRGF5cyc6IFttb21lbnQoY3VycmVudFRpbWUpLnN1YnRyYWN0KDYsICdkYXlzJyksIG1vbWVudChjdXJyZW50VGltZSldLFxuICAgICAgJ0xhc3QgMzAgRGF5cyc6IFttb21lbnQoY3VycmVudFRpbWUpLnN1YnRyYWN0KDI5LCAnZGF5cycpLCBtb21lbnQoY3VycmVudFRpbWUpXSxcbiAgICAgICdMYXN0IE1vbnRoJzogW21vbWVudChjdXJyZW50VGltZSkuc3VidHJhY3QoMSwgJ21vbnRoJykuc3RhcnRPZignbW9udGgnKSwgbW9tZW50KGN1cnJlbnRUaW1lKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5lbmRPZignbW9udGgnKV0sXG4gICAgICAnUXVhcnRlcic6IFttb21lbnQoY3VycmVudFRpbWUpLnN0YXJ0T2YoJ3F1YXJ0ZXInKSwgbW9tZW50KGN1cnJlbnRUaW1lKS5lbmRPZigncXVhcnRlcicpXSovXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJlcGFyZUNvbmZpZ0ZvckVuYWJsZWRQcmVzZXRzKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplRGF0ZVJhbmdlUGlja2VyKCk7XG4gIH1cblxuICBpbml0aWFsaXplRGF0ZVJhbmdlUGlja2VyKG1pbkRhdGU/OmFueSwgbWF4RGF0ZT86YW55KXtcbiAgICBsZXQgc3RhcnQgPSB0aGlzLnN0YXJ0VGltZSA9PSAwID8gbW9tZW50LnV0YygpLnN1YnRyYWN0KDI5LCAnZGF5cycpIDogbW9tZW50LnV0Yyh0aGlzLnN0YXJ0VGltZSAqIDEwMDApO1xuICAgIGxldCBlbmQgPSB0aGlzLmVuZFRpbWUgPT0gMCA/IG1vbWVudC51dGMoKSA6IG1vbWVudC51dGModGhpcy5lbmRUaW1lICogMTAwMCk7XG4gICAgbGV0IHRoYXQ6IGFueSA9IHRoaXM7XG4gICAgbGV0IGRhdGVSYW5nZVBpY2tlckNvbmZpZyA9IHtcbiAgICAgIGFsd2F5c1Nob3dDYWxlbmRhcnM6IHRydWUsXG4gICAgICBzdGFydERhdGU6IHN0YXJ0LFxuICAgICAgZW5kRGF0ZTogZW5kLFxuICAgICAgcmFuZ2VzOiB0aGF0LmVuYWJsZWRQcmVzZXRzUmFuZ2VDb25maWdcbiAgICB9O1xuICAgIGlmKG1pbkRhdGUpe1xuICAgICAgZGF0ZVJhbmdlUGlja2VyQ29uZmlnWydtaW5EYXRlJ10gPSBtaW5EYXRlO1xuICAgIH1cbiAgICBpZihtYXhEYXRlKXtcbiAgICAgIGRhdGVSYW5nZVBpY2tlckNvbmZpZ1snbWF4RGF0ZSddID0gbWF4RGF0ZTtcbiAgICB9XG4gICAgJCh0aGlzLmRhdGVSYW5nZVBpY2tlci5uYXRpdmVFbGVtZW50KS5kYXRlcmFuZ2VwaWNrZXIoZGF0ZVJhbmdlUGlja2VyQ29uZmlnLCB0aGlzLmNiLmJpbmQodGhpcykpLm9uKCdvdXRzaWRlQ2xpY2suZGF0ZXJhbmdlcGlja2VyJywgZnVuY3Rpb24oZXYsIHBpY2tlcikge1xuICAgICAgdGhhdC5jaGVja091dHNpZGVDbGlja0V2ZW50ID0gdHJ1ZTtcbiAgICAgIHBpY2tlci5zdGFydERhdGUgPSBwaWNrZXIub2xkU3RhcnREYXRlO1xuICAgICAgcGlja2VyLmVuZERhdGUgPSBwaWNrZXIub2xkRW5kRGF0ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGNiKHN0YXJ0LCBlbmQpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmKCF0aGlzLmNoZWNrT3V0c2lkZUNsaWNrRXZlbnQpIHtcbiAgICAgICAgJCh0aGlzLmRhdGVSYW5nZVBpY2tlcklucHV0Lm5hdGl2ZUVsZW1lbnQpLmh0bWwoc3RhcnQuZm9ybWF0KERhdGVVdGlsLkRBVEVfRk9STUFUX0REX01NTV9ZWVlZKSArICcgLSAnICtcbiAgICAgICAgICBlbmQuZm9ybWF0KERhdGVVdGlsLkRBVEVfRk9STUFUX0REX01NTV9ZWVlZKSk7XG4gICAgICAgIHRoaXMuZGF0ZVJhbmdlQ2hhbmdlZC5lbWl0KHtcbiAgICAgICAgICBzdGFydERhdGU6IERhdGVVdGlsLmdldEVwb2NoVGltZUluU2Vjb25kcyhzdGFydFsnX2QnXS5nZXRUaW1lKCkgLSAoc3RhcnRbJ19kJ10uZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKSksXG4gICAgICAgICAgZW5kRGF0ZTogRGF0ZVV0aWwuZ2V0RXBvY2hUaW1lSW5TZWNvbmRzKGVuZFsnX2QnXS5nZXRUaW1lKCkgLSAoZW5kWydfZCddLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpLFxuICAgICAgICAgIGRhdGVSYW5nZVN0cmluZzogc3RhcnQuZm9ybWF0KERhdGVVdGlsLkRBVEVfRk9STUFUX0REX01NTV9ZWVlZKSArICcgLSAnICtcbiAgICAgICAgICBlbmQuZm9ybWF0KERhdGVVdGlsLkRBVEVfRk9STUFUX0REX01NTV9ZWVlZKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZER1cmF0aW9uID0gc3RhcnQuZm9ybWF0KERhdGVVdGlsLkRBVEVfRk9STUFUX0REX01NTV9ZWVlZKSArICcgLSAnICtcbiAgICAgICAgICBlbmQuZm9ybWF0KERhdGVVdGlsLkRBVEVfRk9STUFUX0REX01NTV9ZWVlZKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2hlY2tPdXRzaWRlQ2xpY2tFdmVudCA9ICF0aGlzLmNoZWNrT3V0c2lkZUNsaWNrRXZlbnQ7XG4gICAgICB9XG4gICAgfSwwKTtcbiAgfVxuXG4gIHByZXBhcmVDb25maWdGb3JFbmFibGVkUHJlc2V0cygpIHtcbiAgICBsZXQgY29uZmlnOiBhbnkgPSB7fTtcbiAgICBmb3IgKGxldCBwcmVzZXQgb2YgdGhpcy5lbmFibGVkUHJlc2V0cykge1xuICAgICAgY29uZmlnW3ByZXNldF0gPSB0aGlzLnByZXNldHNDb25maWdbcHJlc2V0XTtcbiAgICB9XG4gICAgdGhpcy5lbmFibGVkUHJlc2V0c1JhbmdlQ29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAkKHRoaXMuZGF0ZVJhbmdlUGlja2VySW5wdXQubmF0aXZlRWxlbWVudCkuaHRtbCgnQ3VzdG9tJyk7XG4gICAgdGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcbiAgfVxuXG4gIHVwZGF0ZURhdGVzKHN0YXJ0OmFueSwgZW5kOmFueSl7XG4gICAgJCh0aGlzLmRhdGVSYW5nZVBpY2tlci5uYXRpdmVFbGVtZW50KS5kYXRhKCdkYXRlcmFuZ2VwaWNrZXInKS5zZXRTdGFydERhdGUoc3RhcnQuZm9ybWF0KCdNTS1ERC1ZWVlZJykpO1xuICAgICQodGhpcy5kYXRlUmFuZ2VQaWNrZXIubmF0aXZlRWxlbWVudCkuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJykuc2V0RW5kRGF0ZShlbmQuZm9ybWF0KCdNTS1ERC1ZWVlZJykpO1xuICAgICQodGhpcy5kYXRlUmFuZ2VQaWNrZXJJbnB1dC5uYXRpdmVFbGVtZW50KS5odG1sKHN0YXJ0LmZvcm1hdChEYXRlVXRpbC5EQVRFX0ZPUk1BVF9ERF9NTU1fWVlZWSkgKyAnIC0gJyArXG4gICAgICBlbmQuZm9ybWF0KERhdGVVdGlsLkRBVEVfRk9STUFUX0REX01NTV9ZWVlZKSk7XG4gIH1cblxuICBzZXRNaW5NYXhEYXRlcyhtaW5EYXRlOmFueSwgbWF4RGF0ZTphbnkpe1xuICAgIHRoaXMuaW5pdGlhbGl6ZURhdGVSYW5nZVBpY2tlcihtaW5EYXRlLCBtYXhEYXRlKTtcbiAgfVxuXG4gIGRpc2FibGVEYXRlUmFuZ2VQaWNrZXIoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn1cbiJdfQ==