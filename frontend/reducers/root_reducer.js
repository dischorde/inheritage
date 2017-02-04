import { combineReducers } from 'redux';
import ethnicityReducer from './ethnicity_reducer';
import profileReducer from './profile_reducer';

const rootReducer = combineReducers({
  ethnicities: ethnicityReducer,
  profile: profileReducer
});

export default rootReducer;
