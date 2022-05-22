import React from 'react'
import { NavLink } from 'react-router-dom'

const SearchBar = ({ handleSearch, searchBarValue, resetSearchValue }) => {

  return (
    <nav className="nav">
      <h1>Rancid Tomatillos</h1>
      <NavLink to={ "/" } >
      <button onClick={ () => resetSearchValue() }>HOME</button>
      </NavLink>
      <form action="/">
      <input type='text' placeholder='Search Movies' name="movie-search" value={ searchBarValue } onChange={event => handleSearch(event)} />
      </form>
    </nav>
  )

}


export default SearchBar
