import { styled } from 'styles';

export const Overlay = styled('div', {
  background: 'rgba(242, 243, 245, 0.8)',
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
  background: 'red',
  width: '100%',
  maxWidth: '400px',
  padding: '2rem 3rem',
  borderRadius: '5px',
  boxShadow: '0 0 60 rgba(0, 0, 0, 0.05)',
  textAlign: 'center',
  position: 'relative',

  header: {
    fontSize: '8.75rem',
    fontWeight: 600,
    color: 'blue',
    background: "url('/icons/level-up-bg.svg') no-repeat center",
    backgroundSize: 'contain',
  },

  strong: {
    fontSize: '2.25rem',
    color: 'green',
  },

  p: {
    fontSize: '1.25rem',
    color: 'violet',
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
