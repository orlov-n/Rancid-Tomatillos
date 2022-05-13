import React from 'react'
import './Movie-Card.css'

const MovieCard = ({ poster }) => {

  return (
    <div className='movie-card'>
      <img className='poster' src={poster} />
    </div>
  )
}

export default MovieCard
