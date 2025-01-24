// src/mocks/handlers.js
import { http, HttpResponse } from 'msw';
import { API_URL } from '../api/constant';

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get(`${API_URL}/user`, () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      firstName: 'John',
      lastName: 'Maverick',
    });
  }),
];
