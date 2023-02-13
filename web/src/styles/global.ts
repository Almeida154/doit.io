import { globalCss } from 'styles';

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    fontSmooth: 'always',
    '-webkit-font-smoothing': 'antialiased',
  },
  body: {
    background: '$background',
    color: '$text',
  },
  button: {
    cursor: 'pointer',
  },
  'h1, h2, h3, h4, h5, h6': {
    color: '$title',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
});
