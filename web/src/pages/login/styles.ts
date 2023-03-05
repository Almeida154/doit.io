import { styled } from 'styles';

export const Wrapper = styled('div', {
  maxWidth: '1224px',
  minHeight: '100vh',
  margin: '0 auto',
  padding: '2.5rem 2rem',

  display: 'flex',
  gap: '48px',

  '@medium': {
    flexDirection: 'column',
    padding: '16rem 2rem 2.5rem 2rem',
    gap: '96px',
  },

  background: '#000',
});

export const Content = styled('div', {
  flex: 1.5,
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',

  img: {
    maxWidth: '100%',
  },

  '& > img': {
    position: 'absolute',
    top: '-5rem',
    right: 0,

    '@medium': {
      top: '-2rem',
      right: '2rem',
    },
  },

  '& > p': {
    fontSize: '24px',
    lineHeight: '36px',
    marginTop: '48px',
    fontWeight: 300,
  },

  '@medium': {
    position: 'static',

    '& > svg': {
      width: '240px',
    },
  },
});

export const AppAds = styled('div', {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& > img': {
    width: '305px',
    height: 'auto',

    '@medium': {
      width: '180px',
    },
  },
});

export const Actions = styled('div', {
  marginTop: '80px',
  display: 'flex',
  gap: '24px',
  alignItems: 'center',
  flexWrap: 'wrap',
});
