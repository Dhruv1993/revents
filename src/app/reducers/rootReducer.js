import testReducer from "../../features/test/testReducer";
// here we combine multiple reducers
import { combineReducers } from "redux";
import eventReducer from "../../features/events/eventReducer";
const rootReducer = combineReducers({
  test: testReducer, // this means that this testReducer for the test component can be accessed at test property via state of a component
  events: eventReducer // this is available at events property under state at eventDashboard
});

export default rootReducer; // now export this to the store file
