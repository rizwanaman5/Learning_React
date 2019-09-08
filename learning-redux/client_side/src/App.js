import React from 'react';
import './App.css';
import Counter from './Count';
import List from './list';
import ShowList from './showList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Build Your Todo</h1>
        {/* <Counter /> */}
        <List />
        <ShowList />
      </header>
    </div>
  );
}

export default App;
