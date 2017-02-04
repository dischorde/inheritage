import { RECEIVE_SNP }  from '../actions/snp_actions';

const snpReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SNP:
      return action.snp;
    default:
      return oldState;
  }
};

export default snpReducer;
