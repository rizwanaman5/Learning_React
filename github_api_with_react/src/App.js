import React from 'react';
// import axios from 'axios';
import logo from './logo.svg';
import './App.css';
// import Nav from './nav'

const Navbar = ({ handleSubmitedit, handleChange, name, email }) => {

  return (
    <div>
      <div style={{ backgroundColor: '#ADD8E6', color: '#000000' }}>
        <h2>Enter Your Details</h2>
      </div>
      <div>
        <form onSubmit={handleSubmitedit}>
          <input name='name' value={name} placeholder='name' onChange={(e) => handleChange(e)} />
          <input name='email' value={email} placeholder='email' onChange={(e) => handleChange(e)} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

const MoreDetails = ({ handleSubmitedit, subtractPage, handleChange, name, email, age, company }) => {

  return (
    <div>
      <div style={{ backgroundColor: '#ADD8E6', color: '#000000' }}>
        <h2>Enter Your Details</h2>
      </div>
      <div>
        <form onSubmit={handleSubmitedit}>
          <input name='name' value={name} placeholder='Name' onChange={(e) => handleChange(e)} />
          <input name='age' value={age} placeholder='Age' onChange={(e) => handleChange(e)} />
          <input name='company' value={company} placeholder='Company' onChange={(e) => handleChange(e)} />
          <input name='email' value={email} placeholder='email' onChange={(e) => handleChange(e)} />
          <button type="submit">Submit</button>
        </form>
        <button onClick={subtractPage} type="submit">Back</button>
      </div>
    </div>
  )
}

const ConfirmStage = ({ handleSubmitedit, subtractPage, handleChange, name, email, age, company }) => {

  return (
    <div>
      <div style={{ backgroundColor: '#ADD8E6', color: '#000000' }}>
        <h2>Confirm Your Details</h2>
      </div>
      <div>
        <form onSubmit={handleSubmitedit}>
          <input name='name' value={name} placeholder='Name' onChange={(e) => handleChange(e)} />
          <input name='age' value={age} placeholder='Age' onChange={(e) => handleChange(e)} />
          <input name='company' value={company} placeholder='Company' onChange={(e) => handleChange(e)} />
          <input name='email' value={email} placeholder='email' onChange={(e) => handleChange(e)} />
          <button type="submit">Confirm</button>
        </form>
        <button onClick={subtractPage} type="submit">Back</button>
      </div>
    </div>
  )
}

const LastPage = () => {

  return (
    <div>
      <div style={{ backgroundColor: '#ADD8E6', color: '#000000' }}>
        <h2>Thank You</h2>
      </div>
      <div>
        <h1>Thank You for your details</h1>
      </div>
    </div>
  )
}

class gitAPI extends React.Component {
  state = {
    data: {},
    pageState: 0,
    name: '',
    age: '',
    company: '',
    email: ''
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.get(`https://api.github.com/users`)
  //     .then(res => {
  //       const data = res.data;
  //       console.log('from handle submit', data);
  //       this.setState({
  //         data: data
  //       });
  //     })
  // }

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  handleSubmitedit = (e) => {
    console.log('from handle submit', this.props);

    e.preventDefault();
    console.log(this.state);
    this.setState({
      pageState: this.state.pageState + 1
    })
    
  }

  subtractPage = (e) => {
    console.log('from subtract submit', this.props);

    e.preventDefault();
    console.log(this.state);
    this.setState({
      pageState: this.state.pageState - 1
    })
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {

    switch (this.state.pageState) {
      case 0:
        return (<Navbar handleSubmitedit={this.handleSubmitedit} handleChange={this.handleChange} subtractPage={this.subtractPage} {...this.state} />)

      case 1:
        return (<MoreDetails handleSubmitedit={this.handleSubmitedit} handleChange={this.handleChange} subtractPage={this.subtractPage} {...this.state} />)

      case 2:
        return (<ConfirmStage handleSubmitedit={this.handleSubmitedit} handleChange={this.handleChange} subtractPage={this.subtractPage} {...this.state} />)

      case 3:
        return (<LastPage/>)

      default:
        return (<Navbar handleSubmitedit={this.handleSubmitedit} handleChange={this.handleChange} subtractPage={this.subtractPage} {...this.state} />)
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {/* <Nav/> */}


        </header>
      </div>
    )
  }
}

export default gitAPI;
