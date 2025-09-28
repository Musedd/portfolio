import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { Link } from "react-scroll";



const Navbar = () => {
  const [showBrand, setShowBrand] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setShowBrand(window.scrollY > heroBottom - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className='container'>
        <p className={`brand ${showBrand ? 'visible' : 'hidden'}`}><Link to='hero' smooth={true} spy={true} offset={0} duration={500} activeClass='active'>Edvaldo<span>.</span></Link></p>
        <ul className='menu'>
            <li><Link to='about' smooth={true} spy={true} offset={0} duration={500} activeClass='active'>About me</Link></li>
            <li><Link to='experience' smooth={true} spy={true} offset={0} duration={500} activeClass='active'>Experience</Link></li>
            <li><Link to='skills' smooth={true} spy={true} offset={0} duration={500} activeClass='active'>Skills</Link></li>
            <li><Link to='projects' smooth={true} spy={true} offset={0} duration={500} activeClass='active'>Projects</Link></li>
            <li><Link to='contact' smooth={true} spy={true} offset={0} duration={500} activeClass='active'>Contact me</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar