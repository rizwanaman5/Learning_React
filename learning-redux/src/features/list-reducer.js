const initialState = {
    data: [
        {
            todo: 'Go Home'
        },
        {
            todo: 'Learn to code'
        },
        {
            todo: 'Learn Redux'
        },
        {
            todo: 'make a project'
        }
    ]
}

const CreateList = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return { ...state, data: [...state.data, action.payload] }
        case "DEL":
            return { ...state, data: [...state.data, action.payload] }
        default:
            return { ...state }
    }
}

export default CreateList