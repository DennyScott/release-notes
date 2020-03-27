import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ component: PrivateComponent, userRoles, ...props }) {
  const { authTokens } = useSelector(state => state.auth);

  return (
    <Route
      {...props}
      render={rProps =>
        authTokens ? (
          <PrivateComponent {...rProps} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { referer: rProps.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
