import React from 'react';
import '../App.css';
import { Row, Col, Nav } from 'react-bootstrap';
import { FaInstagram, FaFacebookSquare, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { MdBloodtype } from 'react-icons/md';
import Div from '../Components/Div';
import Text from '../Components/Text';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Div className="container">
      <hr />
      <Nav>
        <Nav.Item>
          <Nav.Link className="footer-logo text-danger fs-4 fw-bold" as={Link} to="/home">
            <span className="fs-2 hedder1">
              <MdBloodtype />
            </span>
            Avanam Blood Bank
          </Nav.Link>
        </Nav.Item>

        <Nav className="ms-auto social-icons gap-2 icons">
          <Nav.Item>
            <Nav.Link className="text-decoration-none text-danger fs-4 social-icon"  as={Link} to="https://instagram.com">
              <FaInstagram />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-decoration-none text-danger fs-4 social-icon"  as={Link} to="https://facebook.com">
              <FaFacebookSquare />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-decoration-none text-danger fs-4 social-icon" as={Link} to="https://twitter.com">
              <FaTwitter />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-decoration-none text-danger fs-4 social-icon" as={Link} to="https://whatsapp.com">
              <FaWhatsapp />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Nav>
      <hr />
      <Row>
        <Col lg={4}>
          <Div className="d-flex flex-column justify-content-center align-items-center">
            <Div className='fs-4 fw-1'>
              <Link to="/" className="text-dark text-decoration-none">About</Link>
            </Div>
            <Text css='text-center' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum odio id tincidunt fermentum.'/>
          </Div>
        </Col>

        <Col lg={4} className="d-flex flex-column justify-content-center align-items-center my-3 my-md-0">
          <Div className='fs-4 fw-1'>Quick Links</Div>
          <Link className="text-dark text-decoration-none" to="/about">About</Link>
          <Link className="text-dark text-decoration-none" to="/contact">Contact</Link>
        </Col>

        <Col lg={4} className='d-flex flex-column justify-content-center align-items-center'>
          <Text text='&copy; 2024 Your Company. All rights reserved.' />
        </Col>
      </Row>
    </Div>
  );
} 

export default Footer;
