/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class DateUtil {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS51dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGF0ZXJhbmdlcGlja2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi91dGlsL2RhdGUudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTSxPQUFPLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTZDbkIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUk7UUFDL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOztBQTdDYSx1QkFBYyxHQUFXLElBQUksQ0FBQztBQUU3QixrQkFBUyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUVsRyxzQkFBYSxHQUFXLElBQUksQ0FBQztBQUM3QixzQkFBYSxHQUFXLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDbEMsb0JBQVcsR0FBVyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2xDLG1CQUFVLEdBQVcsRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7QUFDdEMscUJBQVksR0FBVyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7QUFFN0MsZ0NBQXVCLEdBQVcsYUFBYSxDQUFDO0FBQ2hELGdDQUF1QixHQUFXLGFBQWEsQ0FBQztBQUNoRCxvQ0FBMkIsR0FBVyxrQkFBa0IsQ0FBQztBQUN6RCwyQkFBa0IsR0FBVyxRQUFRLENBQUM7QUFDdEMsMkJBQWtCLEdBQVcsUUFBUSxDQUFDO0FBQ3RDLDRCQUFtQixHQUFXLFNBQVMsQ0FBQztBQUN4Qyw0QkFBbUIsR0FBVyxTQUFTLENBQUM7QUFDeEMsd0JBQWUsR0FBVyxLQUFLLENBQUM7QUFFaEMsbUJBQVUsR0FBUTtJQUM5QixJQUFJLEVBQUUsTUFBTTtJQUNaLEtBQUssRUFBRSxPQUFPO0lBQ2QsT0FBTyxFQUFFLFNBQVM7Q0FDbkIsQ0FBQzs7O0lBdkJGLHdCQUE0Qzs7Ozs7SUFFNUMsbUJBQWdIOztJQUVoSCx1QkFBMkM7O0lBQzNDLHVCQUFnRDs7SUFDaEQscUJBQWdEOztJQUNoRCxvQkFBb0Q7O0lBQ3BELHNCQUEyRDs7SUFFM0QsaUNBQThEOztJQUM5RCxpQ0FBOEQ7O0lBQzlELHFDQUF1RTs7SUFDdkUsNEJBQW9EOztJQUNwRCw0QkFBb0Q7O0lBQ3BELDZCQUFzRDs7SUFDdEQsNkJBQXNEOztJQUN0RCx5QkFBOEM7O0lBRTlDLG9CQUlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcblxuZXhwb3J0IGNsYXNzIERhdGVVdGlsIHtcblxuICBwdWJsaWMgc3RhdGljIGRhdGVUaW1lU3RyaW5nOiBzdHJpbmcgPSAnX2QnO1xuXG4gIHByaXZhdGUgc3RhdGljIG1vbnRoTGlzdCA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuICBwdWJsaWMgc3RhdGljIG1pbGlzSW5TZWNvbmQ6IG51bWJlciA9IDEwMDA7XG4gIHB1YmxpYyBzdGF0aWMgbWlsaXNJbk1pbnV0ZTogbnVtYmVyID0gNjAgKiAxMDAwO1xuICBwdWJsaWMgc3RhdGljIG1pbGlzSW5Ib3VyOiBudW1iZXIgPSAzNjAwICogMTAwMDtcbiAgcHVibGljIHN0YXRpYyBtaWxpc0luRGF5OiBudW1iZXIgPSAyNCAqIDM2MDAgKiAxMDAwO1xuICBwdWJsaWMgc3RhdGljIG1pbGlzSW5Nb250aDogbnVtYmVyID0gMzAgKiAyNCAqIDM2MDAgKiAxMDAwO1xuXG4gIHB1YmxpYyBzdGF0aWMgREFURV9GT1JNQVRfRERfTU1NX1lZWVk6IHN0cmluZyA9ICdERCBNTU0gWVlZWSc7XG4gIHB1YmxpYyBzdGF0aWMgREFURV9GT1JNQVRfZGRfTU1NX3l5eXk6IHN0cmluZyA9ICdkZCBNTU0geXl5eSc7XG4gIHB1YmxpYyBzdGF0aWMgREFURV9GT1JNQVRfRUVFX2RkX01NTV95eXl5OiBzdHJpbmcgPSAnRUVFLCBkZCBNTU0geXl5eSc7XG4gIHB1YmxpYyBzdGF0aWMgREFURV9GT1JNQVRfZGRfTU1NOiBzdHJpbmcgPSAnZGQgTU1NJztcbiAgcHVibGljIHN0YXRpYyBEQVRFX0ZPUk1BVF9ERF9NTU06IHN0cmluZyA9ICdERCBNTU0nO1xuICBwdWJsaWMgc3RhdGljIERBVEVfRk9STUFUX2hoX21tX0E6IHN0cmluZyA9ICdoaDptbSBBJztcbiAgcHVibGljIHN0YXRpYyBEQVRFX0ZPUk1BVF9oaF9tbV9hOiBzdHJpbmcgPSAnaGg6bW0gYSc7XG4gIHB1YmxpYyBzdGF0aWMgREFURV9GT1JNQVRfTU1NOiBzdHJpbmcgPSAnTU1NJztcblxuICBwdWJsaWMgc3RhdGljIERBVEVfUkFOR0U6IGFueSA9IHtcbiAgICBXRUVLOiAnV2VlaycsXG4gICAgTU9OVEg6ICdNb250aCcsXG4gICAgUVVBUlRFUjogJ1F1YXJ0ZXInXG4gIH07XG5cbiAgLy8gc3RhdGljIGdldFN0YXJ0VGltZShkdXJhdGlvbjogc3RyaW5nKSB7XG4gIC8vICAgbGV0IHN0YXJ0VGltZTogbnVtYmVyID0gbW9tZW50LnV0YygpLnN0YXJ0T2YoZHVyYXRpb24pW3RoaXMuZGF0ZVRpbWVTdHJpbmddLmdldFRpbWUoKTtcbiAgLy8gICBsZXQgdGltZVJhbmdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpbWVSYW5nZScpO1xuICAvLyAgIGlmICh0aW1lUmFuZ2UgJiYgcGFyc2VJbnQodGltZVJhbmdlKSA+IDApIHtcbiAgLy8gICAgIHN0YXJ0VGltZSA9IERhdGVVdGlsLmdldFN0YXJ0VGltZUZyb21UaW1lUmFuZ2UodGltZVJhbmdlLCBkdXJhdGlvbik7XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiBzdGFydFRpbWU7XG4gIC8vIH1cblxuICAvLyBzdGF0aWMgZ2V0RW5kVGltZShkdXJhdGlvbjogc3RyaW5nKSB7XG4gIC8vICAgbGV0IGVuZFRpbWU6IG51bWJlciA9IG1vbWVudC51dGMoKS5lbmRPZihkdXJhdGlvbilbdGhpcy5kYXRlVGltZVN0cmluZ10uZ2V0VGltZSgpO1xuICAvLyAgIGxldCB0aW1lUmFuZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGltZVJhbmdlJyk7XG4gIC8vICAgaWYgKHRpbWVSYW5nZSAmJiBwYXJzZUludCh0aW1lUmFuZ2UpID4gMCkge1xuICAvLyAgICAgZW5kVGltZSA9IERhdGVVdGlsLmdldEVuZFRpbWVGcm9tVGltZVJhbmdlKHRpbWVSYW5nZSwgZHVyYXRpb24pO1xuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gZW5kVGltZTtcbiAgLy8gfVxuXG4gIHN0YXRpYyBnZXRFcG9jaFRpbWVJblNlY29uZHModGltZSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKHRpbWUgLyAxMDAwKTtcbiAgfVxuXG4gIC8qc3RhdGljIGdldFN0YXJ0VGltZUZyb21UaW1lUmFuZ2UodGltZVJhbmdlLCBkdXJhdGlvbikge1xuICAgIHJldHVybiBtb21lbnQudXRjKG1vbWVudC51bml4KHRpbWVSYW5nZSkpLnN0YXJ0T2YoZHVyYXRpb24pW0RhdGVVdGlsLmRhdGVUaW1lU3RyaW5nXS5nZXRUaW1lKCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0RW5kVGltZUZyb21UaW1lUmFuZ2UodGltZVJhbmdlLCBkdXJhdGlvbikge1xuICAgIHJldHVybiBtb21lbnQudXRjKG1vbWVudC51bml4KHRpbWVSYW5nZSkpLmVuZE9mKGR1cmF0aW9uKVtEYXRlVXRpbC5kYXRlVGltZVN0cmluZ10uZ2V0VGltZSgpO1xuICB9XG5cbiAgLyEqKlxuICAgVGhpcyBtZXRob2QgY2FsY3VsYXRlIHRoZSBzdGFydFRpbWUgYW5kIEVuZFRpbWUgZnJvbSB0aGUgZGF0ZVJhbmdlU3RyaW5nXG4gICBpLmUgaWYgZGF0ZVJhbmdlU3RyaW5nIGlzIFdlZWsgdGhlbiBzdGFydFRpbWUgd2lsbCBiZSBzdGFydE9mV2VlayBBbmRcbiAgIEVuZFRpbWUgd2lsbCBiZSBlbmRPZldlZWsuXG5cbiAgIEBwYXJhbTpkYXRlUmFuZ2VTdHJpbmc6U3RyaW5nXG4gICBAcmV0dXJuOk9iamVjdFxuICAgKiohL1xuICBzdGF0aWMgZ2V0RGF0ZVJhbmdlRnJvbVNlbGVjdGVkUmFuZ2UoZGF0ZVJhbmdlU3RyaW5nOiBzdHJpbmcpIHtcbiAgICBsZXQgc3RhcnRUaW1lOiBudW1iZXI7XG4gICAgbGV0IGVuZFRpbWU6IG51bWJlcjtcbiAgICBsZXQgY3VycmVudFRpbWUgPSBtb21lbnQudXRjKCk7XG4gICAgbGV0IHRpbWVSYW5nZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lUmFuZ2UnKTtcbiAgICBpZiAodGltZVJhbmdlICYmIHBhcnNlSW50KHRpbWVSYW5nZSkgPiAwKSB7XG4gICAgICBjdXJyZW50VGltZSA9IG1vbWVudC51dGMobW9tZW50LnVuaXgoTnVtYmVyKHRpbWVSYW5nZSkpKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0ZVJhbmdlU3RyaW5nID09PSAnVG9kYXknKSB7XG4gICAgICBzdGFydFRpbWUgPSBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMobW9tZW50KGN1cnJlbnRUaW1lKS5zdGFydE9mKCdkYXknKVt0aGlzLmRhdGVUaW1lU3RyaW5nXS5nZXRUaW1lKCkpO1xuICAgICAgZW5kVGltZSA9IERhdGVVdGlsLmdldEVwb2NoVGltZUluU2Vjb25kcyhtb21lbnQoY3VycmVudFRpbWUpLmVuZE9mKCdkYXknKVt0aGlzLmRhdGVUaW1lU3RyaW5nXS5nZXRUaW1lKCkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChkYXRlUmFuZ2VTdHJpbmcgPT09ICdXZWVrJykge1xuICAgICAgc3RhcnRUaW1lID0gRGF0ZVV0aWwuZ2V0RXBvY2hUaW1lSW5TZWNvbmRzKG1vbWVudChjdXJyZW50VGltZSkuc3RhcnRPZignd2VlaycpW3RoaXMuZGF0ZVRpbWVTdHJpbmddLmdldFRpbWUoKSk7XG4gICAgICBlbmRUaW1lID0gRGF0ZVV0aWwuZ2V0RXBvY2hUaW1lSW5TZWNvbmRzKG1vbWVudChjdXJyZW50VGltZSkuZW5kT2YoJ3dlZWsnKVt0aGlzLmRhdGVUaW1lU3RyaW5nXS5nZXRUaW1lKCkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChkYXRlUmFuZ2VTdHJpbmcgPT09ICdUaGlzIFdlZWsnKSB7XG4gICAgICBpZiAobW9tZW50KGN1cnJlbnRUaW1lKS5zdGFydE9mKCd3ZWVrJykuZGF5KCkgPT0gMCkge1xuICAgICAgICAvLyBjaGVjayBpZiBzdGFydCBkYXkgb2Ygd2VlayBpcyBzdW5kYXkgdGhlbiBjaGFuZ2UgaXQgbW9uZGF5IGFzIHBlciBpc28gd2Vla1xuICAgICAgICBzdGFydFRpbWUgPSBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMobW9tZW50KGN1cnJlbnRUaW1lKS5zdGFydE9mKCd3ZWVrJykuYWRkKDEsICdkYXknKVt0aGlzLmRhdGVUaW1lU3RyaW5nXS5nZXRUaW1lKCkpO1xuICAgICAgICBlbmRUaW1lID0gRGF0ZVV0aWwuZ2V0RXBvY2hUaW1lSW5TZWNvbmRzKG1vbWVudChjdXJyZW50VGltZSkuZW5kT2YoJ3dlZWsnKS5hZGQoMSwgJ2RheScpW3RoaXMuZGF0ZVRpbWVTdHJpbmddLmdldFRpbWUoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc3RhcnRUaW1lID0gRGF0ZVV0aWwuZ2V0RXBvY2hUaW1lSW5TZWNvbmRzKG1vbWVudChjdXJyZW50VGltZSkuc3RhcnRPZignd2VlaycpW3RoaXMuZGF0ZVRpbWVTdHJpbmddLmdldFRpbWUoKSk7XG4gICAgICAgIGVuZFRpbWUgPSBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMobW9tZW50KGN1cnJlbnRUaW1lKS5lbmRPZignd2VlaycpW3RoaXMuZGF0ZVRpbWVTdHJpbmddLmdldFRpbWUoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGRhdGVSYW5nZVN0cmluZyA9PT0gJ1RoaXMgTW9udGgnKSB7XG4gICAgICBzdGFydFRpbWUgPSBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMobW9tZW50KGN1cnJlbnRUaW1lKS5zdGFydE9mKCdtb250aCcpW3RoaXMuZGF0ZVRpbWVTdHJpbmddLmdldFRpbWUoKSk7XG4gICAgICBlbmRUaW1lID0gRGF0ZVV0aWwuZ2V0RXBvY2hUaW1lSW5TZWNvbmRzKG1vbWVudChjdXJyZW50VGltZSkuZW5kT2YoJ21vbnRoJylbdGhpcy5kYXRlVGltZVN0cmluZ10uZ2V0VGltZSgpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZGF0ZVJhbmdlU3RyaW5nID09PSAnTGFzdCBTaXggTW9udGhzJykge1xuICAgICAgc3RhcnRUaW1lID0gRGF0ZVV0aWwuZ2V0RXBvY2hUaW1lSW5TZWNvbmRzKG1vbWVudChjdXJyZW50VGltZSkuc3VidHJhY3QoNSwgJ21vbnRoJykuc3RhcnRPZignbW9udGgnKVt0aGlzLmRhdGVUaW1lU3RyaW5nXS5nZXRUaW1lKCkpO1xuICAgICAgZW5kVGltZSA9IERhdGVVdGlsLmdldEVwb2NoVGltZUluU2Vjb25kcyhtb21lbnQoY3VycmVudFRpbWUpLmVuZE9mKCdtb250aCcpW3RoaXMuZGF0ZVRpbWVTdHJpbmddLmdldFRpbWUoKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRhdGVSYW5nZVN0cmluZyA9PT0gJ0xhc3QgTW9udGgnKSB7XG4gICAgICBzdGFydFRpbWUgPSBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMobW9tZW50KGN1cnJlbnRUaW1lKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5zdGFydE9mKCdtb250aCcpW3RoaXMuZGF0ZVRpbWVTdHJpbmddLmdldFRpbWUoKSk7XG4gICAgICBlbmRUaW1lID0gRGF0ZVV0aWwuZ2V0RXBvY2hUaW1lSW5TZWNvbmRzKG1vbWVudChjdXJyZW50VGltZSkuc3VidHJhY3QoMSwgJ21vbnRoJykuZW5kT2YoJ21vbnRoJylbdGhpcy5kYXRlVGltZVN0cmluZ10uZ2V0VGltZSgpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZGF0ZVJhbmdlU3RyaW5nID09PSAnTGFzdCBRdWFydGVyJykge1xuICAgICAgc3RhcnRUaW1lID0gRGF0ZVV0aWwuZ2V0RXBvY2hUaW1lSW5TZWNvbmRzKG1vbWVudChjdXJyZW50VGltZSkuc3VidHJhY3QoMSwgJ3F1YXJ0ZXInKS5zdGFydE9mKCdxdWFydGVyJylbdGhpcy5kYXRlVGltZVN0cmluZ10uZ2V0VGltZSgpKTtcbiAgICAgIGVuZFRpbWUgPSBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMobW9tZW50KGN1cnJlbnRUaW1lKS5zdWJ0cmFjdCgxLCAncXVhcnRlcicpLmVuZE9mKCdxdWFydGVyJylbdGhpcy5kYXRlVGltZVN0cmluZ10uZ2V0VGltZSgpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZGF0ZVJhbmdlU3RyaW5nID09PSAnTGFzdCBZZWFyJykge1xuICAgICAgc3RhcnRUaW1lID0gRGF0ZVV0aWwuZ2V0RXBvY2hUaW1lSW5TZWNvbmRzKG1vbWVudChjdXJyZW50VGltZSkuc3VidHJhY3QoMSwgJ3llYXInKS5zdGFydE9mKCd5ZWFyJylbdGhpcy5kYXRlVGltZVN0cmluZ10uZ2V0VGltZSgpKTtcbiAgICAgIGVuZFRpbWUgPSBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMobW9tZW50KGN1cnJlbnRUaW1lKS5zdWJ0cmFjdCgxLCAneWVhcicpLmVuZE9mKCd5ZWFyJylbdGhpcy5kYXRlVGltZVN0cmluZ10uZ2V0VGltZSgpKTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIHYvcyBMYXN0XG4gICAgZWxzZSBpZiAoZGF0ZVJhbmdlU3RyaW5nID09PSAnZGF5Jykge1xuICAgICAgc3RhcnRUaW1lID0gRGF0ZVV0aWwuZ2V0RXBvY2hUaW1lSW5TZWNvbmRzKG1vbWVudChjdXJyZW50VGltZSkuc3VidHJhY3QoMSwgJ2RheScpLnN0YXJ0T2YoJ2RheScpW3RoaXMuZGF0ZVRpbWVTdHJpbmddLmdldFRpbWUoKSk7XG4gICAgICBlbmRUaW1lID0gRGF0ZVV0aWwuZ2V0RXBvY2hUaW1lSW5TZWNvbmRzKG1vbWVudChjdXJyZW50VGltZSkuZW5kT2YoJ2RheScpW3RoaXMuZGF0ZVRpbWVTdHJpbmddLmdldFRpbWUoKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRhdGVSYW5nZVN0cmluZyA9PT0gJ3dlZWsnKSB7XG4gICAgICBzdGFydFRpbWUgPSBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMobW9tZW50KGN1cnJlbnRUaW1lKS5zdWJ0cmFjdCgxLCAnd2VlaycpLnN0YXJ0T2YoJ3dlZWsnKVt0aGlzLmRhdGVUaW1lU3RyaW5nXS5nZXRUaW1lKCkpO1xuICAgICAgZW5kVGltZSA9IERhdGVVdGlsLmdldEVwb2NoVGltZUluU2Vjb25kcyhtb21lbnQoY3VycmVudFRpbWUpLmVuZE9mKCd3ZWVrJylbdGhpcy5kYXRlVGltZVN0cmluZ10uZ2V0VGltZSgpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZGF0ZVJhbmdlU3RyaW5nID09PSAnbW9udGgnKSB7XG4gICAgICBzdGFydFRpbWUgPSBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMobW9tZW50KGN1cnJlbnRUaW1lKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5zdGFydE9mKCdtb250aCcpW3RoaXMuZGF0ZVRpbWVTdHJpbmddLmdldFRpbWUoKSk7XG4gICAgICBlbmRUaW1lID0gRGF0ZVV0aWwuZ2V0RXBvY2hUaW1lSW5TZWNvbmRzKG1vbWVudChjdXJyZW50VGltZSkuZW5kT2YoJ21vbnRoJylbdGhpcy5kYXRlVGltZVN0cmluZ10uZ2V0VGltZSgpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZGF0ZVJhbmdlU3RyaW5nID09PSAncXVhcnRlcicpIHtcbiAgICAgIHN0YXJ0VGltZSA9IERhdGVVdGlsLmdldEVwb2NoVGltZUluU2Vjb25kcyhtb21lbnQoY3VycmVudFRpbWUpLnN1YnRyYWN0KDEsICdxdWFydGVyJykuc3RhcnRPZigncXVhcnRlcicpW3RoaXMuZGF0ZVRpbWVTdHJpbmddLmdldFRpbWUoKSk7XG4gICAgICBlbmRUaW1lID0gRGF0ZVV0aWwuZ2V0RXBvY2hUaW1lSW5TZWNvbmRzKG1vbWVudChjdXJyZW50VGltZSkuZW5kT2YoJ3F1YXJ0ZXInKVt0aGlzLmRhdGVUaW1lU3RyaW5nXS5nZXRUaW1lKCkpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnRUaW1lOiBzdGFydFRpbWUsXG4gICAgICBlbmRUaW1lOiBlbmRUaW1lXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREYXRlUmFuZ2VJblN0cmluZyhzdGFydFRpbWU6IG51bWJlciwgZW5kVGltZTogbnVtYmVyKSB7XG4gICAgbGV0IGRhdGVSYW5nZVN0cmluZztcbiAgICBsZXQgc3RhcnRUaW1lTW9tZW50ID0gbW9tZW50LnV0YyhzdGFydFRpbWUgKiAxMDAwKTtcbiAgICBsZXQgZW5kVGltZU1vbWVudCA9IG1vbWVudC51dGMoZW5kVGltZSAqIDEwMDApO1xuXG4gICAgZGF0ZVJhbmdlU3RyaW5nID0gc3RhcnRUaW1lTW9tZW50LmRhdGUoKSArICcgJyArIHRoaXMubW9udGhMaXN0W3N0YXJ0VGltZU1vbWVudC5tb250aCgpXSArICcgJyArIHN0YXJ0VGltZU1vbWVudC55ZWFyKCkgKyAnIC0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgZW5kVGltZU1vbWVudC5kYXRlKCkgKyAnICcgKyB0aGlzLm1vbnRoTGlzdFtlbmRUaW1lTW9tZW50Lm1vbnRoKCldICsgJyAnICsgZW5kVGltZU1vbWVudC55ZWFyKCk7XG5cbiAgICByZXR1cm4gZGF0ZVJhbmdlU3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGdldFN0YXJ0RW5kVGltZUJ5TnVtYmVyT2ZEYXlzKGN1cnJlbnRUaW1lOiBhbnksIG51bWJlck9mRGF5czogbnVtYmVyKSB7XG4gICAgbGV0IHN0YXJ0RW5kVGltZTogYW55ID0geydzdGFydFRpbWUnOiBudWxsLCAnZW5kVGltZSc6IG51bGx9O1xuICAgIHN0YXJ0RW5kVGltZVsnc3RhcnRUaW1lJ10gPSBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMobW9tZW50KGN1cnJlbnRUaW1lKS5zdWJ0cmFjdChudW1iZXJPZkRheXMsICdkYXknKS5zdGFydE9mKCdkYXknKVt0aGlzLmRhdGVUaW1lU3RyaW5nXS5nZXRUaW1lKCkpO1xuICAgIHN0YXJ0RW5kVGltZVsnZW5kVGltZSddID0gRGF0ZVV0aWwuZ2V0RXBvY2hUaW1lSW5TZWNvbmRzKG1vbWVudChjdXJyZW50VGltZSkuZW5kT2YoJ2RheScpW0RhdGVVdGlsLmRhdGVUaW1lU3RyaW5nXS5nZXRUaW1lKCkpO1xuICAgIHJldHVybiBzdGFydEVuZFRpbWU7XG4gIH0qL1xuXG59XG4iXX0=