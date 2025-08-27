import React, { useState } from 'react'

function Q4() {
    const [index,setindex] = useState(0);

 const color=['blue','green','red','yellow'];

    function changingcolor(){

        setindex(prev=>(prev+1) % color.length);

    }

  return (
    <>
    <p>changing color broo</p>
    <button onClick={changingcolor}>{color[index+1]}</button>
<p style={{color:color[index]}}>
    <div style={{color:color[index]}}>ygvvygygtyytfytfytftyyvyvyvyyyyy</div>
</p>
    
    </>
  )
}

export default Q4