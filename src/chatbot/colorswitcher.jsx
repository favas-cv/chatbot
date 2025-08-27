import React, { useState } from 'react'

function Colorswitcher() {
  const [index, setIndex] = useState(0);

  const colors = ['blue', 'green', 'red','skyblue','black','pink'];

  function Changingcolor() {
    (index === colors.length-1 ? setIndex(0):setIndex(prev=>prev+1))
  }

  return (
    <>
      <button onClick={Changingcolor}>CHANGE ME</button>
      <div 
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: colors[index],
          marginTop: "10px"
        }}
      />
    </>
  );
}

export default Colorswitcher;
