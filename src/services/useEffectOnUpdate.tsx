import { useRef, useEffect } from 'react';

export default function useEffectOnUpdate(fn: () => void, deps: any[]) {
  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    fn();
    // eslint-disable-next-line
  }, deps);
}