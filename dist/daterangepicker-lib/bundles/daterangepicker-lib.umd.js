(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('jquery'), require('moment'), require('daterangepicker'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('daterangepicker-lib', ['exports', '@angular/core', 'jquery', 'moment', 'daterangepicker', '@angular/common'], factory) :
    (global = global || self, factory(global['daterangepicker-lib'] = {}, global.ng.core, global.$, global.moment, null, global.ng.common));
}(this, (function (exports, core, $, moment, daterangepicker, common) { 'use strict';

    $ = $ && Object.prototype.hasOwnProperty.call($, 'default') ? $['default'] : $;
    moment = moment && Object.prototype.hasOwnProperty.call(moment, 'default') ? moment['default'] : moment;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Constants = /** @class */ (function () {
        function Constants() {
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
        return Constants;
    }());
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
    var DateUtil = /** @class */ (function () {
        function DateUtil() {
        }
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
        DateUtil.getEpochTimeInSeconds = 
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
        function (time) {
            return Math.floor(time / 1000);
        };
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
        return DateUtil;
    }());
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
            this.dateRangeChanged = new core.EventEmitter();
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
                for (var _b = __values(this.enabledPresets), _c = _b.next(); !_c.done; _c = _b.next()) {
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
            { type: core.Component, args: [{
                        selector: 'app-daterange-picker',
                        template: "<!--<tooltip-content #tooltipContent>{{tooltipMessage}}</tooltip-content>-->\n<!--<span [ngClass]=\"{'disabled-custom': !enableDateRangeOption }\" tooltipPlacement=\"bottom\">-->\n    <input [attr.id]=\"id\" #dateRangePicker class=\"btn btn-default dateRangePicker\" value=\"{{selectedDuration}}\" />\n<!--</span>-->\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        DaterangepickerLibComponent.ctorParameters = function () { return []; };
        DaterangepickerLibComponent.propDecorators = {
            id: [{ type: core.Input, args: ['id',] }],
            enabledPresets: [{ type: core.Input, args: ['enabledPresets',] }],
            selectedDuration: [{ type: core.Input, args: ['selectedDuration',] }],
            timePicker: [{ type: core.Input, args: ['timePicker',] }],
            alwaysShowCalendar: [{ type: core.Input, args: ['alwaysShowCalendars',] }],
            locale: [{ type: core.Input, args: ['locale',] }],
            minDate: [{ type: core.Input, args: ['minDate',] }],
            maxDate: [{ type: core.Input, args: ['minDate',] }],
            startTime: [{ type: core.Input, args: ['startTime',] }],
            endTime: [{ type: core.Input, args: ['endTime',] }],
            enableDateRangeOption: [{ type: core.Input, args: ['enableDateRangeOption',] }],
            tooltipMessage: [{ type: core.Input, args: ['tooltipMessage',] }],
            dateRangePicker: [{ type: core.ViewChild, args: ['dateRangePicker', { static: false },] }],
            dateRangePickerInput: [{ type: core.ViewChild, args: ['dateRangePickerInput', { static: false },] }],
            dateRangeChanged: [{ type: core.Output }]
        };
        return DaterangepickerLibComponent;
    }());
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaterangepickerLibModule = /** @class */ (function () {
        function DaterangepickerLibModule() {
        }
        DaterangepickerLibModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [DaterangepickerLibComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [DaterangepickerLibComponent]
                    },] }
        ];
        return DaterangepickerLibModule;
    }());

    exports.DaterangepickerLibComponent = DaterangepickerLibComponent;
    exports.DaterangepickerLibModule = DaterangepickerLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=daterangepicker-lib.umd.js.map
