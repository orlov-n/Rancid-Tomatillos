import React, { Component } from 'react'
import './Movie-Card.css'
import SelectedMovie from '../Selected-Movie/Selected-Movie';

const MovieCard = ({key, id, poster, movie, hideInput }) => {

    return (
      <div className='movie-card'>
        <img className='poster' id={id} key={key} src={poster} onClick={ () => hideInput() } />
        <p className="movie-card-title">{movie.title} ({movie.release_date.slice(0, 4)})</p>
      </div>
    )
  }


export default MovieCard
