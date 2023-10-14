import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsJustify}
 from 'react-icons/bs'
import '../CSS files/Header.css'
import SearchBox from './SearchBox'

const Header=({OpenSidebar}) => {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <h4>Hello Sharukh👋</h4>
        </div>
        <SearchBox />
    </header>
  )
}

export default Header