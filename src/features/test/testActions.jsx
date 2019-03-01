import { INCREMENT_COUNTER, DECREMENT_COUNTER, COUNTER_ACTION_STARTED, COUNTER_ACTION_FINISHED } from "./textConstants";

// these are the type of actions
// could be for any component
export const increment_Counter = () => {
  // console.log('now in actions');
  return {
    type: INCREMENT_COUNTER
  };
};
export const decrement_Counter = () => {
  return {
    type: DECREMENT_COUNTER
  };
};

export const startCounterAction = () => {
  return {
    type: COUNTER_ACTION_STARTED
  }
}
export const finishCounterAction = () => {
  return {
    type: COUNTER_ACTION_FINISHED
  }
}

const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// make a thunk call

export const incrementAsync = () => {
  return async (dispatch) => {
    dispatch(startCounterAction()); // just starting the counter action
    await delay(3000); // wait for 3 seconds
    dispatch(increment_Counter()); // dispatch the increment counter action action
    dispatch(finishCounterAction()); // then dispatch the finish counter action
  }
}

export const decrementAsync = () => {
  return async (dispatch) => {
    dispatch(startCounterAction()); // just starting the counter action
    await delay(3000); // wait for 3 seconds
    dispatch(decrement_Counter()); // dispatch the increment counter action action
    dispatch(finishCounterAction()); // then dispatch the finish counter action
  }
}




// these actions are available to the testReducer via paylod and type and we have to maps these actionss to the component to amke use of these  actions
// by dispatching some actions in the component
