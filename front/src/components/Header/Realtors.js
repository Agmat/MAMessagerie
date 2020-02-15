import React, { useContext, useState } from 'react';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import map from 'lodash/map';
import find from 'lodash/find';
import Typography from '@material-ui/core/Typography';
import { useRouteMatch, Link } from 'react-router-dom';

import MediaQuery from 'components/MediaQuery';
import RealtorsContext from 'contexts/RealtorsContext';

/**
 * Create menu where we can chose the realtor we want to see the messages of
 */
const Realtors = () => {
  const { realtors } = useContext(RealtorsContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const { params: { realtorId } } = useRouteMatch('/:realtorId?');

  /**
   * Open Menu
   */
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const currentRealtor = find(realtors, (realtor) => realtor.id === parseInt(realtorId, 10));

  return (
    <div style={{ borderLeft: '1px solid white', height: '100%', display: 'flex', alignItems: 'center' }}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} fullWidth>
        <img src={currentRealtor?.logo} alt="profileImg" style={{ height: 40, borderRadius: '50%', marginRight: '.5rem' }} />
        <MediaQuery type="desktopAndTablet">
          <Typography variant="button" style={{ color: 'white' }}>{currentRealtor?.name || 'Chargement'}</Typography>
        </MediaQuery>
      </Button>
      <Menu
        keepMounted
        id="simple-menu"
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        getContentAnchorEl={null}
      >
        {map(realtors, (realtor) => (
          <MenuItem
            key={`realtorMenu#${realtor.id}`}
            onClick={handleClose}
          >
            <Link to={`/${realtor.id}`} style={{ color: 'rgba(0, 0, 0, 0.87)', textDecoration: 'none' }}>
              {realtor.name}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Realtors;
