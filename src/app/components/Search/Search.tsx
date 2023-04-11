import React from 'react'
import './Search.scss'

const Search = () => {
  return (
    <div>
      <form>
        <input className='searchholder' type="search" placeholder="Search..."/>
        <button className='search-submit' type="submit">Search</button>
      </form>
    </div>
  )
}

export default Search