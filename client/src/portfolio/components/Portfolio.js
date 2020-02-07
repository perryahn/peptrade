import React from 'react';
import { PortfolioBalance } from './PortfolioBalance';
import { PortfolioBuyingPower } from './PortfolioBuyingPower';


export const Portfolio = () => {
  return (
    <div className="pa_portfolio">
      <PortfolioBalance />
      <PortfolioBuyingPower />
    </div>
  );
};

export default Portfolio;
