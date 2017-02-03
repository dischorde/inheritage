import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { fetchEthnicities } from './util/ethnicity_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.fetchEthnicities = fetchEthnicities;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
