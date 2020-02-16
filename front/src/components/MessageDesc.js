import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import isEmpty from 'lodash/isEmpty';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';

import RealtorsContext from 'contexts/RealtorsContext';
import useFetch from 'hooks/useFetch';
import { primaryBlue, primaryGrey } from 'styles/constants';

const styles = (theme) => ({
  root: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#EEEEEE',
    height: 'calc(100vh - 60px - 4rem)',
  },
  content: {
    padding: '1rem 2rem',
    borderRadius: 4,
    backgroundColor: 'white',
    [theme.breakpoints.down('xs')]: {
      padding: '1rem',
    },
  },
});

const MessageDesc = ({ classes }) => {
  const [, setForceUpdate] = useState(false);
  const { params: { realtorId, messageId } } = useRouteMatch('/:realtorId/:messageId');
  const { realtors, updateRealtors } = useContext(RealtorsContext);
  const data = useFetch(`/realtors/${realtorId}/messages/${messageId}`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'PATCH',
    body: JSON.stringify({ read: true }),
  });

  useEffect(() => {
    if (!isEmpty(realtors)) setForceUpdate(true);
  }, [realtors]);

  useEffect(() => {
    if (data && !isEmpty(realtors)) {
      const messages = [...(realtors[realtorId]?.messages || [])];
      const msgToChange = messages.find((msg) => msg.id === parseInt(messageId, 10));
      if (msgToChange) msgToChange.read = true;
      updateRealtors({ ...realtors, [realtorId]: { ...realtors[realtorId], messages } });
    }
  }, [data]);

  const renderName = () => {
    if (data) {
      const { contact: { firstname, lastname } } = data;
      return `${firstname} ${lastname}`;
    }
    return null;
  };

  const renderContact = () => {
    if (data) {
      const { contact: { email, phone } } = data;
      return (
        <>
          <Typography variant="h6">{renderName()}</Typography>
          <Grid container>
            <Grid item xs={6}><Typography variant="subtitle1">Email</Typography></Grid>
            <Grid item xs={6}>
              <Typography
                variant="subtitle1"
                component="a"
                href={`mailto:${email}`}
                style={{ color: primaryBlue, textDecoration: 'none' }}
              >
                {email}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}><Typography variant="subtitle1">Téléphone</Typography></Grid>
            <Grid item xs={6}><Typography variant="subtitle1" style={{ color: primaryBlue }}>{phone}</Typography></Grid>
          </Grid>
        </>
      );
    }
    return null;
  };

  const renderBody = () => {
    if (data) {
      const fr = moment().local('fr');
      return (
        <>
          <Typography variant="h5">{renderName()}</Typography>
          <Typography variant="subtitle1" style={{ marginBottom: '2rem', color: primaryGrey }}>
            {`${fr.format('LL')} à ${fr.format('LT')}`}
          </Typography>
          <Typography variant="subtitle1">{data.body}</Typography>
        </>
      );
    }
    return null;
  };

  return (
    <div className={classes.root}>
      <div className={classes.content} style={{ marginBottom: '1rem', flexBasis: 'calc(130px - 2rem)' }}>
        {renderContact()}
      </div>
      <div className={classes.content} style={{ flexGrow: '1' }}>
        {renderBody()}
      </div>
    </div>
  );
};

MessageDesc.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MessageDesc);
