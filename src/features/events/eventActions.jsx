//  import all the eventConstants
import {
  CREATE_EVENT,
  DELETE_EVENT,
  UPDATE_EVENT,
  FETCH_EVENTS
} from "./eventConstants";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from "../async/asyncAction";
import { fetchSampleData } from "../../app/data/mockApi";

export const fetchEvents = events => {
  return {
    type: FETCH_EVENTS,
    payload: events //
    
  };
};

export const createEvent = event => {
  // event received from the component
  return {
    type: CREATE_EVENT,
    payload: {
      event
    }
  };
};

export const updateEvent = event => {
  return {
    type: UPDATE_EVENT,
    payload: {
      event
    }
  };
};

export const deleteEvent = eventId => {
  return {
    type: DELETE_EVENT,
    payload: {
      eventId
    }
  };
};

export const loadEvents = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart()); // start the loader by setting the loading flag back to true from its initial stae of false
      let events = await fetchSampleData(); // Fetch the data//because this take 2 seconds time to come because of the mockAPI // 
      dispatch(fetchEvents(events)); // push the data to the reducer
      dispatch(asyncActionFinish()); // stop the loader and the loading flag is set back to false
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError()); // and set the loading flag back to false
    }
  };
};
