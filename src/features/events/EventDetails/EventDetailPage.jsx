import React from "react";
import { Grid } from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedSidebar from "./EventDetailedSidebar";
import EventDetailedInfo from "./EventDetailedInfo";
import { connect } from "react-redux";
// stateless functional component

const EventDetailPage = ({ event }) => { // this event is because we map according to the id parameter
  // console.log(event);
  return (
    <Grid>
      <Grid.Column mobile={16} tablet={8} computer={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={6}>
        <EventDetailedSidebar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  );
};
// here the only thing we did was to connect the state of the event reducer and make it available as props in this component
const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id; // this gets the id of the post, and we need this id. This is because of the routes
  let event = {};
  event = state.events.filter(event => event.id === eventId)[0];
  console.log(event);
  return {
    event
  };
};
export default connect(mapState)(EventDetailPage);
