
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Modal from 'react-modal';
import { Col, Form, Row, Table, Spinner, Button } from 'react-bootstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Image from "../Components/Image";
Modal.setAppElement('#root');
import banner from "../assets/home-banner.webp";
import Navbar from "../Components/Navbar";
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '60px',
    boxShadow: '1px 2px 40px 2px lightgray',
  },
};

function Home() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [donnerid, setDonnerid] = useState('');
  const [userName, setUserName] = useState('');
  const [bgroup, setBgroup] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [datetime, setDatetime] = useState('');
  const [count, setCount] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);


  const navi = useNavigate();
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleNavigate = () => {
    navi('/addblood');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post('https://67593f4e60576a194d140021.mockapi.io/donner',
        { donnerid, userName, bgroup, userNumber, datetime })
        .then(() => {
          setDonnerid('');
          setUserName('');
          setBgroup('');
          setUserNumber('');
          setDatetime('');
          closeModal();
          alert('Successfully donor data updated')
          getApiData();
        })
    } catch (error) {
      toast.error(error)
    }

  }

  async function getApiData() {

    try {
      setLoading(true)
      const response = await axios.get('https://67593f4e60576a194d140021.mockapi.io/donner')
      setApiData(response.data)
      let data = response.data
      let idNumber = Number(data[data.length - 1].id)
      setDonnerid(`Donor-${idNumber + 1}`)
      setLoading(false)
    } catch (error) {
      toast.error(error)
    }
  }
  useEffect(() => {
    getApiData()
  }, [])
  const filterBlood = (apidata, bloodCaps, bloodSmall) => {
    let data = apiData.filter(item => item.bgroup === bloodCaps || item.bgroup === bloodSmall)
    return data
  }
  const bloodAPositive = filterBlood(apiData, 'A+', 'a+')
  const bloodANegative = filterBlood(apiData, 'A-', 'a-')
  const bloodBPositive = filterBlood(apiData, 'B+', 'b+')
  const bloodBNegative = filterBlood(apiData, 'B-', 'b-')
  const bloodOPositive = filterBlood(apiData, 'O+', 'o+')
  const bloodONegative = filterBlood(apiData, 'O-', 'o-')
  const bloodABPositive = filterBlood(apiData, 'AB+', 'ab+')
  const bloodABNegative = filterBlood(apiData, 'AB-', 'ab-')
  const handleDelete = async (id) => {
    const response = axios.delete(`https://67593f4e60576a194d140021.mockapi.io/donner/${id}`)
    getApiData()

  }
  return (
    <>
      <Navbar />
      <Image src={banner} className="w-100 img-fluid" />
      <ToastContainer />
      <div className="container py-4">
        <div className="card shadow-sm rounded p-3 mb-4">
          <div className="d-flex justify-content-between mb-3">
            <button className="btn btn-warning rounded px-4" onClick={openModal}>
              Blood Donor
            </button>
            <button className="btn btn-success rounded px-4" onClick={handleNavigate}>
              Add Blood
            </button>
          </div>

          {loading ? (
            <div className="text-danger text-center py-3">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <div style={{ maxHeight: "200px", overflow: "auto" }}>
              <Table striped bordered hover className="text-center">
                <thead>
                  <tr>
                    <th>S.no</th>
                    <th>Donor ID</th>
                    <th>Name</th>
                    <th>Blood Group</th>
                    <th>Mobile Number</th>
                    <th>Details</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {apiData &&
                    apiData.map((a, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{a.donnerid}</td>
                        <td>{a.userName}</td>
                        <td>{a.bgroup}</td>
                        <td>{a.userNumber}</td>
                        <td>
                          <Link
                            className="text-decoration-none"
                            to={`/donordetails/${a.id}`}
                          >
                            View Details
                          </Link>
                        </td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => handleDelete(a.id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
          )}
        </div>

        <div className="card shadow-sm rounded p-3 mb-4">
          <h5 className="text-center mb-3">Blood Counts</h5>
          {loading ? (
            <div className="text-danger text-center py-3">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <div style={{ maxHeight: "200px", overflowY: "auto" }}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Count</th>
                    <th>A+</th>
                    <th>A-</th>
                    <th>B+</th>
                    <th>B-</th>
                    <th>AB+</th>
                    <th>AB-</th>
                    <th>O+</th>
                    <th>O-</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Count</td>
                    <td>{bloodAPositive.length}</td>
                    <td>{bloodANegative.length}</td>
                    <td>{bloodBPositive.length}</td>
                    <td>{bloodBNegative.length}</td>
                    <td>{bloodOPositive.length}</td>
                    <td>{bloodONegative.length}</td>
                    <td>{bloodABPositive.length}</td>
                    <td>{bloodABNegative.length}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          )}
        </div>

        <div className="mt-3">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="d-flex justify-content-end mb-3">
              <button
                onClick={closeModal}
                className="btn btn-close"
                aria-label="close"
              ></button>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="3">
                  Donor ID
                </Form.Label>
                <Col sm="9">
                  <Form.Control type="text" value={donnerid} disabled />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="3">
                  Name
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="3">
                  Blood Group
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    value={bgroup}
                    onChange={(e) => setBgroup(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="3">
                  Mobile Number
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="number"
                    value={userNumber}
                    onChange={(e) => setUserNumber(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <div className="text-center mt-4">
                <button className="btn btn-primary px-4" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          </Modal>
        </div>
      </div>
    </>

  );
}

export default Home;
