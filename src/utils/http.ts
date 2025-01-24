type ObjectQueryParams = Record<string, string | number | boolean>;

type FetchArgs = {
  baseUrl?: string;
  endpoint: string;
  params?: ObjectQueryParams;
  body?: BodyInit | object | null;
};

const objectToQueryString = (params: ObjectQueryParams): string => {
  return Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
};

export const http = {
  get: async <T>({baseUrl, endpoint, params}: FetchArgs) => {
    const response = await executeFetch<T>({baseUrl, method: 'GET', endpoint, params});
    return response;
  },

  post: async <T>({baseUrl, endpoint, body, params}: FetchArgs) => {
    const response = await executeFetch<T>({baseUrl, method: 'POST', body, endpoint, params});
    return response;
  },

  patch: async <T>({baseUrl, endpoint, body, params}: FetchArgs) => {
    const response = await executeFetch<T>({baseUrl, method: 'PATCH', body, endpoint, params});
    return response;
  },
};

type ExecuteFetchArgs = FetchArgs & {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
};

const executeFetch = async <T>({
  baseUrl = import.meta.env.VITE_API_BASE_URL,
  method,
  body,
  endpoint,
  params,
}: ExecuteFetchArgs) => {
  let url = baseUrl + endpoint;

  if (params) url += `?${objectToQueryString(params)}`;

  const response = await fetch(url, {
    method,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
    body: body ? JSON.stringify(body) : null,
  });

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }
  return response.json() as T;
};
