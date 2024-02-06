import React from 'react'
import './styles.scss'
import MessageBubble from './messageBubble/messageBubble'
function Messages() {
  return (
    <div className='messagesContainer'>
      <MessageBubble/>
      <MessageBubble/>
    </div>
  )
}

export default Messages
