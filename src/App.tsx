import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoggedOut from "./pages/LoggedOut";
import LoggedInHome from "./pages/LoggedInHome";
import { LoginContext } from "./helpers/LoginContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Users } from "./data/UsersData";
import { User } from "./helpers/LoginContext";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [user, setUser] = useState<User | null>(null);
  return (
    <LoginContext.Provider value={{ loggedIn, user, setUser}}>
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
