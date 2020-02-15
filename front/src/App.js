import React, { useState, useEffect } from 'react';

import Header from 'components/Header';
import RealtorsContext from 'contexts/RealtorsContext';
import useFetch from 'hooks/useFetch';

function App() {
  const [realtors, setRealtors] = useState({});
  const baseData = useFetch('/realtors');

  useEffect(() => {
    if (baseData) setRealtors(baseData);
  }, [baseData]);

  return (
    <RealtorsContext.Provider value={{ realtors, updateTheme: setRealtors }}>
      <div className="appRoot">
        <Header />
      </div>
    </RealtorsContext.Provider>
  );
}

export default App;
