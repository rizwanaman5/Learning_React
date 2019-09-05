import React from 'react';
import logo from '../logo.svg';
import '../App.css';

class Signin extends React.Component {

  state = {
    name: 'motu',
    password: '123',
    isLoggedIn: false
  }

  handleSubmitedit = (e) => {
    console.log('from handle submit', this.state)
    e.preventDefault();
    console.log(this.props);

    if (this.state.name === 'motu') {
      this.props.loginHandler()
      this.setState({
        isLoggedIn: true
      })
    }

    this.props.history.push('/dashboard')
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  render() {
    console.log('inside render', this.props);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1>
            This is the Sign In page
        </h1>
          <form onSubmit={this.handleSubmitedit}>
            <input name='name' type='text' placeholder='Name' onChange={this.handleChange} />
            <input name='password' type='password' placeholder='Password' onChange={this.handleChange} />
            <button type='submit'>Submit</button>
          </form>

        </header>
      </div>
    );
  }
}
export default Signin;
