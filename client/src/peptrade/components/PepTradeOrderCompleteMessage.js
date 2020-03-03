import React from 'react';
import { useSelector } from 'react-redux';

export const PepTradeOrderCompleteMessage = () => {
  const { order } = useSelector((state) => state.pepTrade);

  return (
    <div className="pa_pepTrade_orderCompleteMessage">
      <div className="pa_biggish">Order Placed!</div>
      <div className="pa_smallish">
        <span>
          {`Your order for ${order.symbol} has been placed.`}
        </span>
      </div>
      <div className="pa_smallish">
        <span>
          {`Current Status: ${order.status}`}
        </span>
      </div>
    </div>
  );
};

export default PepTradeOrderCompleteMessage;
