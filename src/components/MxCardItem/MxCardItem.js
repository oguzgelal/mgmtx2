import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './MxCardItem.scss';
import { Tag, Card, ContextMenu } from "@blueprintjs/core";

class MxCardItem extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      contextMenuOpen: false
    };

    this.showContextMenu = this.showContextMenu.bind(this);
  }

  showContextMenu(e) {
    e.preventDefault();
    if (!this.props.contextMenu) { return; }
    this.setState({ contextMenuOpen: true })
    ContextMenu.show(this.props.contextMenu, {
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
          { 'mx-card-item--border': this.state.contextMenuOpen }
        )}
      >
        <Card elevation={1} className="mx-card-item">
          <div className="mx-card-item--title">{this.props.title}</div>
          <div className="mx-card-item--tags">{tags}</div>
        </Card>
      </div>
    );
  }
}

MxCardItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
  contextMenu: PropTypes.object,
};

export default MxCardItem;
