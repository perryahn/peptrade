import {
  useEffect,
} from 'react';

export const useInterval = ({
  callback, interval,
}) => {
  useEffect(() => {
    const x = setInterval(() => {
      callback();
    }, interval);

    return () => clearInterval(x);
  }, [callback, interval]);
};

export default useInterval;
