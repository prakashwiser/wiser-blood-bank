import { useState } from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NoPage from './Components/NoPage'
import SignUp from './Components/SignUp';
import Mail from './Components/Mail';
import Admin from './Components/Admin';
import Footer from "./pages/Footer";
import Navbars from "./Components/Navbar";


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbars />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
