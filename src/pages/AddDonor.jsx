import React, { useState } from "react";
import axios from "axios";
import emailjs from '@emailjs/browser';
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [donnerid, setDonnerid] = useState("");
  const [userName, setUserName] = useState("");
  const [bgroup, setBgroup] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const generateRandomId = () => Math.floor(10000 + Math.random() * 90000).toString();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userName || !bgroup || !userNumber || !email) {
      toast.error("All fields are required!");
      return;
    }

    if (!/^\d{10}$/.test(userNumber)) {
      toast.error("Please enter a valid 10-digit phone number!");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    setIsSubmitting(true);

    try {
      const randomId = generateRandomId();
      setDonnerid(randomId);

      await axios.post("https://67593f4e60576a194d140021.mockapi.io/donner", {
        donnerid: randomId,
        userName,
        bgroup,
        userNumber,
        email,
      });
      const emailData = { email, donnerid: randomId, number:userNumber };
      await emailjs.send("service_2cer1wn", "template_prcyhjn", emailData, "U0vN6ww9BrU7Y_JSF");

      setDonnerid("");
      setUserName("");
      setBgroup("");
      setUserNumber("");
      setEmail("");

      toast.success("Donor data submitted successfully and email sent!");
    } catch (error) {
      toast.error("Error: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f9f9f9, #e9ecef)",
        padding: "20px",
      }}
    >
      <Card
        style={{
          maxWidth: "500px",
          width: "100%",
          padding: "40px 30px",
          borderRadius: "15px",
          border: "none",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card.Body>
          <h3
            className="text-center"
            style={{
              fontWeight: "bold",
              marginBottom: "30px",
              color: "#343a40",
            }}
          >
            Donor Registration
          </h3>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formDonorId">
                  <Form.Label className="fw-bold">Donor ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Generated automatically"
                    value={donnerid}
                    disabled
                    className="rounded-pill"
                    style={{
                      padding: "10px 15px",
                      border: "1px solid #ced4da",
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label className="fw-bold">Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="rounded-pill"
                    style={{
                      padding: "10px 15px",
                      border: "1px solid #ced4da",
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBloodGroup">
                  <Form.Label className="fw-bold">Blood Group</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g., A+, O-"
                    value={bgroup}
                    onChange={(e) => setBgroup(e.target.value)}
                    className="rounded-pill"
                    style={{
                      padding: "10px 15px",
                      border: "1px solid #ced4da",
                    }}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formNumber">
                  <Form.Label className="fw-bold">Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="10-digit mobile number"
                    value={userNumber}
                    onChange={(e) => setUserNumber(e.target.value)}
                    className="rounded-pill"
                    style={{
                      padding: "10px 15px",
                      border: "1px solid #ced4da",
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="fw-bold">Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-pill"
                    placeholder="Enter email"
                    style={{
                      padding: "10px 15px",
                      border: "1px solid #ced4da",
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="d-grid">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="rounded-pill btn-primary"
                style={{
                  padding: "12px",
                  fontWeight: "bold",
                }}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <ToastContainer />
    </Container>
  );
}

export default Home;
