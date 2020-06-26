import { API_URL2 } from '../../../config';
export const SET_STARSHIPS = 'SET_STARSHIPS';

const urls = [
  `${API_URL2}starships`,
  `${API_URL2}starships/?page=2`,
  `${API_URL2}starships/?page=3`,
];

export function getStarships() {
  return (dispatch) =>
    Promise.all(
      urls.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((res) => res.results),
      ),
    ).then((starships) => dispatch(setStarships([].concat(...starships))));
}

export function setStarships(starships) {
  return {
    type: SET_STARSHIPS,
    starships,
  };
}
