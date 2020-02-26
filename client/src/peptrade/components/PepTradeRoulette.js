import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { rouletteTick } from '../actions/pepTradeActions';

const propTypes = {
};

const defaultProps = {
};

export const PepTradeRoulette = () => {
  const dispatch = useDispatch();
  const {
    startedRoulette, spFeed,
    ticks, interval, currIdx,
  } = useSelector((state) => state.pepTrade);

  // start in phases, aka ready... go
  const [startPhase, setStartPhase] = useState(0);
  useEffect(() => {
    if (startedRoulette && startPhase < 2) {
      setTimeout(() => {
        setStartPhase(startPhase + 1);
      }, startPhase === 0 ? 1500 : 1500 / 2);
    }
  }, [startedRoulette, spFeed, ticks, startPhase]);

  useEffect(() => {
    if (startPhase >= 2 && ticks > 0) {
      setTimeout(() => {
        dispatch(rouletteTick());
      }, interval);
    }
  }, [startPhase, spFeed, ticks]);

  return (
    <div className="pa_pepTrade_roulette">
      {
        startPhase < 2 ? (
          <motion.div
            animate={{
              translateY: [0, 2, 0],
            }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              times: [0, 0.5, 1],
              yoyo: Infinity,
            }}
          >
            <span>
              {
                startPhase === 0 ? 'Ready...'
                  : 'GO!'
              }
            </span>
          </motion.div>
        ) : (
          spFeed.length > 0 && (
            <span>{spFeed[currIdx].Name}</span>
          )
        )
      }
    </div>
  );
};

PepTradeRoulette.propTypes = propTypes;
PepTradeRoulette.defaultProps = defaultProps;

export default PepTradeRoulette;
