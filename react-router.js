declare module 'react-router' {
  declare class ReactRouter extends ReactClass {
    Route: ReactClass;
    IndexRoute: ReactClass;
    Redirect: ReactClass;
    Link: ReactClass;
  }
  declare var exports: ReactRouter;
}

declare module 'react-router/lib/PatternUtils' {
  declare var exports: any;
}

declare module 'history/lib/createBrowserHistory' {
  declare var exports: any;
}
