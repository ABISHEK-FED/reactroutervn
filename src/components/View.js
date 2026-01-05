import React from 'react'
import { useNavigate } from 'react-router-dom'

const View =()=> {
  const navigate=useNavigate()
  return (
    <div>
      <h1>this is view component</h1>
      <button onClick={()=>navigate(-1)}>Back</button>
    </div>
  )
}

export default View
