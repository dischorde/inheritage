import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import HeaderContainer from './header/header_container';
import HomeContainer from './home/home_container';
import ProfileContainer from './profile/profile_container';
import SnpDetailContainer from './snp/snp_detail_container';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="" component={HeaderContainer}>
          <Route path="/" component={HomeContainer}></Route>
          <Route path="/profiles/:profileId" component={ProfileContainer}></Route>
          <Route path="/snp/:snpId" component={SnpDetailContainer}></Route>
          // more here
        </Route>
      </ Router>
    </Provider>
  );
};

export default Root;
