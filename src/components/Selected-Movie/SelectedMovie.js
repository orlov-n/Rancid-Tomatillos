import React from 'react'
import MovieCard from '../Movie-Card/Movie-Card'

const SelectedMovie = ({selectedMovie}) => {
  return (
    <div>
      <img src={selectedMovie.poster_path}></img>
    </div>
  )
}


export default SelectedMovie