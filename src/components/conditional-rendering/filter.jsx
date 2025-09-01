import React, { useState } from 'react'

function Filtercart() {

    const [maxprice,setmaxprice] = useState(200);
     const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Keyboard", price: 800 },
    { id: 4, name: "Monitor", price: 1500 },
  ];

  const filtered = products.filter((prdct)=>prdct.price < maxprice);
  return (
<>
<h2>filtered items {filtered.length}</h2>

<input type='number' value={maxprice} onChange={(e)=>setmaxprice(Number(e.target.value))}/>
<ul>
    {filtered.map((res,i)=>(
        <li key={i}>{res.name} $ {res.price}</li>
    ))}
</ul>

</> 
 )
}

export default Filtercart