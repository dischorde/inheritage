import * as ProfileAPIUtil from '../util/profile_api_util';
export const RECEIVE_PROFILE = "RECEIVE_PROFILE";
export const CREATE_PROFILE = "CREATE_PROFILE";



export const createProfile = (profile) => dispatch => (
  ProfileAPIUtil.createProfile(profile).then(newProfile => dispatch(receiveProfile(newProfile)))
);

export const requestProfile = (id) => dispatch => (
  ProfileAPIUtil.fetchProfile(id).then(profile => dispatch(receiveProfile(profile)))
);

export const receiveProfile = (profile) => ({
  type: RECEIVE_PROFILE,
  profile
});
