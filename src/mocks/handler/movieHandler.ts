import {ENDPOINTS} from '@constants/endpoints';
import {favoriteList} from '@mocks/sharedState';
import {http, HttpResponse} from 'msw';

export const movieHandler = [
  http.post<{movieId: string}, {vote: number}>(
    `${import.meta.env.VITE_API_BASE_URL}${ENDPOINTS.favoriteMovie}`,
    async ({params, request}) => {
      const {movieId} = params;
      const {vote} = await request.json();

      favoriteList.push({id: Number(movieId), vote});
      return new HttpResponse(null, {status: 200});
    },
  ),

  http.patch<{movieId: string}, {vote: number}>(
    `${import.meta.env.VITE_API_BASE_URL}${ENDPOINTS.favoriteMovie}`,
    async ({params, request}) => {
      const {movieId} = params;
      const {vote} = await request.json();

      favoriteList.filter(favorite => favorite.id === Number(movieId))[0].vote = vote;
      return new HttpResponse(null, {status: 200});
    },
  ),
];
