import React from 'react';
import { connect } from 'react-redux';
import { getMovie } from './action';
import { bindActionCreators } from 'redux';
import { DetailCard } from './styled-components';


class MovieDetails extends React.Component {
    componentDidMount() {
        this.props.getMovie(this.props.match.params.id)
    }
    render() {
        console.log('movieDetails', this.props.data)
        // console.log('from more details',res.data);
        if (this.props.data && this.props.data.images) {
            return (
                <div>
                    <div style={{display:'flex'}}>
                        <DetailCard src={this.props.data.images.poster} />
                        <div style={{textAlign:'left', marginLeft:'30px', marginTop:'30px'}}>
                            <strong>Movie Title</strong> : {this.props.data.title}<br/>
                            <strong>Run Time</strong>    : {this.props.data.runtime} minutes<br/>
                            <strong>Release Year</strong> : {this.props.data.year}<br/><br/>
                            <strong>Genre</strong> : {this.props.data.genres.map((data) => (`${data} | `))}<br/><br/>

                            <strong>Ratings</strong> : {this.props.data.rating.votes}<br/><br/>

                            <strong>Synopsis</strong> : {this.props.data.synopsis}<br/><br/>


                        </div>
                    </div>
                    <a href='/' style={{color:'white', alignSelf:'left', marginTop:"30px"}}> Back</a>
                </div>
            )
        } else {
            return (
                <div>
                    Loading ........
                </div>
            )
        }
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