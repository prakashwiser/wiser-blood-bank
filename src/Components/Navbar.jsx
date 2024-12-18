
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../assets/logo image.jpg";
import Image from './Image';
import Text from './Text';
import { Link } from 'react-router-dom';
const styles = {
    width: '60px',
    height: 'auto',
    marginRight: '10px'
    
};
function Navbars() {

    return (
        <Navbar expand="sm" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="/" className="text-success fs-4 fw-bold mx-4 d-flex align-items-center">
                    <Image style={styles} src={Logo} alt="logo image" />
                    Avanam Blood bank
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex ms-auto mx-5 gap-3">
                        <Link className="text-dark text-decoration-none fs-5" to="/about"><Text text="About"/></Link>
                        <Link className="text-dark text-decoration-none fs-5" to="/contact"><Text text="Contact Us"/></Link>
                        <Form className='gap-2 d-flex'>
                        <Button className='outline-danger' variant="outline-danger">Sign In</Button>
                        <Button className='btn-danger'>Sign UP</Button>
                        </Form>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbars;
