import { Modal, Button } from 'react-bootstrap';
const Models = ({ show, onClose, onDelete, itemId }) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Deletion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete this item?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={() => onDelete(itemId)}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
export default Models

