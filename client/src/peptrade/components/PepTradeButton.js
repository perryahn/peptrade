import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { PepTradeRoulette } from './PepTradeRoulette';

const propTypes = {
  tapped: PropTypes.bool.isRequired,
  setTapped: PropTypes.func.isRequired,
  sp500feed: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = {
  sp500feed: [],
};

export const PepTradeButton = ({
  tapped, setTapped, sp500feed,
}) => (
  <motion.div
    className="pa_pepTrade_button"
    animate={tapped ? {
      scale: 2.5,
    } : {
      scale: [1, 1.01, 1],
    }}
    transition={tapped ? null : {
      duration: 1,
      ease: 'easeInOut',
      times: [0, 0.5, 1],
      yoyo: Infinity,
    }}
    onTap={() => setTapped(true)}
  >
    <div className="pa_pepTrade_button_text">
      {
        tapped ? (
          <PepTradeRoulette
            sp500feed={sp500feed}
            startRoulette={tapped}
          />
        ) : (
          <span>Trade!</span>
        )
      }
    </div>
  </motion.div>
);

PepTradeButton.propTypes = propTypes;
PepTradeButton.defaultProps = defaultProps;

export default PepTradeButton;
