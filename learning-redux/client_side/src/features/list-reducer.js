const initialState = {
    data: []
}

console.log('from list-reducer',initialState)

const CreateList = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return { ...state, data: [...state.data, action.payload] }
        case "DEL":
            return { ...state, data: [...state.data, !action.payload] }
        default:
            return { ...state }
    }
}

export default CreateList