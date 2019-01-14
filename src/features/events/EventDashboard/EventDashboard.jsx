import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../../EventForm/EventForm";

import Responsive from "react-responsive";
// const Desktop = props => <Responsive {...props} minWidth={992} />;
// // const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
// const Mobile = props => <Responsive {...props} maxWidth={767} />;
// const Default = props => <Responsive {...props} minWidth={768} />;

const eventsDashboard = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27T11:00:00+00:00",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28T14:00:00+00:00",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  }
];

class EventDashboard extends Component {
  // constructor(props) {
  // super(props); // called the constructor of the parent class Component. Recomended practice in react documentation
  // this.handleFormOpen = this.handleFormOpen.bind(this);
  // this.handleCancelFrom = this.handleCancelFrom.bind(this);

  state = {
    events: eventsDashboard,
    isOpen: false // variable to determine if a form is open or not
  };
  // }

  handleFormOpen = () => {
    // arrow function doesnt require this binding
    // in order to bind this method to the component class we do this.handleFormOpen = this.handleFormOpen.bind(this); or
    // another way of doing it is simply calling this function using arrow functions because this doesn't require this binding
    this.setState({
      isOpen: true
    });
  };

  handleCancelFrom = () => {
    this.setState({
      isOpen: false
    });
  };
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={10} className="gridTen">
            <EventList events={this.state.events} />
            {/** events is the property passed to the props and can be assed via props. console.log(this.props.events)*/}
          </Grid.Column>
          <Grid.Column width={6} className="gridSix">
            <Button
              onClick={this.handleFormOpen}
              positive
              content="Create Event"
            />
            {this.state.isOpen && (
              <EventForm handleCancelFrom={this.handleCancelFrom} />
            )}
            {/* {/** handleCancelFrom = {this.handleCancelFrom}* Here we gave a reference to the function handleCancelForm/} to its child*/}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default EventDashboard;
