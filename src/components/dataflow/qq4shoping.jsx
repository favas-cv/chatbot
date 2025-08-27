import React, { useState } from 'react'
import Child from './shopingchild';


function Shoppingcart() {
    const [cart,setcart] = useState([]);

    function add(item){
        setcart([...cart,item]);

    };

    function remove(item){
        setcart(cart.filter(i=>i!==item));
    }

  return (
    <>
       <ul>
        {cart.map(items=>(
            <li>
            <h3>{items}</h3>
            </li>
        ))}
       </ul>

    <Child add={add} remove={remove} />
    
    </>
  )
}

export default Shoppingcart;