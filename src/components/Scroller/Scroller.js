import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import PerfectScrollbar from 'react-perfect-scrollbar';

import 'react-perfect-scrollbar/dist/css/styles.css';
import './Scroller.scss';

const Scroller = (props) => {

  const options = {};
  if (props.suppressScrollX) { options.suppressScrollX = props.suppressScrollX; }
  if (props.suppressScrollY) { options.suppressScrollY = props.suppressScrollY; }

  return (
    <PerfectScrollbar
      {...props}
      option={options}
      className={cx(
        'mx-scroller',
        { 'mx-scroller--hidden': props.hidden },
        { [props.class]: !!props.class }
      )}
    >
      {props.children}
    </PerfectScrollbar>
  );
};

Scroller.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  class: PropTypes.string,
  hidden: PropTypes.bool,
  suppressScrollX: PropTypes.bool,
  suppressScrollY: PropTypes.bool,
};

export default Scroller;
