import React, { Component } from 'react';
import movieData from './sample-data';
import MovieContainer from './components/Movie-Container/Movie-Container';
import SelectedMovie from './components/Selected-Movie/Selected-Movie';
import SearchBar from './components/Search-Bar/Search-Bar';
import Error from './components/Error/Error';
import './App.css';
import { Route, NavLink} from 'react-router-dom';
import { getMovieGallery } from './api'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movieSearch: [],
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

    handleSearch = (event) => {
    this.setState({movieSearch: this.state.movies.filter(movie => {
      return movie.title.toUpperCase().includes(event.target.value.toUpperCase())
    })})
  }



  render() {
    console.log(this.state.movies)

    return (
        <main className='Movie-Home-Page'>
          <SearchBar handleSearch={this.handleSearch} />
          <Route exact path="/" render={ () => <MovieContainer movies={this.state.movies}/> } />
          <Route exact path="/:id" render={ ({ match }) => {
            return <SelectedMovie selectedMovie={match.params.id}/>
          }} />
      </main>

    )
  }
}


export default App;
