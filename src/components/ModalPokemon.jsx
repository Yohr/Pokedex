import React from 'react';
import './ModalPokemon.css';

const ModalPokemon = ({ showModal, closeModal, message }) => {
    if (!showModal) {
        return null;
    }

    return (
        <div className="modal-overlay2">
            <div className="modal-content2">
                <h2>{message}</h2>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
};

export default ModalPokemon;