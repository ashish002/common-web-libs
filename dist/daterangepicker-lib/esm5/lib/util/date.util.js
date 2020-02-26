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
export { DateUtil };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS51dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGF0ZXJhbmdlcGlja2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi91dGlsL2RhdGUudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7SUFBQTtJQTJKQSxDQUFDO0lBaElDLDBDQUEwQztJQUMxQywyRkFBMkY7SUFDM0YsdURBQXVEO0lBQ3ZELGdEQUFnRDtJQUNoRCwyRUFBMkU7SUFDM0UsTUFBTTtJQUNOLHNCQUFzQjtJQUN0QixJQUFJO0lBRUosd0NBQXdDO0lBQ3hDLHVGQUF1RjtJQUN2Rix1REFBdUQ7SUFDdkQsZ0RBQWdEO0lBQ2hELHVFQUF1RTtJQUN2RSxNQUFNO0lBQ04sb0JBQW9CO0lBQ3BCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVHLDhCQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQTVCLFVBQTZCLElBQUk7UUFDL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBN0NhLHVCQUFjLEdBQVcsSUFBSSxDQUFDO0lBRTdCLGtCQUFTLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRWxHLHNCQUFhLEdBQVcsSUFBSSxDQUFDO0lBQzdCLHNCQUFhLEdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQztJQUNsQyxvQkFBVyxHQUFXLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEMsbUJBQVUsR0FBVyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztJQUN0QyxxQkFBWSxHQUFXLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztJQUU3QyxnQ0FBdUIsR0FBVyxhQUFhLENBQUM7SUFDaEQsZ0NBQXVCLEdBQVcsYUFBYSxDQUFDO0lBQ2hELG9DQUEyQixHQUFXLGtCQUFrQixDQUFDO0lBQ3pELDJCQUFrQixHQUFXLFFBQVEsQ0FBQztJQUN0QywyQkFBa0IsR0FBVyxRQUFRLENBQUM7SUFDdEMsNEJBQW1CLEdBQVcsU0FBUyxDQUFDO0lBQ3hDLDRCQUFtQixHQUFXLFNBQVMsQ0FBQztJQUN4Qyx3QkFBZSxHQUFXLEtBQUssQ0FBQztJQUVoQyxtQkFBVSxHQUFRO1FBQzlCLElBQUksRUFBRSxNQUFNO1FBQ1osS0FBSyxFQUFFLE9BQU87UUFDZCxPQUFPLEVBQUUsU0FBUztLQUNuQixDQUFDO0lBa0lKLGVBQUM7Q0FBQSxBQTNKRCxJQTJKQztTQTNKWSxRQUFROzs7SUFFbkIsd0JBQTRDOzs7OztJQUU1QyxtQkFBZ0g7O0lBRWhILHVCQUEyQzs7SUFDM0MsdUJBQWdEOztJQUNoRCxxQkFBZ0Q7O0lBQ2hELG9CQUFvRDs7SUFDcEQsc0JBQTJEOztJQUUzRCxpQ0FBOEQ7O0lBQzlELGlDQUE4RDs7SUFDOUQscUNBQXVFOztJQUN2RSw0QkFBb0Q7O0lBQ3BELDRCQUFvRDs7SUFDcEQsNkJBQXNEOztJQUN0RCw2QkFBc0Q7O0lBQ3RELHlCQUE4Qzs7SUFFOUMsb0JBSUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5leHBvcnQgY2xhc3MgRGF0ZVV0aWwge1xuXG4gIHB1YmxpYyBzdGF0aWMgZGF0ZVRpbWVTdHJpbmc6IHN0cmluZyA9ICdfZCc7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgbW9udGhMaXN0ID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4gIHB1YmxpYyBzdGF0aWMgbWlsaXNJblNlY29uZDogbnVtYmVyID0gMTAwMDtcbiAgcHVibGljIHN0YXRpYyBtaWxpc0luTWludXRlOiBudW1iZXIgPSA2MCAqIDEwMDA7XG4gIHB1YmxpYyBzdGF0aWMgbWlsaXNJbkhvdXI6IG51bWJlciA9IDM2MDAgKiAxMDAwO1xuICBwdWJsaWMgc3RhdGljIG1pbGlzSW5EYXk6IG51bWJlciA9IDI0ICogMzYwMCAqIDEwMDA7XG4gIHB1YmxpYyBzdGF0aWMgbWlsaXNJbk1vbnRoOiBudW1iZXIgPSAzMCAqIDI0ICogMzYwMCAqIDEwMDA7XG5cbiAgcHVibGljIHN0YXRpYyBEQVRFX0ZPUk1BVF9ERF9NTU1fWVlZWTogc3RyaW5nID0gJ0REIE1NTSBZWVlZJztcbiAgcHVibGljIHN0YXRpYyBEQVRFX0ZPUk1BVF9kZF9NTU1feXl5eTogc3RyaW5nID0gJ2RkIE1NTSB5eXl5JztcbiAgcHVibGljIHN0YXRpYyBEQVRFX0ZPUk1BVF9FRUVfZGRfTU1NX3l5eXk6IHN0cmluZyA9ICdFRUUsIGRkIE1NTSB5eXl5JztcbiAgcHVibGljIHN0YXRpYyBEQVRFX0ZPUk1BVF9kZF9NTU06IHN0cmluZyA9ICdkZCBNTU0nO1xuICBwdWJsaWMgc3RhdGljIERBVEVfRk9STUFUX0REX01NTTogc3RyaW5nID0gJ0REIE1NTSc7XG4gIHB1YmxpYyBzdGF0aWMgREFURV9GT1JNQVRfaGhfbW1fQTogc3RyaW5nID0gJ2hoOm1tIEEnO1xuICBwdWJsaWMgc3RhdGljIERBVEVfRk9STUFUX2hoX21tX2E6IHN0cmluZyA9ICdoaDptbSBhJztcbiAgcHVibGljIHN0YXRpYyBEQVRFX0ZPUk1BVF9NTU06IHN0cmluZyA9ICdNTU0nO1xuXG4gIHB1YmxpYyBzdGF0aWMgREFURV9SQU5HRTogYW55ID0ge1xuICAgIFdFRUs6ICdXZWVrJyxcbiAgICBNT05USDogJ01vbnRoJyxcbiAgICBRVUFSVEVSOiAnUXVhcnRlcidcbiAgfTtcblxuICAvLyBzdGF0aWMgZ2V0U3RhcnRUaW1lKGR1cmF0aW9uOiBzdHJpbmcpIHtcbiAgLy8gICBsZXQgc3RhcnRUaW1lOiBudW1iZXIgPSBtb21lbnQudXRjKCkuc3RhcnRPZihkdXJhdGlvbilbdGhpcy5kYXRlVGltZVN0cmluZ10uZ2V0VGltZSgpO1xuICAvLyAgIGxldCB0aW1lUmFuZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGltZVJhbmdlJyk7XG4gIC8vICAgaWYgKHRpbWVSYW5nZSAmJiBwYXJzZUludCh0aW1lUmFuZ2UpID4gMCkge1xuICAvLyAgICAgc3RhcnRUaW1lID0gRGF0ZVV0aWwuZ2V0U3RhcnRUaW1lRnJvbVRpbWVSYW5nZSh0aW1lUmFuZ2UsIGR1cmF0aW9uKTtcbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIHN0YXJ0VGltZTtcbiAgLy8gfVxuXG4gIC8vIHN0YXRpYyBnZXRFbmRUaW1lKGR1cmF0aW9uOiBzdHJpbmcpIHtcbiAgLy8gICBsZXQgZW5kVGltZTogbnVtYmVyID0gbW9tZW50LnV0YygpLmVuZE9mKGR1cmF0aW9uKVt0aGlzLmRhdGVUaW1lU3RyaW5nXS5nZXRUaW1lKCk7XG4gIC8vICAgbGV0IHRpbWVSYW5nZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lUmFuZ2UnKTtcbiAgLy8gICBpZiAodGltZVJhbmdlICYmIHBhcnNlSW50KHRpbWVSYW5nZSkgPiAwKSB7XG4gIC8vICAgICBlbmRUaW1lID0gRGF0ZVV0aWwuZ2V0RW5kVGltZUZyb21UaW1lUmFuZ2UodGltZVJhbmdlLCBkdXJhdGlvbik7XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiBlbmRUaW1lO1xuICAvLyB9XG5cbiAgc3RhdGljIGdldEVwb2NoVGltZUluU2Vjb25kcyh0aW1lKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGltZSAvIDEwMDApO1xuICB9XG5cbiAgLypzdGF0aWMgZ2V0U3RhcnRUaW1lRnJvbVRpbWVSYW5nZSh0aW1lUmFuZ2UsIGR1cmF0aW9uKSB7XG4gICAgcmV0dXJuIG1vbWVudC51dGMobW9tZW50LnVuaXgodGltZVJhbmdlKSkuc3RhcnRPZihkdXJhdGlvbilbRGF0ZVV0aWwuZGF0ZVRpbWVTdHJpbmddLmdldFRpbWUoKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRFbmRUaW1lRnJvbVRpbWVSYW5nZSh0aW1lUmFuZ2UsIGR1cmF0aW9uKSB7XG4gICAgcmV0dXJuIG1vbWVudC51dGMobW9tZW50LnVuaXgodGltZVJhbmdlKSkuZW5kT2YoZHVyYXRpb24pW0RhdGVVdGlsLmRhdGVUaW1lU3RyaW5nXS5nZXRUaW1lKCk7XG4gIH1cblxuICAvISoqXG4gICBUaGlzIG1ldGhvZCBjYWxjdWxhdGUgdGhlIHN0YXJ0VGltZSBhbmQgRW5kVGltZSBmcm9tIHRoZSBkYXRlUmFuZ2VTdHJpbmdcbiAgIGkuZSBpZiBkYXRlUmFuZ2VTdHJpbmcgaXMgV2VlayB0aGVuIHN0YXJ0VGltZSB3aWxsIGJlIHN0YXJ0T2ZXZWVrIEFuZFxuICAgRW5kVGltZSB3aWxsIGJlIGVuZE9mV2Vlay5cblxuICAgQHBhcmFtOmRhdGVSYW5nZVN0cmluZzpTdHJpbmdcbiAgIEByZXR1cm46T2JqZWN0XG4gICAqKiEvXG4gIHN0YXRpYyBnZXREYXRlUmFuZ2VGcm9tU2VsZWN0ZWRSYW5nZShkYXRlUmFuZ2VTdHJpbmc6IHN0cmluZykge1xuICAgIGxldCBzdGFydFRpbWU6IG51bWJlcjtcbiAgICBsZXQgZW5kVGltZTogbnVtYmVyO1xuICAgIGxldCBjdXJyZW50VGltZSA9IG1vbWVudC51dGMoKTtcbiAgICBsZXQgdGltZVJhbmdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpbWVSYW5nZScpO1xuICAgIGlmICh0aW1lUmFuZ2UgJiYgcGFyc2VJbnQodGltZVJhbmdlKSA+IDApIHtcbiAgICAgIGN1cnJlbnRUaW1lID0gbW9tZW50LnV0Yyhtb21lbnQudW5peChOdW1iZXIodGltZVJhbmdlKSkpO1xuICAgIH1cblxuICAgIGlmIChkYXRlUmFuZ2VTdHJpbmcgPT09ICdUb2RheScpIHtcbiAgICAgIHN0YXJ0VGltZSA9IERhdGVVdGlsLmdldEVwb2NoVGltZUluU2Vjb25kcyhtb21lbnQoY3VycmVudFRpbWUpLnN0YXJ0T2YoJ2RheScpW3RoaXMuZGF0ZVRpbWVTdHJpbmddLmdldFRpbWUoKSk7XG4gICAgICBlbmRUaW1lID0gRGF0ZVV0aWwuZ2V0RXBvY2hUaW1lSW5TZWNvbmRzKG1vbWVudChjdXJyZW50VGltZSkuZW5kT2YoJ2RheScpW3RoaXMuZGF0ZVRpbWVTdHJpbmddLmdldFRpbWUoKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRhdGVSYW5nZVN0cmluZyA9PT0gJ1dlZWsnKSB7XG4gICAgICBzdGFydFRpbWUgPSBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMobW9tZW50KGN1cnJlbnRUaW1lKS5zdGFydE9mKCd3ZWVrJylbdGhpcy5kYXRlVGltZVN0cmluZ10uZ2V0VGltZSgpKTtcbiAgICAgIGVuZFRpbWUgPSBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMobW9tZW50KGN1cnJlbnRUaW1lKS5lbmRPZignd2VlaycpW3RoaXMuZGF0ZVRpbWVTdHJpbmddLmdldFRpbWUoKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRhdGVSYW5nZVN0cmluZyA9PT0gJ1RoaXMgV2VlaycpIHtcbiAgICAgIGlmIChtb21lbnQoY3VycmVudFRpbWUpLnN0YXJ0T2YoJ3dlZWsnKS5kYXkoKSA9PSAwKSB7XG4gICAgICAgIC8vIGNoZWNrIGlmIHN0YXJ0IGRheSBvZiB3ZWVrIGlzIHN1bmRheSB0aGVuIGNoYW5nZSBpdCBtb25kYXkgYXMgcGVyIGlzbyB3ZWVrXG4gICAgICAgIHN0YXJ0VGltZSA9IERhdGVVdGlsLmdldEVwb2NoVGltZUluU2Vjb25kcyhtb21lbnQoY3VycmVudFRpbWUpLnN0YXJ0T2YoJ3dlZWsnKS5hZGQoMSwgJ2RheScpW3RoaXMuZGF0ZVRpbWVTdHJpbmddLmdldFRpbWUoKSk7XG4gICAgICAgIGVuZFRpbWUgPSBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMobW9tZW50KGN1cnJlbnRUaW1lKS5lbmRPZignd2VlaycpLmFkZCgxLCAnZGF5JylbdGhpcy5kYXRlVGltZVN0cmluZ10uZ2V0VGltZSgpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzdGFydFRpbWUgPSBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMobW9tZW50KGN1cnJlbnRUaW1lKS5zdGFydE9mKCd3ZWVrJylbdGhpcy5kYXRlVGltZVN0cmluZ10uZ2V0VGltZSgpKTtcbiAgICAgICAgZW5kVGltZSA9IERhdGVVdGlsLmdldEVwb2NoVGltZUluU2Vjb25kcyhtb21lbnQoY3VycmVudFRpbWUpLmVuZE9mKCd3ZWVrJylbdGhpcy5kYXRlVGltZVN0cmluZ10uZ2V0VGltZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZGF0ZVJhbmdlU3RyaW5nID09PSAnVGhpcyBNb250aCcpIHtcbiAgICAgIHN0YXJ0VGltZSA9IERhdGVVdGlsLmdldEVwb2NoVGltZUluU2Vjb25kcyhtb21lbnQoY3VycmVudFRpbWUpLnN0YXJ0T2YoJ21vbnRoJylbdGhpcy5kYXRlVGltZVN0cmluZ10uZ2V0VGltZSgpKTtcbiAgICAgIGVuZFRpbWUgPSBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMobW9tZW50KGN1cnJlbnRUaW1lKS5lbmRPZignbW9udGgnKVt0aGlzLmRhdGVUaW1lU3RyaW5nXS5nZXRUaW1lKCkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChkYXRlUmFuZ2VTdHJpbmcgPT09ICdMYXN0IFNpeCBNb250aHMnKSB7XG4gICAgICBzdGFydFRpbWUgPSBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMobW9tZW50KGN1cnJlbnRUaW1lKS5zdWJ0cmFjdCg1LCAnbW9udGgnKS5zdGFydE9mKCdtb250aCcpW3RoaXMuZGF0ZVRpbWVTdHJpbmddLmdldFRpbWUoKSk7XG4gICAgICBlbmRUaW1lID0gRGF0ZVV0aWwuZ2V0RXBvY2hUaW1lSW5TZWNvbmRzKG1vbWVudChjdXJyZW50VGltZSkuZW5kT2YoJ21vbnRoJylbdGhpcy5kYXRlVGltZVN0cmluZ10uZ2V0VGltZSgpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZGF0ZVJhbmdlU3RyaW5nID09PSAnTGFzdCBNb250aCcpIHtcbiAgICAgIHN0YXJ0VGltZSA9IERhdGVVdGlsLmdldEVwb2NoVGltZUluU2Vjb25kcyhtb21lbnQoY3VycmVudFRpbWUpLnN1YnRyYWN0KDEsICdtb250aCcpLnN0YXJ0T2YoJ21vbnRoJylbdGhpcy5kYXRlVGltZVN0cmluZ10uZ2V0VGltZSgpKTtcbiAgICAgIGVuZFRpbWUgPSBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMobW9tZW50KGN1cnJlbnRUaW1lKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5lbmRPZignbW9udGgnKVt0aGlzLmRhdGVUaW1lU3RyaW5nXS5nZXRUaW1lKCkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChkYXRlUmFuZ2VTdHJpbmcgPT09ICdMYXN0IFF1YXJ0ZXInKSB7XG4gICAgICBzdGFydFRpbWUgPSBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMobW9tZW50KGN1cnJlbnRUaW1lKS5zdWJ0cmFjdCgxLCAncXVhcnRlcicpLnN0YXJ0T2YoJ3F1YXJ0ZXInKVt0aGlzLmRhdGVUaW1lU3RyaW5nXS5nZXRUaW1lKCkpO1xuICAgICAgZW5kVGltZSA9IERhdGVVdGlsLmdldEVwb2NoVGltZUluU2Vjb25kcyhtb21lbnQoY3VycmVudFRpbWUpLnN1YnRyYWN0KDEsICdxdWFydGVyJykuZW5kT2YoJ3F1YXJ0ZXInKVt0aGlzLmRhdGVUaW1lU3RyaW5nXS5nZXRUaW1lKCkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChkYXRlUmFuZ2VTdHJpbmcgPT09ICdMYXN0IFllYXInKSB7XG4gICAgICBzdGFydFRpbWUgPSBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMobW9tZW50KGN1cnJlbnRUaW1lKS5zdWJ0cmFjdCgxLCAneWVhcicpLnN0YXJ0T2YoJ3llYXInKVt0aGlzLmRhdGVUaW1lU3RyaW5nXS5nZXRUaW1lKCkpO1xuICAgICAgZW5kVGltZSA9IERhdGVVdGlsLmdldEVwb2NoVGltZUluU2Vjb25kcyhtb21lbnQoY3VycmVudFRpbWUpLnN1YnRyYWN0KDEsICd5ZWFyJykuZW5kT2YoJ3llYXInKVt0aGlzLmRhdGVUaW1lU3RyaW5nXS5nZXRUaW1lKCkpO1xuICAgIH1cblxuICAgIC8vIFRoaXMgdi9zIExhc3RcbiAgICBlbHNlIGlmIChkYXRlUmFuZ2VTdHJpbmcgPT09ICdkYXknKSB7XG4gICAgICBzdGFydFRpbWUgPSBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMobW9tZW50KGN1cnJlbnRUaW1lKS5zdWJ0cmFjdCgxLCAnZGF5Jykuc3RhcnRPZignZGF5JylbdGhpcy5kYXRlVGltZVN0cmluZ10uZ2V0VGltZSgpKTtcbiAgICAgIGVuZFRpbWUgPSBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMobW9tZW50KGN1cnJlbnRUaW1lKS5lbmRPZignZGF5JylbdGhpcy5kYXRlVGltZVN0cmluZ10uZ2V0VGltZSgpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZGF0ZVJhbmdlU3RyaW5nID09PSAnd2VlaycpIHtcbiAgICAgIHN0YXJ0VGltZSA9IERhdGVVdGlsLmdldEVwb2NoVGltZUluU2Vjb25kcyhtb21lbnQoY3VycmVudFRpbWUpLnN1YnRyYWN0KDEsICd3ZWVrJykuc3RhcnRPZignd2VlaycpW3RoaXMuZGF0ZVRpbWVTdHJpbmddLmdldFRpbWUoKSk7XG4gICAgICBlbmRUaW1lID0gRGF0ZVV0aWwuZ2V0RXBvY2hUaW1lSW5TZWNvbmRzKG1vbWVudChjdXJyZW50VGltZSkuZW5kT2YoJ3dlZWsnKVt0aGlzLmRhdGVUaW1lU3RyaW5nXS5nZXRUaW1lKCkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChkYXRlUmFuZ2VTdHJpbmcgPT09ICdtb250aCcpIHtcbiAgICAgIHN0YXJ0VGltZSA9IERhdGVVdGlsLmdldEVwb2NoVGltZUluU2Vjb25kcyhtb21lbnQoY3VycmVudFRpbWUpLnN1YnRyYWN0KDEsICdtb250aCcpLnN0YXJ0T2YoJ21vbnRoJylbdGhpcy5kYXRlVGltZVN0cmluZ10uZ2V0VGltZSgpKTtcbiAgICAgIGVuZFRpbWUgPSBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMobW9tZW50KGN1cnJlbnRUaW1lKS5lbmRPZignbW9udGgnKVt0aGlzLmRhdGVUaW1lU3RyaW5nXS5nZXRUaW1lKCkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChkYXRlUmFuZ2VTdHJpbmcgPT09ICdxdWFydGVyJykge1xuICAgICAgc3RhcnRUaW1lID0gRGF0ZVV0aWwuZ2V0RXBvY2hUaW1lSW5TZWNvbmRzKG1vbWVudChjdXJyZW50VGltZSkuc3VidHJhY3QoMSwgJ3F1YXJ0ZXInKS5zdGFydE9mKCdxdWFydGVyJylbdGhpcy5kYXRlVGltZVN0cmluZ10uZ2V0VGltZSgpKTtcbiAgICAgIGVuZFRpbWUgPSBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMobW9tZW50KGN1cnJlbnRUaW1lKS5lbmRPZigncXVhcnRlcicpW3RoaXMuZGF0ZVRpbWVTdHJpbmddLmdldFRpbWUoKSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBzdGFydFRpbWU6IHN0YXJ0VGltZSxcbiAgICAgIGVuZFRpbWU6IGVuZFRpbWVcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldERhdGVSYW5nZUluU3RyaW5nKHN0YXJ0VGltZTogbnVtYmVyLCBlbmRUaW1lOiBudW1iZXIpIHtcbiAgICBsZXQgZGF0ZVJhbmdlU3RyaW5nO1xuICAgIGxldCBzdGFydFRpbWVNb21lbnQgPSBtb21lbnQudXRjKHN0YXJ0VGltZSAqIDEwMDApO1xuICAgIGxldCBlbmRUaW1lTW9tZW50ID0gbW9tZW50LnV0YyhlbmRUaW1lICogMTAwMCk7XG5cbiAgICBkYXRlUmFuZ2VTdHJpbmcgPSBzdGFydFRpbWVNb21lbnQuZGF0ZSgpICsgJyAnICsgdGhpcy5tb250aExpc3Rbc3RhcnRUaW1lTW9tZW50Lm1vbnRoKCldICsgJyAnICsgc3RhcnRUaW1lTW9tZW50LnllYXIoKSArICcgLSAnICtcbiAgICAgICAgICAgICAgICAgICAgICBlbmRUaW1lTW9tZW50LmRhdGUoKSArICcgJyArIHRoaXMubW9udGhMaXN0W2VuZFRpbWVNb21lbnQubW9udGgoKV0gKyAnICcgKyBlbmRUaW1lTW9tZW50LnllYXIoKTtcblxuICAgIHJldHVybiBkYXRlUmFuZ2VTdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZ2V0U3RhcnRFbmRUaW1lQnlOdW1iZXJPZkRheXMoY3VycmVudFRpbWU6IGFueSwgbnVtYmVyT2ZEYXlzOiBudW1iZXIpIHtcbiAgICBsZXQgc3RhcnRFbmRUaW1lOiBhbnkgPSB7J3N0YXJ0VGltZSc6IG51bGwsICdlbmRUaW1lJzogbnVsbH07XG4gICAgc3RhcnRFbmRUaW1lWydzdGFydFRpbWUnXSA9IERhdGVVdGlsLmdldEVwb2NoVGltZUluU2Vjb25kcyhtb21lbnQoY3VycmVudFRpbWUpLnN1YnRyYWN0KG51bWJlck9mRGF5cywgJ2RheScpLnN0YXJ0T2YoJ2RheScpW3RoaXMuZGF0ZVRpbWVTdHJpbmddLmdldFRpbWUoKSk7XG4gICAgc3RhcnRFbmRUaW1lWydlbmRUaW1lJ10gPSBEYXRlVXRpbC5nZXRFcG9jaFRpbWVJblNlY29uZHMobW9tZW50KGN1cnJlbnRUaW1lKS5lbmRPZignZGF5JylbRGF0ZVV0aWwuZGF0ZVRpbWVTdHJpbmddLmdldFRpbWUoKSk7XG4gICAgcmV0dXJuIHN0YXJ0RW5kVGltZTtcbiAgfSovXG5cbn1cbiJdfQ==