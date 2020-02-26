/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { Constants } from "./constants";
import { DateUtil } from "./util/date.util";
import * as moment_ from "moment";
/** @type {?} */
var moment = moment_;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXJhbmdlcGlja2VyLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kYXRlcmFuZ2VwaWNrZXItbGliLyIsInNvdXJjZXMiOlsibGliL2RhdGVyYW5nZXBpY2tlci1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDdEMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzFDLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOztJQUU1QixNQUFNLEdBQUcsT0FBTztBQUd0QjtJQXVCRTtRQVZvQixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFHdEMsY0FBUyxHQUFXLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFdEQsMkJBQXNCLEdBQVksS0FBSyxDQUFDO1FBQ1IsMEJBQXFCLEdBQVksSUFBSSxDQUFDO1FBQzdDLG1CQUFjLEdBQVcsU0FBUyxDQUFDLFlBQVksQ0FBQztRQUd2RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7WUFDdkMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUU7UUFDOUIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xELFdBQVcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDL0Q7UUFDRCxJQUFJLENBQUMsYUFB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RXRDLHlDQUF3Qjs7SUFDeEIscURBQXVEOztJQUN2RCx1REFBZ0Q7O0lBQ2hELHNEQUEwRTs7SUFDMUUsMkRBQW9GOztJQUNwRix1REFBOEM7O0lBQzlDLGdEQUEwQzs7SUFDMUMsOENBQXNDOztJQUN0QyxvREFBbUI7O0lBQ25CLGdFQUErQjs7SUFDL0IsZ0RBQXNEOztJQUN0RCw2Q0FBZTs7SUFDZiw2REFBd0M7O0lBQ3hDLDREQUFzRTs7SUFDdEUscURBQXlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0NvbnN0YW50c30gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQge0RhdGVVdGlsfSBmcm9tIFwiLi91dGlsL2RhdGUudXRpbFwiO1xuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tIFwibW9tZW50XCI7XG5cbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWRhdGVyYW5nZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZXJhbmdlcGlja2VyLWxpYi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXJhbmdlcGlja2VyTGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gIEBJbnB1dCgnaWQnKSBpZDogc3RyaW5nO1xuICBASW5wdXQoJ2VuYWJsZWRQcmVzZXRzJykgZW5hYmxlZFByZXNldHM6IEFycmF5PHN0cmluZz47XG4gIEBJbnB1dCgnc2VsZWN0ZWREdXJhdGlvbicpIHNlbGVjdGVkRHVyYXRpb246YW55O1xuICBAVmlld0NoaWxkKCdkYXRlUmFuZ2VQaWNrZXInLCB7c3RhdGljOmZhbHNlfSkgZGF0ZVJhbmdlUGlja2VyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdkYXRlUmFuZ2VQaWNrZXJJbnB1dCcsIHtzdGF0aWM6ZmFsc2V9KSBkYXRlUmFuZ2VQaWNrZXJJbnB1dDogRWxlbWVudFJlZjtcbiAgQE91dHB1dCgpIGRhdGVSYW5nZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBASW5wdXQoJ3N0YXJ0VGltZScpIHN0YXJ0VGltZTogbnVtYmVyID0gMDtcbiAgQElucHV0KCdlbmRUaW1lJykgZW5kVGltZTogbnVtYmVyID0gMDtcbiAgcHJlc2V0c0NvbmZpZzogYW55O1xuICBlbmFibGVkUHJlc2V0c1JhbmdlQ29uZmlnOiBhbnk7XG4gIHRpbWVSYW5nZTogc3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpbWVSYW5nZScpO1xuICBjdXN0b206IHN0cmluZztcbiAgY2hlY2tPdXRzaWRlQ2xpY2tFdmVudDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoJ2VuYWJsZURhdGVSYW5nZU9wdGlvbicpIGVuYWJsZURhdGVSYW5nZU9wdGlvbjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgndG9vbHRpcE1lc3NhZ2UnKSB0b29sdGlwTWVzc2FnZTogc3RyaW5nID0gQ29uc3RhbnRzLkVNUFRZX1NUUklORztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRhdGVSYW5nZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgbGV0IGN1cnJlbnRUaW1lID0gbW9tZW50Lm5vdygpO1xuICAgIGlmICh0aGlzLnRpbWVSYW5nZSAmJiBwYXJzZUludCh0aGlzLnRpbWVSYW5nZSkgPiAwKSB7XG4gICAgICBjdXJyZW50VGltZSA9IChtb21lbnQudW5peChOdW1iZXIodGhpcy50aW1lUmFuZ2UpKSkudmFsdWVPZigpO1xuICAgIH1cbiAgICB0aGlzLnByZXNldHNDb25maWcgPSB7XG4gICAgICAvKidUb2RheSc6IFttb21lbnQoY3VycmVudFRpbWUpLCBtb21lbnQoY3VycmVudFRpbWUpXSxcbiAgICAgICdUaGlzIFdlZWsnOiBbbW9tZW50KGN1cnJlbnRUaW1lKS5zdGFydE9mKCd3ZWVrJyksIG1vbWVudChjdXJyZW50VGltZSkuZW5kT2YoJ3dlZWsnKV0sXG4gICAgICAnV2Vlayc6IFttb21lbnQoY3VycmVudFRpbWUpLnN0YXJ0T2YoJ3dlZWsnKSwgbW9tZW50KGN1cnJlbnRUaW1lKS5lbmRPZignd2VlaycpXSxcbiAgICAgICdUaGlzIE1vbnRoJzogW21vbWVudChjdXJyZW50VGltZSkuc3RhcnRPZignbW9udGgnKSwgbW9tZW50KGN1cnJlbnRUaW1lKS5lbmRPZignbW9udGgnKV0sXG4gICAgICAnTW9udGgnOiBbbW9tZW50KGN1cnJlbnRUaW1lKS5zdGFydE9mKCdtb250aCcpLCBtb21lbnQoY3VycmVudFRpbWUpLmVuZE9mKCdtb250aCcpXSxcbiAgICAgICdZZXN0ZXJkYXknOiBbbW9tZW50KGN1cnJlbnRUaW1lKS5zdWJ0cmFjdCgxLCAnZGF5cycpLCBtb21lbnQoY3VycmVudFRpbWUpLnN1YnRyYWN0KDEsICdkYXlzJyldLFxuICAgICAgJ0xhc3QgNyBEYXlzJzogW21vbWVudChjdXJyZW50VGltZSkuc3VidHJhY3QoNiwgJ2RheXMnKSwgbW9tZW50KGN1cnJlbnRUaW1lKV0sXG4gICAgICAnTGFzdCAzMCBEYXlzJzogW21vbWVudChjdXJyZW50VGltZSkuc3VidHJhY3QoMjksICdkYXlzJyksIG1vbWVudChjdXJyZW50VGltZSldLFxuICAgICAgJ0xhc3QgTW9udGgnOiBbbW9tZW50KGN1cnJlbnRUaW1lKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5zdGFydE9mKCdtb250aCcpLCBtb21lbnQoY3VycmVudFRpbWUpLnN1YnRyYWN0KDEsICdtb250aCcpLmVuZE9mKCdtb250aCcpXSxcbiAgICAgICdRdWFydGVyJzogW21vbWVudChjdXJyZW50VGltZSkuc3RhcnRPZigncXVhcnRlcicpLCBtb21lbnQoY3VycmVudFRpbWUpLmVuZE9mKCdxdWFydGVyJyldKi9cbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wcmVwYXJlQ29uZmlnRm9yRW5hYmxlZFByZXNldHMoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemVEYXRlUmFuZ2VQaWNrZXIoKTtcbiAgfVxuXG4gIGluaXRpYWxpemVEYXRlUmFuZ2VQaWNrZXIobWluRGF0ZT86YW55LCBtYXhEYXRlPzphbnkpe1xuICAgIGxldCBzdGFydCA9IHRoaXMuc3RhcnRUaW1lID09IDAgPyBtb21lbnQudXRjKCkuc3VidHJhY3QoMjksICdkYXlzJykgOiBtb21lbnQudXRjKHRoaXMuc3RhcnRUaW1lICogMTAwMCk7XG4gICAgbGV0IGVuZCA9IHRoaXMuZW5kVGltZSA9PSAwID8gbW9tZW50LnV0YygpIDogbW9tZW50LnV0Yyh0aGlzLmVuZFRpbWUgKiAxMDAwKTtcbiAgICBsZXQgdGhhdDogYW55ID0gdGhpcztcbiAgICBsZXQgZGF0ZVJhbmdlUGlja2VyQ29uZmlnID0ge1xuICAgICAgYWx3YXlzU2hvd0NhbGVuZGFyczogdHJ1ZSxcbiAgICAgIHN0YXJ0RGF0ZTogc3RhcnQsXG4gICAgICBlbmREYXRlOiBlbmQsXG4gICAgICByYW5nZXM6IHRoYXQuZW5hYmxlZFByZXNldHNSYW5nZUNvbmZpZ1xuICAgIH07XG4gICAgaWYobWluRGF0ZSl7XG4gICAgICBkYXRlUmFuZ2VQaWNrZXJDb25maWdbJ21pbkRhdGUnXSA9IG1pbkRhdGU7XG4gICAgfVxuICAgIGlmKG1heERhdGUpe1xuICAgICAgZGF0ZVJhbmdlUGlja2VyQ29uZmlnWydtYXhEYXRlJ10gPSBtYXhEYXRlO1xuICAgIH1cbiAgICAoPGFueT4kKHRoaXMuZGF0ZVJhbmdlUGlja2VyLm5hdGl2ZUVsZW1lbnQpKS5kYXRlcmFuZ2VwaWNrZXIoZGF0ZVJhbmdlUGlja2VyQ29uZmlnLCB0aGlzLmNiLmJpbmQodGhpcykpLm9uKCdvdXRzaWRlQ2xpY2suZGF0ZXJhbmdlcGlja2VyJywgZnVuY3Rpb24oZXYsIHBpY2tlcikge1xuICAgICAgdGhhdC5jaGVja091dHNpZGVDbGlja0V2ZW50ID0gdHJ1ZTtcbiAgICAgIHBpY2tlci5zdGFydERhdGUgPSBwaWNrZXIub2xkU3RhcnREYXRlO1xuICAgICAgcGlja2VyLmVuZERhdGUgPSBwaWNrZXIub2xkRW5kRGF0ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGNiKHN0YXJ0LCBlbmQpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmKCF0aGlzLmNoZWNrT3V0c2lkZUNsaWNrRXZlbnQpIHtcbiAgICAgICAgJCh0aGlzLmRhdGVSYW5nZVBpY2tlcklucHV0Lm5hdGl2ZUVsZW1lbnQpLmh0bWwoc3RhcnQuZm9ybWF0KERhdGVVdGlsLkRBVEVfRk9STUFUX0REX01NTV9ZWVlZKSArICcgLSAnICtcbiAgICAgICAgICBlbmQuZm9ybWF0KERhdGVVdGlsLkRBVEVfRk9STUFUX0REX01NTV9ZWVlZKSk7XG4gICAgICAgIHRoaXMuZGF0ZVJhbmdlQ2hhbmdlZC5lbWl0KHtcbiAgICAgICAgICBzdGFydERhdGU6IERhdGVVdGlsLmdldEVwb2NoVGltZUluU2Vjb25kcyhzdGFydFsnX2QnXS5nZXRUaW1lKCkgLSAoc3RhcnRbJ19kJ10uZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKSksXG4gICAgICAgICAgZW5kRGF0ZTogRGF0ZVV0aWwuZ2V0RXBvY2hUaW1lSW5TZWNvbmRzKGVuZFsnX2QnXS5nZXRUaW1lKCkgLSAoZW5kWydfZCddLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpLFxuICAgICAgICAgIGRhdGVSYW5nZVN0cmluZzogc3RhcnQuZm9ybWF0KERhdGVVdGlsLkRBVEVfRk9STUFUX0REX01NTV9ZWVlZKSArICcgLSAnICtcbiAgICAgICAgICBlbmQuZm9ybWF0KERhdGVVdGlsLkRBVEVfRk9STUFUX0REX01NTV9ZWVlZKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZER1cmF0aW9uID0gc3RhcnQuZm9ybWF0KERhdGVVdGlsLkRBVEVfRk9STUFUX0REX01NTV9ZWVlZKSArICcgLSAnICtcbiAgICAgICAgICBlbmQuZm9ybWF0KERhdGVVdGlsLkRBVEVfRk9STUFUX0REX01NTV9ZWVlZKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2hlY2tPdXRzaWRlQ2xpY2tFdmVudCA9ICF0aGlzLmNoZWNrT3V0c2lkZUNsaWNrRXZlbnQ7XG4gICAgICB9XG4gICAgfSwwKTtcbiAgfVxuXG4gIHByZXBhcmVDb25maWdGb3JFbmFibGVkUHJlc2V0cygpIHtcbiAgICBsZXQgY29uZmlnOiBhbnkgPSB7fTtcbiAgICBmb3IgKGxldCBwcmVzZXQgb2YgdGhpcy5lbmFibGVkUHJlc2V0cykge1xuICAgICAgY29uZmlnW3ByZXNldF0gPSB0aGlzLnByZXNldHNDb25maWdbcHJlc2V0XTtcbiAgICB9XG4gICAgdGhpcy5lbmFibGVkUHJlc2V0c1JhbmdlQ29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAkKHRoaXMuZGF0ZVJhbmdlUGlja2VySW5wdXQubmF0aXZlRWxlbWVudCkuaHRtbCgnQ3VzdG9tJyk7XG4gICAgdGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcbiAgfVxuXG4gIHVwZGF0ZURhdGVzKHN0YXJ0OmFueSwgZW5kOmFueSl7XG4gICAgJCh0aGlzLmRhdGVSYW5nZVBpY2tlci5uYXRpdmVFbGVtZW50KS5kYXRhKCdkYXRlcmFuZ2VwaWNrZXInKS5zZXRTdGFydERhdGUoc3RhcnQuZm9ybWF0KCdNTS1ERC1ZWVlZJykpO1xuICAgICQodGhpcy5kYXRlUmFuZ2VQaWNrZXIubmF0aXZlRWxlbWVudCkuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJykuc2V0RW5kRGF0ZShlbmQuZm9ybWF0KCdNTS1ERC1ZWVlZJykpO1xuICAgICQodGhpcy5kYXRlUmFuZ2VQaWNrZXJJbnB1dC5uYXRpdmVFbGVtZW50KS5odG1sKHN0YXJ0LmZvcm1hdChEYXRlVXRpbC5EQVRFX0ZPUk1BVF9ERF9NTU1fWVlZWSkgKyAnIC0gJyArXG4gICAgICBlbmQuZm9ybWF0KERhdGVVdGlsLkRBVEVfRk9STUFUX0REX01NTV9ZWVlZKSk7XG4gIH1cblxuICBzZXRNaW5NYXhEYXRlcyhtaW5EYXRlOmFueSwgbWF4RGF0ZTphbnkpe1xuICAgIHRoaXMuaW5pdGlhbGl6ZURhdGVSYW5nZVBpY2tlcihtaW5EYXRlLCBtYXhEYXRlKTtcbiAgfVxuXG4gIGRpc2FibGVEYXRlUmFuZ2VQaWNrZXIoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn1cbiJdfQ==