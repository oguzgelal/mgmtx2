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
      email: '',
      password: '',
    };

    this.handleLockClick = this.handleLockClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLockClick = () =>
    this.setState({ showPassword: !this.state.showPassword });

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      email: this.state.email,
      password: this.state.password,
    })
  }

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
      <form onSubmit={this.handleSubmit}>
        <ControlGroup className="mx-login-form" vertical>
          <InputGroup
            className={Classes.LARGE}
            rightIcon="person"
            placeholder="Username"
            onChange={this.handleChange}
            name="email"
            type="text"
          />
          <InputGroup
            className={Classes.LARGE}
            placeholder="Password..."
            rightElement={lockButton}
            onChange={this.handleChange}
            name="password"
            type={this.state.showPassword ? "text" : "password"}
          />
          <Button
            intent={Intent.PRIMARY}
            className={Classes.LARGE}
            loading={!!this.props.request.signin}
            text="Login"
            type="Submit"
          />
        </ControlGroup>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  request: PropTypes.object,
};

export default LoginForm;
