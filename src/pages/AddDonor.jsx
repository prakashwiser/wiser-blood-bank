import React, { useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Home() {
  const { id } = useParams();
  const [donnerid, setDonnerid] = useState("");
  const [userName, setUserName] = useState("");
  const [bgroup, setBgroup] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigator = useNavigate();

  const generateRandomId = () => Math.floor(10000 + Math.random() * 90000).toString();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id === "2" && (!donnerid || !userName)) {
      toast.error("Donor ID and Name are required!");
      return;
    }

    if (id === "1" && (!userName || !bgroup || !userNumber || !email)) {
      toast.error("All fields are required!");
      return;
    }

    if (id === "1" && !/^\d{10}$/.test(userNumber)) {
      toast.error("Please enter a valid 10-digit phone number!");
      return;
    }

    if (id === "1" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    setIsSubmitting(true);

    try {
      if (id === "2") {
        const response = await axios.get(
          `https://67593f4e60576a194d140021.mockapi.io/donner?donnerid=${donnerid}`
        );

        if (response.data.length > 0) {
          const donor = response.data[0];
          if (donor.donnerid == donnerid) {
            toast.error("This donor has already given blood!");
            setIsSubmitting(false);
            return;
          }
        }
        toast.success("Donor ID and Name submitted successfully!");
      } else if (id === "1") {
        const randomId = generateRandomId();
        setDonnerid(randomId);

        await axios.post("https://67593f4e60576a194d140021.mockapi.io/donner", {
          donnerid: randomId,
          userName,
          bgroup,
          userNumber,
          email,
          alreadyDonated: false,
        });

        const emailData = { email, donnerid: randomId, number: userNumber };
        await emailjs.send("service_2cer1wn", "template_prcyhjn", emailData, "U0vN6ww9BrU7Y_JSF");

        toast.success("Donor registered successfully and email sent!");
      }
      setDonnerid("");
      setUserName("");
      setBgroup("");
      setUserNumber("");
      setEmail("");

      navigator("/");
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
            {id === "1" ? "Donor Registration" : "Submit Donor ID and Name"}
          </h3>
          <Form onSubmit={handleSubmit}>
            {id === "2" && (
              <>
                <Form.Group className="mb-3" controlId="formDonorId">
                  <Form.Label className="fw-bold">Donor ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Donor ID"
                    value={donnerid}
                    onChange={(e) => setDonnerid(e.target.value)}
                    className="rounded-pill"
                    style={{
                      padding: "10px 15px",
                      border: "1px solid #ced4da",
                    }}
                  />
                </Form.Group>
              </>
            )}
            {id === "1" && (
              <>
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
              </>
            )}
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
                {isSubmitting ? "Submitting..." : id === "1" ? "Submit" : "Save"}
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
