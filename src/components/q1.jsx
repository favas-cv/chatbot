import React, { useState } from 'react'

function Q1() { 
    const [para,setpara] = useState(false); 

  return (
    <>
    <button onClick={()=>setpara(!para)}>
        {para ? 'hide':'show'}
    </button>
    {para && <p>heloo react</p>}
   
    
    </>
  )
}

export default Q1;