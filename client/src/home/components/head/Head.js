import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HeadLogo } from './HeadLogo';

const propTypes = {};

export const Head = () => (
  <div id="Head">
    <HeadLogo />
  </div>
);

Head.propTypes = propTypes;

export default Head;
