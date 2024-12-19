import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import SignUp from './Components/SignUp';
import Mail from './Components/Mail';
import Admin from './Components/Admin';
import Footer from "./pages/Footer";
import Navbars from "./Components/Navbar";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";

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
          <Route path="/mail/:id" element={<Mail />} />
          <Route path="/forgot" element={< Forgotpassword/>} />
          <Route path="/admin/:id" element={<Admin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
