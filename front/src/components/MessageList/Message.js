import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { primaryBlue, primaryGrey } from 'styles/constants';
import withFormatedData from 'hoc/withFormatedData';

const styles = (theme) => ({
  body: {
    overflow: 'hidden',
    color: primaryGrey,
    display: '-webkit-box',
    '-webkit-line-clamp': '2',
    textOverflow: 'ellipsis',
    '-moz-box-orient': 'vertical',
    '-webkit-box-orient': 'vertical',
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 250,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  },
  read: {
    color: `${primaryGrey} !important`,
  },
});

const Message = ({ data, icon, formatedDate, formatedTitle, classes }) => {
  const { read } = data;

  return (
    <div style={{ height: 'calc(130px - 2rem)', padding: '1rem .5rem', borderBottom: '1px solid #dcdcdc' }}>
      <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
        <FontAwesomeIcon icon={icon} className={clsx({ [classes.read]: read })} style={{ marginRight: '.5rem', color: primaryBlue, width: '1.25rem', height: '1.25rem' }} />
        <Typography variant="h6" className={classes.title} style={(read) ? { fontWeight: 'normal' } : {}}>{formatedTitle}</Typography>
        <Typography variant="body2" className={clsx({ [classes.read]: read })} style={{ position: 'absolute', right: 0, color: primaryBlue }}>{formatedDate}</Typography>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '1.75rem' }}>
        <Typography variant="subtitle2" className={clsx({ [classes.read]: read })} style={{ fontWeight: 'normal' }}>{data.subject}</Typography>
        <Typography variant="body2" className={classes.body}>{data.body}</Typography>
      </div>
    </div>
  );
};

Message.propTypes = {
  data: PropTypes.object.isRequired,
  icon: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  formatedDate: PropTypes.string.isRequired,
  formatedTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

export default withFormatedData(withStyles(styles)(Message));
