import React from 'react'
import './About.css'
import AboutHero from './AboutHero/AboutHero'
import Directors from './Directors/Directors'
import Clients from './Clients/Clients'
function About() {
  return (
    <section className='About'>
    <AboutHero></AboutHero>
    <Directors></Directors>
    <Clients> </Clients>
    </section>

  )
}

export default About