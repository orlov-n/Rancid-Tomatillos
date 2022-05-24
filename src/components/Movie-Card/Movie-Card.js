import React, { Component } from 'react'
import './Movie-Card.css'
import SelectedMovie from '../Selected-Movie/Selected-Movie';

const MovieCard = ({key, id, poster, movie, hideInput }) => {

    return (
      <div className='movie-card'>
        <img className='poster' id={id} key={key} src={poster} onClick={ () => hideInput() } />
      </div>
    )
  }


export default MovieCard
