import React from "react";
import { Form, Label } from "semantic-ui-react";
// these are basically resulable redux form fields. we cab react individual form fields and use them in any react project

//... input is like spread operator it populates the keystrokes
const TextInputs = ({
  input,
  width,
  type,
  placeholder,
  meta: { touched, error }
}) => {
  return (
    <Form.Field error={touched && !!error} width={width}>
      <input {...input} placeholder={placeholder} type={type} />
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default TextInputs;
