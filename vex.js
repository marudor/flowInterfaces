declare module 'vex' {
  declare class VexDefaultOptions {
    appendLocation?: ?string;
    className?: ?string;
    closeClassName?: ?string;
    closeCSS?: Object;
    content?: ?string;
    contentClassName?: ?string;
    contentCSS?: Object;
    css?: Object;
    escapeButtonCloses?: bool;
    overlayClassName?: ?string;
    overlayClosesOnClick?: bool;
    overlayCSS?: Object;
    showCloseButton?: bool;
  }
  declare class VexOptions extends VexDefaultOptions {
    afterOpen?: (contentNode: Node) => any;
    afterClose?: () => any;
  }
  declare class VexDialog {
    static defaultOptions: VexDefaultOptions;
    static alert(options: string|VexOptions): any;
    static confirm(options: VexOptions): any;
    static prompt(options: VexOptions): any;
    static open(options: VexOptions): any;
    static close(id?: ?number): void;
    static closeAll(): void;
    static getAllVexes(): Array<Element>;
    static getVexByID(id: number): any;
  }
  declare class Vex extends VexDialog {
    static dialog: typeof VexDialog;
  }
  declare var exports: typeof Vex;
}
