import React, { useEffect, useRef, useState } from 'react'

function UseEffect() {
    const [count,setcount] = useState(10);
    const [running,setrunning] = useState(false);
    const ref = useRef(null);
    useEffect(()=>{
        if(running){
     ref.current = setInterval(() => {
            setcount(c => c - 1)
            
        }, 1000);}

        return ()=> clearInterval(ref.current)
    },[running]);

    useEffect(()=>{
        if(count===0){
            setrunning(false);
            clearInterval(ref.current)
        }
    },[count])

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
    setcount(10)
    clearInterval(ref.current)
    setrunning(true)
}
}>reset</button>

</>  )
}

export default UseEffect