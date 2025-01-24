import axios from 'axios';
import { TMDB_URL } from './constant';
import { Movie } from '../types/movie.type';

interface GetPopularMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const getPopularMovies = async (): Promise<GetPopularMoviesResponse> => {
  try {
    const response = await axios.get(
      `${TMDB_URL}/movie/popular?${new URLSearchParams({
        api_key: import.meta.env.VITE_API_KEY,
        language: 'ko-KR',
        // page: `${page}`,
      })}`,
    );

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch popular movies');
  }
};
