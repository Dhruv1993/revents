import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";

class EventListAttendees extends Component {
  render() {
    var { attendee } = this.props;
    return (
      <List.Item>
        <Image size="mini" circular src={attendee.photoURL} />
      </List.Item>
    );
  }
}

export default EventListAttendees;
