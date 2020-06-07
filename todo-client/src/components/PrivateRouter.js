import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const fakeAuth = {
  isAuthenticated: true,
};
export const PrivateRouter = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
