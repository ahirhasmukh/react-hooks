import React, { useState, useEffect, useRef } from "react";
import "./App.scss";

function App() {
  const [name, setName] = useState("test");
  const [income, setIncome] = useState("high");

  const nameRef = useRef();
  const ageRef = useRef();
  const marriedRef = useRef();
  const submitRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  function keyPressHandler(e) {
    if (e.keyCode === 13) {
      if (e.target.id === "nameInput") {
        ageRef.current.focus();
      }
      if (e.target.id === "ageInput") {
        marriedRef.current.focus();
      }
      if (e.target.id === "marriedInput") {
        submitRef.current.focus();
      }
    }
  }

  function onClickHandle(e) {
    console.log(e.target);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleIncomeChange(e) {
    setIncome(e.target.value);
  }

  function onSubmitHandle(e) {
    console.log("State =>", name, income);
    e.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={onSubmitHandle}>
        <div>
          <label>Name:</label>
          <input
            value={name}
            type="text"
            onChange={handleNameChange}
            placeholder="Enter name"
          />
        </div>

        <div>
          <label>Income:</label>
          <select value={income} onChange={handleIncomeChange}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div>
          <button type="submit">Save</button>
        </div>
      </form>

     
        <div>
          <label>Name:</label>
          <input
            ref={nameRef}
            id="nameInput"
            type="text"
            placeholder="Enter name"
            onKeyDown={keyPressHandler}
          />
        </div>

        <div>
          <label>Age:</label>
          <input
            ref={ageRef}
            id="ageInput"
            type="text"
            placeholder="Enter age"
            onKeyDown={keyPressHandler}
          />
        </div>

        <div>
          <label>Married:</label>
          <input
            ref={marriedRef}
            id="marriedInput"
            type="checkbox"
            onKeyDown={keyPressHandler}
          />
        </div>

        <div>
          <button ref={submitRef} onClick={onClickHandle} type="submit" onKeyDown={keyPressHandler}>
            Submit
          </button>
        </div>
     
    </div>
  );
}

export default App;
