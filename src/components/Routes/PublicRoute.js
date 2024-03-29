import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'dva/router';

// Components
import Base from '../../containers/Base/Base';
import { isLoggedIn } from '../../utils/mics';

const PublicRoute = ({ component: Component, user, userRedirectPath, ...rest }) => (
  <Base {...rest} user={user}>
    <Route
      {...rest}
      render={props => ((!user || !userRedirectPath || !isLoggedIn(user)) ?
        <Component {...rest} {...props} /> :
        <Redirect
          to={{
            pathname: userRedirectPath,
            state: { from: props.location },
          }}
        />
      )}
    />
  </Base>
);

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
  user: PropTypes.object,
  userRedirectPath: PropTypes.string,
};

export default PublicRoute;
