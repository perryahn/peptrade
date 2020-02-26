import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: '',
};

export const Flyout = ({
  children, className,
}) => (
  <div className={`pa_flyout${className ? ` ${className}` : ''}`}>
    {children}
  </div>
);

Flyout.propTypes = propTypes;
Flyout.defaultProps = defaultProps;

export default Flyout;
