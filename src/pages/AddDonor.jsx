import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Card } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [donnerid, setDonnerid] = useState("");
  const [userName, setUserName] = useState("");
  const [bgroup, setBgroup] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [datetime, setDatetime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userName || !bgroup || !userNumber || !datetime) {
      toast.error("All fields are required!");
      return;
    }

    if (!/^\d{10}$/.test(userNumber)) {
      toast.error("Please enter a valid 10-digit phone number!");
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post("https://67593f4e60576a194d140021.mockapi.io/donner", {
        userName,
        bgroup,
        userNumber,
        datetime,
      });
      setDonnerid("");
      setUserName("");
      setBgroup("");
      setUserNumber("");
      setDatetime("");

      toast.success("Successfully updated donor data!");
    } catch (error) {
      toast.error("Error: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f7f7f7",
      }}
    >
      <Card
        style={{
          padding: "30px",
          maxWidth: "500px",
          width: "100%",
          borderRadius: "10px",
          boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card.Body>
          <h3 className="text-center mb-4" style={{ fontWeight: "bold" }}>
            Donor Registration
          </h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3"
              controlId="formPlaintextDonnerId"
              style={{
                marginBottom: "20px",
              }}
            >
              <Form.Label style={{ fontWeight: "bold" }}>DonerId</Form.Label>
              <Form.Control
                type="text"
                placeholder="DonerId"
                value={donnerid}
                disabled
                style={{
                  borderRadius: "30px",
                  padding: "10px",
                  border: "1px solid #ccc",
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formPlaintextName"
              style={{
                marginBottom: "20px",
              }}
            >
              <Form.Label style={{ fontWeight: "bold" }}>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                style={{
                  borderRadius: "30px",
                  padding: "10px",
                  border: "1px solid #ccc",
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formPlaintextBloodGroup"
              style={{
                marginBottom: "20px",
              }}
            >
              <Form.Label style={{ fontWeight: "bold" }}>B Group</Form.Label>
              <Form.Control
                type="text"
                placeholder="Bloodgroup"
                value={bgroup}
                onChange={(e) => setBgroup(e.target.value)}
                style={{
                  borderRadius: "30px",
                  padding: "10px",
                  border: "1px solid #ccc",
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formPlaintextNumber"
              style={{
                marginBottom: "20px",
              }}
            >
              <Form.Label style={{ fontWeight: "bold" }}>Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Mobile number"
                value={userNumber}
                onChange={(e) => setUserNumber(e.target.value)}
                style={{
                  borderRadius: "30px",
                  padding: "10px",
                  border: "1px solid #ccc",
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formPlaintextDateTime"
              style={{
                marginBottom: "20px",
              }}
            >
              <Form.Label style={{ fontWeight: "bold" }}>Date & Time</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Date & Time"
                value={datetime}
                onChange={(e) => setDatetime(e.target.value)}
                style={{
                  borderRadius: "30px",
                  padding: "10px",
                  border: "1px solid #ccc",
                }}
              />
            </Form.Group>

            <div
              className="text-center mt-4"
              style={{
                marginTop: "20px",
              }}
            >
              <Button
                className="bg-primary text-white"
                type="submit"
                disabled={isSubmitting}
                style={{
                  borderRadius: "30px",
                  padding: "12px 30px",
                  fontSize: "16px",
                  width: "100%",
                  backgroundColor: "#007bff",
                  border: "none",
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
