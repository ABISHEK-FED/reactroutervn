import React from 'react'
import { useNavigate } from 'react-router-dom'

const DataInsert =()=> {
  const navigate=useNavigate()
  return (
    <div>
      <h1>this is DataInsert component</h1>
      <br></br>
      <button onClick={()=>navigate('/View')}>Goto view component </button>
    </div>
  )
}

export default DataInsert
