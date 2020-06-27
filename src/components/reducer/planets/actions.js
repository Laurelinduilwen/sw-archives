import { API_URL2 } from '../../../config';
export const SET_PLANETS = 'SET_PLANETS';

const urls = [
  `${API_URL2}planets`,
  `${API_URL2}planets/?page=2`,
  `${API_URL2}planets/?page=3`,
  `${API_URL2}planets/?page=4`,
  `${API_URL2}planets/?page=5`,
  `${API_URL2}planets/?page=6`,
];

export function getPlanets() {
  return (dispatch) =>
    Promise.all(
      urls.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((res) => res.results),
      ),
    ).then((planets) => dispatch(setPlanets([].concat(...planets))));
}

export function setPlanets(planets) {
  return {
    type: SET_PLANETS,
    planets,
  };
}
