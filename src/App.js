import React, { Component } from 'react';
import movieData from './sample-data';
import MovieContainer from './components/Movie-Container/Movie-Container'

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
    return (
      <main className='Movie-Home-Page'>
        <h1>Rancid Tomatillos</h1>
        <MovieContainer handleClick={this.handleClick} movies={this.state.movies} />
      </main>

      // use turinary
    )
  }
}

export default App;
