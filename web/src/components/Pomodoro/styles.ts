import { styled } from 'styles';

export const Wrapper = styled('div', {
  height: '100vh',
  maxWidth: '1224px',
  width: '100%',
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

    '@medium': {
      marginTop: '4rem',
      gridTemplateColumns: '1fr',

      '.challengeBoxContainer': {
        marginTop: '4rem',
      },
    },
  },
});
