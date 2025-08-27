import React, { useState } from 'react'

function Lengthcount() {
    const [count,setcount] = useState(0);

    function counting(e){
        let value=e.target.value;

        setcount(value.trim().length)
    }

  return (
<>
<input type='text' onChange={counting}/>
<h2>lenght is :{count}</h2>

</>  )
}

export default Lengthcount;