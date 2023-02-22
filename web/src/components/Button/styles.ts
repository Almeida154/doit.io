import { styled } from 'styles';

export const Wrapper = styled('button', {
  background: '$container',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px 16px',
  borderRadius: '8px',
  transition: 'background .1s',

  '&:hover': {
    background: '$background',
  },
});

export const Content = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    iconPosition: {
      left: {
        flexDirection: 'row-reverse',
        svg: {
          marginRight: '16px',
        },
      },
      right: {
        flexDirection: 'row',
        svg: {
          marginLeft: '16px',
        },
      },
    },
  },
});

export const Text = styled('p', {
  color: '$title',
  fontSize: '20px',
  fontWeight: 500,
});
