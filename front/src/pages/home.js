import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Home = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (pathname === '/') history.replace('/101');
  });

  return <div>NOPE</div>;
};

export default Home;
