import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Mail() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        axios.get("https://67593faf60576a194d140245.mockapi.io/Donor")
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                toast.error('Error fetching data.',error);
            });
    }, []);

    const filteredData = data.find(item => item.id === id);

    useEffect(() => {
        if (filteredData) {
            const updatedData = { ...filteredData, adminValidate: 'yes' };
            axios.put(`https://67593faf60576a194d140245.mockapi.io/Donor/${id}`, updatedData)
                .then(response => {
                    toast.success('User validated successfully!');
                    setShowModal(true);
                })
                .catch(error => {
                    toast.error('Failed to update data.',error);
                });
        }
    }, [filteredData, id, ToastContainer]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {filteredData ? (
                <>
                    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>User Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Email: {filteredData.email}</h5>
                            <h6>Validation Status: {filteredData.adminValidate}</h6>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowModal(false)}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            ) : (
                <p>Details not available for this ID.</p>
            )}

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default Mail;
