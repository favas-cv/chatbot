import React, { useEffect, useRef, useState } from 'react'

function UseEffect() {
    const [count,setcount] = useState(0);
    const [running,setrunning] = useState(true);
    const ref = useRef(null);
    useEffect(()=>{
        if(running){
     ref.current = setInterval(() => {
            setcount(c => c +1)
            
        }, 1000);}
        return ()=> clearInterval(ref.current)
    },[running]);

    useEffect(()=>{
        document.title=count;
    },[count]);

    function stoping(){
        setrunning(!running)
    }
  return (
<>
count is {count}
<button onClick={stoping}>{running?'stop':'start'}</button>
<button onClick={()=>{
    setcount(0)
    clearInterval(ref.current)
    setrunning(false)
}
}>reset</button>

</>  )
}

export default UseEffect