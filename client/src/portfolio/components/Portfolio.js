import React from 'react';
import { useDispatch } from 'react-redux';
import { PortfolioBalance } from './PortfolioBalance';
import { PortfolioBuyingPower } from './PortfolioBuyingPower';
import { useFetch } from '../../common/hooks/fetchHooks';
import {
  setAccountActivities, setPositions,
} from '../../account/actions/accountActions';

export const Portfolio = () => {
  const dispatch = useDispatch();

  useFetch({
    url: '/Api/Activities',
    resultSyncCallback: (data) => dispatch(setAccountActivities(data)),
  });

  return (
    <div className="pa_portfolio">
      <PortfolioBalance />
      <PortfolioBuyingPower />
    </div>
  );
};

export default Portfolio;
