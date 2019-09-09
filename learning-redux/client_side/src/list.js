import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AddTodo, DeleteTodo, makeTodo } from './action';
import store from './index';
// import ShowList from './showList';

class List extends React.Component {
    state = {
        todo: ''

    }
    handleSubmit = (e) => {
        e.preventDefault();
        let data = this.state
        console.log('local state in List',data);
        this.props.makeTodo(data);

    }
    onChange = (e) => {
        this.setState({
            todo: e.target.value
        })
    }
    // removeTodo = (todo) => {
    //     const updatedList = this.state.filter((todo)=> )
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name='todo' placeholder='todo' onChange={this.onChange} />
                    <button style={{ marginLeft: '10px' }} type='submit'>Submit</button>
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

const mapDispatchToProps = dispatch => bindActionCreators({ AddTodo, DeleteTodo, makeTodo }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(List);