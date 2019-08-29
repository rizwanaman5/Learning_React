import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import List from './list';
import User from './controlledForm';

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

  addContact = contact => {
    this.setState({
      contacts: [...this.state.contacts, contact]
    })
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
    // console.log('inside app.js', contact)
    const updateState = this.state.contacts.filter((c) => c.id !== contact.id)
    // console.log('only updated state', updateState)
    this.setState({
      contacts: updateState
    })

  }

  updateContact = (contact) => {
    // console.log('inside app.js line 59', contact)
    const newContact = this.state.contacts.map((c) => {
      // console.log('from updateContact', c)
      if (c.id === contact.id) {
        return contact
      }
      return c
    })
    console.log('only updated state', newContact)
    this.setState({
      contacts: newContact
    })

  }

  render() {
    console.log('from app.js', this.props)
    return (
      <div className="App">

        <Counter
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement} />

        <User contact={this.state.contacts} addContact={this.addContact} />

        <List contacts={this.state.contacts} removeContacts={this.removeContacts} updateContact={this.updateContact} />
      </div>
    );
  }
}

export default App;
