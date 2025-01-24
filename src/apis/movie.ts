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
