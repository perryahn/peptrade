import React from 'react';
import { useSelector } from 'react-redux';
import { SlideFeed } from '../../common/components/SlideFeed';
import { PositionFeedSlide } from './PositionFeedSlide';

export const PositionFeed = () => {
  const { positions } = useSelector((state) => state.account);

  const height = 100;
  const width = 300;

  return (
    <div className="pa_positionFeed">
      <SlideFeed
        interval={4000}
        height={height}
        width={width}
        className="pa_positionFeed_slideFeed"
      >
        {
          positions.map((c) => (
            <PositionFeedSlide
              key={c.symbol}
              position={c}
              height={height}
              width={width}
            />
          ))
        }
      </SlideFeed>
    </div>
  );
};

export default PositionFeed;
