import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFetch } from '../../common/hooks/fetchHooks';
import { PepTradeHeader } from './PepTradeHeader';
import { PepTradeButton } from './PepTradeButton';
import {
  setSpFeed, setSpFeedFetching, resetRoulette,
} from '../actions/pepTradeActions';

export const PepTrade = () => {
  const dispatch = useDispatch();

  const { startedRoulette } = useSelector((state) => state.pepTrade);

  const { result, fetching } = useFetch({
    url: '/Api/sp500',
    fetchingSyncCallback: () => dispatch(setSpFeedFetching(fetching)),
    resultSyncCallback: () => dispatch(setSpFeed(result)),
  });

  // reset roulette on cleanup
  useEffect(() => () => dispatch(resetRoulette()), []);

  return (
    <div className="pa_pepTrade">
      {
        !startedRoulette && (
          <PepTradeHeader />
        )
      }
      <PepTradeButton />
    </div>
  );
};

export default PepTrade;
