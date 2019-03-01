import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendees from "../EventList/EventListAttendees";
import { Link } from "react-router-dom";
import format from "date-fns/format";
export default class EventListItems extends Component {
  render() {
    const { event, deleteEvent } = this.props;
    console.log(event);
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{event.title}</Item.Header>
                <Item.Description>
                  <a href="##">hosted by {event.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            {/* In order to format check datefns website and search format and cheange version to 1.29 to check es15 */}
            <Icon name="clock" /> {format(event.date, "dddd Do MMMM")} at{" "}
            {format(event.date, "HH:mm")}
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees &&
              event.attendees.map(item => (
                <EventListAttendees key={item.id} attendee={item} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>
          <Button
            as={Link}
            to={`/event/${event.id}`}
            color="teal"
            floated="right"
            content="View"
          />
          <Button
            onClick={deleteEvent(event.id)}
            as="a"
            color="red"
            floated="right"
            content="Delete"
          />
        </Segment>
      </Segment.Group>
    );
  }
}
