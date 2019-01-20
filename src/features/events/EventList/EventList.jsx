import React, { Component } from "react";
// eventlist is the wrapper for the EventListItems
import EventListItems from "../EventList/EventListItems";

class EventList extends Component {
  render() {
    
    const { events, onEventOpen } = this.props;
    // console.log(events);
    return (
      <div>
        {events.map(event => (
          <EventListItems key={event.id} event={event} onEventOpen={onEventOpen}/>
        ))}
      </div>
    );
  }
}

export default EventList;
