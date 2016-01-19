type RangeError = Error;
type CancellationErrors = Error;
type TimeoutError = Error;
type RejectionError = Error;
type OperationalError = Error;

type ConcurrencyOption = {
  concurrency: number,
};
type SpreadOption = {
  spread: boolean;
};

type Elem<T> = Promise<T> | T;

declare class PromiseInspection<T> {
  isCancelled(): bool;
  isFulfilled(): bool;
  isRejected(): bool;
  pending(): bool;
  reason(): any;
  value(): T;
}

declare class Promise<R> {
  static all<T, Elem: Elem<T>>(promises: Array<Elem>): Promise<Array<T>>;
  static any<T, Elem: Elem<T>>(promises: Array<Elem>): Promise<T>;
  static race<T, Elem: Elem<T>>(promises: Array<Elem>): Promise<T>;
  static reject<T>(error?: any): Promise<T>;
  static resolve<T>(object?: Promise<T> | T): Promise<T>;
  static some<T, Elem: Elem<T>>(promises: Array<Elem>, count: number): Promise<Array<T>>;
  static join<T, Elem: Elem<T>>(...promises: Array<Elem>): Promise<Array<T>>;
  static map<T, U, Elem: Elem<T>>(
    promises: Array<Elem>,
    mapper: (item: T, index: number, arrayLength: number) => U,
    options?: ConcurrencyOption
  ): Promise<Array<U>>;
  static mapSeries<T, U, Elem: Elem<T>>(
    promises: Array<Elem>,
    mapper: (item: T, index: number, arrayLength: number) => U
  ): Promise<Array<U>>;
  static reduce<T, U, Elem: Elem<T>>(
    promises: Array<Elem>,
    reducer: (total: U, current: T, index: number, arrayLength: number) => U,
    initialValue?: U
  ): Promise<U>;
  static filter<T, Elem: Elem<T>>(
    promises: Array<Elem>,
    filterer: (item: T, index: number, arrayLength: number) => Promise<bool>|bool,
    option?: ConcurrencyOption
  ): Promise<Array<T>>;
  static each<T, Elem: Elem<T>>(
    promises: Array<Elem>,
    iterator: (item: T, index: number, arrayLength: number) => Promise<mixed>|mixed,
  ): Promise<Array<T>>;
  static try<T>(fn: () => T|Promise<T>, args: ?Array<any>, ctx: ?any): Promise<T>;
  static attempt<T>(fn: () => T|Promise<T>, args: ?Array<any>, ctx: ?any): Promise<T>;
  static delay<T>(value: T|Promise<T>, ms: number): Promise<T>;
  static delay(ms: number): Promise<void>;


  static defer(): Defer;
  static setScheduler(scheduler: (callback: (...args: Array<any>) => void) => void): void;

  static method<T>(fn: (...args: any) => T): Promise<T>;
  static cast<T>(value: T|Promise<T>): Promise<T>;
  static bind(ctx: any): Promise<void>;
  static is(value: any): boolean;
  static longStackTraces(): void;

  static onPossiblyUnhandledRejection(handler: (reason: any) => any): void;



  constructor(callback: (
    resolve: (result: Promise<R> | R) => void,
    reject:  (error: any) => void
  ) => mixed): void;
  then<U>(onFulfill?: (value: R) => Promise<U> | U, onReject?: (error: any) => Promise<U> | U): Promise<U>;
  catch<U>(onReject?: (error: any) => ?Promise<U> | U): Promise<U>;
  caught<U>(onReject?: (error: any) => ?Promise<U> | U): Promise<U>;
  error<U>(onReject?: (error: any) => ?Promise<U> | U): Promise<U>;
  done<U>(onFulfill?: (value: R) => mixed, onReject?: (error: any) => mixed): void;
  finally<T>(onDone?: (value: R) => mixed): Promise<T>;
  lastly<T>(onDone?: (value: R) => mixed): Promise<T>;
  tap<T>(onDone?: (value: R) => mixed): Promise<T>;
  delay(ms: number): Promise<R>;
  timeout(ms: number, message?: string): Promise<R>;

  call(propertyName: string, ...args: Array<any>): Promise<any>;
  throw(reason: Error): Promise<R>;
  thenThrow(reason: Error): Promise<R>;
  all<T>(): Promise<Array<T>>;
  any<T>(): Promise<T>;
  some<T>(count: number): Promise<Array<T>>;
  race<T>(): Promise<T>;
  map<T, U>(mapper: (item: T, index: number, arrayLength: number) => Promise<U> | U, options?: ConcurrencyOption): Promise<Array<U>>;
  mapSeries<T, U>(mapper: (item: T, index: number, arrayLength: number) => Promise<U> | U): Promise<Array<U>>;
  reduce<T, U>(
    reducer: (total: T, item: U, index: number, arrayLength: number) => Promise<T> | T,
    initialValue?: T
  ): Promise<T>;
  filter<T>(filterer: (item: T, index: number, arrayLength: number) => Promise<bool> | bool, options?: ConcurrencyOption): Promise<Array<T>>;
  each<T, U>(iterator: (item: T, index: number, arrayLength: number) => Promise<U> | U): Promise<Array<T>>;

  reflect(): Promise<PromiseInspection>;

  isFulfilled(): bool;
  isRejected(): bool;
  isPending(): bool;
  isResolved(): bool;

  value(): R;
  reason(): any;
}

declare class Defer {
  promise: Promise;
  resolve: (value: any) => any;
  reject: (value: any) => any;
}
