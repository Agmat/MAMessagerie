import React, { useContext, useState } from 'react';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import map from 'lodash/map';
import find from 'lodash/find';
import { useRouteMatch } from 'react-router-dom';

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
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {currentRealtor?.name || 'Chargement'}
      </Button>
      <Menu
        keepMounted
        id="simple-menu"
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        {map(realtors, (realtor) => (
          <MenuItem
            key={`realtorMenu#${realtor.id}`}
          >
            {realtor.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Realtors;
