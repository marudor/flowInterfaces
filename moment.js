type MomentOptions = {
  y?: Number|string,
  year?: Number|string,
  years?: Number|string,
  M?: Number|string,
  month?: Number|string,
  months?: Number|string,
  d?: Number|string,
  day?: Number|string,
  days?: Number|string,
  date?: Number|string,
  h?: Number|string,
  hour?: Number|string,
  hours?: Number|string,
  m?: Number|string,
  minute?: Number|string,
  minutes?: Number|string,
  s?: Number|string,
  second?: Number|string,
  seconds?: Number|string,
  ms?: Number|string,
  millisecond?: Number|string,
  milliseconds?: Number|string,
};

type MomentObject = {
  years: Number,
  months: Number,
  date: Number,
  hours: Number,
  minutes: Number,
  seconds: Number,
  milliseconds: Number,
};

type MomentCreationData = {
  input: string,
  format: string,
  locale: Object,
  isUTC: bool,
  strict: bool,
};

type CalendarFormats = {
  sameDay?: string,
  nextDay?: string,
  nextWeek?: string,
  lastDay?: string,
  lastWeek?: string,
  sameElse?: string,
};

declare module 'moment' {
  declare class LocaleData {
    months(moment: Moment): string;
    monthsShort(moment: Moment): string;
    monthsParse(month: string): Number;
    weekdays(moment: Moment): string;
    weekdaysShort(moment: Moment): string;
    weekdaysMin(moment: Moment): string;
    weekdaysParse(weekDay: string): Number;
    longDateFormat(dateFormat: string): string;
    isPM(date: string): bool;
    meridiem(hours: Number, minutes: Number, isLower: bool): string;
    calendar(key: 'sameDay'|'nextDay'|'lastDay'|'nextWeek'|'prevWeek'|'sameElse', moment: Moment): string;
    relativeTime(number: Number, withoutSuffix: bool, key: 's'|'m'|'mm'|'h'|'hh'|'d'|'dd'|'M'|'MM'|'y'|'yy', isFuture: bool): string;
    pastFuture(diff: any, relTime: string): string;
    ordinal(number: Number): string;
    preparse(str: string): any;
    postformat(str: string): any;
    week(moment: Moment): string;
    invalidDate(): string;
    firstDayOfWeek(): number;
    firstDayOfYear(): number;
  }
  declare class MomentDuration {
    humanize(suffix?: bool): string;
    milliseconds(): Number;
    asMilliseconds(): Number;
    seconds(): Number;
    asSeconds(): Number;
    minutes(): Number;
    asMinutes(): Number;
    hours(): Number;
    asHours(): Number;
    days(): Number;
    asDays(): Number;
    months(): Number;
    asMonths(): Number;
    years(): Number;
    asYears(): Number;
    add(value: Number, unit?: string): MomentDuration;
    add(duration: MomentDuration): MomentDuration;
    add(object: Object): MomentDuration;
    subtract(value: Number, unit?: string): MomentDuration;
    subtract(duration: MomentDuration): MomentDuration;
    subtract(object: Object): MomentDuration;
    as(unit: string): Number;
    get(unit: string): Number;
    toJSON(): string;
  }
  declare class Moment {
    static (string?: string, format?: string|Array<string>, locale?: string, strict?: bool): Moment;
    static (options: MomentOptions): Moment;
    static (millseconds: Number): Moment;
    static (date: Date): Moment;
    static (numbers: Array<number>): Moment;
    static (moment: Moment): Moment;
    static unix(seconds: Number): Moment;
    static utc(): Moment;
    static utc(number: Number|Array<Number>): Moment;
    static utc(str: string, str2?: string|Array<string>, str3?: string): Moment;
    static utc(moment: Moment): Moment;
    static utc(date: Date): Moment;
    static parseZone(rawDate: string): Moment;
    isValid(): bool;
    invalidAt(): 0|1|2|3|4|5|6;
    creationData(): MomentCreationData;
    millisecond(number: Number): void;
    milliseconds(number: Number): void;
    millisecond(): Number;
    milliseconds(): Number;
    second(number: Number): void;
    seconds(number: Number): void;
    second(): Number;
    seconds(): Number;
    minute(number: Number): void;
    minutes(number: Number): void;
    minute(): Number;
    minutes(): Number;
    hour(number: Number): void;
    hours(number: Number): void;
    hour(): Number;
    hours(): Number;
    date(number: Number): void;
    dates(number: Number): void;
    date(): Number;
    dates(): Number;
    day(day: Number|string): void;
    days(day: Number|string): void;
    day(): Number;
    days(): Number;
    weekday(number: Number): void;
    weekday(): Number;
    isoWeekday(number: Number): void;
    isoWeekday(): Number;
    dayOfYear(number: Number): void;
    dayOfYear(): Number;
    week(number: Number): void;
    weeks(number: Number): void;
    week(): Number;
    weeks(): Number;
    isoWeek(number: Number): void;
    isoWeeks(number: Number): void;
    isoWeek(): Number;
    isoWeeks(): Number;
    month(number: Number): void;
    months(number: Number): void;
    month(): Number;
    months(): Number;
    quarter(number: Number): void;
    quarter(): Number;
    year(number: Number): void;
    years(number: Number): void;
    year(): Number;
    years(): Number;
    weekYear(number: Number): void;
    weekYear(): Number;
    isoWeekYear(number: Number): void;
    isoWeekYear(): Number;
    weeksInYear():  Number;
    isoWeeksInYear(): Number;
    get(string: string): number;
    set(unit: string, value: Number): void;
    set(options: { unit: string, value: Number }): void;
    static max(...dates: Array<Moment>): Moment;
    static min(...dates: Array<Moment>): Moment;
    add(value: Number, unit: string): Moment;
    add(duration: MomentDuration): Moment;
    add(object: Object): Moment;
    subtract(value: Number, unit: string): Moment;
    subtract(duration: MomentDuration): Moment;
    subtract(object: Object): Moment;
    startOf(unit: string): void;
    endOf(unit: string): void;
    local(): void;
    utc(): void;
    utcOffset(offset?: Number|string): void;
    format(format?: string): string;
    fromNow(removeSuffix?: bool): string;
    from(value: Moment|string|Number|Date|Array<Number>, removePrefix?: bool): string;
    toNow(removePrefix?: bool): string;
    to(value: Moment|string|Number|Date|Array<Number>, removePrefix?: bool): string;
    calendar(refTime?: any, formats?: CalendarFormats): void;
    diff(date: Moment|string|Number|Date|Array<Number>, format?: string, floating?: bool): Number;
    valueOf(): number;
    unix(): Number;
    daysInMonth(): Number;
    toDate(): Date;
    toArray(): Array<Number>;
    toJSON(): string;
    toISOString(): string;
    toObject(): MomentObject;
    isBefore(date: Moment|string|Number|Date|Array<Number>): bool;
    isSame(date: Moment|string|Number|Date|Array<Number>): bool;
    isAfter(date: Moment|string|Number|Date|Array<Number>): bool;
    isSameOrBefore(date: Moment|string|Number|Date|Array<Number>): bool;
    isSameOrAfter(date: Moment|string|Number|Date|Array<Number>): bool;
    isBetween(date: Moment|string|Number|Date|Array<Number>): bool;
    isDST(): bool;
    isDSTShifted(): bool;
    isLeapYear(): bool;
    static isMoment(obj: any): bool;
    static isDatE(obj: any): bool;
    static locale(locale: string, localeData?: Object): void;
    static locale(locales: Array<string>): void;
    locale(locale: string, customization?: Object|null): void;
    locale(): string;
    static months(): Array<string>;
    static monthShort(): Array<string>;
    static weekdays(): Array<string>;
    static weekdaysShort(): Array<string>;
    static weekdaysMin(): Array<string>;
    static months(): string;
    static monthShort(): string;
    static weekdays(): string;
    static weekdaysShort(): string;
    static weekdaysMin(): string;
    static localeData(key?: string): LocaleData;
    static duration(value: Number, unit: string): MomentDuration;
    static duration(object: Object): MomentDuration;
    static duration(string: string): MomentDuration;
    static isDuration(obj: any): bool;
    static normalizeUnits(unit: string): string;
    static invaid(object: any): Moment;
  }
  declare var exports: typeof Moment;
}
