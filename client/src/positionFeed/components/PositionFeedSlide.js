import React from 'react';
import PropTypes from 'prop-types';
import { dollar, percent } from '../../common/utils/formatting';

const propTypes = {
  position: PropTypes.shape({
    symbol: PropTypes.string,
    exchange: PropTypes.string,
    qty: PropTypes.string,
    cost_basis: PropTypes.string,
    market_value: PropTypes.string,
    current_price: PropTypes.string,
    change_today: PropTypes.string,
  }),
  height: PropTypes.number,
  width: PropTypes.number,
};

const defaultProps = {
  position: {},
  height: 300,
  width: 300,
};

export const PositionFeedSlide = ({
  position, height, width,
}) => (
  <div
    className="pa_positionFeed_slide"
    style={{
      height: `${height}px`,
      width: `${width}px`,
    }}
  >
    <div className="pa_positionFeed_slide_box">
      <div className="pa_biggish">
        <span>{position.symbol}</span>
      </div>
      <div className="pa_mediumish">
        <span>
          {`${dollar(position.current_price)} `}
          <span
            className={
              position.change_today > 0 ? 'pa_success'
                : position.change_today < 0 ? 'pa_danger'
                  : ''
            }
          >
            {` (${percent(position.change_today)})`}
          </span>
        </span>
      </div>
    </div>
  </div>
);

PositionFeedSlide.propTypes = propTypes;
PositionFeedSlide.defaultProps = defaultProps;

export default PositionFeedSlide;
