import { combineReducers } from 'redux';
import characters from './characters';
import films from './films';
import starships from './ships';
import vehicles from './vehicles';

export default combineReducers({
  characters,
  films,
  starships,
  vehicles,
});
