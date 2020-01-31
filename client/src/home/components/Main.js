import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import homeContext from '../contexts/homeContext';

const propTypes = {};

export const Main = () => {
  const test = useContext(homeContext);

  return (
    <div>
      <span>Testss</span>
    </div>
  );
};

Main.propTypes = propTypes;

export default Main;
