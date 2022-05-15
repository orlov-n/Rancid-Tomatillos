import React from 'react'
import MovieCard from '../Movie-Card/Movie-Card'
import './Selected-Movie.css'

const SelectedMovie = ({selectedMovie}) => {
  return (
    <section className="selected-movie-page" style={{
      backgroundImage: `url(${selectedMovie.backdrop_path})`
    }}>
      <article className="poster-info-container">

        <div className="poster-container">
          <img className="poster-2" src={selectedMovie.poster_path}></img>
        </div>
        <div className="movie-info-container">
          <ul className="info-list">
            <li>movie name: {selectedMovie.title}</li>
            <li>movie rating: {selectedMovie.average_rating.toFixed(2)}</li>
            <li>release date: {selectedMovie.release_date}</li>
            {selectedMovie.budget ? <li>budget: {selectedMovie.budget}</li> : '' }
            {selectedMovie.budget ? <li>revenue: {selectedMovie.revenue}</li> : '' }
            <li>genre: {selectedMovie.genres.join(', ')}</li>
            <li>runtime: {selectedMovie.runtime}</li>
            {selectedMovie.tagline ? <li>tagline: {selectedMovie.tagline}</li> : ''}
            <li>overview: {selectedMovie.overview}</li>
          </ul>
        </div>
      </article>

    </section>
  )
}


export default SelectedMovie
