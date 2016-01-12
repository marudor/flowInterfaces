type RangeError = Error;
type CancellationErrors = Error;
type TimeoutError = Error;
type RejectionError = Error;
type OperationalError = Error;

type attempt = <T>(fn: () => T|Promise<T>, args: ?Array<any>, ctx: ?any): Promise<T>;

declare class Promise<R> {
  static resolve<T>(object?: Promise<T> | T): Promise<T>;
  static reject<T>(error?: any): Promise<T>;
  static all<T, Elem: Promise<T> | T>(promises: Array<Elem>): Promise<Array<T>>;
  static race<T, Elem: Promise<T> | T>(promises: Array<Elem>): Promise<T>;
  static defer(): Defer;
  static setScheduler(scheduler: (callback: (...args: Array<any>) => void) => void): void;
  static try: attempt;
  static attempt: attempt;


  constructor(callback: (
    resolve: (result: Promise<R> | R) => void,
    reject:  (error: any) => void
  ) => mixed): void;
  then<U>(
    onFulfill?: (value: R) => Promise<U> | U,
    onReject?: (error: any) => Promise<U> | U
  ): Promise<U>;
  catch<U>(
    onReject?: (error: any) => ?Promise<U> | U
  ): Promise<U>;
  done<U>(
    onFulfill?: (value: R) => mixed,
    onReject?: (error: any) => mixed
  ): void;
  finally<T>(
    onDone?: (value: any) => mixed
  ): Promise<T>;

  reflect(): any;

  isFulfilled(): bool;
  isRejected(): bool;
  isPending(): bool;
  isResolved(): bool;
}

declare class Defer {
  promise: Promise;
  resolve: (value: any) => any;
  reject: (value: any) => any;
}
