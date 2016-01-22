declare module 'Radium' {
  declare class Radium {
    (config: Object): (reactClass: ReactClass) => ReactClass;
    (reactClass: ReactClass): ReactClass;
    keyframes(animationObject: Object, name?: string): string;
    Style: ReactClass;
    StyleRoot: ReactClass;
    getState(state: any, componentRef: string, property: string): bool;
  }
  declare var exports: Radium;
}
