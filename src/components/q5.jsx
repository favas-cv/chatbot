import React, { useState } from 'react'

function Formkidilam() {
    const [input,setinput] = useState('');
    const [text,settext] = useState([]);
    const [state,setstate] = useState(true);

    function adding(){
        settext([...text,input]);
        setinput('')
    }
    function hiding(){
        setstate(!state);
    }
  return (
<>
<input type='text' value={input} onChange={(e)=>setinput(e.target.value)} />
<button onClick={adding}>add</button>
<h2>

    {text.length > 0 && (
        <>
        {state && <p>{text}</p>}
        <button onClick={hiding}>{state?'hide':'show'}</button>
        
        </>
    )}


</h2>

</> 
 )
}

export default Formkidilam