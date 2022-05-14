import React, { Component } from 'react'
import './Movie-Card.css'
import SelectedMovie from '../Selected-Movie/SelectedMovie';

const MovieCard = ({key, id, poster, movie, handleClick}) => {

  



    return (
      <div className='movie-card'>
        <img className='poster' onClick={() => handleClick(movie)} id={id} src={poster} />
      </div>
    )
  }  


export default MovieCard
