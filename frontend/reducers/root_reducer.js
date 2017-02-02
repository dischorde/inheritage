import { combineReducers } from 'redux';
import ethnicityReducer from './ethnicity_reducer';

const rootReducer = combineReducers({
  ethnicities: ethnicityReducer
});

export default rootReducer;
