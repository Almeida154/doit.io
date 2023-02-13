import { HTMLProps } from 'react';

export type ButtonProperties = {
  text: string;
} & HTMLProps<HTMLButtonElement>;
