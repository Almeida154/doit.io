import { styled } from 'styles';

export const Wrapper = styled('div', {
  minHeight: '100vh',
  maxWidth: '1436px',
  margin: '0 auto',
  position: 'relative',

  display: 'flex',

  '@small': {
    paddingBottom: '80px',
  },
});
