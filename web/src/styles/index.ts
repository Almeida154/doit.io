import { createStitches } from '@stitches/react';

export const { styled, globalCss, getCssText, createTheme, theme } = createStitches({
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
  media: {
    small: '(max-width: 640px)',
    medium: '(max-width: 768px)',
    large: '(max-width: 1224px)',
  },
});
