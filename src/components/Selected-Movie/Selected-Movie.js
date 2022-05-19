import React, { Component } from 'react'
import MovieCard from '../Movie-Card/Movie-Card'
import './Selected-Movie.css'

class SelectedMovie extends Component{
  constructor() {
    super();
    this.state = {selectedMovie: ''}
  }

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${props.selectedMovie}`)
    .then(data => data.json())
    .then(data => this.setState({selectedMovie: data.movie}))
 }

 render() {
   
  return (
    <section className="selected-movie-page" style={{
      backgroundImage: `url(${this.state.selectedMovie.movie.backdrop_path})`
    }}>
      <article className="poster-info-container">

        <div className="poster-container">
          <img className="poster-2" src={this.state.selectedMovie.movie.poster_path}></img>
          <ul className="info-list">
            <li>movie rating: {this.state.selectedMovie.movie.average_rating.toFixed(2)}</li>
            {this.state.selectedMovie.movie.budget ? <li>budget: ${this.state.selectedMovie.movie.budget}</li> : '' }
            {this.state.selectedMovie.movie.budget ? <li>revenue: ${this.state.selectedMovie.movie.revenue}</li> : '' }
            <li>genre: {this.state.selectedMovie.movie.genres.join(', ')}</li>
            <li>runtime: {this.state.selectedMovie.movie.runtime} minutes</li>
          </ul>
        </div>
        <div className="movie-info-container">
          <div className='title'>
          <h2>{this.state.selectedMovie.movie.title}  <p className="movie-year">({this.state.selectedMovie.movie.release_date.slice(0, 4)})</p></h2>
          
            <div className="tagline">
              <div className="tagline-text">
              {this.state.selectedMovie.movie.tagline ? <h2>"{this.state.selectedMovie.movie.tagline}"</h2> : ''}
                </div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/5iDik4y2VvE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </div>
          </div>
            <div className="overview">
              <p>{this.state.selectedMovie.movie.overview}</p>
            </div>
        </div>
      </article>

    </section>
   )
  }
}

export default SelectedMovie
