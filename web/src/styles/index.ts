import { createStitches } from '@stitches/react';

export const { styled, globalCss, getCssText, createTheme } = createStitches({
  theme: {
    fonts: {
      poppins: 'Poppins',
      rajdhani: 'Rajdhani',
    },
    colors: {
      title: '#FFFFFF',
      text: '#666666',
      background: '#000000',
      container: '#1A1A1A',
    },
  },
});

export const darkTheme = createTheme('dark-theme', {
  colors: {
    title: '#FFFFFF',
    text: '#666666',
    background: '#000000',
    container: '#1A1A1A',
  },
});

export const lightTheme = createTheme('light-theme', {
  colors: {
    title: '#000000',
    text: '#eff333',
    background: '#eff333',
    container: '#eff333',
  },
});
