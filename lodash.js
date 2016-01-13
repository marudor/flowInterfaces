type List<T> = {
  [index: number]: T;
  length: number;
};

type Dictionary<T> = {
  [index: string]: T;
};

type NumericDictionary<T> = {
  [index: number]: T;
};

type Support = {
  enumErrorProps: bool;
  enumPrototypes: bool;
  nonEnumShadows: bool;
  ownLast: bool;
  spliceObjects: bool;
  unindexedChars: bool;
};
type TemplateSettings = {
  escape?: RegExp;
  evaluate?: RegExp;
  imports?: Object;
  interpolate?: RegExp;
  variable?: string;
};

type RecursiveArray<T>= Array<T|Array<T>>;
type NestedArray<T> = Array<Array<T>>;

type Predicate<T> = ((value: T, index: number, array: Array<T>) => bool)|Object|string;
type Iteratee<T> = ((item: T, index: number, array: Array<T>) => mixed)|Object|string;
type Iteratee<T, U> = ((item: T, index: number, array: Array<T>) => U)|Object|string;
type Comparator<T> = (arr: Array<T>, arr2: Array<T>) => bool;

declare module 'lodash' {
  declare class lodashArray {
    static chunk<T>(array: Array<T>, size: ?number): Array<T>;
    static compact<T>(array: Array<T|false|null|0|''>): Array<T>;
    static difference<T>(array: Array<T>, values: Array<T>): Array<T>;
    static drop<T>(array: Array<T>, n: ?number): Array<T>;
    static dropRight<T>(array: Array<T>, n: ?number): Array<T>;
    static dropRightWhile<T>(array: Array<T>, predicate: ?Predicate<T>): Array<T>;
    static dropWhile<T>(array: Array<T>, predicate: ?Predicate<T>): Array<T>;
    static fill<T, U>(array: Array<T>, value: U, start: ?number, end: ?number): Array<T|U>;
    static findIndex<T>(array: Array<T>, predicate: ?Predicate<T>): number;
    static findLastIndex<T>(array: Array<T>, predicate: ?Predicate<T>): number;
    static flatMap<T>(array: Array<T>, iteratee: ?Iteratee<T, U>): Array<U>;
    static flatten<T>(array: RecursiveArray<T>): RecursiveArray<T>;
    static flattenDeep<T>(array: RecursiveArray<T>): Array<T>;
    static fromPairs<T>(pairs: Array<T>): Object;
    static head<T>(pairs: Array<T>): T;
    static indexOf<T>(array: Array<T>, value: T, fromIndex: ?number): number;
    static initial<T>(array: Array<T>): Array<T>;
    static intersection<T>(...arrays: NestedArray<T>): Array<T>;
    static intersectionBy<T>(...arrays: Array<T>, iteratee: ?Iteratee<T>): Array<T>;
    static intersectionWith<T>(...arrays: NestedArray<T>, comparator: Comparator<T>): Array<T>;
    static join<T>(array: Array<T>, separator: ?string): string;
    static last<T>(array: Array<T>): T;
    static lastIndexOf<T>(array: Array<T>, value: T, fromIndex: ?number): number;
    static pull<T>(array: Array<T>, ...values: ?Array<T>): Array<T>;
    static pullAll<T>(array: Array<T>, values: Array<T>): Array<T>;
    static pullAllBy<T>(array: Array<T>, values: Array<T>, iteratee: ?Iteratee<T>): Array<T>;
    static pullAt<T>(array: Array<T>, ...indexed: ?Array<number>): Array<T>;
    static pullAt<T>(array: Array<T>, indexed: ?Array<number>): Array<T>;
    static remove<T>(array: Array<T>, predicate: ?): Array<T>;
    static slice<T>(array: Array<T>, start: ?number, end: ?number): Array<T>;
    static sortedIndex<T>(array: Array<T>, value: T): number;
    static sortedIndexBy<T>(array: Array<T>, value: T, iteratee: ?Iteratee<T>): number;
    static sortedIndexOf<T>(array: Array<T>, value: T): number;
    static sortedLastIndex<T>(array: Array<T>, value: T): number;
    static sortedLastIndexBy<T>(array: Array<T>, value: T, iteratee: ?Iteratee<T>): number;
    static sortedLastIndexOf<T>(array: Array<T>, value: T): number;
    static sortedUniq<T>(array: Array<T>): Array<T>;
    static sortedUniqBy<T>(array: Array<T>, iteratee: ?(value: T) => mixed): Array<T>;
    static tail<T>(array: Array<T>): Array<T>;
    static take<T>(array: Array<T>, n: ?number): Array<T>;
    static takeRight<T>(array: Array<T>, n: ?number): Array<T>;
    static takeRightWhile<T>(array: Array<T>, predicate: ?Predicate<T>): Array<T>;
    static takeWhile<T>(array: Array<T>, predicate: ?Predicate<T>): Array<T>;
    static union<T>(array: ?Array<T>): Array<T>;
    static unionBy<T>(array: ?Array<T>, iteratee: ?Iteratee<T>): Array<T>;
    static unionWith<T>(...arrays: NestedArray<T>, comparator: ?Comparator<T>): Array<T>;
    static uniq<T>(array: Array<T>): Array<T>;
    static uniqBy<T>(array: Array<T>, iteratee: ?Iteratee<T>): Array<T>;
    static uniqWith<T>(array: Array<T>, comparator: ?Comparator<T>): Array<T>;
    static unzip<T>(array: Array<T>): Array<T>;
    static unzipWith<T>(array: Array<T>, iteratee: ?Iteratee<T>): Array<T>;
    static without<T>(array: Array<T>, ...values: ?Array<T>): Array<T>;
    static xor<T>(...array: NestedArray<T>): Array<T>;
    static xorBy<T>(...array: NestedArray<T>, iteratee: ?Iteratee<T>): Array<T>;
    static xorWith<T>(...array: NestedArray<T>, comparator: ?Comparator<T>): Array<T>;
    static zip<T>(...arrays: NestedArray<T>): NestedArray<T>;
    static zipObject(props: ?Array<any>, values: ?Array<any>): Object;
    static zipWith<T>(...arrays: NestedArray<T>, iteratee: ?Iteratee<T>): Array<T>;
  }
  declare class lodash extends lodashArray {
    static VERSION: string;
    static support: Support;
    static templateSettings: TemplateSettings;
    static now(): number;
  }
  declare var exports: lodash;
}
