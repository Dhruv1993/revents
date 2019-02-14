import React, { Component } from "react";
// import logo from './logo.svg';
// import './app/layout/App.css';
import { Route, Switch } from "react-router-dom"; // used for making the routes
import { Container } from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar/NavBar";
import EventDashboard from "../../features/events/EventDashboard/EventDashboard";
import EventDetailPage from "../../features/events/EventDetails/EventDetailPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import EventForm from "../../features/events/EventForm/EventForm";
import HomePage from "../../features/home/HomePage";
import TestComponent from '../../features/test/TestComponent';
import ModalManager from '../../features/Modals/modalManager';

class App extends Component {
  render() {
    return (
      <div>
        <ModalManager /> {/** Alwys make sure that the name starts with capitals while we make react functional components*/}
        {/**We made HomePage exclusive not in connections with other pages */}
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>

        <Route
          path="/(.+)" // (.+) this will look for any path after /
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/events" component={EventDashboard} />
                  <Route path="/test" component={TestComponent} />
                  <Route path="/event/:id" component={EventDetailPage} />
                  <Route path="/manage/:id" component={EventForm} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailedPage} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route path="/createEvent" component={EventForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;

// Div wrapper is only required in  app.jsx
