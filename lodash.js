type Support = {
  enumErrorProps: bool,
  enumPrototypes: bool,
  nonEnumShadows: bool,
  ownLast: bool,
  spliceObjects: bool,
  unindexedChars: bool,
};
type TemplateSettings = {
  escape?: RegExp,
  evaluate?: RegExp,
  imports?: Object,
  interpolate?: RegExp,
  variable?: string,
};

type TruncateOptions = {
  length?: number,
  omission?: string,
  separator?: RegExp|string,
};

type DebounceOptions = {
  leading?: bool,
  maxWait?: number,
  trailing?: bool,
};

type ThrottleOptions = {
  leading?: bool,
  trailing?: bool,
};

type RecursiveArray<T>= Array<T|Array<T>>;
type NestedArray<T> = Array<Array<T>>;

type OPredicate = ((value: any, key: string, object: *) => bool)|Object|string;
type _OIteratee<T> = ((value: any, key: string, object: *) => T)|Object|string;
type OIteratee = _OIteratee<any>;

type Predicate<T> = ((value: T, index: number, array: Array<T>) => bool)|Object|string;
type _Iteratee<T> = (item: T, index: number, array: Array<T>) => mixed;
type Iteratee<T> = _Iteratee<T>|Object|string;
type Iteratee2<T, U> = ((item: T, index: number, array: Array<T>) => U)|Object|string;
type Comparator<T> = (arr: Array<T>, arr2: Array<T>) => bool;

