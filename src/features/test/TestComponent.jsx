import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { incrementAsync, decrementAsync } from "./testActions";
import Script from "react-load-script";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { openModal } from "../Modals/modalActions";


class TestComponent extends Component {
  state = {
    address: "",
    scriptLoaded: false
  };
  handleScriptLoad = () => {
    this.setState({
      scriptLoaded: true
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };

  onChange = address => this.setState({ address });
  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    };

    // console.log(this.props);

    const { data, incrementAsync, decrementAsync, openModal, load } = this.props;
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBKCVwzUom1bsOEqzbeCfws4pfCQTU3Kk4&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <h1>Test component area: </h1>
        <h3>the answer is : {data}</h3>
        <Button loading={load} color="blue" content="increment" onClick={incrementAsync} />
        <Button loading={load} color="green" content="decrement" onClick={decrementAsync} />
        <Button color="green" content="Modal" onClick={() => openModal('TestModals', {data:43})} />

        <br /> <br /> <br /> <br />
        <form onSubmit={this.handleFormSubmit}>
          {this.state.scriptLoaded && (
            <PlacesAutocomplete inputProps={inputProps} />
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const actions = {
  // these actions are now available as props
  incrementAsync,
  decrementAsync,
  openModal
};
const mapStateToProps = state => {
  // the passed state is the state of the store
  // here we can get the data put by accessing it from the property defined in rootReducer and the state variables defined in the testReducer
  return {
    data: state.test.data,  // test is variable in rootreducer and data after test is the actual state variable in the reducer for this component
    load: state.test.loading
  };
  // data is the custom property type we defined here. It is just a name, could be anything
  // state is from the testReducer of this component
  // data is the the variable defined in the state.
  // when we pass this into the connect component , we can access data proprty that we defined into the props of this component
};
export default connect(
  mapStateToProps,
  actions
)(TestComponent);
// the flow is set up the store
// create a reducer for the required components can do as many functions for a reducer file
// export all the created reducers into the rootreducer file, where we can access the reducer in a property defined there
