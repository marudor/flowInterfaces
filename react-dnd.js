declare module 'react-dnd' {
  declare function DropTarget(type: string|string[], spec?: Object, collect?: Object, options?: any): (component: ReactClass) => ReactClass;
  declare function DragSource(type: string|string[], spec?: Object, collect?: Object, options?: any): (component: ReactClass) => ReactClass;
  declare function DragLayer(type: string|string[], spec?: Object, collect?: Object, options?: any): (component: ReactClass) => ReactClass;
  declare function DragDropContext(backend: any): ReactClass;
}


declare module 'react-dnd-html5-backend' {
  declare class HTML5Backend {
    getEmptyImage(): any;
  }
  declare var exports: HTML5Backend;
}

declare module 'react-dnd-touch-backend' {
  declare var exports: any;
}
