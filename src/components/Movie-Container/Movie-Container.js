import React from 'react'
import { NavLink } from 'react-router-dom'
import MovieCard from '../Movie-Card/Movie-Card'
import './Movie-Container.css'

const MovieContainer = ({ movies, handleClick, movieSearch, searchBarValue, hideInput }) => {
  let filteredMovies;
  if(searchBarValue !== '' ){
    filteredMovies = movieSearch.map(movie => {
      return (
        <div key={movie.id}>

          <NavLink to={`/${movie.id}`}>
          <MovieCard
            id={movie.id}
            poster={movie.poster_path}
            movie={movie}
            hideInput={hideInput}
          />
          </NavLink>
        </div>
     )
    })
  }

  const movieInfo = movies.map(movie => {
    return (
      <div key={movie.id}>

        <NavLink to={`/${movie.id}`}>
        <MovieCard
          id={movie.id}
          poster={movie.poster_path}
          movie={movie}
          hideInput={hideInput}
        />
        </NavLink>
        <p className="movie-card-title">{movie.title} ({movie.release_date.slice(0, 4)})</p>
      </div>
   )
  })

  let displayMovies = () => {
  if(searchBarValue && movieSearch.length) {
    return filteredMovies
  }else if(searchBarValue && !movieSearch.length) {
    return <p> Sorry no movies match your search. </p>
  }else{
    return movieInfo
  }
}

  return (
    <div className='movie-container'>
     {displayMovies()}
    </div>
  )
}

export default MovieContainer
