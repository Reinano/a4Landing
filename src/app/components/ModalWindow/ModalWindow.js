import React, { useState, useRef, useEffect, useCallback} from 'react';

const ModalWindow = ({showModal, setShowModal}) => {
  const [email, setEmail] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState('E-mail cannot be empty');
  const [formValid, setFormValid] = useState(false);
  const modalRef = useRef();

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email' :
          setEmailDirty(true)
          break
    }
  }

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Incorrect e-mail');
    } else {
      setEmailError('');
    }
  }

  const closeModal = e => {
    document.body.classList.remove('bodyOverflowHidden');
    if(modalRef.current === e.target) {
      setShowModal(false);
    }
  }


  const keyPress = useCallback(e => {
    if(e.key === 'Escape' && showModal){
      setShowModal(false);
    }
  },[setShowModal, showModal])


  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  },[keyPress]);

  useEffect(() => {
    if(emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError]);

  return (
    <>
      { showModal ?
        <div className="modalOverlay" ref={modalRef} onClick={closeModal}>
          <div className="modalBody">
            <div className="modalSubscribe">
              <div className="modalBody__bgRocket"></div>
              <div className="modalContent">
                <button className="modal__buttonClose" onClick={() => setShowModal(!showModal)}></button>
                <h2 className="modal__title">Don’t miss any updates</h2>
                <p className="modal__desc">Follow the news and development of the project</p>
                {(emailDirty && emailError) && <div className="modal__inputError">{emailError}</div>}
                <form action="" className="modal__form">
                  <label htmlFor="email">
                    <input onChange={(e) => emailHandler(e)} onBlur={(e) => blurHandler(e)} value={email} className="modal__form_email" name="email" type="email" placeholder="E-mail"/>
                  </label>
                  <input disabled={!formValid} className="modal__form_submit" type="submit" value="Submit"/>
                </form>
              </div>
            </div>
          </div>
        </div>
        : null
      }
    </>
  );
}
export default ModalWindow;
