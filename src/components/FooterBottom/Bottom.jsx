import React from 'react'
import './Bootom.css'
import { Link } from 'react-router-dom'
function Bottom() {
  return (
    <div className="bottom">
      <div className="container bottom__info">
       <div className="bottom__left">
       <Link className='bottom__title' to={'/'}>myteam</Link>
        <ul className='list'>
          <li className='item'>
          <Link to={'/'}>Home</Link>

        </li>
        <li className='item'>
        <Link  to={'.about'}>About</Link>
          </li>
          </ul>
       </div>

            <div className="bottom_info">
              <p className='bottom__text'>987  Hillcrest LaneIrvine, <br /> CACa <br />lifornia 92714 <br />Call Us : 949-833-7432</p>
            </div>
            <div className="bottom__box">
              <p className='pag'>Copyright 2020. All Rights Reserved</p>
            </div>


       </div>
    </div>
  )
}

export default Bottom