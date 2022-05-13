import React, { Component } from 'react';
import movieData from './sample-data';
import MovieContainer from './components/Movie-Container/Movie-Container'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }
  componentDidMount = () => {
    this.setState({ movies: movieData.movies })
  }

  render() {
    return (
      <main className='Movie-Home-Page'>
        <h1>Rancid Tomatillos</h1>
        <MovieContainer movies={this.state.movies} />
      </main>


    )
  }
}

export default App;
