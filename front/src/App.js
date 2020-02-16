import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Header from 'components/Header';
import useFetch from 'hooks/useFetch';
import RealtorsContext from 'contexts/RealtorsContext';
import CounterContext from 'contexts/CounterContext';
import Routes from './Routes';

function App() {
  const [count, setCount] = useState(0);
  const [realtors, setRealtors] = useState({});
  const baseData = useFetch('/realtors');

  useEffect(() => {
    if (baseData) setRealtors(baseData);
  }, [baseData]);

  return (
    <RealtorsContext.Provider value={{ realtors, updateRealtors: setRealtors }}>
      <CounterContext.Provider value={{ count, updateCount: setCount }}>
        <Router>
          <div className="appRoot">
            <Header />
            <Routes />
          </div>
        </Router>
      </CounterContext.Provider>
    </RealtorsContext.Provider>
  );
}

export default App;
