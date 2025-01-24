type ObjectQueryParams = Record<string, string | number | boolean>;

type FetchArgs = {
  baseUrl?: string;
  endpoint: string;
  params?: ObjectQueryParams;
};

const objectToQueryString = (params: ObjectQueryParams): string => {
  return Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
};

export const http = {
  get: async <T>({baseUrl, endpoint, params}: FetchArgs) => {
    const response = await executeFetch<T>({baseUrl, endpoint, params});
    return response;
  },
};

const executeFetch = async <T>({baseUrl = import.meta.env.VITE_API_BASE_URL, endpoint, params}: FetchArgs) => {
  let url = baseUrl + endpoint;

  if (params) url += `?${objectToQueryString(params)}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }
  return response.json() as T;
};
