import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, Input, ViewChild, Output, NgModule } from '@angular/core';
import * as moment_ from 'moment';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaterangepickerLibService {
    constructor() { }
}
DaterangepickerLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaterangepickerLibService.ctorParameters = () => [];
/** @nocollapse */ DaterangepickerLibService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaterangepickerLibService_Factory() { return new DaterangepickerLibService(); }, token: DaterangepickerLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Constants {
}
Constants.BASE_URI = '/cfa/api/';
Constants.STATUS_CODE = {
    OK: 200
};
// public static readonly REQUEST_URLS = {
//   LOGOUT: Constants.BASE_URI + 'v1/auth/logout',
// };
//
// public static readonly OPEN_URLS = {
//   LOGIN: Constants.BASE_URI + 'v1/auth/login',
//   REFRESH_TOKEN: Constants.BASE_URI + 'v1/auth/refresh/token',
//   FORGOT_PASSWORD: Constants.BASE_URI + 'v1/forgot-password',
//   FORGOT_PASSWORD_VALIDATE: Constants.BASE_URI + 'v1/forgot-password/validate',
//   FORGOT_PASSWORD_RESET: Constants.BASE_URI + 'v1/forgot-password/reset'
// };
//
// public static readonly ATTRIBUTES: any = {
//   mou: 'MOU',
//   calls: 'Number of Calls',
//   shortCalls: 'Short Calls'
// };
//
// public static readonly COLORS: any = {
//   BLUE: 'blue',
//   GREEN: 'green',
//   PURPLE: 'purple',
//   YELLOW: 'yellow',
//   ORANGE: 'orange'
// };
//
// public static readonly CUSTOM_CHECK: any = {
//   BLUE: 'customcheck_blue',
//   GREEN: 'customcheck_green',
//   PURPLE: 'customcheck_purple'
// };
//
// public static readonly EMPTY_FUNCTION = function () {
// };
//
// public static readonly FRAUD_TYPE: any = {
//   IRSF: 'IRSF',
//   SIMBOX: 'SIMBOX',
//   CLI: 'CLI'
// };
//
// public static readonly SELECTED_VIEW: any = {
//   SIM_VIEW: 'simview',
//   SIMBOX_VIEW: 'simboxview',
//   CASE_VIEW: 'caseView',
//   CLUSTER_VIEW: 'clusterView'
// };
//
// public static readonly TRAFFIC_DIRECTION: any = {
//   INCOMING: 'Incoming',
//   OUTGOING: 'Outgoing'
// };
//
// public static readonly HIGHCHART_TYPE: any = {
//   BAR: 'bar',
//   VENN: 'venn'
// };
//
// public static readonly COLOR: any = {
//   BLUE: 'blue',
//   YELLOW: 'yellow',
//   ORANGE: 'orange'
// };
//
// public static readonly tasksPerPage: number = 7;
// public static readonly rulesPerPage: number = 7;
// public static readonly PRN_COLOR_HEXCODE = '#F6C192';
// public static readonly ACTIVE = 'active';
// public static readonly PRN_COLOR = 'orange';
// public static readonly ORDER_BY_ASC = 'ASC';
// public static readonly ORDER_BY_DESC = 'DESC';
// public static readonly ARROW_UP = 'up';
// public static readonly ARROW_DOWN = 'down';
// public static readonly SELECT_STRING = 'select';
Constants.EMPTY_STRING = '';
if (false) {
    /** @type {?} */
    Constants.BASE_URI;
    /** @type {?} */
    Constants.STATUS_CODE;
    /** @type {?} */
    Constants.EMPTY_STRING;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DateUtil {
    // static getStartTime(duration: string) {
    //   let startTime: number = moment.utc().startOf(duration)[this.dateTimeString].getTime();
    //   let timeRange = localStorage.getItem('timeRange');
    //   if (timeRange && parseInt(timeRange) > 0) {
    //     startTime = DateUtil.getStartTimeFromTimeRange(timeRange, duration);
    //   }
    //   return startTime;
    // }
    // static getEndTime(duration: string) {
    //   let endTime: number = moment.utc().endOf(duration)[this.dateTimeString].getTime();
    //   let timeRange = localStorage.getItem('timeRange');
    //   if (timeRange && parseInt(timeRange) > 0) {
    //     endTime = DateUtil.getEndTimeFromTimeRange(timeRange, duration);
    //   }
    //   return endTime;
    // }
    /**
     * @param {?} time
     * @return {?}
     */
    static getEpochTimeInSeconds(time) {
        return Math.floor(time / 1000);
    }
}
DateUtil.dateTimeString = '_d';
DateUtil.monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
DateUtil.milisInSecond = 1000;
DateUtil.milisInMinute = 60 * 1000;
DateUtil.milisInHour = 3600 * 1000;
DateUtil.milisInDay = 24 * 3600 * 1000;
DateUtil.milisInMonth = 30 * 24 * 3600 * 1000;
DateUtil.DATE_FORMAT_DD_MMM_YYYY = 'DD MMM YYYY';
DateUtil.DATE_FORMAT_dd_MMM_yyyy = 'dd MMM yyyy';
DateUtil.DATE_FORMAT_EEE_dd_MMM_yyyy = 'EEE, dd MMM yyyy';
DateUtil.DATE_FORMAT_dd_MMM = 'dd MMM';
DateUtil.DATE_FORMAT_DD_MMM = 'DD MMM';
DateUtil.DATE_FORMAT_hh_mm_A = 'hh:mm A';
DateUtil.DATE_FORMAT_hh_mm_a = 'hh:mm a';
DateUtil.DATE_FORMAT_MMM = 'MMM';
DateUtil.DATE_RANGE = {
    WEEK: 'Week',
    MONTH: 'Month',
    QUARTER: 'Quarter'
};
if (false) {
    /** @type {?} */
    DateUtil.dateTimeString;
    /**
     * @type {?}
     * @private
     */
    DateUtil.monthList;
    /** @type {?} */
    DateUtil.milisInSecond;
    /** @type {?} */
    DateUtil.milisInMinute;
    /** @type {?} */
    DateUtil.milisInHour;
    /** @type {?} */
    DateUtil.milisInDay;
    /** @type {?} */
    DateUtil.milisInMonth;
    /** @type {?} */
    DateUtil.DATE_FORMAT_DD_MMM_YYYY;
    /** @type {?} */
    DateUtil.DATE_FORMAT_dd_MMM_yyyy;
    /** @type {?} */
    DateUtil.DATE_FORMAT_EEE_dd_MMM_yyyy;
    /** @type {?} */
    DateUtil.DATE_FORMAT_dd_MMM;
    /** @type {?} */
    DateUtil.DATE_FORMAT_DD_MMM;
    /** @type {?} */
    DateUtil.DATE_FORMAT_hh_mm_A;
    /** @type {?} */
    DateUtil.DATE_FORMAT_hh_mm_a;
    /** @type {?} */
    DateUtil.DATE_FORMAT_MMM;
    /** @type {?} */
    DateUtil.DATE_RANGE;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const moment = moment_;
class DaterangepickerLibComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaterangepickerLibModule {
}
DaterangepickerLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DaterangepickerLibComponent],
                imports: [],
                exports: [DaterangepickerLibComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaterangepickerLibComponent, DaterangepickerLibModule, DaterangepickerLibService };
//# sourceMappingURL=daterangepicker-lib.js.map
