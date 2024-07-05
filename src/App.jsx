import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Tab from './components/Tab'
import Experience from './components/Experience'
const App = () => {
  return (
    <div>
      <Navbar text='Contact'></Navbar>
      <Hero></Hero>
      <About></About>
      <Tab></Tab>
      <Experience></Experience>
    </div>
  )
}

export default App

