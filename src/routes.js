import React from 'react';
import { Router, Route, Switch, withRouter, Redirect } from 'dva/router';
import { connect } from 'dva';
import { bindActionCreators } from 'redux';

// Views
import Actions from './routes/Actions';
import Collections from './routes/Collections';
import Constants from './routes/Constants';
import Dashboards from './routes/Dashboards';
import Endpoints from './routes/Endpoints';
import Entities from './routes/Entities';
import Landing from './routes/Landing';
import Triggers from './routes/Triggers';
import Variables from './routes/Variables';
import Workflows from './routes/Workflows';

// Components
import PrivateRoute from './components/Routes/PrivateRoute/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute/PublicRoute';

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
} from './config/routeNames'

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
          userRedirectPath={`/${ROUTE_DASHBOARDS}`}
          component={Landing}
          data={{
            showNavbar: false
          }}
        />

        <PrivateRoute
          exact
          path={`/${ROUTE_ACTIONS}`}
          user={this.props.user}
          component={Actions}
          data={{
            showNavbar: true
          }}
        />

        <PrivateRoute
          exact
          path={`/${ROUTE_COLLECTIONS}`}
          user={this.props.user}
          component={Collections}
          data={{
            showNavbar: true
          }}
        />

        <PrivateRoute
          exact
          path={`/${ROUTE_CONSTANTS}`}
          user={this.props.user}
          component={Constants}
          data={{
            showNavbar: true
          }}
        />

        <PrivateRoute
          exact
          path={`/${ROUTE_DASHBOARDS}`}
          user={this.props.user}
          component={Dashboards}
          data={{
            showNavbar: true
          }}
        />

        <PrivateRoute
          exact
          path={`/${ROUTE_ENDPOINTS}`}
          user={this.props.user}
          component={Endpoints}
          data={{
            showNavbar: true
          }}
        />

        <PrivateRoute
          exact
          path={`/${ROUTE_ENTITIES}`}
          user={this.props.user}
          component={Entities}
          data={{
            showNavbar: true
          }}
        />

        <PrivateRoute
          exact
          path={`/${ROUTE_TRIGGERS}`}
          user={this.props.user}
          component={Triggers}
          data={{
            showNavbar: true
          }}
        />

        <PrivateRoute
          exact
          path={`/${ROUTE_VARIABLES}`}
          user={this.props.user}
          component={Variables}
          data={{
            showNavbar: true
          }}
        />

        <PrivateRoute
          exact
          path={`/${ROUTE_WORKFLOWS}`}
          user={this.props.user}
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
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes));
