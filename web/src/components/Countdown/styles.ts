import { styled } from 'styles';

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Rajdhani',
  fontWeight: 600,
  color: 'red',

  '& > div': {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    background: 'brown',
    boxShadow: ' 0 0 60px rgba(0, 0, 0, 0.05)',
    borderRadius: '5px',
    fontSize: '8.5rem',
    textAlign: 'center',

    span: {
      flex: 1,
      '&:first-child': { borderRight: '1px solid #f0f1f3' },
      '&:last-child': { borderLeft: '1px solid #f0f1f3' },
    },
  },

  '& > span': {
    fontSize: '6.25rem',
    margin: '0 0.5rem',
  },
});
