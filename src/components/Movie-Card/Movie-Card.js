import React, { Component } from 'react'
import './Movie-Card.css'
import SelectedMovie from '../Selected-Movie/Selected-Movie';

const MovieCard = ({key, id, poster, movie}) => {

    return (
      <div className='movie-card'>
        <img className='poster' id={id} key={key} src={poster} />
      </div>
    )
  }


export default MovieCard
