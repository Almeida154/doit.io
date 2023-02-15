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
    flex: 1,
  },
  button: {
    cursor: 'pointer',
  },
  'h1, h2, h3, h4, h5, h6': {
    color: '$title',
  },
  'body, input, textarea, button': {
    font: "400 1rem 'Poppins', sans-serif",
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  html: {
    '@large': {
      fontSize: '93.75%',
    },
    '@medium': {
      fontSize: '87.5%',
    },
  },
});
