import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { MALogo } from 'assets/svg';
import Realtors from 'components/Header/Realtors';
import Counter from 'components/Header/Counter';
import { primaryBlue } from 'styles/constants';

const Header = () => (
  <AppBar position="static">
    <Toolbar style={{ height: 60, minHeight: 60, paddingRight: 0, backgroundColor: primaryBlue }}>
      <Grid container style={{ height: '100%' }}>
        <Grid item xs={9} sm={10} style={{ display: 'flex', alignItems: 'center' }}>
          <SvgIcon style={{ marginRight: '.5rem' }}><path d={MALogo} /></SvgIcon>
          <Typography variant="h6" style={{ marginRight: '.5rem' }}>MeilleursAgents PRO</Typography>
          <Counter />
        </Grid>
        <Grid item xs={3} sm={2}>
          <Realtors />
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default Header;
