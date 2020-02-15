import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Home from 'pages/home';

const Routes = () => (
  <Switch>
    <Route path="/:realtorId?" component={Home} />
  </Switch>
);

export default Routes;
