import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Page from '../components/Page/Page'
import MxTree from '../components/MxTree/MxTree'
import mockTags from '../config/mockTags'

class Entities extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    const sidebar = <MxTree multiSelect nodes={mockTags} />;
    const contents = (<div></div>);
    return (
      <Page
        {...this.props}
        sidebar={sidebar}
        sidebarSize={250}
        contents={contents}
      />
    )
  }
}

Entities.propTypes = {
};

const mapStateToProps = (state, ownProps) => ({
  //authors: state.authors
});

const mapDispatchToProps = dispatch => ({
  //actions: bindActionCreators(..., dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Entities);
