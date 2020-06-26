import { SET_VEHICLES } from './actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_VEHICLES:
      return action.vehicles;
    default:
      return state;
  }
};
