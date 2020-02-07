import React from 'react';
import { useSelector } from 'react-redux';
import { Badge } from '../../common/components/Badge';
import { dollar } from '../../common/utils/formatting';

export const PortfolioBalance = () => {
  const { account } = useSelector((state) => state.account);

  return (
    <div className="pa_portfolio_badge">
      <Badge label="Equity">
        <span>{dollar(account.portfolio_value)}</span>
      </Badge>
    </div>
  );
};

export default PortfolioBalance;
