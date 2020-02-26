import {
  useEffect, useReducer, useCallback,
} from 'react';

const fetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START': {
      return {
        ...state,
        fetching: true,
        fetched: false,
        error: null,
      };
    }
    case 'FETCH_FAILURE': {
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload,
      };
    }
    case 'FETCH_SUCCESS': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        result: action.payload,
      };
    }
    default:
  }

  return state;
};

export const useFetch = ({
  url, type, data,
  fetchingSyncCallback, resultSyncCallback,
}) => {
  const [{ result, fetching, error }, dispatch] = useReducer(
    fetchReducer,
    {
      result: null,
      fetching: false,
      fetched: false,
      error: null,
    },
  );

  const fetchCallback = useCallback(() => {
    const doIt = async () => {
      const xType = type || 'GET';

      dispatch({ type: 'FETCH_START' });

      fetch(url, {
        body: data,
        method: xType,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }

        return res.json();
      }).then((res) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res });
      }).catch((err) => {
        dispatch({ type: 'FETCH_FAILURE', payload: err });
      });
    };

    doIt();
  }, [
    data, type, url,
  ]);

  useEffect(() => {
    fetchCallback();
  }, [fetchCallback]);

  useEffect(() => {
    if (fetchingSyncCallback) {
      fetchingSyncCallback();
    }
  }, [fetching]);

  useEffect(() => {
    if (resultSyncCallback) {
      resultSyncCallback();
    }
  }, [result]);

  return {
    result,
    fetching,
    error,
  };
};

export default useFetch;
