import { useState } from 'react'
import Q1 from './components/q1'
import Q2 from './components/q2'
import Q3 from './components/q3'
import Q4 from './components/q4'
import Chatbot from './chatbot/chatbot'
import Colorswitcher from './chatbot/colorswitcher'
import Lengthcount from './components/lengthcout'
import QQ1 from './components/dataflow/qq1'
import QQ2 from './components/dataflow/qq2'
import QQ3 from './components/dataflow/qq3'
import Shoppingcart from './components/dataflow/qq4shoping'
import Login from './components/conditional-rendering/loginbutton'
import Todo from './components/conditional-rendering/todosimple'
import FAQ from './components/conditional-rendering/faq'

function App() {
      const [frut,setfrut] =useState(['apple','banana','mango']);
   const [msg,setmsg] = useState('hello')

   function updatemsg(){
    setmsg('ok daa hii');
   }
  return (
    <>
    <Colorswitcher/>
    <br/>
    <Lengthcount/>
    <br/>
    <QQ1 username='fawaz'/>

    {frut.map((item)=>(
      <QQ2 items={item}/>
    ))}
    <h2>{msg}</h2>

    <QQ3 update = {updatemsg}/>
    <br/>
    <br/>
    <Shoppingcart/>
    <Login/>
    <Todo/>
    <FAQ/>
    
    </>
    
)
}


export default App
