import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/fr';
import {
  faSms,
  faPhone,
  faEnvelope,
  faEnvelopeOpen,
} from '@fortawesome/free-solid-svg-icons';

export default function (ComposedComponent) {
  const FormatedData = ({ ...props }) => {
    const { data: { type, read, date, contact } } = props;

    const getTime = () => {
      const parsedDate = moment(date).local('fr');
      if (parsedDate.isSame(new Date(), 'day')) return parsedDate.format('HH:MM');
      if (parsedDate.isSame(moment(new Date()).subtract(1, 'day'), 'day')) return 'Hier';
      if (parsedDate.isSame(new Date(), 'week')) return parsedDate.format('dddd');
      return parsedDate.format('l');
    };

    const getTitle = () => {
      const name = `${contact.firstname} ${contact.lastname}`
      switch (type) {
        case 'email':
        case 'sms':
        case 'phone':
          return name;
        default:
          return null;
      };
    };

    const GetIcon = () => {
      switch (type) {
        case 'email':
          return (read ? faEnvelopeOpen : faEnvelope);
        case 'phone':
          return faPhone;
        case 'sms':
          return faSms;
        default:
          return null;
      }
    };

    return (
      <ComposedComponent {...props} icon={GetIcon()} formatedTitle={getTitle()} formatedDate={getTime()} />
    );
  };

  FormatedData.propTypes = {
    data: PropTypes.object.isRequired,
  };

  return FormatedData;
}