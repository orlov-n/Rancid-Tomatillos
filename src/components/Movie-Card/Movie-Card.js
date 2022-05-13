import React, { Component } from 'react'
import './Movie-Card.css'

class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: false
    }
  }
  getSelectedMovie = (event) => {
    console.log(event.target.id)
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
