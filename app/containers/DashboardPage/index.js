/*
 * Dashboard
 *
 * This is the first thing users see of our App, at the '/dashboard' route
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    const { loginResponse } = this.props;

    return (
      <div>
        <div>
          email:{' '}
          {loginResponse && loginResponse.response.code == 1
            ? loginResponse.response.data.email
        </div>
        <div>
          Token:{' '}
          {loginResponse && loginResponse.response.code == 1
            ? loginResponse.response.data.token
            : ''}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
        loginResponse: state.loginResponse
    })

export default connect(mapStateToProps)(Dashboard);
