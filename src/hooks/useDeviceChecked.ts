import { useState, useLayoutEffect } from 'react';
import { layout } from '../styles/settings';

type Device = 'desktop' | 'mobile';

const useDeviceChecked = (): Device => {
  const [device, setDevice] = useState<Device>(
    typeof window !== 'undefined' && window.innerWidth >= layout.threshold
      ? 'desktop'
      : 'mobile'
  );

  useLayoutEffect(() => {
    const mql = window.matchMedia(`(max-width: ${layout.threshold}px)`);

    const updateDevice = (e: MediaQueryListEvent) => {
      setDevice(e.matches ? 'mobile' : 'desktop');
    };

    mql.addEventListener('change', updateDevice);

    return () => mql.removeEventListener('change', updateDevice);
  }, []);

  return device;
};

export default useDeviceChecked;
