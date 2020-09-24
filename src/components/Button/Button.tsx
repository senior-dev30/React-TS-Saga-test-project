import React, { FC } from 'react';
import { ButtonStyle, Text } from './styles';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Button: FC<Props> = props => {
  return (
    <ButtonStyle onClick={props.onClick}>
      <Text>{props.children}</Text>
    </ButtonStyle>
  );
};
