import { useState, useLayoutEffect } from 'react';
import throttle from '../utils/throttle';
import { layout } from '../styles/settings';

type Device = 'desktop' | 'mobile';

const useDeviceChecked = (): Device => {
  const [device, setDevice] = useState<Device>(
    window.innerWidth >= layout.threshold ? 'desktop' : 'mobile'
  );

  useLayoutEffect(() => {
    const updateDevice = () => {
      setDevice(window.innerWidth >= layout.threshold ? 'desktop' : 'mobile');
    };
    window.addEventListener('resize', throttle(updateDevice, 1000));

    return () => window.removeEventListener('resize', updateDevice);
  }, []);

  return device;
};

export default useDeviceChecked;
