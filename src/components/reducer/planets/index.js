import { SET_PLANETS } from './actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLANETS:
      return action.planets;
    default:
      return state;
  }
};
