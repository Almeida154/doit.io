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

  '@small': {
    position: 'fixed',
    left: 0,
    bottom: 0,
    maxWidth: '100%',
    width: '100%',
    background: '$container',
    padding: '1rem 2rem',
    flexDirection: 'row',
    opacity: 1,
  },
});

export const Routes = styled('div', {
  display: 'flex',
  gap: '24px',
  flexDirection: 'column',

  '@small': {
    flexDirection: 'row',
  },
});

export const Item = styled('button', {
  background: 'none',
  position: 'relative',
  border: 'none',
  padding: '1rem',
  lineHeight: 0,
  height: '56px',

  '@small': {
    padding: '0px 8px',
  },

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

          '@small': {
            display: 'none',
          },
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
