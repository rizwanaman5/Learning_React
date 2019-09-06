import React from 'react';
import { connect } from 'react-redux';
import { getMovies } from './action';
import { bindActionCreators } from 'redux';
import { MovieCard } from './styled-components';
import { Link , Route} from 'react-router-dom';
import MovieDetails from './movieDetails';


class Movies extends React.Component {
    componentDidMount() {
        this.props.getMovies()
    }

    render() {
        // console.log(this.props.data)

        return (
            <div>
                <h1>Movies</h1>
                <div >
                    {this.props.data.map((data) => (
                        <Link to={data._id}>
                            <MovieCard src={data.images.poster} />
                        </Link>
                    ))}
                </div>
            </div>
        )
    }
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