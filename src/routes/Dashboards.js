import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Dashboards extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    return (
      <div className="">

      </div>
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
