import { fetchEthnicities } from '../util/ethnicity_api_util';

export const RECEIVE_ETHNICITIES = "RECEIVE_ETHNICITIES";

export const requestEthnicities = () => dispatch => (
  fetchEthnicities().then(data => dispatch(receiveEthnicities(data)))
);

export const receiveEthnicities = (ethnicities) => ({
  type: RECEIVE_ETHNICITIES,
  ethnicities
});
