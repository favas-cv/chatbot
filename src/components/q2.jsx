import React, { useState } from 'react'

function Q2() {

    const [state,setstate] =useState(false);

  return (
    
    <>
    <button onClick={()=>setstate(!state)}>
        {state ? 'blue' : 'red'}
    </button>
  
      <p style={{ color: state ? 'red' : 'blue' }}>hello sugalle</p>
    
    </>
  )
}

export default Q2