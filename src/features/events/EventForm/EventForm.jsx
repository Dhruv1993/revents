import React, { Component } from "react";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { createEvent, updateEvent } from "../eventActions";
import cuid from "cuid";
import moment from 'moment'
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import TextInputs from "../../../app/common/form/TextInputs";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import DateInput from "../../../app/common/form/DateInput";
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return {
    initialValues: event // The initialValues key is a prop on Redux-Form and the form uses the values in this prop for the initial state of the form.

    // What we return from the mapState becomes props on the component.  By setting the initialValues prop here we are able to initialise the form values with the event and populate the form with the values we retrieve from the redux state.
  };
};

const actions = {
  createEvent,
  updateEvent
};

const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];

// this is for the revalidate npm method to pass it on to the redux forms but make sure your inpute field names are same

const validate = combineValidators({
  title: isRequired({ message: "The event title is missing" }),
  category: isRequired({ message: "Please provide a category" }),
  description: composeValidators(
    isRequired({ message: "please enter a description" }),
    hasLengthGreaterThan(4)({
      message: "Description requires atleast 5 characters"
    })
  )(),
  city: isRequired("city"),
  venue: isRequired("venue"),
  date: isRequired('date required')
});

class EventForm extends Component {

  onFormSubmit = values => {
    values.date = moment(values.date).format(); // since we passed the moment fields into custom component for datepicker, we need to match our field with moment
  
    // evt.preventDefault(); redux forms handle's this already
    console.log(this.props.initialValues.id);
    console.log(values);

    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
      // console.log(this.state.event);
      this.props.history.goBack();
    } else {
      const newEvent = {
      //...values is just like we are spreading out the value fields in the values that we received from the forms
        ...values,
        id: cuid(),
        hostPhotoURL: "/assets/user.png",
        hostedBy: "Me"
      };
      this.props.createEvent(newEvent);
      this.props.history.push("/events");
    }
  };

  // onInputChange = e => {
  //   const newEvent = this.state.event;
  //   newEvent[e.target.name] = e.target.value;
  //   // console.log(newEvent);
  //   this.setState({
  //     event: newEvent
  //   });
  // };
  render() {
    // console.log(this.props); console props and you will see that redux forms have given a way to handleSubmit in the props, so passs your function into the redux function
    const { invalid, submitting, pristine } = this.props; // prestine is when the form has its original value and not been tuched
    // console.log(this.props);
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Event Details" />
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                type="text"
                placeholder="Give your event a name"
                name="title"
                component={TextInputs} // this component is from the common folder where we designed custom fields for these
              />
              <Field
                type="text"
                placeholder="What is your event about?"
                name="category"
                multiple={false}
                component={SelectInput}
                options={category}
              />
              <Field
                type="text"
                placeholder="Tell us about your event"
                name="description"
                rows={4}
                component={TextArea}
              />
              <Header sub color="teal" content="Event Location" />

              <Field
                type="text"
                placeholder="Event city"
                name="city"
                component={TextInputs}
              />
              <Field
                type="text"
                placeholder="Event venue"
                name="venue"
                component={TextInputs}
              />
              <Field
                type="text"
                placeholder="Date and Time of Event"
                name="date"
                component={DateInput}
                dateFormat='YYYY-MM-DD HH:mm'
                timeFormat='HH:mm'
                showTimeSelect
              />
              <Button
                disabled={invalid || submitting || pristine}
                positive
                type="submit"
              >
                Submit
              </Button>
              <Button onClick={this.props.history.goBack} type="button">
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default compose(
  connect(
    mapState,
    actions
  ),
  reduxForm({ form: "eventForm", enableReinitialize: true, validate })
)(EventForm);

// in case of of forms, we have to keep a local state for the onchange and mutate it via the redux state
