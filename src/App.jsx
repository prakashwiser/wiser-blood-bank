import { useState } from 'react'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NoPage from './Components/NoPage'
import LoginPage from './pages/Login';
import ForgotPasswordForm from './pages/Forgotpassword';
import SignUp from './Components/SignUp';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="forgot" element={<ForgotPasswordForm />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

