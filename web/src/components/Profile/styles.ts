import { styled } from 'styles';

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',

  div: {
    marginLeft: '1.5rem',

    strong: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '$title',
    },

    p: {
      fontSize: '1rem',
      marginTop: '0.5rem',

      img: {
        marginRight: '0.5rem',
      },
    },
  },
});

export const Picture = styled('img', {
  width: '5.5rem',
  height: '5.5rem',
  borderRadius: '50%',
});
