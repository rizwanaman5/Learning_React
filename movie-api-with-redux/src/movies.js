import React from 'react';
import { connect } from 'react-redux';
import { getMovies } from './action';
import { bindActionCreators } from 'redux';
import { MovieCard } from './styled-components';
import { Link } from 'react-router-dom';


class Movies extends React.Component {
    
    componentDidMount() {
        console.log('from did mount', this.props.status)
        // this.props.getMovies()
        const a = !this.props.status ? this.props.getMovies() : null  
    }
    
    render() {
        console.log('inside render', this.props)

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
    return ({
        data: state.MovieList.movies,
        status: state.MovieList.isLoaded
    })
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getMovies
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Movies)