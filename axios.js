declare module 'axios' {
  declare class AxiosXHRConfigBase<T> {
    transformRequest?: <U>(data: T) => U|Array<<U>(data: T) => U>;
    transformReponse?: <U>(data: T) => U;
    headers?: Object;
    params?: Object;
    withCredentials?: boolean;
    responseType?: string;
    xsrfCookieName?: string;
    xsrfHeaderName?: string;
  }
  declare class AxiosXHRConfig<T> extends AxiosXHRConfigBase<T> {
    url: string;
    method?: string;
    data?: T;
  }
  declare class AxiosXHR<T> {
    data: T;
    status: number;
    statusText: string,
    headers: Object;
    config: AxiosXHRConfig<T>;
  }
  declare class AxiosInterceptorIdent extends String {}
  declare class AxiosInterceptor<T> {
    use(
      successHandler: ?(config: AxiosXHRConfig<T>) => AxiosXHRConfig<T>,
      errorHandler: ?(error: any) => any,
    ): AxiosInterceptorIdent;
    eject(ident: AxiosInterceptorIdent): void;
  }
  declare class Axios {
    get<T>(url: string, config: ?AxiosXHRConfigBase<T>): Promise<T>;
    delete<T>(url: string, config: ?AxiosXHRConfigBase<T>): Promise<T>;
    head<T>(url: string, config: ?AxiosXHRConfigBase<T>): Promise<T>;
    post<T>(url: string, data?: any, config: ?AxiosXHRConfigBase<T>): Promise<T>;
    put<T>(url: string, data?: any, config: ?AxiosXHRConfigBase<T>): Promise<T>;
    interceptors: AxiosInterceptor,
  }
  declare var exports: Axios;
}
