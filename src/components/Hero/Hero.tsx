import './Hero.scss'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } }
}

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } }
}

const Letter = ({ char }: { char: string }) => (
  <motion.span variants={letterVariants} style={{ display: 'inline-block' }}>
    {char === ' ' ? ' ' : char}
  </motion.span>
)

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-content">
        <motion.h1
          className='title'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {"Hi I'm ".split('').map((char, i) => <Letter key={i} char={char} />)}
          <span className="accent">
            {"Edvaldo".split('').map((char, i) => <Letter key={i} char={char} />)}
          </span>
          <Letter char="." />
        </motion.h1>
        <p className="caption">
          <span className="accent">Software Developer</span> based in{' '}
          <span className='accent'>Regensburg, Germany</span>
        </p>
      </div>
    </div>
  )
}

export default Hero
