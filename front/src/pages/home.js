import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import MessageList from 'components/MessageList';

const Home = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (pathname === '/') history.replace('/101');
  });

  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
        <MessageList />
      </Grid>
    </Grid>
  );
};

export default Home;
