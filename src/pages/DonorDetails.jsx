import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function DonorDetail() {
    const navigate = useNavigate()
    const { id } = useParams();
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const handleclick = () => {
        setShowModal(!showModal)
        navigate("/")
    }
    const getApiData = async () => {
        try {
            setLoading(true);
            const response = await axios.get("https://67593f4e60576a194d140021.mockapi.io/donner");
            setApiData(response.data);
            setLoading(false);
            const donorData = response.data.filter(item => String(item.id) === String(id));
            if (donorData.length > 0) {
                setShowModal(true);
            }
        } catch (error) {
            toast.error("Failed to fetch data. Please try again later.");
            setLoading(false);
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    const donorData = apiData.filter(item => String(item.id) === String(id));

    return (
        <>
            <ToastContainer />
            {loading && <div>Loading...</div>}
            {donorData && donorData.length > 0 ? (
                <Modal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    centered
                    style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Donor Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", padding: "10px" }}>
                            <div>
                                <strong>Name:</strong> {donorData[0].userName}
                            </div>
                            <div>
                                <strong>Donor ID:</strong> {donorData[0].donnerid}
                            </div>
                            <div>
                                <strong>Number:</strong> {donorData[0].userNumber}
                            </div>
                            <div>
                                <strong>Blood Group:</strong> {donorData[0].bgroup}
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleclick}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            ) : (
                <div>No data available for the selected donor.</div>
            )}
        </>
    );
}
