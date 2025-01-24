import {ENDPOINTS} from '@constants/endpoints';
import {favoriteList} from '@mocks/sharedState';
import {MyScoreByMovie} from '@type/myScoreByMovie';
import {http, HttpResponse} from 'msw';

export const movieHandler = [
  http.get<{movieId: string}>(`${ENDPOINTS.favoriteMovie}/:movieId`, async ({params}) => {
    const {movieId} = params;

    const target = favoriteList.find(favorite => favorite.id === Number(movieId));
    const response: MyScoreByMovie = typeof target !== 'undefined' ? target : {id: -1, vote: 0};

    return HttpResponse.json(response, {status: 200});
  }),

  http.post<{movieId: string}, {vote: number}>(`${ENDPOINTS.favoriteMovie}/:movieId`, async ({params, request}) => {
    const {movieId} = params;
    const {vote} = await request.json();

    favoriteList.push({id: Number(movieId), vote});
    return HttpResponse.json(movieId, {status: 200});
  }),

  http.patch<{movieId: string}, {vote: number}>(`${ENDPOINTS.favoriteMovie}/:movieId`, async ({params, request}) => {
    const {movieId} = params;
    const {vote} = await request.json();

    favoriteList.filter(favorite => favorite.id === Number(movieId))[0].vote = vote;
    return HttpResponse.json(movieId, {status: 200});
  }),
];
