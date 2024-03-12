import React from 'react'
import './Directors.css'
function Directors() {
  return (
    <section className='Directors'>
      <div className="container">
     <h2 className='direc__title'>Meet the directors</h2>
      <div className="Wrapper">

        <div className="man__box">
          <h4 className="man__name">Nikita Marks </h4>
          <p className="man__dec">Founder & CEO</p>
          <div className="plus__box"><p className='plus'>+</p></div>
        </div>
        <div className="man__box">
          <h4 className="man__name">Cristian Duncan</h4>
          <p className="man__dec">Co-founder & COO</p>
          <div className="plus__box"><p className='plus'>+</p></div>

        </div>
        <div className="man__box">
          <h4 className='man__name'>Cruz Hamer</h4>
          <p className="man__dec">Co-founder & CTO</p>
          <div className="plus__box"><p className='plus'>+</p></div>
        </div>
        <div className="man__box">
          <h4 className="man__name">Drake Heaton</h4>
          <p className="man__dec">Business Development Lead</p>
          <div className="plus__box"><p className='plus'>+</p></div>

        </div>
        <div className="man__box">
          <h4 className='man__name'>Griffin Wise</h4>
          <p className="man__dec">Lead Marketing</p>
          <div className="plus__box"><p className='plus'>+</p></div>

        </div>
        {/* <div className="man__box">
          <h4 className="man__name">Aden Allan</h4>
          <p className="man__dec">“Empowered teams create truly amazing products. Set the north star and let them follow it.”</p>
        </div> */}
      </div>
      </div>
    </section>
  )
}

export default Directors