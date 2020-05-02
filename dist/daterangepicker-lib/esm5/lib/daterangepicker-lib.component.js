/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { Constants } from "./constants";
import { DateUtil } from "./util/date.util";
import * as moment from 'moment';
var DaterangepickerLibComponent = /** @class */ (function () {
    function DaterangepickerLibComponent() {
        this.startTime = 0;
        this.endTime = 0;
        this.timeRange = localStorage.getItem('timeRange');
        this.checkOutsideClickEvent = false;
        this.enableDateRangeOption = true;
        this.tooltipMessage = Constants.EMPTY_STRING;
        this.dateRangeChanged = new EventEmitter();
        /** @type {?} */
        var currentTime = moment.now();
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
    DaterangepickerLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.prepareConfigForEnabledPresets();
    };
    /**
     * @return {?}
     */
    DaterangepickerLibComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.initializeDateRangePicker();
    };
    /**
     * @param {?=} minDate
     * @param {?=} maxDate
     * @return {?}
     */
    DaterangepickerLibComponent.prototype.initializeDateRangePicker = /**
     * @param {?=} minDate
     * @param {?=} maxDate
     * @return {?}
     */
    function (minDate, maxDate) {
        /** @type {?} */
        var start = this.startTime == 0 ? moment.utc().subtract(29, 'days') : moment.utc(this.startTime * 1000);
        /** @type {?} */
        var end = this.endTime == 0 ? moment.utc() : moment.utc(this.endTime * 1000);
        /** @type {?} */
        var that = this;
        /** @type {?} */
        var dateRangePickerConfig = {
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
    };
    /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    DaterangepickerLibComponent.prototype.cb = /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function (start, end) {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (!_this.checkOutsideClickEvent) {
                $(_this.dateRangePickerInput.nativeElement).html(start.format(DateUtil.DATE_FORMAT_DD_MMM_YYYY) + ' - ' +
                    end.format(DateUtil.DATE_FORMAT_DD_MMM_YYYY));
                _this.dateRangeChanged.emit({
                    startDate: DateUtil.getEpochTimeInSeconds(start['_d'].getTime() - (start['_d'].getTimezoneOffset() * 60000)),
                    endDate: DateUtil.getEpochTimeInSeconds(end['_d'].getTime() - (end['_d'].getTimezoneOffset() * 60000)),
                    dateRangeString: start.format(DateUtil.DATE_FORMAT_DD_MMM_YYYY) + ' - ' +
                        end.format(DateUtil.DATE_FORMAT_DD_MMM_YYYY)
                });
                _this.selectedDuration = start.format(DateUtil.DATE_FORMAT_DD_MMM_YYYY) + ' - ' +
                    end.format(DateUtil.DATE_FORMAT_DD_MMM_YYYY);
            }
            else {
                _this.checkOutsideClickEvent = !_this.checkOutsideClickEvent;
            }
        }), 0);
    };
    /**
     * @return {?}
     */
    DaterangepickerLibComponent.prototype.prepareConfigForEnabledPresets = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var config = {};
        try {
            for (var _b = tslib_1.__values(this.enabledPresets), _c = _b.next(); !_c.done; _c = _b.next()) {
                var preset = _c.value;
                config[preset] = this.presetsConfig[preset];
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.enabledPresetsRangeConfig = config;
    };
    /**
     * @return {?}
     */
    DaterangepickerLibComponent.prototype.init = /**
     * @return {?}
     */
    function () {
        $(this.dateRangePickerInput.nativeElement).html('Custom');
        this.ngAfterViewInit();
    };
    /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    DaterangepickerLibComponent.prototype.updateDates = /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function (start, end) {
        $(this.dateRangePicker.nativeElement).data('daterangepicker').setStartDate(start.format('MM-DD-YYYY'));
        $(this.dateRangePicker.nativeElement).data('daterangepicker').setEndDate(end.format('MM-DD-YYYY'));
        $(this.dateRangePickerInput.nativeElement).html(start.format(DateUtil.DATE_FORMAT_DD_MMM_YYYY) + ' - ' +
            end.format(DateUtil.DATE_FORMAT_DD_MMM_YYYY));
    };
    /**
     * @param {?} minDate
     * @param {?} maxDate
     * @return {?}
     */
    DaterangepickerLibComponent.prototype.setMinMaxDates = /**
     * @param {?} minDate
     * @param {?} maxDate
     * @return {?}
     */
    function (minDate, maxDate) {
        this.initializeDateRangePicker(minDate, maxDate);
    };
    /**
     * @return {?}
     */
    DaterangepickerLibComponent.prototype.disableDateRangePicker = /**
     * @return {?}
     */
    function () {
        return false;
    };
    DaterangepickerLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-daterange-picker',
                    template: "<!--<tooltip-content #tooltipContent>{{tooltipMessage}}</tooltip-content>-->\n<span\n      tooltipPlacement=\"bottom\">\n    <div [attr.id]=\"id\" #dateRangePicker class=\"btn btn-default dateRangePicker\">\n      <span #dateRangePickerInput>{{selectedDuration}}</span> <b class=\"caret\"></b>\n    </div>\n  </span>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DaterangepickerLibComponent.ctorParameters = function () { return []; };
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
    return DaterangepickerLibComponent;
}());
export { DaterangepickerLibComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXJhbmdlcGlja2VyLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kYXRlcmFuZ2VwaWNrZXItbGliLyIsInNvdXJjZXMiOlsibGliL2RhdGVyYW5nZXBpY2tlci1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDdEMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRTFDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBR2pDO0lBdUJFO1FBVm9CLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDeEIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUd0QyxjQUFTLEdBQVcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV0RCwyQkFBc0IsR0FBWSxLQUFLLENBQUM7UUFDUiwwQkFBcUIsR0FBWSxJQUFJLENBQUM7UUFDN0MsbUJBQWMsR0FBVyxTQUFTLENBQUMsWUFBWSxDQUFDO1FBR3ZFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDOztZQUN2QyxXQUFXLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRTtRQUM5QixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEQsV0FBVyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMvRDtRQUNELElBQUksQ0FBQyxhQUFhLEdBQUc7UUFDbkI7Ozs7Ozs7Oztt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dUQ7O0lBQ3ZELHVEQUFnRDs7SUFDaEQsc0RBQTBFOztJQUMxRSwyREFBb0Y7O0lBQ3BGLHVEQUE4Qzs7SUFDOUMsZ0RBQTBDOztJQUMxQyw4Q0FBc0M7O0lBQ3RDLG9EQUFtQjs7SUFDbkIsZ0VBQStCOztJQUMvQixnREFBc0Q7O0lBQ3RELDZDQUFlOztJQUNmLDZEQUF3Qzs7SUFDeEMsNERBQXNFOztJQUN0RSxxREFBeUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Q29uc3RhbnRzfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7RGF0ZVV0aWx9IGZyb20gXCIuL3V0aWwvZGF0ZS51dGlsXCI7XG5cbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1kYXRlcmFuZ2UtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGVyYW5nZXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RhdGVyYW5nZXBpY2tlci1saWIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGVyYW5nZXBpY2tlckxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICBASW5wdXQoJ2lkJykgaWQ6IHN0cmluZztcbiAgQElucHV0KCdlbmFibGVkUHJlc2V0cycpIGVuYWJsZWRQcmVzZXRzOiBBcnJheTxzdHJpbmc+O1xuICBASW5wdXQoJ3NlbGVjdGVkRHVyYXRpb24nKSBzZWxlY3RlZER1cmF0aW9uOmFueTtcbiAgQFZpZXdDaGlsZCgnZGF0ZVJhbmdlUGlja2VyJywge3N0YXRpYzpmYWxzZX0pIGRhdGVSYW5nZVBpY2tlcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZGF0ZVJhbmdlUGlja2VySW5wdXQnLCB7c3RhdGljOmZhbHNlfSkgZGF0ZVJhbmdlUGlja2VySW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBPdXRwdXQoKSBkYXRlUmFuZ2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQElucHV0KCdzdGFydFRpbWUnKSBzdGFydFRpbWU6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgnZW5kVGltZScpIGVuZFRpbWU6IG51bWJlciA9IDA7XG4gIHByZXNldHNDb25maWc6IGFueTtcbiAgZW5hYmxlZFByZXNldHNSYW5nZUNvbmZpZzogYW55O1xuICB0aW1lUmFuZ2U6IHN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lUmFuZ2UnKTtcbiAgY3VzdG9tOiBzdHJpbmc7XG4gIGNoZWNrT3V0c2lkZUNsaWNrRXZlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCdlbmFibGVEYXRlUmFuZ2VPcHRpb24nKSBlbmFibGVEYXRlUmFuZ2VPcHRpb246IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoJ3Rvb2x0aXBNZXNzYWdlJykgdG9vbHRpcE1lc3NhZ2U6IHN0cmluZyA9IENvbnN0YW50cy5FTVBUWV9TVFJJTkc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kYXRlUmFuZ2VDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIGxldCBjdXJyZW50VGltZSA9IG1vbWVudC5ub3coKTtcbiAgICBpZiAodGhpcy50aW1lUmFuZ2UgJiYgcGFyc2VJbnQodGhpcy50aW1lUmFuZ2UpID4gMCkge1xuICAgICAgY3VycmVudFRpbWUgPSAobW9tZW50LnVuaXgoTnVtYmVyKHRoaXMudGltZVJhbmdlKSkpLnZhbHVlT2YoKTtcbiAgICB9XG4gICAgdGhpcy5wcmVzZXRzQ29uZmlnID0ge1xuICAgICAgLyonVG9kYXknOiBbbW9tZW50KGN1cnJlbnRUaW1lKSwgbW9tZW50KGN1cnJlbnRUaW1lKV0sXG4gICAgICAnVGhpcyBXZWVrJzogW21vbWVudChjdXJyZW50VGltZSkuc3RhcnRPZignd2VlaycpLCBtb21lbnQoY3VycmVudFRpbWUpLmVuZE9mKCd3ZWVrJyldLFxuICAgICAgJ1dlZWsnOiBbbW9tZW50KGN1cnJlbnRUaW1lKS5zdGFydE9mKCd3ZWVrJyksIG1vbWVudChjdXJyZW50VGltZSkuZW5kT2YoJ3dlZWsnKV0sXG4gICAgICAnVGhpcyBNb250aCc6IFttb21lbnQoY3VycmVudFRpbWUpLnN0YXJ0T2YoJ21vbnRoJyksIG1vbWVudChjdXJyZW50VGltZSkuZW5kT2YoJ21vbnRoJyldLFxuICAgICAgJ01vbnRoJzogW21vbWVudChjdXJyZW50VGltZSkuc3RhcnRPZignbW9udGgnKSwgbW9tZW50KGN1cnJlbnRUaW1lKS5lbmRPZignbW9udGgnKV0sXG4gICAgICAnWWVzdGVyZGF5JzogW21vbWVudChjdXJyZW50VGltZSkuc3VidHJhY3QoMSwgJ2RheXMnKSwgbW9tZW50KGN1cnJlbnRUaW1lKS5zdWJ0cmFjdCgxLCAnZGF5cycpXSxcbiAgICAgICdMYXN0IDcgRGF5cyc6IFttb21lbnQoY3VycmVudFRpbWUpLnN1YnRyYWN0KDYsICdkYXlzJyksIG1vbWVudChjdXJyZW50VGltZSldLFxuICAgICAgJ0xhc3QgMzAgRGF5cyc6IFttb21lbnQoY3VycmVudFRpbWUpLnN1YnRyYWN0KDI5LCAnZGF5cycpLCBtb21lbnQoY3VycmVudFRpbWUpXSxcbiAgICAgICdMYXN0IE1vbnRoJzogW21vbWVudChjdXJyZW50VGltZSkuc3VidHJhY3QoMSwgJ21vbnRoJykuc3RhcnRPZignbW9udGgnKSwgbW9tZW50KGN1cnJlbnRUaW1lKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5lbmRPZignbW9udGgnKV0sXG4gICAgICAnUXVhcnRlcic6IFttb21lbnQoY3VycmVudFRpbWUpLnN0YXJ0T2YoJ3F1YXJ0ZXInKSwgbW9tZW50KGN1cnJlbnRUaW1lKS5lbmRPZigncXVhcnRlcicpXSovXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJlcGFyZUNvbmZpZ0ZvckVuYWJsZWRQcmVzZXRzKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplRGF0ZVJhbmdlUGlja2VyKCk7XG4gIH1cblxuICBpbml0aWFsaXplRGF0ZVJhbmdlUGlja2VyKG1pbkRhdGU/OmFueSwgbWF4RGF0ZT86YW55KXtcbiAgICBsZXQgc3RhcnQgPSB0aGlzLnN0YXJ0VGltZSA9PSAwID8gbW9tZW50LnV0YygpLnN1YnRyYWN0KDI5LCAnZGF5cycpIDogbW9tZW50LnV0Yyh0aGlzLnN0YXJ0VGltZSAqIDEwMDApO1xuICAgIGxldCBlbmQgPSB0aGlzLmVuZFRpbWUgPT0gMCA/IG1vbWVudC51dGMoKSA6IG1vbWVudC51dGModGhpcy5lbmRUaW1lICogMTAwMCk7XG4gICAgbGV0IHRoYXQ6IGFueSA9IHRoaXM7XG4gICAgbGV0IGRhdGVSYW5nZVBpY2tlckNvbmZpZyA9IHtcbiAgICAgIGFsd2F5c1Nob3dDYWxlbmRhcnM6IHRydWUsXG4gICAgICBzdGFydERhdGU6IHN0YXJ0LFxuICAgICAgZW5kRGF0ZTogZW5kLFxuICAgICAgcmFuZ2VzOiB0aGF0LmVuYWJsZWRQcmVzZXRzUmFuZ2VDb25maWdcbiAgICB9O1xuICAgIGlmKG1pbkRhdGUpe1xuICAgICAgZGF0ZVJhbmdlUGlja2VyQ29uZmlnWydtaW5EYXRlJ10gPSBtaW5EYXRlO1xuICAgIH1cbiAgICBpZihtYXhEYXRlKXtcbiAgICAgIGRhdGVSYW5nZVBpY2tlckNvbmZpZ1snbWF4RGF0ZSddID0gbWF4RGF0ZTtcbiAgICB9XG4gICAgKDxhbnk+JCh0aGlzLmRhdGVSYW5nZVBpY2tlci5uYXRpdmVFbGVtZW50KSkuZGF0ZXJhbmdlcGlja2VyKGRhdGVSYW5nZVBpY2tlckNvbmZpZywgdGhpcy5jYi5iaW5kKHRoaXMpKS5vbignb3V0c2lkZUNsaWNrLmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKGV2LCBwaWNrZXIpIHtcbiAgICAgIHRoYXQuY2hlY2tPdXRzaWRlQ2xpY2tFdmVudCA9IHRydWU7XG4gICAgICBwaWNrZXIuc3RhcnREYXRlID0gcGlja2VyLm9sZFN0YXJ0RGF0ZTtcbiAgICAgIHBpY2tlci5lbmREYXRlID0gcGlja2VyLm9sZEVuZERhdGU7XG4gICAgfSk7XG4gIH1cblxuICBjYihzdGFydCwgZW5kKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZighdGhpcy5jaGVja091dHNpZGVDbGlja0V2ZW50KSB7XG4gICAgICAgICQodGhpcy5kYXRlUmFuZ2VQaWNrZXJJbnB1dC5uYXRpdmVFbGVtZW50KS5odG1sKHN0YXJ0LmZvcm1hdChEYXRlVXRpbC5EQVRFX0ZPUk1BVF9ERF9NTU1fWVlZWSkgKyAnIC0gJyArXG4gICAgICAgICAgZW5kLmZvcm1hdChEYXRlVXRpbC5EQVRFX0ZPUk1BVF9ERF9NTU1fWVlZWSkpO1xuICAgICAgICB0aGlzLmRhdGVSYW5nZUNoYW5nZWQuZW1pdCh7XG4gICAgICAgICAgc3RhcnREYXRlOiBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMoc3RhcnRbJ19kJ10uZ2V0VGltZSgpIC0gKHN0YXJ0WydfZCddLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpLFxuICAgICAgICAgIGVuZERhdGU6IERhdGVVdGlsLmdldEVwb2NoVGltZUluU2Vjb25kcyhlbmRbJ19kJ10uZ2V0VGltZSgpIC0gKGVuZFsnX2QnXS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApKSxcbiAgICAgICAgICBkYXRlUmFuZ2VTdHJpbmc6IHN0YXJ0LmZvcm1hdChEYXRlVXRpbC5EQVRFX0ZPUk1BVF9ERF9NTU1fWVlZWSkgKyAnIC0gJyArXG4gICAgICAgICAgZW5kLmZvcm1hdChEYXRlVXRpbC5EQVRFX0ZPUk1BVF9ERF9NTU1fWVlZWSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREdXJhdGlvbiA9IHN0YXJ0LmZvcm1hdChEYXRlVXRpbC5EQVRFX0ZPUk1BVF9ERF9NTU1fWVlZWSkgKyAnIC0gJyArXG4gICAgICAgICAgZW5kLmZvcm1hdChEYXRlVXRpbC5EQVRFX0ZPUk1BVF9ERF9NTU1fWVlZWSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNoZWNrT3V0c2lkZUNsaWNrRXZlbnQgPSAhdGhpcy5jaGVja091dHNpZGVDbGlja0V2ZW50O1xuICAgICAgfVxuICAgIH0sMCk7XG4gIH1cblxuICBwcmVwYXJlQ29uZmlnRm9yRW5hYmxlZFByZXNldHMoKSB7XG4gICAgbGV0IGNvbmZpZzogYW55ID0ge307XG4gICAgZm9yIChsZXQgcHJlc2V0IG9mIHRoaXMuZW5hYmxlZFByZXNldHMpIHtcbiAgICAgIGNvbmZpZ1twcmVzZXRdID0gdGhpcy5wcmVzZXRzQ29uZmlnW3ByZXNldF07XG4gICAgfVxuICAgIHRoaXMuZW5hYmxlZFByZXNldHNSYW5nZUNvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgJCh0aGlzLmRhdGVSYW5nZVBpY2tlcklucHV0Lm5hdGl2ZUVsZW1lbnQpLmh0bWwoJ0N1c3RvbScpO1xuICAgIHRoaXMubmdBZnRlclZpZXdJbml0KCk7XG4gIH1cblxuICB1cGRhdGVEYXRlcyhzdGFydDphbnksIGVuZDphbnkpe1xuICAgICQodGhpcy5kYXRlUmFuZ2VQaWNrZXIubmF0aXZlRWxlbWVudCkuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJykuc2V0U3RhcnREYXRlKHN0YXJ0LmZvcm1hdCgnTU0tREQtWVlZWScpKTtcbiAgICAkKHRoaXMuZGF0ZVJhbmdlUGlja2VyLm5hdGl2ZUVsZW1lbnQpLmRhdGEoJ2RhdGVyYW5nZXBpY2tlcicpLnNldEVuZERhdGUoZW5kLmZvcm1hdCgnTU0tREQtWVlZWScpKTtcbiAgICAkKHRoaXMuZGF0ZVJhbmdlUGlja2VySW5wdXQubmF0aXZlRWxlbWVudCkuaHRtbChzdGFydC5mb3JtYXQoRGF0ZVV0aWwuREFURV9GT1JNQVRfRERfTU1NX1lZWVkpICsgJyAtICcgK1xuICAgICAgZW5kLmZvcm1hdChEYXRlVXRpbC5EQVRFX0ZPUk1BVF9ERF9NTU1fWVlZWSkpO1xuICB9XG5cbiAgc2V0TWluTWF4RGF0ZXMobWluRGF0ZTphbnksIG1heERhdGU6YW55KXtcbiAgICB0aGlzLmluaXRpYWxpemVEYXRlUmFuZ2VQaWNrZXIobWluRGF0ZSwgbWF4RGF0ZSk7XG4gIH1cblxuICBkaXNhYmxlRGF0ZVJhbmdlUGlja2VyKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG59XG4iXX0=