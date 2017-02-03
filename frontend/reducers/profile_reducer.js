
import { RECEIVE_PROFILE }  from '../actions/profile_actions';

const profileReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PROFILE:
      return action.profile;
    default:
      return oldState;
  }
};

export default profileReducer;
