import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const propTypes = {
  sp500feed: PropTypes.arrayOf(PropTypes.object),
  startRoulette: PropTypes.bool,
};

const defaultProps = {
  sp500feed: [],
  startRoulette: false,
};

export const PepTradeRoulette = ({
  sp500feed, startRoulette,
}) => {
  const [currIdx, setCurrIdx] = useState(
    Math.floor(Math.random() * (sp500feed.length - 1)),
  );

  const [ticks, setTicks] = useState(
    Math.floor(30 + Math.random() * 10),
  );

  const [interval, setInterval] = useState(50);

  const [startPhase, setStartPhase] = useState(0);

  useEffect(() => {
    if (startRoulette && startPhase < 2) {
      setTimeout(() => {
        setStartPhase(startPhase + 1);
      }, startPhase === 0 ? 1500 : 1500 / 2);
    }
  }, [startRoulette, sp500feed, ticks, startPhase]);

  useEffect(() => {
    if (startPhase === 2) {
      if (ticks > 0) {
        setTimeout(() => {
          setTicks(ticks - 1);
          setCurrIdx(Math.floor(Math.random() * (sp500feed.length - 1)));
          setInterval(Math.min(700, interval
            + (ticks < 5 ? 200 : (
              Math.max(0, 30 - ticks / 2)
            ))));
        }, interval);
      }
    }
  }, [startPhase, sp500feed, ticks]);

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
          sp500feed.length > 0 && (
            <span>{sp500feed[currIdx].Name}</span>
          )
        )
      }
    </div>
  );
};

PepTradeRoulette.propTypes = propTypes;
PepTradeRoulette.defaultProps = defaultProps;

export default PepTradeRoulette;
