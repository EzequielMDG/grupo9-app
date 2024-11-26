import './card.css';

import React from 'react'

function Card({users1}) {   
  return (
    <div className='card-container'>
        {users1.map((user) => (  
            <div className='card' key={user.name}>
                <h2>{user.name}</h2> 
                <p> {user.email}</p>  
            </div> 
        ))}
    </div>
  );
}

export default Card
