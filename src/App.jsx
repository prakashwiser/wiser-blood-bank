import { useState } from 'react'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NoPage from './Components/NoPage'
import SignUp from './Components/SignUp';
import Mail from './Components/Mail';
import Admin from './Components/Admin';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/admin" element={<Admin />} />
          {/* <Route path="/Login" element={<Login />} /> */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App