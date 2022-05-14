import React from 'react'
import MovieCard from '../Movie-Card/Movie-Card'
import './Movie-Container.css'

const MovieContainer = ({ movies, handleClick }) => {

  const movieInfo = movies.map(movie => {
    return (
      <MovieCard
        key={movie.id}
        id={movie.id}
        poster={movie.poster_path}
        movie={movie}
        handleClick={handleClick}
      />
   )
  })
  return (
    <div className='movie-container'>
      {movieInfo}
    </div>
  )
}

export default MovieContainer
