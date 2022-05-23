import React, { Component } from 'react'
import MovieCard from '../Movie-Card/Movie-Card'
import './Selected-Movie.css'
import { getSelectedMovie, getMovieTrailer } from '../../api'

class SelectedMovie extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: '',
      movieTrailers: ''
    }
  }

  componentDidMount = () => {
    getSelectedMovie(this.props.selectedMovie)
     .then(data => this.setState({selectedMovie: data.movie}))

    getMovieTrailer(this.props.selectedMovie)
     .then(data => this.setState({movieTrailers: data.videos}))

 }

 render() {
  let date;
  this.state.selectedMovie.release_date ? date = this.state.selectedMovie.release_date.slice(0, 4) : date = ''
  return (
    <section className="selected-movie-page" style={{
      backgroundImage: `url(${this.state.selectedMovie.backdrop_path})`
    }}>
      <article className="poster-info-container">

        <div className="poster-container">
          <img className="poster-2" src={this.state.selectedMovie.poster_path}></img>
          <ul className="info-list">
            <li>movie rating: {(Math.round(this.state.selectedMovie.average_rating * 10) / 10)}</li>
            {this.state.selectedMovie.budget ? <li>budget: ${this.state.selectedMovie.budget}</li> : '' }
            {this.state.selectedMovie.budget ? <li>revenue: ${this.state.selectedMovie.revenue}</li> : '' }
            <li>genre: {this.state.selectedMovie.genres}</li>
            <li>runtime: {this.state.selectedMovie.runtime} minutes</li>
          </ul>
        </div>
        <div className="movie-info-container">
          <div className='title'>
          <h2>{this.state.selectedMovie.title} <p className="movie-year">({date})</p></h2> 

            <div className="tagline">
              <div className="tagline-text">
              {this.state.selectedMovie.tagline ? <h2>"{this.state.selectedMovie.tagline}"</h2> : ''}
                </div>
              <iframe width="560" height="315" src={this.state.movieTrailers ? `https://www.youtube.com/embed/${this.state.movieTrailers[0].key}` : '' } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </div>
          </div>
            <div className="overview">
              <p>{this.state.selectedMovie.overview}</p>
            </div>
        </div>
      </article>

    </section>
   )
  }
}

export default SelectedMovie
