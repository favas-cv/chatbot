import React, { useState } from 'react'

function Q3() {
    const [text,settext] = useState('');
    const [show,setshow] = useState(false);
    const [togle,settogle] =useState(true);

 

  return (
     <>
     <input type='text' placeholder='enter' onChange={(e)=>settext(e.target.value)}/>
     <button onClick={()=>setshow(true)}>add</button>

     {show &&
     <p>{togle? text:null}  
     <button onClick={()=>settogle(!togle)}>{togle?'hide':'show'}</button></p>}

     </>
  )
}

export default Q3;