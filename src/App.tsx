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
import { useInView } from './hooks/useInView'

const App = () => {
  const { ref: heroRef, inView: heroInView } = useInView(0.2)
  const { ref: aboutRef, inView: aboutInView } = useInView(0.2)
  const { ref: expRef, inView: expInView } = useInView(0.2)
  const { ref: skillsRef, inView: skillsInView } = useInView(0.2)
  const { ref: projectsRef, inView: projectsInView } = useInView(0.2)
  const { ref: contactRef, inView: contactInView } = useInView(0.2)
  const { ref: footerRef, inView: footerInView } = useInView(0.2)

  return (
    <div>
      <Navbar/>

      <div className="intro container">
        <div className="intro-left">
          <section id='hero' ref={heroRef} className={`appear ${heroInView ? "in-view" : ""}`}>
            <Hero/>
          </section>
          <section id='about' ref={aboutRef} className={`appear ${aboutInView ? "in-view" : ""}`}>
            <AboutMe/>
          </section>
        </div>

        <aside className='intro-right'>
          <img className='hero-photo' src={profileImg} alt="" />
        </aside>        
      </div>

      <section id='experience' ref={expRef} className={`experience container appear ${expInView ? "in-view" : ""}`}>
        <Experience/>
      </section>
      <section id='skills' ref={skillsRef} className={`skills container appear ${skillsInView ? "in-view" : ""}`}>
        <Skills/>
      </section>
      <section id='projects' ref={projectsRef} className={`projects container appear ${projectsInView ? "in-view" : ""}`}>
        <Projects/>
      </section>
      <section id='contact' ref={contactRef} className={`contact container appear ${contactInView ? "in-view" : ""}`}>
        <Contact/>
      </section>
      <section id='footer' ref={footerRef} className={`footer container appear ${footerInView ? "in-view" : ""}`}>
        <Footer/>
      </section>
    </div>
  )
}

export default App
