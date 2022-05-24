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
      searchBarValue: '',
      movieSearch: [],
      selectedMovie: '',
      errorStatus: false,
      errorMessage: '',
      inputDisplay: true
    }
  };

  componentDidMount = () => {
      getMovieGallery
    .then((response) => {
      this.setState({movies: response.movies, selectedMovie: ''})
    })
    .catch((err) => {
      this.setState({ errorMessage: true, error: err })
      })
    }

    handleSearch = (event) => {
    this.setState({ searchBarValue: event.target.value })
    this.setState({ movieSearch: this.state.movies.filter(movie => {
      return movie.title.toUpperCase().includes(event.target.value.toUpperCase())
    })})
  }

  resetSearchValue = () => {
    this.setState({ searchBarValue: '', inputDisplay: true })
  }

  hideInput = () => {
    this.setState({ inputDisplay: false })
  }





  render() {

    return (

        <main className='Movie-Home-Page'>
          <SearchBar handleSearch={this.handleSearch} searchBarValue={ this.state.searchBarValue } resetSearchValue={ this.resetSearchValue } inputDisplay={this.state.inputDisplay} />

          <Route exact path="/" render={ () => <MovieContainer movies={this.state.movies} searchBarValue={ this.state.searchBarValue } movieSearch={ this.state.movieSearch } hideInput={ this.hideInput }/> } />
          <Route exact path="/:id" render={ ({ match }) => {
            return <SelectedMovie selectedMovie={match.params.id} />
          }} />
          {this.state.errorMessage ? <Error errorMessage={this.state.error} /> : ''}
      </main>

    )
  }
}


export default App;
