import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AddTodo, DeleteTodo } from './action';
import store from './index';

class List extends React.Component {
    state = {
        todo: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let data = this.state
        console.log(data);

        store.dispatch({
            type: "ADD",
            payload: data
        })
    }
    onChange = (e) => {
        this.setState({
            todo: [e.target.value]
        })
    }
    removeTodo = (todo) => {
        const updatedList = this
    }   

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name='todo' placeholder='todo' onChange={(e) => this.onChange(e)} />
                    <button style={{marginLeft:'10px'}} type='submit'>Submit</button>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.CreateList.data
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ AddTodo, DeleteTodo }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(List);