import React, { Component } from 'react';
import movieData from './sample-data';
import MovieContainer from './components/Movie-Container/Movie-Container'
import SelectedMovie from './components/Selected-Movie/Selected-Movie';
import Error from './components/Error/Error'
import './App.css'
class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movieSummary: false,
      selectedMovie: '',
      error: ''
    }
  }

   handleClick = (id) => {
     fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
     .then(data => data.json())
     .then(data => this.setState(prevState => ({movies: prevState.movies, movieSummary: true, selectedMovie: data.movie})))
  }

    goHome = () => {
      this.setState({ movieSummary: false, selectedMovie: '' })
    }


  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies').then((data) => {
      if(data.ok) {
        return data.json()
      } else {
        throw Error(data.error)
      }
    })
    .then((response) => {

      this.setState({movies: response.movies, selectedMovie: '', movieSummary: false})
    })
    .catch((err) => {
      console.log(err)
      })
    }

  render() {
    const activeError = this.state.error
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
