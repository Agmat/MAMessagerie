import React from 'react';
import { useLocation } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import MessageList from 'components/MessageList';
import MessageDesc from 'components/MessageDesc';

const Home = () => {
  const { pathname } = useLocation();

  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
        <MessageList />
        <MessageDesc />
      </Grid>
    </Grid>
  );
};

export default Home;
