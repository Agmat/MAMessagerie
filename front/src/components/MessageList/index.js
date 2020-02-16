import React, { useContext, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import find from 'lodash/find';
import map from 'lodash/map';
import CircularProgress from '@material-ui/core/CircularProgress';
import InfiniteScroll from 'react-infinite-scroller';

import useFetch from 'hooks/useFetch';
import Message from 'components/MessageList/Message';
import RealtorsContext from 'contexts/RealtorsContext';

const MessageList = () => {
  const [hasMore, setHasMore] = useState(true);
  const { realtors, updateRealtors } = useContext(RealtorsContext);
  const { params: { realtorId } } = useRouteMatch('/:realtorId?');
  const currentRealtor = find(realtors, (realtor) => realtor.id === parseInt(realtorId, 10));
  const messages = useFetch((currentRealtor) ? `/realtors/${currentRealtor.id}/messages` : null);

  /**
   * Update realtor's message when they're fetch
   */
  useEffect(() => {
    if (messages) {
      updateRealtors({ ...realtors, [currentRealtor.id]: { ...currentRealtor, messages } });
    }
  }, [messages]);

  /**
   * Loads next messages page
   */
  const loadMore = (page) => {
    if (page > 4) setHasMore(false);
    fetch(`http://ma-api.com//realtors/${currentRealtor.id}/messages?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        updateRealtors({ ...realtors, [currentRealtor.id]: { ...currentRealtor, messages: [...currentRealtor.messages, ...data] } });
      });
  };

  return (
    <div style={{ height: 'calc(100vh - 60px', overflow: 'auto', backgroundColor: 'white' }}>
      <InfiniteScroll
        loadMore={loadMore}
        pageStart={1}
        hasMore={currentRealtor?.messages && hasMore}
        loader={(
          <div key="newsLoader">
            <div style={{ textAlign: 'center', display: 'block' }}>
              <CircularProgress style={{ padding: '0', border: 'none' }} color="primary" />
            </div>
          </div>
        )}
        useWindow={false}
      >
        {map(currentRealtor?.messages, (message) => (
          <Message key={`message#${message.id}`} data={message} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default MessageList;
