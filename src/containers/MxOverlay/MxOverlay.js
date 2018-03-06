import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cx from 'classnames';

import { Overlay, Card, Elevation } from '@blueprintjs/core';

import overlayModel from '../../models/overlay';

import './MxOverlay.scss';

class MxOverlay extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    const { stack } = this.props.overlay;
    if (!stack || stack.length === 0) { return null; }

    const render = stack[stack.length - 1] || {};

    return (
      <Overlay
        isOpen={render && this.props.overlay.open}
        className={cx(
          'pt-overlay-scroll-container',
          'mx-overlay',
        )}
      >
        <Card
          elevation={Elevation.TWO}
          className={cx(
            'mx-overlay--container',
            { 'mx-overlay--container-large': render.size === 'large' },
            { 'mx-overlay--container-small': render.size === 'small' }
          )}
        >
          {render.component}
        </Card>
      </Overlay>
    );
  }
}

MxOverlay.propTypes = {
  overlay: PropTypes.object,
  overlayActions: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  overlay: state.overlay,
});

const mapDispatchToProps = dispatch => ({
  overlayActions: bindActionCreators(overlayModel._actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MxOverlay);
