import React from 'react';
import Particles from 'react-tsparticles';
import { css } from '@emotion/react';
import { zIndex } from '../styles/settings';

const options = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: ['#f30e05', '#f5cb06', '#f46706', '#2058c8'],
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: 10,
      random: true,
      animation: {
        enable: true,
        speed: 8,
        minimumValue: 0.1,
        sync: false,
      },
    },
    lineLinked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: true,
      straight: false,
      outMode: 'bounce',
      bounce: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  detectRetina: true,
};

const particles = css`
  & .canvas {
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${zIndex.particlesBackground};
  }
`;

const ParticlesBackground = () => {
  return (
    <Particles canvasClassName={'canvas'} options={options} css={particles} />
  );
};

export default ParticlesBackground;
