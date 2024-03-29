import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cx from 'classnames';

import { isLoggedIn } from '../../utils/mics';
import MxNavbar from '../../containers/MxNavbar/MxNavbar';
import MxOverlay from '../../containers/MxOverlay/MxOverlay';

class Base extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };

    this.isDark = this.isDark.bind(this);
  }

  isDark() {
    return this.props.theme.active.id === 'dark';
  }

  render() {
    document.body.classList.toggle('pt-dark', this.isDark())
    const data = this.props.data || {};
    const navbar = ((data.showNavbar && isLoggedIn((this.props.auth || {}).user)) ?
      <MxNavbar {...this.props} /> :
      ''
    );

    return (
      <div>
        {navbar}
        {this.props.children}
        <MxOverlay />
      </div>
    );
  }
}

Base.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.object.isRequired,
  data: PropTypes.object,
  user: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  auth: state.auth,
  theme: state.theme
});

const mapDispatchToProps = dispatch => ({
  //actions: bindActionCreators(..., dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Base);
