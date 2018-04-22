import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import history from '../../config/history'
import { DEFAULT_ROUTE } from '../../config/terminology'

import auth from '../../models/auth';
import Page from '../../components/Page/Page'
import LoginForm from '../../components/LoginForm/LoginForm'

class Landing extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit({ email, password }) {
    this.props.authActions.signin({ email, password })
  }

  render() {
    const contents = (
      <LoginForm
        request={this.props.request}
        onSubmit={this.onSubmit}
      />
    );
    return <Page {...this.props} center contents={contents} />;
  }
}

Landing.propTypes = {
  authActions: PropTypes.object,
  request: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  request: state.request
});

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(auth.actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Landing);
