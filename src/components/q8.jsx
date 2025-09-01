import React, { useEffect, useState } from 'react'

function Resize() {
    const [width,setwidth] = useState(window.innerWidth);
    const [display,setdisplay] = useState('');

useEffect(()=>{
    setwidth(window.innerWidth)
},[width])

    useEffect(()=>{
        if(width<768){
            setdisplay('mobile')
        }
        if(width>768){
            setdisplay('desktop')
        }
    },[width])
  return (
<>
<h1>{display}</h1>


</>  )
}

export default Resize