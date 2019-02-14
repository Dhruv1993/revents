import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
import { connect } from "react-redux"; // so that we can access the openModalActions
import { openModal } from "../../Modals/modalActions";
import { logout } from "../../auth/authActions";


/**Difference between the Link and NavLink is that NavLink is sort of link bootstrap active class where the link
 * get highlighted when the content associated with it get activated. Link is simply the link. They work same just the
 * difference is the hightlight.
 */
const actions = {
  openModal,
  logout
};
const mapStateToProps = (state) => {
  
  return {
    auth: state.auth 
  }
}
class NavBar extends Component {
  // state = {
  //   authenticated: false
  // };

  handleSignIn = () => {
    this.props.openModal("LoginModal");
  };
  handleResister = () => {
    this.props.openModal("RegisterModal");
  };
  handleSignOut = () => {
    this.props.logout();
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    const authenticated = auth.authenticated // authenticated property was added in authReducer while returning a neew state
    return (
      <div>
        <Menu stackable fixed="top">
          <Container>
            <Menu.Item as={Link} to="/">
              <img src="/assets/logo.png" alt="logo" />
              Re-vents
            </Menu.Item>
            <Menu.Item as={NavLink} to="/events" name="Events" />
            <Menu.Item as={NavLink} to="/test" name="Test" />

            {authenticated && (
              <Menu.Item as={NavLink} to="/people" name="People" />
            )}

            {authenticated && (
              <Menu.Item>
                <Button
                  as={Link}
                  to="/createEvent"
                  floated="right"
                  positive
                  content="Create Event"
                />
              </Menu.Item>
            )}
            {authenticated ? (
              <SignedInMenu signOut={this.handleSignOut} currentUser={auth.currentUser} />
            ) : (
              <SignedOutMenu
                signIn={this.handleSignIn}
                register={this.handleResister}
              />
            )}
          </Container>
        </Menu>
      </div>
    );
  }
}

export default withRouter(
  connect( // now actions are available as props
    mapStateToProps,
    actions
  )(NavBar)
);
