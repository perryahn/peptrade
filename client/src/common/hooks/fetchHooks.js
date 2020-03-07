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
  doneCallback,
  manuallyFetch = false,
}) => {
  const [{
    result, fetching, fetched, error,
  }, dispatch] = useReducer(
    fetchReducer,
    {
      result: null,
      fetching: false,
      fetched: false,
      error: null,
    },
  );

  const fetchCallback = useCallback((abortController = new AbortController()) => {
    const doIt = async () => {
      const xType = type || 'GET';

      dispatch({ type: 'FETCH_START' });

      let body = null;
      let contentType = null;

      if (typeof (data) === 'object') {
        body = JSON.stringify(data);
        contentType = 'application/json';
      } else if (
        typeof (data) === 'boolean'
          || typeof (data) === 'number'
          || typeof (data) === 'string'
      ) {
        body = data;
        contentType = 'text/plain';
      }

      fetch(url, {
        body,
        method: xType,
        headers: {
          'Content-Type': contentType,
        },
        signal: abortController.signal,
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
    const abortController = new AbortController();

    if (!manuallyFetch) {
      fetchCallback(abortController);
    }

    return () => abortController.abort();
  }, [fetchCallback, manuallyFetch]);

  useEffect(() => {
    if (fetchingSyncCallback) {
      fetchingSyncCallback(fetching);
    }
  }, [fetching]);

  useEffect(() => {
    if (doneCallback && fetched) {
      doneCallback(result);
    }
  }, [fetched, result]);

  useEffect(() => {
    if (resultSyncCallback) {
      resultSyncCallback(result);
    }
  }, [result]);

  return {
    result,
    fetching,
    fetched,
    error,
    doFetch: fetchCallback,
  };
};

export default useFetch;
