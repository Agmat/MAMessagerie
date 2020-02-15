import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { MALogo } from 'assets/svg';
import Realtors from 'components/Header/Realtors';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ height: 60, minHeight: 60 }}>
        <Grid container style={{ height: '100%' }}>
          <Grid item xs={9} sm={10} style={{ display: 'flex', alignItems: 'center' }}>
            <SvgIcon style={{ marginRight: '.5rem' }}><path d={MALogo} /></SvgIcon>
            <Typography variant="h6">MeilleursAgents PRO</Typography>
          </Grid>
          <Grid item xs={3} sm={2}>
            <Realtors />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
