import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoggedOut from './pages/LoggedOut';
import LoggedInHome from './pages/LoggedInHome';
import { LoginContext } from './helpers/LoginContext';

interface LoginContextValue {
  loggedIn: boolean
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

 
  return (
    <LoginContext.Provider value={{loggedIn}}>
      <Router>
      <Routes>
        <Route path='/songfy' element={loggedIn ? <LoggedInHome /> : <LoggedOut />}></Route>
      </Routes>
    </Router>
    </LoginContext.Provider>
  );
}

export default App;
