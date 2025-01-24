import {BASE_URL} from '../constants/movie';
import {MovieList} from '../types/movie';

export const getMovieList = async ({pageParam = 1}: {pageParam?: number}) => {
  const response = await fetch(
    `${BASE_URL}/popular?api_key=${import.meta.env.VITE_TMDB_TOKEN}&language=ko-KR&page=${pageParam}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        accept: 'application/json',
      },
    },
  );

  if (!response.ok) {
    throw new Error('영화 목록 불러오는 도중 에러 발생');
  }

  const data = await response.json();
  return data as MovieList;
};
