import React from 'react'
import MovieCard from '../Movie-Card/Movie-Card'

const SelectedMovie = ({selectedMovie}) => {
  return (
    <main className="selected-movie-page" style={{
      backgroundImage: `url(${selectedMovie.backdrop_path})`
    }}>
      <section>

        <div>
          <img src={selectedMovie.poster_path}></img>
        </div>
        <div>
          <ul>
            <li>{selectedMovie.title}</li>
            <li>{selectedMovie.average_rating}</li>
            <li>{selectedMovie.release_date}</li>
          </ul>
        </div>
      </section>

    </main>
  )
}


export default SelectedMovie