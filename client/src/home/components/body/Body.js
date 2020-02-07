import React, { useEffect } from 'react';
import { BodyMenu } from './BodyMenu';
import { useFetch } from '../../../common/hooks/fetchHooks';
import { Portfolio } from '../../../portfolio/components/Portfolio';

export const Body = () => {
  return (
    <div id="Body">
      <BodyMenu />
      <div className="pa_bodyMain">
        <Portfolio />
      </div>
    </div>
  );
};

export default Body;
