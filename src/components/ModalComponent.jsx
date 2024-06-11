import React from 'react';
import './ModalComponent.css';

const ModalComponent = ({ showModal, closeModal }) => {
    if (!showModal) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Hello Pokemon Trainer :D</h2>
                <img src="https://www.pokepedia.fr/images/thumb/e/e2/Pok%C3%A9_Ball-RS.png/200px-Pok%C3%A9_Ball-RS.png" />
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
};

export default ModalComponent;