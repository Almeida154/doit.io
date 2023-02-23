import { styled, theme } from 'styles';

export const Wrapper = styled('div', {
  height: '100%',
  background: '$container',
  borderRadius: '5px',
  padding: '1.5rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});

export const NotActive = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  strong: {
    fontSize: '1.5rem',
    fontWeight: 500,
    lineHeight: '1.8rem',
  },

  p: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    lineHeight: '1.4rem',
    maxWidth: '70%',
    marginTop: '3rem',
    gap: '16px',
  },
});

export const Active = styled('div', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',

  header: {
    color: '$text',
    fontWeight: 600,
    fontSize: '1.25rem',
    padding: '0 2rem 1.5rem',
    borderBottom: '1px solid $text',
  },

  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    strong: {
      fontWeight: 600,
      fontSize: '2rem',
      color: '$title',
      margin: '1.5rem 0 1rem',
    },

    p: {
      lineHeight: '1.5rem',
    },
  },

  footer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
  },
});
