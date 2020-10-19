import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import routes from 'routes';
import { useAuthContext } from 'contexts/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { userId } = useAuthContext();

  return (
    <Route
      {...rest}
      render={(props) =>
        userId ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: routes.login, state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
