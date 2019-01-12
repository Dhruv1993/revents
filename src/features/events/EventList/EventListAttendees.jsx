import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";

class EventListAttendees extends Component {
  render() {
    return (
      <List.Item>
        <Image size="mini" circular src={this.userImg()} />
      </List.Item>
    );
  }

  userImg = () => {
    const img = "https://randomuser.me/api/portraits/women/42.jpg";
    return img;
  };
}

export default EventListAttendees;
