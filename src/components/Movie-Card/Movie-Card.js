import React, { Component } from 'react'
import './Movie-Card.css'
import SelectedMovie from '../Selected-Movie/Selected-Movie';

const MovieCard = ({key, id, poster, movie, handleClick}) => {

    return (
      <div className='movie-card'>
        <img className='poster' id={id} onClick={() => handleClick(id)} src={poster} />
      </div>
    )
  }


export default MovieCard
