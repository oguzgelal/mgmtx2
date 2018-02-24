import React from 'react';
import PropTypes from 'prop-types';

import {
  Intent,
  ControlGroup,
  InputGroup,
  Button,
  Tooltip,
  Classes
} from '@blueprintjs/core';

import Page from '../Page/Page'

import './LoginForm.scss';

class LoginForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showPassword: false,
    };

    this.handleLockClick = this.handleLockClick.bind(this);
  }

  handleLockClick = () => this.setState({ showPassword: !this.state.showPassword });

  render() {

    const lockButton = (
      <Tooltip content={`${this.state.showPassword ? "Hide" : "Show"} Password`}>
        <Button
          className={Classes.MINIMAL}
          intent={Intent.WARNING}
          icon={this.state.showPassword ? "unlock" : "lock"}
          onClick={this.handleLockClick}
        />
      </Tooltip>
    );

    return (
      <form onSubmit={this.props.onSubmit}>
        <ControlGroup className="mx-login-form" vertical>
          <InputGroup
            className={Classes.LARGE}
            rightIcon="person"
            placeholder="Username"
            type="text"
          />
          <InputGroup
            className={Classes.LARGE}
            placeholder="Password..."
            rightElement={lockButton}
            type={this.state.showPassword ? "text" : "password"}
          />
          <Button
            intent={Intent.PRIMARY}
            className={Classes.LARGE}
            text="Login"
            type="Submit"
          />
        </ControlGroup>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default LoginForm;
