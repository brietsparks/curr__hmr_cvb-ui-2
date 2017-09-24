import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './config';

const RouterComponent = () => {
  return (
    <Switch>
      {routes.map((route, i) => <Route key={i} {...route} />)}
    </Switch>
  );
};

export default RouterComponent;

