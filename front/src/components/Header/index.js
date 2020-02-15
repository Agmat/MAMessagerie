import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';

import { MALogo } from 'assets/svg';
import Realtors from 'components/Header/Realtors';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <SvgIcon style={{ marginRight: '.5rem' }}><path d={MALogo} /></SvgIcon>
        <Typography variant="h6">MeilleursAgents PRO</Typography>
        <Realtors />
      </Toolbar>
    </AppBar>
  );
};

export default Header;