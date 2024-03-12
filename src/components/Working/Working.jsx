import React from 'react'
import './Working.css'
import oval from '../../components/img/Oval@2x.png'
import oval2 from '../../components/img/Oval Copy 5 (1).png'
import oval3 from '../../components/img/Oval Copy 6.png'
function Working() {
  return (
    <section className='working'>
      <div className="container">
          <h2 className='working__title'>Delivering real results for top <br /> companies. Some of our <span className='stories'>success stories.</span></h2>
          <div className="wrapper">
            <div className="cadiy">
              <p className='text'> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”  </p> <br />
              <h2 className='title'>Kady Baker</h2>
              <p className='info'>Product Manager at Bookmark</p>
              <img className='oval' src={oval} alt="" />
            </div>
            <div className="aiysha">
            <p className='text'> “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p> <br />
              <h2 className='title'>Aiysha Reese</h2>
              <p className='info'>Founder of Manage</p>
              <img className='oval' src={oval2} alt="" />
            </div>
            <div className="arthur">
            <p className='text'> “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p> <br />
              <h2 className='title'>Arthur Clarke</h2>
              <p className='info'>Co-founder of MyPhysio</p>
              <img className='oval' src={oval3} alt="" />
            </div>
          </div>
      </div>
    </section>
  )
}

export default Working