import React from 'react'
import img from '../assets/contact.webp'
import Input from './Input'
import Button from './Button'

const Contact = () => {
  return (
    <div id='contact' className='w-4/5 bg-white shadow m-auto flex rounded p-5 my-20'>
        <div className='w-1/2 '>
            <h1 className='text-center p-3 text-xl font-bold opacity-4'>Contact Me</h1>
            <img src={img} alt="" className=''/>
        </div>
        <div className='w-1/2 p-5 h-4/5'>
            <div className='flex flex-col w-full space-y-10'>
                <Input type='text' text='Full Name'></Input>
                <Input type='email' text='Email'></Input>
                <textarea placeholder='Message' className='border-2 outline-none p-10'></textarea>
                <Button text='Send'></Button>
                
            </div>
        </div>
    </div>
  )
}

export default Contact
