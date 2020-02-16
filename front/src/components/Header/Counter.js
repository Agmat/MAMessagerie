import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { useRouteMatch } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

import useFetch from 'hooks/useFetch';
import CounterContext from 'contexts/CounterContext';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '.15rem 1rem',
    borderRadius: 8,
  },
  with: {
    backgroundColor: '#92D848',
  },
  none: {
    backgroundColor: 'grey',
  },
};

const Counter = ({ classes }) => {
  const { count, updateCount } = useContext(CounterContext);
  const { params: { realtorId } } = useRouteMatch('/:realtorId?');
  const real = useFetch(`/realtors/${realtorId}`);

  useEffect(() => {
    updateCount(real?.unread_messages);
  }, [real]);

  return (
    <div className={clsx(classes.root, { [classes.with]: !!count, [classes.none]: !count })}>
      <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white', marginRight: '.5rem' }} />
      <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>{count}</Typography>
    </div>
  );
};

Counter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Counter);
