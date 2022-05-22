import React from 'react'
import { NavLink } from 'react-router-dom'

const SearchBar = ({handleSearch}) => {

  return (
    <nav className="nav">
      <h1>Rancid Tomatillos</h1>
      <NavLink to={ "/" } >
      <button>HOME</button>
      </NavLink>
      <form action="/">
      <input type='text' placeholder='Search Movies' name="movie-search" onChange={event => handleSearch(event)} />
      </form>
    </nav>
  )

}


export default SearchBar
