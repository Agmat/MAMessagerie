import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Header from 'components/Header';
import useFetch from 'hooks/useFetch';
import RealtorsContext from 'contexts/RealtorsContext';
import Routes from './Routes';

function App() {
  const [realtors, setRealtors] = useState({});
  const baseData = useFetch('/realtors');

  console.log(realtors);
  useEffect(() => {
    if (baseData) setRealtors(baseData);
  }, [baseData]);

  return (
    <RealtorsContext.Provider value={{ realtors, updateRealtors: setRealtors }}>
      <Router>
        <div className="appRoot">
          <Header />
          <Routes />
        </div>
      </Router>
    </RealtorsContext.Provider>
  );
}

export default App;
