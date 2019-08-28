import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import List from './list';

class App extends React.Component {

  state = {
    count: 0,
    contacts: [
      {
        id: 1,
        name: 'motu'
      },
      {
        id: 2,
        name: 'rushyab'
      },
      {
        id: 3,
        name: 'horse'
      }
    ]
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    if (this.state.count !== 0) {
      this.setState({
        count: this.state.count - 1
      })
    }
  }

  removeContacts = (contact) => {
    console.log('inside app.js', contact)
    const updateState = this.state.contacts.filter((c) => c.id !== contact.id)
    console.log('only updated state', updateState)
    this.setState({
      contacts: updateState
    })

  }

  render() {
    return (
      <div className="App">

        <Counter
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement} />

        <List contacts={this.state.contacts} removeContacts={this.removeContacts} />
      </div>
    );
  }
}

export default App;
