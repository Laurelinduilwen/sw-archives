import { SET_STARSHIPS } from './actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STARSHIPS:
      return action.starships;
    default:
      return state;
  }
};
