import React from 'react'

const Button = (props) => {
  return (
    <div className='flex space-x-20'>
     <button class="btn" className='w-32 h-10 bg-custom-gradient rounded-md text-white hover:bg-hov transition duration-300 ease-in-out '>{props.text}</button>
     
    </div>
  )
}

export default Button
