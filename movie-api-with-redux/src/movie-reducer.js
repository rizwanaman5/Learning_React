const initialState = {
    movies: [],
    movieDetails: [],
    isLoaded: false,

}

const MovieList = (state = initialState, action) => {
    switch (action.type) {
        case "GET_MOVIES":
            return { ...state, movies: action.payload, isLoaded: true }
        case "GET_MOVIE_DETAILS":
            return { ...state, movieDetails: action.payload }
        case "CLEAR_DATA":
            return { ...state, movieDetails: [] }
        default:
            return { ...state }
    }
}

export default MovieList