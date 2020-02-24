import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

const defaultProps = {
  label: '',
  text: '',
  children: null,
  className: '',
};

export const Badge = ({
  label, text, children, className,
}) => (
  <div className={`pa_badge${className ? ` ${className}` : ''}`}>
    <div className="pa_biggish">
      <span>{label}</span>
    </div>
    <div className="pa_mediumish">
      {
          children || (
            <span>{text}</span>
          )
        }
    </div>
  </div>
);

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;
