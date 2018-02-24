import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { isLoggedIn } from '../../utils/mics'

import './Page.scss';

const Page = props => {
  const data = props.data || {};
  const navbarExists = data.showNavbar && isLoggedIn(props.user);

  return (
    <div className={cx(
      'pt-app',
      'mx-page',
      { 'mx-page--no-navbar': !navbarExists },
      { 'mx-page--center': props.center }
    )}>
      {props.children}
    </div>
  );
};

Page.propTypes = {
  data: PropTypes.object,
  user: PropTypes.object,
  center: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ])
};

export default Page;
