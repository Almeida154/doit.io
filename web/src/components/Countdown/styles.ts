import { transparentize } from 'polished';
import { styled, theme } from 'styles';

const { text } = theme.colors;

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Rajdhani',
  fontWeight: 600,
  color: '$text',

  '& > div': {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    background: '$container',
    borderRadius: '5px',
    fontSize: '8.5rem',
    textAlign: 'center',

    span: {
      flex: 1,
      '&:first-child': {
        borderRight: `1px solid ${transparentize(0.96, text.value)}`,
      },
      '&:last-child': {
        borderLeft: `1px solid ${transparentize(0.96, text.value)}`,
      },
    },
  },

  '& > span': {
    fontSize: '6.25rem',
    margin: '0 0.5rem',
  },
});
