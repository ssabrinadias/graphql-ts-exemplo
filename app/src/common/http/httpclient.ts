/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

export interface HttpRequestOptions extends AxiosRequestConfig {
    readonly data?: unknown;
    readonly params?: unknown;
    readonly headers?: unknown;
    readonly method: Method;
    readonly url: string;
    requestTime?: Date;
  }

  type Method =
    | 'get'
    | 'GET'
    | 'delete'
    | 'DELETE'
    | 'head'
    | 'HEAD'
    | 'options'
    | 'OPTIONS'
    | 'post'
    | 'POST';

class HttpClient {
    config;

    public static async request(options: HttpRequestOptions): Promise<AxiosResponse> {
      return Promise.resolve(axios(this.buildAxiosRequestConfig(options)));
    }

    private static buildAxiosRequestConfig(options: HttpRequestOptions): AxiosRequestConfig {
      const config = {
        url: options.url,
        params: options.params || undefined,
        method: options.method,
        headers: options.headers || undefined,
        data: options.data || undefined,
      };
      return config;
    }
}
export default HttpClient;
