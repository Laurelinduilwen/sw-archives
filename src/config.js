const API_URL = 'https://api.themoviedb.org/3/';
const API_URL2 = 'https://swapi.dev/api/';
const API_KEY = '8b88de351854b5d14d5282f040bef082';

const SEARCH_BASE_URL = `https://swapi.dev/api/people/?search=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500';

export {
  API_URL,
  API_URL2,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  POPULAR_BASE_URL,
  SEARCH_BASE_URL,
};
