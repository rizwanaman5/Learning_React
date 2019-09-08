import axios from 'axios';

export function getTodos() {
    return async function (dispatch) {
        const res = await axios.get('/todos')
        console.log('from action.js', res.data)

        return dispatch({
            type: 'ADD',
            payload: res.data
        })
    }
}


export function DecCount() {
    return {
        type: 'DEC'
    }
}

export function IncCount() {
    return {
        type: 'INC'
    }
}

export function AddTodo() {
    return {
        type: 'ADD'
    }
}

export function DeleteTodo() {
    return {
        type: 'DEL'
    }
}

