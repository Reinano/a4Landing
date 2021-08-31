import React, { useState } from 'react';

const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!isShowing);
  }

};
export default useModal;
