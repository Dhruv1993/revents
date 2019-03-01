import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
// import 'bootstrap/dist/css/bootstrap.css'
import App from "./app/layout/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { configureStore } from "./app/store/configureStore";
import ScrollToTop from "./app/common/util/scrollToTop";
import {loadEvents} from './features/events/eventActions'
// there are a couple of ways by which the api is called data is rerendered like componentdidMount in into the events list to call the dispatch and others
// but we can also 
// directly mount it via store via the dispatch and is available when the store first loads

// we can now go to the component and connect to the store since we provided Provider
const store = configureStore();// after configuring and running the app we first run loadEvents, so the events are populated in the state beforehand
store.dispatch(loadEvents());// dispatch loadEvents

const routeEL = document.getElementById("root");
let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </Provider>,
    routeEL
  );
};
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
