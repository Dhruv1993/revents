import testReducer from "../../features/test/testReducer";
import {reducer as FormReducer} from 'redux-form'
// here we combine multiple reducers
import { combineReducers } from "redux";
import eventReducer from "../../features/events/eventReducer";
import modalReducer from "../../features/Modals/modalReducer";
import authReducer from "../../features/auth/authReducer";
import asyncReducer from "../../features/async/asyncReducer";


const rootReducer = combineReducers({
  form: FormReducer,
  test: testReducer, // this means that this testReducer for the test component can be accessed at test property via state of a component
  events: eventReducer, // this is available at events property under state at eventDashboard
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer
});

export default rootReducer; // now export this to the store file
