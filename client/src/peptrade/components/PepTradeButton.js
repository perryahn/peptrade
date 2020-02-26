import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { PepTradeRoulette } from './PepTradeRoulette';
import {
  startRoulette, resetRoulette,
} from '../actions/pepTradeActions';


const propTypes = {
};

const defaultProps = {
};

export const PepTradeButton = () => {
  const dispatch = useDispatch();

  const {
    startedRoulette, fetching, spFeed,
  } = useSelector((state) => state.pepTrade);

  const loading = fetching
    || !spFeed
    || spFeed.length === 0;

  return (
    <motion.div
      className={`pa_pepTrade_button${
        loading ? ' pa_pepTrade_button_loading' : ''}`}
      animate={
        loading ? {
          scale: 0.95,
        }
          : startedRoulette ? {
            scale: 2,
          } : {
            scale: [1, 1.015, 1],
          }
      }
      transition={(startedRoulette || loading) ? null : {
        duration: 1,
        ease: 'easeInOut',
        times: [0, 0.5, 1],
        yoyo: Infinity,
      }}
      onTap={() => (loading ? null : dispatch(
        startedRoulette ? resetRoulette() : startRoulette(),
      ))}
    >
      <div className="pa_pepTrade_button_text">
        {
          startedRoulette ? (
            <PepTradeRoulette />
          ) : (
            <span>{loading ? 'Loading...' : 'Trade!'}</span>
          )
        }
      </div>
    </motion.div>
  );
};

PepTradeButton.propTypes = propTypes;
PepTradeButton.defaultProps = defaultProps;

export default PepTradeButton;
