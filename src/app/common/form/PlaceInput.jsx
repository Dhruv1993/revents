import React, { Component } from "react";
import { Form, Label } from "semantic-ui-react";
import PlacesAutocomplete from "react-places-autocomplete";
import Script from "react-load-script";

const styles = {
  autocompleteContainer: {
    zIndex: 0
  }
};

class PlaceInput extends Component {
  state = {
    scriptToLoad: false
  };

  handleScriptLoad = () => {
    this.setState({
      scriptToLoad: true
    });
  };

  render() {
    const {
      input,
      width,
      onSelect,
      placeholder,
      options,
      meta: { touched, error }
    } = this.props;
    console.log(this.props);
    return (
      <div>
        <Form.Field error={touched && !!error} width={width}>
          <Script
            url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBKCVwzUom1bsOEqzbeCfws4pfCQTU3Kk4&libraries=places"
            onLoad={this.handleScriptLoad}
          />

          {this.state.scriptToLoad && (
            <PlacesAutocomplete
              inputProps={{ ...input, placeholder }}
              options={options}
              onSelect={onSelect}
              styles={styles}
            />
          )}
          {touched && error && (
            <Label basic color="red">
              {error}
            </Label>
          )}
        </Form.Field>
      </div>
    );
  }
}

export default PlaceInput;
