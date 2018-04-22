import React from 'react';
import { Switch, withRouter } from 'dva/router';
import { connect } from 'dva';
import { bindActionCreators } from 'redux';

// Views
import Actions from './routes/Actions/Actions';
import Collections from './routes/Collections/Collections';
import Constants from './routes/Constants/Constants';
import Dashboards from './routes/Dashboards/Dashboards';
import Endpoints from './routes/Endpoints/Endpoints';
import Entities from './routes/Entities/Entities';
import Landing from './routes/Landing/Landing';
import Triggers from './routes/Triggers/Triggers';
import Variables from './routes/Variables/Variables';
import Workflows from './routes/Workflows/Workflows';

// Components
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';

// Constants
import {
  ROUTE_ACTIONS,
  ROUTE_DASHBOARDS,
  ROUTE_COLLECTIONS,
  ROUTE_CONSTANTS,
  ROUTE_ENDPOINTS,
  ROUTE_ENTITIES,
  ROUTE_TRIGGERS,
  ROUTE_VARIABLES,
  ROUTE_WORKFLOWS,
  DEFAULT_ROUTE,
} from './config/terminology'

class Routes extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = ({
    })
  }

  render() {
    return (
      <Switch>

        <PublicRoute
          exact
          path="/"
          user={(this.props.auth || {}).user}
          userRedirectPath={`/${DEFAULT_ROUTE}`}
          component={Landing}
          data={{
            showNavbar: false
          }}
        />

        <PrivateRoute
          exact
          path={`/${ROUTE_ACTIONS}`}
          user={(this.props.auth || {}).user}
          component={Actions}
          data={{
            showNavbar: true
          }}
        />

        <PrivateRoute
          exact
          path={`/${ROUTE_COLLECTIONS}`}
          user={(this.props.auth || {}).user}
          component={Collections}
          data={{
            showNavbar: true
          }}
        />

        <PrivateRoute
          exact
          path={`/${ROUTE_CONSTANTS}`}
          user={(this.props.auth || {}).user}
          component={Constants}
          data={{
            showNavbar: true
          }}
        />

        <PrivateRoute
          exact
          path={`/${ROUTE_DASHBOARDS}`}
          user={(this.props.auth || {}).user}
          component={Dashboards}
          data={{
            showNavbar: true
          }}
        />

        <PrivateRoute
          exact
          path={`/${ROUTE_ENDPOINTS}`}
          user={(this.props.auth || {}).user}
          component={Endpoints}
          data={{
            showNavbar: true
          }}
        />

        <PrivateRoute
          exact
          path={`/${ROUTE_ENTITIES}`}
          user={(this.props.auth || {}).user}
          component={Entities}
          data={{
            showNavbar: true
          }}
        />

        <PrivateRoute
          exact
          path={`/${ROUTE_TRIGGERS}`}
          user={(this.props.auth || {}).user}
          component={Triggers}
          data={{
            showNavbar: true
          }}
        />

        <PrivateRoute
          exact
          path={`/${ROUTE_VARIABLES}`}
          user={(this.props.auth || {}).user}
          component={Variables}
          data={{
            showNavbar: true
          }}
        />

        <PrivateRoute
          exact
          path={`/${ROUTE_WORKFLOWS}`}
          user={(this.props.auth || {}).user}
          component={Workflows}
          data={{
            showNavbar: true
          }}
        />

      </Switch>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes));
