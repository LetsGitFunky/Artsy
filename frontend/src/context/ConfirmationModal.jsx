import React from 'react';
import Modal from 'react-modal';
import './ConfirmationModal.css';

const ConfirmationModal = ({ onConfirm, onCancel }) => {
    return (
        <Modal isOpen={true} onRequestClose={onCancel} className="confirmation-modal">
            <h2>Confirm</h2>
            <p>Are you sure you want to delete this review?</p>
            <button onClick={onConfirm}>Yes</button>
            <button onClick={onCancel}>No</button>
        </Modal>
    );
}

export default ConfirmationModal;
