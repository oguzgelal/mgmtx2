import React from 'react';
import PropTypes from 'prop-types';

import { Tree } from '@blueprintjs/core'

import Scroller from '../Scroller/Scroller'
import mockDashboards from '../../config/mockDashboards'
import './MxTree.scss'

class MxTree extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      nodes: mockDashboards
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
    const originallySelected = nodeData.isSelected;
    if (!e.shiftKey) {
      this.forEachNode(this.state.nodes, n => (n.isSelected = false));
    }
    nodeData.isSelected = originallySelected == null ? true : !originallySelected;
    this.setState(this.state);
  };

  handleNodeCollapse = (nodeData) => {
    nodeData.isExpanded = false;
    this.setState(this.state);
  };

  handleNodeExpand = (nodeData) => {
    nodeData.isExpanded = true;
    this.setState(this.state);
  };

  render() {
    return (
      <Scroller hidden class="mx-tree--container">
        <Tree
          className="mx-tree"
          contents={this.state.nodes}
          onNodeClick={this.handleNodeClick}
          onNodeCollapse={this.handleNodeCollapse}
          onNodeExpand={this.handleNodeExpand}
        />
      </Scroller>
    );
  }
}

MxTree.propTypes = {
};

export default MxTree;
