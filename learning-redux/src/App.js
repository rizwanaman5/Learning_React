import React from 'react';
import './App.css';
import Counter from './Count';
import List from './list';
import ShowList from './todoItems';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <List />
        <ShowList />
      </header>
    </div>
  );
}

export default App;
