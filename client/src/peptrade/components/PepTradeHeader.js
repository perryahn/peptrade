import React from 'react';

export const PepTradeHeader = () => (
  <div className="pa_pepTrade_header">
    <div className="pa_pepTrade_header_prompt">
      <span>Make a trade!</span>
    </div>
    <div className="pa_pepTrade_header_explanation">
      <p>
        Hit the button below to buy a random stock!
        The stock will be randomly chosen from the S&P 500.
      </p>
    </div>
  </div>
);

export default PepTradeHeader;
