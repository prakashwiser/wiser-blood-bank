import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Col, Row, Card, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function AddBlood() {
  const [getDonorID, setGetDonorID] = useState("");
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState("");
  const [donorDate, setDonorDate] = useState("");
  const [today, setToday] = useState(new Date());
  const [differenceDate, setDifferenceDate] = useState(0);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    if (getDonorID) {
      const filteredData = apiData.filter(item => item.donnerid === getDonorID);
      if (filteredData.length > 0) {
        setFilteredData(filteredData[0]);
        if (filteredData[0].datetime !== 0) {
          const dated = new Date(filteredData[0].datetime);
          const formattedDate = `${dated.getDate()}-${dated.getMonth() + 1}-${dated.getFullYear()} / ${dated.getHours() > 12 ? dated.getHours() - 12 : dated.getHours()}:${dated.getMinutes()}${dated.getHours() > 12 ? " PM" : " AM"}`;
          setDonorDate(formattedDate);
          const differenceInDays = Math.floor((today - dated) / (24 * 60 * 60 * 1000));
          setDifferenceDate(differenceInDays);
        } else {
          setDonorDate("Not given yet");
          setDifferenceDate("Nil");
        }
      } else {
        toast.error("Invalid donor ID. Please enter a valid ID...");
        navigate("/");
      }
    } else {
      toast.warn("Donor ID cannot be empty.");
    }
  };

  async function handleUpdate(id) {
    const currentDate = new Date();
    try {
      await axios.put(`https://67593f4e60576a194d140021.mockapi.io/donner/${id}`, {
        datetime: currentDate,
      });
      toast.success("Successfully updated donor data!");
      navigate("/");
    } catch (error) {
      toast.error("Failed to update donor data. Please try again.");
    }
  }

  async function getApiData() {
    try {
      setLoading(true);
      const response = await axios.get("https://67593f4e60576a194d140021.mockapi.io/donner");
      setApiData(response.data);
      setLoading(false);
    } catch (error) {
      toast.error("Failed to fetch data. Please try again later.");
      setLoading(false);
    }
  }

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="container my-5">
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <Form onSubmit={handleChange} className="shadow-lg p-4 rounded">
              <Form.Control
                type="text"
                placeholder="Enter Donor ID"
                value={getDonorID}
                onChange={(e) => setGetDonorID(e.target.value)}
                className="mb-3"
              />
              <button type="submit" className="btn btn-success m-auto shadow-sm">Submit</button>
            </Form>
          </Col>
          <Col md={3}></Col>
        </Row>
        {filteredData && (
          <Row>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Name: {filteredData.userName}</Card.Title>
                <Card.Text>Number: {filteredData.userNumber}</Card.Text>
                <Card.Text>Blood Group: {filteredData.bgroup}</Card.Text>
                <Card.Text>Blood Donation Date: {filteredData.datetime === 0 ? "Not given yet" : donorDate}</Card.Text>
                <Card.Text>Today's Date: {`${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`}</Card.Text>
                <Card.Text>Difference in Days: {filteredData.datetime !== 0 ? differenceDate : "Nil"}</Card.Text>
                <div className="d-flex justify-content-between">
                  <Link to="/" className="btn btn-danger">Reject</Link>
                  {(differenceDate > 90 || filteredData.datetime === 0) && (
                    <Button onClick={() => handleUpdate(filteredData.id)} variant="success">
                      Update
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Row>
        )}
      </div>
    </>
  );
}

export default AddBlood;
