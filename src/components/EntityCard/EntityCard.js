import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './EntityCard.scss';
import { Tag, Card, ContextMenu, Menu, MenuItem, MenuDivider } from "@blueprintjs/core";

import {
  TERM_ENTITY,
  TERM_ENTITY_ITEM,
  TERM_ENTITY_ITEMS
} from '../../config/terminology'

class EntityCard extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      contextMenuOpen: false
    };

    this.settingsMenu = this.settingsMenu.bind(this);
    this.showContextMenu = this.showContextMenu.bind(this);
  }

  settingsMenu() {
    return (
      <Menu>
        <MenuDivider title={TERM_ENTITY} />
        <MenuItem icon="edit" text={`Edit ${TERM_ENTITY.toLocaleLowerCase()}`} />
        <MenuItem icon="trash" text={`Delete ${TERM_ENTITY.toLocaleLowerCase()}`} />
        <MenuItem icon="duplicate" text={`Duplicate ${TERM_ENTITY.toLocaleLowerCase()}`} />
        <MenuItem icon="send-to" text={`Insert ${TERM_ENTITY.toLocaleLowerCase()} into...`} />
        <MenuDivider title={TERM_ENTITY_ITEMS} />
        <MenuItem icon="search-template" text={`View ${TERM_ENTITY_ITEMS.toLocaleLowerCase()}`} />
        <MenuItem icon="add-to-artifact" text={`New ${TERM_ENTITY_ITEM.toLocaleLowerCase()}`} />
      </Menu>
    )
  }

  showContextMenu(e) {
    e.preventDefault();
    this.setState({ contextMenuOpen: true })
    ContextMenu.show(this.settingsMenu(), {
      left: e.clientX,
      top: e.clientY
    }, () => {
      this.setState({
        contextMenuOpen: false
      })
    })
  }

  render() {
    const tags = [];
    this.props.tags.map(tag => {
      tags.push(
        <Tag
          key={tag.id}
          intent={tag.intent}
          className="pt-minimal"
        >
          {tag.title}
        </Tag>
      )
    })

    return (
      <div
        key={this.props.id}
        onContextMenu={this.showContextMenu}
        className={cx(
          'context-menu',
          { 'entity-card--border': this.state.contextMenuOpen }
        )}
      >
        <Card elevation={1} className="entity-card">
          <div className="entity-card--title">{this.props.title}</div>
          <div className="entity-card--tags">{tags}</div>
        </Card>
      </div>
    );
  }
}

EntityCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
};

export default EntityCard;
