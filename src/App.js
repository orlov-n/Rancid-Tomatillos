import React, { Component } from 'react';
import movieData from './sample-data';
import MovieContainer from './components/Movie-Container/Movie-Container'
import SelectedMovie from './components/Selected-Movie/Selected-Movie';
import Error from './components/Error/Error'
import './App.css'
import { Route, NavLink } from 'react-router-dom'
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
    console.log('hi')
    return (

      <main className='Movie-Home-Page'>
        <nav className="nav">
          <NavLink to="/">
          <button onClick={() => this.goHome()}>HOME</button>
          </NavLink>
          <h1>Rancid Tomatillos</h1>
        </nav>
        <Route exact path="/" render={()=> <MovieContainer handleClick={this.handleClick} movies={this.state.movies}/>}/>
        <Route path="/movie/:id" render={({ match }) => 
          console.log(match)
        } />
        {movieSummary ? <SelectedMovie alignToTop={true} selectedMovie={this.state.selectedMovie} /> : "" }
      </main>
    )
  }
}

export default App;
