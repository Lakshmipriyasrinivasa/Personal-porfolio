import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import About from '../component/About'
import Skills from '../component/Skills'
import Experience from '../component/Experience'
import Projects from '../component/Project'
import Contact from '../component/Contact'
import Footer from '../component/Footer'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
