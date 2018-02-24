import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { bindActionCreators } from 'redux';
import cx from 'classnames';

import history from '../../config/history'
import themeModel from '../../models/theme'

import {
  Button,
  Navbar,
  Alignment,
  InputGroup,
  Menu,
  MenuItem,
  Popover
} from '@blueprintjs/core';

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
  ROUTE_DATA,
  ROUTE_VALUES,
  ROUTE_AUTOMATE,
} from '../../config/routeNames'

class MxNavbar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };

    this.isActive = this.isActive.bind(this);
  }

  isActive(key) {
    return this.props.path && this.props.path.match(key)
  }

  render() {
    const DataMenu = (
      <Menu>
        <MenuItem
          text="Entities"
          icon="application"
          className={cx({ 'pt-intent-primary': this.isActive(ROUTE_ENTITIES) })}
          onClick={() => { history.push(`/${ROUTE_ENTITIES}`) }}
        />
        <MenuItem
          text="Collections"
          icon="applications"
          className={cx({ 'pt-intent-primary': this.isActive(ROUTE_COLLECTIONS) })}
          onClick={() => { history.push(`/${ROUTE_COLLECTIONS}`) }}
        />
      </Menu>
    );

    const ValuesMenu = (
      <Menu>
        <MenuItem
          text="Variables"
          icon={<div>x</div>}
          className={cx({ 'pt-intent-primary': this.isActive(ROUTE_VARIABLES) })}
          onClick={() => { history.push(`/${ROUTE_VARIABLES}`) }}
        />
        <MenuItem
          text="Constants"
          icon={<div>π</div>}
          className={cx({ 'pt-intent-primary': this.isActive(ROUTE_CONSTANTS) })}
          onClick={() => { history.push(`/${ROUTE_CONSTANTS}`) }}
        />
      </Menu>
    );

    const AutomateMenu = (
      <Menu>
        <MenuItem
          text="Actions"
          icon="dot"
          className={cx({ 'pt-intent-primary': this.isActive(ROUTE_ACTIONS) })}
          onClick={() => { history.push(`/${ROUTE_ACTIONS}`) }}
        />
        <MenuItem
          text="Workflows"
          icon="flows"
          className={cx({ 'pt-intent-primary': this.isActive(ROUTE_WORKFLOWS) })}
          onClick={() => { history.push(`/${ROUTE_WORKFLOWS}`) }}
        />
        <MenuItem
          text="Triggers"
          icon="social-media"
          className={cx({ 'pt-intent-primary': this.isActive(ROUTE_TRIGGERS) })}
          onClick={() => { history.push(`/${ROUTE_TRIGGERS}`) }}
        />
        <MenuItem
          text="Endpoints"
          icon="globe"
          className={cx({ 'pt-intent-primary': this.isActive(ROUTE_ENDPOINTS) })}
          onClick={() => { history.push(`/${ROUTE_ENDPOINTS}`) }}
        />
      </Menu>
    );

    // dark theme
    let navbarClassName = '';
    if (this.props.theme.active.id === 'dark') {
      navbarClassName = 'pt-dark';
    }

    return (
      <Navbar className={cx(navbarClassName)}>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>MgmtX</Navbar.Heading>
          <Navbar.Divider />

          <Button
            text="Dashboards"
            icon="control"
            onClick={() => { history.push(`/${ROUTE_DASHBOARDS}`) }}
            className={cx(
              'pt-minimal',
              { 'pt-intent-primary': this.isActive(ROUTE_DASHBOARDS) }
            )}
          />

          <Popover content={DataMenu}>
            <Button
              text="Data"
              icon="database"
              className={cx(
                'pt-minimal',
                { 'pt-intent-primary': this.isActive(ROUTE_DATA) }
              )}
            />
          </Popover>

          <Popover content={ValuesMenu}>
            <Button
              text="Values"
              icon="variable"
              className={cx(
                'pt-minimal',
                { 'pt-intent-primary': this.isActive(ROUTE_VALUES) }
              )}
            />
          </Popover>

          <Popover content={AutomateMenu}>
            <Button
              icon="console"
              text="Automate"
              className={cx(
                'pt-minimal',
                { 'pt-intent-primary': this.isActive(ROUTE_AUTOMATE) }
              )}
            />
          </Popover>

        </Navbar.Group>

        <Navbar.Group align={Alignment.RIGHT}>

          <InputGroup
            leftIcon="search"
            placeholder="Search"
          />

          <Navbar.Divider />

          <Button
            className="pt-minimal"
            icon={this.props.theme.active.icon}
            onClick={this.props.themeActions[themeModel._changeTheme]}
          />

          <Button
            className="pt-minimal"
            icon="user"
          />

          <Button
            className="pt-minimal"
            icon="settings"
          />

        </Navbar.Group>
      </Navbar>
    );
  }
}

MxNavbar.propTypes = {
  theme: PropTypes.object,
  themeActions: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  routing: state.routing,
  theme: state.theme
});

const mapDispatchToProps = dispatch => ({
  themeActions: bindActionCreators(themeModel._actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MxNavbar);
