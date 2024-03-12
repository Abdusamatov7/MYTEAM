import React from 'react'
import'./Mask.css'
function Mask() {
  return (
    <section className='mask'>
      <div className="container mask__inner">
         <div className="mask__title__box">
             <div className="vector2"></div>
            <h1 className="mask__title">
            Build & manage <br /> distributed teams <br /> like no one else.
            </h1>
         </div>
           <div className="mask__right">
            <div className="box1">

              <h1 className="box__title">
              Experienced Individuals
              </h1>
              <p className='box__text'>
              Our network is made up of highly experienced professionals <br /> who are passionate about what they do.
              </p>
            </div>
            <div className="box2">
            <h1 className="box__title">
            Easy to Implement
              </h1>
              <p className='box__text'>
              Our processes have been refined over years of implementation <br /> meaning our teams always deliver.
              </p>
            </div>
            <div className="box3">
            <h1 className="box__title">
            Enhanced Productivity
              </h1>
              <p className='box__text'>
              Our customized platform with in-built analytics helps you <br /> manage your distributed teams.
              </p>
            </div>


          </div>
      </div>
    </section>
  )
}

export default Mask