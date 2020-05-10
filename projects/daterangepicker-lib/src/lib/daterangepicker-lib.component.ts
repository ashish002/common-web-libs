import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {Constants} from "./constants";
import {DateUtil} from "./util/date.util";

import $ from "jquery";
import moment from 'moment';

import 'daterangepicker';

@Component({
  selector: 'app-daterange-picker',
  templateUrl: './daterangepicker.component.html',
  styleUrls: ['./daterangepicker-lib.component.css']
})
export class DaterangepickerLibComponent implements OnInit, AfterViewInit{

  @Input('id') id: string;
  @Input('enabledPresets') enabledPresets: Array<string>;
  @Input('selectedDuration') selectedDuration:any;
  @Input('timePicker') timePicker: boolean = false;
  @Input('alwaysShowCalendars') alwaysShowCalendar: boolean = true;
  @Input('locale') locale: any;
  @Input('minDate') minDate: any;
  @Input('minDate') maxDate: any;
  @Input('startTime') startTime: number = 0;
  @Input('endTime') endTime: number = 0;
  @Input('enableDateRangeOption') enableDateRangeOption: boolean = true;
  @Input('tooltipMessage') tooltipMessage: string = Constants.EMPTY_STRING;

  @ViewChild('dateRangePicker', {static:false}) dateRangePicker: ElementRef;
  @ViewChild('dateRangePickerInput', {static:false}) dateRangePickerInput: ElementRef;

  @Output() dateRangeChanged: EventEmitter<any>;

  presetsConfig: any;
  enabledPresetsRangeConfig: any;
  timeRange: string = localStorage.getItem('timeRange');
  checkOutsideClickEvent: boolean = false;

  constructor() {
    this.dateRangeChanged = new EventEmitter();
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

  ngOnInit() {
    this.prepareConfigForEnabledPresets();
  }

  ngAfterViewInit() {
    this.initializeDateRangePicker();
  }

  initializeDateRangePicker(minDate?:any, maxDate?:any){
    let start = this.startTime == 0 ? moment.utc().subtract(29, 'days') : moment.utc(this.startTime * 1000);
    let end = this.endTime == 0 ? moment.utc() : moment.utc(this.endTime * 1000);
    let that: any = this;
    let dateRangePickerConfig = {
      alwaysShowCalendars: that.alwaysShowCalendar,
      timePicker: that.timePicker,
      startDate: start,
      endDate: end,
      ranges: that.enabledPresetsRangeConfig
    };
    if(minDate){
      dateRangePickerConfig['minDate'] = minDate;
    }
    if(maxDate){
      dateRangePickerConfig['maxDate'] = maxDate;
    }
    if(this.locale){
      dateRangePickerConfig['locale'] = this.locale;
    }
    $(this.dateRangePicker.nativeElement).daterangepicker(dateRangePickerConfig, this.cb.bind(this)).on('outsideClick.daterangepicker', function(ev, picker) {
      that.checkOutsideClickEvent = true;
      picker.startDate = picker.oldStartDate;
      picker.endDate = picker.oldEndDate;
    });
  }

  cb(start, end) {
    setTimeout(() => {
      if(!this.checkOutsideClickEvent) {
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
      } else {
        this.checkOutsideClickEvent = !this.checkOutsideClickEvent;
      }
    },0);
  }

  prepareConfigForEnabledPresets() {
    let config: any = {};
    for (let preset of this.enabledPresets) {
      config[preset] = this.presetsConfig[preset];
    }
    this.enabledPresetsRangeConfig = config;
  }

  updateDates(start:any, end:any){
    $(this.dateRangePicker.nativeElement).data('daterangepicker').setStartDate(start.format('MM-DD-YYYY'));
    $(this.dateRangePicker.nativeElement).data('daterangepicker').setEndDate(end.format('MM-DD-YYYY'));
    $(this.dateRangePickerInput.nativeElement).html(start.format(DateUtil.DATE_FORMAT_DD_MMM_YYYY) + ' - ' +
      end.format(DateUtil.DATE_FORMAT_DD_MMM_YYYY));
  }

}
