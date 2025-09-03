import React from 'react'
import './Hero.scss'
import profileImg from '../../assets/ProfileImg.jpg'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="content-side">
            <a href="">← Scroll to see more</a>
        </div>

        <div className="hero-content">
            <h1 className='title'>Hi I'm <span className="accent">Edvaldo</span>.</h1>
            <p className="caption"><span className="accent">Software Developer</span> based in <span className='accent'>Regensburg, Germany</span></p> 
        </div>

        <div className="hero-photo"><img src={profileImg} alt="" /></div>

    </div>
  )
}

export default Hero