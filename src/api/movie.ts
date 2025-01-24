import axios from 'axios';
import { TMDB_URL } from './constant';
import { Movie, MovieDetail } from '../types/movie.type';

interface GetPopularMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const getPopularMovies = async ({
  page,
}: {
  page: number;
}): Promise<GetPopularMoviesResponse> => {
  try {
    const response = await axios.get(
      `${TMDB_URL}/movie/popular?${new URLSearchParams({
        api_key: import.meta.env.VITE_API_KEY,
        language: 'ko-KR',
        page: `${page}`,
      })}`,
    );

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch popular movies');
  }
};

interface GetSearchedMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const getSearchedMovies = async ({
  page,
  keyword,
}: {
  page: number;
  keyword: string;
}): Promise<GetSearchedMoviesResponse> => {
  try {
    const response = await axios({
      method: 'GET',
      url: `${TMDB_URL}/search/movie`,
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        include_adult: 'false',
        language: 'ko-KR',
        page,
        query: keyword,
      },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch popular movies');
  }
};

export const getMovie = async ({
  movieId,
}: {
  movieId: number;
}): Promise<MovieDetail> => {
  try {
    const response = await axios({
      method: 'GET',
      url: `${TMDB_URL}/movie/${movieId}`,
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        language: 'ko-KR',
      },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch popular movies');
  }
};
