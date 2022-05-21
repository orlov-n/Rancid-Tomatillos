import React, { Component } from 'react';
import movieData from './sample-data';
import MovieContainer from './components/Movie-Container/Movie-Container';
import SelectedMovie from './components/Selected-Movie/Selected-Movie';
import Error from './components/Error/Error';
import './App.css';
import { Route, Redirect, NavLink, Switch } from 'react-router-dom';
import { getMovieGallery } from './api'
class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: '',
      error: null
    }
  };

  componentDidMount = () => {
      getMovieGallery.then((data) => {
      if(data.ok) {
        return data.json()
      } else {
        throw Error(data.error)
      }
    })
    .then((response) => {

      this.setState({movies: response.movies, selectedMovie: ''})
    })
    .catch((err) => {
      console.log(err)
      })
    }

  render() {

    return (
      <main className='Movie-Home-Page'>
        <nav className="nav">
          <NavLink to="/">
          <button>HOME</button>
          </NavLink>
          <h1>Rancid Tomatillos</h1>
        </nav>
          <Route exact path="/" render={ () => <MovieContainer movies={this.state.movies}/> } />
          <Route exact path="/:id" render={ ({ match }) => {
            return <SelectedMovie selectedMovie={match.params.id}/>
          }} />
      </main>

    )
  }
}


export default App;
