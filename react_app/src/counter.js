import React from 'react';

const Counter = (props) => {
    // console.log(' from counter js', props)
    return (
        <div>
            <h1>Count : {props.count}</h1>
            <button onClick = {props.increment}>Increase</button>
            <button onClick = {props.decrement}>decrease</button>
        </div>
    )
}

export default Counter;