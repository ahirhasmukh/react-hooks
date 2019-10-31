import React, { useState, useEffect } from "react";
import "./App.scss";

const initXY = {
  x: null,
  y: null
};

const initProfile = {
  followers: null,
  public_repo: null
};

function App_Three() {
  const [time, setTime] = useState(Date);
  const [xy, setXY] = useState(initXY);
  const [profile, setProfile] = useState(initProfile);

  useEffect(() => {
    let handle = setInterval(() => {
      setTime(Date);
    }, 3000);

    return () => {
      clearInterval(handle);
    };
  });

  async function getProfile() {
    const response = await fetch('https://api.github.com/users/smartHasmukh');
    const json = await response.json();

    setProfile({
      followers: json.followers,
      public_repo: json.public_repos
    })
  }

  useEffect(() => {
    // window.addEventListener("mousemove", mouseMoveHandler);
    
    getProfile();
    
    // return () => {
    //   window.addEventListener("mousemove", mouseMoveHandler);
    // };
  }, []);

  function mouseMoveHandler(e) {
    setXY({
      x: e.clientX,
      y: e.clientY
    });
  }

  return (
    <div className="App">
      {/* <span style={{ margin: "20px", display: "inline-block" }}>
        Date & Time: {time}
      </span>
      <h3>{`x: ${xy.x}, y: ${xy.y}`}</h3> */}

      <h4>{`Followers: ${profile.followers}`}</h4>
      <h4>{`Public Repository: ${profile.public_repo}`}</h4>
    </div>
  );
}

export default App_Three;
