import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useFetch } from '../../common/hooks/fetchHooks';

import { Head } from './head/Head';
import { Body } from './body/Body';

import {
  setView,
} from '../actions/homeActions';

import {
  setAccount, setAccountActivities, setPositions,
} from '../../account/actions/accountActions';

const propTypes = {
  match: PropTypes.object.isRequired,
};

const defaultProps = {
};

export const Main = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setView(match.params.view || 'peptrade'));
  }, [match.params.view]);

  const { result: accountData } = useFetch({
    url: '/Api/Account',
  });

  const { result: activityData } = useFetch({
    url: '/Api/Activities',
  });

  const { result: positionData } = useFetch({
    url: '/Api/Positions',
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

  useEffect(() => {
    if (positionData) {
      dispatch(setPositions(positionData));
    }
  }, [positionData]);

  return (
    <div id="Main">
      <Head />
      <Body />
    </div>
  );
};

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
