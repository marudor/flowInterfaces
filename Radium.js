declare module 'Radium' {
  declare class Radium {
    (reactClass: ReactClass): ReactClass;
    keyframes(animationObject: Object, name?: string): string;
    Style: ReactClass;
    StyleRoot: ReactClass;
  }
  declare var exports: Radium;
}
