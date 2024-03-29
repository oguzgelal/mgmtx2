import React from 'react';
import PropTypes from 'prop-types';

import './MxGrid.scss'

class MxGrids extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    const items = [];
    const width = `${Math.floor(100 / this.props.columns - 1)}%`;
    this.props.contents.map((item, i) => {
      items.push(
        <div
          key={`item-${i}`}
          className="mx-grid-item"
          style={{ width }}>
          {item}
        </div>
      )
    })

    return (
      <div className="mx-grid">
        {items}
        <div className="mx-grid-item" style={{ width, visibility: 'hidden' }} />
      </div>
    );
  }
}

MxGrids.propTypes = {
  contents: PropTypes.array,
  columns: PropTypes.number,
};

export default MxGrids;
