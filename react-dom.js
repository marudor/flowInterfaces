declare module 'react-dom' {
  declare function findDOMNode(component: any): ?HTMLElement;
  declare function render(component: any): any;
  declare function unmountComponentAtNode(node: Node): void;
}
