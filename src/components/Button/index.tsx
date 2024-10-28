import React from "react";
import { Container, Title, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {};

export function Button({ ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>Nova refeição</Title>
      <Icon />
    </Container>
  );
}
