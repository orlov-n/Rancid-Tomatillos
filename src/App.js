import React, { Component } from 'react';
import movieData from './sample-data';
import MovieContainer from './components/Movie-Container/Movie-Container'
import SelectedMovie from './components/Selected-Movie/SelectedMovie';

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

  componentDidMount = () => {
    this.setState({ movies: movieData.movies })
  }

  render() {
    const movieSummary = this.state.movieSummary
    return (
      <main className='Movie-Home-Page'>
        <h1>Rancid Tomatillos</h1>
        {movieSummary ? <SelectedMovie selectedMovie={this.state.selectedMovie} /> : <MovieContainer handleClick={this.handleClick} movies={this.state.movies} /> }
      </main>
    )
  }
}

export default App;
