import React, { Component } from 'react'
import MovieCard from '../Movie-Card/Movie-Card'
import './Selected-Movie.css'

class SelectedMovie extends Component{
  constructor(props) {
    super(props);
    this.state = {selectedMovie: ''}
  }

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.selectedMovie}`)
    .then(data => data.json())
    .then(data => this.setState({selectedMovie: data.movie}))
 }

 render() {
  return (
    <section className="selected-movie-page" style={{
      backgroundImage: `url(${this.state.selectedMovie.backdrop_path})`
    }}>
      <article className="poster-info-container">

        <div className="poster-container">
          <img className="poster-2" src={this.state.selectedMovie.poster_path}></img>
          <ul className="info-list">
            <li>movie rating: {this.state.selectedMovie.average_rating}</li>
            {this.state.selectedMovie.budget ? <li>budget: ${this.state.selectedMovie.budget}</li> : '' }
            {this.state.selectedMovie.budget ? <li>revenue: ${this.state.selectedMovie.revenue}</li> : '' }
            <li>genre: {this.state.selectedMovie.genres}</li>
            <li>runtime: {this.state.selectedMovie.runtime} minutes</li>
          </ul>
        </div>
        <div className="movie-info-container">
          <div className='title'>
          <h2>{this.state.selectedMovie.title}  <p className="movie-year">({this.state.selectedMovie.release_date})</p></h2>
          
            <div className="tagline">
              <div className="tagline-text">
              {this.state.selectedMovie.tagline ? <h2>"{this.state.selectedMovie.tagline}"</h2> : ''}
                </div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/5iDik4y2VvE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

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
