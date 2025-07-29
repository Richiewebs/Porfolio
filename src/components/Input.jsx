import React from 'react'

const Input = (props) => {
  return (
    <div className='mt-10'>
      <input type={props.type} placeholder={props.text} name={props.name} className='w-full border-licol p-3 outline-none border-[1px] rounded-md'></input>
    </div>
  )
}

export default Input
