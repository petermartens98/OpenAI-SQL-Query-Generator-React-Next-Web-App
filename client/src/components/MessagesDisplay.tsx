import React from 'react'
import MessageDisplay from './MessageDisplay'

interface userMessage {
    role: string,
    content: string
}

interface MessagesDisplayProps {
    userMessages: userMessage[]
}

const MessagesDisplay = ({ userMessages} : MessagesDisplayProps) => {
  return (
    <div className="messages-display">
        {userMessages.map( (userMessage, _index) => 
            <MessageDisplay key={_index} message={userMessage}/>
        )}

    </div>
  )
}

export default MessagesDisplay