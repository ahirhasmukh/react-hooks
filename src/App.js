import React, { useState } from "react";
import usePrevious from './hooks/usePrevious';

function App() {
  const [age, setAge] = useState(21);
  const previousAge = usePrevious(age);

  return (
    <div className="App">
      <h2>Current age: {age}</h2>
      <h2>Previous age: {previousAge}</h2>
      <h3>
        <button onClick={()=>setAge(age - 1)}>Make me younger</button>
      </h3>
    </div>
  );
}

export default App;