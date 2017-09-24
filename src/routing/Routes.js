import React from 'react';
import { Route } from 'react-router';

import LandingPage from '../pages/Landing';
import Auth0Callback from '../pages/Auth0Callback';
import HomePage from '../pages/Home';
import UserPage from '../pages/User';
import AboutPage from '../pages/About';

export const Routes = ({ history }) => (
  <div>
    <Route
      exact path="/"
      component={LandingPage}
    />

    <Route
      path="/callback"
      render={ (props) =>
        <Auth0Callback
          history={history}
          {...props}
        />
      }
    />

    <Route
      path="/home"
      component={HomePage}
    />

    <Route
      path='/user/:userId'
      component={UserPage}
    />

    <Route
      path="/about"
      render={ props => <AboutPage/> }
    />
  </div>
);

export default Routes;