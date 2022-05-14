import React, { Component } from 'react'
import './Movie-Card.css'
import SelectedMovie from '../Selected-Movie/SelectedMovie';

class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: false,
      currentMovie: {},
    }
  }
  getSelectedMovie = (event) => {
    console.log(event.target.id)
    this.setState({currentMovie: event.target})
    console.log(this.state.currentMovie)
  }


  render() {

    return (
      <div className='movie-card'>
        <img className='poster' onClick={(event) => this.getSelectedMovie(event)} id={this.props.id} src={this.props.poster} />
      </div>
    )
  }
}


export default MovieCard
