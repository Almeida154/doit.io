import { transparentize } from 'polished';
import { styled, theme } from 'styles';

const { background } = theme.colors;

export const Overlay = styled('div', {
  background: transparentize(0.4, background.value),
  backdropFilter: 'blur(4px)',
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Wrapper = styled('div', {
  background: '$background',
  width: '100%',
  maxWidth: '400px',
  padding: '2rem 3rem',
  borderRadius: '5px',
  textAlign: 'center',
  position: 'relative',

  header: {
    fontSize: '8.75rem',
    fontWeight: 600,
    color: '$title',
    backgroundSize: 'contain',
  },

  strong: {
    fontSize: '2.25rem',
    color: '$title',
  },

  p: {
    fontSize: '1.25rem',
    color: '$text',
    marginTop: '0.25rem',
  },

  button: {
    position: 'absolute',
    right: '0.5rem',
    top: '0.5rem',
    background: 'none',
    border: 0,
    fontSize: '0px',
  },
});
