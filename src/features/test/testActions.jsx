import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./textConstants";
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


// these actions are available to the testReducer and we have to maps these actionss to the component to amke use of these  actions
// by dispatching some actions in the component
