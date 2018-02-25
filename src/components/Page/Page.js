import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Scroller from '../Scroller/Scroller'
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
    )}>

      {
        props.sidebar &&
        <div
          style={{ width: props.sidebarSize }}
          className={cx(
            'mx-page--sidebar'
          )}
        >
          <Scroller hidden>
            {props.sidebar}
          </Scroller>
        </div>
      }

      {
        props.contents &&
        <div
          className={cx(
            'mx-page--contents',
            { 'mx-page--contents-center': props.center }
          )}
        >
          <Scroller class={cx({ 'mx-page--center': props.center })}>
            {props.contents}
          </Scroller>
        </div>
      }


    </div>
  );
};

Page.propTypes = {
  data: PropTypes.object,
  user: PropTypes.object,
  center: PropTypes.bool,
  sidebarSize: PropTypes.number,
  sidebar: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  contents: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ])
};

export default Page;
