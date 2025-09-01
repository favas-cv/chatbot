import React, { useEffect, useState } from 'react'

function Fetch() {
    const [data,setdata] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(ogres=>setdata(ogres))
        .catch(err=>console.log(err))
    },[])
  return (
<>

<ul>
    {data.map((resdata)=>(
        <li key={resdata.id}>{resdata.name}</li>
    ))}
</ul>


</>  
)
}

export default Fetch