import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFetch } from '../../common/hooks/fetchHooks';

import { Head } from './head/Head';
import { Body } from './body/Body';
import { setAccount, setAccountActivities } from '../../account/actions/accountActions';

const propTypes = {};

export const Main = () => {
  const dispatch = useDispatch();

  const { result: accountData } = useFetch({
    url: '/Api/Account',
  });

  const { result: activityData } = useFetch({
    url: '/Api/Activities',
  });

  useEffect(() => {
    if (accountData) {
      dispatch(setAccount(accountData));
    }
  }, [accountData]);

  useEffect(() => {
    if (activityData) {
      dispatch(setAccountActivities(activityData));
    }
  }, [activityData]);

  return (
    <div id="Main">
      <Head />
      <Body />
    </div>
  );
};

Main.propTypes = propTypes;

export default Main;
