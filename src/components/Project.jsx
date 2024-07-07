import React from 'react'
import Cards from './Cards'

const Project = () => {
  return (
    <div id='projects' className='p-10 pt-20 w-full space-y-14' >
      <h1 className='text-center font-bold text-btn2 text-2xl'>Projects</h1>
      <div className='flex flex-wrap gap-16 place-content-around'>
        <Cards title ='Quote App' detail = 'Lorem ipsum is simply dummy text of the printing and typesetting industry.'></Cards>
        <Cards title ='Quote App' detail = 'Lorem ipsum is simply dummy text of the printing and typesetting industry.'></Cards>
        <Cards title ='Quote App' detail = 'Lorem ipsum is simply dummy text of the printing and typesetting industry.'></Cards>
        <Cards title ='Quote App' detail = 'Lorem ipsum is simply dummy text of the printing and typesetting industry.'></Cards>
        <Cards title ='Quote App' detail = 'Lorem ipsum is simply dummy text of the printing and typesetting industry.'></Cards>
        <Cards title ='Quote App' detail = 'Lorem ipsum is simply dummy text of the printing and typesetting industry.'></Cards>
      </div>
    </div>
  )
}

export default Project
