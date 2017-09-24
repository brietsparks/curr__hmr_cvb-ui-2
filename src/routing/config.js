import React from 'react';

import LandingPage from '../pages/Landing';
import Auth0Callback from '../pages/Auth0Callback';
import HomePage from '../pages/Home';
import UserPage from '../pages/User';
import AboutPage from '../pages/About';

export const routes = [
  {
    path: '/',
    component: LandingPage,
    exact: true
  },
  {
    path: '/callback',
    render: props => <Auth0Callback redirectRoute="/self" {...props} />
  },
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/user:userId',
    component: UserPage
  },
  {
    path: '/about',
    component: AboutPage
  }
];

export default routes;