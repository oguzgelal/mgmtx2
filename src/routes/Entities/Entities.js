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
  TERM_ENTITY,
  TERM_ENTITIES,
  TERM_ENTITY_ITEM,
  TERM_ENTITY_ITEMS
} from '../../config/terminology'

import mockTags from '../../config/mockTags'
import { getEntityCards } from '../../utils/mock';

import overlayModel from '../../models/overlay';

import Page from '../../components/Page/Page'
import MxTree from '../../components/MxTree/MxTree'
import MxCardItem from '../../components/MxCardItem/MxCardItem'
import MxGrid from '../../components/MxGrid/MxGrid'

import './Entities.scss';

class Entities extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      filtering: false
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleNewEntity = this.handleNewEntity.bind(this);
  }

  handleFilterChange() {
    this.setState({ filtering: true })
    setTimeout(() => { this.setState({ filtering: false }) }, 1000)
  }

  handleNewEntity() {
    this.props.overlayActions.showOverlay()
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
              <MenuDivider title={TERM_ENTITY} />
              <MenuItem icon="edit" text={`Edit ${TERM_ENTITY.toLocaleLowerCase()}`} />
              <MenuItem icon="trash" text={`Delete ${TERM_ENTITY.toLocaleLowerCase()}`} />
              <MenuItem icon="duplicate" text={`Duplicate ${TERM_ENTITY.toLocaleLowerCase()}`} />
              <MenuItem icon="send-to" text={`Insert ${TERM_ENTITY.toLocaleLowerCase()} into...`} />
              <MenuDivider title={TERM_ENTITY_ITEMS} />
              <MenuItem icon="search-template" text={`View ${TERM_ENTITY_ITEMS.toLocaleLowerCase()}`} />
              <MenuItem icon="add-to-artifact" text={`New ${TERM_ENTITY_ITEM.toLocaleLowerCase()}`} />
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
              onClick={this.handleNewEntity}
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
  overlayActions: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  //authors: state.authors
});

const mapDispatchToProps = dispatch => ({
  overlayActions: bindActionCreators(overlayModel.actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Entities);
