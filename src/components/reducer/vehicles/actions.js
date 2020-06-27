import { API_URL2 } from '../../../config';
export const SET_VEHICLES = 'SET_VEHICLES';

const urls = [
  `${API_URL2}vehicles`,
  `${API_URL2}vehicles/?page=2`,
  `${API_URL2}vehicles/?page=3`,
  `${API_URL2}vehicles/?page=4`,
];

export function getVehicles() {
  return (dispatch) =>
    Promise.all(
      urls.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((res) => res.results),
      ),
    ).then((vehicles) => dispatch(setVehicles([].concat(...vehicles))));
}

export function setVehicles(vehicles) {
  return {
    type: SET_VEHICLES,
    vehicles,
  };
}
