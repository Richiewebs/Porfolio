import React from 'react'
import img from '../assets/logo.png'

const Navbar = () => {
  return (
    <div>
      <nav className='w-full h-20 bg-white font-sans shadow-md pt-6 h-10 '>
            <div className='flex space-x-64 place-content-around'>
                <div className='w-16'><img src={img} alt="logo" srcset="" /></div>
                <ul className='flex space-x-32 pt-5'>
                    <li>Home</li>
                    <li>About me</li>
                    <li>Projects</li>
                </ul>
                <div className='flex'>
                <button class="btn" className='w-28 h-10 bg-custom-gradient rounded-md text-white'>Contact</button>
            </div>
            </div>
      </nav>
    </div>
  )
}

export default Navbar
