import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFetch } from '../../common/hooks/fetchHooks';
import { PepTradeHeader } from './PepTradeHeader';
import { PepTradeButton } from './PepTradeButton';
import { PepTradeOrderCompleteMessage } from './PepTradeOrderCompleteMessage';
import {
  setSpFeed, setSpFeedFetching, resetRoulette,
  orderComplete,
} from '../actions/pepTradeActions';

export const PepTrade = () => {
  const dispatch = useDispatch();

  const {
    startedRoulette, rouletteDone, spFeed, currIdx,
    order,
  } = useSelector((state) => state.pepTrade);

  useFetch({
    url: '/Api/sp500',
    fetchingSyncCallback: (data) => dispatch(setSpFeedFetching(data)),
    resultSyncCallback: (data) => dispatch(setSpFeed(data)),
  });

  const { doFetch: purchase } = useFetch({
    url: '/Api/pepTradeOrder',
    type: 'POST',
    manuallyFetch: true,
    data: {
      symbol: spFeed && spFeed.length > 0
        ? spFeed[currIdx].Symbol : null,
    },
    doneCallback: (data) => dispatch(orderComplete(data)),
  });

  useEffect(() => {
    if (rouletteDone) {
      purchase();
    }
  }, [rouletteDone, currIdx]);

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
      {
        order && (
          <PepTradeOrderCompleteMessage />
        )
      }
    </div>
  );
};

export default PepTrade;
