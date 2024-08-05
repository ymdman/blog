import type { Metadata } from 'next';
import { css } from '../../styled-system/css';
import { Stack } from '../../styled-system/jsx';
import { ParticlesBackground } from '../components/ParticlesBackground';

export const metadata: Metadata = {
  title: 'ymdman.com',
  description: '',
};

export default function Home() {
  return (
    <>
      <p
        className={css({
          fontSize: { base: '3xl', desktop: '6xl' },
          fontWeight: 'bold',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'max-content',
        })}
      >
        Welcome to this site.
      </p>
      <ParticlesBackground />
    </>
  );
}
