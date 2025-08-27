import React, { useState } from 'react'

function Child({add,remove}) {
    const [items,setitem] = useState('');
  return (
    <>
    <input type='text' value={items} onChange={(e)=>setitem(e.target.value)}/>
    <button onClick={()=>{
        add(items);
        setitem('');
    }}> add </button>
    <button onClick={()=>{
        remove(items);
        setitem('')
    }}>delete</button>
    
    </>
  )
}

export default Child