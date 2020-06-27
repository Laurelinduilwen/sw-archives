import { API_URL2 } from '../../../config';
export const SET_FILMS = 'SET_FILMS';

const urls = [`${API_URL2}films/`];

export function getFilms() {
  return (dispatch) =>
    Promise.all(
      urls.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((res) => res.results),
      ),
    ).then((films) => dispatch(setFilms([].concat(...films))));
}

export function setFilms(films) {
  return {
    type: SET_FILMS,
    films,
  };
}
