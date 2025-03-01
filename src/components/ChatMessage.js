import React from 'react'
import { USER_ICON } from '../utils/constants'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex'>
        <img className='w-8 h-8' src={USER_ICON} alt='user-logo'/>
        <p className='mx-1 font-bold py-1'>{name}</p>
        <p className='py-1'>{message}</p>
    </div>
  )
}

export default ChatMessage
