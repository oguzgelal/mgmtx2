import React from 'react';
import PropTypes from 'prop-types';

import './EntityCard.scss';
import { Tag, Card } from "@blueprintjs/core";

const EntityCard = props => {
  return (
    <Card className="entity-card">
      <div className="entity-card--title">Calories</div>
      <div className="entity-card--tags">
        <Tag className="pt-minimal pt-primary">Lorem</Tag>
        <Tag className="pt-minimal pt-primary">Ipsum</Tag>
        <Tag className="pt-minimal pt-primary">Dolor</Tag>
        <Tag className="pt-minimal pt-primary">Sit</Tag>
        <Tag className="pt-minimal pt-primary">Amet</Tag>
        <Tag className="pt-minimal pt-primary">Lorem</Tag>
        <Tag className="pt-minimal pt-primary">Ipsum</Tag>
        <Tag className="pt-minimal pt-primary">Dolor</Tag>
        <Tag className="pt-minimal pt-primary">Sit</Tag>
        <Tag className="pt-minimal pt-primary">Amet</Tag>
      </div>
    </Card>
  );
};

EntityCard.propTypes = {
};

export default EntityCard;