declare module 'lodash' {
  declare class lodashArray {
    static chunk<T>(array: Array<T>, size?: number): Array<T>;
    static compact<T>(array: Array<T|false|null|0|''>): Array<T>;
    static difference<T>(array: Array<T>, values: Array<T>): Array<T>;
    static drop<T>(array: Array<T>, n?: number): Array<T>;
    static dropRight<T>(array: Array<T>, n?: number): Array<T>;
    static dropRightWhile<T>(array: Array<T>, predicate?: Predicate<T>): Array<T>;
    static dropWhile<T>(array: Array<T>, predicate?: Predicate<T>): Array<T>;
    static fill<T, U>(array: Array<T>, value: U, start?: number, end?: number): Array<T|U>;
    static findIndex<T>(array: Array<T>, predicate?: Predicate<T>): number;
    static findLastIndex<T>(array: Array<T>, predicate?: Predicate<T>): number;
    static flatMap<T, U>(array: Array<T>, iteratee?: Iteratee2<T, U>): Array<U>;
    static flatten<T>(array: RecursiveArray<T>): RecursiveArray<T>;
    static flattenDeep<T>(array: RecursiveArray<T>): Array<T>;
    static fromPairs<T>(pairs: Array<T>): Object;
    static head<T>(array: Array<T>): T;
    // Alias
    static first<T>(array: Array<T>): T;
    static indexOf<T>(array: Array<T>, value: T, fromIndex?: number): number;
    static initial<T>(array: Array<T>): Array<T>;
    static intersection<T>(...arrays: NestedArray<T>): Array<T>;
    //Workaround until (...parameter: T, parameter2: U) works
    static intersectionBy<T>(a1: Array<T>, iteratee?: Iteratee<T>): Array<T>;
    static intersectionBy<T>(a1: Array<T>, a2: Array<T>, iteratee?: Iteratee<T>): Array<T>;
    static intersectionBy<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, iteratee?: Iteratee<T>): Array<T>;
    static intersectionBy<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, a4: Array<T>, iteratee?: Iteratee<T>): Array<T>;
    //Workaround until (...parameter: T, parameter2: U) works
    static intersectionWith<T>(a1: Array<T>, comparator: Comparator<T>): Array<T>;
    static intersectionWith<T>(a1: Array<T>, a2: Array<T>, comparator: Comparator<T>): Array<T>;
    static intersectionWith<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, comparator: Comparator<T>): Array<T>;
    static intersectionWith<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, a4: Array<T>, comparator: Comparator<T>): Array<T>;

    static join<T>(array: Array<T>, separator?: string): string;
    static last<T>(array: Array<T>): T;
    static lastIndexOf<T>(array: Array<T>, value: T, fromIndex?: number): number;
    static pull<T>(array: Array<T>, ...values?: Array<T>): Array<T>;
    static pullAll<T>(array: Array<T>, values: Array<T>): Array<T>;
    static pullAllBy<T>(array: Array<T>, values: Array<T>, iteratee?: Iteratee<T>): Array<T>;
    static pullAt<T>(array: Array<T>, ...indexed?: Array<number>): Array<T>;
    static pullAt<T>(array: Array<T>, indexed?: Array<number>): Array<T>;
    static remove<T>(array: Array<T>, predicate?: Predicate<T>): Array<T>;
    static slice<T>(array: Array<T>, start?: number, end?: number): Array<T>;
    static sortedIndex<T>(array: Array<T>, value: T): number;
    static sortedIndexBy<T>(array: Array<T>, value: T, iteratee?: Iteratee<T>): number;
    static sortedIndexOf<T>(array: Array<T>, value: T): number;
    static sortedLastIndex<T>(array: Array<T>, value: T): number;
    static sortedLastIndexBy<T>(array: Array<T>, value: T, iteratee?: Iteratee<T>): number;
    static sortedLastIndexOf<T>(array: Array<T>, value: T): number;
    static sortedUniq<T>(array: Array<T>): Array<T>;
    static sortedUniqBy<T>(array: Array<T>, iteratee?: (value: T) => mixed): Array<T>;
    static tail<T>(array: Array<T>): Array<T>;
    static take<T>(array: Array<T>, n?: number): Array<T>;
    static takeRight<T>(array: Array<T>, n?: number): Array<T>;
    static takeRightWhile<T>(array: Array<T>, predicate?: Predicate<T>): Array<T>;
    static takeWhile<T>(array: Array<T>, predicate?: Predicate<T>): Array<T>;
    static union<T>(array?: Array<T>): Array<T>;
    static unionBy<T>(array?: Array<T>, iteratee?: Iteratee<T>): Array<T>;
    //Workaround until (...parameter: T, parameter2: U) works
    static unionWith<T>(a1: Array<T>, comparator?: Comparator<T>): Array<T>;
    static unionWith<T>(a1: Array<T>, a2: Array<T>, comparator?: Comparator<T>): Array<T>;
    static unionWith<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, comparator?: Comparator<T>): Array<T>;
    static unionWith<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, a4: Array<T>, comparator?: Comparator<T>): Array<T>;

    static uniq<T>(array: Array<T>): Array<T>;
    static uniqBy<T>(array: Array<T>, iteratee?: Iteratee<T>): Array<T>;
    static uniqWith<T>(array: Array<T>, comparator?: Comparator<T>): Array<T>;
    static unzip<T>(array: Array<T>): Array<T>;
    static unzipWith<T>(array: Array<T>, iteratee?: Iteratee<T>): Array<T>;
    static without<T>(array: Array<T>, ...values?: Array<T>): Array<T>;
    static xor<T>(...array: NestedArray<T>): Array<T>;
    //Workaround until (...parameter: T, parameter2: U) works
    static xorBy<T>(a1: Array<T>, iteratee?: Iteratee<T>): Array<T>;
    static xorBy<T>(a1: Array<T>, a2: Array<T>, iteratee?: Iteratee<T>): Array<T>;
    static xorBy<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, iteratee?: Iteratee<T>): Array<T>;
    static xorBy<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, a4: Array<T>, iteratee?: Iteratee<T>): Array<T>;
    //Workaround until (...parameter: T, parameter2: U) works
    static xorWith<T>(a1: NestedArray<T>, comparator?: Comparator<T>): Array<T>;
    static xorWith<T>(a1: NestedArray<T>, a2: NestedArray<T>, comparator?: Comparator<T>): Array<T>;
    static xorWith<T>(a1: NestedArray<T>, a2: NestedArray<T>, a3: NestedArray<T>, comparator?: Comparator<T>): Array<T>;
    static xorWith<T>(a1: NestedArray<T>, a2: NestedArray<T>, a3: NestedArray<T>, a4: NestedArray<T>, comparator?: Comparator<T>): Array<T>;

    static zip<T>(...arrays: NestedArray<T>): NestedArray<T>;
    static zipObject(props?: Array<any>, values?: Array<any>): Object;
    //Workaround until (...parameter: T, parameter2: U) works
    static zipWith<T>(a1: NestedArray<T>, iteratee?: Iteratee<T>): Array<T>;
    static zipWith<T>(a1: NestedArray<T>, a2: NestedArray<T>, iteratee?: Iteratee<T>): Array<T>;
    static zipWith<T>(a1: NestedArray<T>, a2: NestedArray<T>, a3: NestedArray<T>, iteratee?: Iteratee<T>): Array<T>;
    static zipWith<T>(a1: NestedArray<T>, a2: NestedArray<T>, a3: NestedArray<T>, a4: NestedArray<T>, iteratee?: Iteratee<T>): Array<T>;
  }
  declare class lodashCollection extends lodashArray {
    static countBy<T>(array: Array<T>, iteratee?: Iteratee<T>): Object;
    static countBy(object: Object, iteratee?: OIteratee): Object;

    static every<T>(array: Array<T>, iteratee?: Iteratee<T>): bool;
    static every(object: Object, iteratee?: OIteratee): bool;

    static filter<T>(array: Array<T>, predicate?: Predicate<T>): Array<T>;
    static filter(object: Object, predicate?: OPredicate): Array<any>;

    static find<T>(array: Array<T>, predicate?: Predicate<T>): T;
    static find(object: Object, predicate?: OPredicate): any;

    static findLast<T>(array: Array<T>, predicate?: Predicate<T>): T;
    static findLast(object: Object, predicate?: OPredicate): any;

    static forEach<T>(array: Array<T>, iteratee?: Iteratee<T>): Array<T>;
    static forEach<T>(object: T, iteratee?: OIteratee): T;
    //Alias
    static each<T>(array: Array<T>, iteratee?: Iteratee<T>): Array<T>;
    static each<T>(object: T, iteratee?: OIteratee): T;

    static forEachRight<T>(array: Array<T>, iteratee?: Iteratee<T>): Array<T>;
    static forEachRight<T>(object: T, iteratee?: OIteratee): T;
    //Alias
    static eachRight<T>(array: Array<T>, iteratee?: Iteratee<T>): Array<T>;
    static eachRight<T>(object: T, iteratee?: OIteratee): T;

    static groupBy<T>(array: Array<T>, iteratee?: Iteratee<T>): Object;
    static groupBy(object: Object, iteratee?: OIteratee): Object;

    static includes<T>(array: Array<T>, value: T, fromIndex?: number): bool;
    static includes(object: Object, value: any, fromIndex?: number): bool;
    static uncludes(str: string, value: string, fromIndex?: number): bool;

    static invokeMap<T>(array: Array<T>, path: ((value: T) => Array<string>|string)|Array<string>|string, ...args?: Array<any>): Array<any>;
    static invokeMap(object: Object, path: ((value: any) => Array<string>|string)|Array<string>|string, ...args?: Array<any>): Array<any>;

    static keyBy<T>(array: Array<T>, iteratee?: Iteratee<T>): Object;
    static keyBy(object: Object, iteratee?: OIteratee): Object;

    static map<T, U>(array: Array<T>, iteratee?: Iteratee2<T, U>): Array<U>;
    static map<T>(object: Object, iteratee?: _OIteratee<T>): Array<T>;

    static orderBy<T>(array: Array<T>, iteratees?: Array<Iteratee<T>>, orders?: Array<'asc'|'desc'>): Array<T>;
    static orderBy(object: Object, iteratees?: Array<OIteratee>, orders?: Array<'asc'|'desc'>): Array<any>;

    static partition<T>(array: Array<T>, predicate?: Predicate<T>): NestedArray<T>;
    static partition(object: Object, predicate?: OPredicate): NestedArray<any>;

    static reduce<T, U>(array: Array<T>, iteratee?: (accumulator: U, value: T, index: number, array: Array<T>) => U, accumulator?: U): U;
    static reduce<T, U>(object: T, iteratee?: (accumulator: U, value: any, key: string, object: T) => U, accumulator?: U): U;

    static reduceRight<T, U>(array: Array<T>, iteratee?: (accumulator: U, value: T, index: number, array: Array<T>) => U, accumulator?: U): U;
    static reduceRight<T, U>(object: T, iteratee?: (accumulator: U, value: any, key: string, object: T) => U, accumulator?: U): U;

    static reject<T>(array: Array<T>, predicate?: Predicate<T>): Array<T>;
    static reject(object: Object, predicate?: OPredicate): Array<any>;

    static sample<T>(array: Array<T>): T;
    static sample(object: Object): any;

    static sampleSize<T>(array: Array<T>, n?: number): Array<T>;
    static sampleSize(object: Object, n?: number): Array<any>;

    static shuffle<T>(array: Array<T>): Array<T>;
    static shuffle(object: Object): Array<any>;

    static size(collection: Array<any>|Object): number;

    static some<T>(array: Array<T>, predicate?: Predicate<T>): bool;
    static some(object: Object, predicate?: OPredicate): bool;

    static sortBy<T>(array: Array<T>, ...iteratees?: Array<Iteratee<T>>): Array<T>;
    static sortBy<T>(array: Array<T>, iteratees?: Array<Iteratee<T>>): Array<T>;
    static sortBy(object: Object, ...iteratees?: Array<OIteratee>): Array<any>;
    static sortBy(object: Object, iteratees?: Array<OIteratee>): Array<any>;
  }
  declare class lodashDate extends lodashCollection {
    static now(): number;
  }
  declare class lodashFunction extends lodashDate {
    static after(n: number, function: Function): Function;
    static ary(func: Function, n?: number): Function;
    static before(n: number, function: Function): Function;
    static bind(func: Function, thisArg: any, ...partials: Array<any>): Function;
    static bindKey(obj: Object, key: string, ...partials: Array<any>): Function;
    static curry(func: Function, arity?: number): Function;
    static curryRight(func: Function, arity?: number): Function;
    static debounce(func: Function, wait?: Number, options?: DebounceOptions): Function;
    static defer(func: Function, ...args?: Array<any>): number;
    static delay(func: Function, wait: number, ...args?: Array<any>): number;
    static flip(func: Function): Function;
    static memoize(func: Function, resolver?: Function): Function;
    static negate(predicate: Function): Function;
    static once(func: Function): Function;
    static overArgs(func: Function, ...transforms: Array<Function>): Function;
    static overArgs(func: Function, transforms: Array<Function>): Function;
    static partial(func: Function, ...partials: Array<any>): Function;
    static partial(func: Function, partials: Array<any>): Function;
    static partialRight(func: Function, ...partials: Array<any>): Function;
    static partialRight(func: Function, partials: Array<any>): Function;
    static rearg(func: Function, ...indexes: Array<number>): Function;
    static rearg(func: Function, indexes: Array<number>): Function;
    static rest(func: Function, start?: number): Function;
    static spread(func: Function): Function;
    static throttle(func: Function, wait?: number, options?: ThrottleOptions): Function;
    static unary(func: Function): Function;
    static wrap(value: any, wrapper: Function): Function;
  }
  declare class lodashLang extends lodashFunction {
    static clone<T>(value: T): T;
    static cloneDeep<T>(value: T): T;
    static cloneDeepWith<T, U>(value: T, customizer?: (value: T, key: number|string, object: T, stack: any) => U): U;
    static cloneWith<T, U>(value: T, customizer?: (value: T, key: number|string, object: T, stack: any) => U): U;
    static eq(value: any, other: any): bool;
    static gt(value: any, other: any): bool;
    static gte(value: any, other: any): bool;
    static isArguments(value: any): bool;
    static isArray(value: any): bool;
    static isArrayLike(value: any): bool;
    static isArrayLikeObject(value: any): bool;
    static isBoolean(value: any): bool;
    static isDate(value: any): bool;
    static isElement(value: any): bool;
    static isEmpty(value: any): bool;
    static isEqual(value: any, other: any): bool;
    static isEqualWith<T, U>(value: T, other: U, customizer?: (objValue: any, otherValue: any, key: number|string, object: T, other: U, stack: any) => bool|void): bool;
    static isError(value: any): bool;
    static isFinite(value: any): bool;
    static isFunction(value: any): bool;
    static isInteger(value: any): bool;
    static isLength(value: any): bool;
    static isMatch(object: Object, source: Object): bool;
    static isMatchWith<T: Object, U: Object>(object: T, source: U, customizer?: (objValue: any, srcValue: any, key: number|string, object: T, source: U) => bool|void): bool;
    static isNaN(value: any): bool;
    static isNative(value: any): bool;
    static isNil(value: any): bool;
    static isNull(value: any): bool;
    static isNumber(value: any): bool;
    static isObject(value: any): bool;
    static isObjectLike(value: any): bool;
    static isPlainObject(value: any): bool;
    static isRegExp(value: any): bool;
    static isSafeInteger(value: any): bool;
    static isString(value: any): bool;
    static isSymbol(value: any): bool;
    static isTypedArray(value: any): bool;
    static isUndefined(value: any): bool;
    static lt(value: any, other: any): bool;
    static lte(value: any, other: any): bool;
    static toArray(value: any): Array<any>;
    static toInteger(value: any): number;
    static toLength(value: any): number;
    static toNumber(value: any): number;
    static toPlainObject(value: any): Object;
    static toSafeInteger(value: any): number;
    static toString(value: any): string;
  }
  declare class lodashMath extends lodashLang {
    static add(augend: number, addend: number): number;
    static ceil(number: number, precision?: number): number;
    static floor(number: number, precision?: number): number;
    static max<T>(array: Array<T>): T;
    static maxBy<T>(array: Array<T>, iteratee?: Iteratee<T>): T;
    static mean(array: Array<*>): number;
    static min<T>(array: Array<T>): T;
    static minBy<T>(array: Array<T>, iteratee?: Iteratee<T>): T;
    static round(number: number, precision?: number): number;
    static subtract(minuend: number, subtrahend: number): number;
    static sum(array: Array<*>): number;
    static sum(array: Array<*>, iteratee?: Iteratee<*>): number;
  }
  declare class lodashNumber extends lodashDate {
    static clamp(number: number, lower?: number, upper: number): number;
    static inRange(number: number, start?: number, end: number): bool;
    static random(lower?: number, upper?: number, floating?: bool): number;
  }
  declare class lodashObject extends lodashNumber {
    static assign(object: Object, ...sources?: Array<Object>): Object;
    static assignIn(object: Object, ...sources?: Array<Object>): Object;

    static assignInWith<T: Object, A: Object>(object: T, s1: A, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A) => any|void): Object;
    static assignInWith<T: Object, A: Object, B: Object>(object: T, s1: A, s2: B, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B) => any|void): Object;
    static assignInWith<T: Object, A: Object, B: Object, C: Object>(object: T, s1: A, s2: B, s3: C, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C) => any|void): Object;
    static assignInWith<T: Object, A: Object, B: Object, C: Object, D: Object>(object: T, s1: A, s2: B, s3: C, s4: D, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C|D) => any|void): Object;

    static assignWith<T: Object, A: Object>(object: T, s1: A, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A) => any|void): Object;
    static assignWith<T: Object, A: Object, B: Object>(object: T, s1: A, s2: B, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B) => any|void): Object;
    static assignWith<T: Object, A: Object, B: Object, C: Object>(object: T, s1: A, s2: B, s3: C, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C) => any|void): Object;
    static assignWith<T: Object, A: Object, B: Object, C: Object, D: Object>(object: T, s1: A, s2: B, s3: C, s4: D, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C|D) => any|void): Object;

    static at(object: Object, ...paths: Array<string>): Array<any>;
    static at(object: Object, paths: Array<string>): Array<any>;
    static create<T>(prototype: T, properties?: Object): $Supertype<T>;
    static defaults(object: Object, ...sources?: Array<Object>): Object;
    static defaultsDeep(object: Object, ...sources?: Array<Object>): Object;
    static findKey(object: Object, predicate?: OPredicate): string|void;
    static findLastKey(object: Object, predicate?: OPredicate): string|void;
    static forIn(object: Object, iteratee?: OIteratee): Object;
    static forInRight(object: Object, iteratee?: OIteratee): Object;
    static forOwn(object: Object, iteratee?: OIteratee): Object;
    static forOwnRight(object: Object, iteratee?: OIteratee): Object;
    static functions(object: Object): Array<string>;
    static functionsIn(object: Object): Array<string>;
    static get(object: Object, path: Array<string>|string, defaultValue?: any): any;
    static has(object: Object, path: Array<string>|string): bool;
    static hasIn(object: Object, path: Array<string>|string): bool;
    static invert(object: Object, multiVal?: bool): Object;
    static invoke(object: Object, path: Array<string>|string, ...args?: Array<any>): any;
    static keys(object: Object): Array<string>;
    static keysIn(object: Object): Array<string>;
    static mapKeys(object: Object, iteratee?: OIteratee): Object;
    static mapValues(object: Object, iteratee?: OIteratee): Object;
    static merge(object: Object, ...sources?: Array<Object>): Object;

    static mergeWith<T: Object, A: Object>(object: T, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A) => any|void): Object;
    static mergeWith<T: Object, A: Object, B: Object>(object: T, s1: A, s2: B, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B) => any|void): Object;
    static mergeWith<T: Object, A: Object, B: Object, C: Object>(object: T, s1: A, s2: B, s3: C, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C) => any|void): Object;
    static mergeWith<T: Object, A: Object, B: Object, C: Object, D: Object>(object: T, s1: A, s2: B, s3: C, s4: D, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C|D) => any|void): Object;

    static omit(object: Object, ...props: Array<string>): Object;
    static omit(object: Object, props: Array<string>): Object;
    static omitBy(object: Object, predicate?: OPredicate): Object;
    static pick(object: Object, ...props: Array<string>): Object;
    static pick(object: Object, props: Array<string>): Object;
    static pickBy(object: Object, predicate?: OPredicate): Object;
    static result(object: Object, path: Array<string>|string, defaultValue?: any): any;
    static set(object: Object, path: Array<string>|string, value: any): Object;
    static setWith<T>(object: T, path: Array<string>|string, value: any, customizer?: (nsValue: any, key: string, nsObject: T) => any): Object;
    static toPairs(object: Object): NestedArray<any>;
    static toPairsIn(object: Object): NestedArray<any>;
    static transform(object: Object, iteratee?: OIteratee, accumulator?: any): any;
    static unset(object: Object, path: Array<string>|string): bool;
    static values(object: Object): Array<any>;
    static valuesIn(object: Object): Array<any>;
  }
  declare class lodashSeq extends lodashObject {
    static chain<T>(value: T): any;
    tap<T>(value: T, interceptor: (value: T) => any): lodash;
    thru<T>(value: T, interceptor: (value: T) => any): lodash;
  }
  declare class lodashString extends lodashSeq {
    static camelCase(string?: string): string;
    static capitalize(string?: string): string;
    static deburr(string?: string): string;
    static endsWith(string?: string, target?: string, position?: number): bool;
    static escape(string?: string): string;
    static escapeRegExp(string?: string): string;
    static kebabCase(string?: string): string;
    static lowerCase(string?: string): string;
    static lowerFirst(string?: string): string;
    static pad(string?: string, length?: number, chars?: string): string;
    static padEnd(string?: string, length?: number, chars?: string): string;
    static padStart(string?: string, length?: number, chars?: string): string;
    static parseInt(string: string, radix?: number): number;
    static repeat(string?: string, n?: number): string;
    static replace(string?: string, pattern: RegExp|string, replacement: ((string: string) => string)|string): string;
    static snakeCase(string?: string): string;
    static split(string?: string, separator: RegExp|string, limit?: number): Array<string>;
    static startCase(string?: string): string;
    static startsWith(string?: string, target?: string, position?: number): bool;
    static template(string?: string, options?: TemplateSettings): Function;
    static toLower(string?: string): string;
    static toUpper(string?: string): string;
    static trim(string?: string, chars?: string): string;
    static trimEnd(string?: string, chars?: string): string;
    static trimStart(string?: string, chars?: string): string;
    static truncate(string?: string, options?: TruncateOptions): string;
    static unescape(string?: string): string;
    static upperCase(string?: string): string;
    static upperFirst(string?: string): string;
    static words(string?: string, pattern?: RegExp|string): Array<string>;
  }
  declare class lodashUtil extends lodashString {
    static attempt(func: Function): any;
    static bindAll(object: Object, methodNames: Array<string>): Object;
    static bindAll(object: Object, ...methodNames: Array<string>): Object;
    static cond(pairs: NestedArray<Function>): Function;
    static conforms(source: Object): Function;
    static constant<T>(value: T): () => T;
    static flow(...funcs?: Array<Function>): Function;
    static flow(funcs?: Array<Function>): Function;
    static flowRight(...funcs?: Array<Function>): Function;
    static flowRight(funcs?: Array<Function>): Function;
    static identity<T>(value: T): T;
    static iteratee(func?: any): Function;
    static matches(source: Object): Function;
    static matchesProperty(path: Array<string>|string, srcValue: any): Function;
    static method(path: Array<string>|string, ...args?: Array<any>): Function;
    static methodOf(object: Object, ...args?: Array<any>): Function;
    static mixin<T: Function|Object>(object?: T, source: Object, options?: { chain: bool }): T;
    static noConflict(): typeof lodash;
    static noop(): void;
    static nthArg(n?: number): Function;
    static over(...iteratees: Array<Function>): Function;
    static over(iteratees: Array<Function>): Function;
    static overEvery(...predicates: Array<Function>): Function;
    static overEvery(predicates: Array<Function>): Function;
    static overSome(...predicates: Array<Function>): Function;
    static overSome(predicates: Array<Function>): Function;
    static property(path: Array<string>|string): Function;
    static propertyOf(object: Object): Function;
    static range(start?: number, end: number, step?: number): Array<number>;
    static rangeRight(start?: number, end: number, step?: number): Array<number>;
    static runInContext(context?: Object): Function;
    static times(n: number, iteratee?: Function): Function;
    static toPath(value: any): Array<string>;
    static uniqueId(prefix?: string): string;
  }
  declare class lodash extends lodashUtil {
    static <T>(value: T): any;
    static VERSION: string;
    static support: Support;
    static templateSettings: TemplateSettings;
  }
  declare var exports: typeof lodash;
}
