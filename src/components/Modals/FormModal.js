import React from 'react';
import Modal from 'react-modal';
import { customStyles } from '../CustomStyle';

Modal.setAppElement('#root');

const FormModal = ({ isOpen, close, children }) => {
  return (
    <Modal isOpen={isOpen} style={customStyles} onRequestClose={close}>
      {children}
    </Modal>
  );
};

export default FormModal;
