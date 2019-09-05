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

  componentDidMount = () => {
    this.setState({
      contacts: JSON.parse(localStorage.getItem('contacts'))
    })
  }

  addContact = async contact => {
   await this.setState({
      contacts: [...this.state.contacts, contact]
    })

    let key = this.state.contacts.map((data) => data.id)
    console.log('for local storage', key);
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
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

  removeContacts = async (contact) => {
    // console.log('inside app.js', contact)
    const updateState = this.state.contacts.filter((c) => c.id !== contact.id)
    // console.log('only updated state', updateState)
   await this.setState({
      contacts: updateState
    })
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));

  }

  updateContact = async (contact) => {
    // console.log('inside app.js line 59', contact)
    const newContact = this.state.contacts.map((c) => {
      // console.log('from updateContact', c)
      if (c.id === contact.id) {
        return contact
      }
      return c
    })
    console.log('only updated state', newContact)
    await this.setState({
      contacts: newContact
    })
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));

  }

  render() {
    console.log('from app.js', this.props)
    return (
      <div className="App">

        {/* <Counter
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement} /> */}

        <User contact={this.state.contacts} addContact={this.addContact} />

        <List contacts={this.state.contacts} removeContacts={this.removeContacts} updateContact={this.updateContact} />


      </div>
    );
  }
}

export default App;
