import React, { useEffect, useState } from 'react'

function Q4() {
    const [index,setindex] = useState(0);

 const color=['blue','green','red','yellow'];


    function changingcolor(){
      (index===color.length-1?setindex(0):setindex(c=>c+1))


    };
    
     useEffect(() => {
    document.title =color[index]
  });

  return (
    <>
    <p>changing color broo</p>
    <button  style={{backgroundColor:color[index]}} onClick={changingcolor}>{color[index]}</button>
<p style={{color:color[index]}}>
    <div style={{color:color[index]}}>ygvvygygtyytfytfytftyyvyvyvyyyyy</div>
</p>
    
    </>
  )
}

export default Q4