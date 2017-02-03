import RECEIVE_ETHNICITIES from '../actions/ethnicity_actions';

const ethnicityReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ETHNICITIES:
      return action.ethnicities.objects;
    default:
      return oldState;
  }
};

export default ethnicityReducer;
