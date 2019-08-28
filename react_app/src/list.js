import React from 'react';

class List extends React.Component {
    state = {
        query: ''
    }
    
    updateQuery = (e) => {
        this.setState({
            query: e.target.value
        })
    }
    render() {
        const { contacts, removeContacts } = this.props
        const showContacts = this.state.query === ''
            ? contacts
            :contacts.filter((data) => data.name.toLowerCase().includes(this.state.query.toLowerCase()))
        return (
            <div>
                <h1>List of Contacts</h1>
                <input placeholder='name'/>
                <input placeholder="search" value={this.state.query} onChange={this.updateQuery} />
                {showContacts.map((contact) => (
                    <div style={{ border: " 2px dashed red" }} key={contact.id}>
                        <h2>{contact.name}</h2>
                        <button onClick={() => removeContacts(contact)}>Remove Item</button>
                    </div>
                ))}
            </div>
        )
    }
}

export default List;