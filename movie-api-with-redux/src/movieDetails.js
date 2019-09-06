import React from 'react';
import { connect } from 'react-redux';
import { getMovie } from './action';
import { bindActionCreators } from 'redux';



class MovieDetails extends React.Component {
    componentDidMount() {
        this.props.getMovie(this.props.match.params.id)
    }
    render() {
        console.log('movieDetails', this.props)
        return (
            <div>
                <h1>{}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.MovieList.movieDetails
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getMovie
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)