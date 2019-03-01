import { createReducer } from "../../app/common/util/reducerUtil";
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, FETCH_EVENTS } from "./eventConstants";

// has the initial state so if you have defined the state in the component, cut that and paste it here

const initialState = [];

export const createEvent = (state, payload) => {
  return [...state, Object.assign({}, payload.event)];
};

export const updateEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.event.id),
    Object.assign({}, payload.event)
  ];
};

export const deleteEvent = (state, payload) => {
  return [...state.filter(event => event.id !== payload.eventId)]; // here we are returing an array [] and inside running state.filter because whatever the event is, should remain inside an array
};

// this reducer will run first as this is called from the index file as store.dispatch
export const fetchEvents = (state, payload) => {
    // payload has the data in the events variable
    // console.log(payload.events);
    return payload.events; // this gives an array of two objects so we dont need to place it in [] 

}
export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent,
  [FETCH_EVENTS]: fetchEvents
});
