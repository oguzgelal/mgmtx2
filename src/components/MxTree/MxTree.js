import React from 'react';
import PropTypes from 'prop-types';

import { Tree } from '@blueprintjs/core'

import './MxTree.scss'

class MxTree extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      nodes: props.nodes
    };

    this.handleNodeClick = this.handleNodeClick.bind(this)
    this.handleNodeCollapse = this.handleNodeCollapse.bind(this)
    this.handleNodeExpand = this.handleNodeExpand.bind(this)
    this.forEachNode = this.forEachNode.bind(this)
  }

  shouldComponentUpdate() {
    return true;
  }

  forEachNode(nodes, callback) {
    if (nodes == null) { return; }

    for (const node of nodes) {
      callback(node);
      this.forEachNode(node.childNodes, callback);
    }
  }

  handleNodeClick = (nodeData, _nodePath, e) => {
    // if multi select mode is not active, deselect all other nodes
    if (!this.props.multiSelect) { this.forEachNode(this.state.nodes, n => (n.isSelected = false)); }

    // if folder (not label) expand, otherwise select
    if (!nodeData.childNodes) {
      nodeData.isSelected = nodeData.isSelected == null ? true : !nodeData.isSelected;
    } else if (nodeData.className !== 'mx-tree--label-node') {
      nodeData.isExpanded = !nodeData.isExpanded;
    }

    this.setState(Object.assign({}, this.state));
  };

  handleNodeCollapse = (nodeData) => {
    nodeData.isExpanded = false;
    this.setState(Object.assign({}, this.state));
  };

  handleNodeExpand = (nodeData) => {
    nodeData.isExpanded = true;
    this.setState(Object.assign({}, this.state));
  };

  render() {
    return (
      <div className="mx-tree--container">
        <Tree
          className="mx-tree"
          contents={this.state.nodes}
          onNodeClick={this.handleNodeClick}
          onNodeCollapse={this.handleNodeCollapse}
          onNodeExpand={this.handleNodeExpand}
        />
      </div>
    );
  }
}

MxTree.propTypes = {
  nodes: PropTypes.array.isRequired,
  multiSelect: PropTypes.bool,
};

export default MxTree;
