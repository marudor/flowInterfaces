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

declare module 'lodash' {
  declare class lodashArray {
    static chunk<T>(array: Array<T>, size: ?number): Array<T>;
    static compact<T>(array: Array<T|false|null|0|''>): Array<T>;
    static difference<T>(array: Array<T>, values: Array<T>): Array<T>;
    static drop<T>(array: Array<T>, n: ?number): Array<T>;
    static dropRight<T>(array: Array<T>, n: ?number): Array<T>;
    static dropRightWhile<T>(array: Array<T>, predicate: ?((item: T) => bool)|Object|string): Array<T>;
    static dropWhile<T>(array: Array<T>, predicate: ?((item: T) => bool)|Object|string): Array<T>;
  }
  declare class lodash {
    static VERSION: string;
    static support: Support;
    static templateSettings: TemplateSettings;
  }
}
