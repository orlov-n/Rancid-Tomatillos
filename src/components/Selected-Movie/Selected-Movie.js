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
          <ul className="info-list">
            <li>movie rating: {selectedMovie.average_rating.toFixed(2)}</li>
            <li>release date: {selectedMovie.release_date}</li>
            {selectedMovie.budget ? <li>budget: ${selectedMovie.budget}</li> : '' }
            {selectedMovie.budget ? <li>revenue: ${selectedMovie.revenue}</li> : '' }
            <li>genre: {selectedMovie.genres.join(', ')}</li>
            <li>runtime: {selectedMovie.runtime} minutes</li>
          </ul>
        </div>
        <div className="movie-info-container">
        <div className='title'>
        <h2>{selectedMovie.title}</h2>
          <div className="tagline">
            {selectedMovie.tagline ? <h2>"{selectedMovie.tagline}"</h2> : ''}
          </div>
        </div>
          <div className="overview">
            <p>{selectedMovie.overview}</p>
          </div>
        </div>
      </article>

    </section>
  )
}


export default SelectedMovie
