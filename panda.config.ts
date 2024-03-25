import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          theme: { value: '#f30e05' },
          font: {
            primary: { value: '#242424' },
            secondary: { value: '#f3f3f3' },
          },
          background: {
            primary: { value: '#ececec' },
            secondary: { value: '#151515' },
            tertiary: { value: '#333' },
          },
          border: {
            primary: { value: '#e2e2e2' },
            secondary: { value: '#333' },
          },
          anchor: { value: '#5277fd' },
        },
        fontSizes: {
          '5xl': { value: '3.6rem' },
          '4xl': { value: '3.2rem' },
          '3xl': { value: '2.8rem' },
          '2xl': { value: '2.4rem' },
          xl: { value: '2rem' },
          lg: { value: '1.8rem' },
          md: { value: '1.6rem' },
          sm: { value: '1.4rem' },
          xs: { value: '1.1rem' },
        },
        zIndex: {
          particlesBackground: { value: -1 },
          header: { value: 1 },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
