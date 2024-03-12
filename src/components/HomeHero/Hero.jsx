import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className='hero'>
      <div className="container hero__inner">
          <h1 className="hero__title">
          Find the <br />best <span>talent</span>
          </h1>
         <div className="hero__des">
         <div className='vector'></div>
          <p className="hero__info">
          Finding the right people and building high <br />performing teams can be hard. Most companies <br /> aren’t tapping into the abundance of global talent. <br /> We’re about to change that.
          </p>
         </div>
      </div>
    </section>
  )
}

export default Hero