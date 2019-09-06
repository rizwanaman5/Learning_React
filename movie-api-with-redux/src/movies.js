import React from 'react';
import { connect } from 'react-redux';
import { getMovies } from './action';
import { bindActionCreators } from 'redux';

const Movies = (props) => {
    console.log(props)
    return (
        <div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.MovieList.movies
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getMovies
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Movies)