import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Nav from './nav'

class gitAPI extends React.Component {
  state = {
    data: {

    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users`)
      .then(res => {
        const data = res.data;
        console.log('from handle submit', data);
        this.setState({
          data: data
        });
      })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {/* <h1>Git Form </h1>
          <form onSubmit={this.handleSubmit}>
            <input name="username" onChange={this.handleChange} placeholder='Username' />
            <button type="submit">Submit</button>
          </form> */}

          <Nav/>

        </header>
      </div>
    )
  }
}

export default gitAPI;
