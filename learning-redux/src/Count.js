import React from 'react';
import { connect } from 'react-redux';
import Count from './reducer';


const Counter = (props) => {
console.log(props)
    return (
        <div>
            <h1>Count : {props.count} </h1>
            <button>INC</button>
            <button>DEC</button>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        count: state.count
    }
}

const mapDispatchToProps = { Count }

export default connect(mapStateToProps, mapDispatchToProps)(Counter);