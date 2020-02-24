import React, { useState, useEffect } from 'react';
import { useFetch } from '../../common/hooks/fetchHooks';
import { PepTradeHeader } from './PepTradeHeader';
import { PepTradeButton } from './PepTradeButton';

export const PepTrade = () => {
  const { result: sp500feed } = useFetch({
    url: '/Api/sp500',
  });

  const [tapped, setTapped] = useState(false);

  useEffect(() => {
    return () => (
      console.log(123)
    )
  }, []);

  return (
    <div className="pa_pepTrade">
      {
        !tapped && (
          <PepTradeHeader />
        )
      }
      <PepTradeButton
        tapped={tapped}
        setTapped={setTapped}
        sp500feed={sp500feed}
      />
    </div>
  );
};

export default PepTrade;
