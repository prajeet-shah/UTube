import React from 'react'

const Button = ( {name}) => {
  return (
    <div className='px-6 py-1 mx-1 bg-gray-400 text-white rounded-lg'>
      <button>{name}</button>
    </div>
  )
}

export default Button
