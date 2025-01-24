import {BASE_URL, POPULAR_MOVIE_URL, SEARCH_URL} from '../constants/movie';
import {MovieDetail, MovieList} from '../types/movie';

export const getMovieList = async ({pageParam = 1}: {pageParam?: number}) => {
  const params = {
    api_key: import.meta.env.VITE_TMDB_TOKEN,
    language: 'ko-KR',
    page: String(pageParam),
  };
  const endpoint = `${POPULAR_MOVIE_URL}?${new URLSearchParams(params).toString()}`;

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      accept: 'application/json',
    },
  });

  // TODO: 에러메세지 함수
  if (!response.ok) {
    throw new Error('영화 목록 불러오는 도중 에러 발생');
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

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('영화 목록 불러오는 도중 에러 발생');
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
    throw new Error('영화 상세 정보 불러오는 도중 에러 발생');
  }

  const data = await response.json();
  return data as MovieDetail;
};
