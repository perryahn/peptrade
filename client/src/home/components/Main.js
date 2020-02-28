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
  setAccount,
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

  useFetch({
    url: '/Api/Account',
    resultSyncCallback: (data) => dispatch(setAccount(data)),
  });

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
