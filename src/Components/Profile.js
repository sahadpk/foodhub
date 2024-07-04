import React, { useState } from 'react'

function Profile(props) {
    const [count,setCount]=useState(0);
   
  return (
    <div>
      <h1>pofile</h1>
      <h3>Name:{props.name}</h3>
      <h3>count:{count}</h3>
     
    </div>
  )
}

export default Profile
