'use client';

import { useEffect, useState } from 'react';
import { loadSlim } from '@tsparticles/slim';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { css } from '../../../styled-system/css';

export function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className={css({ zIndex: 'particlesBackground' })}>
      {init && (
        <Particles
          options={{
            fpsLimit: 120,
            particles: {
              color: {
                value: [
                  '#f30e05',
                  '#fbf503',
                  '#f46706',
                  '#2058c8',
                  '#52e506',
                  '#2c0f3c',
                  '#0a603f',
                  '#cab152',
                ],
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 5,
                straight: false,
              },
              number: {
                value: 10,
              },
              opacity: {
                value: 0.6,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 5, max: 38 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  );
}
