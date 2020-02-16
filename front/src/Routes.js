import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Home from 'pages/home';

const Routes = () => (
  <Switch>
    <Route path="/:realtorId?" render={(props) => <Home {...props} key={props.match.params.realtorId} />} />
  </Switch>
);

export default Routes;
