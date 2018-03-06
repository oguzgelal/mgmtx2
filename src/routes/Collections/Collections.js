import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  InputGroup,
  Spinner,
  Classes,
  Intent,
  Button,
  Menu,
  MenuItem,
  MenuDivider,
} from '@blueprintjs/core';

import {
  TERM_COLLECTION,
  TERM_COLLECTIONS,
  TERM_COLLECTION_ITEMS,
  TERM_COLLECTION_ITEM
} from '../../config/terminology'

import Page from '../../components/Page/Page'
import MxTree from '../../components/MxTree/MxTree'
import MxCardItem from '../../components/MxCardItem/MxCardItem'
import MxGrid from '../../components/MxGrid/MxGrid'

import mockTags from '../../config/mockTags'
import { getEntityCards } from '../../utils/mock';

import './Collections.scss';

class Collections extends React.Component {
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
        <MxCardItem
          id={entity.id}
          title={entity.title}
          tags={entity.tags}
          contextMenu={
            <Menu>
              <MenuDivider title={TERM_COLLECTION} />
              <MenuItem icon="edit" text={`Edit ${TERM_COLLECTION.toLocaleLowerCase()}`} />
              <MenuItem icon="trash" text={`Delete ${TERM_COLLECTION.toLocaleLowerCase()}`} />
              <MenuItem icon="duplicate" text={`Duplicate ${TERM_COLLECTION.toLocaleLowerCase()}`} />
              <MenuItem icon="send-to" text={`Insert ${TERM_COLLECTION.toLocaleLowerCase()} into...`} />
              <MenuDivider title={TERM_COLLECTION_ITEMS} />
              <MenuItem icon="search" text={`View ${TERM_COLLECTION_ITEMS.toLocaleLowerCase()}`} />
              <MenuItem icon="new-object" text={`New inclusion ${TERM_COLLECTION_ITEM.toLocaleLowerCase()}`} />
              <MenuItem icon="graph-remove" text={`New exclusion ${TERM_COLLECTION_ITEM.toLocaleLowerCase()}`} />
            </Menu>
          }
        />
      )
    })

    const spinner = (
      this.state.filtering &&
      <Spinner className={Classes.SMALL} />
    );

    const sidebar = (
      <MxTree multiSelect nodes={mockTags} />
    );

    const contents = (
      <div className="collections-page">
        <div className="collections-page--search">
          <div className="collections-page--search-bar">
            <InputGroup
              leftIcon="filter"
              placeholder={`Filter ${TERM_COLLECTIONS.toLocaleLowerCase()}...`}
              onChange={this.handleFilterChange}
              rightElement={spinner}
            />
          </div>
          <div className="collections-page--search-buttons">
            <Button
              text={`New ${TERM_COLLECTION}`}
              icon="small-plus"
              intent={Intent.PRIMARY}
            />
          </div>
        </div>
        <div className="collections-page--contents">
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

Collections.propTypes = {
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
)(Collections);
