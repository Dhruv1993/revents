import React from 'react'
import { connect } from 'react-redux'
import TestModals from './TestModals';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

//list of all the modals that we want 
const modalLookUp = {
  TestModals,
  LoginModal,
  RegisterModal
}
const ModalManager = ({currentModal}) => {  // this is the way of destructuring properties from the props because of mapstatetoprops below
  let renderedModal ;
  console.log(currentModal)
  if (currentModal) { // if any modal exists then true
    
    const { modalType, modalProps} = currentModal; // destructuring properties from the received props
    const ModalComponent = modalLookUp[modalType];
    renderedModal = <ModalComponent {...modalProps}/>
  }

  return (
   <span>{renderedModal}</span>
  )
}

const mapStateToProps = (state) => {
  
  return {
    currentModal: state.modals // modals is from the root reducer
  }
}

export default connect(mapStateToProps)(ModalManager)
