import React from 'react';
import Grid from '@material-ui/core/Grid';

import MediaQuery from 'components/MediaQuery';
import MessageList from 'components/MessageList';
import MessageDesc from 'components/MessageDesc';

const Message = () => {
  return (
    <Grid container>
      <MediaQuery type="desktopAndTablet">
        <Grid item sm={4}>
          <MessageList />
        </Grid>
      </MediaQuery>
      <Grid item xs={12} sm={8}>
        <MessageDesc />
      </Grid>
    </Grid>
  );
};

export default Message;
