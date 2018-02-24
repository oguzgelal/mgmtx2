import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from '@blueprintjs/core';

import history from '../config/history'

class Landing extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    console.log('landing', this.props);
    return (
      <div className="">
        Hey -
        {this.props.theme.active.id}
        <Button text="Go" onClick={() => { history.push('/dashboards') }} />
      </div>
    );
  }
}

Landing.propTypes = {
};

const mapStateToProps = (state, ownProps) => ({
  theme: state.theme
});

const mapDispatchToProps = dispatch => ({
  //actions: bindActionCreators(..., dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Landing);
