import { styled } from 'styles';

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',

  span: {
    fontSize: '14px',

    '&.currentExperience': {
      position: 'absolute',
      top: '12px',
      transform: 'translateX(-50%)',
      transition: 'left 0.4s',
      left: '50%',
    },
  },

  '& > div': {
    flex: 1,
    height: '4px',
    borderRadius: '4px',
    background: '$container',
    margin: '0 1.5rem',
    position: 'relative',
  },

  '& > div > div': {
    height: '4px',
    borderRadius: '4px',
    background: '$text',
    transition: 'width 0.4s',
  },
});
