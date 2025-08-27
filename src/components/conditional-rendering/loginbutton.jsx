import React, { useState } from 'react'

function Login() {
    const[isloged,setloged]=useState(true);

 
  return (
<>
{isloged?<button onClick={()=>setloged(false)}>logout</button>:<button onClick={()=>setloged(true)}>login</button>}




</>  )
}

export default Login