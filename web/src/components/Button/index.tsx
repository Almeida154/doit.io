import React from 'react';

import { Wrapper } from './styles';
import { ButtonProperties } from './types';

const Button: React.FC<ButtonProperties> = ({ text, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <p>{text}</p>
    </Wrapper>
  );
};

export { Button };
