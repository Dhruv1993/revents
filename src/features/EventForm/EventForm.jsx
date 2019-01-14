import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
class EventForm extends Component {
  state = {
    event: {
      title: "",
      date: "",
      city: "",
      venue: "",
      hostedBy: ""
    }
  };
  render() {
    const { handleCancelFrom } = this.props; // it says access the property handleCancelFrom from the props
    const { event } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              name="title"
              onChange={this.onInputChange}
              value={event.title}
              placeholder="First Name"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name="date"
              onChange={this.onInputChange}
              value={event.date}
              type="date"
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              onChange={this.onInputChange}
              value={event.city}
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              onChange={this.onInputChange}
              value={event.venue}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              onChange={this.onInputChange}
              value={event.hostedBy}
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleCancelFrom} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
  onFormSubmit = evt => {
    evt.preventDefault();
    console.log(this.state.event); // refs is like props anything in React if defined under ref tag as we did in input, can
    // be assessed by refs
    this.props.createEvent(this.state.event)
    console.log(this.state.event);
  };

  onInputChange = e => {
    // console.log(e.target.value); gets fired everytime we hit the stroke from keyboard
    const newEvent = this.state.event; // we copy whole of the event state object in newEvent
    newEvent[e.target.name] = e.target.value; // we specifically place target value in newEvent according to the name convention
    //newEvent[e.target.name] this targets the name values eg. if we are in title typing Dhruv, so onInputChange is fired on every letter
    // and its value which is takken out by e.target.value is carefully planted in newEvent against the name, that is in this case
    // title
    console.log(newEvent);
    this.setState({
      event: newEvent
    });
  };
}

export default EventForm;
