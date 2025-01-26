import {BASE_URL, POPULAR_MOVIE_URL, SEARCH_URL} from '../constants/movie';
import {MovieDetail, MovieList} from '../types/movie';
import {createApiErrorMessage} from '../utils/error';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getMovieList = async ({pageParam = 1}: {pageParam?: number}) => {
  const params = {
    api_key: import.meta.env.VITE_TMDB_TOKEN,
    language: 'ko-KR',
    page: String(pageParam),
  };
  const endpoint = `${POPULAR_MOVIE_URL}?${new URLSearchParams(params).toString()}`;

  await delay(1500); // NOTE: 스켈레톤 디스플레이를 위함

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(createApiErrorMessage(response.status));
  }

  const data = await response.json();
  return data as MovieList;
};

interface GetSearchedMovieListParam {
  pageParam?: number;
  title: string;
}

export const getSearchedMovieList = async ({pageParam = 1, title}: GetSearchedMovieListParam) => {
  const params = {
    api_key: import.meta.env.VITE_TMDB_TOKEN,
    query: title, // 검색어
    language: 'ko-KR',
    page: String(pageParam),
  };

  const endpoint = `${SEARCH_URL}?${new URLSearchParams(params).toString()}`;

  await delay(1500); // NOTE: 스켈레톤 디스플레이를 위함
  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(createApiErrorMessage(response.status));
  }

  const data = await response.json();
  return data as MovieList;
};

export const getMovieDetail = async (movieId: number) => {
  const params = {
    api_key: import.meta.env.VITE_TMDB_TOKEN,
    language: 'ko-KR',
  };
  const endpoint = `${BASE_URL}/movie/${movieId}?${new URLSearchParams(params).toString()}`;

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(createApiErrorMessage(response.status));
  }

  const data = await response.json();
  return data as MovieDetail;
};
