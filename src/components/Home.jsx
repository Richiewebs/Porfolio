import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Tab from '../components/Tab'
import Experience from '../components/Experience'
import Project from '../components/Project'
import Skills from '../components/Skills'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      
      <Navbar text='Contact'></Navbar>
      <Hero></Hero>
      
      <About></About>
      
      <div className='bg-backg-gradient'>
      <Experience></Experience>
      <Project></Project>
      <Skills></Skills>
      <Footer></Footer>
      </div>
    </div>
    
  )
}

export default Home
