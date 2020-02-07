import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

const defaultProps = {
  children: null,
};

export const HeadItem = ({
  children,
}) => (
  <div className="pa_headItem">
    { children }
  </div>
);

HeadItem.propTypes = propTypes;
HeadItem.defaultProps = defaultProps;

export default HeadItem;
