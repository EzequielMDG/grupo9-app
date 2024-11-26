import React from 'react'
import Card from '../Card/Card.jsx'

function Usuarios({users}) { 
    // console.log(users)
  return (
    <div>
        <h2>Usuarios</h2>  
        <hr /> 
        <Card users1 = {users}/>      
    </div>
  )
}

export default Usuarios
