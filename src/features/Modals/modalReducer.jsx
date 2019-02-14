import { MODAL_OPEN, MODAL_CLOSE } from "./modalConstants";
import { createReducer } from "../../app/common/util/reducerUtil";

const initialState = null;

// since actions are pased into the reducer, they are automaticaly made available and combined at the app.js file.



export const openModal = (state, payload) => {
  const { modalType, modalProps } = payload; // destructuring from payload
  console.log(modalType, modalProps)
  return { modalType, modalProps };
};

export const closeModal = () => {
  return null;
};

export default createReducer(initialState, {
  [MODAL_OPEN]: openModal,
  [MODAL_CLOSE]: closeModal
});
