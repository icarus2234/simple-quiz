type FetchResponse<T> = T;

const fetchInstance =
  <T>(method: string) =>
  async (
    route: string,
    body?: T,
    options?: RequestInit
  ): Promise<FetchResponse<T>> => {
    const response = await fetch(route, {
      method,
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options?.headers || {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    return response.json() as FetchResponse<T>;
  };

export const postInstance = <T>(
  route: string,
  body: T,
  options?: RequestInit
) => fetchInstance<T>('POST')(route, body, options);

export const getInstance = <T>(route: string, options?: RequestInit) =>
  fetchInstance<T>('GET')(route, undefined, options);

export const sendResults = async <T>(data: T): Promise<FetchResponse<T>> => {
  return postInstance<T>('api/send-results', data);
};
