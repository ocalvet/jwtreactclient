import React from 'react';

const PrivateRoute = ({ isAuthenticated, history }) => {
  if (isAuthenticated) {
    return <Component />;
  }
};

export default PrivateRoute;
