import React from 'react';
import type * as Stitches from '@stitches/react';

import { Wrapper, Content, Text } from './styles';
import { ButtonProperties } from './types';

const Button: React.FC<ButtonProperties> = ({
  text,
  iconPosition,
  icon,
  ...rest
}) => {
  return (
    <Wrapper {...rest}>
      <Content iconPosition={iconPosition}>
        <Text>{text}</Text>
        {icon && icon()}
      </Content>
    </Wrapper>
  );
};

export { Button };
