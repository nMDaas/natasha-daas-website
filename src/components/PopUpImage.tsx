import React from 'react';
import './PopUpImage.css';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  customSize?: boolean; // New prop for custom size
}

const Modal: React.FC<ModalProps> = ({ show, onClose, imageSrc, imageAlt, customSize = false }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={`modal-content ${customSize ? 'custom-size' : ''}`} onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <img src={imageSrc} alt={imageAlt} className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
