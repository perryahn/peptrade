import React from 'react';
// import PropTypes from 'prop-types';
import { HeadLogo } from './HeadLogo';
import { PositionFeed } from '../../../positionFeed/components/PositionFeed';

const propTypes = {};

export const Head = () => (
  <div id="Head">
    <HeadLogo />
    <PositionFeed />
  </div>
);

Head.propTypes = propTypes;

export default Head;
