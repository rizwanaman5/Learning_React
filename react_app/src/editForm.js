import React from 'react';

class Form extends React.Component {

    state = {
        edit: false,
        id: this.props.contact.id,
        name: this.props.contact.name
    }

    setEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    handleSubmitedit = (e) => {
        console.log('from handle submit', this.props);

        e.preventDefault();
        console.log(this.state);
        this.props.updateContact(this.state);
        this.setState({
            edit: false
        })

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        console.log('from edit form', this.props)
        return (
            <div>
                <button onClick={this.setEdit}>Edit contact</button>
                {
                    this.state.edit &&
                    <form onSubmit={this.handleSubmitedit}>
                        <input name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} placeholder='name' />
                        <button type="submit">Submit</button>
                    </form>
                }

            </div>

        )
    }
}

export default Form