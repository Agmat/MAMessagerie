import React, { useContext, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import find from 'lodash/find';
import map from 'lodash/map';

import useFetch from 'hooks/useFetch';
import Message from 'components/MessageList/Message';
import RealtorsContext from 'contexts/RealtorsContext';

const MessageList = () => {
  const { realtors, updateRealtors } = useContext(RealtorsContext);
  const { params: { realtorId } } = useRouteMatch('/:realtorId?');
  const currentRealtor = find(realtors, (realtor) => realtor.id === parseInt(realtorId, 10));
  const messages = useFetch((currentRealtor) ? `/realtors/${currentRealtor.id}/messages` : null);

  useEffect(() => {
    if (messages) {
      updateRealtors({ ...realtors, [currentRealtor.id]: { ...currentRealtor, messages } });
    }
  }, [messages]);

  return (
    <div style={{ height: 'calc(100vh - 60px', overflow: 'scroll', backgroundColor: 'white' }}>
      {map(currentRealtor?.messages, (message) => (
        <Message key={`message#${message.id}`} data={message} />
      ))}
    </div>
  );
};

export default MessageList;
