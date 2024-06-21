import React from 'react';
import '../styles/Modal.css';

interface ModalProps {
    onClose: () => void;
    content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, content }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    X
                </button>
                {content}
            </div>
        </div>
    );
};

export default Modal;
