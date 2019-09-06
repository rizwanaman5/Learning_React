import axios from 'axios';

export function getMovies() {
    return async function (dispatch) {
        const res = await axios.get('https://tv-v2.api-fetch.website/movies/3?sort=trending&order=1&genre=documentary')
        console.log('from action',res.data)
        return dispatch({
            type: "GET_MOVIES",
            payload: res.data
        })
    }
}