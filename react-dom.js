declare module 'react-dom' {
  declare function findDOMNode(component: any): HTMLInputElement;
  declare function render(component: any): any;
  declare function unmountComponentAtNode(node: Node): void;
}
