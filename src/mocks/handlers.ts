// src/mocks/handlers.js
import { http, HttpResponse } from 'msw';
import { API_URL } from '../api/constant';
import mockRatings from './data/mockRatings.json';

export const handlers = [
  http.get(`${API_URL}/rating/:id`, ({ request }) => {
    const url = new URL(request.url);
    const movieId = Number(url.pathname.split('/').at(-1));

    const rating = mockRatings.find(movie => movie.id === movieId);

    if (rating) {
      return HttpResponse.json(rating.rating);
    }

    return HttpResponse.json(0);
  }),
  http.post(`${API_URL}/rating/:id`, async ({ request }) => {
    const url = new URL(request.url);
    const movieId = Number(url.pathname.split('/').at(-1));
    const { rating } = (await request.json()) as { rating: number };

    const movieData = mockRatings.find(movie => movie.id === movieId);

    if (movieData) {
      movieData.rating = rating;
      return HttpResponse.json(movieData.rating);
    }

    const newMovie = { id: movieId, rating };
    mockRatings.push(newMovie);

    return HttpResponse.json(newMovie.rating);
  }),
];
