/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { Constants } from "./constants";
import { DateUtil } from "./util/date.util";
import $ from "jquery";
import moment from 'moment';
import 'daterangepicker';
var DaterangepickerLibComponent = /** @class */ (function () {
    function DaterangepickerLibComponent() {
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
        var currentTime = moment();
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
            alwaysShowCalendars: that.alwaysShowCalendar,
            timePicker: that.timePicker,
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
    DaterangepickerLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-daterange-picker',
                    template: "<!--<tooltip-content #tooltipContent>{{tooltipMessage}}</tooltip-content>-->\n<!--<span [ngClass]=\"{'disabled-custom': !enableDateRangeOption }\" tooltipPlacement=\"bottom\">-->\n    <input [attr.id]=\"id\" #dateRangePicker class=\"btn btn-default dateRangePicker\" value=\"{{selectedDuration}}\" />\n<!--</span>-->\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DaterangepickerLibComponent.ctorParameters = function () { return []; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXJhbmdlcGlja2VyLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kYXRlcmFuZ2VwaWNrZXItbGliLyIsInNvdXJjZXMiOlsibGliL2RhdGVyYW5nZXBpY2tlci1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNuSCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUUxQyxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDdkIsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRTVCLE9BQU8saUJBQWlCLENBQUM7QUFFekI7SUE4QkU7UUFwQnFCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDbkIsdUJBQWtCLEdBQVksSUFBSSxDQUFDO1FBSTdDLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDeEIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUNOLDBCQUFxQixHQUFZLElBQUksQ0FBQztRQUM3QyxtQkFBYyxHQUFXLFNBQVMsQ0FBQyxZQUFZLENBQUM7UUFTekUsY0FBUyxHQUFXLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdEQsMkJBQXNCLEdBQVksS0FBSyxDQUFDO1FBR3RDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDOztZQUN2QyxXQUFXLEdBQUcsTUFBTSxFQUFFO1FBQzFCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsRCxXQUFXLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxR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LFNBQVM7MEJBQ2YsS0FBSyxTQUFDLFNBQVM7NEJBQ2YsS0FBSyxTQUFDLFdBQVc7MEJBQ2pCLEtBQUssU0FBQyxTQUFTO3dDQUNmLEtBQUssU0FBQyx1QkFBdUI7aUNBQzdCLEtBQUssU0FBQyxnQkFBZ0I7a0NBRXRCLFNBQVMsU0FBQyxpQkFBaUIsRUFBRSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUM7dUNBQzNDLFNBQVMsU0FBQyxzQkFBc0IsRUFBRSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUM7bUNBRWhELE1BQU07O0lBZ0dULGtDQUFDO0NBQUEsQUF2SEQsSUF1SEM7U0FsSFksMkJBQTJCOzs7SUFFdEMseUNBQXdCOztJQUN4QixxREFBdUQ7O0lBQ3ZELHVEQUFnRDs7SUFDaEQsaURBQWlEOztJQUNqRCx5REFBaUU7O0lBQ2pFLDZDQUE2Qjs7SUFDN0IsOENBQStCOztJQUMvQiw4Q0FBK0I7O0lBQy9CLGdEQUEwQzs7SUFDMUMsOENBQXNDOztJQUN0Qyw0REFBc0U7O0lBQ3RFLHFEQUF5RTs7SUFFekUsc0RBQTBFOztJQUMxRSwyREFBb0Y7O0lBRXBGLHVEQUE4Qzs7SUFFOUMsb0RBQW1COztJQUNuQixnRUFBK0I7O0lBQy9CLGdEQUFzRDs7SUFDdEQsNkRBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0NvbnN0YW50c30gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQge0RhdGVVdGlsfSBmcm9tIFwiLi91dGlsL2RhdGUudXRpbFwiO1xuXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmltcG9ydCAnZGF0ZXJhbmdlcGlja2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWRhdGVyYW5nZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZXJhbmdlcGlja2VyLWxpYi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXJhbmdlcGlja2VyTGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0e1xuXG4gIEBJbnB1dCgnaWQnKSBpZDogc3RyaW5nO1xuICBASW5wdXQoJ2VuYWJsZWRQcmVzZXRzJykgZW5hYmxlZFByZXNldHM6IEFycmF5PHN0cmluZz47XG4gIEBJbnB1dCgnc2VsZWN0ZWREdXJhdGlvbicpIHNlbGVjdGVkRHVyYXRpb246YW55O1xuICBASW5wdXQoJ3RpbWVQaWNrZXInKSB0aW1lUGlja2VyOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgnYWx3YXlzU2hvd0NhbGVuZGFycycpIGFsd2F5c1Nob3dDYWxlbmRhcjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgnbG9jYWxlJykgbG9jYWxlOiBhbnk7XG4gIEBJbnB1dCgnbWluRGF0ZScpIG1pbkRhdGU6IGFueTtcbiAgQElucHV0KCdtaW5EYXRlJykgbWF4RGF0ZTogYW55O1xuICBASW5wdXQoJ3N0YXJ0VGltZScpIHN0YXJ0VGltZTogbnVtYmVyID0gMDtcbiAgQElucHV0KCdlbmRUaW1lJykgZW5kVGltZTogbnVtYmVyID0gMDtcbiAgQElucHV0KCdlbmFibGVEYXRlUmFuZ2VPcHRpb24nKSBlbmFibGVEYXRlUmFuZ2VPcHRpb246IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoJ3Rvb2x0aXBNZXNzYWdlJykgdG9vbHRpcE1lc3NhZ2U6IHN0cmluZyA9IENvbnN0YW50cy5FTVBUWV9TVFJJTkc7XG5cbiAgQFZpZXdDaGlsZCgnZGF0ZVJhbmdlUGlja2VyJywge3N0YXRpYzpmYWxzZX0pIGRhdGVSYW5nZVBpY2tlcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZGF0ZVJhbmdlUGlja2VySW5wdXQnLCB7c3RhdGljOmZhbHNlfSkgZGF0ZVJhbmdlUGlja2VySW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgQE91dHB1dCgpIGRhdGVSYW5nZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIHByZXNldHNDb25maWc6IGFueTtcbiAgZW5hYmxlZFByZXNldHNSYW5nZUNvbmZpZzogYW55O1xuICB0aW1lUmFuZ2U6IHN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lUmFuZ2UnKTtcbiAgY2hlY2tPdXRzaWRlQ2xpY2tFdmVudDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGF0ZVJhbmdlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBsZXQgY3VycmVudFRpbWUgPSBtb21lbnQoKTtcbiAgICBpZiAodGhpcy50aW1lUmFuZ2UgJiYgcGFyc2VJbnQodGhpcy50aW1lUmFuZ2UpID4gMCkge1xuICAgICAgY3VycmVudFRpbWUgPSAobW9tZW50LnVuaXgoTnVtYmVyLnBhcnNlSW50KHRoaXMudGltZVJhbmdlKSkpO1xuICAgIH1cbiAgICB0aGlzLnByZXNldHNDb25maWcgPSB7XG4gICAgICAnVG9kYXknOiBbbW9tZW50KGN1cnJlbnRUaW1lKSwgbW9tZW50KGN1cnJlbnRUaW1lKV0sXG4gICAgICAnVGhpcyBXZWVrJzogW21vbWVudChjdXJyZW50VGltZSkuc3RhcnRPZignd2VlaycpLCBtb21lbnQoY3VycmVudFRpbWUpLmVuZE9mKCd3ZWVrJyldLFxuICAgICAgJ1dlZWsnOiBbbW9tZW50KGN1cnJlbnRUaW1lKS5zdGFydE9mKCd3ZWVrJyksIG1vbWVudChjdXJyZW50VGltZSkuZW5kT2YoJ3dlZWsnKV0sXG4gICAgICAnVGhpcyBNb250aCc6IFttb21lbnQoY3VycmVudFRpbWUpLnN0YXJ0T2YoJ21vbnRoJyksIG1vbWVudChjdXJyZW50VGltZSkuZW5kT2YoJ21vbnRoJyldLFxuICAgICAgJ01vbnRoJzogW21vbWVudChjdXJyZW50VGltZSkuc3RhcnRPZignbW9udGgnKSwgbW9tZW50KGN1cnJlbnRUaW1lKS5lbmRPZignbW9udGgnKV0sXG4gICAgICAnWWVzdGVyZGF5JzogW21vbWVudChjdXJyZW50VGltZSkuc3VidHJhY3QoMSwgJ2RheXMnKSwgbW9tZW50KGN1cnJlbnRUaW1lKS5zdWJ0cmFjdCgxLCAnZGF5cycpXSxcbiAgICAgICdMYXN0IDcgRGF5cyc6IFttb21lbnQoY3VycmVudFRpbWUpLnN1YnRyYWN0KDYsICdkYXlzJyksIG1vbWVudChjdXJyZW50VGltZSldLFxuICAgICAgJ0xhc3QgMzAgRGF5cyc6IFttb21lbnQoY3VycmVudFRpbWUpLnN1YnRyYWN0KDI5LCAnZGF5cycpLCBtb21lbnQoY3VycmVudFRpbWUpXSxcbiAgICAgICdMYXN0IE1vbnRoJzogW21vbWVudChjdXJyZW50VGltZSkuc3VidHJhY3QoMSwgJ21vbnRoJykuc3RhcnRPZignbW9udGgnKSwgbW9tZW50KGN1cnJlbnRUaW1lKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5lbmRPZignbW9udGgnKV0sXG4gICAgICAnUXVhcnRlcic6IFttb21lbnQoY3VycmVudFRpbWUpLnN0YXJ0T2YoJ3F1YXJ0ZXInKSwgbW9tZW50KGN1cnJlbnRUaW1lKS5lbmRPZigncXVhcnRlcicpXVxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnByZXBhcmVDb25maWdGb3JFbmFibGVkUHJlc2V0cygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZURhdGVSYW5nZVBpY2tlcigpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZURhdGVSYW5nZVBpY2tlcihtaW5EYXRlPzphbnksIG1heERhdGU/OmFueSl7XG4gICAgbGV0IHN0YXJ0ID0gdGhpcy5zdGFydFRpbWUgPT0gMCA/IG1vbWVudC51dGMoKS5zdWJ0cmFjdCgyOSwgJ2RheXMnKSA6IG1vbWVudC51dGModGhpcy5zdGFydFRpbWUgKiAxMDAwKTtcbiAgICBsZXQgZW5kID0gdGhpcy5lbmRUaW1lID09IDAgPyBtb21lbnQudXRjKCkgOiBtb21lbnQudXRjKHRoaXMuZW5kVGltZSAqIDEwMDApO1xuICAgIGxldCB0aGF0OiBhbnkgPSB0aGlzO1xuICAgIGxldCBkYXRlUmFuZ2VQaWNrZXJDb25maWcgPSB7XG4gICAgICBhbHdheXNTaG93Q2FsZW5kYXJzOiB0aGF0LmFsd2F5c1Nob3dDYWxlbmRhcixcbiAgICAgIHRpbWVQaWNrZXI6IHRoYXQudGltZVBpY2tlcixcbiAgICAgIHN0YXJ0RGF0ZTogc3RhcnQsXG4gICAgICBlbmREYXRlOiBlbmQsXG4gICAgICByYW5nZXM6IHRoYXQuZW5hYmxlZFByZXNldHNSYW5nZUNvbmZpZ1xuICAgIH07XG4gICAgaWYobWluRGF0ZSl7XG4gICAgICBkYXRlUmFuZ2VQaWNrZXJDb25maWdbJ21pbkRhdGUnXSA9IG1pbkRhdGU7XG4gICAgfVxuICAgIGlmKG1heERhdGUpe1xuICAgICAgZGF0ZVJhbmdlUGlja2VyQ29uZmlnWydtYXhEYXRlJ10gPSBtYXhEYXRlO1xuICAgIH1cbiAgICBpZih0aGlzLmxvY2FsZSl7XG4gICAgICBkYXRlUmFuZ2VQaWNrZXJDb25maWdbJ2xvY2FsZSddID0gdGhpcy5sb2NhbGU7XG4gICAgfVxuICAgICQodGhpcy5kYXRlUmFuZ2VQaWNrZXIubmF0aXZlRWxlbWVudCkuZGF0ZXJhbmdlcGlja2VyKGRhdGVSYW5nZVBpY2tlckNvbmZpZywgdGhpcy5jYi5iaW5kKHRoaXMpKS5vbignb3V0c2lkZUNsaWNrLmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKGV2LCBwaWNrZXIpIHtcbiAgICAgIHRoYXQuY2hlY2tPdXRzaWRlQ2xpY2tFdmVudCA9IHRydWU7XG4gICAgICBwaWNrZXIuc3RhcnREYXRlID0gcGlja2VyLm9sZFN0YXJ0RGF0ZTtcbiAgICAgIHBpY2tlci5lbmREYXRlID0gcGlja2VyLm9sZEVuZERhdGU7XG4gICAgfSk7XG4gIH1cblxuICBjYihzdGFydCwgZW5kKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZighdGhpcy5jaGVja091dHNpZGVDbGlja0V2ZW50KSB7XG4gICAgICAgICQodGhpcy5kYXRlUmFuZ2VQaWNrZXJJbnB1dC5uYXRpdmVFbGVtZW50KS5odG1sKHN0YXJ0LmZvcm1hdChEYXRlVXRpbC5EQVRFX0ZPUk1BVF9ERF9NTU1fWVlZWSkgKyAnIC0gJyArXG4gICAgICAgICAgZW5kLmZvcm1hdChEYXRlVXRpbC5EQVRFX0ZPUk1BVF9ERF9NTU1fWVlZWSkpO1xuICAgICAgICB0aGlzLmRhdGVSYW5nZUNoYW5nZWQuZW1pdCh7XG4gICAgICAgICAgc3RhcnREYXRlOiBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMoc3RhcnRbJ19kJ10uZ2V0VGltZSgpIC0gKHN0YXJ0WydfZCddLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpLFxuICAgICAgICAgIGVuZERhdGU6IERhdGVVdGlsLmdldEVwb2NoVGltZUluU2Vjb25kcyhlbmRbJ19kJ10uZ2V0VGltZSgpIC0gKGVuZFsnX2QnXS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApKSxcbiAgICAgICAgICBkYXRlUmFuZ2VTdHJpbmc6IHN0YXJ0LmZvcm1hdChEYXRlVXRpbC5EQVRFX0ZPUk1BVF9ERF9NTU1fWVlZWSkgKyAnIC0gJyArXG4gICAgICAgICAgZW5kLmZvcm1hdChEYXRlVXRpbC5EQVRFX0ZPUk1BVF9ERF9NTU1fWVlZWSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREdXJhdGlvbiA9IHN0YXJ0LmZvcm1hdChEYXRlVXRpbC5EQVRFX0ZPUk1BVF9ERF9NTU1fWVlZWSkgKyAnIC0gJyArXG4gICAgICAgICAgZW5kLmZvcm1hdChEYXRlVXRpbC5EQVRFX0ZPUk1BVF9ERF9NTU1fWVlZWSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNoZWNrT3V0c2lkZUNsaWNrRXZlbnQgPSAhdGhpcy5jaGVja091dHNpZGVDbGlja0V2ZW50O1xuICAgICAgfVxuICAgIH0sMCk7XG4gIH1cblxuICBwcmVwYXJlQ29uZmlnRm9yRW5hYmxlZFByZXNldHMoKSB7XG4gICAgbGV0IGNvbmZpZzogYW55ID0ge307XG4gICAgZm9yIChsZXQgcHJlc2V0IG9mIHRoaXMuZW5hYmxlZFByZXNldHMpIHtcbiAgICAgIGNvbmZpZ1twcmVzZXRdID0gdGhpcy5wcmVzZXRzQ29uZmlnW3ByZXNldF07XG4gICAgfVxuICAgIHRoaXMuZW5hYmxlZFByZXNldHNSYW5nZUNvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIHVwZGF0ZURhdGVzKHN0YXJ0OmFueSwgZW5kOmFueSl7XG4gICAgJCh0aGlzLmRhdGVSYW5nZVBpY2tlci5uYXRpdmVFbGVtZW50KS5kYXRhKCdkYXRlcmFuZ2VwaWNrZXInKS5zZXRTdGFydERhdGUoc3RhcnQuZm9ybWF0KCdNTS1ERC1ZWVlZJykpO1xuICAgICQodGhpcy5kYXRlUmFuZ2VQaWNrZXIubmF0aXZlRWxlbWVudCkuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJykuc2V0RW5kRGF0ZShlbmQuZm9ybWF0KCdNTS1ERC1ZWVlZJykpO1xuICAgICQodGhpcy5kYXRlUmFuZ2VQaWNrZXJJbnB1dC5uYXRpdmVFbGVtZW50KS5odG1sKHN0YXJ0LmZvcm1hdChEYXRlVXRpbC5EQVRFX0ZPUk1BVF9ERF9NTU1fWVlZWSkgKyAnIC0gJyArXG4gICAgICBlbmQuZm9ybWF0KERhdGVVdGlsLkRBVEVfRk9STUFUX0REX01NTV9ZWVlZKSk7XG4gIH1cblxufVxuIl19