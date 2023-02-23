import { styled, theme } from 'styles';

const { container, title, text, background } = theme.colors;

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '3.5rem 0',
  paddingBottom: '1rem',
  borderBottom: `1px solid ${container}`,
  fontWeight: 500,

  span: {
    color: text,

    '&:first-child': {
      fontSize: '1.25rem',
    },

    '&:last-child': {
      fontSize: '1.5rem',
    },
  },
});
