import React, { ReactNode } from 'react';

export type ButtonProperties = {
  text?: string;
  isLoading?: boolean;
  iconPosition?: 'left' | 'right';
  icon?: () => ReactNode;
} & React.ComponentPropsWithoutRef<'button'>;
