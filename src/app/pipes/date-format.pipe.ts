import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe extends DatePipe implements PipeTransform {


  transform(incomingVal: any, format?: string, args?: any): any {
    if (incomingVal === 'undefined') {
      return null;
    }
    return super.transform(this.parseDate(incomingVal), format);
  }


  parseDate(dateIncoming: any): Date | null {
    /**  2019-10-10T18:28:43 UTC */
    if (dateIncoming  && (typeof dateIncoming === 'string') && dateIncoming.length > 10) {
      if ((dateIncoming.indexOf('UTC') > -1) && dateIncoming.length >= 19) {
        const dateString = dateIncoming.substring(0, 10);
        let timeArray = [];
        if (dateIncoming.length >= 19 && (dateIncoming.indexOf('T') > -1)) {
          const timeString = dateIncoming.substring(dateIncoming.indexOf('T') + 1, dateIncoming.indexOf('T') + 8);
          // console.log('Time string'+ timeString );
          timeArray = timeString.split(':');
        }
        const dateArray = dateString.split('-');

        const d = new Date();
        d.setUTCFullYear(parseInt(dateArray[0], 10));
        d.setUTCMonth(parseInt(dateArray[1], 10) - 1);
        d.setUTCDate(parseInt(dateArray[2], 10));
        d.setUTCHours(parseInt(timeArray[0], 10));
        d.setUTCMinutes(parseInt(timeArray[1], 10));
        d.setUTCSeconds(parseInt(timeArray[2], 10));
        return d;
      } else {
        return new Date(dateIncoming);
      }
    }
    const timestamp = typeof dateIncoming === 'number' ? dateIncoming : Date.parse(dateIncoming);
    return isNaN(timestamp) ? null : new Date(timestamp);

  }

}
