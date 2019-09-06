import axios from 'axios'
//action creator 
export function getMovies(){
    return async function (dispatch){
    const res = await axios.get('https://tv-v2.api-fetch.website/movies/3?sort=trending&order=1&genre=documentary')
    console.log(res.data);
    
    return dispatch({
        type: "GET_MOVIES",
        payload: res.data
    })
    }
} 

export function getMovie(id){
    return async function (dispatch){
    const res = await axios.get(`https://tv-v2.api-fetch.website/movie/${id}`)
    console.log(res.data);
    
    return dispatch({
        type: "GET_MOVIE_DETAILS",
        payload: res.data
    })
    }
} 

