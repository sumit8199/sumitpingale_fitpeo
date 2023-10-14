import React from 'react'
import '../CSS files/Searchbox.css'

const SearchBox = () => {
  return (
    <div>
      <form className='header-right'>
            <input type="text" placeholder='Search' className='nosubmit'/>
        </form>
    </div>
  )
}

export default SearchBox
