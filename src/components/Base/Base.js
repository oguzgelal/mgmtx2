import React from 'react';
import PropTypes from 'prop-types';

import { isLoggedIn } from '../../utils/mics';
import MxNavbar from '../../containers/MxNavbar/MxNavbar';

const Base = (props) => {
  const data = props.data || {};

  const navbar = ((data.showNavbar && isLoggedIn(props.user)) ?
    <MxNavbar {...props} /> :
    ''
  );

  return (
    <div>
      {navbar}
      {props.children}
    </div>
  );
};

Base.propTypes = {
  children: PropTypes.object.isRequired,
  data: PropTypes.object,
  user: PropTypes.object,
};

export default Base;
