const initialState = {
    movies: []
}

const MovieList = (state = initialState, action) => {
    switch (action.type) {
        case "GET_MOVIES":
            return { ...state, movies: action.payload }
        default:
            return { ...state }
    }
}

export default MovieList