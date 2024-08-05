import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // // Files to exclude
  exclude: [],

  // presets: [],

  minify: true,

  browserslist: ['last 2 versions', 'not dead', 'not < 2%'],

  jsxFramework: 'react',

  globalCss: {
    html: {
      height: '100%',
    },

    body: {
      fontFamily:
        '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
      height: '100%',
      fontSize: 'md',
      lineHeight: 'md',
      color: 'font.primary',
      _osDark: {
        color: 'font.secondary',
        backgroundColor: 'background.secondary',
      },
    },

    svg: {
      fill: 'currentColor',
    },
  },

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          theme: { value: '{colors.blue.700}' },
          font: {
            primary: { value: '{colors.neutral.800}' },
            secondary: { value: '{colors.neutral.100}' },
          },
          background: {
            primary: { value: '{colors.neutral.200}' },
            secondary: { value: '{colors.neutral.900}' },
            tertiary: { value: '{colors.neutral.700}' },
          },
          border: {
            primary: { value: '{colors.neutral.400}' },
            secondary: { value: '{colors.neutral.800}' },
          },
          anchor: { value: '{colors.blue.500}' },
        },
        // fontSizes: {
        //   '5xl': { value: '3.6rem' },
        //   '4xl': { value: '3.2rem' },
        //   '3xl': { value: '2.8rem' },
        //   '2xl': { value: '2.4rem' },
        //   xl: { value: '2rem' },
        //   lg: { value: '1.8rem' },
        //   md: { value: '1.6rem' },
        //   sm: { value: '1.4rem' },
        //   xs: { value: '1.1rem' },
        // },
        lineHeights: {
          sm: { value: 1.3 },
          md: { value: 1.6 },
          lg: { value: 2 },
        },
        zIndex: {
          particlesBackground: { value: -1 },
          header: { value: 1 },
        },
      },
    },

    breakpoints: {
      desktop: '640px',
    },
  },

  patterns: {
    extend: {
      stack: {
        properties: {
          as: { type: 'enum', value: ['header', 'footer', 'ul'] },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
