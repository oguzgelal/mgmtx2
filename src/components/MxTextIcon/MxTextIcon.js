import React from 'react';
import PropTypes from 'prop-types';

import './MxTextIcon.scss';

const MxTextIcon = props => (
  <div className="mx-text-icon">{props.text}</div>
);

MxTextIcon.propTypes = {
  text: PropTypes.string
};

export default MxTextIcon;
