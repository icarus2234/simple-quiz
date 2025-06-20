import { useEffect } from 'react';

export const useTimeout = (callback: () => void, timeout: number): void => {
  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, timeout);

    return () => clearTimeout(timer);
  }, [callback, timeout]);
};
