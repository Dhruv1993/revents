import React from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInputs from '../../../app/common/form/TextInputs';
import { connect } from 'react-redux'
import { login } from '../authActions';

const LoginForm = ({login, handleSubmit}) => { // handlesubmit is from redux forms
  return (
    <Form error size="large" onSubmit={handleSubmit(login)}>
      <Segment>
        <Field
          name="email"
          component={TextInputs}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInputs}
          type="password"
          placeholder="password"
        />
        <Button fluid size="large" color="teal" >
          Login
        </Button>
      </Segment>
    </Form>
  );
};
const actions = {
  login
}
export default connect(null, actions)(reduxForm({form: 'loginForm'})(LoginForm));