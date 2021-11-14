// for use in node js need this package
//  const { XMLHttpRequest } = require('xmlhttprequest');

function queryStringify(data: any): string | null {
  if (!data) {
    return null;
  }
  return Object.entries(data).reduce((prev, [key, value]) => [...prev, `${key}=${value}`], []).join('&');
}

const contentTypeHeader = 'Content-Type';
const applicationJsonHeader = 'application/json';

enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface HttpOptions {
  headers?: Record<string, string>;
  data?: any;
  timeout?: number;
}

export interface HttpRequest<T> extends XMLHttpRequest {
  response: T;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class HTTPTransport {
  get<T = unknown>(
    url: string,
    options: HttpOptions = {},
  ): Promise<HttpRequest<T>> {
    const query = queryStringify(options.data);
    return this.request(query ? `${url}?${query}` : url, { ...options, method: Method.GET });
  }

  put<T = unknown>(
    url: string,
    options: HttpOptions = {},
  ): Promise<HttpRequest<T>> {
    return this.request(url, { ...options, method: Method.PUT });
  }

  post<T = unknown>(
    url: string,
    options: HttpOptions = {},
  ): Promise<HttpRequest<T>> {
    return this.request(url, { ...options, method: Method.POST });
  }

  delete<T = unknown>(
    url: string,
    options: HttpOptions = {},
  ): Promise<HttpRequest<T>> {
    return this.request(url, { ...options, method: Method.DELETE });
  }

  request<T>(
    url: string,
    options: HttpOptions & { method: Method } = { method: Method.GET },
  ): Promise<HttpRequest<T>> {
    const {
      method, data, timeout, headers,
    } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url, true);

      xhr.timeout = timeout ?? 0;
      if (headers) {
        Object.entries(headers).forEach(([header, value]) => xhr.setRequestHeader(header, value));
      }

      xhr.onload = () => {
        try {
          const response: T = JSON.parse(xhr.responseText);
          resolve({ ...xhr, response });
        } catch (e) {
          resolve(xhr);
        }
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === Method.GET || !data) {
        xhr.send();
      } else {
        if (!data.headers?.[contentTypeHeader]) {
          xhr.setRequestHeader(contentTypeHeader, applicationJsonHeader);
        }
        xhr.send(JSON.stringify(data));
      }
    });
  }
}
