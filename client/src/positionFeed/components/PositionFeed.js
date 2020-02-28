import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SlideFeed } from '../../common/components/SlideFeed';
import { PositionFeedSlide } from './PositionFeedSlide';
import { useFetch } from '../../common/hooks/fetchHooks';
import {
  setPositions,
} from '../../account/actions/accountActions';

export const PositionFeed = () => {
  const dispatch = useDispatch();
  const { positions } = useSelector((state) => state.account);

  const height = 100;
  const width = 300;

  useFetch({
    url: '/Api/Positions',
    resultSyncCallback: (data) => dispatch(setPositions(data)),
  });

  return (
    <div className="pa_positionFeed">
      <SlideFeed
        interval={4000}
        height={height}
        width={width}
        className="pa_positionFeed_slideFeed"
      >
        {
          (positions || []).map((c) => (
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
