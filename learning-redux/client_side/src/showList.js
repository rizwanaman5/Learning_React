import React from 'react';
import { connect } from 'react-redux';
import { getTodos, deleteTodo } from './action';
import { bindActionCreators } from 'redux'


class ShowList extends React.Component {

    componentDidMount() {
        // axios.get('/todos' )
        // .then((res) => console.log('from showList',res.data))
        // .catch((err) => console.log(err))
        // console.log(this.props)
        this.props.getTodos();

    }
    deleteTodo(a) {
        console.log(a)
        this.props.deleteTodo(a)

    }

    render() {
        let arr = this.props.info[0]
        console.log('inside render', arr)
        if (arr) {
        return (
            <div>
                <ul>
                    {
                        arr.map((data) => (
                            <li key={data._id}>
                                {data.todo}
                                <button onClick={(e)=>this.deleteTodo(data._id)} style={{ marginLeft: '20px' }}>Delete</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
        } else {
            return(
                <div>
                    Loading..
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        info: state.CreateList.data
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getTodos,
    deleteTodo
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ShowList);