import React, { useState } from 'react';

import Header from 'components/Header';
import RealtorsContext from 'contexts/RealtorsContext';

function App() {
  const [realtors, setRealtors] = useState([]);

  return (
    <RealtorsContext.Provider value={{ realtors, updateTheme: setRealtors }}>
      <div className="appRoot">
        <Header />
      </div>
    </RealtorsContext.Provider>
  );
}

export default App;
