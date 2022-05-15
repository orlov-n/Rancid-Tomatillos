import React, { Component } from 'react';
import movieData from './sample-data';
import MovieContainer from './components/Movie-Container/Movie-Container'
import SelectedMovie from './components/Selected-Movie/Selected-Movie';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movieSummary: false,
      selectedMovie: ''
    }
  }

   handleClick = (movie) => {
    this.setState({movieSummary: true, selectedMovie: movie})
  }

    goHome = () => {
      this.setState({ movieSummary: false, selectedMovie: '' })
    }
  componentDidMount = () => {
    this.setState({ movies: movieData.movies })
  }

  render() {
    const movieSummary = this.state.movieSummary
    return (
      
      <main className='Movie-Home-Page'>
        <nav className="nav">
          <button onClick={() => this.goHome()}>HOME</button>
          <h1>Rancid Tomatillos</h1>
        </nav>
        
        {movieSummary ? <SelectedMovie selectedMovie={this.state.selectedMovie} /> : <MovieContainer handleClick={this.handleClick} movies={this.state.movies} /> }
      </main>
    )
  }
}

export default App;
