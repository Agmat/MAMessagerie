import React from 'react';

import Test from 'components/Test';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit&nbsp;
          <code>src/App.js</code>
          &nbsp;and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Test />
    </div>
  );
}

export default App;
