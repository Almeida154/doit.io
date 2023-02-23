import { styled } from 'styles';

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',

  div: {
    marginLeft: '1.5rem',

    strong: {
      fontSize: '1.5rem',
      lineHeight: '1.5rem',
      fontWeight: 600,
      color: '$title',

      '&.username': {
        fontSize: '1rem',
        fontWeight: 400,
        color: '$text',
      },
    },

    p: {
      color: '$title',
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      fontSize: '1rem',
      marginTop: '0.5rem',
      gap: '0.2rem',
    },
  },
});

export const Picture = styled('img', {
  width: '5.5rem',
  height: '5.5rem',
  borderRadius: '8px',
});
