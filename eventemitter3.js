declare module 'eventemitter3' {
  declare class EventEmitter {
    static defaultMaxListeners: number;
    static constructor(): EventEmitter;
    getMaxListeners(): number;
    setMaxListeners(n: number): EventEmitter;
    listenerCount(event: string): number;
    listeners(event: string): Array<any>;
    listeners(event: string, existence: bool): bool;
    on(event: string, listener: Function, context?: any): EventEmitter;
    addListener(event: string, listener: Function, context?: any): EventEmitter;
    once(event: string, listener: Function, context?: any): EventEmitter;
    removeAllListeners(event?: string): EventEmitter;
    removeListener(event: string, listener: Function, context?: any): EventEmitter;
    off(event: string, listener: Function, context?: any): EventEmitter;
    emit(event: string, ...params?: Array<any>): EventEmitter;
  }
  declare var exports: typeof EventEmitter;
}
