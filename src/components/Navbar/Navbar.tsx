import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className='container'>
        <a href="#" className='brand'>Edvaldo.</a>
        <ul className='menu'>
            <li>About me</li>
            <li>Experience</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact me</li>
        </ul>
    </nav>
  )
}

export default Navbar