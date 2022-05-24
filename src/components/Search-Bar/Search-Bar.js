import React from 'react'
import { NavLink } from 'react-router-dom'

const SearchBar = ({ handleSearch, searchBarValue, resetSearchValue, inputDisplay}) => {

  return (
    <nav className="nav">
      <h1>Rancid Tomatillos</h1>
      <NavLink to={ "/" } >
      <button onClick={ () => resetSearchValue() }>HOME</button>
      </NavLink>
      <form action="/">
      {(inputDisplay? <input className="search" type='text' placeholder='Search Movies' name="movie-search" value={ searchBarValue } onChange={event => handleSearch(event)} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}/> : '')}
      </form>
    </nav>
  )

}


export default SearchBar
