import { MODAL_OPEN, MODAL_CLOSE } from "./modalConstants";

export const openModal = (modalType, modalProps) => {
  console.log(modalType, modalProps );
  return {
    type: MODAL_OPEN,
    payload: {
      modalType,
      modalProps
    }
  };
};
console.log(openModal);

export const closeModal = () => {// when we call this only returns type of action
    return {
      type: MODAL_CLOSE,
    };
  };
  console.log(closeModal);