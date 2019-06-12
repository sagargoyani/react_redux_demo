import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../../../services/auth';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() === false ? (
        <Component {...props} />
      ) : props &&
        props.location &&
        props.location.pathname &&
        props.location.pathname === '/404' ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/dashboard',
              state: { from: props.location },
            }}
        />
        )
    }
  />
);

export default PublicRoute;
