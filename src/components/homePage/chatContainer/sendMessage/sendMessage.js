import React from 'react'
import './styles.scss'
import { MdSend } from "react-icons/md";

function SendMessage() {
  return (
    <div className='sendMessageContainer'>
        <input placeholder='Type your Message' className='messageBox'> 
        </input>
        <div className='sendIcon'>
        <MdSend/>
        </div>
      
    </div>
  )
}

export default SendMessage
