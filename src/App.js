import React, { useState, useEffect, useRef } from "react";
import "./App.scss";
import Input from "./components/input";

function App() {
  const [name, setName] = useState("test");
  const [income, setIncome] = useState("high");

  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const marriedRef = useRef(null);
  const submitRef = useRef(null);

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

  const inputStyle = {
    width: '400px',
    height: '40px',
    border: '1px solid #ccc',
    outline: 0
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
        <Input ref={nameRef} id="nameInput" type="text" placeholder="Enter name" style={inputStyle} onKeyDown={keyPressHandler}></Input>
      </div>

      <div>
        <label>Age:</label>
        <Input ref={ageRef} id="ageInput" type="text" placeholder="Enter age" style={inputStyle} onKeyDown={keyPressHandler}></Input>
      </div>

      <div>
        <label>Married:</label>
        <Input ref={marriedRef} id="marriedInput" type="checkbox" onKeyDown={keyPressHandler}></Input>
      </div>

      <div>
        <button ref={submitRef} onClick={onClickHandle} type="submit">Submit</button>
      </div>
    </div>
  );
}

export default App;
