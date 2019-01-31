import React from "react";
import DatePicker from "react-datepicker";
import { Form, Label } from "semantic-ui-react";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const DateInput = ({
  input:{value, onChange, ...restInp},
  width,
  placeholder,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <Form.Field error={touched && !!error} width={width}>
      <DatePicker
        {...rest}
        placeholderText={placeholder}
        selected={value ? moment(value) : null}
        onChange={onChange}
        {...restInp}
      />
      {touched && error && <Label basic color='red'>{error}</Label>}
    </Form.Field>
  );
};

export default DateInput;
