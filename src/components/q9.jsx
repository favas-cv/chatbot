import React, { useEffect, useState } from 'react'

function Keyboard() {

    const [key,setkey] =  useState('');
    useEffect(()=>{
        const fn = (e)=>setkey(e.key);
            window.addEventListener('keydown', fn);
    },[])
  return (
<>

<h1>key uis {key}</h1>



</>  )
}

export default Keyboard