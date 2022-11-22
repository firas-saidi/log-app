import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './components/Login'
import SignUp from './components/Signup'
import UserDetails from "./components/UserDetails";
import Header from './components/Header'

function App() {
  return (
    <Router basename={'/log-app'}>
      <div className="App">
        
        <Header/>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes >
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userdetails" element={<UserDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App