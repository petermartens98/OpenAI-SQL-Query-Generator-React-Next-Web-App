import React from 'react'

interface CodeDisplayProps {
  text: string
}

const CodeDisplay = ( { text }: CodeDisplayProps) => {
  return (
    <div className="code-display">
        <div className="buttons">
            <div className='button first'></div>
            <div className='button middle'></div>
            <div className='button last'></div>
        </div>
        <div className='code-output'>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default CodeDisplay