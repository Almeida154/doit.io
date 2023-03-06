import { styled } from 'styles';

export const Wrapper = styled('div', {
  background: 'linear-gradient($container, transparent)',
  maxWidth: '112px',
  padding: '2rem 1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',

  '@infinity': {
    margin: '2.5rem',
    borderRadius: '8px',
  },
});

export const Routes = styled('div', {
  display: 'flex',
  gap: '24px',
  flexDirection: 'column',
});

export const Item = styled('button', {
  background: 'none',
  position: 'relative',
  border: 'none',
  padding: '1rem',
  lineHeight: 0,
  height: '56px',

  variants: {
    isActive: {
      true: {
        color: '$title',

        '&::before': {
          content: '',
          position: 'absolute',
          width: '2px',
          height: '56px',
          background: '$title',
          left: '-16px',
          top: 0,
          borderRadius: '0 8px 8px 0',
        },
      },
      false: {
        color: '$text',
      },
    },

    exit: {
      true: {
        height: 'auto',
        background: '#ff123a20',
        borderRadius: '8px',
        padding: '.5rem',

        '&:hover': {
          background: '#ff123a40',
        },
      },
    },
  },
});
