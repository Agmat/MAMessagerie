import React from 'react';

export default React.createContext({
  count: 0,
  updateCount: (count) => {},
});
