import React from 'react';
import './App.css';

import Counter from './components/Counter';
import ListUsers from './components/ListUsers';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Counter/>
      <hr/>
      <ListUsers/>
      <hr/>
      <Form/>
    </div>
  );
}

export default App;
