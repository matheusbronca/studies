import React from 'react';
import './styles.css';
import Routes from './routes';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes></Routes>
    </div>
  );
}

export default App;
