import React from 'react';
import Info from './components/Table'
import NewEntry from './components/NewEntry'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>New entry</h3>
        <NewEntry />
      </header>
        <h3>List of entries</h3>
      <Info />
    </div>
  );
}

export default App;
