import React from 'react';
import { useSelector } from 'react-redux';
import { Badge } from '../../common/components/Badge';
import { dollar } from '../../common/utils/formatting';

export const PortfolioBuyingPower = () => {
  const { account } = useSelector((state) => state.account);

  return (
    <div className="pa_portfolio_badge">
      <Badge label="Buying Power">
        <span>{dollar((account || {}).buying_power)}</span>
      </Badge>
    </div>
  );
};

export default PortfolioBuyingPower;
