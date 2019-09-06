import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DecCount, IncCount } from './action';


const Counter = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Count : {props.count} </h1>
            <button onClick={props.IncCount} style={{margin:'10px'}}>INC</button>
            <button onClick={props.DecCount}>DEC</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.Count.count
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ DecCount, IncCount }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter);