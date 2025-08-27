import React, { useState } from 'react'

function Todo() {
    const[todos,settodos] = useState([]);
    const [input,setinput] = useState('');

    function addtodo(){
        if(input.trim()==='') return;
    
            
        settodos([...todos,input]);
        setinput('');
        

    };

    function deletetodo(dele){
       settodos(todos.filter((todo)=>todo!==dele))
    };

 



  return (
    <>
    <h1>my todo</h1>
    <input type='text' value={input} onChange={(e)=>setinput(e.target.value)}/>
    <button onClick={addtodo}>add</button>
    
    <ul>
        {
            todos.map((todo,i)=>(
    
                <li key={i}>{todo}
                <button onClick={()=>deletetodo(todo)}>X</button>
                
                </li>
               
            ))
            
        } 
    </ul>

    
    </>


  )
}

export default Todo