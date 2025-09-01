import React, { useEffect, useState } from 'react'

function Jokefetch() {
    const [joke,setjoke] = useState({});
    function getjoke(){
              fetch('https://official-joke-api.appspot.com/random_joke')
        .then(res=>res.json())
        .then(datas=>setjoke(datas));
    }
    useEffect(()=>{
        getjoke();
  
    },[]);

    function fresh(){
        getjoke();
    }
  return (
<>
<ul>
<li>{joke.setup}</li>
<li>{joke.punchline}</li>

</ul>
<button onClick={fresh}>refresh</button>

</>  )
}

export default Jokefetch