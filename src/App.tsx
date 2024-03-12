import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoggedOut from "./pages/LoggedOut";
import LoggedInHome from "./pages/LoggedInHome";
import { LoginContext } from "./helpers/LoginContext";
import Register from "./pages/Register";
import Login from "./pages/Login";

interface LoginContextValue {
  loggedIn: boolean;
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ loggedIn }}>
      <Router>
        <Routes>
          <Route
            path="/songfy"
            element={loggedIn ? <LoggedInHome /> : <LoggedOut />}
          ></Route>
          <Route path="/songfy/register" element={<Register />}></Route>
          <Route path="/songfy/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
