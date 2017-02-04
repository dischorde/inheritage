import { combineReducers } from 'redux';
import ethnicityReducer from './ethnicity_reducer';
import profileReducer from './profile_reducer';
import snpReducer from './snp_reducer';

const rootReducer = combineReducers({
  ethnicities: ethnicityReducer,
  profile: profileReducer,
  snp: snpReducer
});

export default rootReducer;
