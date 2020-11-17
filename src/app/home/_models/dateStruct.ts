export class DateStruct {
  year: number;
  month: number;
  day: number;

  constructor(options?) {
    if (options) { Object.assign(<any>this, options); }
  }
}
