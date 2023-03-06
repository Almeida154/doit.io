import { styled } from 'styles';

export const Wrapper = styled('div', {
  height: '100vh',
  maxWidth: '1224px',
  margin: '0 auto',
  padding: '2.5rem 2rem',

  display: 'flex',
  flexDirection: 'column',

  section: {
    flex: 1,

    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
    alignContent: 'center',
  },
});
