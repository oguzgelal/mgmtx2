import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { bindActionCreators } from 'redux';
import cx from 'classnames';

import history from '../../config/history'
import themeModel from '../../models/theme'
import './MxNavbar.scss';

import {
  Button,
  Navbar,
  Alignment,
  InputGroup,
  Menu,
  MenuItem,
  Popover,
  Position,
  Classes,
} from '@blueprintjs/core';

import {
  TERM_ENTITIES,
  TERM_COLLECTIONS,
  TERM_VARIABLES,
  TERM_CONSTANTS,
  TERM_ACTIONS,
  TERM_WORKFLOWS,
  TERM_TRIGGERS,
  TERM_ENDPOINTS,
  TERM_DASHBOARDS,
  TERM_DATA,
  TERM_VALUES,
  TERM_AUTOMATE,
  ICON_ENTITIES,
  ICON_COLLECTIONS,
  ICON_VARIABLES,
  ICON_CONSTANTS,
  ICON_ACTIONS,
  ICON_WORKFLOWS,
  ICON_TRIGGERS,
  ICON_ENDPOINTS,
  ICON_DATA,
  ICON_VALUES,
  ICON_AUTOMATE,
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
} from '../../config/terminology'

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
          text={TERM_ENTITIES}
          icon={ICON_ENTITIES}
          className={cx({ 'pt-intent-primary': this.isActive(ROUTE_ENTITIES) })}
          onClick={() => { history.push(`/${ROUTE_ENTITIES}`) }}
        />
        <MenuItem
          text={TERM_COLLECTIONS}
          icon={ICON_COLLECTIONS}
          className={cx({ 'pt-intent-primary': this.isActive(ROUTE_COLLECTIONS) })}
          onClick={() => { history.push(`/${ROUTE_COLLECTIONS}`) }}
        />
      </Menu>
    );

    const ValuesMenu = (
      <Menu>
        <MenuItem
          text={TERM_VARIABLES}
          icon={ICON_VARIABLES}
          className={cx({ 'pt-intent-primary': this.isActive(ROUTE_VARIABLES) })}
          onClick={() => { history.push(`/${ROUTE_VARIABLES}`) }}
        />
        <MenuItem
          text={TERM_CONSTANTS}
          icon={ICON_CONSTANTS}
          className={cx({ 'pt-intent-primary': this.isActive(ROUTE_CONSTANTS) })}
          onClick={() => { history.push(`/${ROUTE_CONSTANTS}`) }}
        />
      </Menu>
    );

    const AutomateMenu = (
      <Menu>
        <MenuItem
          text={TERM_ACTIONS}
          icon={ICON_ACTIONS}
          className={cx({ 'pt-intent-primary': this.isActive(ROUTE_ACTIONS) })}
          onClick={() => { history.push(`/${ROUTE_ACTIONS}`) }}
        />
        <MenuItem
          text={TERM_WORKFLOWS}
          icon={ICON_WORKFLOWS}
          className={cx({ 'pt-intent-primary': this.isActive(ROUTE_WORKFLOWS) })}
          onClick={() => { history.push(`/${ROUTE_WORKFLOWS}`) }}
        />
        <MenuItem
          text={TERM_TRIGGERS}
          icon={ICON_TRIGGERS}
          className={cx({ 'pt-intent-primary': this.isActive(ROUTE_TRIGGERS) })}
          onClick={() => { history.push(`/${ROUTE_TRIGGERS}`) }}
        />
        <MenuItem
          text={TERM_ENDPOINTS}
          icon={ICON_ENDPOINTS}
          className={cx({ 'pt-intent-primary': this.isActive(ROUTE_ENDPOINTS) })}
          onClick={() => { history.push(`/${ROUTE_ENDPOINTS}`) }}
        />
      </Menu>
    );

    const SearchMenu = (
      <Popover
        position={Position.BOTTOM_RIGHT}
        content={
          <Menu>
            <MenuItem text="All" />
            <MenuItem text={TERM_ENTITIES} />
            <MenuItem text={TERM_COLLECTIONS} />
            <MenuItem text={TERM_VARIABLES} />
            <MenuItem text={TERM_CONSTANTS} />
            <MenuItem text={TERM_ACTIONS} />
            <MenuItem text={TERM_WORKFLOWS} />
            <MenuItem text={TERM_TRIGGERS} />
            <MenuItem text={TERM_ENDPOINTS} />
          </Menu>
        }
      >
        <Button
          className={Classes.MINIMAL}
          rightIcon="caret-down"
          text="All"
        />
      </Popover>
    );

    return (
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>MgmtX</Navbar.Heading>
          <Navbar.Divider />

          <Button
            text={TERM_DASHBOARDS}
            icon="control"
            onClick={() => { history.push(`/${ROUTE_DASHBOARDS}`) }}
            className={cx(
              'pt-minimal',
              { 'pt-intent-primary': this.isActive(ROUTE_DASHBOARDS) }
            )}
          />

          <Popover content={DataMenu}>
            <Button
              text={TERM_DATA}
              icon={ICON_DATA}
              className={cx(
                'pt-minimal',
                { 'pt-intent-primary': this.isActive(ROUTE_DATA) }
              )}
            />
          </Popover>

          <Popover content={ValuesMenu}>
            <Button
              text={TERM_VALUES}
              icon={ICON_VALUES}
              className={cx(
                'pt-minimal',
                { 'pt-intent-primary': this.isActive(ROUTE_VALUES) }
              )}
            />
          </Popover>

          <Popover content={AutomateMenu}>
            <Button
              text={TERM_AUTOMATE}
              icon={ICON_AUTOMATE}
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
            rightElement={SearchMenu}
            className="mx-navbar--search-group"
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
  themeActions: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  theme: state.theme
});

const mapDispatchToProps = dispatch => ({
  themeActions: bindActionCreators(themeModel.actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MxNavbar);
