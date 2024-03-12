import React from 'react'
import './Top.css'
import { Link } from 'react-router-dom'
function Top() {
  return (
    <div className='top'>
      <div className="container top__inner">
        <h2 className='top__title'>Ready to get started?</h2>
        <Link className='top__contact'  to={'/contact'}>contact us</Link>
      </div>
    </div>
  )
}

export default Top