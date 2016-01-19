declare module 'react-dnd' {
  declare function DropTarget(compoennt: ReactClass): ReactClass;
  declare function DragSource(compoennt: ReactClass): ReactClass;
  declare function DragLayer(compoennt: ReactClass): ReactClass;
  declare function DragDropContext(backend: any): ReactClass;
}


declare module 'react-dnd-html5-backend' {
  declare function exports(): any;
  declare function getEmptyImage(): any;
}
