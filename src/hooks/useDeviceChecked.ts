import { useState, useLayoutEffect } from 'react';
import throttle from '../utils/throttle';
import { layout } from '../styles/settings';

type Device = 'desktop' | 'mobile';

const useDeviceChecked = (): Device => {
  const [device, setDevice] = useState<Device>(
    typeof window !== 'undefined' && window.innerWidth >= layout.threshold
      ? 'desktop'
      : 'mobile'
  );

  useLayoutEffect(() => {
    const updateDevice = () => {
      setDevice(
        typeof window !== 'undefined' && window.innerWidth >= layout.threshold
          ? 'desktop'
          : 'mobile'
      );
    };
    const throttledUpdateDevice = throttle(updateDevice, 1000);
    window.addEventListener('resize', throttledUpdateDevice);

    return () => window.removeEventListener('resize', throttledUpdateDevice);
  }, []);

  return device;
};

export default useDeviceChecked;
