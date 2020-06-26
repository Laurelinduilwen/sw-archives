import { SET_FILMS } from './actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FILMS:
      return action.films;
    default:
      return state;
  }
};
