import React, { Component } from "react";
// import logo from './logo.svg';
// import './app/layout/App.css';
import EventDashboard from "../../features/events/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
// import { Button } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </div>
    );
  }
}

export default App;

// Div wrapper is only required in  app.jsx
