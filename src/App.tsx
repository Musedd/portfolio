import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import profileImg from './assets/ProfileImg.jpg'
import './App.scss'
import AboutMe from './components/AboutMe/AboutMe'
import Experience from './components/Experience/Experience'

const App = () => {
  return (
    <div>
      <Navbar/>

      <section className="intro container">
        <div className="intro-left">
          <section id='hero'><Hero/></section>
          <section id='about'><AboutMe/></section>
        </div>

        <aside className='intro-right'>
          <img className='hero-photo' src={profileImg} alt="" />
        </aside>        
      </section>

      <section id='experience' className="experience container"><Experience/></section>
     
    </div>
  )
}

export default App