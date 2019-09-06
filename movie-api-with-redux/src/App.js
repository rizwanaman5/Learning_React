import React from 'react';
import './App.css';
import Movies from './movies';
import MovieDetails from './movieDetails'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App App-header">  
      <Route exact path="/" component={Movies} />
      <Route exact path="/:id" component={MovieDetails} />
    </div>
  );
}

export default App;
