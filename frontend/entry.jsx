import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { fetchEthnicities } from './util/ethnicity_api_util.js';
import { fetchSnp } from './util/snp_api_util.js';
import { fetchProfile, createProfile } from './util/profile_api_util.js';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  window.fetchEthnicities = fetchEthnicities;
  window.fetchSnp = fetchSnp;
  window.fetchProfile = fetchProfile;
  window.createProfile = createProfile;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
