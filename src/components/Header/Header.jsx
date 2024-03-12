import React from 'react'
import { Link } from 'react-router-dom'
import  './Header.css'

function Header() {
  return (
    <header className='header'>
      <div className="container">
      <nav className='nav'>
        <li className='logo'>

        <Link to={'/'}>myteam</Link>
        </li>
        <ul className='nav__list'>
          <li className='nav__item'>
               <Link to={'/'} >Home</Link>
          </li>
          <li className='nav__item'>
          <Link to={'/about'} >About</Link>
          </li>
          <li className='nav__item'>
          <Link className='contact' to={'/contact'} >contact us</Link>
          </li>

        </ul>
      </nav>
      </div>

    </header>
  )
}

export default Header