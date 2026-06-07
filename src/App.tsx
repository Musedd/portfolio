import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import profileImg from './assets/ProfileImg.jpg'
import './App.scss'
import AboutMe from './components/AboutMe/AboutMe'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { motion } from 'framer-motion'
import ConsentBanner from './components/ConsentBanner/ConsentBanner'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const App = () => {
  return (
    <div>
      <Navbar/>

      <div className="intro container">
        <div className="intro-left">
          <motion.section
            id='hero'
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Hero/>
          </motion.section>
          <motion.section
            id='about'
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <AboutMe/>
          </motion.section>
        </div>

        <aside className='intro-right'>
          <img className='hero-photo' src={profileImg} alt="" />
        </aside>
      </div>

      <motion.section
        id='experience'
        className="experience container"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Experience/>
      </motion.section>

      <motion.section
        id='skills'
        className="skills container"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Skills/>
      </motion.section>

      <motion.section
        id='projects'
        className="projects container"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Projects/>
      </motion.section>

      <motion.section
        id='contact'
        className="contact container"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Contact/>
      </motion.section>

      <motion.section
        id='footer'
        className="footer container"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Footer/>
      </motion.section>

      <ConsentBanner />
    </div>
  )
}

export default App
