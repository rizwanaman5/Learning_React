import React from 'react';
import { maxHeaderSize } from 'http';

class User extends React.Component {
    state = {
        id: '',
        name: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props);
        this.props.addContact(this.state);
        this.setState({
            id: '',
            name: ''
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        
        return (
            <div style={{ border: '2px solid grey' }}>
                <h1>User Form </h1>
                <form onSubmit={this.handleSubmit} style={{margin:'10px'}}>
                    <input name="name" value={this.state.name} onChange={this.handleChange} placeholder='name' style={{margin:'5px'}}/>
                    <input name="id" type={Number} value={this.state.id} onChange={this.handleChange} placeholder='id' style={{margin:'5px'}}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default User