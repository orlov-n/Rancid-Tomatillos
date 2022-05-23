import React from 'react'
import { NavLink } from 'react-router-dom'
import MovieCard from '../Movie-Card/Movie-Card'
import './Movie-Container.css'

const MovieContainer = ({ movies, handleClick }) => {

  const movieInfo = movies.map(movie => {
    return (
      <div key={movie.id}>

        <NavLink to={`/${movie.id}`}>
        <MovieCard
          id={movie.id}
          poster={movie.poster_path}
          movie={movie}
        />
        </NavLink>
        <p className="movie-card-title">{movie.title} ({movie.release_date.slice(0, 4)})</p>
      </div>
   )
  })
  return (
    <div className='movie-container'>
      {movieInfo}
    </div>
  )
}

export default MovieContainer
