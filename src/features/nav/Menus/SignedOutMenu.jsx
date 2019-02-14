import React from "react";
// stateless functional component
import { Menu, Button } from "semantic-ui-react";

const SignedOutMenu = ({ signIn, register }) => {
  return (
    <div>
      <Menu.Item position="right">
        <Button onClick={signIn} basic inverted content="Login" style={{ marginLeft: "40%" }}/>
        <Button
          basic
          inverted
          content="Register"
          style={{ float: "right" }}
          onClick={register}
        />
      </Menu.Item>
    </div>
  );
};
export default SignedOutMenu;
