import React from 'react';
import './PopUpImage.css';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  customSize?: boolean; // New prop for custom size
  theCustomSize: string;
  imageDescription: string;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, imageSrc, imageAlt, customSize = false, theCustomSize = '800px', imageDescription}) => {
  console.log("ModalProps: ", theCustomSize)
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}
        style = {{
          borderRadius: '8px',
          position: 'relative',
          maxWidth: theCustomSize,
          maxHeight: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <img src={imageSrc} alt={imageAlt} className="modal-image" />
        
      </div>
      {/*<div className='popUpTitle'>{imageAlt} </div> */}
      <div>
        <div className='popUpTitle'> Description</div>
        <hr className='horizontalLine'></hr>
        <div className='popUpDescription'> {imageDescription}</div>
      </div>
      
    </div>
  );
};

export default Modal;
