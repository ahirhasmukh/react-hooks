import React, { useState } from "react";
import usePrevious from "./hooks/usePrevious";
import { BrowserRouter, Route, NavLink, Redirect, Prompt } from "react-router-dom";
import AboutPage from "./pages/aboutPage";
import './App.scss';

function App() {
  const [age, setAge] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const previousAge = usePrevious(age);

  function onClickHandler() {
    setLoggedIn(!loggedIn);
  }

  return (
    <BrowserRouter>
      <div className="App">
      <ul>
        <li>
          <NavLink className="links" to="/" exact activeClassName="activeLink">Home</NavLink>
        </li>

        <li>
          <NavLink className="links" exact to="/about" activeClassName="activeLink">About Page</NavLink>
        </li>

        <li>
          <NavLink className="links" exact to="/user/john/joe" activeClassName="activeLink">User Page</NavLink>
        </li>
        <li>
          <button onClick={onClickHandler}>{loggedIn ? "Logout" : "Login"}</button>
        </li>

        <Prompt when={loggedIn && !age} message={(location) => {
          return location.pathname.startsWith("/user") ? true : 'Are you sure';
        }}></Prompt>
      </ul>
        <Route
          path="/"
          exact
          render={() => {
            return (
              <div>
                <h2>Current age: {age}</h2>
                <h2>Previous age: {previousAge}</h2>
                <h3>
                  <button onClick={() => setAge(age - 1)}>
                    Make me younger
                  </button>
                </h3>
                <h1>Welcome to home</h1>
              </div>
            );
          }}
        />

        <Route path="/about" exact component={AboutPage} />

        <Route
          path="/user/:username/:lastname"
          exact
          render={({match}) => {
            return loggedIn ? (
              <div>
                <h2>Welcome {match.params.username} {match.params.lastname}</h2>
                </div>
            ) : (<Redirect to="/"></Redirect>)
          }}

          />
      </div>
    </BrowserRouter>
  );
}

export default App;
