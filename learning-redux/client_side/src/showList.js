import React from 'react';
import { connect } from 'react-redux';
import { getTodos } from './action';
import { bindActionCreators } from 'redux'


class ShowList extends React.Component {

    componentDidMount() {
        // axios.get('/todos' )
        // .then((res) => console.log('from showList',res.data))
        // .catch((err) => console.log(err))
        // console.log(this.props)
        this.props.getTodos();

    }

    render() {
        console.log('inside render', this.props.info)

        return (
            <div>
                <ul>
                    {
                        this.props.info.map((data) => (
                            <li>
                                {data.todo}
                                <button style={{ marginLeft: '20px' }}>Delete</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        info: state.CreateList.data
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getTodos
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ShowList);