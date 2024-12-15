
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../assets/logo image.jpg";
import Image from './Image';
const styles = {
    width: '80px',
    height: 'auto',
    marginRight: '10px'
};
function Navbars() {

    return (
        <Navbar expand="sm" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#" className="text-success fs-4 fw-bold mx-4 d-flex align-items-center">
                    <Image style={styles} src={Logo} alt="logo image" />
                    Avanam Blood bank
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex ms-auto mx-5">
                        <Button variant="outline-success">Button</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbars;
