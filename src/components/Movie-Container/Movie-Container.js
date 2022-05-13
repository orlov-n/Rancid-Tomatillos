import React from 'react'
import MovieCard from '../Movie-Card/Movie-Card'
import './Movie-Container.css'

const MovieContainer = ({ movies }) => {

  const movieInfo = movies.map(movie => {
    return (
      <MovieCard
        key={movie.id}
        poster={movie.poster_path}
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
