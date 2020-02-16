import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Home from 'pages/home';
import Message from 'pages/message';

const Routes = () => (
  <Switch>
    <Route path="/:realtorId/:messageId" strict component={Message} />
    <Route path="/:realtorId?" strict render={(props) => <Home {...props} key={props.match.params.realtorId} />} />
  </Switch>
);

export default Routes;
