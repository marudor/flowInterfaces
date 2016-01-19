declare module 'Clamp-js' {
  declare interface ClampOptions {
    clamp?: (number|string);
    useNativeClamp?: bool,
    truncationChar?: string,
    truncationHTML?: string,
    splitOnChars?: Array<string>,
    animate?: bool,
  }
  declare function exports(element: HTMLElement, options?: ClampOptions): void;
}
