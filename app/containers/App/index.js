/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import {
  Router,
  Route,
  Switch,
  Redirect,
  BrowserRouter,
} from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Dashboard from 'containers/DashboardPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { createBrowserHistory } from 'history';
import { publicDecrypt } from 'crypto';
import { PrivateRoute, PublicRoute } from '../Components/Routes';

import GlobalStyle from '../../global-styles';
export const history = createBrowserHistory();
export default function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <PublicRoute exact path="/" component={HomePage} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
      <GlobalStyle />
    </div>
  );
}
