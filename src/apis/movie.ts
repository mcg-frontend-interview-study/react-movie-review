import {ENDPOINTS} from '@constants/endpoints';
import {ResponseMoviePagination} from '@type/tmdb_api_response';
import {http} from '@utils/http';

export const getPopularMovieList = async (page: number) => {
  const response = await http.get<ResponseMoviePagination>({
    endpoint: ENDPOINTS.popularMovies,
    params: {
      language: 'ko-kr',
      page,
    },
  });

  return response;
};

export const getMatchedMovieList = async (page: number, query: string) => {
  const response = await http.get<ResponseMoviePagination>({
    endpoint: ENDPOINTS.matchedMovies,
    params: {
      language: 'ko-kr',
      page,
      query,
    },
  });

  return response;
};
