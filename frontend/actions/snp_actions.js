import { fetchSnp } from '../util/snp_api_util';

export const RECEIVE_SNP = "RECEIVE_SNP";

export const requestSnp = id => dispatch => (
  fetchSnp(id).then(snp => dispatch(receiveSnp(snp)))
);

export const receiveSnp = snp => ({
  type: RECEIVE_SNP,
  snp
});
