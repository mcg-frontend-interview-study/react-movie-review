import {ENDPOINTS} from '@constants/endpoints';
import {MyScoreByMovie} from '@type/myScoreByMovie';
import {ResponseMovieDetail, ResponseMoviePagination} from '@type/tmdb_api_response';
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

export const getMovieDetail = async (id: number) => {
  const response = await http.get<ResponseMovieDetail>({
    endpoint: `${ENDPOINTS.movieDetail}/${id}`,
    params: {
      language: 'ko-kr',
    },
  });

  return response;
};

export const getMovieScore = async (id: number) => {
  const response = await http.get<MyScoreByMovie>({
    baseUrl: 'http://localhost:5173',
    endpoint: `${ENDPOINTS.favoriteMovie}/${id.toString()}`,
  });

  return response;
};

type Args = {
  id: number;
  vote: number;
};

export const postMovieScore = async (args: Args) => {
  const response = await http.post<{movieId: string}>({
    baseUrl: 'http://localhost:5173',
    endpoint: `${ENDPOINTS.favoriteMovie}/${args.id.toString()}`,
    body: {
      vote: args.vote,
    },
  });

  return response;
};

export const patchMovieScore = async (args: Args) => {
  const response = await http.patch<{movieId: string}>({
    baseUrl: 'http://localhost:5173',
    endpoint: `${ENDPOINTS.favoriteMovie}/${args.id.toString()}`,
    body: {
      vote: args.vote,
    },
  });

  return response;
};
