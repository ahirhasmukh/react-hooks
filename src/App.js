import React, { useState, useEffect, useRef } from "react";
import "./App.scss";

const initXY = {
  x: null,
  y: null
}

function App() {
  const [time, setTime] = useState(Date);
  const [xy, setXY] = useState(initXY);

  useEffect(()=> {
    let handle = setInterval(()=> {
      setTime(Date);
    }, 3000);

    return () => {
      clearInterval(handle);
    }
  })

  function mouseMoveHandler(e) {
    setXY({
      x: e.clientX,
      y: e.clientY
    })
  }

  useEffect(()=> {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.addEventListener("mousemove", mouseMoveHandler);
    }
  });

  return (
    <div className="App">
      <span style={{margin:"20px",display:"inline-block"}}>Date & Time: {time}</span>
      <h3>{`x: ${xy.x}, y: ${xy.y}`}</h3>
    </div>
  );
}

export default App;
