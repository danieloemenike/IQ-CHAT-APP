import React from 'react'
import { Link } from 'react-router-dom';

const PageUnavailable = () => {
  return (
    <div>
      <h2 style={{margin:30, color: '#0642c2'}}> Seems you got lost here...🦆</h2>
      <p style={{margin:30, color: 'grey'}}> You can find your way back 
      <Link to = "/login"> home here </Link>

      </p>
    </div>
  )
}

export default PageUnavailable
