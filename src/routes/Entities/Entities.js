import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { InputGroup, Spinner, Classes, Intent, Button } from '@blueprintjs/core';

import Page from '../../components/Page/Page'
import MxTree from '../../components/MxTree/MxTree'
import mockTags from '../../config/mockTags'

import EntityCard from '../../components/EntityCard/EntityCard'
import MxGrid from '../../components/MxGrid/MxGrid'

import { TERM_ENTITY, TERM_ENTITIES } from '../../config/terminology'
import { getEntityCards } from '../../utils/mock';

import './Entities.scss';

class Entities extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      filtering: false
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange() {
    this.setState({ filtering: true })
    setTimeout(() => { this.setState({ filtering: false }) }, 1000)
  }

  render() {
    const entities = [];
    const entityData = getEntityCards(30);
    entityData.map(entity => {
      entities.push(
        <EntityCard
          id={entity.id}
          title={entity.title}
          tags={entity.tags}
        />
      )
    })

    const spinner = (
      this.state.filtering &&
      <Spinner className={Classes.SMALL} />
    );
    const sidebar = <MxTree multiSelect nodes={mockTags} />;
    const contents = (
      <div className="entities-page">
        <div className="entities-page--search">
          <div className="entities-page--search-bar">
            <InputGroup
              leftIcon="filter"
              placeholder={`Filter ${TERM_ENTITIES.toLocaleLowerCase()}...`}
              onChange={this.handleFilterChange}
              rightElement={spinner}
            />
          </div>
          <div className="entities-page--search-buttons">
            <Button
              text={`New ${TERM_ENTITY}`}
              icon="small-plus"
              intent={Intent.PRIMARY}
            />
          </div>
        </div>
        <div className="entities-page--contents">
          <MxGrid contents={entities} columns={3} />
        </div>
      </div>

    );

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
