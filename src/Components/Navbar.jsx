import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/logo image.jpg";
import Image from "./Image";
import { Link } from "react-router-dom";
import Text from "./Text";

const Navbars = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Image
          style={{ width: "80px", height: "auto", marginRight: "10px" }}
          src={Logo}
          alt="Logo"
        />
        <Nav.Link href="/"><Text css='text-success fs-4 fw-bold' text='Avanam Blood Bank'/></Nav.Link>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <div className="d-flex gap-3">
            <Link to="/signin" className="btn btn-success text-white">
              Sign in
            </Link>
            <Link to="/signup" className="btn btn-outline-success">
              Sign up
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
