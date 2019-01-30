import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { increment_Counter, decrement_Counter } from "./testActions";

class TestComponent extends Component {
  render() {
    console.log(this.props);
    const { data, increment_Counter, decrement_Counter } = this.props;
    return (
      <div>
        <h1>Test component area: </h1>
        <h3>the answer is : {data}</h3>
        <Button color="blue" content="increment" onClick={increment_Counter} />
        <Button color="green" content="decrement" onClick={decrement_Counter} />
      </div>
    );
  }
}
const actions = {
  // these actions are now available as props
  increment_Counter,
  decrement_Counter
};
const mapStateToProps = state => {
  // this state is the state of the store
  // here we can get the data put by accessing it from the property defined in rootReducer and the state variables defined in the testReducer
  return {
    data: state.test.data
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
