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
  // Array
  declare function chunk<T>(array: Array<T>, size?: number): Array<T>;
  declare function compact<T>(array: Array<T|false|null|0|''>): Array<T>;
  declare function difference<T>(array: Array<T>, values: Array<T>): Array<T>;
  declare function drop<T>(array: Array<T>, n?: number): Array<T>;
  declare function dropRight<T>(array: Array<T>, n?: number): Array<T>;
  declare function dropRightWhile<T>(array: Array<T>, predicate?: Predicate<T>): Array<T>;
  declare function dropWhile<T>(array: Array<T>, predicate?: Predicate<T>): Array<T>;
  declare function fill<T, U>(array: Array<T>, value: U, start?: number, end?: number): Array<T|U>;
  declare function findIndex<T>(array: Array<T>, predicate?: Predicate<T>): number;
  declare function findLastIndex<T>(array: Array<T>, predicate?: Predicate<T>): number;
  declare function flatMap<T, U>(array: Array<T>, iteratee?: Iteratee2<T, U>): Array<U>;
  declare function flatten<T>(array: RecursiveArray<T>): RecursiveArray<T>;
  declare function flattenDeep<T>(array: RecursiveArray<T>): Array<T>;
  declare function fromPairs<T>(pairs: Array<T>): Object;
  declare function head<T>(array: Array<T>): T;
  // Alias
  declare function first<T>(array: Array<T>): T;
  declare function indexOf<T>(array: Array<T>, value: T, fromIndex?: number): number;
  declare function initial<T>(array: Array<T>): Array<T>;
  declare function intersection<T>(...arrays: NestedArray<T>): Array<T>;
  //Workaround until (...parameter: T, parameter2: U) works
  declare function  intersectionBy<T>(a1: Array<T>, iteratee?: Iteratee<T>): Array<T>;
  declare function intersectionBy<T>(a1: Array<T>, a2: Array<T>, iteratee?: Iteratee<T>): Array<T>;
  declare function intersectionBy<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, iteratee?: Iteratee<T>): Array<T>;
  declare function intersectionBy<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, a4: Array<T>, iteratee?: Iteratee<T>): Array<T>;
  //Workaround until (...parameter: T, parameter2: U) works
  declare function intersectionWith<T>(a1: Array<T>, comparator: Comparator<T>): Array<T>;
  declare function intersectionWith<T>(a1: Array<T>, a2: Array<T>, comparator: Comparator<T>): Array<T>;
  declare function intersectionWith<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, comparator: Comparator<T>): Array<T>;
  declare function intersectionWith<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, a4: Array<T>, comparator: Comparator<T>): Array<T>;

  declare function join<T>(array: Array<T>, separator?: string): string;
  declare function last<T>(array: Array<T>): T;
  declare function lastIndexOf<T>(array: Array<T>, value: T, fromIndex?: number): number;
  declare function pull<T>(array: Array<T>, ...values?: Array<T>): Array<T>;
  declare function pullAll<T>(array: Array<T>, values: Array<T>): Array<T>;
  declare function pullAllBy<T>(array: Array<T>, values: Array<T>, iteratee?: Iteratee<T>): Array<T>;
  declare function pullAt<T>(array: Array<T>, ...indexed?: Array<number>): Array<T>;
  declare function pullAt<T>(array: Array<T>, indexed?: Array<number>): Array<T>;
  declare function remove<T>(array: Array<T>, predicate?: Predicate<T>): Array<T>;
  declare function slice<T>(array: Array<T>, start?: number, end?: number): Array<T>;
  declare function sortedIndex<T>(array: Array<T>, value: T): number;
  declare function sortedIndexBy<T>(array: Array<T>, value: T, iteratee?: Iteratee<T>): number;
  declare function sortedIndexOf<T>(array: Array<T>, value: T): number;
  declare function sortedLastIndex<T>(array: Array<T>, value: T): number;
  declare function sortedLastIndexBy<T>(array: Array<T>, value: T, iteratee?: Iteratee<T>): number;
  declare function sortedLastIndexOf<T>(array: Array<T>, value: T): number;
  declare function sortedUniq<T>(array: Array<T>): Array<T>;
  declare function sortedUniqBy<T>(array: Array<T>, iteratee?: (value: T) => mixed): Array<T>;
  declare function tail<T>(array: Array<T>): Array<T>;
  declare function take<T>(array: Array<T>, n?: number): Array<T>;
  declare function takeRight<T>(array: Array<T>, n?: number): Array<T>;
  declare function takeRightWhile<T>(array: Array<T>, predicate?: Predicate<T>): Array<T>;
  declare function takeWhile<T>(array: Array<T>, predicate?: Predicate<T>): Array<T>;
  declare function union<T>(array?: Array<T>): Array<T>;
  declare function unionBy<T>(array?: Array<T>, iteratee?: Iteratee<T>): Array<T>;
  //Workaround until (...parameter: T, parameter2: U) works
  declare function unionWith<T>(a1: Array<T>, comparator?: Comparator<T>): Array<T>;
  declare function unionWith<T>(a1: Array<T>, a2: Array<T>, comparator?: Comparator<T>): Array<T>;
  declare function unionWith<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, comparator?: Comparator<T>): Array<T>;
  declare function unionWith<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, a4: Array<T>, comparator?: Comparator<T>): Array<T>;

  declare function uniq<T>(array: Array<T>): Array<T>;
  declare function uniqBy<T>(array: Array<T>, iteratee?: Iteratee<T>): Array<T>;
  declare function uniqWith<T>(array: Array<T>, comparator?: Comparator<T>): Array<T>;
  declare function unzip<T>(array: Array<T>): Array<T>;
  declare function unzipWith<T>(array: Array<T>, iteratee?: Iteratee<T>): Array<T>;
  declare function without<T>(array: Array<T>, ...values?: Array<T>): Array<T>;
  declare function xor<T>(...array: NestedArray<T>): Array<T>;
  //Workaround until (...parameter: T, parameter2: U) works
  declare function xorBy<T>(a1: Array<T>, iteratee?: Iteratee<T>): Array<T>;
  declare function xorBy<T>(a1: Array<T>, a2: Array<T>, iteratee?: Iteratee<T>): Array<T>;
  declare function xorBy<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, iteratee?: Iteratee<T>): Array<T>;
  declare function xorBy<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, a4: Array<T>, iteratee?: Iteratee<T>): Array<T>;
  //Workaround until (...parameter: T, parameter2: U) works
  declare function xorWith<T>(a1: NestedArray<T>, comparator?: Comparator<T>): Array<T>;
  declare function xorWith<T>(a1: NestedArray<T>, a2: NestedArray<T>, comparator?: Comparator<T>): Array<T>;
  declare function xorWith<T>(a1: NestedArray<T>, a2: NestedArray<T>, a3: NestedArray<T>, comparator?: Comparator<T>): Array<T>;
  declare function xorWith<T>(a1: NestedArray<T>, a2: NestedArray<T>, a3: NestedArray<T>, a4: NestedArray<T>, comparator?: Comparator<T>): Array<T>;

  declare function zip<T>(...arrays: NestedArray<T>): NestedArray<T>;
  declare function zipObject(props?: Array<any>, values?: Array<any>): Object;
  //Workaround until (...parameter: T, parameter2: U) works
  declare function zipWith<T>(a1: NestedArray<T>, iteratee?: Iteratee<T>): Array<T>;
  declare function zipWith<T>(a1: NestedArray<T>, a2: NestedArray<T>, iteratee?: Iteratee<T>): Array<T>;
  declare function zipWith<T>(a1: NestedArray<T>, a2: NestedArray<T>, a3: NestedArray<T>, iteratee?: Iteratee<T>): Array<T>;
  declare function zipWith<T>(a1: NestedArray<T>, a2: NestedArray<T>, a3: NestedArray<T>, a4: NestedArray<T>, iteratee?: Iteratee<T>): Array<T>;

  // Collection
  declare function countBy<T>(array: Array<T>, iteratee?: Iteratee<T>): Object;
  declare function countBy<T>(object: T, iteratee?: OIteratee): Object;

  declare function every<T>(array: Array<T>, iteratee?: Iteratee<T>): bool;
  declare function every<T>(object: T, iteratee?: OIteratee): bool;

  declare function filter<T>(array: Array<T>, predicate?: Predicate<T>): Array<T>;
  declare function filter<T>(object: T, predicate?: OPredicate): Array<any>;

  declare function find<T>(array: Array<T>, predicate?: Predicate<T>): T;
  declare function find<T>(object: T, predicate?: OPredicate): any;

  declare function findLast<T>(array: Array<T>, predicate?: Predicate<T>): T;
  declare function findLast<T>(object: T, predicate?: OPredicate): any;

  declare function forEach<T>(array: Array<T>, iteratee?: Iteratee<T>): Array<T>;
  declare function forEach<T>(object: T, iteratee?: OIteratee): T;
  //Alias
  declare function each<T>(array: Array<T>, iteratee?: Iteratee<T>): Array<T>;
  declare function each<T>(object: T, iteratee?: OIteratee): T;

  declare function forEachRight<T>(array: Array<T>, iteratee?: Iteratee<T>): Array<T>;
  declare function forEachRight<T>(object: T, iteratee?: OIteratee): T;
  //Alias
  declare function eachRight<T>(array: Array<T>, iteratee?: Iteratee<T>): Array<T>;
  declare function eachRight<T>(object: T, iteratee?: OIteratee): T;

  declare function groupBy<T>(array: Array<T>, iteratee?: Iteratee<T>): Object;
  declare function groupBy<T>(object: T, iteratee?: OIteratee): Object;

  declare function includes<T>(array: Array<T>, value: T, fromIndex?: number): bool;
  declare function includes<T>(object: T, value: any, fromIndex?: number): bool;
  declare function includes(str: string, value: string, fromIndex?: number): bool;

  declare function invokeMap<T>(array: Array<T>, path: ((value: T) => Array<string>|string)|Array<string>|string, ...args?: Array<any>): Array<any>;
  declare function invokeMap<T>(object: T, path: ((value: any) => Array<string>|string)|Array<string>|string, ...args?: Array<any>): Array<any>;

  declare function keyBy<T>(array: Array<T>, iteratee?: Iteratee<T>): Object;
  declare function keyBy<T>(object: T, iteratee?: OIteratee): Object;

  declare function map<T, U>(array: Array<T>, iteratee?: Iteratee2<T, U>): Array<U>;
  declare function map<T, U>(object: T, iteratee?: OIteratee): Array<U>;

  declare function orderBy<T>(array: Array<T>, iteratees?: Array<Iteratee<T>>, orders?: Array<'asc'|'desc'>): Array<T>;
  declare function orderBy<T>(object: T, iteratees?: Array<OIteratee>, orders?: Array<'asc'|'desc'>): Array<any>;

  declare function partition<T>(array: Array<T>, predicate?: Predicate<T>): NestedArray<T>;
  declare function partition<T>(object: T, predicate?: OPredicate): NestedArray<any>;

  declare function reduce<T, U>(array: Array<T>, iteratee?: (accumulator: U, value: T, index: number, array: Array<T>) => U, accumulator?: U): U;
  declare function reduce<T, U>(object: T, iteratee?: (accumulator: U, value: any, key: string, object: T) => U, accumulator?: U): U;

  declare function reduceRight<T, U>(array: Array<T>, iteratee?: (accumulator: U, value: T, index: number, array: Array<T>) => U, accumulator?: U): U;
  declare function reduceRight<T, U>(object: T, iteratee?: (accumulator: U, value: any, key: string, object: T) => U, accumulator?: U): U;

  declare function reject<T>(array: Array<T>, predicate?: Predicate<T>): Array<T>;
  declare function reject<T>(object: T, predicate?: OPredicate): Array<any>;

  declare function sample<T>(array: Array<T>): T;
  declare function sample<T>(object: T): any;

  declare function sampleSize<T>(array: Array<T>, n?: number): Array<T>;
  declare function sampleSize<T>(object: T, n?: number): Array<any>;

  declare function shuffle<T>(array: Array<T>): Array<T>;
  declare function shuffle<T>(object: T): Array<any>;

  declare function size(collection: Array<any>|Object): number;

  declare function some<T>(array: Array<T>, predicate?: Predicate<T>): bool;
  declare function some<T>(object: Object, predicate?: OPredicate): bool;

  declare function sortBy<T>(array: Array<T>, ...iteratees?: Array<Iteratee<T>>): Array<T>;
  declare function sortBy<T>(array: Array<T>, iteratees?: Array<Iteratee<T>>): Array<T>;
  declare function sortBy<T>(object: T, ...iteratees?: Array<OIteratee>): Array<any>;
  declare function sortBy<T>(object: T, iteratees?: Array<OIteratee>): Array<any>;

  // Date
  declare function now(): number;

  // Function
  declare function after(n: number, function: Function): Function;
  declare function ary(func: Function, n?: number): Function;
  declare function before(n: number, function: Function): Function;
  declare function bind(func: Function, thisArg: any, ...partials: Array<any>): Function;
  declare function bindKey(obj: Object, key: string, ...partials: Array<any>): Function;
  declare function curry(func: Function, arity?: number): Function;
  declare function curryRight(func: Function, arity?: number): Function;
  declare function debounce(func: Function, wait?: number, options?: DebounceOptions): Function;
  declare function defer(func: Function, ...args?: Array<any>): number;
  declare function delay(func: Function, wait: number, ...args?: Array<any>): number;
  declare function flip(func: Function): Function;
  declare function memoize(func: Function, resolver?: Function): Function;
  declare function negate(predicate: Function): Function;
  declare function once(func: Function): Function;
  declare function overArgs(func: Function, ...transforms: Array<Function>): Function;
  declare function overArgs(func: Function, transforms: Array<Function>): Function;
  declare function partial(func: Function, ...partials: Array<any>): Function;
  declare function partial(func: Function, partials: Array<any>): Function;
  declare function partialRight(func: Function, ...partials: Array<any>): Function;
  declare function partialRight(func: Function, partials: Array<any>): Function;
  declare function rearg(func: Function, ...indexes: Array<number>): Function;
  declare function rearg(func: Function, indexes: Array<number>): Function;
  declare function rest(func: Function, start?: number): Function;
  declare function spread(func: Function): Function;
  declare function throttle(func: Function, wait?: number, options?: ThrottleOptions): Function;
  declare function unary(func: Function): Function;
  declare function wrap(value: any, wrapper: Function): Function;

  // Lang
  declare function clone<T>(value: T): T;
  declare function cloneDeep<T>(value: T): T;
  declare function cloneDeepWith<T, U>(value: T, customizer?: (value: T, key: number|string, object: T, stack: any) => U): U;
  declare function cloneWith<T, U>(value: T, customizer?: (value: T, key: number|string, object: T, stack: any) => U): U;
  declare function eq(value: any, other: any): bool;
  declare function gt(value: any, other: any): bool;
  declare function gte(value: any, other: any): bool;
  declare function isArguments(value: any): bool;
  declare function isArray(value: any): bool;
  declare function isArrayLike(value: any): bool;
  declare function isArrayLikeObject(value: any): bool;
  declare function isBoolean(value: any): bool;
  declare function isDate(value: any): bool;
  declare function isElement(value: any): bool;
  declare function isEmpty(value: any): bool;
  declare function isEqual(value: any, other: any): bool;
  declare function isEqualWith<T, U>(value: T, other: U, customizer?: (objValue: any, otherValue: any, key: number|string, object: T, other: U, stack: any) => bool|void): bool;
  declare function isError(value: any): bool;
  declare function isFinite(value: any): bool;
  declare function isFunction(value: any): bool;
  declare function isInteger(value: any): bool;
  declare function isLength(value: any): bool;
  declare function isMatch(object: Object, source: Object): bool;
  declare function isMatchWith<T: Object, U: Object>(object: T, source: U, customizer?: (objValue: any, srcValue: any, key: number|string, object: T, source: U) => bool|void): bool;
  declare function isNaN(value: any): bool;
  declare function isNative(value: any): bool;
  declare function isNil(value: any): bool;
  declare function isNull(value: any): bool;
  declare function isNumber(value: any): bool;
  declare function isObject(value: any): bool;
  declare function isObjectLike(value: any): bool;
  declare function isPlainObject(value: any): bool;
  declare function isRegExp(value: any): bool;
  declare function isSafeInteger(value: any): bool;
  declare function isString(value: any): bool;
  declare function isSymbol(value: any): bool;
  declare function isTypedArray(value: any): bool;
  declare function isUndefined(value: any): bool;
  declare function lt(value: any, other: any): bool;
  declare function lte(value: any, other: any): bool;
  declare function toArray(value: any): Array<any>;
  declare function toInteger(value: any): number;
  declare function toLength(value: any): number;
  declare function toNumber(value: any): number;
  declare function toPlainObject(value: any): Object;
  declare function toSafeInteger(value: any): number;
  declare function toString(value: any): string;

  // Math
  declare function add(augend: number, addend: number): number;
  declare function ceil(number: number, precision?: number): number;
  declare function floor(number: number, precision?: number): number;
  declare function max<T>(array: Array<T>): T;
  declare function maxBy<T>(array: Array<T>, iteratee?: Iteratee<T>): T;
  declare function mean(array: Array<*>): number;
  declare function min<T>(array: Array<T>): T;
  declare function minBy<T>(array: Array<T>, iteratee?: Iteratee<T>): T;
  declare function round(number: number, precision?: number): number;
  declare function subtract(minuend: number, subtrahend: number): number;
  declare function sum(array: Array<*>): number;
  declare function sum(array: Array<*>, iteratee?: Iteratee<*>): number;

  // number
  declare function clamp(number: number, lower?: number, upper: number): number;
  declare function inRange(number: number, start?: number, end: number): bool;
  declare function random(lower?: number, upper?: number, floating?: bool): number;


  // Object
  declare function assign(object: Object, ...sources?: Array<Object>): Object;
  declare function assignIn(object: Object, ...sources?: Array<Object>): Object;

  declare function assignInWith<T: Object, A: Object>(object: T, s1: A, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A) => any|void): Object;
  declare function assignInWith<T: Object, A: Object, B: Object>(object: T, s1: A, s2: B, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B) => any|void): Object;
  declare function assignInWith<T: Object, A: Object, B: Object, C: Object>(object: T, s1: A, s2: B, s3: C, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C) => any|void): Object;
  declare function assignInWith<T: Object, A: Object, B: Object, C: Object, D: Object>(object: T, s1: A, s2: B, s3: C, s4: D, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C|D) => any|void): Object;

  declare function assignWith<T: Object, A: Object>(object: T, s1: A, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A) => any|void): Object;
  declare function assignWith<T: Object, A: Object, B: Object>(object: T, s1: A, s2: B, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B) => any|void): Object;
  declare function assignWith<T: Object, A: Object, B: Object, C: Object>(object: T, s1: A, s2: B, s3: C, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C) => any|void): Object;
  declare function assignWith<T: Object, A: Object, B: Object, C: Object, D: Object>(object: T, s1: A, s2: B, s3: C, s4: D, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C|D) => any|void): Object;

  declare function at(object: Object, ...paths: Array<string>): Array<any>;
  declare function at(object: Object, paths: Array<string>): Array<any>;
  declare function create<T>(prototype: T, properties?: Object): $Supertype<T>;
  declare function defaults(object: Object, ...sources?: Array<Object>): Object;
  declare function defaultsDeep(object: Object, ...sources?: Array<Object>): Object;
  declare function findKey(object: Object, predicate?: OPredicate): string|void;
  declare function findLastKey(object: Object, predicate?: OPredicate): string|void;
  declare function forIn(object: Object, iteratee?: OIteratee): Object;
  declare function forInRight(object: Object, iteratee?: OIteratee): Object;
  declare function forOwn(object: Object, iteratee?: OIteratee): Object;
  declare function forOwnRight(object: Object, iteratee?: OIteratee): Object;
  declare function functions(object: Object): Array<string>;
  declare function functionsIn(object: Object): Array<string>;
  declare function get(object: Object, path: Array<string>|string, defaultValue?: any): any;
  declare function has(object: Object, path: Array<string>|string): bool;
  declare function hasIn(object: Object, path: Array<string>|string): bool;
  declare function invert(object: Object, multiVal?: bool): Object;
  declare function invoke(object: Object, path: Array<string>|string, ...args?: Array<any>): any;
  declare function keys(object: Object): Array<string>;
  declare function keysIn(object: Object): Array<string>;
  declare function mapKeys(object: Object, iteratee?: OIteratee): Object;
  declare function mapValues(object: Object, iteratee?: OIteratee): Object;
  declare function merge(object: Object, ...sources?: Array<Object>): Object;

  declare function mergeWith<T: Object, A: Object>(object: T, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A) => any|void): Object;
  declare function mergeWith<T: Object, A: Object, B: Object>(object: T, s1: A, s2: B, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B) => any|void): Object;
  declare function mergeWith<T: Object, A: Object, B: Object, C: Object>(object: T, s1: A, s2: B, s3: C, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C) => any|void): Object;
  declare function mergeWith<T: Object, A: Object, B: Object, C: Object, D: Object>(object: T, s1: A, s2: B, s3: C, s4: D, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C|D) => any|void): Object;

  declare function omit(object: Object, ...props: Array<string>): Object;
  declare function omit(object: Object, props: Array<string>): Object;
  declare function omitBy(object: Object, predicate?: OPredicate): Object;
  declare function pick(object: Object, ...props: Array<string>): Object;
  declare function pick(object: Object, props: Array<string>): Object;
  declare function pickBy(object: Object, predicate?: OPredicate): Object;
  declare function result(object: Object, path: Array<string>|string, defaultValue?: any): any;
  declare function set(object: Object, path: Array<string>|string, value: any): Object;
  declare function setWith<T>(object: T, path: Array<string>|string, value: any, customizer?: (nsValue: any, key: string, nsObject: T) => any): Object;
  declare function toPairs(object: Object): NestedArray<any>;
  declare function toPairsIn(object: Object): NestedArray<any>;
  declare function transform(object: Object, iteratee?: OIteratee, accumulator?: any): any;
  declare function unset(object: Object, path: Array<string>|string): bool;
  declare function values(object: Object): Array<any>;
  declare function valuesIn(object: Object): Array<any>;
  // declare interface lodashSeq {
  //   chain<T>(value: T): any;
  //   tap<T>(value: T, interceptor: (value: T) => any): lodash;
  //   thru<T>(value: T, interceptor: (value: T) => any): lodash;
  // }
  // String
  declare function camelCase(string?: string): string;
  declare function capitalize(string?: string): string;
  declare function deburr(string?: string): string;
  declare function endsWith(string?: string, target?: string, position?: number): bool;
  declare function escape(string?: string): string;
  declare function escapeRegExp(string?: string): string;
  declare function kebabCase(string?: string): string;
  declare function lowerCase(string?: string): string;
  declare function lowerFirst(string?: string): string;
  declare function pad(string?: string, length?: number, chars?: string): string;
  declare function padEnd(string?: string, length?: number, chars?: string): string;
  declare function padStart(string?: string, length?: number, chars?: string): string;
  declare function parseInt(string: string, radix?: number): number;
  declare function repeat(string?: string, n?: number): string;
  declare function replace(string?: string, pattern: RegExp|string, replacement: ((string: string) => string)|string): string;
  declare function snakeCase(string?: string): string;
  declare function split(string?: string, separator: RegExp|string, limit?: number): Array<string>;
  declare function startCase(string?: string): string;
  declare function startsWith(string?: string, target?: string, position?: number): bool;
  declare function template(string?: string, options?: TemplateSettings): Function;
  declare function toLower(string?: string): string;
  declare function toUpper(string?: string): string;
  declare function trim(string?: string, chars?: string): string;
  declare function trimEnd(string?: string, chars?: string): string;
  declare function trimStart(string?: string, chars?: string): string;
  declare function truncate(string?: string, options?: TruncateOptions): string;
  declare function unescape(string?: string): string;
  declare function upperCase(string?: string): string;
  declare function upperFirst(string?: string): string;
  declare function words(string?: string, pattern?: RegExp|string): Array<string>;

  // Util
  declare function attempt(func: Function): any;
  declare function bindAll(object: Object, methodNames: Array<string>): Object;
  declare function bindAll(object: Object, ...methodNames: Array<string>): Object;
  declare function cond(pairs: NestedArray<Function>): Function;
  declare function conforms(source: Object): Function;
  declare function constant<T>(value: T): () => T;
  declare function flow(...funcs?: Array<Function>): Function;
  declare function flow(funcs?: Array<Function>): Function;
  declare function flowRight(...funcs?: Array<Function>): Function;
  declare function flowRight(funcs?: Array<Function>): Function;
  declare function identity<T>(value: T): T;
  declare function iteratee(func?: any): Function;
  declare function matches(source: Object): Function;
  declare function matchesProperty(path: Array<string>|string, srcValue: any): Function;
  declare function method(path: Array<string>|string, ...args?: Array<any>): Function;
  declare function methodOf(object: Object, ...args?: Array<any>): Function;
  declare function mixin<T: Function|Object>(object?: T, source: Object, options?: { chain: bool }): T;
  // noConflict(): lodashStatic;
  declare function noop(): void;
  declare function nthArg(n?: number): Function;
  declare function over(...iteratees: Array<Function>): Function;
  declare function over(iteratees: Array<Function>): Function;
  declare function overEvery(...predicates: Array<Function>): Function;
  declare function overEvery(predicates: Array<Function>): Function;
  declare function overSome(...predicates: Array<Function>): Function;
  declare function overSome(predicates: Array<Function>): Function;
  declare function property(path: Array<string>|string): Function;
  declare function propertyOf(object: Object): Function;
  declare function range(start?: number, end: number, step?: number): Array<number>;
  declare function range(end: number): Array<number>;
  declare function rangeRight(start?: number, end: number, step?: number): Array<number>;
  declare function runInContext(context?: Object): Function;
  declare function times(n: number, iteratee?: Function): Function;
  declare function toPath(value: any): Array<string>;
  declare function uniqueId(prefix?: string): string;
  declare var VERSION: string;
  declare var support: Support;
  declare var templateSettings: TemplateSettings;
}
