import React, { useEffect, useState } from 'react'

function Formeffect() {
    const [name,setname ] = useState('');
    const [email,setemail] = useState('');
    const [age,setage] = useState();
    const [data,setdata] = useState([])
    const [error,seterror] = useState('');

    useEffect(()=>{
        const newerror = {};
        if(!name || name.length <4){
            newerror.name='invalid name';
        };

        if(!email || !email.includes('@')){
            newerror.email='invalid email'
        };

        if(!age|| age<18){
            newerror.age='invalid age';
        };

        seterror(newerror);
    },[name,email,age])

    function submiting(res){
        res.preventDefault();
        if(Object.keys(error).length === 0){
            alert ('succes');
            setdata([...data,name,email,age])
            setname('');
            setemail('');
            setage('');

        } else{
            alert( 'fail')
        };



    }

  return (
<>
<form onSubmit={submiting}>
<input type='text' value={name} placeholder='name' onChange={(e)=>setname(e.target.value)}/>
{error.name && <p>{error.name}</p>}
<input type='text' value={email} placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
{error.email && <p>{error.email}</p>}

<input type='number' value={age} placeholder='age' onChange={(e)=>setage(e.target.value)}/>
{error.age && <p>{error.age}</p>}

<button type='submit' onClick={submiting}>submit</button>
</form>

<h1>{data.map((res)=>(
    <li>{res}</li>
))}</h1>

</>  )
}

export default Formeffect