import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, ControlGroup, InputGroup } from '@blueprintjs/core'

import Page from '../../components/Page/Page'
import MxTree from '../../components/MxTree/MxTree'
import mockDashboards from '../../config/mockDashboards'


class Dashboards extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {

    const sidebar = (
      <div>
        <MxTree nodes={mockDashboards} />
      </div>
    );

    const contents = (
      <div />
    );

    return (
      <Page
        {...this.props}
        sidebar={sidebar}
        sidebarSize={300}
        contents={contents}
      />
    );
  }
}

Dashboards.propTypes = {
};

const mapStateToProps = (state, ownProps) => ({
  routing: state.routing,
  theme: state.theme
});

const mapDispatchToProps = dispatch => ({
  //actions: bindActionCreators(..., dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboards);
