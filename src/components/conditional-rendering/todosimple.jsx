import React, { useState } from 'react'

function Todo() {
    const [todos,settodos] = useState([]);
    const [input,setinput] = useState('');
    function addlist(){
        if(input.trim()==='') return;
        settodos([...todos,input]);
        setinput('')

    }

    function deletetodo(index){
        settodos(todos.filter((res,i)=>i!==index))

    }
    
  return (
    <>
    <h1>my todo</h1>
    <input type='text' value={input} onChange={(e)=>setinput(e.target.value)}/>
   <button onClick={addlist}>add</button>
   <ul>  
     {todos.map((res,i)=>(
    <li key={i}>{res}
    <button onClick={()=>deletetodo(i)}>delete</button>
    </li>
    
    
   ))}
   
   
   </ul>

    </>
  )
}

export default Todo