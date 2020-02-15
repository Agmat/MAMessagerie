import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';

import { MALogo } from 'assets/svg';
import RealtorsContext from 'contexts/RealtorsContext';

const Header = () => {
  const { realtors, updateRealtors } = useContext(RealtorsContext);

  console.log(realtors);
  return (
    <AppBar position="static">
      <Toolbar>
        <SvgIcon style={{ marginRight: '.5rem' }}><path d={MALogo} /></SvgIcon>
        <Typography variant="h6">MeilleursAgents PRO</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
