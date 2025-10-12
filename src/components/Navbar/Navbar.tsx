import  { useEffect, useState } from 'react'
import './Navbar.scss'
import menu_icon from '../../assets/menu-icon.png'
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

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className='container'>
        <p className={`brand ${showBrand ? 'visible' : 'hidden'}`}><Link to='hero' smooth={true} spy={true} offset={0} duration={500} activeClass='active'>Edvaldo<span>.</span></Link></p>
        <ul className={`menu ${mobileMenu ? '' : 'hide-mobile-menu'}`}>
            <li><Link to='about' smooth={true} spy={true} offset={0} duration={500} activeClass='active' onClick={toggleMenu}>About me</Link></li>
            <li><Link to='experience' smooth={true} spy={true} offset={0} duration={500} activeClass='active' onClick={toggleMenu}>Experience</Link></li>
            <li><Link to='skills' smooth={true} spy={true} offset={0} duration={500} activeClass='active' onClick={toggleMenu}>Skills</Link></li>
            <li><Link to='projects' smooth={true} spy={true} offset={0} duration={500} activeClass='active' onClick={toggleMenu}>Projects</Link></li>
            <li><Link to='contact' smooth={true} spy={true} offset={0} duration={500} activeClass='active' onClick={toggleMenu}>Contact me</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar