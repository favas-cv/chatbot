import React, { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);


  const faqs = [
    { q: "What is React?", a: "React is a JS library for building UIs." },
    { q: "What is JSX?", a: "JSX lets you write HTML inside JavaScript." },
    { q: "What is useState?", a: "It is a React hook for state management." },
  ];

  function toggle(index) {
    setOpenIndex(openIndex ===index?null:index)


    
  }

  return (
   <>
   <h2>FAQ</h2>
   {
    faqs.map((obj,i)=>(
        <>
        <p onClick={()=>toggle(i)}>{obj.q}</p>
        {openIndex===i &&<p>{obj.a}</p>}
        </>
    ))
   }
   
   </>
  )
}

export default FAQ;
