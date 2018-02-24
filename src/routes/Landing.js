import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import history from '../config/history'
import { DEFAULT_ROUTE } from '../config/routes'

import Page from '../components/Page/Page'
import LoginForm from '../components/LoginForm/LoginForm'

class Landing extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  onSubmit(e) {
    console.log(e);
    e.preventDefault();
    history.push(`/${DEFAULT_ROUTE}`)
  }

  render() {
    return (
      <Page center {...this.props}>
        <LoginForm onSubmit={this.onSubmit} />
      </Page>
    );
  }
}

Landing.propTypes = {
};

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = dispatch => ({
  //actions: bindActionCreators(..., dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Landing);
