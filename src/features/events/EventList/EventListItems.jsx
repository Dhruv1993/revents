import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendees from "../EventList/EventListAttendees";

export default class EventListItems extends Component {
  render() {
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image
                size="tiny"
                circular
                src="https://randomuser.me/api/portraits/women/40.jpg"
              />
              <Item.Content>
                <Item.Header as="a">Event Title</Item.Header>
                <Item.Description>
                  Hosted by{" "}
                  <a href="http://www.google.com" target="_blank">
                    hosted by
                  </a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> date |
            <Icon name="marker" /> time
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            <EventListAttendees />
            <EventListAttendees />
            <EventListAttendees />
          </List>
        </Segment>
        <Segment clearing>
        <span>Description will go here</span>
          <Button as="a" color="teal" floated="right" content="View" />
        </Segment>
      </Segment.Group>
    );
  }
}
