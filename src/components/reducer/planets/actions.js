import { API_URL2 } from '../../../config';
export const SET_CHARACTERS = 'SET_CHARACTERS';

const urls = [`${API_URL2}people`, `${API_URL2}people/?page=2`, `${API_URL2}people/?page=3`];

/* 
export function getCharacters() {
  return (dispatch) =>
    fetch(`${API_URL2}people`)
      .then((res) => res.json())
      .then((res) => res.results)
      .then((characters) => dispatch(setCharacters(characters)));
} */

export function getCharacters() {
  return (dispatch) =>
    Promise.all(
      urls.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((res) => res.results),
      ),
    ).then((characters) => dispatch(setCharacters([].concat(...characters))));
}

export function setCharacters(characters) {
  return {
    type: SET_CHARACTERS,
    characters,
  };
}
