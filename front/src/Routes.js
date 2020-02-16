import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Home from 'pages/home';
// import Message from 'pages/message';

const Routes = () => (
  <Switch>
    <Route path="/:realtorId?" render={(props) => <Home {...props} key={props.match.params.realtorId} />} />
    {/* <Route path="/:realtorId/:messageId" component={Message} /> */}
  </Switch>
);

export default Routes;
