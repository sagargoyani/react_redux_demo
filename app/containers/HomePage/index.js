/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogin } from './action';
import LoginForm from '../Components/LoginFormComponent';

class HomePage extends Component {
  state = {
    loginPopup: false,
  };

  render() {
    const loginClicked = () => {
      this.setState({
        loginPopup: true,
      });
    };
    const modalClose = () => this.setState({ loginPopup: false });
    return (
      <>
        <Button variant="primary" onClick={loginClicked}>
          login
        </Button>
        <LoginForm
          show={this.state.loginPopup}
          onHide={modalClose}
          loginHandler={this.props.loginHandler}
          loginResponse={this.props.loginResponse}
        />
      </>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log('state', state);
  return {
    loginResponse: state.loginResponse,
  };
};

const mapActionsToProps = (dispatch, props) =>
  bindActionCreators(
    {
      loginHandler: userLogin,
    },
    dispatch,
  );
export default connect(
  mapStateToProps,
  mapActionsToProps,
)(HomePage);
