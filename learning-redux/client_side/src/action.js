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

export function makeTodo(a) {
    // console.log(e.target.value);

    return function (dispatch) {
        axios.post('/todos', a)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        return dispatch({
            type: 'DEL',
            payload: a
        })
    }
}

export function deleteTodo(a) {
    // console.log(e.target.value);

    return function (dispatch) {
        axios.delete('/todos', a)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))


        return dispatch({
            type: 'ADD',
            payload: a
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

