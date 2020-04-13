import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { useInterval } from '../hooks/utilityHooks';

const propTypes = {
  interval: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

const defaultProps = {
  interval: 950,
  children: null,
  className: '',
  height: 300,
  width: 300,
};

export const SlideFeed = ({
  interval, children, className,
  height, width,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);

  useInterval({
    callback: () => {
      setActiveIdx(
        (activeIdx + 1) % children.length,
      );
    },
    interval,
  });

  const variants = {
    enter: {
      x: -1000,
      y: -(height / 2),
      opacity: 0,
    },
    center: {
      x: -(width / 2),
      y: -(height / 2),
      opacity: 1,
    },
    exit: {
      x: 1000,
      y: -(height / 2),
      opacity: 0,
    },
  };

  return (
    <div
      className={`pa_slideFeed${className ? ` ${className}` : ''}`}
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
    >
      {
        children.length > 0 && (
          <AnimatePresence initial={false}>
            <motion.div
              key={activeIdx}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: {
                  type: 'spring',
                  stiffness: 100,
                  damping: 200,
                },
              }}
            >
              {
                children[activeIdx]
              }
            </motion.div>
          </AnimatePresence>
        )
      }
    </div>
  );
};

SlideFeed.propTypes = propTypes;
SlideFeed.defaultProps = defaultProps;

export default SlideFeed;
