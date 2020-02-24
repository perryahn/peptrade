import React from 'react';
import { useSelector } from 'react-redux';
import { BodyMenu } from './BodyMenu';
import { Portfolio } from '../../../portfolio/components/Portfolio';
import { PepTrade } from '../../../peptrade/components/PepTrade';

export const Body = () => {
  const { view } = useSelector((state) => state.home);

  let activeComponent = null;

  switch (view) {
    case 'portfolio':
      activeComponent = <Portfolio />;
      break;
    case 'peptrade':
      activeComponent = <PepTrade />;
      break;
    default:
  }

  return (
    <div id="Body">
      <div className="pa_bodyMain">
        <BodyMenu />
        <div className="pa_bodyMain_body">
          {activeComponent}
        </div>
      </div>
    </div>
  );
};

export default Body;
