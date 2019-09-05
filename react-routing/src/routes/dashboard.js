import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function Dashboard() {
  // console.log('from dashboard', this.props)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>
          This is the Dashboard page
        </h1>

      </header>
    </div>
  );
}

export default Dashboard;
