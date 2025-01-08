import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/logo image.jpg";
import Image from "./Image";
import { Link } from "react-router-dom";
import Text from "./Text";
import { useEffect, useState } from "react";

const Navbars = () => {
  const [userData, setUserData] = useState(localStorage.getItem('userData'))
 
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Image
          style={{ width: "80px", height: "auto", marginRight: "10px" }}
          src={Logo}
          alt="Logo"
        />
        <Link className="text-dark text-decoration-none d-none d-md-block" to="/"><Text css='text-success fs-4 fw-bold' text='Avanam Blood Bank' /></Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 gap-3 me-3"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="text-dark text-decoration-none" to="/">Home</Link>
            <Link className="text-dark text-decoration-none" to="/about">About</Link>
            <Link className="text-dark text-decoration-none" to="/contact">Contact</Link>
          </Nav>
          <div className="d-flex gap-3">
            {userData ?
              <Link to="/profile" className="btn btn-outline-success">
                Profile
              </Link>
              :
              <>
                <Link to="/login" className="btn btn-success text-white">
                  Sign in
                </Link>
                <Link to="/signup" className="btn btn-outline-success">
                  Sign up
                </Link>
              </>
            }
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
