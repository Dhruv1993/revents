import { INCREMENT_COUNTER, DECREMENT_COUNTER, COUNTER_ACTION_STARTED, COUNTER_ACTION_FINISHED } from "./textConstants"; // just for the defintion in the case
import { createReducer } from "../../app/common/util/reducerUtil";

const initalState = {
  data: 34,
  loading: false
}; // this is like a state variable for the test component

// const testReducer = (state = initalState, action) => {
//   switch (action.type) { // actions are received from the testActions
//     case INCREMENT_COUNTER:
//       return {
//           // we cant modify the state directly , so we first make a copy of the state by spread operator and then change the
//           // data variable inside the state to make any changes
//         ...state,
//         data: state.data + 1
//       };
//     case DECREMENT_COUNTER:
//       return {
//         ...state,
//         data: state.data - 1
//       };
//     default:
//       return state;
//   }
// };
// export default testReducer;

// imagine you have a lot of reducers for the components, different files or the same file they all have to exported as pure functions and combined
// one rootReducer

// the fact is if we waant to manipute the data variable we have to make actions to this reducer, because we cannot mutate the state
// directly

// or we could do it this way

const increment_Counter = (state, payload) => {
  // console.log('in reducertest');
  return {
    // we cant modify the state directly , so we first make a copy of the state by spread operator and then change the
    // data variable inside the state to make any changes
    ...state,
    data: state.data + 1
  };
};

const decrement_Counter = (state, payload) => {
  return {
    // we cant modify the state directly , so we first make a copy of the state by spread operator and then change the
    // data variable inside the state to make any changes
    ...state,
    data: state.data + -1
  };
};

export const counterActionStarted = (state, payload) => {
  return {
    ...state,
    loading: true //This is used up in the button component in the TestComponent where we can use this to set the loading state to true
  }
}

export const counterActionFinished = (state, payload) => {
  return {
    ...state,
    loading: false //This is used up in the button component in the TestComponent where we can use this to set the loading state to true
  }
}

export default createReducer(initalState, {
  [INCREMENT_COUNTER]: increment_Counter,
  [DECREMENT_COUNTER]: decrement_Counter,
  [COUNTER_ACTION_STARTED]: counterActionStarted,
  [COUNTER_ACTION_FINISHED]: counterActionFinished
});
