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
import LoggedOutPlaylistView from "./pages/LoggedOutPlaylistView";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  let users = [{
    email: "",
    password: "",
    name: ""
  }];
  const [idSong, setIdSong] = useState<number>(0);
  const [user, setUser] = useState<User | null>(null);
  return (
    <LoginContext.Provider
      value={{ loggedIn, users, user, setUser, idSong, setIdSong, setLoggedIn }}
    >
      <Router>
        <Routes>
          <Route
            path="/songfy"
            element={loggedIn ? <LoggedInHome /> : <LoggedOut />}
          ></Route>
          <Route path="/songfy/register" element={<Register />}></Route>
          <Route path="/songfy/login" element={<Login />}></Route>
          <Route
            path="/songfy/album"
            element={<LoggedOutPlaylistView id={1} />}
          ></Route>
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
