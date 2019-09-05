import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import Home from './routes/home';
import Signin from './routes/signin';
import Dashboard from './routes/dashboard';

const ProtectedRoute = ({ component: Component, isAuth, ...props }) => {
  console.log("props from private route", props)
  return <Route
    {...props}
    render={(props) => isAuth === true ?
      <Component {...props} />
      :
      <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
    }
  />
}

class App extends React.Component {

  state = {
    isAuth: false
  }

  loginHandler = () => {
    this.setState({
      isAuth: true
    })
    return (
      <Redirect to="/dashboard" />
    )
  }

  isLogout = () => {
    this.setState({
      loggedIn: false
    })
  }

  render() {

    return (
      <div className="App" >
        <nav style={{ display: 'flex' }}>
          <h3>NavBar</h3>
          <ul style={{ display: 'flex' }}>
            <li style={{ marginLeft: '30px' }}>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signin' render={(props) => <Signin {...props} loginHandler={this.loginHandler} />} />
          <ProtectedRoute exact path='/dashboard' isAuth={this.state.isAuth} component={Dashboard} isLogout={this.isLogout} />
        </Switch>
      </div>
    );
  }
}


export default App;
