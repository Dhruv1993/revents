import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from "cuid";
import { connect } from "react-redux";
import { createEvent, updateEvent, deleteEvent } from "../eventActions";
// import Responsive from "react-responsive";
// const Desktop = props => <Responsive {...props} minWidth={992} />;
// // const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
// const Mobile = props => <Responsive {...props} maxWidth={767} />;
// const Default = props => <Responsive {...props} minWidth={768} />;

class EventDashboard extends Component {
  state = {
    isOpen: false, // variable to determine if a form is open or not
    selectedEvent: null
  };
  // }

  handleFormOpen = () => {
    // arrow function doesnt require this binding
    // in order to bind this method to the component class we do this.handleFormOpen = this.handleFormOpen.bind(this); or
    // another way of doing it is simply calling this function using arrow functions because this doesn't require this binding
    this.setState({
      selectedEvent: null,
      isOpen: true
    });
  };

  handleCancelFrom = () => {
    this.setState({
      isOpen: false
    });
  };
  // double es6 functions are used when we have to pass on the values from the child to a parent where an event has been raised.
  // handleOpenEvents is passed in props of EventList and from there passed on to EventListItems, where it can be
  // assessed as onEventOpen on the view button which passes the argument as 'event'(the event argument is to signify which
  //event has been opened)
  handleOpenEvents = eventsToOpen => () => {
    // console.log(eventsToUpdate);
    this.setState({
      selectedEvent: eventsToOpen,
      isOpen: true
    });
  };

  handleUpdateEvent = updatedEvent => {
    this.props.updateEvent(updatedEvent);
    this.setState({
      isOpen: false,
      selectedEvent: null
    });
  };

  handleDeleteEvent = eventID => () => {
    this.props.deleteEvent(eventID);
  };

  handleCreateEvents = newEvent => {
    newEvent.id = cuid(); // this adds new property to newEvent object
    newEvent.hostPhotoURL = "/assets/user.png";
    // const updatedEvent = [...this.state.events, newEvent]; // copies above state.events plus newEvent that now has
    // id and hostPhotoURL
    this.props.createEvent(newEvent);
    this.setState({
      isOpen: false
    });
    // console.log(this.state.events);
  };

  render() {
    console.log(this.props);
    const { selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <div>
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={10} className="gridTen">
            <EventList
              deleteEvent={this.handleDeleteEvent}
              onEventOpen={this.handleOpenEvents}
              events={events}
            />
            {/** events is the property passed to the props and can be assed via props. console.log(this.props.events)*/}
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={6} className="gridSix">
            <Button
              onClick={this.handleFormOpen}
              positive
              content="Create Event"
            />
            {this.state.isOpen && (
              <EventForm
                updateEvent={this.handleUpdateEvent}
                selectedEvent={selectedEvent}
                createEvent={this.handleCreateEvents}
                handleCancelFrom={this.handleCancelFrom}
              />
            )}
            {/* {/** handleCancelFrom = {this.handleCancelFrom}* Here we gave a reference to the function handleCancelForm/} to its child*/}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events // these are now available to the props of this component at events
  };
};

const actions = {
  createEvent,
  updateEvent,
  deleteEvent
};

export default connect(
  mapStateToProps,
  actions
)(EventDashboard);
